import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../models/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({ where: { id: id } });
  }

  async create(category: Category): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  async update(id: number, category: Category): Promise<Category> {
    await this.categoryRepository.update(id, category);
    return this.categoryRepository.findOne({ where: { id: id } });
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async findAllWithProducts(): Promise<Category[]> {
    const queryBuilder = this.categoryRepository.createQueryBuilder('category')
      .leftJoinAndSelect('category.products', 'product')
    const categories = await queryBuilder.getMany();
    return categories;
  }
}
