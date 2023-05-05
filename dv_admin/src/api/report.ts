import client from "./apiConfig";

export default {
  async getReportRevenue(time: string) {
    const url = `/orders/total-by-time?time=${time}`;
    const response = await client.get(url);
    return response;
  },
  async getProductTrending() {
    const url = `/products/trending`;
    const response = await client.get(url);
    return response;
  }
}