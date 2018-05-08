const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const PostSchema = require('../models/posts');

const UsersSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "First name required"],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, "Last name required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique: true,
        trim: true

    },
    date_of_birth: {
        type: Date,
        required: [true, "Birthday required"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    password_duplicate: {
        type: String,
        required: [true, "Password required"]
    },
    status: {
        type: String
    },
    friends: {
        type: [String]
    },
    posts: {
        type: [{ type: Schema.Types.ObjectId, ref: 'PostSchema' }]
    }
});

UsersSchema.statics.authenticate = function (email, password, callback) {
    Users.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                const err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}

UsersSchema.pre('save', function(next){
   let user = this;
   bcrypt.hash(user.password, 10, function (err, hash){
      if(err){
          return next(err);
      }
      user.password = hash;
      next();
   });
});

const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;
