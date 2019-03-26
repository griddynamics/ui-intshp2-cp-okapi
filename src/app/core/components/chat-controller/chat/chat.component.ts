import { Component, OnInit, Input, AfterViewInit, ViewChild, EventEmitter, Output } from '@angular/core';
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
  public chatNamee;
  private socket = io.connect('http://localhost:3000');


  public messagesArr: string[] = [];
  public message;
  public roomArr;
  @Output() updateChatName = new EventEmitter();
  @Input() chatArr = [];

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
    if (!this.chat) {
      return;
    }
    this.chatNamee = this.chat.chatName; 

  
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

  editChatName(newChatName) {
    // this.chat.chatName = newChatName;
    this.chatNamee = newChatName;
  }

  onEditChatName(chatName, newChatName) {
    console.log(this.chatNamee)
    this.updateChatName.emit({chatName,newChatName});
    this.editChatName(newChatName);
  }

}
