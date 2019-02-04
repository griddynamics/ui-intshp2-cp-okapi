import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListComponent } from './wish-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductItemShortComponent } from 'src/app/shared/components/product-item/product-item-short/product-item-short.component';
import { LoadMoreComponent } from 'src/app/shared/components/load-more/load-more.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';

describe('WishlistComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishListComponent, ProductItemShortComponent, LoadMoreComponent, HeadingComponent],
      imports: [ RouterTestingModule, HttpClientModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
