import { Component } from '@angular/core';

@Component({
  selector: 'app-question-06',
  templateUrl: './question-06.component.html'
})
export class Question06Component {
  users = [
    {
      name: '张三',
      role: 2,
      salary: 10000,
      qingflower: true
    },
    {
      name: '李四',
      role: 2,
      salary: 20000,
      qingflower: true
    },
    {
      name: '王五',
      role: 1,
      salary: 30000,
      qingflower: true
    }
  ];

  // 获取年薪
  getYearSalary(salary) {
    return salary * 12;
  }
}
