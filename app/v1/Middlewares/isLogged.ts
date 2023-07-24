import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(
      authorization.replace('Bearer ', ''),
      `${process.env.JWT_SECRET}`
    );
    req.auth = decoded;
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};
