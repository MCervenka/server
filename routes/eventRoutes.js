const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Event = mongoose.model("events");
//var moment = require('moment');




module.exports = app => {
    app.post("/api/event", requireLogin, async (req, res) => {
        //var momentDate = moment().format("DD.MM.YYYY hh:mm:ss");
        const newEvent = await new Event ({
            allDay: req.body.event.allDay,
            end: req.body.event.end,
            start: req.body.event.start,
            title: req.body.event.title,
            id: req.user.id,
            userName: req.user.userName,
            paid: req.user.paid,
            procedure: req.user.procedure
       }).save()
       const allEvents = await Event.find();
        res.send(allEvents);
    });

    app.get("/api/get/event", async(req,res) => {
    const allEvents = await Event.find();
    res.send(allEvents);
    });
}; 