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
    jobRequirements: { 
        type: String, 
        required: true 
    },
    jobResponsibilities: { 
        type: String, 
        required: true 
    },
    jobStatus: {
        type: String,
        default: "Open",
    },
    applyStatus: {
        type: String,
        default: "Not Applied",
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    appliedCandidates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate'
    }]
});

const Jobs = mongoose.model('Jobs', jobsSchema);
export default Jobs