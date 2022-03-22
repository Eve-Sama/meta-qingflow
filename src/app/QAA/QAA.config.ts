import { TaskMenu } from '../utils/interface/task.interface';
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
import { Question11Component } from './question/question-11/question-11.component';
import { Answer11Component } from './answer/answer-11/answer-11.component';
import { Question12Component } from './question/question-12/question-12.component';
import { Answer12Component } from './answer/answer-12/answer-12.component';

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
  Question11Component,
  Question12Component,
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
  Answer11Component,
  Answer12Component,
];

export const MenuList: TaskMenu[] = [
  {
    title: '事件',
    children: [
      {
        id: '00',
        question: Question00Component,
        answer: Answer00Component,
        title: 'ngIf',
        analyse: true,
      },
      {
        id: '08',
        question: Question08Component,
        answer: Answer08Component,
        title: 'ngModel',
        analyse: true,
      },
      {
        id: '09',
        question: Question09Component,
        answer: Answer09Component,
        title: 'ngFor',
        analyse: true,
      },
    ],
  },
  {
    title: '父子组件',
    children: [
      {
        id: '11',
        question: Question11Component,
        answer: Answer11Component,
        title: '创建子组件',
        analyse: false,
      },
      {
        id: '12',
        question: Question12Component,
        answer: Answer12Component,
        title: '参数传递',
        analyse: true,
      },
      {
        id: null,
        question: null,
        title: '子组件通知父组件',
      },
    ],
  },
  {
    title: '翻译',
    children: [
      {
        id: '01',
        question: Question01Component,
        answer: Answer01Component,
        title: '模板翻译',
        analyse: true,
      },
      {
        id: '02',
        question: Question02Component,
        answer: Answer02Component,
        title: 'TypeScript翻译',
        analyse: true,
      },
      {
        id: '03',
        question: Question03Component,
        answer: Answer03Component,
        title: '复杂翻译',
        analyse: true,
      },
    ],
  },
  {
    title: 'Zorro',
    children: [
      {
        id: '04',
        question: Question04Component,
        title: '初识Zorro',
        analyse: true,
      },
    ],
  },
  {
    title: 'Git',
    children: [
      {
        id: '05',
        question: Question05Component,
        title: 'Git基操',
      },
    ],
  },
  {
    title: 'Service',
    children: [
      {
        id: null,
        question: null,
        title: '模块级Provider',
      },
      {
        id: null,
        question: null,
        title: '组件级Provider',
      },
    ],
  },
  {
    title: '生命周期',
    children: [
      {
        id: null,
        question: null,
        title: 'ngOnInit',
      },
      {
        id: null,
        question: null,
        title: 'ngOnDestroy',
      },
      {
        id: null,
        question: null,
        title: 'ngOnChanges',
      },
    ],
  },
  {
    title: 'TypeScript',
    children: [
      {
        id: '06',
        question: Question06Component,
        answer: Answer06Component,
        title: '函数参数类型与返回值',
      },
    ],
  },
];