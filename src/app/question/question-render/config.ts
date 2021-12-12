import { Type } from '@angular/core';
import { Answer00Component } from '../answer-list/answer-00/answer-00.component';
import { Answer01Component } from '../answer-list/answer-01/answer-01.component';
import { Answer02Component } from '../answer-list/answer-02/answer-02.component';
import { Answer03Component } from '../answer-list/answer-03/answer-03.component';
import { Question00Component } from '../question-list/question-00/question-00.component';
import { Question01Component } from '../question-list/question-01/question-01.component';
import { Question02Component } from '../question-list/question-02/question-02.component';
import { Question03Component } from '../question-list/question-03/question-03.component';
import { Question04Component } from '../question-list/question-04/question-04.component';
import { Question05Component } from '../question-list/question-05/question-05.component';
import { Question06Component } from '../question-list/question-06/question-06.component';
import { Question08Component } from '../question-list/question-08/question-08.component';

export function getComponent(index: string): { question: Type<unknown>; title: string; answer?: Type<unknown>; analyse?: boolean } {
  switch (index) {
    case '00':
      return {
        question: Question00Component,
        title: '小试牛刀',
        answer: Answer00Component,
        analyse: true
      };
    case '01':
      return {
        question: Question01Component,
        title: '模板翻译',
        answer: Answer01Component,
        analyse: true
      };
    case '02':
      return {
        question: Question02Component,
        title: 'TS翻译',
        answer: Answer02Component,
        analyse: true
      };
    case '03':
      return {
        question: Question03Component,
        title: '复杂翻译',
        answer: Answer03Component,
        analyse: true
      };
    case '04':
      return {
        question: Question04Component,
        title: '初识Zorro',
        analyse: true
      };
    case '05':
      return {
        question: Question05Component,
        title: 'Git基操'
      };
    case '06':
      return {
        question: Question06Component,
        title: 'TS应用',
        analyse: true
      };
    case '08':
      return {
        question: Question08Component,
        title: '未命名',
        analyse: true
      };
    default:
      throw new Error('The method getComponent() can not find valid components');
  }
}
