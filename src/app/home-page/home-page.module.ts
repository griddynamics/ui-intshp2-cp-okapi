import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './components/home-page';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';


@NgModule({
  declarations: [HomePageComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
