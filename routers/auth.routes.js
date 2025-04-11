const { Router } = require("express")
const { register_auth, login_auth } = require("../controller/auth.controller.js")
const authRouter = Router()


//////// register
authRouter.post("/register", register_auth)

/////////// login

authRouter.post("/login", login_auth)


module.exports = authRouter