import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.PORT || 3000, () => console.log('Server Connected'));
