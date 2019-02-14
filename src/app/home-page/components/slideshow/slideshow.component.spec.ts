import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';
import { LazyLoadComponent } from 'src/app/shared/components/lazy-load/lazy-load.component';
import { ImgPlaceholderComponent } from 'src/app/shared/components/img-placeholder/img-placeholder.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

enum SLIDE_DIRECTION {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT'
}

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshowComponent, ImgPlaceholderComponent, LazyLoadComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a number', () => {
    component.runAutoplay();
    expect(typeof component.intervalStart).toBe('number');
  });

  it('should check equality if moveSlide method is called', () => {
    component.selectedSlideIndex = 1;
    component.currentSlideIndex = 1;
    component.moveSlide(SLIDE_DIRECTION.RIGHT);
    expect(component.selectedSlideIndex).toBe(component.currentSlideIndex);

    component.selectedSlideIndex = 1;
    component.currentSlideIndex = 1;
    component.moveSlide(SLIDE_DIRECTION.LEFT);
    expect(component.selectedSlideIndex).toBe(component.currentSlideIndex);
  });

  it('should check currentSlideIndex ', () => {
    component.currentSlideIndex = 0;
    component.slidesLength = 1;
    component.moveSlide(SLIDE_DIRECTION.RIGHT);
    expect(component.currentSlideIndex).toBe(0);
  });

  it('should set isHovered to true when pause method is called', () => {
    component.isStoped = false;
    component.pause();
    expect(component.isHovered).toBe(true);
  });

  it('should not change isHovered when pause method is called and isStopped === true', () => {
    component.isHovered = false;
    component.isStoped = true;
    component.pause();
    expect(component.isHovered).toBe(false);
  });

  it('should call runAutoplay method when continue method is called', () => {
    component.isStoped = false;
    const spy = spyOn(component, 'runAutoplay');
    component.continue();
    expect(spy).toHaveBeenCalled();
  });

  it('should return undefined when continue method is called and isStopped === true', () => {
    component.isHovered = true;
    component.isStoped = true;
    component.continue();
    expect(component.isHovered).toBe(true);
  });

});
