const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    first_name: {
        type: String, required: true, default: ""
    },
    last_name: {
        type: String, default: ""
    },
    email: {
        type: String, required: true, default: "", unique: true
    },
    password: {
        type: String, required: true
    },
    profile_picture: {
        type: String, default: ""
    },
    is_verified: {
        type: Number, default: false
    }
})

module.exports = model("User", UserSchema);