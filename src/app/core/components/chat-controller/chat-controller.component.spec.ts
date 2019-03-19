import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatControllerComponent } from './chat-controller.component';

describe('ChatControllerComponent', () => {
  let component: ChatControllerComponent;
  let fixture: ComponentFixture<ChatControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
