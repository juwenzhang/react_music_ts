import axios, { AxiosHeaders } from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import type { MyAxiosRequestConfig } from '@/types/AxiosType';

class MyAxiosRequest {
  private instance: AxiosInstance;

  constructor(config: MyAxiosRequestConfig) {
    this.instance = axios.create(config);

    // todo 全局请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const headers: AxiosHeaders = new AxiosHeaders();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', localStorage.getItem('token') || '');
        headers.set('Accept', 'application/json');
        config.headers = headers;
        return config;
      },
      (err) => {
        return Promise.reject(err);
      },
    );

    // todo 全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        switch (err.response.status) {
          case 400:
            return Promise.reject({
              message: '400 Bad Request',
              status: 400,
              data: err.response.data,
            });
          case 401:
            return Promise.reject({
              message: '401 Unauthorized',
              status: 401,
              data: err.response.data,
            });
          case 403:
            return Promise.reject({
              message: '403 Forbidden',
              status: 403,
              data: err.response.data,
            });
          case 404:
            return Promise.reject({
              message: '404 Not Found',
              status: 404,
              data: err.response.data,
            });
          case 500:
            return Promise.reject({
              message: '500 Internal Server Error',
              status: 500,
              data: err.response.data,
            });
          case 502:
            return Promise.reject({
              message: '502 Bad Gateway',
              status: 502,
              data: err.response.data,
            });
          case 503:
            return Promise.reject({
              message: '503 Service Unavailable',
              status: 503,
              data: err.response.data,
            });
        }
      },
    );

    if (config?.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors?.requestSuccessFn,
        config.interceptors?.requestFailFn,
      );
      this.instance.interceptors.response.use(
        config.interceptors?.responseSuccessFn,
        config.interceptors?.responseFailFn,
      );
    }
  }

  // 请求方法
  request<T = never>(config: MyAxiosRequestConfig) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(
        config as InternalAxiosRequestConfig,
      ) as MyAxiosRequestConfig;
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res.data);
        })
        .catch((err) => {
          if (config.interceptors?.responseFailFn) {
            err = config.interceptors.responseFailFn(err as never);
          }
          reject(err);
        });
    });
  }

  get<T = never>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'get' });
  }

  post<T = never>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'post' });
  }

  put<T = never>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'put' });
  }

  delete<T = never>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'delete' });
  }

  options<T = never>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'options' });
  }

  patch<T = never>(config: MyAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'patch' });
  }
}

export default MyAxiosRequest;
