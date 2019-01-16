import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';

import { HomePageComponent } from './components/home-page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
import { SlideshowComponent } from './components/slideshow/slideshow.component';

@NgModule({
  declarations: [HomePageComponent, SlideshowComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
