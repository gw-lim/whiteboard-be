import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import { getCourses } from '../controllers/course.js';

const courseRouter = Router();

courseRouter.get('/', getCourses);

export default courseRouter;
