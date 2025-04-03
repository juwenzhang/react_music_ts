import {
  requestQueue,
  type requestQueueInstanceType,
} from '@/servies/config/requestQueue';

const requestPLimit: requestQueueInstanceType = new requestQueue();
console.log(requestPLimit);
