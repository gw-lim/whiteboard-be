import { prisma } from '../app.js';

export const getUser = async (req, res, next) => {
  try {
    const id = res.locals.id;
    const { name, role, studentId } = await prisma.user.findUniqueOrThrow({
      where: { id },
    });

    if (role === 'PROFESSOR') {
      res.json({ name });
    } else {
      res.json({ name, studentId });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const getCourses = async (req, res, next) => {
  try {
    const id = res.locals.id;
    const { role, createdCourses, registeredCourses } =
      await prisma.user.findUniqueOrThrow({
        where: { id },
        include: {
          createdCourses: {
            select: {
              id: true,
              name: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          registeredCourses: {
            select: {
              id: true,
              name: true,
              createdAt: true,
              updatedAt: true,
              professor: { select: { id: true, name: true } },
            },
          },
        },
      });

    if (role === 'PROFESSOR') {
      res.json({ createdCourses });
    } else {
      res.json({ registeredCourses });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};
