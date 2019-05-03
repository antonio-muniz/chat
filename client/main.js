'use strict';

const authentication = require('./authentication');
const setupChatSocket = require('./transport/socket/setup');
const view = require('./view');

window.addEventListener('load', () => {
  setupChatSocket();
  view.registerMessageInputSubmitListener();
  authentication.registerUserAuthenticationListener();
});
