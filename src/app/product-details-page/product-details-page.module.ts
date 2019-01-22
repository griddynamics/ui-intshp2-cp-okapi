import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';

@NgModule({
  declarations: [ProductDetailsPageComponent, ProductDescriptionComponent],
  imports: [
    CommonModule,
    ProductDetailsPageRoutingModule
  ]
})
export class ProductDetailsPageModule { }
