import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafePipe } from '../../pipes/safe.pipe';
import { AdvertisingAreaComponent, ImgPlaceholderComponent } from '../';

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
