const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        unique: true,
    },

}, {timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;