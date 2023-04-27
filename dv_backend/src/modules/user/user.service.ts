import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from '../../dto/user.dto';
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

  async updateInfoUser(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    const user = await this.usersService.findOne({ where: { id: id } })
    if (!user) {
      throw new HttpException('Không tìm thấy khách hàng', HttpStatus.NOT_FOUND);
    }
    if (updateUserDto.address) {
      user.address = updateUserDto.address
    }
    if (updateUserDto.name) {
      user.name = updateUserDto.name
    }
    if (updateUserDto.phone_no) {
      user.phone_no = updateUserDto.phone_no
    }
    user.update_date = new Date()

    return this.usersService.update(id, user)
  }
}