import { Component, OnInit } from '@angular/core';
import { Answer20Service } from './answer-20.service';

@Component({
  selector: 'answer-20-child',
  templateUrl: './answer-20-child.component.html',
  styleUrls: ['./answer-20-child.component.scss'],
})
export class Answer20ChildComponent implements OnInit {
  money = 0;

  constructor(private answer20Service: Answer20Service) {}

  ngOnInit(): void {
    // 监听Subject, 因为这是在父组件中, 所以执行的逻辑就是自身加上传递的值
    this.answer20Service.send$.subscribe(v => (this.money += v));
  }
}
