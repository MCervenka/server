const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
    allDay: Boolean,
    end: Date,
    start: Date,
    title: String,
    id: String,
    userName: String 
});

mongoose.model("events", eventSchema);