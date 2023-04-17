import { Category } from './../../models/category.entity';
import { Product } from './../../models/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from '../../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  async createProduct(productDto: ProductDto): Promise<Product> {
    const { name, price, image, size, weight, description, categoryId } = productDto;
    const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
    const product = new Product();
    product.name = name;
    product.price = price;
    product.image = image;
    product.size = size;
    product.weight = weight;
    product.description = description;
    product.category = category;

    return await this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({ relations: ['category'] });
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne({
      where: {
        id: id,
      },
      relations: ['category']
    });
  }

  async updateProduct(id: number, productDto: ProductDto): Promise<Product> {
    const { name, price, image, size, weight, description, categoryId } = productDto;
    const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
    const product = await this.productRepository.findOne({ where: { id: id } });
    product.name = name;
    product.price = price;
    product.image = image;
    product.size = size;
    product.weight = weight;
    product.description = description;
    product.category = category;

    return await this.productRepository.save(product);
  }

  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async getAllProductOfCategory(id: number): Promise<Product[]> {
    const listproduct = await this.productRepository.find();
    return listproduct.filter(item => item.category.id === id)
  }
}