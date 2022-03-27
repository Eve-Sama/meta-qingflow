import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class Answer20Service {
  // 命名一定要是$结尾, 这样可以区分出来这是个Subject. 你可以把Subject理解为订阅报纸之类的平台. 当有组件通过Subject发布时, 订阅了Subject的组件就会收到消息, 以此实现通信
  send$ = new Subject<number>();
}
