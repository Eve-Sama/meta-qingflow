import { Component, Input } from '@angular/core';
import { Answer13Service } from './answer-13.service';

@Component({
  selector: 'answer-13-child',
  templateUrl: './answer-13-child.component.html',
  styleUrls: ['./answer-13-child.component.scss'],
})
export class Answer13ChildComponent {
  @Input() index: number;

  get num(): number {
    return this.answer13Service.num;
  }

  add(): void {
    this.answer13Service.num++;
  }

  constructor(private answer13Service: Answer13Service) {}
}
