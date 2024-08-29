import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import {
  createCourse,
  getCourse,
  getCourses,
  getStudents,
  registerCourse,
  removeStudent,
} from '../controllers/course.js';

const courseRouter = Router();

courseRouter.route('/').get(getCourses).post(verifyToken, createCourse);
courseRouter.get('/:id', getCourse);
courseRouter
  .route('/:id/students')
  .get(verifyToken, getStudents)
  .delete(verifyToken, removeStudent);
courseRouter.post('/register', verifyToken, registerCourse);

export default courseRouter;
