////////// register
const userModel = require("../schema/user.schema.js")
const bcryt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const BaseError = require("../Utils/base.error.js")
const emailServiceSender = require("../Utils/email.service.js")

const register_auth = async (req, res, next) => {

    try {
        const { username, email, password, } = req.body

        const foundUser = userModel.findOne({ email })
        if (foundUser) {
            return next(BaseError.BadRequest(403, "you registered before"))
        }
        const hashedPassword = await bcryt.hash(password, 10)
        const randomCode = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join("")

        const info = emailServiceSender(email, randomCode)
        console.log(info);
        const lastTime = new Date(new Date() + 2 * 1000 * 60)



        await userModel.create({
            username,
            email,
            password: hashedPassword,
            otp: +randomCode,
            lastTime: lastTime
        })
    } catch (error) {
        next(error)
    }
}


//////login

const login_auth = async (req, res) => {

    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            })
        }
        const isMatch = await bcryt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({
                message: "Password wrong!"
            })
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET, { expiresIn: "30d" })

        res.status(200).json({ token })
    } catch (error) {
        throw new Error(error);
    }
}





module.exports = {
    register_auth,
    login_auth
}