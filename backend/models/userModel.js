const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    displayName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
}, {timestamps: true});

const userCollection = mongoose.model('User', userSchema);

module.exports = userCollection;