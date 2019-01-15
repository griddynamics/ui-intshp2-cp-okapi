import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
  RouterModule
];

@NgModule({
  declarations: [CarouselItemComponent, CarouselComponent, ProductItemComponent],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    CarouselItemComponent,
    CarouselComponent,
    ProductItemComponent
  ],

})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
 }
