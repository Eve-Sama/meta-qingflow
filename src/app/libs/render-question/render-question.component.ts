import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-render-question',
  templateUrl: './render-question.component.html',
  styleUrls: ['./render-question.component.scss']
})
export class RenderQuestionComponent {
  private _mdSrc: string;
  private _analyseMdSrc: string;

  @Input() queTitle: string;
  @Input()
  set mdSrc(value: string) {
    this._mdSrc = `assets/md/${value}.md`;
    this._analyseMdSrc = `assets/analyse/${value}.md`;
  }
  get mdSrc(): string {
    return this._mdSrc;
  }
  get analyseMdSrc(): string {
    return this._analyseMdSrc;
  }

  showAnalyse = false;
}
