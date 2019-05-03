'use strict';

const clientEvents = require('../../../../client/transport/socket/chat_client_events');
const messageSentListener = require('./event_listeners/message_sent_listener');

const registry = {
  [clientEvents.MESSAGE_SENT]: messageSentListener
};

function registerListeners(socket) {
  for (let eventType of Object.values(clientEvents)) {
    let listener = registry[eventType];
    socket.on(eventType, listener);
  }
}

module.exports = { registerListeners };
