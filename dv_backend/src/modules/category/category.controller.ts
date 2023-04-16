import { CategoryService } from './category.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Category } from '../../models/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.categoryService.findOne(params.id);
  }

  @Get('products/:id')
  getProductOfCategory(@Param() params) {
    return this.categoryService.getProductOfCategory(params.id)
  }

  @Get('products')
  getCategoryCombineProduct() {
    return this.categoryService.getCategoryProduct()
  }

  @Post()
  createCategoryNew(@Body() body: Category) {
    return this.categoryService.createNewCategory(body)
  }

  @Put(":id")
  updateCategory(@Param() params, @Body() category: Category) {
    return this.categoryService.updateCategory(params.id, category)
  }

  @Delete(':id')
  deleteCategory(@Param() params) {
    return this.categoryService.deleteCategory(params.id);
  }
}
