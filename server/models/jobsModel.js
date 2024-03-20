import mongoose, { Schema } from "mongoose";

const jobsSchema = new mongoose.Schema({
    
    jobTitle: { 
        type: String, 
        required: true 
    },
    jobType: { 
        type: String, 
        required: true 
    },
    jobDescription: { 
        type: String, 
        required: true 
    },
    jobLocation: { 
        type: String, 
        required: true
    },
    jobSalary: { 
        type: String, 
        required: true 
    },
    jobDeadline: { 
        type: String, 
        required: true 
    },
    jobStatus: {
        type: String,
        default: "open",
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate"
    },
});

const Jobs = mongoose.model('Jobs', jobsSchema);
export default Jobs