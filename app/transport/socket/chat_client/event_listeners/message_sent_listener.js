'use strict';

const socketHub = require('../socket_hub');

module.exports = (message) => {
  console.log(`${message.sender.name} has sent a message: ${message.text}`);
  socketHub.broadcast('MESSAGE_RECEIVED', message);
};
