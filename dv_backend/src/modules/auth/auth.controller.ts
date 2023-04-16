import { Controller, Request, Post, UseGuards, Body, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterDto } from '../../dto/register.dto';
import { MailService } from '../mail/mail.service';
import { UsersService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private mailService: MailService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req);
  }

  @Post('register')
  async register(@Body() signUpDto: RegisterDto) {
    this.logger.log(`Start signup user with data ${JSON.stringify(signUpDto)}`);
    const { email, password, name } = signUpDto;
    const oldEmail = await this.userService.findUserByEmail(email);
    if (oldEmail) {
      this.logger.warn(`Email is already used ${signUpDto.email}`);
      throw new HttpException('Email is already used', HttpStatus.BAD_REQUEST);
    }
    try {
      await this.mailService.sendCreateUserEmail(name, email, password);
      this.logger.log(`Send create user mail to email ${signUpDto.email}`);
    } catch (error) {
      this.logger.error('sendEmail error: ', error);
      return
    }
    await this.userService.regiter(signUpDto);
    this.logger.log(`Signup new user with data ${JSON.stringify(signUpDto)}`);
    return {
      status: HttpStatus.OK,
      message: 'Sign up successfully',
    };
  }
}