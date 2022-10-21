const Jobs = require("../models/Jobs")


exports.createJobService = async (data) => {
    // console.log(req);
    const job = await Jobs.create(data);
    return job;
}

exports.getJobsOfHrService = async (user) => {
    const jobs = await Jobs.find({ 'hiringManager.id': user.id }).populate('hiringManager.id');
    return jobs;
}

exports.getJobDetailsService = async (id) => {
    const job = await Jobs.find({ _id: id }).populate('appliedCandidates');
    return job;
}

exports.updateJobService = async (id, data) => {
    const job = await Jobs.updateOne(
        { _id: id },
        { $set: data }
    );
    return job;
}