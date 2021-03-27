import { Question00Component } from '../question-list/question-00/question-00.component';
import { Question01Component } from '../question-list/question-01/question-01.component';
import { Question02Component } from '../question-list/question-02/question-02.component';
import { Question03Component } from '../question-list/question-03/question-03.component';
import { Question04Component } from '../question-list/question-04/question-04.component';
import { Question05Component } from '../question-list/question-05/question-05.component';
import { Question06Component } from '../question-list/question-06/question-06.component';

export const page = ['00', '01', '02', '03', '04', '05', '06'];

export function getComponent(index: string): any {
  switch (index) {
    case '00':
      return Question00Component;
    case '01':
      return Question01Component;
    case '02':
      return Question02Component;
    case '03':
      return Question03Component;
    case '04':
      return Question04Component;
    case '05':
      return Question05Component;
    case '06':
      return Question06Component;
    default:
      return Question00Component;
  }
}
