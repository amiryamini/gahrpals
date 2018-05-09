const express = require('express');
const router = express.Router();
const User = require('../models/users');

//POST route for updating data
router.post('/register', function (req, res, next) {
    // confirm that user typed same password twice
    if (req.body.password !== req.body.password_duplicate) {
        const err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("Passwords do not match");
        return next(err);
    }

    if (req.body.email &&
        req.body.first_name &&
        req.body.last_name &&
        req.body.password &&
        req.body.password_duplicate) {

        let userData = {
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            password_duplicate: req.body.password_duplicate,
        };

        console.log(userData);
        User.addUser(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                console.log(user.password);
                req.session.userId = user._id;
                return res.send(user);
            }
        });

    } /*else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                const err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/profile');
            }
        });
    }*/ else {
        const err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
});

// GET route after registering
router.get('http://localhost:8080/settings', function (req, res, next) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    const err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    //UPDATE
                    console.log("in router");
                    return res.send("Send from router");
                    //return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
                }
            }
        });
});

// GET for logout
router.get('/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = router;