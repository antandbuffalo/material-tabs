import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab1RoutingModule } from './tab1-routing.module';
import { Tab1homeComponent } from './tab1home/tab1home.component';

@NgModule({
  declarations: [Tab1homeComponent],
  imports: [
    CommonModule,
    Tab1RoutingModule
  ]
})
export class Tab1Module { }
