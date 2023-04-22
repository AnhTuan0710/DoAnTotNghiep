import { OrderDetail } from './../../models/orderDetail';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "../../models/order.entity";
import { Repository } from "typeorm";
import { CreateOrderDto, UpdateOrderDto } from "../../dto/order.dto";
import { Product } from "../../models/product.entity";
import { User } from "../../models/user.entity";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
  ) { }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { userId, productIds } = createOrderDto;
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const order = await this.orderRepository.create({ user });
    order.totalAmount = createOrderDto.totalAmount,
      order.orderNumber = createOrderDto.orderNumber,
      order.create_date = new Date()
    order.update_date = new Date()
    await this.orderRepository.save(order);
    const orderDetails: OrderDetail[] = [];
    for (const product of productIds) {
      const { id, quantity } = product;
      const orderDetail = await this.orderDetailRepository.create({
        orderId: order.id,
        productId: id,
        quantity,
      });
      await this.orderDetailRepository.save(orderDetail);
      orderDetails.push(orderDetail);
    }
    order.orderDetails = orderDetails;
    const ids = createOrderDto.productIds.map(item => { return item.id })
    const products = await this.productRepository.findByIds(ids);
    order.products = products;
    await this.orderRepository.save(order);
    return order;
  }

  async getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find({ where: { active_flg: 1 }, relations: ['user', 'products', 'orderDetails'] });
  }

  async getOrderById(id: number): Promise<Order> {
    return this.orderRepository.findOne({ where: { id: id }, relations: ['user', 'products'] });
  }

  async updateOrder(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id: id } });

    if (updateOrderDto.orderNumber) {
      order.orderNumber = updateOrderDto.orderNumber;
    }

    if (updateOrderDto.totalAmount) {
      order.totalAmount = updateOrderDto.totalAmount;
    }

    if (updateOrderDto.userId) {
      const user = await this.userRepository.findOne({ where: { id: updateOrderDto.userId } });
      order.user = user;
    }

    if (updateOrderDto.productIds) {
      const productUpdate = updateOrderDto.productIds
      const listOrderDetail = await this.orderDetailRepository.find({ where: { orderId: id } })
      listOrderDetail.forEach(async (item: OrderDetail) => {
        await this.orderDetailRepository.delete(item.id)
      })
      for (const product of productUpdate) {
        const { id, quantity } = product;
        const orderDetail = await this.orderDetailRepository.create({
          orderId: order.id,
          productId: id,
          quantity,
        });
        await this.orderDetailRepository.save(orderDetail);
      }
      const ids = updateOrderDto.productIds.map(item => { return item.id })
      const products = await this.productRepository.findByIds(ids);
      order.products = products;
    }

    if (updateOrderDto.status) {
      order.status = updateOrderDto.status;
    }

    order.update_date = new Date()
    return this.orderRepository.save(order);
  }

  async deleteOrder(id: number): Promise<void> {
    const order = await this.orderRepository.findOne({ where: { id: id } })
    order.active_flg = 0
    await this.orderRepository.update(id, order);
  }

  async findByUserId(userId: number): Promise<Order[]> {
    const user = await this.userRepository.findOne({ where: { id: userId, active_flg: 1 } });
    return this.orderRepository.find({ where: { user: user }, relations: ['user', 'products', 'orderDetails'] });
  }
}
