import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-question-01',
  templateUrl: './question-01.component.html',
  styleUrls: ['./question-01.component.scss']
})
export class Question01Component {
  isCn = true;

  changeLanguage(): void {
    this.isCn ? this.translateService.use('cn') : this.translateService.use('en');
  }

  constructor(private translateService: TranslateService) {}
}
