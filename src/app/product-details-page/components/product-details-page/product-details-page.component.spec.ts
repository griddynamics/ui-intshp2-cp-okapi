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
import { ProductAvailabilityState } from 'src/app/shared/interfaces/product';

describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
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

    component.product = {
      id: '12',
      price: 100,
      rating: 2,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': '' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      addedToCart: false,
      addedToWishList: false,
      sizes: [],
      title: 'Half Jacket + Skiny Trousers + Boot leather',
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
