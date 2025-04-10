const authorValidation = require("../Validators/author.validator.js")

const validateAuthor = async (req, res, next) => {
    try {
        const { error } = authorValidation(req.body)
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

module.exports = validateAuthor