import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { ProductListPageComponent } from './components/product-list-page/product-list-page.component';
import { FiltersComponent } from './components/product-list-page/filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListPageComponent, FiltersComponent],
  imports: [
    CommonModule,
    ProductListPageRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductListPageModule { }
