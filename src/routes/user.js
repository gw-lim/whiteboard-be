import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import { getCourses, getPosts, getUser } from '../controllers/user.js';

const userRouter = Router();

userRouter.get('/', verifyToken, getUser);
userRouter.get('/courses', verifyToken, getCourses);
userRouter.get('/posts', verifyToken, getPosts);

export default userRouter;
