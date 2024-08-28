import express, { Router } from 'express';
import cors from 'cors';
import authRouter from './auth.js';

const indexRouter = Router();

indexRouter.use(cors());
indexRouter.use(express.json());

indexRouter.use('/auth', authRouter);

export default indexRouter;
