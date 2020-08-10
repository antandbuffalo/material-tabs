import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tab1', loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1Module) },
  { path: 'tab2', loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
