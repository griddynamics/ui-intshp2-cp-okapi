import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './components/home-page';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
