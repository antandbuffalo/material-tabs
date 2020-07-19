import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab2homeComponent } from './tab2home/tab2home.component';

const routes: Routes = [
  { path: '', component: Tab2homeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2RoutingModule { }
