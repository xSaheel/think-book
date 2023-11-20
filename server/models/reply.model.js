const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ReplySchema = new Schema({
    text: {
        type: String, default: ""
    },
    media: {
        type: String, default: ""
    },
    time_posted: { 
        type: Date, default: Date.now
    },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }
})

module.exports = model("Reply", ReplySchema);