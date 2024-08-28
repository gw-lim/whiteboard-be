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
