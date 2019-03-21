import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  isMinimized = false;
  isChatSettings = false;
  isUsersShowed = false;
  @Input() chat = {};

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
    ) { }

  ngOnInit() {
    if (!this.chat) {
      return;
    }
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
