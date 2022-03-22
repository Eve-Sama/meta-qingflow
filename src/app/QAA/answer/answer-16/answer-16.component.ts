import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './answer-16.component.html',
  styleUrls: ['./answer-16.component.scss'],
})
export class Answer16Component implements OnInit {
  text = '欢迎加入轻流!';
  addClass = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.addClass = true;
    }, 2000);
  }
}
