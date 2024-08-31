import { prisma } from '../app.js';
import { POST_RES } from '../constants.js';

export const getPosts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await prisma.post.findMany({
      where: { courseId: id },
      ...POST_RES,
    });
    res.send(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const userId = res.locals.id;
    const { id: courseId } = req.params;

    const { role } = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (role !== 'PROFESSOR') {
      res.status(403).json({ message: '권한이 없는 계정입니다.' });
      return;
    }

    await prisma.post.create({
      data: {
        content: req.body.content,
        course: {
          connect: {
            id: courseId,
          },
        },
      },
    });
    res.sendStatus(201);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const removePost = async (req, res, next) => {
  try {
    const userId = res.locals.id;
    const { id: postId } = req.params;

    const { role } = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (role !== 'PROFESSOR') {
      res.status(403).json({ message: '권한이 없는 계정입니다.' });
      return;
    }

    await prisma.post.delete({
      where: {
        id: postId,
      },
    });
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
