const express = require("express");
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');
const verifyToken = require("../middleware/verifyToken");







router.get("/jobs",candidateController.getAllJobs);
router.get("/jobs/:id",candidateController.jobDetailsWithHrInfo);
router.post("/jobs/:id/apply", verifyToken,  candidateController.applyJob);

module.exports = router;