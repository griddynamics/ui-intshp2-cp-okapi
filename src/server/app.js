'use strict'

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const cors = require('cors')

const config = require('./config')

const http = require('http')

const router = require('./router')

app.use(cors())
app.use(bodyParser.json({ limit: '500mb' }))
app.use(express.static('src/assets'))
app.use('/', router)

const server = http.createServer(app);
const io = require('socket.io').listen(server);

server.listen(config.PORT, () => {
  console.log(`listening on ${config.PORT}`)
})

// usernames which are currently connected to the chat
var userNames = {}

// rooms which are currently available in chat
var rooms = [];

io.sockets.on('connection', function (socket) {
  // // when the client emits 'adduser', this listens and executes
  // socket.on('adduser', function (userName) {
  //   // store the username in the socket session for this client
  //   socket.userName = userName
  //   // store the room name in the socket session for this client
  //   socket.room = 'room1'
  //   // add the client's username to the global list
  //   userNames[userName] = userName
  //   // send client to room 1
  //   socket.join('room1')
  //   // echo to client they've connected
  //   socket.emit('updatechat', 'SERVER', 'you have connected to room1')
  //   // echo to room 1 that a person has connected to their room
  //   socket.broadcast
  //     .to(socket.room)
  //     .emit('updatechat', 'SERVER', userName + ' has connected to this room')
  //   socket.emit('updaterooms', rooms, 'room1')
  // })

  // when the client emits 'sendchat', this listens and executes

  // socket.on('switchRoom', function(newroom){
  // 	socket.leave(socket.room);
  // 	socket.join(newroom);
  // 	socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
  // 	// sent message to OLD room
  // 	socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
  // 	// update socket session room title
  // 	socket.room = newroom;
  // 	socket.emit('updaterooms', rooms, newroom);
  // });

  socket.on('sendchat', function (message, room) {
    // we tell the client to execute 'updatechat' with 2 parameters
    // console.log('sendchat data', message, room)
    io.sockets.in(room).emit('updatechat', socket.userName, message, room, socket.messageColor);
  })

  socket.on('joinRoom', function (userName, password, messageColor) {
    let roomObj = rooms.find(el => el.pass === password);
    let indexOfCurrRoom = rooms.findIndex(el => el.pass === password);
    rooms[indexOfCurrRoom].users.push(userName);
    console.log('!!!!!!!', rooms[indexOfCurrRoom].users);
    let room;
    socket.userName = userName;
    socket.messageColor = messageColor;
    if (roomObj){
      room = roomObj.chatId;
      // console.log('Johnny , i"m joining');
      socket.join(room);
    } else {
      // console.log('there is no room with such secret code');
      return null;
    }
    // socket.join(room)
    io.sockets.in(room).emit('updatechat', 'SERVER', userName + ' connected to this room', room);
    // socket.emit('updatechat', 'SERVER', 'you have connected to ' + room, room);
    // console.log('you have connected to', room);
    // update socket session room title
    // socket.broadcast
    //   .to(room)
    //   .emit('updatechat', 'SERVER', socket.userName + ' has joined this room')
    // socket.emit('updaterooms', rooms, room)
    // socket.emit('appendchat', room)
    socket.emit('updateSelectedArr', roomObj.chatName, userName, roomObj.chatId);
  })
  
  socket.on('updateChatName', (chatName, newChatName) => {
    const foundChat = rooms.find(el => el.chatName === chatName);
    foundChat.chatName = newChatName;
    console.log(rooms)
    socket.emit('updateListArr', rooms);
  }
  );
  // socket
  socket.on('addChat', function (chatName, userName, chatId, pass, messageColor) {
    socket.userName = userName;
    socket.messageColor = messageColor;
    // console.log('rooms pre', rooms);
    const users = [userName];
    rooms.push({chatName, userName, chatId, pass, messageColor, users});
    console.log(rooms);
    socket.join(chatId);
    // console.log('rooms post', rooms);
    // socket.emit('joinRoom', userName, pass);
    // io.sockets.emit('updaterooms', rooms, socket.room)
  })

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    // remove the username from global usernames list
    delete userNames[socket.userName]
    // update list of users in chat, client-side
    io.sockets.emit('updateusers', userNames)
    // echo globally that this client has left
    socket.broadcast.emit(
      'updatechat',
      'SERVER',
      socket.userName + ' has disconnected'
    )
    socket.leave(socket.room)
  })
})

module.exports = app
