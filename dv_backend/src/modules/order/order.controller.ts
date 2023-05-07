import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '../../models/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../../dto/order.dto';
import { ApiTags } from '@nestjs/swagger';
import { MailService } from '../mail/mail.service';

@Controller('orders')
@ApiTags('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get('total-by-time')
  async getToByDay(
    @Query('time') time: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<{ time: string; total: number }[]> {
    if (time === 'day') {
      return await this.orderService.getTotalByDay(startDate,endDate);
    } else {
      return await this.orderService.getTotalByMonth(startDate,endDate);
    }
  }

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
