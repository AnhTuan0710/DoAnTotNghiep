import client from "./apiConfig";

export default {
  async getAllProduct(page: number, size: number) {
    const url = `/products?page=${page}&size=${size}`;
    return await client.get(url)
  },
}