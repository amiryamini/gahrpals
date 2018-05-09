const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;

//Friend Schema
const FriendSchema = mongoose.Schema({
    first_name : { 
        type: String,
        required: true
    },
    last_name : { 
        type: String,
        required: true
    }
})

const addFriendSchema = mongoose.Schema({
    userFirstName : {
        type: String,
        required: true
    },
    userLastName : {
        type: String,
        required: true
    },
    friendFirstName : {
        type: String,
        required: true
    },
    friendLastName : {
        type: String,
        required: true
    }
})

//Privacy Schema
const PrivacySchema = mongoose.Schema({
    show_dob:{
        type: Boolean,
        default: true
    },
    show_status:{
        type: Boolean,
        default: true
    },
    show_friends:{
        type: Boolean,
        default: true
    },
    show_posts:{
        type: Boolean,
        default: true
    }
})

//User Schema
const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: [{
        FriendSchema
    }],
    privacy: {
        type: PrivacySchema
    }
});

const Schemas = module.exports = {
    User: mongoose.model('User', UserSchema),
    Friend: mongoose.model('Friend', addFriendSchema)
}

module.exports.getUserById = function(id, callback){
    Schemas.User.findById(id, callback);
}

module.exports.getUserByName = function(first_name, last_name, callback){
    const query = {first_name: first_name}
    const query_2 = {last_name: last_name}
    Schemas.User.find(query, query_2, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.addFriend = function(newFriend, callback){
    Schemas.User.findOneAndUpdate({_id: new mongoose.Types.ObjectId(newFriend.userId)},
{$push: {friends: newFriend.friendId}}, {safe: true, upsert: true}, function (err, doc) {
    if (err) {console.log(err);}
})
    // Schemas.getUserByName(newFriend.userFirstName, newFriend.userLastName, (err, user) => {
    //     if (err) { throw err;
    //     } else {
    //         user.friends.push({first_name: friendFirstName, last_name: friendLastName});
    //         user.save(callback)
    //     }
    // });
}