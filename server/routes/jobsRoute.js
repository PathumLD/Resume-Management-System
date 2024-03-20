import express from 'express';
import { authenticateClient } from '../middlewares/authMiddleware.js';
import { applyJob, createJobs, deleteJobs, getAllJobs, getJobById, getJobsByCompany, updateJobs } from '../controller/jobsController.js';

const jobsRouter = express.Router();

// Create job
jobsRouter.post('/create-job', authenticateClient, createJobs);

// Update Jobs
jobsRouter.put('/update-job/:jobId', authenticateClient, updateJobs);

// Get All Jobs of the company
jobsRouter.get('/all-jobs', getAllJobs);

// Get Jobs by Company
jobsRouter.get('/getJobsByCompany/:clientId', getJobsByCompany);

// Get Jobs by Id
jobsRouter.get('/getJobById/:jobId', getJobById);

// Delete Job
jobsRouter.put('/delete-job/:jobId', authenticateClient, deleteJobs);

// Apply for a job
jobsRouter.put('/apply-for-job/:jobId', authenticateClient, applyJob);


export default jobsRouter;