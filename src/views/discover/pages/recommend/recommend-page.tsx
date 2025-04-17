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
import RecommendRanking from '@/views/discover/pages/recommend/components/recommend-ranking/recommend-ranking';
import { HotDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerHot';
import UserLogin from '@/views/discover/pages/recommend/components/user-login/user-login';
import AsideHeader from '@components/aside-header/aside-header';

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
            <RecommendRanking />
          </div>
          <div className={'recommend-right'}>
            <UserLogin />
            <AsideHeader leftDesc={'入驻歌手'} rightDesc={'更多'} />
            <AsideHeader leftDesc={'热门主播'} />
          </div>
        </RecommendContentWrapper>
      </div>
    </Fragment>
  );
};

export default memo(recommendPage);
