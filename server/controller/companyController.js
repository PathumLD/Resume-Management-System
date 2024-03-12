import mongoose from 'mongoose';
import Client from '../models/clientModel.js';
import Company from '../models/companyModel.js';

// Create Company
export const createCompany = async (req, res) => {

    try {

        const { contact, address,location, description, linkedin, github, website } = req.body;

        // Fetch the client to get the email and password
        const clientId = req.client.id

        const client = await Client.findById(clientId);
        console.log("clientId : ", clientId)
        if (!client) {
            return res.status(404).json({
                message: 'Client not found'
            })
        }

        const company = new Company({
            client: clientId,
            companyName: client.name,
            email: client.email,
            password: client.password,
            contact,
            address,
            location,
            description,
            linkedin,
            github,
            website,
        });

        await company.save();
        res.status(201).json({
            success: true,
            message: 'Company created successfully',
            company,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
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
        
        // const companyId = req.params.id;
        const clientId = req.client.id
        console.log( "client Id :", clientId) ; //"company Id :",companyId,
        // console.log("Company Id :",companyId);

        const company = await Company.findOne({ client: clientId}); //_id: companyId,
        if (!company) {
            return res.status(404).json({ 
                message: 'Company not found' 
            });
        }

        res.status(200).json({
            success: true,
            message: 'Company found successfully',
            company,
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