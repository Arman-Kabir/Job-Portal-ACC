const { createJobService, getJobsOfHrService, getJobDetailsService } = require("../services/hiring-manager.service");

exports.createJob = async (req,res) => {
    try {
        const result = await createJobService(req.body);

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't create Job",
            error: error.message
        });
    }
};



exports.getJobsOfHr = async (req,res) => {
    try {
        const jobs = await getJobsOfHrService(req.user);
        res.status(200).json({
            status: "success",
            data: jobs
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't create Job",
            error: error.message
        });
    }
};



exports.getJobDetails = async (req,res) => {
    try {
        const {id} = req.params;
        const job = await getJobDetailsService(id);
        console.log(id);

        res.status(200).json({
            status: "success",
            data: job
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't load info",
            error: error.message
        });
    }
};

exports.updateJob = async (req,res) => {
    try {
        
        res.status(200).json({
            status: "success",
            data: categories
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't create Job",
            error: error.message
        });
    }
};