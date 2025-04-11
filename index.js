const express = require("express")
require("dotenv").config()
const cors = require("cors")
const connectDB = require("./config/mongo.db.js")
const authorRouter = require("./routers/author.routes.js")
const booksRouter = require("./routers/book.routes.js")
const error_middleware = require("./Middleware/error.middleware.js")
const authRouter = require("./routers/auth.routes.js")
const user_router = require("./routers/user.routes.js")

const app = express()
app.use(cors())
app.use(express.json())
app.use(authorRouter)
app.use(booksRouter)
app.use("/api/auth", authRouter)
app.use("/api/users" , user_router)
connectDB()
app.use(error_middleware)
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);

})