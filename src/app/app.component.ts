import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menus = [
    {
      title: '新手任务',
      type: 'task',
    },
    {
      title: '水平测验',
      type: 'test',
    },
    {
      title: '文章推荐',
      type: 'article',
    },
  ] as const;

  click(type: typeof this.menus[number]['type']): void {
    switch (type) {
      case 'task':
        this.nzMessageService.warning('现在这个界面不就是吗?');
        break;
      default:
        this.nzMessageService.error('还没做呢!');
        break;
    }
  }

  constructor(private nzMessageService: NzMessageService) {}
}
