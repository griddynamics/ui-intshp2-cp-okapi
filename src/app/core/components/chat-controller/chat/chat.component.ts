import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
  isMinimized = false;
  isChatSettings = false;
  isUsersShowed = false;
  @Input() chat = {};
  @Input() ind;
  @Input() color;
  @Input() pass;
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
    console.log(this.pass);
    // if (!this.somebodyJoined) {
    //   return;
    // }
    // console.log(this.somebodyJoined)
  }

  ngAfterViewInit() {
    const userColor = this.chatService.generateRandomColor();
    this.color = userColor;
    // console.log(userColor);
    // if (!this.chat || !this.ind || (this.chat && !this.ind) || (!this.chat && this.ind) ) {
    //   this.chatService.updateChat();
    //   // this.chatService.sendMessage()
    // }
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

}
