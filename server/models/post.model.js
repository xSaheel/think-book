const mongoose = require("mongoose");
const { UserSchema } = require("../models/user.model");
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    text: {
        type: String, default: ""
    },
    media: {
        type: String, default: ""
    },
    likes: [{ 
        type: String, default: ""
    }],
    reply_count: { 
        type: Number, default: 0
    },
    time_posted: { 
        type: Date, default: Date.now
    },
    user: UserSchema
})

module.exports = model("Post", PostSchema);