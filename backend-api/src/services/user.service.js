const argon = require('argon2');
const JSend = require("../jsend");

const Users = require('../models/user.model');

async function createUser(first_name, last_name, email, phone, password) {
    const hashPassword = argon.hash(password);
    const newUser = new Users({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        password: hashPassword
    });

    try {
        const user = await newUser.save();
        if(!user) {
            return JSend.error("An error occurred while registering the user!");
        }
        return user;
    } catch (error) {
        console.log("Register failed!", err);
        return JSend.error("An error occurred while registering the user!");
    }
}

async function isPhoneExist(phone) {
    const user = await Users.findOne({ phone });
    return user ? true : false;
}

async function isEmailExist(email) {
    const user = await Users.findOne({ email });
    return user ? true : false;
}

module.exports = {
    createUser,

    isPhoneExist,
    isEmailExist,
}