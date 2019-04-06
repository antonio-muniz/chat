'use strict';

let messageInput;
let messagePanel;

window.onload = () => {
    messageInput = document.getElementById('message_input');
    messagePanel = document.getElementById('message_panel');

    messageInput.addEventListener('keyup', (event) => {
        if (event.key != 'Enter') return;
        let message = document.createElement('p');
        message.innerHTML = messageInput.value;
        messagePanel.appendChild(message);
        messageInput.value = "";
    });
};