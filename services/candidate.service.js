const Jobs = require("../models/Jobs")


exports.getAllJobsService = async () => {
    const jobs = await Jobs.find({});
    return jobs;
}

exports.jobDetailsWithHrInfoService = async (id) => {
    const job = await Jobs.find({ _id: id }).populate('hiringManager.id');
    return job;
}



exports.applyJobService = async (id, file, user) => {
    // const job = await ;
    const res = await Jobs.updateOne(
        { _id: id },
        { $push: { appliedCandidates: user.id } }
    )
    return res;
}