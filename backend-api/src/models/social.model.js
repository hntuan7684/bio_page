const mongoose = require('mongoose');

const Social = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
    }
});

const Socials = mongoose.model('socials', Social);

module.exports = Socials;