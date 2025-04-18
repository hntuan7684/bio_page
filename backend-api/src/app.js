const express = require("express");

const connectDB = require('./config/db');
const JSend = require('./jsend');

const {
    resourceNotFound,
    handleError,
} = require('./controllers/errors.controller');

const userRouter = require("./routes/user.router");

const app = express();

connectDB();

app.get("/", (req, res) => {
    return res.json(JSend.success());
});

app.use(resourceNotFound);
app.use(handleError);

userRouter.setup(app);

module.exports = app;