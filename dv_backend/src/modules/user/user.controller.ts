import { UsersService } from './user.service';
import { Controller, Request, UseGuards, Get, Body, Post, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get("invoice/:id")
  getInvoiceOfUser(@Param() params) {
    return this.userService.getAllInvoice(params.id)
  }

}