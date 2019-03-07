import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SharedModule } from '../../../shared/shared.module';

import { RelatedProductsComponent } from './related-products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RelatedProductsComponent', () => {
  let component: RelatedProductsComponent;
  let fixture: ComponentFixture<RelatedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      declarations: [RelatedProductsComponent],
      providers: []
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(RelatedProductsComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if component get products continue work with component', () => {
    component.products = [{
      'id': '1',
      'title': 'String',
      'price': 1,
      'brand': 'String',
      'description': 'String',
      'sex': 'String',
      'name': 'String',
      'rating': 1,
      'swatches': [],
      'availability': [],
      'thumbnailImageSrc': 'string',
      'sizes': [],
      'addedToCart': true,
      'addedToWishList': true,
      'relatedProducts': []
    }
    ];
    component.ngOnInit();
    expect(component).toBeTruthy();

  });

  it('if component don`t get products don`t continue work with component', () => {
    component.products = undefined;
    component.ngOnInit();
  });

});
