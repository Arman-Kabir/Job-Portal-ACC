const express = require("express");
const candidateController = require('../controllers/candidate.controller');


const router = express.Router();

router.get("/jobs",candidateController.getAllJobs);
router.get("/jobs/:id",candidateController.jobDetailsWithHrInfo);
router.get("/jobs/:id/apply",candidateController.applyJob);


module.exports = router;