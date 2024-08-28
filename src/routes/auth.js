import { Router } from 'express';
import { postSignup } from '../controllers/auth.js';

const authRouter = Router();

authRouter.get('/signin', (req, res) => {
  res.send('HELLO');
});
authRouter.post('/signup', postSignup);

export default authRouter;
