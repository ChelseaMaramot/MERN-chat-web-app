const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        min: 6,
        max: 30,
        lowercase: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        max: 15,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        unique: false,
        required: true,
        min: 6,
    }
});

module.exports = mongoose.model("User", UserSchema);