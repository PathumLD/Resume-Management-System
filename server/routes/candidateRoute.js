import Express from "express";
import { authenticateClient } from "../middlewares/authMiddleware.js";
import { cancelApplication, createCandidate, deleteCandidate, getAllCandidate, getCandidateById, getCandidateByViewId, updateCandidate } from "../controller/candidateController.js";


const candidateRouter = Express.Router();


// Create Candidate
candidateRouter.put('/create', authenticateClient, createCandidate);

// Update Candidate
candidateRouter.put('/update/:clientId', authenticateClient, updateCandidate);

//Get all candidates
candidateRouter.get('/getAll', getAllCandidate);

//Get candidate by ID
candidateRouter.get('/getById/:clientId',authenticateClient, getCandidateById);

//Get Candidate by viewId
candidateRouter.get('/getByViewId/:candidateId', getCandidateByViewId);

//Delete candidate
candidateRouter.put('/delete/:clientId', authenticateClient, deleteCandidate);

//Cancel Application
candidateRouter.put('/cancelApplication/:clientId', authenticateClient, cancelApplication);


export default candidateRouter;


