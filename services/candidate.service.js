// const { updateMany } = require("../models/Jobs");
const { WriteError } = require("mongodb");
const { Error, MongooseError } = require("mongoose");
const ApplyInfo = require("../models/ApplyInfo");
const Jobs = require("../models/Jobs");
const User = require("../models/User");


exports.getAllJobsService = async () => {
    const jobs = await Jobs.find({});
    return jobs;
};

exports.jobDetailsWithHrInfoService = async (id) => {
    const job = await Jobs.find({ _id: id }).populate('hiringManager.id');
    return job;
};



exports.applyJobService = async (id, file, user) => {
    
    const isApplied = await Jobs.find({ _id: id, 'appliedCandidates': user.id });
    const jobId = {jobId:id};
    
    if (isApplied.length > 0) {
        return "You applied to this job before";
    } else {

        const res3 = await ApplyInfo.create(jobId);

        const res = await Jobs.updateOne(
            { _id: id },
            { $push: { appliedCandidates: user.id } }
        );

        const res2 = await User.updateOne(
            { _id: user.id },
            { $push: { resume: { data: file.filename } } }
        );

        return [res3,res, res2];
    }
};