const { Router } = require("express")
const user_router = Router()
const werifyToken = require("../Middleware/auth.middleware.js")

user_router.get("/admin", werifyToken , (req, res) => {
    res.json({
        message: "Welcome amdin"
    })
})


user_router.get("/manager",werifyToken, (req, res) => {
    res.json({
        message: "Welcome manager"
    })
})


user_router.get("/user", werifyToken, (req, res) => {
    res.json({
        message: "Welcome user"
    })
})

module.exports = user_router