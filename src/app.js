import express from 'express';
import * as dotenv from 'dotenv';
import indexRouter from './routes/index.js';
import { PrismaClient } from '@prisma/client';

dotenv.config();

export const prisma = new PrismaClient();
const app = express();

app.use(indexRouter);
app.listen(process.env.PORT || 3000, () => console.log('Server Connected'));
