import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Product } from '../../models/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productService: Repository<Product>
  ) { }

  async findAll(): Promise<Product[]> {
    return await this.productService.find();
  }

  async createProduct(product: Product): Promise<Product> {
    const productExits = await this.productService.findOne({ where: { name: product.name } })
    if (productExits) {
      throw new HttpException('Tên sản phẩm đã tồn tại', HttpStatus.BAD_REQUEST);
    } else {
      return await this.productService.save(product)
    }
  }

  async updateProduct(id: number, product: Product): Promise<UpdateResult> {
    const productFind = await this.productService.findOne({ where: { id: id } })
    if (productFind) {
      return await this.productService.update(id, product)
    } else {
      throw new HttpException('Không tìm thấy mã sản phẩm', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteProduct(id): Promise<DeleteResult> {
    const productFind = await this.productService.findOne({ where: { id: id } })
    if (productFind) {
      return await this.productService.delete(id)
    } else {
      throw new HttpException('Không tìm thấy mã sản phẩm', HttpStatus.BAD_REQUEST);
    }
  }
}
