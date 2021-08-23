import axios, { AxiosInstance } from "axios";
import { getToken } from "./auth";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8084",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.token = `${token}`;
  }
  return config;
});

export default api;
