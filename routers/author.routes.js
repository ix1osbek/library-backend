const { Router } = require("express")
const authorRouter = Router()
const { getAuthor, addAuthor, getOneAuthor, updateAuthor, deleteAuthor } = require("../controller/authors.controller.js")
// const bookValidate = require("../Middleware/books.middleware.js")

//////////get author
authorRouter.get("/get_author", getAuthor)


/////////get one author

authorRouter.get("/get_one_author/:id", getOneAuthor)

/////// add author

authorRouter.post("/add_author", addAuthor)

/////// update author

authorRouter.put("/update_author/:id", updateAuthor)

//////delete author

authorRouter.delete("/delete_author/:id", deleteAuthor)




module.exports = authorRouter