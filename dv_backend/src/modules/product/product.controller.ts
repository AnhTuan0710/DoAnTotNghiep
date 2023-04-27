import { ProductSearchDto, ProductTrendingDto } from './../../dto/product.dto';
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../../models/product.entity';
import { ProductDto, ProductRespose } from '../../dto/product.dto';
import { ApiTags } from '@nestjs/swagger';

// @UseGuards(JwtAuthGuard)
@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Get('trending')
  async getTranding(): Promise<ProductTrendingDto[]> {
    return await this.productService.getBestSellingProducts();
  }

  @Post()
  async findAll(@Query('page') page: number, @Query('size') size: number, @Body() searchParam: ProductSearchDto): Promise<ProductRespose> {
    return await this.productService.findAll(page, size, searchParam);
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

  @Get('category/:id')
  async findAllWithCategory(@Param('id') id: number): Promise<Product[]> {
    return await this.productService.getAllProductOfCategory(id);
  }

}
