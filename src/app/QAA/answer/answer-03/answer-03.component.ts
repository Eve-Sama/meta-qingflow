import { Component } from '@angular/core';
import { TranslateComponent } from '@QAA/common/translate/translate.component';

@Component({
  selector: 'app-answer-03',
  templateUrl: './answer-03.component.html'
})
export class Answer03Component extends TranslateComponent {
  types = ['all.text', 'all.date', 'all.radio'];
}
