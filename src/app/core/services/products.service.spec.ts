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

  it('should call removeFromWishList method', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    service.products = [{
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
    service.toggleWishListProduct(service.products[0]);
    expect(service.products[0].addedToWishList).toBe(false);
  });

  it('should call addToWishList method', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    service.products = [{
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
      'relatedProducts': []
    }
    ];
    service.toggleWishListProduct(service.products[0]);
    expect(service.products[0].addedToWishList).toBe(true);
  });
});
