import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public messObjSource = new BehaviorSubject({
    username: '',
    data: '',
    room: ''
  });
  public currentMessObj = this.messObjSource.asObservable();
  public messObj = {};

  private socket = io.connect('http://localhost:3000');
  //  chatsArr = [];
  //  chatsSource = new BehaviorSubject([]);

  //  getChatsSource() {
    //  return this.chatsSource.asObservable();
  //  }
  constructor() { }
  sendMessage(roomId) {
    const chatInput = <HTMLInputElement>document.getElementById('input-' + roomId);
    const message = chatInput.value;
    // $('#input-' + roomId).val('');
    // tell server to execute 'sendchat' and send along one parameter
    this.socket.emit('sendchat', message, roomId);
    this.updateChat();
    // console.log('sendchat message', message, roomId);
  }
    joinRoom(room) {
    this.socket.emit('joinRoom', room);
  }
    addChat(chatName, userName, chatId) {
      this.socket.emit('addChat', chatName, userName, chatId);
    }

    updateChat() {
      this.socket.on('updatechat', (username, data, room) => {
        // this.messObj = {username, data, room };
        // console.log(this.messObj);
        this.messObjSource.next({username, data, room });

        // document.querySelector('.conversation-' + room).append('<b>' + username + ':</b> ' + data + '<br>');
      });
    }

    // messArr;
    // updateChatArr(item) {
    //   // console.log(item);
    //   this.chatsArr.push(item);
    //   this.chatsSource.next(this.chatsArr);
    // }

}
