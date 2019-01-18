import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { ProductListPageComponent } from './product-list-page.component';

@NgModule({
  declarations: [ProductListPageComponent],
  imports: [
    CommonModule,
    ProductListPageRoutingModule
  ]
})
export class ProductListPageModule { }
