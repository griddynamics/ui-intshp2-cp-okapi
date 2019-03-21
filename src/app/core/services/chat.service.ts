import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io.connect('http://localhost:3000');
  constructor() { }
  sendMessage(roomId) {
    const message = document.querySelector('#' + roomId);
    const myElement = document.querySelector('#' + roomId);
    console.log('our element', myElement);
    // $('#' + roomId).val('');
    // // tell server to execute 'sendchat' and send along one parameter
    // this.socket.emit('sendchat', message, roomId);
    // console.log('sendchat message', message, roomId);
  }
    joinRoom(room) {
    this.socket.emit('joinRoom', room);
  }
}
