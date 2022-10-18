const Jobs = require("../models/Jobs")


exports.createJobService = async (data) => {
    const job = await Jobs.create(data);

    return job;
}