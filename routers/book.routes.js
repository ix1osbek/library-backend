const { Router } = require("express")
const booksRouter = Router()
const {addBook , getBooks, getOneBook, updateBook , de, deleteBook} = require("../controller/books.controller.js")
const bookValidate = require("../Middleware/books.middleware.js")
//////// add book
 booksRouter.post("/add_book" ,bookValidate, addBook)

 /////// get books

 booksRouter.get("/get_books" , getBooks)


 /////// get one book

 booksRouter.get("/get_one_book/:id" , getOneBook)


 //////// update book
 booksRouter.put("/update_book/:id" , updateBook)


 /////// delete book

 booksRouter.delete("/delete_book/:id" ,deleteBook )






 module.exports = booksRouter

