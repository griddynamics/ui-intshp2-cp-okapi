import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { ProductOrderComponent } from './product-order.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductAvailabilityState } from 'src/app/shared/interfaces/product';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductOrderComponent', () => {
  let component: ProductOrderComponent;
  let fixture: ComponentFixture<ProductOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOrderComponent ],
      imports: [ RouterTestingModule, HttpClientModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOrderComponent);
    component = fixture.componentInstance;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call increaseQuantity on click', (() => {
    const prevValue = component.productConfiguration.quantity;
    spyOn(component, 'increaseQuantity').and.callThrough();
    const button = fixture.debugElement.nativeElement.querySelector('.button-plus');
    button.click();
    fixture.detectChanges();
    expect(component.increaseQuantity).toHaveBeenCalled();
    expect(prevValue).toBeLessThan(component.productConfiguration.quantity);
  }));

  it('should call decreaseQuantity on click', (() => {
    const prevValue = component.productConfiguration.quantity;
    spyOn(component, 'decreaseQuantity').and.callThrough();
    const button = fixture.debugElement.nativeElement.querySelector('.button-minus');
    button.click();
    fixture.detectChanges();
    expect(component.decreaseQuantity).toHaveBeenCalled();
    expect(prevValue).toBeGreaterThanOrEqual(component.productConfiguration.quantity);
  }));
  it('should change quantity when if statement true', (() => {
    component.productConfiguration.quantity = 2;
    component.decreaseQuantity();
    expect(component.productConfiguration.quantity).toBe(1);
  }));
  it('should not change quantity when if statement false', (() => {
    component.productConfiguration.quantity = 0;
    component.decreaseQuantity();
    expect(component.productConfiguration.quantity).toBe(0);
  }));

  it('should call addToCart on click if addedToCart = true', (() => {
    component.product.addedToCart = true;
    spyOn(component, 'addToCart').and.callThrough();
    component.addToCart();
    fixture.detectChanges();
    expect(component.product.addedToCart).toBe(true);
  }));

  it('should call addToCart on click if addedToCart = false', (() => {
    component.product.addedToCart = false;
    spyOn(component, 'addToCart').and.callThrough();
    component.addToCart();
    fixture.detectChanges();
    expect(component.product.addedToCart).toBe(false);
  }));

  describe('sizes buttons', () => {
    let sizes;

    beforeEach(() => {
      sizes = ['S', 'M', 'L', 'XL'];
      component.product.sizes = sizes;
      fixture.detectChanges();
    });

    it('should not render buttons if sizes.length = 0', () => {
      component.product.sizes = sizes;
      fixture.detectChanges();
      const buttons = fixture.debugElement.nativeElement.querySelectorAll('.chose-container-sizes button');
      expect(buttons.length).toBe(sizes.length);
    });

    it('should render button if sizes has length', (() => {
      const buttons = fixture.debugElement.nativeElement.querySelectorAll('.chose-container-sizes button');
      expect(buttons.length).toBe(sizes.length);
    }));

    it('should call onChoose if "S" clicked', (() => {
      spyOn(component, 'onChooseSize').and.callThrough();
      const button = fixture.debugElement.nativeElement.querySelectorAll('.chose-container-sizes button');
      button[0].click();
      fixture.detectChanges();
      expect(component.onChooseSize).toHaveBeenCalled();
    }));

    it('should change  productConfiguration and selected if "M" clicked', (() => {
      let value = 'S';
      spyOn(component, 'onChooseSize').and.callThrough();
      const button = fixture.debugElement.nativeElement.querySelectorAll('.chose-container-sizes button');
      button[1].click();
      value = button[1].innerText;
      fixture.detectChanges();
      expect(value).toContain('M');
    }));
  });
});
