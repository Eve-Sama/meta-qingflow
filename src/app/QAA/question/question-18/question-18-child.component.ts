import { Component, Input } from '@angular/core';

@Component({
  selector: 'question-18-child',
  templateUrl: './question-18-child.component.html',
  styleUrls: ['./question-18-child.component.scss'],
})
export class Question18ChildComponent {
  @Input() value: number;

  type: '水果' | '动物' | '饮料';
}
