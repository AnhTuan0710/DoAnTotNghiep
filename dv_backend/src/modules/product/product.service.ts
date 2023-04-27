import { Category } from './../../models/category.entity';
import { Product } from './../../models/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto, ProductRespose } from '../../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  async createProduct(productDto: ProductDto): Promise<Product> {
    const { name, price, image, size, weight, description, categoryId, unit } = productDto;
    const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
    const product = new Product();
    product.name = name;
    product.price = price;
    product.image = image;
    product.size = size;
    product.weight = weight;
    product.unit = unit;
    product.description = description;
    product.category = category;

    return await this.productRepository.save(product);
  }

  async findAll(page: number, size: number): Promise<ProductRespose> {
    const queryBuilder = this.productRepository.createQueryBuilder('dv_product')
      .leftJoinAndSelect('dv_product.category', 'dv_category')
      .where('dv_product.active_flg != 0')
      .skip((page - 1) * size)
      .take(size);
    const data: ProductRespose = {
      data: (await queryBuilder.getMany()),
      total: (await this.productRepository.find({where: {active_flg: 1}})).length
    }
    return data;
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
    const { name, price, image, size, weight, description, categoryId, status } = productDto;
    const category = await this.categoryRepository.findOne({ where: { id: categoryId } });
    const product = await this.productRepository.findOne({ where: { id: id } });
    product.name = name;
    product.price = price;
    product.image = image;
    product.size = size;
    product.weight = weight;
    product.description = description;
    product.category = category;
    product.status = status;
    return await this.productRepository.save(product);
  }

  async delete(id: number): Promise<void> {
    const product = await this.productRepository.findOne({ where: { id: id } })
    product.active_flg = 0
    await this.productRepository.update(id, product);
  }

  async getAllProductOfCategory(id: number): Promise<Product[]> {
    const listproduct = await this.productRepository.find({ relations: ['category'] });
    return listproduct.filter(item => item.category.id === id)
  }
}