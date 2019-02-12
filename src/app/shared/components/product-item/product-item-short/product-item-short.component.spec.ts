import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemShortComponent } from './product-item-short.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadComponent } from '../../lazy-load/lazy-load.component';

describe('ProductItemShortComponent', () => {
  let component: ProductItemShortComponent;
  let fixture: ComponentFixture<ProductItemShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ ProductItemShortComponent, LazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
