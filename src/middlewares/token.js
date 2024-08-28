import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRE_TIME = '3h';

export const generateToken = (id) => {
  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: EXPIRE_TIME,
  });
  return token;
};

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      res.status(400).json({
        message: '로그인이 필요한 기능입니다.',
      });
      return;
    }

    jwt.verify(token, JWT_SECRET, handleVerifyToken(res, next));
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const handleVerifyToken = (res, next) => (err, decoded) => {
  if (!err) {
    res.locals.id = decoded.id;
    next();
    return;
  }

  if (err.name === 'TokenExpiredError') {
    res.status(401).json({
      message: '토큰이 만료되었습니다.',
    });
    return;
  }

  res.status(400).json({
    message: '유효하지 않은 토큰입니다.',
  });
};
