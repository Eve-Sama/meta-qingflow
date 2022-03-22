import { Component } from '@angular/core';

@Component({
  selector: 'question-13-child-1',
  templateUrl: './question-13-child-1.component.html',
  styleUrls: ['./question-13-child-1.component.scss'],
})
export class Question13Child1Component {
  num = 0;

  add(): void {
    this.num++;
  }
}
