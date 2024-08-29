import { prisma } from '../app.js';

export const getCourses = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const courses = await prisma.course.findMany({
      skip: skip || undefined,
      take: Number(limit) || undefined,
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        professor: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    res.json({ courses });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const createCourse = async (req, res, next) => {
  try {
    const id = res.locals.id;
    const { role } = await prisma.user.findUniqueOrThrow({
      where: { id },
    });
    if (role === 'STUDENT') {
      res.status(403).json({ message: '권한이 없는 계정입니다.' });
      return;
    }

    const course = await prisma.course.create({
      data: {
        name: req.body.name,
        professorId: id,
      },
    });
    res.json({ course });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
