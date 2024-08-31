import { prisma } from '../app.js';
import { COURSE_RES, STUDENT_RES } from '../constants.js';

export const getCourses = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const courses = await prisma.course.findMany({
      skip: skip || undefined,
      take: Number(limit) || undefined,
      ...COURSE_RES,
    });
    res.send(courses);
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
      ...COURSE_RES,
    });
    res.json(course);
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

    await prisma.course.create({
      data: {
        name: req.body.name,
        professorId: id,
      },
    });
    res.sendStatus(201);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const registerCourse = async (req, res, next) => {
  try {
    const userId = res.locals.id;
    const { id: courseId } = req.body;

    const { role } = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (role === 'PROFESSOR') {
      res.status(403).json({ message: '학생만 수강신청을 할 수 있습니다.' });
      return;
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        registeredCourses: {
          connect: {
            id: courseId,
          },
        },
      },
    });
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const getStudents = async (req, res, next) => {
  try {
    const userId = res.locals.id;
    const { id: courseId } = req.params;

    const { role } = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (role !== 'PROFESSOR') {
      res.status(403).json({ message: '권한이 없는 계정입니다.' });
    }

    const { registeredUsers } = await prisma.course.findUniqueOrThrow({
      where: { id: courseId },
      select: {
        registeredUsers: STUDENT_RES,
      },
    });
    res.send(registeredUsers);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const removeStudent = async (req, res, next) => {
  try {
    const userId = res.locals.id;
    const { id: courseId } = req.params;
    const { id: studentId } = req.query;

    const { role } = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });
    if (role !== 'PROFESSOR') {
      res.status(403).json({ message: '권한이 없는 계정입니다.' });
    }

    await prisma.course.update({
      where: { id: courseId },
      data: {
        registeredUsers: {
          disconnect: {
            id: studentId,
          },
        },
      },
    });
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
