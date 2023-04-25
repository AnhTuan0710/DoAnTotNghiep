import axios, { AxiosRequestConfig } from "axios";
import { LoginParam, RegisterParam, UserParam } from "../dataType/user";
import client from "./apiConfig";

export default {
  async login(data: LoginParam) {
    const url = `/auth/login`;
    return await client.post(url, data)
  },
  async register(data: RegisterParam) {
    const url = `/auth/register`;
    return await client.post(url, data)
  },
  async getInforUser(token: string) {
    const url = `http://localhost:5685/users/profile`;
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    return await axios.get(url, config)
  }
}