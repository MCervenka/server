const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Event = mongoose.model("events");
//var moment = require('moment');




module.exports = app => {
    app.post("/api/event", requireLogin, async (req, res) => {
        //var momentDate = moment().format("DD.MM.YYYY hh:mm:ss");
        const newEvent = new Event({
            allDay: req.body.event.allDay,
            end: req.body.event.end,
            start: req.body.event.start,
            title: req.body.event.title,
            id: req.body.event.id,
            userName: req.body.event.userName,
            paid: req.body.event.paid,
            procedure: req.body.event.procedure
        })
        try {
            const savedEvent = await newEvent.save()
            res.send(savedEvent);
        } catch (err) {
            res.send({ message: err });
        }

    });

    app.get("/api/event", async (req, res) => {
        try {
            const allEvents = await Event.find();
            res.send(allEvents);
        } catch (err) { res.send({ message: err }) };
    });

    app.get("/api/event/:eventId", async (req, res) => {
        try {
            const oneEvent = await Event.findById(req.params.eventId);
            res.send(oneEvent);
        } catch (err) {
            res.send({ message: err })
        }
    });

    app.delete("/api/event/:eventId", async (req, res) => {
        try {
            const deletedEvent = await Event.remove({ _id: req.params.eventId });
            res.send(deletedEvent);
        } catch (err) {
            res.send({ message: err })
        }
    });
}; 