import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab2RoutingModule } from './tab2-routing.module';
import { Tab2homeComponent } from './tab2home/tab2home.component';

@NgModule({
  declarations: [Tab2homeComponent],
  imports: [
    CommonModule,
    Tab2RoutingModule
  ]
})
export class Tab2Module { }
