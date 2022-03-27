import { Component } from '@angular/core';

@Component({
  templateUrl: './question-20.component.html',
  styleUrls: ['./question-20.component.scss'],
})
export class Question20Component {
  money = 1000;

  giveMoeny(): void {
    this.money -= 500;
  }
}
