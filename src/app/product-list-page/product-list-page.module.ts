import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { ProductListPageComponent } from './components/product-list-page/product-list-page.component';
import { FacetedNavigationComponent } from './components/product-list-page/faceted-navigation/faceted-navigation.component';
import { CheckboxFilterComponent } from './components/product-list-page/faceted-navigation/checkbox-filter/checkbox-filter.component';
import { PriceRangeFilterComponent } from './components/product-list-page/faceted-navigation/price-range-filter/price-range-filter.component';
import { RadioFilterComponent } from './components/product-list-page/faceted-navigation/radio-filter/radio-filter.component';
import { SizesFilterComponent } from './components/product-list-page/faceted-navigation/sizes-filter/sizes-filter.component';

@NgModule({
  declarations: [
    ProductListPageComponent,
    FacetedNavigationComponent,
    CheckboxFilterComponent,
    PriceRangeFilterComponent,
    RadioFilterComponent,
    SizesFilterComponent
  ],
  imports: [
    CommonModule,
    ProductListPageRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductListPageModule { }
