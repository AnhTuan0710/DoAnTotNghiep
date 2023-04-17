import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Product } from '../../models/product.entity';
import { ProductDto } from '../../dto/product.dto';

// @UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: ProductDto): Promise<Product> {
    return await this.productService.createProduct(createProductDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateProductDto: ProductDto): Promise<Product> {
    return await this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.productService.delete(id);
  }

  @Get('')
  async findAllWithCategory(@Body() category_id: number): Promise<Product[]> {
    return await this.productService.getAllProductOfCategory(category_id);
  }
}
