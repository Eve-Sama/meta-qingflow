import { Component } from '@angular/core';

@Component({
  templateUrl: './answer-12.component.html',
  styleUrls: ['./answer-12.component.scss'],
})
export class Answer12Component {
  parentMoney = 1000;
  childMoney = 0;

  giveMoeny(): void {
    this.parentMoney -= 500;
    this.childMoney += 500;
  }

  getMoeny(money: number): void {
    this.parentMoney += money;
    this.childMoney -= 500;
  }
}
