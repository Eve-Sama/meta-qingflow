import { Type } from '@angular/core';
import { Answer00Component } from './answer/answer-00/answer-00.component';
import { Answer01Component } from './answer/answer-01/answer-01.component';
import { Answer02Component } from './answer/answer-02/answer-02.component';
import { Answer03Component } from './answer/answer-03/answer-03.component';
import { Answer05Component } from './answer/answer-05/answer-05.component';
import { Answer06Component } from './answer/answer-06/answer-06.component';
import { Answer08Component } from './answer/answer-08/answer-08.component';
import { Answer09Component } from './answer/answer-09/answer-09.component';
import { Answer10Component } from './answer/answer-10/answer-10.component';
import { Question00Component } from './question/question-00/question-00.component';
import { Question01Component } from './question/question-01/question-01.component';
import { Question02Component } from './question/question-02/question-02.component';
import { Question03Component } from './question/question-03/question-03.component';
import { Question04Component } from './question/question-04/question-04.component';
import { Question05Component } from './question/question-05/question-05.component';
import { Question06Component } from './question/question-06/question-06.component';
import { Question08Component } from './question/question-08/question-08.component';
import { Question09Component } from './question/question-09/question-09.component';
import { Question10Component } from './question/question-10/question-10.component';

export const QUESTION = [
  Question00Component,
  Question01Component,
  Question02Component,
  Question03Component,
  Question04Component,
  Question05Component,
  Question06Component,
  Question09Component,
  Question10Component,
];
export const ANSWER = [
  Answer00Component,
  Answer01Component,
  Answer02Component,
  Answer03Component,
  Answer05Component,
  Answer06Component,
  Answer08Component,
  Answer09Component,
  Answer10Component,
];

/** 题目的序号 */
export const PageOrder = <const>['00', '08', '09', '10', '04', '01', '02', '03', '05', '06'];

/** 每道题目的配置情况 */
export function getComponent(index: typeof PageOrder[number]): {
  question: Type<unknown>;
  answer?: Type<unknown>;
  title: string;
  analyse?: boolean;
} {
  switch (index) {
    case '00':
      return {
        question: Question00Component,
        answer: Answer00Component,
        title: '小试牛刀',
        analyse: true,
      };
    case '01':
      return {
        question: Question01Component,
        answer: Answer01Component,
        title: '模板翻译',
        analyse: true,
      };
    case '02':
      return {
        question: Question02Component,
        answer: Answer02Component,
        title: 'TS翻译',
        analyse: true,
      };
    case '03':
      return {
        question: Question03Component,
        answer: Answer03Component,
        title: '复杂翻译',
        analyse: true,
      };
    case '04':
      return {
        question: Question04Component,
        title: '初识Zorro',
        analyse: true,
      };
    case '05':
      return {
        question: Question05Component,
        title: 'Git基操',
      };
    case '06':
      return {
        question: Question06Component,
        title: 'TS应用',
        analyse: true,
      };
    case '08':
      return {
        question: Question08Component,
        answer: Answer08Component,
        title: '双向绑定',
      };
    case '09':
      return {
        question: Question09Component,
        answer: Answer09Component,
        title: '循环遍历',
        analyse: true,
      };
    case '10':
      return {
        question: Question10Component,
        answer: Answer10Component,
        title: '父子组件',
        analyse: true,
      };
    default:
      throw new Error('The method getComponent() can not find valid components');
  }
}
