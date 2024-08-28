import express from 'express';
import * as dotenv from 'dotenv';
import indexRouter from './routes/index.js';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { errorHandler } from './errorHandler.js';

dotenv.config();
export const prisma = new PrismaClient();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route
app.use(indexRouter);

// error handler
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => console.log('Server Connected'));
