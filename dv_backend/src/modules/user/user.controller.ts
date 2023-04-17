import { UsersService } from './user.service';
import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getProfile(@Query('id') id: number) {
    return this.userService.getUserInfo(id)
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }
}