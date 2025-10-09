import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";
import { BASE_URL } from "./constant";

// 定义后端返回的通用结构（可根据你的后端接口结构修改）
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 自定义 axios 配置类型
export interface RequestConfig<T = any> extends AxiosRequestConfig {
  showError?: boolean; // 是否自动提示错误（可选扩展）
  skipAuth?: boolean; // 是否跳过 token 注入（可选扩展）
}

// 封装类
class Request {
  private instance: AxiosInstance;

  constructor(baseURL: string, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });

    this.setupInterceptors();
  }

  // 配置拦截器
  private setupInterceptors() {
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token && !(config as RequestConfig).skipAuth) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 响应拦截
    this.instance.interceptors.response.use(
      (response:any) => {
        const res = response.data;
        if (res.code !== 200) {
          // 处理业务错误
          console.error("接口错误:", res.message);
          return Promise.reject(res);
        }
        return res;
      },
      (error: AxiosError) => {
        if (error.response) {
          // 服务器返回错误码
          console.error(
            "HTTP错误:",
            error.response.status,
            error.response.statusText
          );
        } else if (error.request) {
          console.error("请求无响应:", error.message);
        } else {
          console.error("请求配置错误:", error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  // 常用请求封装
  public get<T = any>(url: string, params?: any, config?: RequestConfig) {
    return this.instance.get<T>(url, { params, ...config });
  }

  public post<T = any>(url: string, data?: any, config?: RequestConfig) {
    return this.instance.post<T>(url, data, config);
  }

  public put<T = any>(url: string, data?: any, config?: RequestConfig) {
    return this.instance.put<T>(url, data, config);
  }

  public delete<T = any>(url: string, params?: any, config?: RequestConfig) {
    return this.instance.delete<T>(url, { params, ...config });
  }
}

// 单例导出
const baseURL = BASE_URL;

const request = new Request(baseURL);

export default request;
