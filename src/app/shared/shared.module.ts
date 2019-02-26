import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemShortComponent } from './components/product-item/product-item-short/product-item-short.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { AdvertisingAreaComponent } from './components/advertising-area/advertising-area.component';
import { HeadingComponent } from './components/heading/heading.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { SafePipe } from './pipes/safe.pipe';
import { LazyLoadComponent } from './components/lazy-load/lazy-load.component';
import { GridComponent } from './components/grid/grid.component';
import { ImgPlaceholderComponent } from '../shared/components/img-placeholder/img-placeholder.component';
import { SwipeIconComponent } from './components/swipe-icon/swipe-icon.component';

const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
  RouterModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    CarouselItemComponent,
    CarouselComponent,
    AdvertisingAreaComponent,
    SafePipe,
    JoinUsComponent,
    ProductItemComponent,
    ProductItemShortComponent,
    HeadingComponent,
    LoadMoreComponent,
    LazyLoadComponent,
    GridComponent,
    ImgPlaceholderComponent,
    SwipeIconComponent,
  ],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    CarouselItemComponent,
    CarouselComponent,
    AdvertisingAreaComponent,
    SafePipe,
    JoinUsComponent,
    ProductItemComponent,
    ProductItemShortComponent,
    HeadingComponent,
    LoadMoreComponent,
    LazyLoadComponent,
    GridComponent,
    ImgPlaceholderComponent,
    SwipeIconComponent,
  ],
})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
 }
