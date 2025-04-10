const booksvalidation = require("../Validators/book.validator.js")

const validateBook = async (req, res, next) => {
    try {
        const { error } = booksvalidation(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        return next();
    } catch (error) {
        return new Error(error)
    }
}

module.exports = validateBook