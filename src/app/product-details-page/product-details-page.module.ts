import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module';

import { ProductDetailsPageService } from './product-details-page.service';

import {
  ProductDetailsPageComponent,
  ProductDescriptionComponent,
  ProductImagePreviewComponent,
  RelatedProductsComponent,
  ProductOrderComponent,
  ZoomComponent
} from './components';

@NgModule({
  declarations: [
    ProductDetailsPageComponent,
    ProductDescriptionComponent,
    ProductImagePreviewComponent,
    ProductOrderComponent,
    ZoomComponent,
    RelatedProductsComponent
   ],
  imports: [
    ProductDetailsPageRoutingModule,
    SharedModule
  ],
  providers: [ProductDetailsPageService]
})
export class ProductDetailsPageModule { }
