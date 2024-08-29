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
