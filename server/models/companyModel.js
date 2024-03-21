import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({

    client : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
      },
    identifier: {
        type: String,
        required: true,
        unique: true,
    },
    companyName: { 
        type: String, 
        required: true,
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
    userType: { type: String, 
        required: true, 
        default: 'company' 
    },
    contact: { 
        type: String 
    },
    address: { 
        type: String 
    },
    location: { 
        type: String 
    },
    description: { 
        type: String 
    },
    linkedin: { 
        type: String }
        ,
    website: { 
        type: String 
    },
    logo: { 
        type: String 
    },
    introVideo: { 
        type: String 
    },
    jobPosts: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Jobs' 
    }],
    companyStatus: { 
        type: String, 
        default: 'active' 
    },
    appliedCandidates: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Candidate' 
    }],
    eventPosts: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event' 
    }]

});

const Company = mongoose.model('Company', companySchema);
export default Company;