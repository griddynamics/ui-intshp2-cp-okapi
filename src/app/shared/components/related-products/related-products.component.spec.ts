import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductsComponent } from './related-products.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselItemComponent } from '../carousel/carousel-item/carousel-item.component';

describe('RelatedProductsComponent', () => {
  let component: RelatedProductsComponent;
  let fixture: ComponentFixture<RelatedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedProductsComponent, CarouselComponent, CarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
