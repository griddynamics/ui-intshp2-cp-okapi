import { NgModule } from '@angular/core';

import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module';
import { ProductDetailsPageComponent } from './product-details-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductDetailsPageComponent],
  imports: [
    SharedModule,
    ProductDetailsPageRoutingModule
  ]
})
export class ProductDetailsPageModule { }
