const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


const mongo = require('mongodb').MongomainmainClient;
const mainClient = require('socket.io').listen(4000).sockets;
//For login auth
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const Post = require('../models/posts');

//Connect to database
mongoose.connect('mongodb://localhost:27017/garhpals');

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + 'mongodb://localhost:27017/garhpals');
});

mongoose.connection.on('error', () => {
    console.log('Database error ' + err);
});
/*

app.get('/posts', (req, res) => {
    Post.find({}, 'content time', function (error, posts) {
        if (error) { console.error(error); }
        res.send({
            posts: posts
        })
    }).sort({_id:-1})
});

app.post('/add_post', (req, res) => {
    let db = req.db;
    let title = req.body.title;
    let description = req.body.description;
    let new_post = new Post({
        title: title,
        description: description
    });

    new_post.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true
        })
    })
});

app.put('/posts/:id', (req, res) => {
    let db = req.db;
    Post.findById(req.params.id, 'content time', function (error, post) {
        if (error) { console.error(error); }

        post.title = req.body.title;
        post.description = req.body.description;
        post.save(function (error) {
            if (error) {
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    })
});

app.delete('/posts/:id', (req, res) => {
    let db = req.db;
    Post.remove({
        _id: req.params.id
    }, function(err, post){
        if (err)
            res.send(err);
        res.send({
            success: true
        })
    })
});

app.get('/post/:id', (req, res) => {
    let db = req.db;
    Post.findById(req.params.id, 'content time', function (error, post) {
        if (error) { console.error(error); }
        res.send(post)
    })
});

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
*/
// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
const routes = require('../routes/users');
app.use('/users', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});


// listen on port 3000
app.listen(3000, function () {
    console.log('Express app listening on port 3000');
});