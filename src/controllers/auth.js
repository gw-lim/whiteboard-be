import { prisma } from '../app.js';
import { assert } from 'superstruct';
import { CreateUser } from '../structs/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../middlewares/token.js';

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
      res.status(404).json({ message: '존재하지 않는 아이디입니다.' });
      return;
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.status(400).json({ message: '비밀번호가 틀렸습니다.' });
      return;
    }

    const accessToken = generateToken(user.id);
    res.status(201).json({ accessToken });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const checkUsernameDuplicate = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      res.status(400).send({ message: '존재하는 아이디입니다.' });
      return;
    }
    res.status(200).send({ message: '사용 가능한 아이디입니다.' });
  } catch (e) {
    console.error(e);
    next(e);
  }
};
