import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ZoomComponent } from '../product-description/product-image-preview/zoom/zoom.component';
import { ProductImagePreviewComponent } from '../product-description/product-image-preview/product-image-preview.component';
import { SlideshowComponent } from 'src/app/home-page/components/slideshow/slideshow.component';
import { ProductDetailsPageComponent } from './product-details-page.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ProductOrderComponent } from '../product-description/product-order/product-order.component';



describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule, HttpClientModule],
      declarations: [
        ProductDetailsPageComponent,
        SlideshowComponent,
        ProductDescriptionComponent,
        ProductImagePreviewComponent,
        RelatedProductsComponent,
        ProductOrderComponent,
        ZoomComponent
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
