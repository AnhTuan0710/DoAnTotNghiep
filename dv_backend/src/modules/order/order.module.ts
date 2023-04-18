import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../models/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { UsersModule } from '../user/user.module';
import { ProductsModule } from '../product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), UsersModule, ProductsModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService, TypeOrmModule],
})
export class OrdersModule { }