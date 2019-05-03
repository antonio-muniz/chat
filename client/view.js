'use strict';

const chatClientEvents = require('./transport/socket/chat_client_events');
const chatServerSocket = require('./transport/socket/chat_server/socket');
const user = require('./user');

const elements = {};

window.addEventListener('load', () => {
  elements.googleLoginButton = document.getElementById('google_login_button');
  elements.messageInput = document.getElementById('message_input');
  elements.messagePanel = document.getElementById('message_panel');
  elements.userInfo = document.getElementById('user_info');
});

function displayNewMessage(message) {
  let messageElement = document.createElement('p');
  messageElement.innerHTML = `${message.sender.name}<br />${message.text}`;
  elements.messagePanel.appendChild(messageElement);
}

function displayUserInfo() {
  let nameElement = document.createElement('span');
  nameElement.innerHTML = user.getName();
  let imageElement = document.createElement('img');
  imageElement.src = user.getImageUrl();

  elements.userInfo.appendChild(nameElement);
  elements.userInfo.appendChild(imageElement);
}

function enableMessageInput() {
  elements.messageInput.disabled = false;
}

function hideGoogleLoginButton() {
  elements.googleLoginButton.hidden = true;
}

function registerMessageInputSubmitListener() {
  elements.messageInput.addEventListener('keyup', (event) => {
    if (event.key != 'Enter') return;
    if (!elements.messageInput.value) return;

    chatServerSocket.fire(chatClientEvents.MESSAGE_SENT, {
      text: elements.messageInput.value,
      sender: {
        id: user.getId(),
        name: user.getName()
      },
      sendingTime: new Date().toISOString()
    });
    elements.messageInput.value = '';
  });
}

module.exports = {
  displayNewMessage,
  displayUserInfo,
  enableMessageInput,
  hideGoogleLoginButton,
  registerMessageInputSubmitListener
};
