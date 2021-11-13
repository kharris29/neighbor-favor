// This file contains the backend functions that deal with the Account model
// Right now, it just has basic skeleton code for creating account and logging in
// (I'm not sure how much they'll need to be modified to actually work with the front end)

// This file should work in conjunction with a file in the account-routes file in the routers folder
// That file is currently empty

const Account = require('../models/account.js');

createAccount = (req, res) => {
    // This will only work if data sent in req.body is in json format with the correct names (see account.js schema)
    const account = new Account(req.body);

    // Save the newly created account
    account.save((err, acc) => {
        if (err) {
            // Print error in saving
            console.log(err);
        } else {
            // On success, print message to console
            console.log('Account created!');
        }
    });
        
}

login = (req, res) => {
    username = req.body.username;
    password = req.body.password;
    
    // Find the account with the entered username and password
    Account.findOne({username: username, password: password}, (err, acc) => {
        if (err) {
            console.log(err);
            console.log('Incorrect username or password');
        } else {
            console.log('Successful login');
            console.log(acc);
        }
    });
}