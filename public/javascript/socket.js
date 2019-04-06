'use strict';

window.addEventListener('load', () => {
    let socket = io('http://localhost:8080');
    socket.on('connect', () => {
        console.log('Connected to server!');
    });
    messageInput.addEventListener('keyup', (event) => {
        if (event.key != 'Enter') return;
        socket.emit('MESSAGE_SENT', { text: messageInput.value })
    });
});
