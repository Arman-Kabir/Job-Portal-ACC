const express = require("express");
const hiring_managerController = require('../controllers/hiring-manager.controller');


const router = express.Router();

router.post("/jobs",hiring_managerController.createJob)



router.patch("/jobs/:id",hiring_managerController.updateJob)


module.exports = router;