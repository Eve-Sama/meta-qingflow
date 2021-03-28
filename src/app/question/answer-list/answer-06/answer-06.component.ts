import { Component } from '@angular/core';

@Component({
  selector: 'app-answer-06',
  templateUrl: './answer-06.component.html'
})
export class Answer06Component {
  // role: 1为管理员 2为用户
  users = [
    {
      name: '张三',
      role: 2,
      salary: 10000
    },
    {
      name: '李四',
      role: 2,
      salary: 20000
    },
    {
      name: '王五',
      role: 1,
      salary: 30000,
      qingflower: true
    }
  ];

  // 获取年薪
  getYearSalary(value) {
    return value * 12;
  }
}
