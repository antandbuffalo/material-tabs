import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1homeComponent } from './tab1home/tab1home.component';

const routes: Routes = [
  { path: '', component: Tab1homeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1RoutingModule { }
