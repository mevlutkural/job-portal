const express = require("express");
const jobAdvertisements = require("./job-advertisements");

const router = express.Router();

router.use(jobAdvertisements);

module.exports = router;