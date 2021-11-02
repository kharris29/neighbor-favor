const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()

const Test = require('./models/test-model.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://dbUser1:eAKea35Lproj3ct@cluster0.zo8gu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.get('/', (req, res) => {
    res.send('Hello World! test');
});

app.listen(3000, () => console.log('Listening at localhost:3000'));
