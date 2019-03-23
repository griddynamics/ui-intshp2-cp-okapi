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
  ShoppingCartComponent,
  ModalWindowComponent
} from './components';

import { SafePipe } from './pipes/safe.pipe';
import { ModalHolderDirective } from './directives/modal-holder.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
  ModalHolderDirective,
  ShoppingCartComponent,
  ModalWindowComponent,
];

@NgModule({
  declarations: [
    ...DECLARATIONS,
  ],

  imports: [...MODULES, DragDropModule],
  exports: [
    ...MODULES,
    ...DECLARATIONS,
  ],
  entryComponents: [ModalWindowComponent, ShoppingCartComponent],
})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
}
