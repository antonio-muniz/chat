'use strict';

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

let app = express();
app.use(express.static('dist'));

let server = http.createServer(app);
let socketer = socketIO(server);
socketer.on('connection', (socket) => {
  console.log('A client is connected!');
  socket.on('MESSAGE_SENT', (message) => {
    console.log('A client has sent a message: ' + message.text);
    socketer.sockets.emit('MESSAGE_RECEIVED', message);
  });
});

module.exports = server;
