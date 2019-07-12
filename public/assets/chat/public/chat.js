var PORT = 3000;

var socket = io.connect(`http://localhost:${PORT}`);

// Query DOM
var message = document.getElementById('message'),
    username = document.getElementById('username'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// TODO: Clear text from message field after enter
function clearFields() {
    document.getElementById('message').value = "";
};

// Emit event on button click
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
    clearFields();
});

// On "enter" (13) keypress, send message, then clear fields
document.addEventListener('keypress', (e) => {
    var key = e.which;
    if (key === 13 && message.value !== "") {
        socket.emit('chat', {
            message: message.value,
            username: username.value
        });
        clearFields();
    };
});

// Listen for keypress to display "is typing"
message.addEventListener('keypress', () => {
    socket.emit('typing', username.value)
});

// Listen for events
socket.on('chat', (data) => {
    output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`;
});

// Listen for user entering text
socket.on('typing', (data) => {
    feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});

// Listen for user to stop entering text
socket.on('enteredText', (data) => {
    feedback.innerHTML = `<p><em>${data} has entered text.</em></p>`;
});