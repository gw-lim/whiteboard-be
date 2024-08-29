import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import {
  createCourse,
  getCourses,
  registerCourse,
} from '../controllers/course.js';

const courseRouter = Router();

courseRouter.get('/', getCourses);
courseRouter.post('/', verifyToken, createCourse);
courseRouter.post('/register', verifyToken, registerCourse);

export default courseRouter;
