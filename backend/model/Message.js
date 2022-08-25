const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    sender: {
        type: String,
    },
    message:{
        type: String,
        min: 1,
    },
    conversationID: {
        type: String,
    }
});

module.exports = mongoose.model("Message", MessageSchema);