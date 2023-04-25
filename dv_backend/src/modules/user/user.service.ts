import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersService: Repository<User>
  ) { }

  async findOne(email: string): Promise<User | undefined> {
    return this.usersService.findOne({ where: { email: email } });
  }

  async regiter(user: User): Promise<User> {
    user.create_date = new Date()
    user.update_date = new Date()
    return await this.usersService.save(user)
  }

  async findAll(): Promise<User[] | undefined> {
    return await this.usersService.find()
  }

  async getUserInfo(id: number): Promise<User | undefined> {
    return this.usersService.findOne({ where: { id: id } });
  }

  async findById(id: number): Promise<User | undefined> {
    return this.usersService.findOne({ where: { id: id } });
  }
}