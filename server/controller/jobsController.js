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
        jobRequirements,
        jobResponsibilities
    } = req.body;

    try {
        // Extract clientId from the decoded token
        const clientId = req.client.id;
        console.log("Client ID:", clientId);

        // Find the company associated with the clientId
        const company = await Company.findOne({ client: clientId });
        console.log("Company:", company); // Log the company found (or not found)

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // Create a new job and associate it with the company
        const job = new Jobs({
            jobTitle,
            jobType,
            jobDescription,
            jobLocation,
            jobSalary,
            jobRequirements,
            jobResponsibilities,
            company: company._id, // Use the company's ObjectId
        });

        await job.save();

        // Update company's `jobPosts` array
        company.jobPosts.push(job._id);
        await company.save();

        res.status(201).json({ 
            success: true, 
            message: 'Job created successfully', 
            job 
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
        jobRequirements,
        jobResponsibilities,
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
        job.jobRequirements = jobRequirements || job.jobRequirements;
        job.jobResponsibilities = jobResponsibilities || job.jobResponsibilities;

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
        const jobs = await Jobs.find().populate('company', 'companyName');
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
    const { companyId } = req.params; // Retrieve companyId from request parameters

    try {
        // Find all jobs associated with the company
        const jobs = await Jobs.find({ company: companyId }).populate('company', 'companyName');
    
        if (!jobs) {
          return res.status(404).json({ message: 'No jobs found for this company' });
        }
    
        res.status(200).json({ success: true, message: 'Jobs retrieved successfully', jobs });
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
        const job = await Jobs.findById(jobId).populate('company', 'companyName');
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

        job.jobStatus = "Close";
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
    const { jobId } = req.params;
    const clientId = req.client.id;
  
    try {
      const candidate = await Candidate.findOne({ client: clientId });
      if (!candidate) {
        return res.status(404).json({ message: 'Candidate not found' });
      }
  
      const job = await Jobs.findById(jobId);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
  
      candidate.appliedJobs.push(job);
      await candidate.save();
  
      job.appliedCandidates.push(candidate);
      await job.save();
  
      res.status(200).json({ success: true, message: 'Applied for the job successfully', job });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  

  
//Get All Active Vacancies
export const getAllActiveVacancies = async (req, res) => {
    try {
        const vacancies = await Jobs.find({ jobStatus: "Open" });
        res.status(200).json(vacancies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


//Cancel Application
export const cancelApplication = async (req, res) => {
    try {
      const { jobId } = req.params;
      const candidateId = req.client.id; // Using optional chaining to handle undefined
  
      if (!candidateId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      // Find the job by ID
      const job = await Jobs.findById(jobId);
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
  
      // Remove the candidate data from the job
      const candidateIndex = job.appliedCandidates.findIndex(
        (candidate) => candidate._id.toString() === candidateId
      );
      if (candidateIndex === -1) {
        return res.status(404).json({ error: 'Candidate not found in job applicants' });
      }
  
      job.appliedCandidates.splice(candidateIndex, 1);
      await job.save();
  
      // Remove the job data from the candidate
      const candidate = await Candidate.findById(candidateId);
      if (!candidate) {
        return res.status(404).json({ error: 'Candidate not found' });
      }
  
      const jobIndex = candidate.appliedJobs.findIndex(
        (appliedJob) => appliedJob.toString() === jobId
      );
      if (jobIndex === -1) {
        return res.status(404).json({ error: 'Job not found in candidate applications' });
      }
  
      candidate.appliedJobs.splice(jobIndex, 1);
      await candidate.save();
  
      res.sendStatus(200);
    } catch (error) {
      console.error('Error cancelling application:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
