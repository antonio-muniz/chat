'use strict';

const connectListener = require('./event_listeners/connect_listener');
const messageReceivedListener = require('./event_listeners/message_received_listener');
const serverEvents = require('../../../../app/transport/socket/chat_server_events');

const registry = {
  [serverEvents.CONNECT]: connectListener,
  [serverEvents.MESSAGE_RECEIVED]: messageReceivedListener
};

function registerListeners(socket) {
  for (let eventType of Object.values(serverEvents)) {
    let listener = registry[eventType];
    socket.on(eventType, listener);
  }
}

module.exports = { registerListeners };
