const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: String,
    time: Date
});

const UsersSchema = new Schema({
    first_name: String,
    last_name: String,
    id: String,
    date_of_birth: Date,
    status: String,
    friends: [String],
    posts: [PostSchema]
});

const Users = mongoose.model('users', UsersSchema);
module.exports = Users;
