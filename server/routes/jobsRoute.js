import express from 'express';
import { authenticateClient } from '../middlewares/authMiddleware.js';
import { applyJob, cancelApplication, createJobs, deleteJobs, getAllActiveVacancies, getAllJobs, getJobById, getJobsByCompany, updateJobs } from '../controller/jobsController.js';

const jobsRouter = express.Router();

// Create job
jobsRouter.post('/create-job', authenticateClient, createJobs);

// Update Jobs
jobsRouter.put('/update-job/:jobId', authenticateClient, updateJobs);

// Get All Jobs of the company
jobsRouter.get('/all-jobs', getAllJobs);

// Get Jobs by Company
jobsRouter.get('/getJobsByCompany/:companyId', getJobsByCompany);

// Get Jobs by Id
jobsRouter.get('/getJobById/:jobId', getJobById);

// Delete Job
jobsRouter.put('/delete-job/:jobId', authenticateClient, deleteJobs);

// Apply for a job
jobsRouter.put('/apply-for-job/:jobId', authenticateClient, applyJob);

//Get All Active Jobs
jobsRouter.get('/active-jobs', getAllActiveVacancies);

//Cancel Application
jobsRouter.put('/cancel-application/:jobId', authenticateClient, cancelApplication);


export default jobsRouter;