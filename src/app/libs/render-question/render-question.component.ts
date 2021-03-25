import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-render-question',
  templateUrl: './render-question.component.html',
  styleUrls: ['./render-question.component.scss']
})
export class RenderQuestionComponent {
  private _mdSrc: string;

  @Input() queTitle: string;
  @Input()
  get mdSrc(): string {
    return this._mdSrc;
  }

  set mdSrc(value: string) {
    this._mdSrc = `assets/md/${value}.md`;
  }
}
