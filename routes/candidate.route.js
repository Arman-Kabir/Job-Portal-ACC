const express = require("express");
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');
const uploader = require("../middleware/uploader");
const verifyToken = require("../middleware/verifyToken");



router.post('/file-upload', uploader.single("resume"), candidateController.fileUpload);


router.get("/jobs", candidateController.getAllJobs);
router.get("/jobs/:id", candidateController.jobDetailsWithHrInfo);
router.post("/jobs/:id/apply", verifyToken, uploader.single("resume"), candidateController.applyJob);

module.exports = router;