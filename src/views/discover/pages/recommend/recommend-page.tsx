import React, { Fragment, memo, useEffect, useState } from 'react';
import { type BannerDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerBanners';
import {
  BANNER_IMAGE_HEIGHT,
  BANNER_IMAGE_WIDTH,
  BANNER_IMAGE_ARRAY,
} from '@/constants/banner';
import { localCache } from '@/utils';
// import { useAppDispatch } from '@/hooks';
// import { fetchRecommendBanners } from '@/views/discover/pages/recommend/store/recommend-store';

const recommendPage: React.FC = () => {
  // const dispatch = useAppDispatch();
  const [bannerList, setBannerList] = useState<BannerDataTemplateType[]>(
    localCache.getCache(BANNER_IMAGE_ARRAY) || [],
  );
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  // todo 初始化数据
  useEffect(() => {
    setBannerList([]);
  }, []);

  // todo 实现图片懒加载
  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index: number = Number(
              entry.target.getAttribute('data-index'),
            );
            if (!visibleImages.includes(index)) {
              setVisibleImages((prev) => [...prev, index]);
            }
            observer.unobserve(entry.target);
          }
        });
      },
    );
    // todo 获取需要被监听的元素集合
    const imgElements = document.querySelectorAll('img[data-index]');
    imgElements.forEach((img: Element) => {
      observer.observe(img);
    });
    return () => {
      observer.disconnect();
    };
  }, [visibleImages]);

  return (
    <Fragment>
      <div>
        <div style={{ display: 'flex', overflow: 'auto' }}>
          {bannerList &&
            bannerList.map((item, index) => {
              return (
                <div key={item.id}>
                  <a href={item.imageUrl}>
                    <img
                      src={item.imageUrl}
                      data-index={index}
                      alt={item.title}
                      title={item.title}
                      style={{
                        width: `${BANNER_IMAGE_WIDTH}px`,
                        height: `${BANNER_IMAGE_HEIGHT}px`,
                      }}
                    />
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(recommendPage);
