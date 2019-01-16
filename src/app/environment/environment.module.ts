import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironmentRoutingModule } from './environment-routing.module';
import { EnvironmentComponent } from './environment.component';

@NgModule({
  declarations: [EnvironmentComponent],
  imports: [
    CommonModule,
    EnvironmentRoutingModule
  ]
})
export class EnvironmentModule { }
