var PORT = 3000;

var socket = io.connect(`http://localhost:${PORT}`);

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('username'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit event
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
});

message.addEventListener('keypress', () => {
    socket.emit('typing', username.value)
});

// Listen for events
socket.on('chat', (data) => {
    output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`;
});

socket.on('typing', (data) => {
    feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});