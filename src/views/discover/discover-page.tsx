import React, { Fragment, memo, Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SubNavConfig from '@/views/discover/configs/subNav-config';
import AppRouteLoading from '@/base-ui/loading/app-route-loading';
import AppRouteLink from '@/base-ui/link/app-route-link';
import DiscoverWrapper from '@/views/discover/style/discoverWrapper';
import { RECOMMEND_BANNER_INDEX, APP_CURRENT_INDEX } from '@/constants/active';
import { localCache } from '@/utils';
// you can also use React.FC<Props> to get props validation
const DiscoverPage: React.FC = () => {
  const localCacheKey = RECOMMEND_BANNER_INDEX;
  const localCacheKey1 = APP_CURRENT_INDEX;
  const [currentIndex, setCurrentIndex] = useState<number>(
    localCache.getCache(localCacheKey) || 0,
  );

  useEffect(() => {
    const currentIndex = localCache.getCache(localCacheKey1);
    if (localCache.getCache(localCacheKey)) {
      setCurrentIndex(localCache.getCache(localCacheKey));
    } else {
      setCurrentIndex(0);
      localCache.setCache(localCacheKey, currentIndex);
    }
    if (currentIndex === 0) {
      localCache.setCache(localCacheKey, 0);
    }
  }, []);

  const NavClickHandler = (index: number) => {
    if (localCache.getCache(localCacheKey)) {
      localCache.removeCache(localCacheKey);
    }
    localCache.setCache(localCacheKey, index);
    setCurrentIndex(index);
  };
  return (
    <Fragment>
      <DiscoverWrapper>
        <nav className={'discover-nav'}>
          <span className={'discover-nav-items'}>
            {SubNavConfig.map((item, index) => (
              <span
                className={`discover-nav-item ${currentIndex === index ? 'isActive' : ''}`}
                key={item.name}
              >
                <AppRouteLink
                  to={item.path}
                  title={item.title}
                  onClick={() => NavClickHandler(index)}
                />
              </span>
            ))}
          </span>
        </nav>
        <article className={'discover-article'}>
          <Suspense fallback={<AppRouteLoading />}>
            <Outlet />
          </Suspense>
        </article>
      </DiscoverWrapper>
    </Fragment>
  );
};

export default memo(DiscoverPage);
