import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'answer-18-child',
  templateUrl: './answer-18-child.component.html',
  styleUrls: ['./answer-18-child.component.scss'],
})
export class Answer18ChildComponent implements OnChanges {
  @Input() value: number;

  type: '水果' | '动物' | '饮料';

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes.value;
    if (currentValue === 'banana') {
      this.type = '水果';
    } else if (currentValue === 'cat') {
      this.type = '动物';
    } else if (currentValue === 'sprite') {
      this.type = '饮料';
    }
  }
}
