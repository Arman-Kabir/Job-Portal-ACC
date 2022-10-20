const { getAllJobsService, jobDetailsWithHrInfoService, applyJobService } = require("../services/candidate.service");


exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await getAllJobsService();
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
}

exports.jobDetailsWithHrInfo = async (req, res) => {
    try {
        const {id} = req.params;
        const job = await jobDetailsWithHrInfoService(id);
        res.status(200).json({
            status: "success",
            data: job
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't create Job",
            error: error.message
        });
    }
}

exports.applyJob = async (req, res) => {
    try {
        const {id} = req.params;
        // console.log(id,req.file,req.user);

        const result = await applyJobService(id,req.file,req.user);
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
}






exports.fileUpload = async (req, res) => {
    try {
        // const {id} = req.params;
        // console.log(id,req.body,req.user);
        // const result = await applyJobService(id);
        res.status(200).json({
            status: "success",
            // data: result
            data: req.file
            
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't create Job",
            error: error.message
        });
    }
}