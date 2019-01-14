import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsComponent } from './join-us.component';

describe('JoinUsComponent', () => {
  let component: JoinUsComponent;
  let fixture: ComponentFixture<JoinUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
