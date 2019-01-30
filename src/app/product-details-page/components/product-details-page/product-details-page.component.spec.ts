import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPageComponent } from './product-details-page.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductImagePreviewComponent } from '../product-description/product-image-preview/product-image-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlideshowComponent } from 'src/app/home-page/components/slideshow/slideshow.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [
        ProductDetailsPageComponent,
        SlideshowComponent,
        ProductDescriptionComponent,
        ProductImagePreviewComponent,
        RelatedProductsComponent
      ],
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
