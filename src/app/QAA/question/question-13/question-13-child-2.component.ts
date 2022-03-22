import { Component } from '@angular/core';

@Component({
  selector: 'question-13-child-2',
  templateUrl: './question-13-child-2.component.html',
  styleUrls: ['./question-13-child-2.component.scss'],
})
export class Question13Child2Component {
  num = 0;

  add(): void {
    this.num++;
  }
}
