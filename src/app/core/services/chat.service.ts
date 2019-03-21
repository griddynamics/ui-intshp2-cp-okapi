import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io.connect('http://localhost:3000');
   chatsArr = [];
   chatsSource = new BehaviorSubject([]);

   getChatsSource() {
     return this.chatsSource.asObservable();
   }
  constructor() { }
  sendMessage(roomId) {
    const message = document.querySelector('#' + roomId);
    console.log(message);
    // $('#' + roomId).val('');
    // tell server to execute 'sendchat' and send along one parameter
    this.socket.emit('sendchat', message, roomId);
    // console.log('sendchat message', message, roomId);
  }
    joinRoom(room) {
    this.socket.emit('joinRoom', room);
  }
    addChat(chatName, userName, chatId) {
      this.socket.emit('addChat', chatName, userName, chatId);
    }

    updateChatArr(item) {
      // console.log(item);
      this.chatsArr.push(item);
      this.chatsSource.next(this.chatsArr);
    }

}
