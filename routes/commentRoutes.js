const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Comment = mongoose.model("comments");




module.exports = app => {
    app.post("/api/comment", requireLogin, async (req, res) => {
        var today = new Date();
        var date = today.getDate() +'.'+(today.getMonth()+1)+'.'+today.getFullYear() + "  " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       const newComment = await new Comment ({
        comment: req.body.commentNew,
        id: req.user.userName,
        date: date
       }).save()
       const allComments = await Comment.find();
        res.send(allComments);
    });

    app.get("/api/get/comments", async(req,res) => {
    const allComments = await Comment.find();
    res.send(allComments);
    });
};