const express = require("express");
const JobAdvertisement = require("../models/JobAdvertisement");
const httpStatus = require("http-status");

const router = express.Router();

router.get("/job-advertisements", async (req, res) => {
  const jobAdvertisements = await JobAdvertisement.find({});

  return res.status(httpStatus.OK).json(jobAdvertisements);
});

router.post("/job-advertisements", async (req, res) => {
  const data = req.body;

  const jobAdvertisement = await JobAdvertisement.create(data);

  return res.status(httpStatus.OK).json(jobAdvertisement);
});

router.delete("/job-advertisements/:id", async (req, res) => {
  const id = req.params.id;

  const deletedJobAdvertisement = await JobAdvertisement.deleteOne({ _id: id });

  return res.status(httpStatus.OK).json(deletedJobAdvertisement);
});

module.exports = router;
