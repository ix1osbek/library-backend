const booksModels = require("../schema/book.schema.js")

const addBook = async (req, res) => {

    try {
        await booksModels.create(req.body)
        res.status(201).json({
            message: "add book"
        })
    } catch (error) {
        throw new Error(error);
    }
}

const getBooks = async (req, res) => {
    const foundedBooks = await booksModels.find()
    if (foundedBooks.length === 0) {
        return res.status(404).json({
            message: "Kitoblar topilmadi"
        })
    }

    res.status(200).json(foundedBooks)
}

const getOneBook = async (req, res) => {
    const foundedBook = await booksModels.findById(req.params.id)
    if (!foundedBook) {
        return res.status(404).json({
            message: "kitob topilmadi!"
        })
    }

    res.status(200).json(foundedBook)
}

const updateBook = async (req, res) => {
    const foundedBook = await booksModels.findById(req.params.id)
    if (!foundedBook) {
        return res.status(404).json({
            message: "kitob malumotlarini yangilashda hato"
        })
    }

    await booksModels.findByIdAndUpdate(req.params.id, req.body)
    res.status(201).json({
        message: "book update!"
    })
}

const deleteBook = async (req, res) => {
    const foundetBooks = await booksModels.findById(req.params.id)
    if (!foundetBooks) {
        return res.status(404).json({
            message: "delete error"
        })
    }
    await booksModels.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message: "book delete"
    })
}

module.exports = {
    addBook,
    getBooks,
    getOneBook,
    updateBook,
    deleteBook
}