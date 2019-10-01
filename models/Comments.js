const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    comment: String,
    id: String,
    date: String,
    databaseId: String
});

mongoose.model("comments", commentSchema);