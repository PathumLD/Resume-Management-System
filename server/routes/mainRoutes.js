import express from 'express';
import authRouter from './authRoutes.js';
import candidateRouter from './candidateRoute.js';
import companyRouter from './companyRoutes.js';

const mainRouter = express.Router();

const path = "/v1/";

mainRouter.use(`${path}auth`,  authRouter)
mainRouter.use(`${path}candidate`,  candidateRouter)
mainRouter.use(`${path}company`,  companyRouter)

export default mainRouter