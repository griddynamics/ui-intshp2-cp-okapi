import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
  isMinimized = false;
  isChatSettings = false;
  isUsersShowed = false;
  @Input() chat;
  @Input() ind;
  @Input() color;
  @Input() pass;
  private socket = io.connect('http://localhost:3000');
  // @Input() somebodyJoined;


  public messagesArr: string[] = [];
  public message;

  users = [
    {
      'name': 'Steve',
    },
    {
      'name': 'Tim',
    },
  ];

  constructor(
    private chatService: ChatService
    ) {}

  ngOnInit() {
    if (!this.pass) {
      return;
    }
  }

  ngAfterViewInit() {
    const userColor = this.chatService.generateRandomColor();
    this.color = userColor;
  }

 sendMes(roomID) {
   this.chatService.sendMessage(roomID);
 }

  minimizeToggle() {
    this.isMinimized = !this.isMinimized;
  }

  chatSettings() {
    this.isChatSettings = true;
  }

  returnToChat() {
    this.isChatSettings = false;
  }

  toggleUsersList() {
    this.isUsersShowed = !this.isUsersShowed;
  }

  editChatName(value) {
    this.chat.chatName = value;
  }
}
