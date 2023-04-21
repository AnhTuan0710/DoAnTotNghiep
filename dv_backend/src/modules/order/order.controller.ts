import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '../../models/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../../dto/order.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return await this.orderService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: number): Promise<Order> {
    return await this.orderService.getOrderById(id);
  }

  @Post()
  async createOrder(@Body() order: CreateOrderDto): Promise<Order> {
    return await this.orderService.createOrder(order);
  }

  @Put(':id')
  async updateOrder(@Param('id') id: number, @Body() order: UpdateOrderDto): Promise<Order> {
    return await this.orderService.updateOrder(id, order);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: number): Promise<void> {
    return await this.orderService.deleteOrder(id);
  }

  @Get('user/:id')
  async getOrderByUser(@Param('id') id: number): Promise<Order[]> {
    return await this.orderService.findByUserId(id);
  }
}
