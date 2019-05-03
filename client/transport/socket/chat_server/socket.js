'use strict';

const config = require('../../../config');
const io = require('socket.io-client');
const eventRegistry = require('./event_registry');

let socket;

function initialize() {
  socket = io(config.CHAT_SERVER_URL);
  eventRegistry.registerListeners(socket);
}

function fire(eventType, payload) {
  socket.emit(eventType, payload);
}

module.exports = {
  initialize,
  fire
};
