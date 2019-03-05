import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  it('should call addToFromWishList method', (done) => {
    const service: ProductsService = TestBed.get(ProductsService);

    const product = {
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
        'addedToWishList': false,
        'relatedProducts': [],
    };

    service.toggleWishListProduct(product);

    service.getWishList().subscribe(products => {
      expect(products[0].addedToWishList).toBe(true);
      done();
    });
  });

  it('should call removeToWishList method', (done) => {
    const service: ProductsService = TestBed.get(ProductsService);
    const product = {
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
    };

    service.toggleWishListProduct(product);
    service.getWishList().subscribe(products => {
      expect(products.length).toBe(0);
      done();
    });
  });
});
