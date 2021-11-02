const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Test = new Schema({
    name: String,
    items: Array,
});

module.exports = mongoose.model('Test', Test);