const Joi = require("joi")
const currentYear = new Date().getFullYear()
const authorValidation = (data) => {
    try {
        const authorValudationSchema = Joi.object({
            fullName: Joi.string().min(2).max(100).required().messages({
                "string.base": "Author ismi string ko'rinishida bo'lishi shart!",
                "string.empty": "Author ismi bo'sh bo'lmasligi kerak!",
                "any.required": "Author ismi kiritilishi shart!",
                "string.min": "Author ismi kamida 2(ikki) ta belgidan iborat bo'lishi zarur!",
                "string.max": "Author ismi 100(yuz) ta belgidan ko'p bo'lmasligi zarur!",

            }),
            dateOfBirth: Joi.date().required().messages({
                "date.base": "Author tug'ilgan sanasi Date ko'rinishida berilishi shart!",
                "date.empty": "Author tug'ilgan sanasi bo'sh bo'lmasligi zarur!",
                "date.required": "Author tug'ilgan sanasi kiritish shart!"
            }),
            dateOfDeath: Joi.date().max(currentYear).messages({
                "date.required": "Kitob yilini kiritish zarur!",
                "date.min": "Kitob yili kamida 600-yildan kam bo'lmasligi zarur!",
                "date.max": `Author vafot etgan sanasi ${currentYear} yildan o'tgan bo'lmasligi shart!`
            }),
            country: Joi.string().min(2).max(120).required().messages({
                "string.base": "Davlat string ko'rinishida berilishi shart!",
                "string.empty": `Davlat nomi maydoni bo'sh bo'lmasligi shart!`,
                "string.required": "Davlat nomini kiritish shart!",
                "string.min": "Davlat nomi 2 ta belgidan ko'p bo'lishi zarur!",
                "string.max": "Davlat nomi 120 ta belgidan kam bo'lishi shart"
            }),
            bio: Joi.string().min(1).required().messages({
                "string.base": "Author haqida ma'lumot string ko'rinishida bo'lishi shart!",
                "string.empty": "Author haqida ma'lumot bo'sh bo'lmasligi shart!",
                "any.required": "Author haqida ma'lumot kiritish shart",
                "string.min": "Author haqida malumot 1 ta belgidan ko'p bo'lishi shart!",
            })
        })
        return authorValudationSchema.validate(data)
    } catch (error) {
        return new Error(error);

    }

}

module.exports = authorValidation