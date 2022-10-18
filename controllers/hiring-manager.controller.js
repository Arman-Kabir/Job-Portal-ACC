
exports.createJob = async (req,res) => {
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
exports.getAllJobs = async (req,res) => {
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
exports.getJobDetails = async (req,res) => {
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