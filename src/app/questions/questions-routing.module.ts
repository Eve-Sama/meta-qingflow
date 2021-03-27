import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question00Component } from './question-00/question-00.component';
import { Question01Component } from './question-01/question-01.component';
import { Question02Component } from './question-02/question-02.component';
import { Question03Component } from './question-03/question-03.component';
import { Question04Component } from './question-04/question-04.component';
import { Question05Component } from './question-05/question-05.component';
import { Question06Component } from './question-06/question-06.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '00',
    pathMatch: 'full'
  },
  {
    path: '00',
    component: Question00Component
  },
  {
    path: '01',
    component: Question01Component
  },
  {
    path: '02',
    component: Question02Component
  },
  {
    path: '03',
    component: Question03Component
  },
  {
    path: '04',
    component: Question04Component
  },
  {
    path: '05',
    component: Question05Component
  },
  {
    path: '06',
    component: Question06Component
  },
  {
    path: '**',
    redirectTo: '01'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {}
