const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    users: {
        type: Array,
    },
    roomName: {
        type: String,
        required: true,
        maxlength: 100,
    },
});

module.exports = mongoose.model("Room", RoomSchema);