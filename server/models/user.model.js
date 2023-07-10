const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String, required: true, default: ""
    },
    email: {
        type: String, required: true, default: ""
    },
    profile_picture: {
        type: String, default: ""
    },
    is_verified: {
        type: Number, default: false
    }
})

module.exports = model("User", UserSchema);