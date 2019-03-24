import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io.connect('http://localhost:3000');
  constructor() { }

  sendMessage(roomId) {
    const chatInput = <HTMLInputElement>document.getElementById('input-' + roomId);
    const message = chatInput.value;
    chatInput.value = '';
    // tell server to execute 'sendchat' and send along one parameter
    this.socket.emit('sendchat', message, roomId);
    console.log('sendchat message', message, roomId);
  }

    joinRoom(room) {
    this.socket.emit('joinRoom', room);
  }

    addChat(chatName, userName, chatId) {
      this.socket.emit('addChat', chatName, userName, chatId);
    }

    updateChat() {
      this.socket.on('updatechat', (username, data, room) => {
        const message = <HTMLInputElement>document.querySelector('.conversation-' + room);
        const div = document.createElement('div');
        div.className = 'message';
        const date = new Date();
        const time = date.toLocaleString('en-GB', { timeZone: 'UTC' });
        div.innerHTML = username + ' : ' + data + ' : ' + time;
        message.append(div);
      });
    }

    addUser(username) {
      this.socket.emit('adduser', username);
    }
}
