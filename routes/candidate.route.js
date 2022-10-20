const express = require("express");
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');
const uploader = require("../middleware/uploader");
const verifyToken = require("../middleware/verifyToken");



router.post('/file-upload',uploader.single("image"), candidateController.fileUpload);


router.get("/jobs",candidateController.getAllJobs);
router.get("/jobs/:id",candidateController.jobDetailsWithHrInfo);
router.post("/jobs/:id/apply", verifyToken,  candidateController.applyJob);

module.exports = router;