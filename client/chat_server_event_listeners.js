'use strict';

const serverEvents = require('../app/transport/socket/events');
const view = require('./view');

const listeners = {
  [serverEvents.CONNECT]: handleConnect,
  [serverEvents.MESSAGE_RECEIVED]: handleMessageReceived
}

function handleConnect() {
  console.log('Connected to server!');
}

function handleMessageReceived(message) {
  view.displayNewMessage(message);
}

module.exports = listeners;
