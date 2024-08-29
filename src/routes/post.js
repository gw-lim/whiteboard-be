import { Router } from 'express';
import { verifyToken } from '../middlewares/token.js';
import { createPost, getPosts, removePost } from '../controllers/post.js';

const postRouter = Router();

postRouter
  .route('/:id')
  .get(getPosts)
  .post(verifyToken, createPost)
  .delete(verifyToken, removePost);

export default postRouter;
