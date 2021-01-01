import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { OtherCompComponent } from './other-comp/other-comp.component';

const routes: Routes = [
  {
    path: '',
    component: FirstCompComponent
  },
  {
    path: 'second',
    component: SecondCompComponent
  },
  {
    path: '**',
    component: OtherCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
