import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;
  let functionsReturn;
  const moveDirectionRight = 1;
  const moveDirectionLeft = 0;

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

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    component.stop();
    functionsReturn = component.stop();
    expect(functionsReturn).toBeUndefined();
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    functionsReturn = component.continue();
    expect(functionsReturn).toBeUndefined();
  });

  it('govno', () => {
    component.isStoped = true;
    component.continue();
    expect(component.isHovered).toBe(false);
  });

  it('govno2', () => {
    component.isStoped = true;
    component.pause();
    expect(component.isHovered).toBe(false);
  });

  it('govno3', () => {
    component.moveSlide(1);
    expect(component.selectedSlideIndex).toBe(1);
  });

  it('govno4', () => {
    component.moveSlide(0);
    const slidesLength = component.responseImgs.length;
    expect(component.selectedSlideIndex).toBe(slidesLength - 1);
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    functionsReturn = component.pause();
    expect(functionsReturn).toBeUndefined();
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    functionsReturn = component.moveSlide(1);
    expect(functionsReturn).toBeUndefined();
  });

  it('should return undefined if we call stop', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    functionsReturn = component.bulletHandler(1);
    expect(functionsReturn).toBeUndefined();
  });

  it('should change transition depending on killswitch value', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    component.slideshowTransitionEnabled = true;
    component.slidesHolder.nativeElement.style.transition = 'mock transition';
    component.bulletHandler(1);
    expect(component.slidesHolder.nativeElement.style.transition).toBe('');

    component.slideshowTransitionEnabled = false;
    component.slidesHolder.nativeElement.style.transition = 'mock transition';
    component.bulletHandler(1);
    expect(component.slidesHolder.nativeElement.style.transition).toBe('none 0s ease 0s');
  });

  it('should change position settings', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    component.selectedSlideIndex = 1;
    component.prepareSlideMove(moveDirectionRight);
    expect(component.selectedSlideIndex).toBe(2);

    component.selectedSlideIndex = 1;
    component.prepareSlideMove(moveDirectionLeft);
    expect(component.selectedSlideIndex).toBe(0);
  });

  it('should change slide parameters at slider edges', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    component.selectedSlideIndex = 1;
    component.edgeMoveOpacity(moveDirectionRight);
    expect(component.selectedSlideIndex).toBe(0);

    component.selectedSlideIndex = 1;
    component.slidesLength = 1;
    component.edgeMoveOpacity(moveDirectionLeft);
    expect(component.selectedSlideIndex).toBe(0);
  });

  it('should call specific methods depending on right direction', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    let spy = spyOn(component, 'edgeMoveOpacity');
    fixture.detectChanges();
    component.slidesLength = 1;
    component.moveSliderOpacity(moveDirectionRight);
    expect(spy).toHaveBeenCalled();

    spy = spyOn(component, 'prepareSlideMove');
    fixture.detectChanges();
    component.slidesLength = -1;
    component.moveSliderOpacity(moveDirectionRight);
    expect(spy).toHaveBeenCalled();
  });

  it('should call specific methods depending on left direction', () => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    const spy = spyOn(component, 'edgeMoveOpacity');
    fixture.detectChanges();
    component.moveSliderOpacity(moveDirectionLeft);
    expect(spy).toHaveBeenCalled();
  });

});
