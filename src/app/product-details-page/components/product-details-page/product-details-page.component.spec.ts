import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '../../../shared/shared.module';

import {
  ZoomComponent,
  ProductImagePreviewComponent,
  ProductDetailsPageComponent,
  ProductDescriptionComponent,
  RelatedProductsComponent,
  ProductOrderComponent
} from '../';

import { ProductAvailabilityState } from '../../../shared/interfaces/product';

import { ProductDetailsPageService } from '../../product-details-page.service';

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
        ProductDescriptionComponent,
        ProductImagePreviewComponent,
        RelatedProductsComponent,
        ProductOrderComponent,
        ZoomComponent
      ],
      providers: [ProductDetailsPageService]
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
      name: 'Reebok',
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
