const mongoose = require('mongoose');

const medias = mongoose.Schema({
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    albumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Albums',
        required: false
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['avatar', 'image', 'video'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Medias = mongoose.model('medias', medias);

module.exports = Medias;