const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Comment = mongoose.model("comments");
var moment = require('moment');




module.exports = app => {
    app.post("/api/comment", requireLogin, async (req, res) => {
        var momentDate = moment().format("DD.MM.YYYY HH:mm:ss");
        const newComment = await new Comment({
            comment: req.body.commentNew,
            id: req.user.userName,
            date: momentDate,
            databaseId: req.user._id
        }).save()
        res.send(newComment);
    });

    app.get("/api/comment", async (req, res) => {
        const allComments = await Comment.find();
        res.send(allComments);
    });

    app.get("/api/comment/:commentId", async (req, res) => {
        try {
            const oneComment = await Comment.findById(req.params.commentId);
            res.send(oneComment);
        } catch (err) {
            res.send({ message: err })
        }
    });

    app.delete("/api/comment/:commentId", async (req, res) => {
        try {
            const deletedComment = await Comment.remove({ _id: req.params.commentId });
            res.send(deletedComment);
        } catch (err) {
            res.send({ message: err })
        }
    });
};