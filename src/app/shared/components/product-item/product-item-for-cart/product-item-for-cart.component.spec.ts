import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemForCartComponent } from './product-item-for-cart.component';

describe('ProductItemForCartComponent', () => {
  let component: ProductItemForCartComponent;
  let fixture: ComponentFixture<ProductItemForCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemForCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemForCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
