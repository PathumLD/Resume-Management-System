import express from 'express';
import { clientLogin, clientLogout, clientRegister, updateClient } from '../controller/authController.js';
import { authenticateClient } from '../middlewares/authMiddleware.js';

const authRouter = express.Router();

//Client Register
authRouter.post('/register', clientRegister);

//Client Login
authRouter.post('/login', clientLogin);

//Client Update
authRouter.put('/update/:id',authenticateClient, updateClient);

//Client Logout
authRouter.post('/logout', authenticateClient, clientLogout);

export default authRouter;