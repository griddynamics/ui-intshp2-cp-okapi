import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';

import { HomePageComponent } from './components/home-page';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
