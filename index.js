const express = require("express")
require("dotenv").config()
const cors = require("cors")
const connectDB = require("./config/mongo.db.js")
const authorRouter = require("./routers/author.routes.js")
const booksRouter = require("./routers/book.routes.js")

const app = express()
app.use(cors())
app.use(express.json())
app.use(authorRouter)
app.use(booksRouter)
connectDB()

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);

})