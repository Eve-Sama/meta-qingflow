import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tasks = [
    { title: '任务一', routerLink: '/first-question' },
    { title: '任务二', routerLink: '/first-question' },
    { title: '任务三', routerLink: '/first-question' }
  ];
  // tasks = [
  //   { title: '任务一', routerLink: '/task-1/easy-translation' },
  //   { title: '任务二', routerLink: '/task-1/difficult-translation' },
  //   { title: '任务三', routerLink: '/task-1/difficult-translation' }
  // ];
  constructor(private router: Router) {
    setTimeout(() => {
      // this.router.navigate(['/task-1/easy-translation']).catch();
    }, 3000);
  }
}
