import { TestBed } from '@angular/core/testing';

import { ProductItemService } from './product-item.service';

describe('ProductItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductItemService = TestBed.get(ProductItemService);
    expect(service).toBeTruthy();
  });
});
