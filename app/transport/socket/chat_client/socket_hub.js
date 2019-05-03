'use strict';

const socketIO = require('socket.io');

let hub;

function initialize(server, eventRegistry) {
  hub = socketIO(server);
  hub.on('connection', (socket) => {
    console.log('A client is connected!');
    eventRegistry.registerListeners(socket);
  });
}

function broadcast(eventType, payload) {
  hub.sockets.emit(eventType, payload);
}

module.exports = {
  initialize,
  broadcast
};
