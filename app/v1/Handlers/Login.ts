import { IoCService } from 'axe-api';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Knex } from 'knex';

export default async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const Database = (await IoCService.use('Database')) as Knex;
  const user = await Database.table('users').where('email', email).first();

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    });
  }

  const isValid = bcrypt.compareSync(password, user.password);

  if (!isValid) {
    return res.status(404).json({
      error: 'Invalid Credentials'
    });
  }

  const token = jwt.sign({ userId: user.id }, `${process.env.JWT_SECRET}`, {
    expiresIn: process.env.JWT_EXPIRATION
  });
  return res.json({ token });
};
