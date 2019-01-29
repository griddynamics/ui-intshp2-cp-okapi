import { NgModule } from '@angular/core';

import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { ProductImagePreviewComponent } from './components/product-description/product-image-preview/product-image-preview.component';
import { SharedModule } from '../shared/shared.module';
import { RelatedProductsComponent } from './components/product-details-page/related-products/related-products.component';

@NgModule({
  declarations: [ProductDetailsPageComponent, ProductDescriptionComponent, ProductImagePreviewComponent, RelatedProductsComponent],
  imports: [
    ProductDetailsPageRoutingModule,
    SharedModule
  ]
})
export class ProductDetailsPageModule { }
