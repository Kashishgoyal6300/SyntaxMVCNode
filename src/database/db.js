const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/practiceMVC")
        console.log("mongo connect hogya mera bhai")
    }
    catch (error) {
        console.log("eror");
        process.exit(1);
    }
}
module.exports = connectDB;