import { TestBed } from '@angular/core/testing';

import { ProductItemService } from './product-item.service';
import { ProductAvailabilityState, ProductSize } from 'src/app/shared/interfaces/product';

describe('ProductItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductItemService = TestBed.get(ProductItemService);
    expect(service).toBeTruthy();
  });

  it('should call updateBS if toggle product was called', () => {
    const service: ProductItemService = TestBed.get(ProductItemService);
    const item = {
      id: '1',
      title: 'Reebock Track Jacket',
      price: '100$',
      rating: 2,
      // tslint:disable-next-line
      swatches: [{ 'color': 'red', 'imgSrc': '' }, { 'color': 'black', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg' }, { 'color': 'grey', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg' }, { 'color': 'blue', 'imgSrc': 'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg' }],
      availability: [ProductAvailabilityState.IN_STORE, ProductAvailabilityState.ONLINE_ONLY],
      thumbnailImageSrc: 'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
      addedToCart: false,
      addedToWishList: false,
    };

    const returns = service.toggleProduct(item);
    expect(returns).toBeUndefined();
  });
});
