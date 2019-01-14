import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './components/home-page';
import { JoinUsComponent } from './components/join-us/join-us.component';


@NgModule({
  declarations: [HomePageComponent, JoinUsComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HomePageModule { }
