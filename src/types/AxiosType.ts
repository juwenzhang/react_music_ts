import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

interface MyInterceptors<T> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig;
  requestFailFn?: (err: never) => never;
  responseSuccessFn?: (res: T) => T;
  responseFailFn?: (err: never) => never;
}

export interface MyAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: MyInterceptors<T>;
}
