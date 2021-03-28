import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getAnswerComponent, getQuestionComponent, page } from './config';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, AfterViewInit {
  /** 题目序号 */
  index: string;
  /** 是否显示题解内容 */
  showAnalyse = false;
  firstRun = true;
  questionMdSrc: string;
  analyseMdSrc: string;
  page = page;

  @ViewChild('questionComponentRef', { read: ViewContainerRef }) questionComponentRef: ViewContainerRef;
  @ViewChild('answerComponentRef', { read: ViewContainerRef }) answerComponentRef: ViewContainerRef;

  // 切换题目
  jump(action: 'previous' | 'next'): void {
    const nextIndex = this.getPageIndex(action);
    this.router.navigate([`../${nextIndex}`], { relativeTo: this.activatedRoute });
  }

  private setMarkdown(): void {
    this.questionMdSrc = `assets/md/question/${this.index}.md`;
    this.analyseMdSrc = `assets/md/analyse/${this.index}.md`;
  }

  private getPageIndex(action: 'previous' | 'next'): string {
    let res: string;
    const index = this.page.findIndex(v => v === this.index);
    if (index === 0 && action === 'previous') {
      res = this.index;
      alert('当前已经是第一题了');
    } else if (index === this.page.length - 1 && action === 'next') {
      res = this.index;
      alert('当前已经是最后一题了');
    } else {
      res = this.page[action === 'previous' ? index - 1 : index + 1];
    }
    return res;
  }

  private generateComponent(): void {
    this.generateQuestionComponent();
    this.generateAnswerComponent();
  }

  private generateQuestionComponent(): void {
    const questionComponent = getQuestionComponent(this.index);
    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(questionComponent);
    this.questionComponentRef.clear();
    const componentRef = this.questionComponentRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  private generateAnswerComponent(): void {
    const answerComponent = getAnswerComponent(this.index);
    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(answerComponent);
    this.answerComponentRef.clear();
    const componentRef = this.answerComponentRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private componentFactoryResolve: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    this.generateComponent();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.showAnalyse = false;
      this.index = params.index;
      this.setMarkdown();
      if (!this.firstRun) {
        this.generateComponent();
      }
      this.firstRun = false;
    });
  }
}
