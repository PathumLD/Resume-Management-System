import express from 'express';
import { createCompany, deleteCompany, getAllCompany, getCompanyById, updateCompany } from '../controller/companyController.js';
import { authenticateClient } from '../middlewares/authMiddleware.js';

const companyRouter = express.Router();

//Create Company
companyRouter.post('/create-company',authenticateClient, createCompany);

//Update Company
companyRouter.put('/update-company/:id',authenticateClient, updateCompany);

// Get All Companies
companyRouter.get('/getAllCompanies', getAllCompany);

// Get Company by ID
companyRouter.get('/getCompanyById/:id', authenticateClient, getCompanyById);

//Delete Company
companyRouter.put('/delete-company/:id', authenticateClient, deleteCompany);



export default companyRouter;