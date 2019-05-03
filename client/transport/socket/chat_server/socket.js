'use strict';

const config = require('../../../config');
const io = require('socket.io-client');
const eventRegistry = require('./event_registry');

function create() {
  let socket = io(config.CHAT_SERVER_URL);
  eventRegistry.registerListeners(socket);
  return socket;
}

module.exports = { create };
