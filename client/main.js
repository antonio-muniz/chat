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
