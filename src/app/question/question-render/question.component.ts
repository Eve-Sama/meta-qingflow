import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getComponent } from './config';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, AfterViewInit {
  private pageOrder: string[] = ['00', '04', '01', '02', '03', '05', '06'];
  /** 题目序号 */
  private index: string;

  /** 是否显示题解内容 */
  showAnalyseContent = false;
  /** 是否显示题解按钮 */
  showAnalyseButton = false;
  /** 有些题目是没有参考答案的, 则不显示答案区域 */
  showAnswer: boolean;
  questionMdSrc: string;
  analyseMdSrc: string;

  @ViewChild('questionComponentRef', { read: ViewContainerRef }) questionComponentRef: ViewContainerRef;
  @ViewChild('answerComponentRef', { read: ViewContainerRef }) answerComponentRef: ViewContainerRef;

  // 切换题目
  jump(action: 'previous' | 'next'): void {
    const index = this.pageOrder.findIndex(v => v === this.index);
    if (index === 0 && action === 'previous') {
      alert('当前已经是第一题了');
      return;
    } else if (index === this.pageOrder.length - 1 && action === 'next') {
      alert('当前已经是最后一题了');
      return;
    } else {
      const newPageIndex = this.pageOrder[action === 'previous' ? index - 1 : index + 1];
      this.router.navigate([`../${newPageIndex}`], { relativeTo: this.activatedRoute });
    }
  }

  /** 根据页序号去读取该序号对应的需求描述与题解描述 */
  private setMarkdown(): void {
    this.questionMdSrc = `assets/md/question/${this.index}.md`;
    this.analyseMdSrc = `assets/md/analyse/${this.index}.md`;
  }

  private generateComponent(): void {
    const { question, answer, analyse, title } = getComponent(this.index);
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
    private router: Router,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolve: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.generateComponent();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.showAnalyseContent = false;
      this.index = params.index;
      this.setMarkdown();
      this.generateComponent();
    });
  }
}
