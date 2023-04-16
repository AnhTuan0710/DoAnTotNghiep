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
    return await this.usersService.save(user)
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.usersService.findOne({ where: { email: email } });
  }

  async findAll(): Promise<User[] | undefined> {
    return await this.usersService.find()
  }

  async getAllInvoice(userId: number): Promise<User> {
    const user = await this.usersService.findOne({where: {id: userId}, relations: ['invoices']})
    return user
  }

}