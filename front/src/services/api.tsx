import axios, { AxiosInstance } from "axios";
import { getToken } from "./auth";

const api: AxiosInstance = axios.create({
  baseURL: "descobre.ai",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
