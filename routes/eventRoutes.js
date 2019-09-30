const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Event = mongoose.model("events");
//var moment = require('moment');




module.exports = app => {
    app.post("/api/event", requireLogin, async (req, res) => {
        //var momentDate = moment().format("DD.MM.YYYY hh:mm:ss");
        const newEvent = await new Event({
            allDay: req.body.event.allDay,
            end: req.body.event.end,
            start: req.body.event.start,
            title: req.body.event.title,
            id: req.body.event.id,
            userName: req.body.event.userName,
            paid: req.body.event.paid,
            procedure: req.body.event.procedure
        }).save()
        res.send(newEvent);
    });

    app.get("/api/get/event", async (req, res) => {
        const allEvents = await Event.find();
        res.send(allEvents);
    });
}; 