import { Component } from '@angular/core';

/* 角色 */
enum Role {
  admin = 1,
  user
}

interface User {
  /* 姓名 */
  name: string;
  /* 角色 */
  role: Role;
  /* 月薪 */
  salary: number;
  /** 是否是轻流人员 */
  qingflower?: boolean;
}

@Component({
  selector: 'app-answer-06',
  templateUrl: './answer-06.component.html'
})
export class Answer06Component {
  users: User[] = [
    {
      name: '张三',
      role: Role.user,
      salary: 10000
    },
    {
      name: '李四',
      role: Role.user,
      salary: 20000
    },
    {
      name: '王五',
      role: Role.admin,
      salary: 30000,
      qingflower: true
    }
  ];

  // 获取年薪
  getYearSalary(salary: number): number {
    return salary * 12;
  }
}
