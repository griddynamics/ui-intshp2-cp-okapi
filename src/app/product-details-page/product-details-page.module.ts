import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { ProductImagePreviewComponent } from './components/product-description/product-image-preview/product-image-preview.component';
import { ProductOrderComponent } from './components/product-description/product-order/product-order.component';
import { ZoomComponent } from './components/product-description/product-image-preview/zoom/zoom.component';

@NgModule({
  declarations: [
    ProductDetailsPageComponent,
    ProductDescriptionComponent,
    ProductImagePreviewComponent,
    ProductOrderComponent,
    ZoomComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsPageRoutingModule
  ]
})
export class ProductDetailsPageModule { }
