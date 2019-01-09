import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './components/home-page';
import { ProductItemComponent } from '../shared/components/product-item/product-item.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
