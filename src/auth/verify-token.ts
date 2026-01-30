import * as jwt from 'jsonwebtoken';
import { UnauthorizedException } from '@nestjs/common';

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

export function verifyToken(token?: string) {
  if (!token) throw new UnauthorizedException('Token missing');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    throw new UnauthorizedException('Invalid token');
  }
}
