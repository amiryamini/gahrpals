const mongoose = require('mongoose');

module.exports.connect = function() {
    mongoose.connect('mongodb://localhost:27017/garhpalsdb');
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
    });
    return db;
};