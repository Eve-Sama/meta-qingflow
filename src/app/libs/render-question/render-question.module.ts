import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { MarkdownModule } from 'ngx-markdown';
import { RenderQuestionComponent } from './render-question.component';

@NgModule({
  imports: [
    CommonModule,
    NzCardModule,
    NzSwitchModule,
    NzGridModule,
    NzDividerModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  declarations: [RenderQuestionComponent],
  exports: [RenderQuestionComponent]
})
export class RenderQuestionModule {}
