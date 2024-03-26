import mongoose from 'mongoose';
import Client from '../models/clientModel.js';
import Company from '../models/companyModel.js';
import { nanoid } from 'nanoid';
import Candidate from '../models/candidateModel.js';
import Jobs from '../models/jobsModel.js';

// Create Company
export const createCompany = async (req, res) => {
    try {
        const { address, location, contact, description, linkedin, website } = req.body;
        const clientId = req.client.id;

        // Generate a unique identifier for the company
        const identifier = nanoid();

        // Assuming the client email and password are used for the company as well
        const client = await Client.findById(clientId);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        // Check if a company with the same email or companyName already exists
        const existingCompany = await Company.findOne({ $or: [{ email: client.email }, { companyName: client.name }] });
        if (existingCompany) {
            return res.status(400).json({ message: 'Company with the same email or name already exists' });
        }

        const company = new Company({
            identifier,
            client: clientId,
            companyName: client.name,
            email: client.email,
            password: client.password,
            address,
            location,
            contact,
            description,
            linkedin,
            website,
        });

        await company.save();
        res.status(201).json({
            success: true,
            message: 'Company created successfully',
            company,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};




// Update Company
export const updateCompany = async (req, res) => {

    try {
        const { contact, address, location, description, linkedin, github, website } = req.body;

        const clientId = req.client.id

        const client = await Client.findById(clientId);
        console.log("clientId : ", clientId)
        if (!client) {
            return res.status(404).json({ 
                message: 'Client not found' 
            });
        }

        //check if company exist
        // const companyId = req.params.id;
        // console.log("CompanyId :",companyId)
        const company = await Company.findOne({ client: clientId }); //_id: companyId,
        if (!company) {
            return res.status(404).json({ 
                message: 'Company not found' 
            });
        }

        // Verify if the company belongs to the client
        if (clientId !== String(company.client)) {
            return res.status(403).json({
                success: false,
                message: 'Forbidden'
            })
        }

        const updatedCompany = await Company.findOneAndUpdate(
            { client: clientId}, //_id: companyId,
            { 
                contact,
                address,
                location,
                description,
                linkedin,
                github,
                website,
            },
            { new: true }  
        );

        res.status(200).json({
            success: true,
            message: 'Company updated successfully',
            updatedCompany,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }

};


// Get All Company
export const getAllCompany = async (req, res) => {

    try {

        const companies = await Company.find();
        res.status(200).json(companies);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }
    
};


// Get Company by ID
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.companyId; // Use companyId from URL
        
        console.log("Company Id :", companyId);

        const company = await Company.findById(companyId); // Use findById mongoose method
        if (!company) {
            return res.status(404).json({ 
                message: 'Company not found' 
            });
        }

        const candidateData = [];
        for (const candidateId of company.appliedCandidates) {
            const candidate = await Candidate.findById(candidateId);
            if (candidate) {
                candidateData.push(candidate);
            }
        }

        res.status(200).json({
            success: true,
            message: 'Company found successfully',
            company,
            candidates: candidateData,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }
};



// Get Company by clientID
export const getCompanyByClientId = async (req, res) => {
    try {
        const clientId = req.client.id;
        console.log("client Id :", clientId);

        const company = await Company.findOne({ client: clientId }).populate('appliedCandidates');
        if (!company) {
            return res.status(404).json({ 
                message: 'Company not found' 
            });
        }

        // Extract candidate details from appliedCandidates
        const candidateDetails = await Candidate.find({ _id: { $in: company.appliedCandidates } });

        // Extract job IDs from the jobPosts field
        const jobIds = company.jobPosts;

        // Find jobs by the extracted job IDs
        const jobs = await Jobs.find({ _id: { $in: jobIds } }).populate('company', 'companyName');

        res.status(200).json({
            success: true,
            message: 'Company found successfully',
            company,
            candidateDetails,
            jobs
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }
};




// Delete Company
export const deleteCompany = async (req, res) => {

    try {
        
        // Fetch the client to get the email and password
        const clientId = req.client.id
        
        const client = await Client.findById(clientId);
        console.log("clientId : ", clientId)
        if (!client) {
            return res.status(404).json({ 
                message: 'Client not found' 
            });
        }

        // Check if company exist
        // const companyId = req.params.id;
        // console.log("CompanyId :",companyId)
        const company = await Company.findOne({ client: clientId }); //_id: companyId,
        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            })
        }

        // Verify if the company belongs to the client
        if (clientId !== String(company.client)) {
            return res.status(403).json({
                success: false,
                message: 'Forbidden : You do not have permission to delete this company'
            })
        }

        //Delete company
        company.companyStatus = 'deleted';

        await company.save();

        res.status(200).json({
            success: true,
            message: 'Company deleted successfully',
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }

};