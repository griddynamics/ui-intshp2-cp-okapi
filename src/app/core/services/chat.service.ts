import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io.connect('http://localhost:3000');
  constructor() { }
  public color;
  public password;
  public currentUserName = '';

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
      this.generateRandomPassword();
    }

    updateChat() {
      this.socket.on('updatechat', (username, data, room) => {
        const message = <HTMLInputElement>document.querySelector('.conversation-' + room);
        const div = document.createElement('div');
        div.className = 'message-' + username;
        const date = new Date();
        const time = date.toLocaleString('en-GB', { timeZone: 'Europe/Kiev' });
        div.innerHTML = username + ' : ' + data + ' : ' + time;
        if (message) {
          message.append(div);
        }
          const currUserDiv = document.querySelectorAll(`message-${this.currentUserName}`);
          const lastEl = currUserDiv[currUserDiv.length - 1];
          if (div.innerText.includes(this.currentUserName)) {
            div.style.backgroundColor = this.color;
          }
      });
    }

    generateRandomColor() {
      this.color = '#' + Math.random().toString(16).slice(2, 8);
      // this.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
      //   (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      return this.color;
    }

    generateRandomPassword() {
      this.password = ('' + Math.random()).substring(2, 9);
      console.log(this.password);
      return this.password;
    }

    addUser(username) {
      this.socket.emit('adduser', username);
    }
}
