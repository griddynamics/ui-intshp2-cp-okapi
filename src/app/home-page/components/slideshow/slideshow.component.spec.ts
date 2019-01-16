import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';
import { By } from '@angular/platform-browser';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;

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

  it('should call bulletHandler, if bullet was pressed', () => {
    const bullet = fixture.debugElement.query(By.css('.bullets > div'));
    spyOn(component, 'bulletHandler');
    expect(bullet).toBeDefined();

    bullet.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.bulletHandler).toHaveBeenCalled();
  });

  it('should call stop, if slider was clicked', () => {
    const slider = fixture.debugElement.query(By.css('.wrapper'));
    spyOn(component, 'stop');
    expect(slider).toBeDefined();

    slider.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.stop).toHaveBeenCalled();
  });

  it('should call pause, if slider was hovered', () => {
    const slider = fixture.debugElement.query(By.css('.wrapper'));
    spyOn(component, 'pause');
    expect(slider).toBeDefined();

    slider.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(component.pause).toHaveBeenCalled();
  });

  it('should call continue, if slider was unhovered', () => {
    const slider = fixture.debugElement.query(By.css('.wrapper'));
    spyOn(component, 'continue');
    expect(slider).toBeDefined();

    slider.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(component.continue).toHaveBeenCalled();
  });

  it('should call moveSlide, if nextButton was pressed', () => {
    const nextButton = fixture.debugElement.query(By.css('#buttonNext'));
    spyOn(component, 'moveSlide');
    expect(nextButton).toBeDefined();
  });
});
