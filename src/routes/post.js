import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import { createPost } from '../controllers/post.js';

const postRouter = Router();

postRouter.post('/:id', verifyToken, createPost);

export default postRouter;
