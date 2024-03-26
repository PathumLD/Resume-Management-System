import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Client from '../models/clientModel.js';
import dotenv from 'dotenv';
import { generateToken } from '../utils/jwtUtils.js';

dotenv.config();

export const clientRegister = async (req, res) => {
    const { name, email, password, userType } = req.body;

    if (!name || !email || !password || !userType) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // check if password has minimum 6 characters
    if (password.length < 6) {
        return res.status(400).json({ 
            message: 'Password must be at least 6 characters' 
        });
    }

    try {

    const client= await Client.findOne({ email });
    if (client) {
        return res.status(409).json({ message: 'Client already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newClient = new Client({
        name,
        email,
        password: hashedPassword,
        userType
    });

    // Generate and send JWT
    const token = generateToken(newClient._id, newClient.userType);

    await newClient.save();

    // send response
    res.status(201).json({ 
        success: true,
        message: 'Client registered successfully',
        newClient, 
        token
    });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Client login
export const clientLogin = async (req,res) => {
    const { email, password } = req.body;
    // check data validity
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // check if client exists
    const client = await Client.findOne({ email });
    if (!client) {
        return res.status(404).json({ message: 'Client not found' });
    }

    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, client.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate and send JWT
    const token = generateToken(client._id, client.userType);

    res.status(200).json({
        success: true,
        message: 'Client logged in successfully',
        client,
        token,

    });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// update Client
export const updateClient = async (req, res) => {
    const { name, email, password } = req.body;
    const clientId = req.params.id;

    try {

    // check if client exists
    const client = await Client.findById(clientId);
    if (!client) {
        return res.status(404).json({ message: 'Client not found' });
    }

    // If password is provided, check if it's correct
    if (password) {
        const isPasswordCorrect = await bcrypt.compare(password, client.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
    }

    // Update client details
    if (name) client.name = name;
    if (email) client.email = email;
    // If password is provided and correct, hash it and update
    if (password) {
        const salt = await bcrypt.genSalt(10);
        client.password = await bcrypt.hash(password, salt);
    }

    await client.save();

    res.status(200).json({
        success: true,
        message: 'Client updated successfully',
        client
    })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Logout Client
export const clientLogout = async (req, res) => {
    try {
        // Get the client ID from the decoded token
        const clientId = req.client.id;

        // Find the client by ID
        const client = await Client.findById(clientId);

        // If the client is not found, return an error
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        // Remove the JWT token from the client object
        client.token = null;

        // Save the updated client object
        await client.save();

        res.status(200).json({
            success: true,
            message: 'Client logged out successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Get All Active Candidates
export const getAllActiveCandidates = async (req, res) => {
    try {
        // Assuming userType and candidateStatus are fields in your Client model
        const candidates = await Client.find({ userType: "candidate", clientStatus: "active" });
        res.status(200).json(candidates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Get All Active Companies
export const getAllActiveCompanies = async (req, res) => {
    try {
        // Assuming userType and companyStatus are fields in your Client model
        const companies = await Client.find({ userType: "company", clientStatus: "active" });
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

