const express = require("express");
const hiring_managerController = require('../controllers/hiring-manager.controller');
const  authorization =  require("../middleware/authorization");


const router = express.Router();

router.post("/jobs", authorization("hiring-manager"),  hiring_managerController.createJob)

router.get("/manager/jobs",hiring_managerController.getJobsOfHr)

router.get("/manager/jobs/:id",hiring_managerController.getJobDetails)



router.patch("/jobs/:id",hiring_managerController.updateJob)


module.exports = router;