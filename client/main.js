'use strict';

let messageInput;
let messagePanel;

window.addEventListener('load', () => {
    messageInput = document.getElementById('message_input');
    messagePanel = document.getElementById('message_panel');

    let socket = io(window.location.href);
    socket.on('connect', () => {
        console.log('Connected to server!');
    });
    messageInput.addEventListener('keyup', (event) => {
        if (event.key != 'Enter') return;
        let message = document.createElement('p');
        message.innerHTML = messageInput.value;
        messagePanel.appendChild(message);
        socket.emit('MESSAGE_SENT', { text: messageInput.value })
        messageInput.value = "";
    });
});
