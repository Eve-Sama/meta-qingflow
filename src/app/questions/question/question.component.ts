import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  page = ['00', '01', '02', '03', '04', '05', '06'];

  previous(): void {
    const index = this.getPageIndex('previous');
    this.router.navigateByUrl(`questions/${index}`);
  }

  next(): void {
    const index = this.getPageIndex('next');
    this.router.navigateByUrl(`questions/${index}`);
  }

  private getCurrentNum(): string {
    const url = this.router.url;
    const num = url.substr(url.length - 2, 2);
    return num;
  }

  private getPageIndex(action: 'previous' | 'next'): string {
    const currentNum = this.getCurrentNum();
    let res: string;
    const index = this.page.findIndex(v => v === currentNum);
    if (index === 0 && action === 'previous') {
      res = currentNum;
      alert('当前已经是第一题了');
    } else if (index === this.page.length - 1 && action === 'next') {
      res = currentNum;
      alert('当前已经是最后一题了');
    } else {
      res = this.page[action === 'previous' ? index - 1 : index + 1];
    }
    return res;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const url = this.router.url;
    // first-question 路由为了找到第一个问题
    const needJump = url.indexOf('first-question') !== -1;
    if (needJump) {
      this.router.navigateByUrl(`questions/${this.page[0]}`);
    }
  }
}
