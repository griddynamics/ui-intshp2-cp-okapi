import { Component, OnDestroy, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ModalService } from '../../services';
import { ChatComponent } from 'src/app/shared/components/chat/chat.component';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-controller',
  templateUrl: './chat-controller.component.html',
  styleUrls: ['./chat-controller.component.scss']
})
export class ChatControllerComponent implements OnDestroy, AfterViewInit, OnInit {
  @ViewChild('chat') chat;
  isMinimized = true;
  isChatController = true;
  isJoinChat = false;
  pos = '';
  arr = [];

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
    private modalService: ModalService,
    private chatService: ChatService
  ) { }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.chatService.getChatsSource().subscribe(data => {
      this.arr = data;
    });
  }

  ngOnDestroy() {
    localStorage.setItem('azaz', 'azaza');
  }

  openChat(chatName, userName, chatId) {
    this.chatService.addChat(chatName, userName, chatId);
    // this.modalService.open(ChatComponent);
    this.chatService.updateChatArr({chatName, userName, chatId});
 }

  minimizeToggle() {
    this.isMinimized = !this.isMinimized;
  }

  startChat() {
    this.isChatController = false;
    this.isJoinChat = false;
  }

  returnToController() {
    this.isChatController = true;
  }

  joinChat() {
    this.isJoinChat = true;
    this.isChatController = false;
    // socket.emit('joinRoom', room);
  }
}
