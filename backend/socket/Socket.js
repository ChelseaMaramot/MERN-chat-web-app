
/*
const app = require('express');
const http = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "https://localhost:8080"
    }
});

//server
io.on('connection', (socket) => {
    console.log(`${socket.id} user connected`);
    socket.emit("chat-message", "hello world")
}); 

server.listen(3000);
*/