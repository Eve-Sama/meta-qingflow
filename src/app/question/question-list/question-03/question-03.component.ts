import { Component } from '@angular/core';
import { TranslateComponent } from '../../answer-list/common/translate/translate.component';

@Component({
  selector: 'app-question-03',
  templateUrl: './question-03.component.html'
})
export class Question03Component extends TranslateComponent {
  types = ['单行文本', '日期', '单项选择'];
}
