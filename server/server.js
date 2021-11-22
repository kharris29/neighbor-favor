const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const Test = require("./models/test-model.js");
const Account = require("./models/account.js");

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

app.post("/register", async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
});

// done

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const accounts = await Account.find({
      username: username,
      password: password,
    });
    res.json(accounts);
  } catch (error) {
    console.log(error);
  }
});

// starting new endpoint
app.get("/get-users-from-building", (req, es) => {
  res.json("asdsad");
});

app.listen(3001, () => console.log("Listening at localhost:3001"));
