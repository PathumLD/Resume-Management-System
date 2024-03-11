import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import dbConnection from './config/dbConfig.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/mainRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//dbConnection
dbConnection();

//Middlewares
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };
  
app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use(mainRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


