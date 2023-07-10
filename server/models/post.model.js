const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    id: String,
    media: {
        type: String, default: ""
    },
    text: {
        type: String, required: true, default: ""
    },
    likes: { 
        type: Number, default: 0
    },
    reply_count: { 
        type: Number, default: 0
    },
    time_posted: { 
        type: Date, default: Date.now
    }
})

module.exports = model("Post", PostSchema);