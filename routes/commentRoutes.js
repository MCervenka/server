const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Comment = mongoose.model("comments");
var moment = require('moment');




module.exports = app => {
    app.post("/api/comment", requireLogin, async (req, res) => {
        var momentDate = moment().format("DD.MM.YYYY hh:mm:ss");
        const newComment = await new Comment ({
        comment: req.body.commentNew,
        id: req.user.userName,
        date: momentDate
       }).save()
       const allComments = await Comment.find();
        res.send(allComments);
    });

    app.get("/api/get/comments", async(req,res) => {
    const allComments = await Comment.find();
    res.send(allComments);
    });
};