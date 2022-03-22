import { Component, Input } from '@angular/core';

@Component({
  selector: 'question-13-child',
  templateUrl: './question-13-child.component.html',
  styleUrls: ['./question-13-child.component.scss'],
})
export class Question13ChildComponent {
  @Input() index: number;

  num = 0;

  add(): void {
    this.num++;
  }
}
