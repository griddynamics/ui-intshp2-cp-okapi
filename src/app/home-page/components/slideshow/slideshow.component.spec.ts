import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';
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
      declarations: [ SlideshowComponent ],
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

  it('should call clearInterval method when runAutoplay method is called', () => {
    component.intervalStart = 74;
    component.runAutoplay();
    expect(component.intervalStart).toBe(76);
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

  it('should return undefined when pause method is called and isStopped === true', () => {
    component.isStoped = true;
    component.pause();
    expect(component.pause()).toBeUndefined();
  });

  it('should call runAutoplay method when continue method is called', () => {
    component.isStoped = false;
    const spy = spyOn(component, 'runAutoplay');
    component.continue();
    expect(spy).toHaveBeenCalled();
  });

  it('should return undefined when continue method is called and isStopped === true', () => {
    component.isStoped = true;
    component.continue();
    expect(component.continue()).toBeUndefined();
  });

});
