import {
  Component,
  OnDestroy,
  ElementRef,
  ViewChild,
  OnInit,
  OnChanges,
  AfterViewChecked,
} from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-controller',
  templateUrl: './chat-controller.component.html',
  styleUrls: ['./chat-controller.component.scss'],
})
export class ChatControllerComponent
  implements OnDestroy, OnInit, OnChanges, AfterViewChecked {
  @ViewChild('chat') chat;
  isMinimized = false;
  isChatController = false;
  isJoinChat = true;
  pos = '';
  arr = [];
  selectedArr = [];
  isOpen = true;

  chats = [
    {
      name: 'Family Chat',
    },
    {
      name: 'Friends Chat',
    },
  ];

  constructor(private el: ElementRef, private chatService: ChatService) {}

  ngAfterViewChecked() {}

  ngOnInit() {
    if (!localStorage.getItem('chats')) {
      localStorage.setItem('chats', '[]');
    } else {
      this.arr = JSON.parse(localStorage.getItem('chats'));
    }
    // this.chatService.addUser();
  }

  selectChat(e) {
    if (!this.selectedArr.includes(e)) {
      this.selectedArr.push(e);
    } else {
      const currItemIndex = this.selectedArr.findIndex(
        el => e.chatId === el.chatId
      );
      this.selectedArr.splice(currItemIndex, 1);
    }
  }

  updateChats() {
    localStorage.setItem('chats', JSON.stringify(this.arr));
  }

  ngOnDestroy() {}

  ngOnChanges() {}

  openNewChat(chatName, userName, chatId) {
    this.arr.push({ chatName, userName, chatId });
    this.selectedArr.push({ chatName, userName, chatId });
    this.updateChats();
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
  }
  joinExsitingChat(chatName, userName, chatId) {
    if (!chatId) {
      return;
    }
    this.chatService.joinRoom(chatId);
    this.selectedArr.push({ chatName, userName, chatId });
    this.chatService.addUser(userName);
  }
}
