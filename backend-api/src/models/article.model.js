const mongoose = require("mongoose");

const articles = ({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    mediasId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medias',
        required: false
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Articles = mongoose.model('articles', articles);

module.exports = Articles;