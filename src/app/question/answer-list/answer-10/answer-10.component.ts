import { Component } from '@angular/core';

@Component({
  templateUrl: './answer-10.component.html',
  styleUrls: ['./answer-10.component.scss']
})
export class Answer10Component {
  foodList: string[] = [];
  food: string;

  add(): void {
    this.foodList.push(this.food);
  }
}
