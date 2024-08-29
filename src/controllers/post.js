import { prisma } from '../app.js';

export const createPost = async (req, res, send) => {
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

    const course = await prisma.post.create({
      data: {
        content: req.body.content,
        course: {
          connect: {
            id: courseId,
          },
        },
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.json(course);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
