import React, { memo, useEffect, useState, useRef } from 'react';
import { Carousel } from 'antd';
import { type BannerDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerBanners';
import { BANNER_IMAGE_HEIGHT, BANNER_IMAGE_WIDTH } from '@/constants/banner';
import * as DefaultImage from '@/assets/images/default.png';
import {
  BannerWrapper,
  BannerCenterWrapper,
  BannerControlWrapper,
} from '@/views/discover/pages/recommend/components/recommend-banners/style/BannerWrapper';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import useGetImageColor from '@/hooks/useGetImageColor';

interface RecommendBannersProps {
  banners: BannerDataTemplateType[];
}

const RecommendBanners: React.FC<RecommendBannersProps> = (
  props: RecommendBannersProps,
) => {
  const { banners } = props;
  const bannerRightImage = new URL(
    '@/assets/images/bannerRight.png',
    import.meta.url,
  ).href;
  const CarouselRef = useRef(null);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imageColor, setImageColor] = useState<string>('#fff');

  useEffect(() => {
    setTimeout(() => {
      useGetImageColor(banners[currentIndex].imageUrl).then((color) => {
        setImageColor(color);
      });
    }, 0);
  }, [currentIndex, banners]);

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

  // todo: define event func to control carousel move
  const BtnOnClickHandler = async (isRight: boolean) => {
    if (CarouselRef.current) {
      const mainColor = await useGetImageColor(banners[currentIndex].imageUrl);
      setImageColor(mainColor);
      return isRight
        ? CarouselRef.current?.next()
        : CarouselRef.current?.prev();
    }
  };
  const iteratorClickHandler = (index: number) => {
    if (CarouselRef.current) {
      CarouselRef.current?.goTo(index);
      setCurrentIndex(index);
    }
  };

  return (
    <BannerWrapper $BannerImageColor={imageColor}>
      <BannerCenterWrapper
        $BannerImageWidth={BANNER_IMAGE_WIDTH}
        $BannerImageHeight={BANNER_IMAGE_HEIGHT}
        $BannerRightImage={bannerRightImage}
      >
        <div className={'banner-items'}>
          <Carousel
            autoplay
            autoplaySpeed={5000}
            ref={CarouselRef}
            effect={'fade'}
            dots={false}
            afterChange={(current) => {
              setCurrentIndex(current);
            }}
            beforeChange={(_, next) => {
              setCurrentIndex(next);
            }}
          >
            {banners &&
              banners.map((item, index) => {
                return (
                  <div key={item.id} className={'banner-item'}>
                    <a href={item.imageUrl}>
                      <img
                        className={'banner-item-img'}
                        src={item.imageUrl}
                        data-index={index}
                        alt={item.title}
                        title={item.title}
                        data-src={DefaultImage.default}
                      />
                    </a>
                  </div>
                );
              })}
          </Carousel>
          <ul className={'banner-item-dots'}>
            {banners.length &&
              banners.map((item, index) => {
                return (
                  <li key={`${item}-${index}`}>
                    <span
                      className={`item ${currentIndex === index ? 'is-active' : ''}`}
                      onClick={() => iteratorClickHandler(index)}
                    ></span>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={'banner-right-img'}></div>
        <BannerControlWrapper>
          <div className={'btn-left'} onClick={() => BtnOnClickHandler(false)}>
            <LeftOutlined />
          </div>
          <div className={'btn-right'} onClick={() => BtnOnClickHandler(true)}>
            <RightOutlined />
          </div>
        </BannerControlWrapper>
      </BannerCenterWrapper>
    </BannerWrapper>
  );
};

export default memo(RecommendBanners);
