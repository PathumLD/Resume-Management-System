import express from 'express';
import { cvUpload, imageUpload } from '../controller/fileController.js';
import { upload } from '../config/storageConfig.js';

const fileRouter = express.Router();

// Route for uploading CV
fileRouter.post('/upload-cv', upload.single('cv'), cvUpload);

// Route for uploading Image
fileRouter.post('/upload-image', upload.single('image'), imageUpload);

export default fileRouter;
