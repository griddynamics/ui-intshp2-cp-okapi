import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import { ProductItemShortComponent } from '../product-item/product-item-short/product-item-short.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadMoreComponent } from '../load-more/load-more.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistComponent, ProductItemShortComponent, LoadMoreComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
