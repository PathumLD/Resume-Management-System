import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({

    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    userType: { 
        type: String, 
        required: true,
    },
    clientStatus: { 
        type: String, 
        default: 'active' 
    }
});

const Client = mongoose.model('Client', clientSchema);
export default Client;
