const mongoose = require('mongoose');
const config = require('../config/database');

//Friend Schema
const FriendSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
});

const Friend = module.exports = mongoose.model('Friend', FriendSchema);

module.exports.getUserById = function(id, callback){
    Friend.findById(id, callback);
}

module.exports.getUserByUsername = function(first_name, callback){
    const query = {first_name: first_name}
    Friend.findOne(query, callback);
}

module.exports.addUser = function(newFriend, callback){
    if(err) throw err;
}