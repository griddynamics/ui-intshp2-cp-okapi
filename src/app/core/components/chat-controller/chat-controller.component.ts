import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-controller',
  templateUrl: './chat-controller.component.html',
  styleUrls: ['./chat-controller.component.scss']
})
export class ChatControllerComponent implements OnInit {
  isMinimized = false;
  isChatController = true;
  isJoinChat = false;

  chats = [
    {
      'name': 'Family Chat',
    },
    {
      'name': 'Friends Chat',
    },
  ];

  constructor() { }

  ngOnInit() {
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
}
