const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Schema = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    //res.send('REGISTER');
    let newUser = new Schema.User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        email: req.body.email,
        password: req.body.password,
        friends: req.body.friends,
        privacy: req.body.privacy
    });

    Schema.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user.'});
        } else {
            res.json({success: true, msg:'User registered.'});
        }
    });
});

//Adding Friend
router.post('/friends', (req, res, next) => {
    //res.send('REGISTER');
    let newFriend = new Schema.Friend({
        userId: req.body.userId,
        friendId: req.body.friendId
        // userFirstName: req.body.userFirstName,
        // userLastName: req.body.userLastName,
        // friendFirstName: req.body.friendFirstName,
        // friendLastName: req.body.friendLastName
    });

    Schema.addFriend(newFriend, (err, friend) => {
        if(err) {
            res.json({success: false, msg:'Failed to add a new friend.'});
        } else {
            res.json({success: true, msg:'You have a new friend!'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;