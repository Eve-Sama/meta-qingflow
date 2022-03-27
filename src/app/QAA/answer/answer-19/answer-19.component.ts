import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-answer-19',
  templateUrl: './answer-19.component.html',
  styleUrls: ['./answer-19.component.scss'],
})
export class Answer19Component {
  copy(): void {
    let platformText: 'Safari' | 'Webkit' | 'Firefox' | 'Edge' | 'Chrome';
    if (this.platform.SAFARI) {
      platformText = 'Safari';
    } else if (this.platform.WEBKIT) {
      platformText = 'Webkit';
    } else if (this.platform.FIREFOX) {
      platformText = 'Firefox';
    } else if (this.platform.EDGE) {
      platformText = 'Edge';
    } else if (this.platform.BLINK) {
      platformText = 'Chrome';
    }
    // 这里复制的内容+前缀是为了区分你的答案, 不然分不清复制的内容到底来自于哪
    this.clipboard.copy(`预期表现: ${platformText}`);
  }

  constructor(private platform: Platform, private clipboard: Clipboard) {}
}
