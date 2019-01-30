import { TestBed } from '@angular/core/testing';

import { ProductDetailsPageService } from './product-details-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProductDetailsPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ProductDetailsPageService = TestBed.get(ProductDetailsPageService);
    expect(service).toBeTruthy();
  });
});
