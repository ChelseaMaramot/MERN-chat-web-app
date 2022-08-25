const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoDB = 'mongodb://localhose:27017/chat-app';
mongoose
    .connect(mongoDB, { userNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        app.listen(process.env.PORT, () =>{
            console.log(`Connection was successful on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err));

const db = mongoose.connection;
