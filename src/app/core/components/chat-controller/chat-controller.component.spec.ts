import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatControllerComponent } from './chat-controller.component';
import { ChatComponent } from 'src/app/shared/components/chat/chat.component';

describe('ChatControllerComponent', () => {
  let component: ChatControllerComponent;
  let fixture: ComponentFixture<ChatControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatControllerComponent, ChatComponent ]
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
