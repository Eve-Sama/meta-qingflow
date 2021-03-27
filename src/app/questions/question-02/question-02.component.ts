import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-question-02',
  templateUrl: './question-02.component.html'
})
export class Question02Component {
  openModal(): void {
    this.nzModalService.create({
      nzTitle: '前端',
      nzContent: 'Welcome to join qingflow!',
      nzFooter: null
    });
  }

  constructor(private nzModalService: NzModalService) {}
}
