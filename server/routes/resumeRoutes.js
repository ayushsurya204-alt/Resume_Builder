import express from 'express';
import protect from '../middlewares/auth.js';
import { createResume, deleteResume, getPublicResumeById, getResumeById, updateResume } from '../controllers/resumeController.js';
import upload from '../config/multer.js';

const resumeRouter = express.Router();

resumeRouter.post('/create',protect,createResume);
resumeRouter.delete('/delete/:resumeId',protect,deleteResume);
resumeRouter.put("/update",protect,upload.single("image"),updateResume);
resumeRouter.get('/get/:resumeId',protect,getResumeById);
resumeRouter.get('/public/:resumeId',getPublicResumeById);

export default resumeRouter;
