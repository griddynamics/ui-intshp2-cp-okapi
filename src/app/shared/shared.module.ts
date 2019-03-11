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
  SwipeIconComponent,
  ShoppingCartComponent
} from './components';

import { SafePipe } from './pipes/safe.pipe';
import { ModalContainerComponent } from './modal/modal-container/modal-container.component';
import { ModalHolderDirective } from './modal/modal-holder.directive';

const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
  RouterModule,
  ReactiveFormsModule
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
  ShoppingCartComponent
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
    ModalContainerComponent,
    ModalHolderDirective,
    ShoppingCartComponent,
    ...DECLARATIONS,
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
    ModalContainerComponent,
    ModalHolderDirective,
    ShoppingCartComponent,
    ...DECLARATIONS,
  ],
  entryComponents: [ModalContainerComponent, ShoppingCartComponent],
})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
}
