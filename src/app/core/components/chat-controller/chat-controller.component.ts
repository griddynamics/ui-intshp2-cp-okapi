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
import { ConsoleReporter } from 'jasmine';

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
  isJoinChat = false;
  pos = '';
  arr = [];
  selectedArr = [];
  isOpen = true;
  public password;
  // public somebodyJoined;

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

  this.chatService.updateChat();


      // this.chatService.sendMessage()

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
    this.password = this.chatService.generateRandomPassword(8);
    // console.log(pass)
    this.arr.push({ chatName, userName, chatId});
    this.selectedArr.push({ chatName, userName, chatId});
    console.log(this.selectedArr, 'selected start');
    this.chatService.addChat(chatName, userName, chatId, this.password);
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
  joinExsitingChat(userName, password) {
      this.chatService.joinRoom(userName, password);
      this.chatService.addUser(userName);
      this.chatService.updateSelectedArr(this.selectedArr);
      console.log(this.selectedArr, 'join');
  }



}
