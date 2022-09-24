const mongoose = require('monggose');

const RoomSchema = new mongoose.Schema({
    users: {
        type: Array,
    },
});

module.exports = mongoose.model("Room", RoomSchema);