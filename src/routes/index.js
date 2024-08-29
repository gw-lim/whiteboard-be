import { Router } from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';
import courseRouter from './course.js';

const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/user', userRouter);
indexRouter.use('/course', courseRouter);

export default indexRouter;
