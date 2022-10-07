const mongoose = require("mongoose");
const express = require("express");
const messagesRoute = require('./routes/messagesRoute');
const roomRoute = require('./routes/roomRoute');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(cors());
app.use(express.json());

PORT = process.env.PORT || 3000
const mongoDB = process.env.DB_URI;

//'mongodb://localhost:27017/chat-app';


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
