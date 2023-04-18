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
  ) { }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    order.orderNumber = createOrderDto.orderNumber;
    order.totalAmount = createOrderDto.totalAmount;

    const user = await this.userRepository.findOne({ where: { id: createOrderDto.userId } });
    order.user = user;

    const products = await this.productRepository.findByIds(createOrderDto.productIds);
    order.products = products;

    return this.orderRepository.save(order);
  }

  async getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['user', 'products'] });
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
      const products = await this.productRepository.findByIds(updateOrderDto.productIds);
      order.products = products;
    }

    return this.orderRepository.save(order);
  }

  async deleteOrder(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
