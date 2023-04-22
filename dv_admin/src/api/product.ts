import client  from "./apiConfig";

export default {
  async getAllProduct() {
    const url = `/products`;
    return await client.get(url)
  }
}