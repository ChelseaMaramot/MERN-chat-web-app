const mongoose = require("mongoose");
const express = require("express");
const messages = require('./routes/messages.js');

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


app.use("/api/messages", messages);
app.listen(PORT, () =>{
    console.log(`Connection was successful on port ${PORT}`)
});
