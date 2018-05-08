const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Adding Friends
router.post('/friends', (req, res, next) => {
    //res.send('FRIENDS');
    let newFriend = new Friend({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });

    User.addUser(newFriend, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to add friend.'});
        } else {
            res.json({success: true, msg:'You have a new friend.'});
        }
    });
});

//Searching Friends
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;