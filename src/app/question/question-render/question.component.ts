import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getComponent, Page, page } from './config';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, AfterViewInit {
  /** 题目序号 */
  index: string;
  /** 是否显示题解内容 */
  showAnalyseContent = false;
  /** 是否显示题解按钮 */
  showAnalyseButton = false;
  firstRun = true;
  /** 有些题目是没有参考答案的, 则不显示答案区域 */
  showAnswer = true;
  questionMdSrc: string;
  analyseMdSrc: string;
  page = page;
  activePage: Page;

  @ViewChild('questionComponentRef', { read: ViewContainerRef }) questionComponentRef: ViewContainerRef;
  @ViewChild('answerComponentRef', { read: ViewContainerRef }) answerComponentRef: ViewContainerRef;

  // 切换题目
  jump(action: 'previous' | 'next'): void {
    this.updatePageIndex(action);
    this.router.navigate([`../${this.activePage.index}`], { relativeTo: this.activatedRoute });
  }

  private setMarkdown(): void {
    this.questionMdSrc = `assets/md/question/${this.index}.md`;
    this.analyseMdSrc = `assets/md/analyse/${this.index}.md`;
  }

  private updatePageIndex(action: 'previous' | 'next'): void {
    const index = this.page.findIndex(v => v.index === this.index);
    if (index === 0 && action === 'previous') {
      alert('当前已经是第一题了');
      return;
    } else if (index === this.page.length - 1 && action === 'next') {
      alert('当前已经是最后一题了');
      return;
    } else {
      this.activePage = this.page[action === 'previous' ? index - 1 : index + 1];
    }
  }

  private generateComponent(): void {
    const { question, answer, analyse } = getComponent(this.index);
    this.showAnalyseButton = analyse;
    this.cdr.detectChanges();
    // 避免变更检查错误
    setTimeout(() => {
      this.generateQuestionComponent(question);
      this.generateAnswerComponent(answer);
    });
    this.setTitle();
  }

  private setTitle(): void {
    if (!this.activePage) {
      this.activePage = this.page.find(v => v.index === this.index);
    }
    this.title.setTitle(this.activePage.title);
  }

  private generateQuestionComponent(component: any): void {
    if (component) {
      this.showAnswer = true;
      this.cdr.detectChanges();
      const componentFactory = this.componentFactoryResolve.resolveComponentFactory(component);
      this.questionComponentRef.clear();
      const componentRef = this.questionComponentRef.createComponent(componentFactory);
      componentRef.changeDetectorRef.detectChanges();
    } else {
      this.showAnswer = false;
    }
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
      if (!this.firstRun) {
        this.generateComponent();
      }
      this.firstRun = false;
    });
  }
}
