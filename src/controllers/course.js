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

export const getCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await prisma.course.findUniqueOrThrow({
      where: { id },
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
    res.json({ course });
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

export const registerCourse = async (req, res, next) => {
  try {
    const { id: courseId } = req.query;
    const userId = res.locals.id;

    const { role } = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (role === 'PROFESSOR') {
      res.status(403).json({ message: '학생만 수강신청을 할 수 있습니다.' });
      return;
    }

    const { registeredCourses } = await prisma.user.update({
      where: { id: userId },
      data: {
        registeredCourses: {
          connect: {
            id: courseId,
          },
        },
      },
      include: {
        registeredCourses: true,
      },
    });
    res.json({ registeredCourses });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
