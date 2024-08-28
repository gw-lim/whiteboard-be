import express from 'express';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';

import { errorHandler } from './errorHandler.js';

dotenv.config();
export const prisma = new PrismaClient();
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// route
app.use(indexRouter);

// error handler
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => console.log('Server Connected'));
