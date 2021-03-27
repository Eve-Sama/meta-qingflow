import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      // this.router.navigate(['/task-1/easy-translation']).catch();
    }, 3000);
  }
}
