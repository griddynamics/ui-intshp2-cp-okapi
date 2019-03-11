import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '../../../shared/shared.module';

import {
  ProductListPageComponent,
  FacetedNavigationComponent,
  CheckboxFilterComponent,
  PriceRangeFilterComponent,
  RadioFilterComponent
} from '../';
import { HttpClientModule } from '@angular/common/http';

describe('ProductListPageComponent', () => {
  let component: ProductListPageComponent;
  let fixture: ComponentFixture<ProductListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule, HttpClientModule ],

      declarations: [
        ProductListPageComponent,
        FacetedNavigationComponent,
        CheckboxFilterComponent,
        PriceRangeFilterComponent,
        RadioFilterComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call function onLoadMore when if statement is false', () => {
    component.loadTo = 1;
    component.totalAmount = 2;
    component.onLoadMore(0);
    fixture.detectChanges();
    expect(component.loadTo).not.toBe(component.totalAmount);
  });

  it('should call function onLoadMore when if statement is true', () => {
    component.loadTo = 2;
    component.totalAmount = 1;
    component.onLoadMore(2);
    fixture.detectChanges();
    expect(component.loadTo).toBe(component.totalAmount);
  });

  it('should have 2 subscriptions', () => {
    expect(component.subscriptions.length).toBe(2);
  });

});
