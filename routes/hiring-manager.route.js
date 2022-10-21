const express = require("express");
const hiring_managerController = require('../controllers/hiring-manager.controller');
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");


const router = express.Router();

// console.log(req);

router.post("/jobs", verifyToken, authorization("hiring-manager"), hiring_managerController.createJob)

router.get("/manager/jobs", verifyToken, authorization("hiring-manager"), hiring_managerController.getJobsOfHr)

router.get("/manager/jobs/:id",verifyToken, authorization("hiring-manager", "admin"), hiring_managerController.getJobDetails)



router.patch("/jobs/:id", hiring_managerController.updateJob)


module.exports = router;