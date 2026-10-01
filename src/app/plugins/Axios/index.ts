import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

// Интерцептор ниже возвращает response.data, поэтому методы возвращают T, а не AxiosResponse<T>
export interface ApiClient {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
  put<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
  patch<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
}

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => Promise.reject(error),
);

export const api = instance as unknown as ApiClient;
