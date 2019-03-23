import { Component, OnInit, Input , AfterViewInit} from '@angular/core';
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
  @Input() chat = {};
  @Input() ind;

  public messagesArr: string[] = [];
  // public message;

  users = [
    {
      'name': 'Steve',
    },
    {
      'name': 'Tim',
    },
  ];

  private socket = io.connect('http://localhost:3000');
  constructor(
    private chatService: ChatService
    ) { console.log(); }

  ngOnInit() {
    // console.log(this.ind);
    //  listener, whenever the server emits 'updatechat', this updates the chat body
    // this.socket.on('updatechat', function(username, data, room) {
      // console.log('room should updchat', username, data, '.conversation-' + room);
      // $('.conversation-' + room).append('<b>' + username + ':</b> ' + data + '<br>');
      // });
    }

    ngAfterViewInit () {
      this.chatService.currentMessObj.subscribe(data => {
        // this.messagesArr.push(data.data);
        // console.log(this.messagesArr);
        // this.message = data.data;
        console.log(data);
        this.clearArr();
      });
  }

  clearArr() {
    this.messagesArr = [];
  }

 sendMes(roomID, message) {
   this.messagesArr.push(message);
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
