import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeIconComponent } from './swipe-icon.component';

describe('SwipeIconComponent', () => {
  let component: SwipeIconComponent;
  let fixture: ComponentFixture<SwipeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
