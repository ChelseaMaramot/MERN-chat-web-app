const mongoose = require("mongoose");
const express = require("express");
const messagesRoute = require('./routes/messagesRoute');
const roomRoute = require('./routes/roomRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const cors = require('cors');
const { Server } = require("http");
const cookieParser = require('cookie-parser');

require('dotenv/config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
PORT = process.env.PORT || 3000


// SOCKET IO
const server = require('http').createServer(app);
// pass url to frontend
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:8080"
    }
});

io.on('connection', (socket) => {
    console.log(`${socket.id} user connected`);
}); 
server.listen(8090);


// MONGODB
const mongoDB = process.env.DB_URI;
mongoose
    .connect(mongoDB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.log(err));

 
app.use("/api/messages", messagesRoute);
app.use("/api/rooms", roomRoute);
app.use("/api", authRoute);
app.use("/api", userRoute);
app.listen(PORT, () =>{
    console.log(`Connection was successful on port ${PORT}`)
});


