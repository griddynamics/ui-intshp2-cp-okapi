import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ZoomComponent } from './zoom.component';

describe('ZoomComponent', () => {
  let component: ZoomComponent;
  let fixture: ComponentFixture<ZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ZoomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoomComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger mouseover', () => {
    spyOn(component, 'onMouseOver');
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('img');
    const event = new MouseEvent('mouseover');
    element.dispatchEvent(event);
    expect(component.onMouseOver).toHaveBeenCalled();
  });

  it('should be ishovered on mouseover', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('img');
    const event = new MouseEvent('mouseover');
    element.dispatchEvent(event);
    expect(component.isHovered).toBeTruthy();
  });

  it('should trigger mouseleave', () => {
    spyOn(component, 'onMouseLeave');
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('img');
    const event = new MouseEvent('mouseleave');
    element.dispatchEvent(event);
    expect(component.onMouseLeave).toHaveBeenCalled();
  });

  it('should not be ishovered on mouseleave', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('img');
    const event = new MouseEvent('mouseleave');
    element.dispatchEvent(event);
    expect(component.isHovered).toBeFalsy();
  });

  it('should trigger mousemove', () => {
    spyOn(component, 'onMouseMove');
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('img');
    const event = new MouseEvent('mousemove');
    element.dispatchEvent(event);
    expect(component.onMouseMove).toHaveBeenCalled();
  });

});
