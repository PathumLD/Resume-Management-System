import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Guest from '../models/guestModel.js';

export const guestRegister = async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // check if password has minimum 6 characters
    if (password.length < 6) {
        return res.status(400).json({ 
            message: 'Password must be at least 6 characters' 
        });
    }

    try {

    const guest = await Guest.findOne({ email });
    if (guest) {
        return res.status(409).json({ message: 'Guest already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newGuest = new Guest({
        userName,
        email,
        password: hashedPassword,
    });

    await newGuest.save();

    // send response
    res.status(201).json({ 
        success: true,
        message: 'Guest registered successfully',
        newGuest
    });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Guest login
export const guestLogin = async (req, res) => {
    const { email, password } = req.body;
    // check data validity
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {

        const guest = await Guest.findOne({email});
        if (!guest) {
            return res.status(404).json({ message: 'Guest not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, guest.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // send response
        res.status(201).json({ 
            success: true,
            message: 'Guest Verified successfully',
            guest
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}