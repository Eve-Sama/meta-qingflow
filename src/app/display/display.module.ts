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
import { MenuComponent } from './render/menu/menu.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';

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
    NzSpinModule,
    QAAModule
  ],
  declarations: [RenderComponent, MenuComponent]
})
export class DisplayModule {}
