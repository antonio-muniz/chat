'use strict';

const chatServerSocket = require('./chat_server/socket');
const eventRegistry = require('./chat_server/event_registry');

module.exports = () => {
  chatServerSocket.initialize(eventRegistry);
};
