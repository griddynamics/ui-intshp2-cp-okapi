import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';
import { ProductItemShortComponent } from 'src/app/shared/components/product-item/product-item-short/product-item-short.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SlideshowComponent } from '../slideshow/slideshow.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HomePageComponent, SlideshowComponent, ProductItemComponent, ProductItemShortComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
