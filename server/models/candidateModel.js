import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({

  client : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  candidateName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  userType: {
    type: String,
    default: 'candidate',
  },
  contact: {
    type: String,
  },
  address: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String,
  },
  website: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  jobType: {
    type: String,
  },
  timePeriod: {
    type: String,
  },
  workplace: [{
    type: String,
  }],
  degree: [{
    type: String,
  }],
  university: [{
    type: String,
  }],
  skills: [{
    type: String,
  }],
  projectName : {
    type: String,
  },
  technologies : {
    type: String,
  },
  projectDetails : {
    type: String,
  },
  profileImage: {
    type: String, // You can store the image URL or use another approach based on your requirements.
  },
  cv: [{
    type: String, // You can store the CV file URL or use another approach based on your requirements.
  }],
  candidateStatus: {
    type: String, // You might want to use enum for specific values like 'active', 'inactive', etc.
    default: 'active',
  },
  appliedJobs: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Job', // Assuming you have a Job model for job details.
  }],
  registeredEvents: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Event', // Assuming you have an Event model for event details.
  }],
  
});

const Candidate = mongoose.model('Candidate', candidateSchema);

export default Candidate;
