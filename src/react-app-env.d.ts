/// <reference types="react-scripts" />
// todo: something about type declaration
// todo: it is aim to declare some global type, let our develop more easily
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
    readonly DEV_API_ADDR: string;
    readonly PROD_API_ADDR: string;
  }
}
