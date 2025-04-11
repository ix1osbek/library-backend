const jwt = require("jsonwebtoken")

const werifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]
    }

    if (!token) {
        return res.status(401).json({ message: "No token" })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
       next()

    } catch (error) {
        throw new Error(error);

    }
}

module.exports = werifyToken