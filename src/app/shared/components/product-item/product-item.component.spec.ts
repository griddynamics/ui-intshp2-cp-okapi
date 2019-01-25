import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductItemComponent } from './product-item.component';
import { ProductAvailabilityState, ProductSize } from '../../interfaces/product';

describe('ProductItemComponent', () => {
  const product = {
    id: '1',
    title: 'Reebock Track Jacket',
    price: '100$',
    rating: 2,
    // tslint:disable-next-line
    swatches: [
      { color: 'red', imgSrc: '' },
      {
        color: 'black',
        imgSrc:
            // tslint:disable-next-line
          'http://www.roasterydepartment.com/images/large/reebok/Beautiful%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20SW87_LRG.jpg',
      },
      {
        color: 'grey',
        imgSrc:
            // tslint:disable-next-line
          'http://www.roasterydepartment.com/images/large/reebok/Popular%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20MJ85_LRG.jpg',
      },
      {
        color: 'blue',
        imgSrc:
        // tslint:disable-next-line
          'http://www.roasterydepartment.com/images/large/reebok/Cheap%20Reebok%20Women%20Reebok%20Full%20Zip%20Fleece%20Jacket%20Women%20Reebok%20Jackets%20PE94_LRG.jpg',
      },
    ],
    availability: [
      ProductAvailabilityState.IN_STORE,
      ProductAvailabilityState.ONLINE_ONLY,
    ],
    thumbnailImageSrc: 'img-link',
    sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
    addedToCart: false,
    addedToWishList: true,
  };

  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resetDefaultThumbnail should set preview image', () => {
    component.product = product;
    component.resetDefaultThumbnail();
    expect(component.currentThumbnail).toBe(
      `url(${product.thumbnailImageSrc})`
    );
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    const functionsReturn = component.hoverStateIn();
    expect(functionsReturn).toBeUndefined();
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    const functionsReturn = component.hoverStateOut();
    expect(functionsReturn).toBeUndefined();
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    const functionsReturn = component.onMouseLeave();
    expect(functionsReturn).toBeUndefined();
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    const functionsReturn = component.onMouseOver();
    expect(functionsReturn).toBeUndefined();
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    const functionsReturn = component.onMouseLeaveColor();
    expect(functionsReturn).toBeUndefined();
  });

  it('renders a h2 with the provided label text', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h2').textContent).toContain(product.title);
  });

  it('renders a p with the provided label text', () => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.price').textContent).toContain(product.price);
  });

});
