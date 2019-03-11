import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { isObservable } from 'rxjs';

import { ProductDetailsPageService } from './product-details-page.service';

describe('ProductDetailsPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ],
    providers: [ProductDetailsPageService]
  }));

  it('should be created', () => {
    const service: ProductDetailsPageService = TestBed.get(ProductDetailsPageService);
    expect(service).toBeTruthy();
  });

  it('should return Observable', () => {
    const productDetailsPageService: ProductDetailsPageService = TestBed.get(ProductDetailsPageService);
    const product = productDetailsPageService.getProduct('mockId');
    const observable = isObservable(product);
    expect(observable).toBe(true);
  });
});
