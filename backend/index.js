const mongoose = require("mongoose");
const express = require("express");
const messagesRoute = require('./routes/messagesRoute');
const roomRoute = require('./routes/roomRoute');

const app = express();
app.use(express.json());

PORT = process.env.PORT || 3000
mongoDB = 'mongodb://localhost:27017/chat-app';


mongoose
    .connect(mongoDB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.log(err));

 
app.use("/api/messages", messagesRoute);
app.use("/api/rooms", roomRoute);
app.listen(PORT, () =>{
    console.log(`Connection was successful on port ${PORT}`)
});
