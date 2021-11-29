const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const app = express();

const Account_Ctrl = require('./controllers/account-ctrl.js');

const Test = require("./models/test-model.js");
const Account = require("./models/account.js");
const Favor = require("./models/favor.js");
const favor = require("./models/favor.js");

let currAcct;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://dbUser1:eAKea35Lproj3ct@cluster0.zo8gu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

app.get("/", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    console.log(error);
  }
});

// done

// Sign up route
app.post("/register", async (req, res) => {

  try{
    Account.find({username:req.body.username}, async (err, accs) => 
    {
      console.log(accs);
      console.log(accs.length);
      if (accs.length != 0) {
        console.log("Inside if statement");
        accExists = true;
        res.json("User already exists!")
      } else {
        const accountToSave = await new Account(req.body);
        await accountToSave.save(accountToSave);
        let infoToReturn = await Account.find({
          username: req.body.username,
        });
        if (infoToReturn.length != 0) {
          res.json("User Registered Successfully");
        } else {
          res.json("Something went wrong...");
        }
      } 
    });
    
  } catch (error) {
    console.log(error);
  }

});

// done

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const account = await Account.findOne({
      username: username,
      password: password,
    });
    currAcct = account;
    res.json(account);
    console.log(account);
  } catch (error) {
    console.log(error);
  }
});

// Retrieve array of favor requests from database
app.get("/favor_requests", async (req, res) => {
  Favor.find({}, (err, favors) => {
    if (err) {
      console.log(err);
    } else {
    //   console.log(favors);
      console.log(currAcct);
      res.json(favors);
    }
  });
});

// Create a favor request
app.post("/add_favor", async (req, res) => {

  console.log('Calling proper function!');
  console.log(currAcct);
  const username = currAcct.username;
  const building = currAcct.building;
  console.log(username)   
  console.log(building)
  const newFavor = new Favor({username: username, building: building, favor_item: req.body.favor_item, favor_description: req.body.favor_description});

  newFavor.save((err, favor) => {
    console.log(favor);
    console.log('added!')
    res.json('New Favor Added!');
    // res.json(favor);
    
  });
});

// Return current user's first name
app.get("/first_name", async (req, res) => {
  
  const firstname = currAcct.firstname;
  res.json(firstname);
});

// Return current user's info (to check notifications)
app.get("/curr_user", async (req, res) => {
  res.json(currAcct);
});

// Set the notification string to be an empty string
app.post("/remove_notif", async (req, res) => {
  currAcct.notification = "";
  res.json(currAcct.notification);
  currAcct.save();
  console.log("backend notif: " + currAcct.notification);
});

app.post("/remove_favor", async (req, res) => {
  console.log("Backend received ID:")
  console.log(req.body.id)
  const obj_id = new mongodb.ObjectId(req.body.id);
  console.log(obj_id)
  Favor.findOne({_id: obj_id}, async (err, favor) => {
    if (err) {
      console.log(err);
    } else {
        console.log(favor);
        Account.findOne({username: favor.username}, (err, acc) => {
            const notif_str = "Your request for " + favor.favor_item + 
              " has been accepted by " + currAcct.firstname + " " + currAcct.lastname + 
              " (" + currAcct.username + "). They will be contacting you shortly!";
            acc.notification = notif_str;
            acc.save();
            console.log(acc);
            res.json(acc);
        });
        Favor.deleteOne(favor, (err, result) => {
            console.log(result);
        });
    }
  });
  //Favor.deleteOne({_id: obj_id});  
});

app.post("/sign_out", async (req, res) => {
    console.log("signing out");
    currAcct = null;
    res.json("Signed out");
});

app.listen(3001, () => console.log("Listening at localhost:3001"));
