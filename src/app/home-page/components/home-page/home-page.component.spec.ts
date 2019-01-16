import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomePageComponent } from './home-page.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { CarouselItemComponent } from 'src/app/shared/components/carousel/carousel-item/carousel-item.component';
import { JoinUsComponent } from 'src/app/shared/components/join-us/join-us.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, SharedModule],
      declarations: [ HomePageComponent, CarouselComponent, CarouselItemComponent, SlideshowComponent, JoinUsComponent ] 
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
