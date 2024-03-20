import mongoose from 'mongoose';
import Jobs from '../models/jobsModel.js';
import Company from '../models/companyModel.js';
import Candidate from '../models/candidateModel.js';
import Client from '../models/clientModel.js';


// Create Jobs
export const createJobs = async (req, res) => {
    const {
        jobTitle,
        jobType,
        jobDescription,
        jobLocation,
        jobSalary,
        jobDeadline,
    } = req.body;

    try {
        // Extract clientId from the decoded token
        const clientId = req.params.id;

        // Find the company associated with the clientId
        const company = await Company.findOne({ client: clientId });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // Create a new job and associate it with the company
        const jobs = new Jobs({
            jobTitle,
            jobType,
            jobDescription,
            jobLocation,
            jobSalary,
            jobDeadline,
            company: company._id, // Use the company's ObjectId
        });

        await jobs.save();

        // Optional: Update company's `jobPosts` array
        if (company.jobPosts) {
            company.jobPosts.push(jobs._id);
            await company.save();
        }

        res.status(201).json({ 
            success: true, 
            message: 'Jobs created successfully', 
            jobs 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


//Update Jobs
export const updateJobs = async (req, res) => {
    const {
        jobId, // Extract the job ID from the URL parameters
    } = req.params;

    const {
        jobTitle,
        jobType,
        jobDescription,
        jobLocation,
        jobSalary,
        jobDeadline,
    } = req.body;

    try {
        // Extract clientId from the decoded token
        const clientId = req.client.id;

        // Find the company associated with the clientId
        const company = await Company.findOne({ client: clientId });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // Find the job by its ID
        const job = await Jobs.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Check if the job belongs to the company
        if (job.company.toString() !== company._id.toString()) {
            return res.status(403).json({ message: 'Forbidden: You do not have permission to update this job' });
        }

        // Update the job fields
        job.jobTitle = jobTitle || job.jobTitle;
        job.jobType = jobType || job.jobType;
        job.jobDescription = jobDescription || job.jobDescription;
        job.jobLocation = jobLocation || job.jobLocation;
        job.jobSalary = jobSalary || job.jobSalary;
        job.jobDeadline = jobDeadline || job.jobDeadline;

        await job.save();

        res.status(200).json({ 
            success: true, 
            message: 'Job updated successfully', 
            job 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Get all Jobs
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find();
        res.status(200).json({ 
            success: true, 
            message: 'Jobs fetched successfully', 
            jobs 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Get Jobs by Company
export const getJobsByCompany = async (req, res) => {
    const { clientId } = req.params; // Extract the clientId from the URL parameters

    try {
        // Find the company by its clientId
        const company = await Company.findOne({ client: clientId });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // Find all jobs associated with the company
        const jobs = await Jobs.find({ company: company._id });

        res.status(200).json({ 
            success: true, 
            message: 'Jobs retrieved successfully', 
            jobs 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Get Jobs by Id
export const getJobById = async (req, res) => {
    const { jobId } = req.params;
    console.log("JobId",jobId)

    try {
        const job = await Jobs.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json({ 
            success: true, 
            message: 'Job retrieved successfully', 
            job 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Delete Jobs
export const deleteJobs = async (req, res) => {
    const { jobId } = req.params;

    try {
        // Extract clientId from the decoded token
        const clientId = req.client.id;

        // Find the company associated with the clientId
        const company = await Company.findOne({ client: clientId });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // Find the job by its ID
        const job = await Jobs.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Check if the job belongs to the company
        if (job.company.toString() !== company._id.toString()) {
            return res.status(403).json({ message: 'Forbidden: You do not have permission to delete this job' });
        }

        job.jobStatus = "open";
        await job.save();

        res.status(200).json({ 
            success: true, 
            message: 'Job deleted successfully', 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Apply for a job
export const applyJob = async (req, res) => {

    const { jobId} = req.params;
    const { candidateName, candidateEmail, candidateResume } = req.body;

    try {
        const job = await Jobs.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        job.applications.push({ candidateName, candidateEmail, candidateResume });
        await job.save();

        res.status(200).json({ 
            success: true, 
            message: 'Job applied successfully', 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};