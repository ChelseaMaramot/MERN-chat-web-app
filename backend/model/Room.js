const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    users: {
        type: Array,
    },
    conversationID: {
        type: String,
        required: true,
    },
    roomName: {
        type: String,
        required: true,
        maxlength: 100,
    },
});

module.exports = mongoose.model("Room", RoomSchema);