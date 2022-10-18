const express = require("express");
const candidateController = require('../controllers/candidate.controller');


const router = express.Router();

router.get("/jobs",candidateController.getAllJobs);
router.get("/jobs/:id",candidateController.jobDetailsWithHrInfo);


module.exports = router;