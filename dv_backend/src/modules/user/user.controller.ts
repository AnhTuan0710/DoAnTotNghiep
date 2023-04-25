import { UsersService } from './user.service';
import { Controller, UseGuards, Get, Query, Request} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UsersService) { }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  getProfile(@Query('id') id: number) {
    return this.userService.getUserInfo(id)
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }
  
  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  async getUserInfo(@Request() req) {
    return req.user;
  }
   
}