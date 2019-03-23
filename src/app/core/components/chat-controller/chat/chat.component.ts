import { Component, OnInit, Input , AfterViewInit, OnChanges, OnDestroy} from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  isMinimized = false;
  isChatSettings = false;
  isUsersShowed = false;
  @Input() chat = {};
  @Input() ind;

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
      // this.message = this.chatService.currentMessObj.subscribe(data => {
      // });
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    // this.message.unsubscribe();
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
