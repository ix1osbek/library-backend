const AuthorModels = require("../schema/author.schema.js")


const getAuthor = async (req, res) => {
    try {
        const author = await AuthorModels.find()
        if (author.length === 0) {
            return res.status(404).json({
                message: "Author not found!"
            })
        }
        res.status(200).json(author)
    } catch (error) {
        throw new Error(error);
    }
}

const getOneAuthor = async (req, res) => {
    try {
        const foundedAuthor = await AuthorModels.findById(req.params.id)
        if (!foundedAuthor) {
            return res.status(404).json({
                message: "author topilmadi!"
            })
        }
        res.status(200).json({ foundedAuthor })
    } catch (error) {
        throw new Error(error);

    }
}


const addAuthor = async (req, res) => {

    try {
        await AuthorModels.create(req.body)
        res.status(201).json({
            message: "add Author"
        })
    } catch (error) {
        throw new Error(error);
    }
}


const updateAuthor = async (req, res) => {
    try {
        const foundedAuthor = await AuthorModels.findById(req.params.id)
        if (!foundedAuthor) {
            return res.status(404).json({
                message: "Author yangilanishida xatolik!"
            })
        }
        await AuthorModels.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            message: "update author"
        })
    } catch (error) {
        throw new Error(error);
    }
}

const deleteAuthor = async (req, res) => {
    try {
        const foundedAuthor = await AuthorModels.findById(req.params.id)
        if (!foundedAuthor) {
            return res.status(404).json({
                message: "Author ochirishda xatolik!"
            })
        }
        await AuthorModels.findByIdAndDelete(req.params.id, req.body)
        res.status(201).json({
            message: "delete author"
        })
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    getAuthor,
    addAuthor,
    getOneAuthor,
    updateAuthor,
    deleteAuthor

}