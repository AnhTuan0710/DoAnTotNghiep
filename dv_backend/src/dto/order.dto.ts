export class CreateOrderDto {
  orderNumber: string;
  totalAmount: number;
  userId: number;
  productIds: number[];
}

export class UpdateOrderDto {
  orderNumber?: string;
  totalAmount?: number;
  userId?: number;
  productIds?: number[];
}
