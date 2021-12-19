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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuestionsRoutingModule } from './questions-routing.module';
import CN from './config/i18n/cn';
import EN from './config/i18n/en';
import { AppMarkdownModule } from './markdown/markdown.module';
import { QuestionComponent } from './question-render/question.component';
import { QUESTION, ANSWER } from './config';

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
class CustomTranslateLoader implements TranslateLoader {
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
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzSwitchModule,
    NzGridModule,
    NzDividerModule,
    AppMarkdownModule,
    TranslateModule.forRoot({
      defaultLanguage: 'cn',
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),
    ...ZORRO
  ],
  // QuestionComponent 需要单独导入, 是为了避免循环依赖.
  declarations: [...QUESTION, ...ANSWER, QuestionComponent]
})
export class QuestionsModule {}
