import { prisma } from '../app.js';
import { assert } from 'superstruct';
import { CreateUser } from '../structs/user.js';
import bcrypt from 'bcrypt';

const SALT = 10;

export const createUser = async (req, res, next) => {
  try {
    assert(req.body, CreateUser);
    const hashedPassword = await bcrypt.hash(req.body.password, SALT);
    const user = await prisma.user.create({
      data: { ...req.body, password: hashedPassword },
    });
    res.status(201).send(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const signInUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: '존재히지 않는 닉네임입니다.' });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ message: '비밀번호가 틀렸습니다.' });
    }

    res.status(201).send(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
