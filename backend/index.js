const mongoose = require("mongoose");
const express = require("express");

const app = express();

PORT = process.env.PORT || 3000

mongoDB = 'mongodb://localhost:27017/chat-app';
mongoose
    .connect(mongoDB)
    .then(() =>{
        app.listen(PORT, () =>{
            console.log(`Connection was successful on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err));


const db = mongoose.connection;
