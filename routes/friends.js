const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Friend = require('../models/friend');

//Adding Friends
router.post('/add', (req, res, next) => {
    //res.send('ADD');
    let newFriend = new Friend({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });

    Friend.addUser(newFriend, (err, user) => {
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