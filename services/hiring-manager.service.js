const Jobs = require("../models/Jobs")


exports.createJobService = async (data) => {
    const job = await Jobs.create(data);
    return job;
}

exports.getJobsOfHrService = async () => {
    const jobs = await Jobs.find({}).populate('hiringManager.id');
    return jobs;
}