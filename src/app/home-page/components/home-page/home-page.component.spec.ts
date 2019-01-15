import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';
import { CarouselItemComponent } from 'src/app/shared/components/carousel/carousel-item/carousel-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ HomePageComponent, CarouselComponent, ProductItemComponent, CarouselItemComponent ]
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
