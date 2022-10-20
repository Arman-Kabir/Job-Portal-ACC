// const { updateMany } = require("../models/Jobs");
const { WriteError } = require("mongodb");
const { Error, MongooseError } = require("mongoose");
const Jobs = require("../models/Jobs");
const User = require("../models/User");


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
    // console.log(user.id);

    const isApplied = await Jobs.find({ _id: id, 'appliedCandidates': user.id });
    // console.log(isApplied);

    if (isApplied.length == 0) {
        console.log("isEmpty");
    } else {
        console.log("Not Empty");
    }

    if (isApplied.length > 0) {
        return "You applied to this job before";
    } else {
        const res = await Jobs.updateOne(
            { _id: id },
            { $push: { appliedCandidates: user.id } }
        );

        const res2 = await User.updateOne(
            { _id: user.id },
            { $push: { resume: { data: file.filename } } }
        );

        return [res, res2];
    }


}