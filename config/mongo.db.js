const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database ga muofaqiyatli ulandi");

    } catch (error) {
        console.log("Database ulanishda xatolik", error);

    }
}

module.exports = connectDB