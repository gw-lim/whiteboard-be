import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import { getCourses, getUser } from '../controllers/user.js';

const userRouter = Router();

userRouter.get('/', verifyToken, getUser);
userRouter.get('/courses', verifyToken, getCourses);

export default userRouter;
