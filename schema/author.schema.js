const mongoose = require("mongoose")
const currentYear = new Date().getFullYear()
const authotSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "muallif ismi berilishi shart"],
        minLength: [2, "muallif ismi ikkita belgidan kam bolmasligi kerak "],
        maxLength: [100, "Muallif ismi yuzta belgidan kam bolishi shart"],

    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    dateOfDeath: {
        type: Date,
        required: false
    },
    country: {
        type: String,
        required: [true, "Muallif davlati berilishi shart!",],
        minLength: [2, "Davlat nomi 2 ta belgidan ko'p bo'lishi zarur!"],
        maxLength: [120, "Davlat nomi 120 ta belgidan kam bo'lishi shart"]
    },
    bio: {
        type: String,
        required: [true, "Muallif tafsifi berilishi shart!"],
        minLength: [1, "Author haqida malumot 1 ta belgidan ko'p bo'lishi shart!"]
    }
}, { versionKey: false , timestamps: true })

const AuthorModels = mongoose.model("authors", authotSchema)

module.exports = AuthorModels