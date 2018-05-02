const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    age: {
        type: int
    },
    date_of_birth: {
        type: String
    },
    status: {
        type: String
    },
    number_of_friends: {
        type: int
    },
    posts: [{
        status_5: {
            type: String
        },
        status_4: {
            type: String
        },
        status_3: {
            type: String
        },
        status_2: {
            type: String
        },
        status_1: {
            type: String
        }
    }],
   
});

const Users = mongoose.model('users', usersSchema);
module.exports = Users;