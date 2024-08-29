import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import { createPost, getPosts } from '../controllers/post.js';

const postRouter = Router();

postRouter.route('/:id').get(getPosts).post(verifyToken, createPost);

export default postRouter;
