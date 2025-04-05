import axiosInstance from '@/servies/request/request';

const getRecommendBannersRequest = () => {
  return axiosInstance.get({
    url: '/recommend/banner',
  });
};

export { getRecommendBannersRequest };
