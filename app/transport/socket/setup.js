'use strict';

const clientEventRegistry = require('./chat_client/event_registry');
const clientSocketHub = require('./chat_client/socket_hub');

module.exports = (httpServer) => {
  clientSocketHub.initialize(httpServer, clientEventRegistry);
};
