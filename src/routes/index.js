import { Router } from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';

const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/user', userRouter);

export default indexRouter;
