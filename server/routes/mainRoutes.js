import express from 'express';
import authRouter from './authRoutes.js';
import candidateRouter from './candidateRoute.js';
import companyRouter from './companyRoutes.js';
import jobsRouter from './jobsRoute.js';
import guestRouter from './guestRoutes.js';

const mainRouter = express.Router();

const path = "/v1/";

mainRouter.use(`${path}auth`,  authRouter)
mainRouter.use(`${path}candidate`,  candidateRouter)
mainRouter.use(`${path}company`,  companyRouter)
mainRouter.use(`${path}jobs`,  jobsRouter)
mainRouter.use(`${path}guest`,  guestRouter)

export default mainRouter;