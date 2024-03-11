import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected `);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnection;