import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;
  let functionsReturn;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowComponent ]
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
});
