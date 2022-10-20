const Jobs = require("../models/Jobs")


exports.createJobService = async (data) => {
    const job = await Jobs.create(data);
    return job;
}

exports.getJobsOfHrService = async () => {
    const hrId = '634e50c113e3dd64380a512a';

    const jobs = await Jobs.find({ 'hiringManager.id': hrId }).populate('hiringManager.id');
    return jobs;
}

exports.getJobDetailsService = async (id) => {
    const job = await Jobs.find({ _id: id }); //.populate('appliedCandidates.id');
    return job;
}