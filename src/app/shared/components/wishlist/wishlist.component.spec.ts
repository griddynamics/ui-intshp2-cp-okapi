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

  it('should create', () => {
    component.visibleWishItems = 1;
    component.allProducts = 5;
    // const spy = spyOn(component, 'countItemsInViewPort');
    // component.countItemsInViewPort();
    // expect(spy).toHaveBeenCalled();
  });

  it('should create', () => {
    const spy = spyOn(component, 'loadMoreHandler');
    const test = component.loadMoreHandler();
    component.loadMoreHandler();
    // expect(spy).toHaveBeenCalled();
    // expect(test).toEqual(undefined);
  });
});
