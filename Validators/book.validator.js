const Joi = require("joi")
const currentYear = new Date().getFullYear()
const booksValidation = (data) => {
    try {
        const booksValidationSchema = Joi.object({
            title: Joi.string().min(2).max(40).required().messages({
                "string.base": "Kitob nomi string ko'rinishida bo'lishi shart!",
                "string.empty": "Kitob nomi bo'sh bo'lmasligi kerak!",
                "any.required": "Kitob nomi kiritilishi shart!",
                "string.min": "Kitob nomi kamida 2(ikki) ta belgidan iborat bo'lishi zarur!",
                "string.max": "Kitob nomi 40(qirq) ta belgidan ko'p bo'lmasligi zarur!",

            }),
            pages: Joi.number().min(10).max(5000).required().messages({
                "number.base": "Kitob varoqlari son ko'rinishida berilishi shart!",
                "number.empty": "Kitob varoqlari qismi bo'sh bo'lmasligi zarur!",
                "number.required": "Kitob varoqlarini kiritish zarur!",
                "number.min": "Kitob varoqlari soni 10 dan kam bo'lmasligi zarur!",
                "number.max": "Kitob varoqlari soni 5000 dan ko'p bo'lmasligi zarur!"
            }),
            year: Joi.number().min(600).max(currentYear).required().messages({
                "number.base": "Kitob yili berilishi zarur!",
                "number.empty": "Kitob yili qismi bo'sh bo'lmasligi zarur!",
                "number.required": "Kitob yilini kiritish zarur!",
                "number.min": "Kitob yili kamida 600-yildan kam bo'lmasligi zarur!",
                "number.max": `Kitob yili ${currentYear} dan keyin bo'lmasligi zarur!`
            }),
            price: Joi.number().min(0).required().messages({
                "number.base": "Kitob narxi son ko'rinishida berilishi shart!",
                "number.empty": `"Kitob narxi" qismi bo'sh bo'lmasligi zarur!`,
                "number.required": "Kitob narxini kiritish zarur!",
                "number.min": "Kitob narxi 0 dan kam bo'lmasligi shart!"
            }),
            country: Joi.string().min(1).max(50).required().messages({
                "string.base": "Kitob davlati string ko'rinishida bo'lishi shart!",
                "string.empty": "Kitob davlati bo'sh bo'lmasligi kerak!",
                "any.required": "Kitob davlati kiritilishi shart!",
                "string.min": "Kitob davlati nomi kamida 1(bir) ta belgidan iborat bo'lishi zarur!",
                "string.max": "Kitob davlati nomi 50(ellik) ta belgidan ko'p bo'lmasligi zarur!",

            }),
            author: Joi.string().min(1).max(100).required().messages({
                "string.base": "Kitob authori ismi string ko'rinishida bo'lishi shart!",
                "string.empty": "Kitob authori ismi bo'sh bo'lmasligi kerak!",
                "any.required": "Kitob authori ismi  kiritilishi shart!",
                "string.min": "Kitob authori ismi kamida 1(bir) ta belgidan iborat bo'lishi zarur!",
                "string.max": "Kitob authori ismi 50(ellik) ta belgidan ko'p bo'lmasligi zarur!",

            }),
            description: Joi.string().min(1).max(1500).required().messages({
                "string.base": "Kitob haqida ma'lumot string ko'rinishida berilishi zarur!",
                "string.empty": "Kitob haqida ma'lumot maydoni to'ldirilishi zarur",
                "any.required": "Kitob haqida ma'lumot berilishi zarur!",
                "string.min": "Kitob haqida ma'lumot 1 ta belgidan ko'p bo'lishi zarur!",
                "string.max": "Kitob haqida ma'lumot 1500 ta belgidan ko'p bo'lmasligi zarur!",

            })

        })
        return booksValidationSchema.validate(data)
    } catch (error) {
        return new Error(error);

    }

}

module.exports = booksValidation