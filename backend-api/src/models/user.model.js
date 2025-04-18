const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: Boolean,
        required: true
    },
    birthday: {
        type: Date,
        required: false
    },
    major: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;