import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from '../../models/product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }

  @Post()
  createNewProduct(@Body() body: Product) {
    return this.productService.createProduct(body)
  }

  @Put(":id")
  updateProduct(@Param() params, @Body() product: Product) {
    return this.productService.updateProduct(params.id, product)
  }

  @Delete(':id')
  deleteProduct(@Param() params) {
    return this.productService.deleteProduct(params.id);
  }
}
