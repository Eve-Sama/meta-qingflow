import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuList } from '@QAA/QAA.config';
import { TaskChidlrenMenu } from 'src/app/utils/interface/task.interface';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
})
export class RenderComponent implements OnInit, AfterViewInit {
  /** 题目序号 */
  private id: string;

  /** 是否显示题解内容 */
  showAnalyseContent = false;
  /** 是否显示题解按钮 */
  showAnalyseButton = false;
  /** 有些题目是没有参考答案的, 则不显示答案区域 */
  showAnswer: boolean;
  questionMdSrc: string;
  analyseMdSrc: string;
  children: TaskChidlrenMenu[] = [];

  @ViewChild('questionComponentRef', { read: ViewContainerRef }) questionComponentRef: ViewContainerRef;
  @ViewChild('answerComponentRef', { read: ViewContainerRef }) answerComponentRef: ViewContainerRef;

  /** 根据页序号去读取该序号对应的需求描述与题解描述 */
  private setMarkdown(): void {
    this.questionMdSrc = `assets/md/describe/${this.id}.md`;
    this.analyseMdSrc = `assets/md/analyse/${this.id}.md`;
  }

  private generateComponent(): void {
    const target = this.children.find(v => v.id === this.id);
    const { question, answer, analyse, title } = target;
    this.showAnalyseButton = analyse;
    this.cdr.detectChanges();
    // 避免变更检查错误
    setTimeout(() => {
      this.generateQuestionComponent(question);
      this.generateAnswerComponent(answer);
    });
    this.title.setTitle(title);
  }

  private generateQuestionComponent(component: any): void {
    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(component);
    this.questionComponentRef.clear();
    const componentRef = this.questionComponentRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  private generateAnswerComponent(component: any): void {
    if (component) {
      this.showAnswer = true;
      this.cdr.detectChanges();
      const componentFactory = this.componentFactoryResolve.resolveComponentFactory(component);
      this.answerComponentRef.clear();
      const componentRef = this.answerComponentRef.createComponent(componentFactory);
      componentRef.changeDetectorRef.detectChanges();
    } else {
      this.showAnswer = false;
    }
  }

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolve: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    this.generateComponent();
  }

  ngOnInit(): void {
    MenuList.forEach(v => this.children.push(...v.children));
    this.activatedRoute.params.subscribe((params: Params) => {
      this.showAnalyseContent = false;
      this.id = params.index;
      this.setMarkdown();
      this.generateComponent();
    });
  }
}
