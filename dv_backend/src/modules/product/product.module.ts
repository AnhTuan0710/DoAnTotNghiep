import { CategoriesModule } from './../category/category.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../models/product.entity';
import { OrdersModule } from '../order/order.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), CategoriesModule, OrdersModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService, TypeOrmModule],
})
export class ProductsModule { }