import React, { Fragment, memo, useEffect, useState } from 'react';
import { type BannerDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerBanners';
import { BANNER_IMAGE_ARRAY } from '@/constants/banner';
import RecommendBanners from '@/views/discover/pages/recommend/components/recommend-banners/recommend-banners';
import { localCache } from '@/utils';
import { useAppDispatch } from '@/hooks';
import { fetchRecommendBanners } from '@/views/discover/pages/recommend/store/recommend-store';

const recommendPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [bannerList, setBannerList] = useState<BannerDataTemplateType[]>(
    localCache.getCache(BANNER_IMAGE_ARRAY) || [],
  );
  // todo 初始化数据
  useEffect(() => {
    dispatch(fetchRecommendBanners())
      .then((res) => {
        if (res) {
          setBannerList(res.payload);
        }
      })
      .catch(() => {
        console.log('请求Banners数据失败');
      });
  }, [dispatch]);

  return (
    <Fragment>
      <div>
        <RecommendBanners banners={bannerList} />
      </div>
    </Fragment>
  );
};

export default memo(recommendPage);
