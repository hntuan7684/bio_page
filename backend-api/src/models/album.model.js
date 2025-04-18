const mongoose = require('mongoose');

const albums = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    type: {
        type: String,
        enum: ['private', 'public'],
        default: 'public',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Albums = mongoose.model('albums', albums);

module.exports = Albums;