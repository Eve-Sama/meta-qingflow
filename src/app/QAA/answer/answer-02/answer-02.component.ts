import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslateComponent } from '@QAA/common/translate/translate.component';

@Component({
  selector: 'app-answer-02',
  templateUrl: './answer-02.component.html',
})
export class Answer02Component extends TranslateComponent {
  openModal(): void {
    // 因为本任务主要希望你能自己做一次翻译内容的新增, 而为了做预期表现的组件不得不提前配置一次, 所以我就换了一个关键词叫fe2, 你需要配置的关键词仍为fe
    this.nzModalService.create({
      nzContent: this.translateService.instant('all.welcomeJoin'),
      nzFooter: null,
    });
  }

  constructor(private nzModalService: NzModalService, translateService: TranslateService) {
    super(translateService);
  }
}
