import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ModalService } from '../../services';
import { ChatComponent } from 'src/app/shared/components/chat/chat.component';

@Component({
  selector: 'app-chat-controller',
  templateUrl: './chat-controller.component.html',
  styleUrls: ['./chat-controller.component.scss']
})
export class ChatControllerComponent implements OnDestroy, AfterViewInit {
  @ViewChild('chat') chat;
  isMinimized = true;
  isChatController = true;
  isJoinChat = false;
  pos = '';

  chats = [
    {
      'name': 'Family Chat',
    },
    {
      'name': 'Friends Chat',
    },
  ];

  constructor(
    private el: ElementRef,
    private modalService: ModalService
  ) { }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    localStorage.setItem('azaz', 'azaza');
  }

  openChat() {
    this.modalService.open(ChatComponent);
 }

  minimizeToggle() {
    this.isMinimized = !this.isMinimized;
  }

  startChat() {
    this.isChatController = false;
    this.isJoinChat = false;
    this.modalService.open(ChatComponent);
  }

  returnToController() {
    this.isChatController = true;
  }

  joinChat() {
    this.isJoinChat = true;
    this.isChatController = false;
  }
}
