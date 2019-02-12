import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SafePipe } from '../../pipes/safe.pipe';
import { AdvertisingAreaComponent } from './advertising-area.component';
import { ImgPlaceholderComponent } from '../img-placeholder/img-placeholder.component';


describe('AdvertisingAreaComponent', () => {
  let component: AdvertisingAreaComponent;
  let fixture: ComponentFixture<AdvertisingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisingAreaComponent, ImgPlaceholderComponent, SafePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AdvertisingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
