import { Component } from '@angular/core';
import { Answer13Service } from './answer-13.service';

@Component({
  selector: 'answer-13-child-2',
  templateUrl: './answer-13-child-2.component.html',
  styleUrls: ['./answer-13-child-2.component.scss'],
})
export class Answer13Child2Component {
  get num(): number {
    return this.answer13Service.num;
  }

  add(): void {
    this.answer13Service.num++;
  }

  constructor(private answer13Service: Answer13Service) {}
}
