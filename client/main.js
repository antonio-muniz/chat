'use strict';

const authentication = require('./authentication');
const chatServerSocket = require('./transport/socket/chat_server/socket');
const view = require('./view');

window.addEventListener('load', () => {
  chatServerSocket.initialize();
  view.registerMessageInputSubmitListener();
  authentication.registerUserAuthenticationListener();
});
