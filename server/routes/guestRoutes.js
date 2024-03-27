import express from 'express';
import {  guestLogin, guestRegister } from '../controller/guestController.js';

const guestRouter = express.Router();

//Visitor Register
guestRouter.post('/register-guest', guestRegister);

//Visitor Login
guestRouter.post('/login-guest', guestLogin);



export default guestRouter