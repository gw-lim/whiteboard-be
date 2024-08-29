import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import {
  createCourse,
  getCourse,
  getCourses,
  getStudents,
  registerCourse,
} from '../controllers/course.js';

const courseRouter = Router();

courseRouter.get('/', getCourses);
courseRouter.get('/:id', getCourse);
courseRouter.get('/:id/students', verifyToken, getStudents);
courseRouter.post('/', verifyToken, createCourse);
courseRouter.post('/register', verifyToken, registerCourse);

export default courseRouter;
