import { Product } from "../models/product.entity";

export class ProductDto {
  name: string;
  price: number;
  image?: string;
  size?: string;
  weight?: string;
  description?: string;
  categoryId: number;
  unit?: string;
}

export interface ProductRespose {
  data: Product[],
  total: number
}