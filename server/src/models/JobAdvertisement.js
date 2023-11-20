const mongoose = require("mongoose");

const JobAdvertisementShema = new mongoose.Schema({
    name: String,
    description: String,
    status: Boolean,
}, {timestamps: true, versionKey: false});

const JobAdvertisement = new mongoose.model("JobAdvertisement", JobAdvertisementShema);

module.exports = JobAdvertisement;