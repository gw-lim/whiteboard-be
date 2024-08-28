import { prisma } from '../app.js';
import { assert } from 'superstruct';
import { CreateUser } from '../structs/user.js';

export const postSignup = async (req, res, next) => {
  try {
    assert(req.body, CreateUser);
    const user = await prisma.user.create({ data: req.body });
    res.status(201).send(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
