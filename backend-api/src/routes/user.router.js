const express = require("express");
const router = express.Router();

const { methodNotAllowed } = require("../controllers/errors.controller");

const userController = require("../controllers/user.controller");

module.exports.setup = (app) => {
    app.use("/user", router);

    router.post("/register", userController.createUser);

    router.all("/", methodNotAllowed);
    router.all("/:id", methodNotAllowed);
};