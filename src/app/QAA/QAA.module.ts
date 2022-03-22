import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Observable, of } from 'rxjs';
import { ANSWER, QUESTION } from './QAA.config';
import CN from './common/translate/i18n/cn';
import EN from './common/translate/i18n/en';
import { Answer11ChildComponent } from './answer/answer-11/answer-11-child.component';
import { Answer12ChildComponent } from './answer/answer-12/answer-12-child.component';

const ZORRO = [
  NzCardModule,
  NzButtonModule,
  NzSpaceModule,
  NzTypographyModule,
  NzCheckboxModule,
  NzSwitchModule,
  NzGridModule,
  NzDividerModule,
  NzIconModule,
  NzModalModule,
  NzMessageModule,
];

class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (lang === 'cn') {
      return of(CN);
    } else {
      return of(EN);
    }
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'cn',
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
      },
    }),
    ...ZORRO,
  ],
  declarations: [...QUESTION, ...ANSWER, Answer11ChildComponent, Answer12ChildComponent],
})
export class QAAModule {}
