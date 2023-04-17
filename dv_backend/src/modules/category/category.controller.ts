import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Category } from '../../models/category.entity';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get('product')
  findAllWithProducts(): Promise<Category[]> {
    return this.categoryService.findAllWithProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(+id);
  }

  @Post()
  create(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() category: Category): Promise<Category> {
    return this.categoryService.update(+id, category);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.categoryService.delete(+id);
  }
}
