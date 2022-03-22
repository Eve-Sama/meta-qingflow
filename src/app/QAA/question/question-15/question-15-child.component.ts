import { Component, Input } from '@angular/core';

@Component({
  selector: 'question-15-child',
  templateUrl: './question-15-child.component.html',
  styleUrls: ['./question-15-child.component.scss'],
})
export class Question15ChildComponent {
  @Input() index: number;

  num = 0;

  add(): void {
    this.num++;
  }
}
