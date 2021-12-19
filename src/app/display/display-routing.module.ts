import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderComponent } from './render/render.component';

const routes: Routes = [
  {
    path: '',
    component: RenderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule {}
