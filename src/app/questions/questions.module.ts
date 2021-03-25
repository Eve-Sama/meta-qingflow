import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionComponent } from './question/question.component';
import { RenderQuestionModule } from '../libs/render-question';
import { Question01Component } from './question-01/question-01.component';
import { Question02Component } from './question-02/question-02.component';
import CN from './i18n/cn';
import EN from './i18n/en';
import { Question03Component } from './question-03/question-03.component';
import { Question04Component } from './question-04/question-04.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { Question05Component } from './question-05/question-05.component';
import { Question06Component } from './question-06/question-06.component';

const QUESTION = [
  QuestionComponent,
  Question01Component,
  Question02Component,
  Question03Component,
  Question04Component,
  Question05Component,
  Question06Component
];
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
  NzMessageModule
];
export class CustomTranslateLoader implements TranslateLoader {
  // tslint:disable-next-line:no-any
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
    QuestionsRoutingModule,
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'cn',
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),
    RenderQuestionModule,
    ...ZORRO
  ],
  declarations: [...QUESTION]
})
export class QuestionsModule {}
