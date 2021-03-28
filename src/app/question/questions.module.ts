import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionComponent } from './question-render/question.component';
import { Question00Component } from './question-list/question-00/question-00.component';
import { Question01Component } from './question-list/question-01/question-01.component';
import { Question02Component } from './question-list/question-02/question-02.component';
import { Question03Component } from './question-list/question-03/question-03.component';
import { Question04Component } from './question-list/question-04/question-04.component';
import { Question05Component } from './question-list/question-05/question-05.component';
import { Question06Component } from './question-list/question-06/question-06.component';
import { MarkdownModule } from 'ngx-markdown';
import CN from './config/i18n/cn';
import EN from './config/i18n/en';
import { Answer00Component } from './answer-list/answer-00/answer-00.component';

const QUESTION = [
  QuestionComponent,
  Question00Component,
  Question01Component,
  Question02Component,
  Question03Component,
  Question04Component,
  Question05Component,
  Question06Component
];
const ANSWER = [
  Answer00Component
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
    RouterModule,
    FormsModule,
    NzCardModule,
    NzButtonModule,
    NzSwitchModule,
    NzGridModule,
    NzDividerModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'cn',
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),
    ...ZORRO
  ],
  declarations: [...QUESTION, ...ANSWER]
})
export class QuestionsModule {}
