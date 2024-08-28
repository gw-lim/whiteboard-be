import { Router } from 'express';
import { createUser, signInUser } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/signup', createUser);
authRouter.post('/signin', signInUser);

export default authRouter;
