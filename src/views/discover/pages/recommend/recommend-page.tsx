import React, { Fragment, memo, useEffect, useState } from 'react';
import { type BannerDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerBanners';
import { BANNER_IMAGE_ARRAY } from '@/constants/banner';
import RecommendBanners from '@/views/discover/pages/recommend/components/recommend-banners/recommend-banners';
import { localCache } from '@/utils';
import { useAppDispatch } from '@/hooks';
import {
  fetchRecommendBanners,
  fetchRecommendHot,
} from '@/views/discover/pages/recommend/store/recommend-store';
import RecommendContentWrapper from '@/views/discover/pages/recommend/style';
import RecommendHot from '@/views/discover/pages/recommend/components/recommend-hot/recommend-hot';
import { HotDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerHot';

const recommendPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [bannerList, setBannerList] = useState<BannerDataTemplateType[]>(
    localCache.getCache(BANNER_IMAGE_ARRAY) || [],
  );
  const [hotList, setHotList] = useState<HotDataTemplateType[]>([]);

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
    dispatch(fetchRecommendHot())
      .then((res) => {
        if (res) {
          setHotList(res.payload as HotDataTemplateType[]);
        }
      })
      .catch(() => {
        console.log('请求热门歌单数据失败');
      });
  }, [dispatch]);

  return (
    <Fragment>
      <div>
        <RecommendBanners banners={bannerList} />
        <RecommendContentWrapper>
          <div className={'recommend-left'}>
            <RecommendHot hotList={hotList} />
          </div>
          <div className={'recommend-right'}>right</div>
        </RecommendContentWrapper>
      </div>
    </Fragment>
  );
};

export default memo(recommendPage);
