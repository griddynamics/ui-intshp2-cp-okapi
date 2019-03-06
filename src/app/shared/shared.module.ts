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
import { ModalContainerComponent } from './modal/modal-container/modal-container.component';
import { ModalHolderDirective } from './modal/modal-holder.directive';
import { PopUpComponent } from './modal/pop-up/pop-up.component';

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
    PopUpComponent,
    ...DECLARATIONS
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
    PopUpComponent,
    ...DECLARATIONS,
  ],
  entryComponents: [ModalContainerComponent, PopUpComponent],
})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
}
