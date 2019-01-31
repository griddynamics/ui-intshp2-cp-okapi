import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from 'src/app/core/services/products.service';
import { ProductItemShortComponent } from 'src/app/shared/components/product-item/product-item-short/product-item-short.component';
import { LoadMoreComponent } from 'src/app/shared/components/load-more/load-more.component';
import { HttpClientModule } from '@angular/common/http';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistComponent, ProductItemShortComponent, LoadMoreComponent],
      imports: [ RouterTestingModule, HttpClientModule ]
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

  it('should call singleShortItemWidth with correct args', () => {
    component.singleShortItemWidth('');
  });

  it('should not call countItemsInViewPort if statement is true', () => {
    component.refToSingleItem = true;
    fixture.detectChanges();
    component.singleShortItemWidth('');
  });

  it('should call countItemsInViewPort if statement is false', () => {
    component.refToSingleItem = false;
    fixture.detectChanges();
    component.singleShortItemWidth('');
  });

  it('should change visibleWishItems, if visibleWishItems is bigger than wishListArr', () => {
    component.wishListArr = 5;
    component.visibleWishItems = 3;
    const fixedVisibleItemsCount = 3;
    fixture.detectChanges();
    spyOn(component, 'loadMoreHandler').and.callThrough();
    component.loadMoreHandler();
    expect(component.visibleWishItems).not.toEqual(fixedVisibleItemsCount);
  });

  it('should not change visibleWishItems, if visibleWishItems is bigger than wishListArr', () => {
    component.wishListArr = 3;
    component.visibleWishItems = 5;
    const fixedVisibleItemsCount = 5;
    fixture.detectChanges();
    spyOn(component, 'loadMoreHandler').and.callThrough();
    component.loadMoreHandler();
    expect(component.visibleWishItems).toEqual(fixedVisibleItemsCount);
  });
});
