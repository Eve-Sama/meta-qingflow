import { Answer00Component } from '../answer-list/answer-00/answer-00.component';
import { Answer01Component } from '../answer-list/answer-01/answer-01.component';
import { Answer02Component } from '../answer-list/answer-02/answer-02.component';
import { Answer03Component } from '../answer-list/answer-03/answer-03.component';
import { Answer04Component } from '../answer-list/answer-04/answer-04.component';
import { Answer05Component } from '../answer-list/answer-05/answer-05.component';
import { Answer06Component } from '../answer-list/answer-06/answer-06.component';
import { Question00Component } from '../question-list/question-00/question-00.component';
import { Question01Component } from '../question-list/question-01/question-01.component';
import { Question02Component } from '../question-list/question-02/question-02.component';
import { Question03Component } from '../question-list/question-03/question-03.component';
import { Question04Component } from '../question-list/question-04/question-04.component';
import { Question05Component } from '../question-list/question-05/question-05.component';
import { Question06Component } from '../question-list/question-06/question-06.component';

export const page = ['00', '01', '02', '03', '04', '05', '06'];

export function getQuestionComponent(index: string): any {
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

export function getAnswerComponent(index: string): any {
  switch (index) {
    case '00':
      return Answer00Component;
    case '01':
      return Answer01Component;
    case '02':
      return Answer02Component;
    case '03':
      return Answer03Component;
    case '04':
      return Answer04Component;
    case '05':
      return Answer05Component;
    case '06':
      return Answer06Component;
    default:
      return Answer00Component;
  }
}
