'use strict';

const socketIO = require('socket.io');
const eventRegistry = require('./event_registry');

let socketer;

function initialize(server) {
  socketer = socketIO(server);
  socketer.on('connection', (socket) => {
    console.log('A client is connected!');
    eventRegistry.registerListeners(socket);
  });
}

function broadcast(eventType, payload) {
  socketer.sockets.emit(eventType, payload);
}

module.exports = {
  initialize,
  broadcast
};
