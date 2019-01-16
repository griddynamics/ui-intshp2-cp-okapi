import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call onMouseOver, if product item was hovered', () => {
  //   component.product = {};
  //   fixture.detectChanges();
  //   const item = fixture.debugElement.query(By.css('.product-item'));
  //   spyOn(component, 'onMouseOver');
  //   expect(item).toBeDefined();

  //   item.triggerEventHandler('mouseover', null);
  //   expect(component.onMouseOver).toHaveBeenCalled();
  // });
});
