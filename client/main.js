'use strict';

const io = require('socket.io-client');

let messageInput;
let messagePanel;

window.addEventListener('load', () => {
  messageInput = document.getElementById('message_input');
  messagePanel = document.getElementById('message_panel');

  let socket = io(window.location.href);
  socket.on('connect', () => {
    console.log('Connected to server!');
  });
  socket.on('MESSAGE_RECEIVED', ({ text }) => {
    let message = document.createElement('p');
    message.innerHTML = text;
    messagePanel.appendChild(message);
  });
  messageInput.addEventListener('keyup', (event) => {
    if (event.key != 'Enter') return;
    socket.emit('MESSAGE_SENT', { text: messageInput.value });
    messageInput.value = '';
  });
});

window.onGoogleSignIn = (googleUser) => { // eslint-disable-line no-unused-vars
  let profile = googleUser.getBasicProfile();

  console.log(JSON.stringify(profile));

  let picture = document.createElement('img');
  picture.src = profile.getImageUrl();

  console.log(picture);

  let name = document.createElement('span');
  name.innerHTML = profile.getName();

  console.log(name);

  let googleLoginButton = document.getElementById('google_login_button');
  googleLoginButton.hidden = true;

  console.log(googleLoginButton);

  let userInfo = document.getElementById('user_info');
  userInfo.appendChild(picture);
  userInfo.appendChild(name);

  console.log(userInfo);
}
