import { Component, Input } from '@angular/core';

@Component({
  selector: 'question-14-child',
  templateUrl: './question-14-child.component.html',
  styleUrls: ['./question-14-child.component.scss'],
})
export class Question14ChildComponent {
  @Input() index: number;

  num = 0;

  add(): void {
    this.num++;
  }
}
