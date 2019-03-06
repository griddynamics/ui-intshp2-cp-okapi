import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { SharedModule } from '../shared/shared.module';

import {
  PriceRangeFilterComponent,
  RadioFilterComponent,
  CheckboxFilterComponent,
  FacetedNavigationComponent,
  ProductListPageComponent
} from './components';

@NgModule({
  declarations: [
    ProductListPageComponent,
    FacetedNavigationComponent,
    CheckboxFilterComponent,
    PriceRangeFilterComponent,
    RadioFilterComponent
  ],
  imports: [
    CommonModule,
    ProductListPageRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductListPageModule { }
