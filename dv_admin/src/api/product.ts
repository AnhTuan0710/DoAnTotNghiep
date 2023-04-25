import { ProductCreateDto } from "../dataType/product";
import client from "./apiConfig";

export default {
  async getAllProduct(page: number, size: number) {
    const url = `/products?page=${page}&size=${size}`;
    return await client.get(url)
  },
  async createNewProduct(product: ProductCreateDto) {
    const url = `/products`;
    return await client.post(url, product)
  },
  async deleteProduct(id: number) {
    const url = `/products/${id}`;
    return await client.delete(url)
  }
}