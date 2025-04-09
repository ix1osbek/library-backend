const mongoose = require("mongoose")
const currentYear = new Date().getFullYear()
const authotSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "muallif ismi berilishi shart"],
        minLength: [2, "muallif ismi ikkita belgidan kam bolmasligi kerak "],
        maxLength: [1000, "Muallif ismi mingta belgidan kam bolishi shart"],

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
        required: [true, "Muallif davlati berilishi shart!"]
    },
    bio: {
        type: String,
        required: [true, "Muallif tafsifi berilishi shart!"]
    }
}, { versionKey: false })

const AuthorModels = mongoose.model("authors", authotSchema)

module.exports = AuthorModels