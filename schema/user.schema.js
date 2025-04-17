// const { string } = require("joi")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username kiritilishi lozim!"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "email kiritilishi lozim!"],
    },
    password: {
        type: String,
        required: [true, "parol kiritilishi lozim!"],
    },
    otp: {
        type: Number,
        required: false,
        default: 0
    },
    isVeriFied: {
        type: Boolean,
        required: false,
        default: false
    },
    lastTime: {
        type: Date,
        required: false,
        default: 0
    }
}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel