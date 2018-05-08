const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: String,
    time: Date
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;