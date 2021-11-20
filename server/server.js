const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const Account_Ctrl = require('./controllers/account-ctrl.js');

const Test = require("./models/test-model.js");
const Account = require("./models/account.js");
const Favor = require("./models/favor.js");

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

  // try {
  //   const preexistingAccounts = Account.find({username: req.body.username});
  //   if (preexistingAccounts.length == 0) {
  //     const accountToSave = await new Account(req.body);
  //     await accountToSave.save(accountToSave);
  //     let infoToReturn = await Account.find({
  //       username: req.body.username,
  //     });
  //     if (infoToReturn.length != 0) {
  //       res.json("User Registered Successfully");
  //     } else {
  //       res.json("Something went wrong...");
  //     }
  //   } else {
  //     console.log(preexistingAccounts);
  //     res.json("Username already exists!");
  //   }

  // } catch (error) {
  //   console.log(error);
  // }
  // let accExists = false;
});

// done

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const accounts = await Account.find({
      username: username,
      password: password,
    });
    res.json(accounts);
    console.log(accounts);
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
      console.log(favors);
      res.json(favors);
    }
  });
});

// Create a favor request
app.post("/add_favor", async (req, res) => {
  const newFavor = new Favor({
    username: req.body.username,
    building: req.body.building,
    favor_item: req.body.favor_item,
  }, (err, favor) => {
    if (err) {
      console.log(err);
    } else {
      console.log('New favor added!');
      console.log(favor);
    }
  })
});

app.listen(3001, () => console.log("Listening at localhost:3001"));
