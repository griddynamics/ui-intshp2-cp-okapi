import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { ProductListPageComponent } from './components/product-list-page/product-list-page.component';
import { ProductGridComponent } from './components/product-list-page/product-grid/product-grid.component';

@NgModule({
  declarations: [ProductListPageComponent, ProductGridComponent],
  imports: [
    CommonModule,
    ProductListPageRoutingModule,
    SharedModule
  ]
})
export class ProductListPageModule { }
