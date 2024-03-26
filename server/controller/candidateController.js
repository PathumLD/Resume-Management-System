import Candidate from '../models/candidateModel.js';
import Client from '../models/clientModel.js';
import mongoose from 'mongoose';
import Jobs from '../models/jobsModel.js';



export const createCandidate = async (req, res) => {
    try {

        const { bio, contact, address, linkedin, github, website, jobTitle, jobType,timePeriod, workplace, degree, university, skills, projectName, technologies, projectDetails } = req.body;

        // Fetch the client to get the email and password
        const clientId = req.client.id
        
        const client = await Client.findById(clientId);
        console.log("clientId : ", clientId)
        if (!client) {
            return res.status(404).json({ 
                message: 'Client not found' 
            });
        }

        const candidate = new Candidate({
            client : clientId,
            candidateName: client.name,
            email: client.email,
            password: client.password,
            bio,
            contact,
            address,
            linkedin,
            github,
            website,
            jobTitle,
            jobType,
            timePeriod,
            workplace,
            degree,
            university,
            skills,
            projectName,
            technologies,
            projectDetails
        });

        await candidate.save();
        res.status(201).json({
            success: true, 
            message: 'Candidate created successfully',
            candidate, 
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }
};


// Update Candidate
export const updateCandidate = async (req, res) => {
    try {
        const { bio, contact, address, linkedin, github, website, jobTitle, jobType,timePeriod, workplace, degree, university, skills, projectName, technologies, projectDetails } = req.body;

        const clientId = req.client.id
        
        const client = await Client.findById(clientId);
        console.log("clientId : ", clientId)
        if (!client) {
            return res.status(404).json({ 
                message: 'Client not found' 
            });
        }

        //check if candidate exist
        // const candidateId = req.params.id;
        // console.log("Candidate Id :",candidateId)
        const candidate = await Candidate.findOne({ client: clientId });
        if (!candidate) {
            return res.status(404).json({
                message: 'Candidate not found'
            })
        }

        //Verify that the candidate ID from the URL matches the candidate ID in the JWT token
        if (clientId !== String(candidate.client)) {
            return res.status(403).json({ 
                message: 'Forbidden: You do not have permission to update this candidate' 
            });
          }

          //Update the candidate

          const updateCandidate = await Candidate.findOneAndUpdate(
            {  client: clientId }, //_id: candidateId,
            {
              bio,
              contact,
              address,
              linkedin,
              github,
              website,
              jobTitle,
              jobType,
              timePeriod,
              workplace,
              degree,
              university,
              skills,
              projectName,
              technologies,
              projectDetails

            },
            { new: true }
          );

          res.status(200).json({
            success: true,
            message: 'Candidate updated successfully',
            updateCandidate,
          })

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }
};


// Get All Candidate
export const getAllCandidate = async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.status(200).json(candidates);

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }
};


// Get Candidate by ID
export const getCandidateById = async (req, res) => {
    try {
        const clientId = req.client.id;

        const candidate = await Candidate.findOne({ client: clientId }).populate('appliedJobs'); // Populate appliedJobs field

        if (!candidate) {
            return res.status(404).json({
                message: 'Candidate not found'
            });
        }

        // Extract job details from appliedJobs
        const appliedJobsDetails = await Jobs.find({ _id: { $in: candidate.appliedJobs } });

        res.status(200).json({
            success: true,
            message: 'Candidate found successfully',
            candidate,
            appliedJobsDetails
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error' 
        });
    }
};


// Delete Candidate
export const deleteCandidate = async (req, res) => {

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

        //check if candidate exist
        // const candidateId = req.params.id;
        // console.log("Candidate Id :",candidateId)
        const candidate = await Candidate.findOne({ client: clientId });
        if (!candidate) {
            return res.status(404).json({
                message: 'Candidate not found'
            })
        }

        //Verify that the candidate ID from the URL matches the candidate ID in the JWT token
        if (clientId !== String(candidate.client)) {
            return res.status(403).json({ message: 'Forbidden: You do not have permission to delete this candidate' });
        }

        //Delete the candidate
        candidate.candidateStatus = "active";

        await candidate.save();

        res.status(200).json({
            success: true,
            message: 'Candidate deleted successfully',
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
        message: 'Server error' 
        });
    }

};


//Get Jobs by appliedCandidates
// export const getCandidateById = async (req, res) => {
//     try {
//         const clientId = req.client.id;

//         const candidate = await Candidate.findOne({ client: clientId }).populate('appliedJobs'); // Populate appliedJobs field

//         if (!candidate) {
//             return res.status(404).json({
//                 message: 'Candidate not found'
//             });
//         }

//         // Extract job details from appliedJobs
//         const appliedJobsDetails = await Job.find({ _id: { $in: candidate.appliedJobs } });

//         res.status(200).json({
//             success: true,
//             message: 'Candidate found successfully',
//             candidate,
//             appliedJobsDetails
//         });
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ 
//             message: 'Server error' 
//         });
//     }
// };