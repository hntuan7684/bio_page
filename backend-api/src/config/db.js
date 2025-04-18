const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/bio_page';

const connectDB = () => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connect to database bio_page success!');
    })
    .catch((error) => {
        console.error('Error while connect to database bio_page: ', error.message);
    });
};

module.exports = connectDB;
