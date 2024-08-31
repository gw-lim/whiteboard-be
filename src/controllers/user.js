import { prisma } from '../app.js';
import { COURSE_RES, POST_RES } from '../constants.js';

export const getUser = async (req, res, next) => {
  try {
    const id = res.locals.id;
    const { name, role, studentId } = await prisma.user.findUniqueOrThrow({
      where: { id },
    });

    if (role === 'PROFESSOR') {
      res.json({ id, role, name });
    } else {
      res.json({ id, role, name, studentId });
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
        select: {
          role: true,
          createdCourses: COURSE_RES,
          registeredCourses: COURSE_RES,
        },
      });

    if (role === 'PROFESSOR') {
      res.send(createdCourses);
    } else {
      res.send(registeredCourses);
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const id = res.locals.id;

    const { role, createdCourses, registeredCourses } =
      await prisma.user.findUniqueOrThrow({
        where: { id },
        select: {
          role: true,
          createdCourses: {
            select: {
              posts: POST_RES,
            },
          },
          registeredCourses: {
            select: {
              posts: POST_RES,
            },
          },
        },
      });

    const posts = (role === 'PROFESSOR' ? createdCourses : registeredCourses)
      .map((courses) => {
        return courses.posts;
      })
      .flat()
      .sort((a, b) => b.createdAt - a.createdAt);

    res.send(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
