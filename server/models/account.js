const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    building: String,
    phone_number: String,
    notification: String,
});

module.exports = mongoose.model('Account', Account);