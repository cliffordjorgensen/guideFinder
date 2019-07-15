// Requirements
var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();

// Listener
var server = app.listen(3000, () => {
    console.log(`Listening to requests on port 3000`);
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

// Handle chat event
io.on('connection', (socket) => {
    console.log('Socket connected. ID:', socket.id);

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });

    socket.on('enteredText', (data) => {
        socket.broadcast.emit('stopTyping', data);
    });

});