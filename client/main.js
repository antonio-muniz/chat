'use strict';

const authentication = require('./authentication');
const chatServerSocket = require('./transport/socket/chat_server/socket');
const view = require('./view');

window.addEventListener('load', () => {
  let socket = chatServerSocket.create();
  view.registerMessageInputSubmitListener(socket);
  authentication.registerUserAuthenticationListener();
});
