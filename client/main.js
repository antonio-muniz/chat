'use strict';

const io = require('socket.io-client');

let messageInput;
let messagePanel;
let profile;

window.addEventListener('load', () => {
  messageInput = document.getElementById('message_input');
  messagePanel = document.getElementById('message_panel');

  let socket = io(window.location.href);
  socket.on('connect', () => {
    console.log('Connected to server!');
  });
  socket.on('MESSAGE_RECEIVED', (message) => {
    let messageElement = document.createElement('p');
    messageElement.innerHTML = `${message.sender.name}<br />${text}`;
    messagePanel.appendChild(messageElement);
  });
  messageInput.addEventListener('keyup', (event) => {
    if (event.key != 'Enter') return;
    socket.emit('MESSAGE_SENT', {
      text: messageInput.value,
      sender: {
        id: profile.getId(),
        name: profile.getName()
      },
      sendingTime: new Date().toISOString()
    });
    messageInput.value = '';
  });
});

window.onGoogleSignIn = (googleUser) => { // eslint-disable-line no-unused-vars
  profile = googleUser.getBasicProfile();

  let picture = document.createElement('img');
  picture.src = profile.getImageUrl();

  let name = document.createElement('span');
  name.innerHTML = profile.getName();

  let googleLoginButton = document.getElementById('google_login_button');
  googleLoginButton.hidden = true;

  let userInfo = document.getElementById('user_info');
  userInfo.appendChild(picture);
  userInfo.appendChild(name);

  messageInput.disabled = false;
};
