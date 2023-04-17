import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from '../../constants/auth';
const jwt = require('jsonwebtoken');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: { email: string, password: string }) {
    const dbUser = await this.usersService.findOne(user.email);
    if (dbUser && await bcrypt.compare(user.password, dbUser.password)) {
      const payload = { email: dbUser.email, sub: dbUser.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async getUserFromToken(token) {
    try {
      const decodedToken = jwt.verify(token, jwtConstants.secret);
      const user = decodedToken.user;
      return user;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}