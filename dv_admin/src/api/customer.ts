import client from "./apiConfig";

export default {
  async getAllCustomer() {
    const url = `/users`;
    const response = await client.get(url);
    return response;
  }
}