const mongoose = require("mongoose");
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const jobsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name for the job"],
            trim: true,
            lowercase: true
        },
        description: {
            type: String,
            required: [true, "Please provide a description for the job"]
        },
        location: {
            type: String,
            required: [true, "Please provide a location for the job"]
        },
        jobType: {
            type: String,
            enum: ["full-time", "part-time", "contractual"],
            default: "full-time",
        },
        salaryRange: {
            type: Number,
            required: [true, "Please provide a the salary for the job"]
        },
        hiringManager: {
            name: String,
            id: {
                type: ObjectId,
                ref: 'User'
            }
        },
        appliedCandidates: [{
            email: {
                type: String,
                unique: [true, "You have applied already"]
            },
            id: {
                type: ObjectId,
                ref: 'User'
            }
        }]
    },
    {
        timestamps: true,
    }
);

const Jobs = mongoose.model('Jobs', jobsSchema);

module.exports = Jobs;