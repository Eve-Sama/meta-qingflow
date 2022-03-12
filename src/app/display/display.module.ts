import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMarkdownModule } from './markdown/markdown.module';
import { RenderComponent } from './render/render.component';
import { DisplayRoutingModule } from './display-routing.module';
import { QAAModule } from '@QAA/QAA.module';

@NgModule({
  imports: [
    DisplayRoutingModule,
    CommonModule,
    RouterModule,
    NzCardModule,
    NzButtonModule,
    NzSwitchModule,
    NzGridModule,
    NzDividerModule,
    AppMarkdownModule,
    NzMenuModule,
    QAAModule
  ],
  declarations: [RenderComponent]
})
export class DisplayModule {}
