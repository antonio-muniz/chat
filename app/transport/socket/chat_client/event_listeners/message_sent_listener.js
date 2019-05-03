'use strict';

const serverEvents = require('../../chat_server_events');
const socketHub = require('../socket_hub');

module.exports = (message) => {
  console.log(`${message.sender.name} has sent a message: ${message.text}`);
  socketHub.broadcast(serverEvents.MESSAGE_RECEIVED);
};
