import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({ template: '' })
export abstract class TranslateComponent implements OnInit {
  isCn = true;

  changeLanguage(): void {
    this.isCn ? this.translateService.use('cn') : this.translateService.use('en');
  }

  constructor(protected translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use('cn');
  }
}
