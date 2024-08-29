import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import { createCourse, getCourses } from '../controllers/course.js';

const courseRouter = Router();

courseRouter.get('/', getCourses);
courseRouter.post('/', verifyToken, createCourse);

export default courseRouter;
