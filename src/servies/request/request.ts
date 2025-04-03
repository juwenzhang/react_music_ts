import MyAxiosRequest from '@/servies/config/requestConstructor';

let BASE_URL: string = '';
// 开始区分开发环境或者说生产换行
if (process.env.NODE_ENV === 'development') {
  BASE_URL = process.env.DEV_API_ADDR;
} else {
  BASE_URL = process.env.PROD_API_ADDR;
}
const TIME_OUT: number = 3000;
const CONFIG = {
  baseUrl: BASE_URL,
  timeout: TIME_OUT,
};
const axiosInstance = new MyAxiosRequest({
  ...CONFIG,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
    requestFailFn: (err) => {
      return err;
    },
    responseSuccessFn: (res) => {
      return res;
    },
    responseFailFn: (err) => {
      return err;
    },
  },
});
export default axiosInstance;
