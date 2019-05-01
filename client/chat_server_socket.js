'use strict';

const config = require('./config');
const io = require('socket.io-client');
const serverEvents = require('../app/transport/socket/events');
const serverEventListeners = require('./chat_server_event_listeners');

function create() {
  let socket = io(config.CHAT_SERVER_URL);
  registerListeners(socket);
  return socket;
}

function registerListeners(socket) {
  for (let eventType of Object.values(serverEvents)) {
    let listener = serverEventListeners[eventType];
    socket.on(eventType, listener);
  }
}

module.exports = { create };
