import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslateComponent } from '@QAA/common/translate/translate.component';

@Component({
  selector: 'app-question-02',
  templateUrl: './question-02.component.html'
})
export class Question02Component extends TranslateComponent {
  openModal(): void {
    this.nzModalService.create({
      nzTitle: '前端',
      nzContent: 'Welcome to join qingflow!',
      nzFooter: null
    });
  }

  constructor(private nzModalService: NzModalService, translateService: TranslateService) {
    super(translateService);
  }
}
