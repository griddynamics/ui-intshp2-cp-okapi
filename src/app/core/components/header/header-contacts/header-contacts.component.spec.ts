import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContactsComponent } from './header-contacts.component';

describe('HeaderContactsComponent', () => {
  let component: HeaderContactsComponent;
  let fixture: ComponentFixture<HeaderContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
