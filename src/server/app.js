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
var usernames = {}

// rooms which are currently available in chat
var rooms = ['room1', 'room2', 'room3']

io.sockets.on('connection', function (socket) {
  // when the client emits 'adduser', this listens and executes
  socket.on('adduser', function (username) {
    // store the username in the socket session for this client
    socket.username = username
    // store the room name in the socket session for this client
    socket.room = 'room1'
    // add the client's username to the global list
    usernames[username] = username
    // send client to room 1
    socket.join('room1')
    // echo to client they've connected
    socket.emit('updatechat', 'SERVER', 'you have connected to room1')
    // echo to room 1 that a person has connected to their room
    socket.broadcast
      .to(socket.room)
      .emit('updatechat', 'SERVER', username + ' has connected to this room')
    socket.emit('updaterooms', rooms, 'room1')
  })

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
    console.log('sendchat dtaa', message, room)
    io.sockets.in(room).emit('updatechat', socket.username, message, room)
  })

  socket.on('joinRoom', function (room) {
    socket.join(room)
    socket.emit('updatechat', 'SERVER', 'you have connected to ' + room)
    // update socket session room title
    socket.broadcast
      .to(room)
      .emit('updatechat', 'SERVER', socket.username + ' has joined this room')
    socket.emit('updaterooms', rooms, room)
    socket.emit('appendchat', room)
  })

  // socket
  socket.on('addchat', function () {
    console.log('rooms', rooms)
    rooms.push('room' + (rooms.length + 1))
    socket.join('room' + (rooms.length + 1))
    io.sockets.emit('updaterooms', rooms, socket.room)
  })

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    // remove the username from global usernames list
    delete usernames[socket.username]
    // update list of users in chat, client-side
    io.sockets.emit('updateusers', usernames)
    // echo globally that this client has left
    socket.broadcast.emit(
      'updatechat',
      'SERVER',
      socket.username + ' has disconnected'
    )
    socket.leave(socket.room)
  })
})

module.exports = app
