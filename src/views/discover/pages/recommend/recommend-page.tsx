import React, { Fragment, memo, useEffect, useState } from 'react';
import {
  createRecommendFakerData,
  type BannerDataTemplateType,
} from '@/fakers/recommend-faker';
import { BANNER_IMAGE_HEIGHT, BANNER_IMAGE_WIDTH } from '@/constants/banner';

const recommendPage: React.FC = () => {
  const [bannerList, setBannerList] = useState<BannerDataTemplateType[]>([]);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  // 初始化数据
  useEffect(() => {
    setBannerList(createRecommendFakerData().bannerData);
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
        <div>
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
