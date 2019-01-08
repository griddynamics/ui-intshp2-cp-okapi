import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingAreaComponent } from './advertising-area.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';


describe('AdvertisingAreaComponent', () => {
  let component: AdvertisingAreaComponent;
  let fixture: ComponentFixture<AdvertisingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisingAreaComponent, SafePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
