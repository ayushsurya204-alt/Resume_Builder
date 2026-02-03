import express from 'express';
import protect from '../middlewares/auth.js';
import { enhanceJobSummary, enhanceProfessionalSummary, uploadResume } from '../controllers/aiController.js';



const aiRouter = express.Router()

aiRouter.post('/enhance-pro-sum',protect,enhanceProfessionalSummary);
aiRouter.post('/enhance-job-desc',protect,enhanceJobSummary);
aiRouter.post('/upload-resume',protect,uploadResume);

export default aiRouter;

