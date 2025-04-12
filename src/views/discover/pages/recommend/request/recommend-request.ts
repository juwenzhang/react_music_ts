import axiosInstance from '@/servies/request/request';

const getRecommendBannersRequest = () => {
  return axiosInstance.get({
    url: '/recommend/banner',
  });
};

const getRecommendHotRequest = (limit: number = 30) => {
  return axiosInstance.get({
    url: '/recommend/hots',
    params: {
      // query params
      limit,
    },
  });
};

export { getRecommendBannersRequest, getRecommendHotRequest };
