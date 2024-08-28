import { Router } from 'express';
import authRouter from './auth.js';

const indexRouter = Router();

indexRouter.use('/auth', authRouter);

export default indexRouter;
