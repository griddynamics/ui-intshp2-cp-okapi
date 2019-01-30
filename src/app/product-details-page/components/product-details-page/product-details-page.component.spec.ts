import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPageComponent } from './product-details-page.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ZoomComponent } from '../product-description/product-image-preview/zoom/zoom.component';
import { ProductImagePreviewComponent } from '../product-description/product-image-preview/product-image-preview.component';
import { ProductOrderComponent } from '../product-description/product-order/product-order.component';
import { HttpClientModule } from '@angular/common/http';


describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsPageComponent, ProductDescriptionComponent, ProductImagePreviewComponent, ProductOrderComponent, ZoomComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
