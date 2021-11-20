const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Favor = new Schema({
    username: String,
    building: String,
    favor_item: String,
    favor_description: String,
});

module.exports = mongoose.model('Favor', Favor);