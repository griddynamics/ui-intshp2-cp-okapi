import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPlaceholderComponent } from './img-placeholder.component';

describe('ImgPlaceholderComponent', () => {
  let component: ImgPlaceholderComponent;
  let fixture: ComponentFixture<ImgPlaceholderComponent>;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method', () => {
    fixture = TestBed.createComponent(ImgPlaceholderComponent);
    component = fixture.componentInstance;
    spy = spyOn(component, 'calcPlaceholderRatio');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.placeholderRatio).not.toBeDefined();
  });

  it('should calculate correctly', () => {
    fixture = TestBed.createComponent(ImgPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.calcPlaceholderRatio(100, 200)).toBe(50);
  });

});
