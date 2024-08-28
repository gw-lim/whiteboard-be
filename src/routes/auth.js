import { Router } from 'express';
import {
  checkUsernameDuplicate,
  createUser,
  signInUser,
} from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/signup', createUser);
authRouter.post('/signin', signInUser);
authRouter.post('/username', checkUsernameDuplicate);

export default authRouter;
