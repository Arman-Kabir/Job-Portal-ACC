const mongoose = require("mongoose");
const validator = require('validator');
var uniqueValidator = require('mongoose-unique-validator');
const { ObjectId } = mongoose.Schema.Types;

const applyInfoSchema = mongoose.Schema({
    appliedAt:{
        type:Date,
        default:Date.now,
        max:'2022-10-21'
    },
    jobId:{
        type:ObjectId,
        ref:'Jobs'
    }
}
);

const ApplyInfo = mongoose.model('ApplyInfo', applyInfoSchema);

module.exports = ApplyInfo;