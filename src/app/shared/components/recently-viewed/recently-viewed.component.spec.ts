import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewedComponent } from './recently-viewed.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductItemShortComponent } from '../product-item/product-item-short/product-item-short.component';
import { CarouselItemComponent } from '../carousel/carousel-item/carousel-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecentlyViewedComponent', () => {
  let component: RecentlyViewedComponent;
  let fixture: ComponentFixture<RecentlyViewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RecentlyViewedComponent,
                      CarouselComponent,
                      ProductItemShortComponent,
                      CarouselItemComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
