import Express from "express";
import { authenticateClient } from "../middlewares/authMiddleware.js";
import { createCandidate, deleteCandidate, getAllCandidate, getCandidateById, updateCandidate } from "../controller/candidateController.js";


const candidateRouter = Express.Router();


// Create Candidate
candidateRouter.put('/create', authenticateClient, createCandidate);

// Update Candidate
candidateRouter.put('/update/:clientId', authenticateClient, updateCandidate);

//Get all candidates
candidateRouter.get('/getAll', getAllCandidate);

//Get candidate by ID
candidateRouter.get('/getById/:clientId',authenticateClient, getCandidateById);

//Delete candidate
candidateRouter.put('/delete/:clientId', authenticateClient, deleteCandidate);


export default candidateRouter;


