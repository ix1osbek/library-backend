const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "kitob nomi berilishi shart"],
        minLength: [2, "kitob varaqlari 2 betdan kam bolmasligi kerak!"],
        maxLength: [40, "kitob nomi 40 ta belgidan kam bolishi shart!"],

    },
    pages: {
        type: Number,
        required: [true, "kitob varaqlari soni berilishi shart!"],
        minLength: [10, "kitob varaqlari soni 10 betdan kam bo'lmasligi kerak"],
        maxLength: [5000, "kitob varaqlari soni 5000 dan kam bolishi kerak!"]
    },
    year: {
        type: Number,
        required: [true, "kitob yili berilishi shart!"]
    },
    price: {
        type: Number,
        required: [true, "kitob narxi berilishi shart!"]
    },
    country: {
        type: String,
        required: [true, "Davlat berilishi shart!"]
    },
    author: {
        type: String,
        required: [true, "Author nomi berilishi shart!"]
    },
    description: {
        type: String,
        required: [true, "Kitob haqida malumot berilishi shart!"]
    }
}, { versionKey: false })
const booksModels = mongoose.model("books", booksSchema)
module.exports = booksModels