import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { ProductOrderComponent } from './product-order.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductOrderComponent', () => {
  let component: ProductOrderComponent;
  let fixture: ComponentFixture<ProductOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOrderComponent ],
      imports: [ RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call increaseQuantity on click', (() => {
    const prevValue = component.productConfiguration.count;
    spyOn(component, 'increaseQuantity').and.callThrough();
    const button = fixture.debugElement.nativeElement.querySelector('.button-plus');
    button.click();
    fixture.detectChanges();
    expect(component.increaseQuantity).toHaveBeenCalled();
    expect(prevValue).toBeLessThan(component.productConfiguration.count);
  }));

  it('should call decreaseQuantity on click', (() => {
    const prevValue = component.productConfiguration.count;
    spyOn(component, 'decreaseQuantity').and.callThrough();
    const button = fixture.debugElement.nativeElement.querySelector('.button-minus');
    button.click();
    fixture.detectChanges();
    expect(component.decreaseQuantity).toHaveBeenCalled();
    expect(prevValue).toBeGreaterThanOrEqual(component.productConfiguration.count);
  }));

  describe('sizes buttons', () => {
    let sizes;

    beforeEach(() => {
      sizes = ['S', 'M', 'L', 'XL'];
      component.sizes = sizes;
      fixture.detectChanges();
    });

    it('should not render buttons if sizes.length = 0', () => {
      sizes = [];
      component.sizes = sizes;
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
