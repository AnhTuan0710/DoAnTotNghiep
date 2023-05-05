export class CreateOrderDto {
  orderNumber: string;
  totalAmount: number;
  userId: number;
  productIds: ProductOrderDto[];
}

export class UpdateOrderDto {
  orderNumber?: string;
  totalAmount?: number;
  userId?: number;
  productIds?: ProductOrderDto[];
  status?: number;
}

export class OrderCreateNewDto {
  userId: number;
  product: ProductOrderDto[];
  totalAmount: number;
  createDate?: string;
  updateDate?: string;
}

export class ProductOrderDto {
  id: number;
  quantity: number;
}
