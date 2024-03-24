import express from 'express';
import { createCompany, deleteCompany, getAllCompany, getCompanyByClientId, getCompanyById, updateCompany } from '../controller/companyController.js';
import { authenticateClient } from '../middlewares/authMiddleware.js';

const companyRouter = express.Router();

//Create Company
companyRouter.put('/create',authenticateClient, createCompany);

//Update Company
companyRouter.put('/update/:clientId',authenticateClient, updateCompany);

// Get All Companies
companyRouter.get('/getAllCompanies', getAllCompany);

// Get Company by ID
companyRouter.get('/getCompanyById/:companyId',  getCompanyById);

// Get Company by clientID
companyRouter.get('/getCompanyByClientId/:clientId', authenticateClient, getCompanyByClientId);

//Delete Company
companyRouter.put('/delete-company/:clientId', authenticateClient, deleteCompany);



export default companyRouter;