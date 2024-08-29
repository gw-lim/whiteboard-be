import { Router } from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';
import courseRouter from './course.js';
import postRouter from './post.js';

const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/user', userRouter);
indexRouter.use('/course', courseRouter);
indexRouter.use('/post', postRouter);

export default indexRouter;
