import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-03',
  templateUrl: './question-03.component.html'
})
export class Question03Component implements OnInit {
  users = [
    {
      name: '张三',
      job: '教师'
    },
    {
      name: '李四',
      job: '学生'
    },
    {
      name: '王五',
      job: '程序员'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
