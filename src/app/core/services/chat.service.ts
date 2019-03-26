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
  public classNameCopy = '';

  sendMessage(roomId, technicalMessage?) {
    let message;
    if (!technicalMessage) {
      const chatInput = <HTMLInputElement>document.getElementById('input-' + roomId);
      message = chatInput.value;
      chatInput.value = '';
      // tell server to execute 'sendchat' and send along one parameter
      this.socket.emit('sendchat', message, roomId);
    } else {
      message = technicalMessage;
      this.socket.emit('sendchat', message, roomId);

    }
    console.log('sendchat message', message, roomId);
  }

    joinRoom(userName, password) {
      // this.socket.emit('sendchat', 'amamam');
      // this.sendMessage(, 'sssdasdasdasdasda');
      const messageColor = this.generateRandomColor();
    this.socket.emit('joinRoom', userName, password, messageColor);
  }



    addChat(chatName, userName, chatId, pass, messageColor) {
      this.socket.emit('addChat', chatName, userName, chatId, pass, messageColor);
    }
    updateChat() {
      this.socket.on('updatechat', (userName, data, room, messageColor, usersArr) => {
        const message = <HTMLInputElement>document.querySelector('.conversation-' + room);
        const div = document.createElement('div');
        div.style.color = messageColor;
        div.className = 'message message-' + userName;
        const date = new Date();
        const time = date.toLocaleString('en-GB', { timeZone: 'Europe/Kiev' });
        div.innerHTML = userName + ' : ' + data + ' : ' + time;
        if (message) {
          message.append(div);
        }
          const currUserDiv = document.querySelectorAll(`message-${this.currentUserName}`);
          const lastEl = currUserDiv[currUserDiv.length - 1];
        });
      }
    // public changeTextColor(div) {
    //   if (div.className === this.classNameCopy) {
    //     div.style.backgroundColor = 'red';
    //   } else {
    //     div.style.backgroundColor = 'green';
    //   }
    // }

    generateRandomColor() {
      this.color = '#' + Math.random().toString(16).slice(2, 8);
      // this.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
      //   (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      return this.color;
    }

    generateRandomPassword(length) {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

  return text;
    }
    // createPasswordMessage(room) {
    //   const password = this.generateRandomPassword();
    //   const message = document.querySelector('.conversation-' + room);
    //   const div = document.createElement('div');
    //   div.innerHTML = `You just started new chat. To let other users join this chat, please share with them join code:${password}`;

    //   if (message) {
    //     message.append(div);
    //   }
    // }

    addUser(username) {
      this.socket.emit('adduser', username);
    }

    updateSelectedArr(selectedArr) {
      this.socket.on('updateSelectedArr', (chatName, userName, chatId) => {
        if (!selectedArr.find(el => el.chatName === chatName)) {
          selectedArr.push({ chatName, userName, chatId });
        }
      });
    }

    updateListArr(listArr) {
      this.socket.on('updateListArr', (rooms) => {
      console.log('updated rooms', rooms);
      listArr = [...rooms];
      });
    }
    // updateChatName(arr) {
    //   this.socket.on('updateChatName', (chatName, newChatName) => {
    //   const foundChat = arr.find(el => el.chatName === chatName);
    //   foundChat.chatName = newChatName;
    // });
  }

