import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingAreaComponent } from './advertising-area.component';
import { By } from '@angular/platform-browser';
import { SafePipe } from '../../pipes/safe.pipe';


describe('AdvertisingAreaComponent', () => {
  let component: AdvertisingAreaComponent;
  let fixture: ComponentFixture<AdvertisingAreaComponent>;
  let spy;
  let debug;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisingAreaComponent, SafePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(AdvertisingAreaComponent.prototype, 'calcPlaceholderRatio').and.callThrough();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AdvertisingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call method', () => {
    fixture = TestBed.createComponent(AdvertisingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.placeholderRatio).not.toBeDefined();
  });

  it('should calculate correctly', () => {
    fixture = TestBed.createComponent(AdvertisingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.calcPlaceholderRatio(100, 200)).toBe(50);
  });

  it('should render the external content', () => {
    fixture = TestBed.createComponent(AdvertisingAreaComponent);
    component = fixture.componentInstance;
    component.content = '<img>';
    fixture.detectChanges();
    debug = fixture.debugElement.query(By.css('.lazy-container'));
    element = debug.nativeElement;
    expect(element.innerHTML).toContain(component.content);
  });
});
