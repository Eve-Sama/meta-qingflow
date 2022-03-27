import { Component, OnInit } from '@angular/core';
import { Answer20Service } from './answer-20.service';

@Component({
  templateUrl: './answer-20.component.html',
  styleUrls: ['./answer-20.component.scss'],
})
export class Answer20Component implements OnInit {
  money = 1000;

  giveMoeny(): void {
    // 告诉Subject, 我发射了 500 这个值
    this.answer20Service.send$.next(500);
  }

  constructor(private answer20Service: Answer20Service) {}

  ngOnInit(): void {
    // 监听Subject, 因为这是在父组件中, 所以执行的逻辑就是自身减去传递的值
    this.answer20Service.send$.subscribe(v => (this.money -= v));
  }
}
