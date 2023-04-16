import { HttpException, Injectable, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Category } from '../../models/category.entity';

@Injectable()
export class CategoryService {
  private readonly logger = new Logger(CategoryService.name);
  constructor(
    @InjectRepository(Category)
    private readonly category: Repository<Category>
  ) { }

  async findAll(): Promise<Category[]> {
    return await this.category.find();
  }

  async findOne(id: number): Promise<Category> {
    return await this.category.findOne({ where: { id: id } })
  }

  async getCategoryProduct(): Promise<Category[]> {
    return await this.category.find();
  }

  async getProductOfCategory(categoryId: number): Promise<Category> {
    const category: Category = await this.category.findOne({ where: { id: categoryId }, relations: ['products'] });
    return category
  }

  async createNewCategory(category: Category): Promise<Category> {
    const categoryExists = await this.category.findOne({ where: { name: category.name } })
    if (categoryExists) {
      throw new HttpException('Tên danh mục đã tồn tại', HttpStatus.BAD_REQUEST);
    } else {
      return await this.category.save(category)
    }
  }

  async updateCategory(id: number, category: Category): Promise<UpdateResult> {
    const categoryFind = await this.category.findOne({ where: { id: id } })
    if (categoryFind) {
      return this.category.update(id, category)
    } else {
      throw new HttpException('Không tìm thấy mã danh mục', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteCategory(id): Promise<DeleteResult> {
    const categoryFind = await this.category.findOne({ where: { id: id } })
    if (categoryFind) {
      return await this.category.delete(id);
    } else {
      throw new HttpException('Không tìm thấy mã danh mục', HttpStatus.BAD_REQUEST);
    }
  }
}
