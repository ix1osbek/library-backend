////////// register
const User = require("../schema/user.schema.js")
const bcryt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const register_auth = async (req, res) => {

    try {
        const { username, password, role } = req.body
        const hashedPassword = await bcryt.hash(password, 10)
        const newUser = new User({
            username,
            password: hashedPassword,
            role
        })
        await newUser.save()
        res.status(201).json({
            message: `User registered with username ${username}`
        })
    } catch (error) {
        throw new Error(error);
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

        if(!isMatch){
            return res.status(400).json({
                message: "Password wrong!"
            })
        }

        const token= jwt.sign({
            id: user._id,
            role: user.role
        } , process.env.JWT_SECRET , {expiresIn: "30d"})

        res.status(200).json({token})
    } catch (error) {
        throw new Error(error);
    }
}





module.exports = {
    register_auth,
    login_auth
}