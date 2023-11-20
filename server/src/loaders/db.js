const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/job_portal");
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("DB_CONNECT_ERROR", error);
    }
}

module.exports = connectToDb;