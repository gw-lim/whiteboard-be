import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import { getUser } from '../controllers/user.js';

const userRouter = Router();

userRouter.get('/', verifyToken, getUser);

export default userRouter;
