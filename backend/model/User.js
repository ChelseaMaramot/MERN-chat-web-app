const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        min: 6,
        max: 30,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        max: 15,
        required: true,
    },
    password: {
        type: String,
        unique: false,
        required: true,
        min: 6,
    }
});

module.exports = moongoose.model('User', UserSchema);