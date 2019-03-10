import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ProductItemComponent,
  ProductItemShortComponent,
  CarouselItemComponent,
  CarouselComponent,
  JoinUsComponent,
  AdvertisingAreaComponent,
  HeadingComponent,
  LoadMoreComponent,
  LazyLoadComponent,
  GridComponent,
  ImgPlaceholderComponent,
  SwipeIconComponent
} from './components';

import { SafePipe } from './pipes/safe.pipe';

const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
  RouterModule,
  ReactiveFormsModule,
];

const DECLARATIONS = [
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
];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    ...DECLARATIONS,
  ],
})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
}
