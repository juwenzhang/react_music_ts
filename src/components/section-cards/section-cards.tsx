import React, { memo, useRef } from 'react';
import SectionCardsWrapper from '@/components/section-cards/style/sectionCardsWrapper';
import { type HotDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerHot';
import SectionHeader from '@/components/section-header/section-header';
import SectionCard from '@/components/section-card/section-card';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface SectionCardsProps {
  children?: React.ReactNode;
  title: string;
  keywords?: string[];
  toPath: string;
  cards: HotDataTemplateType[];
  mode: 'card' | 'scroll';
}

const SectionCards: React.FC<SectionCardsProps> = (props) => {
  const { title, keywords, toPath, cards, mode } = props;
  const hotListRef = useRef<HTMLDivElement>(null);

  const moveScrollElement = (direction: 'left' | 'right') => {
    /* todo: 平滑滚动实现函数， ease-in-out 平滑滚动的实现吧 */
    const easeInOutQuad = (
      t: number,
      b: number,
      c: number,
      d: number,
    ): number => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    if (hotListRef.current) {
      /* todo: 滚动逻辑 */
      const scrollAmount = 210; // 每次滚动的距离
      let newScrollLeft = hotListRef.current.scrollLeft;
      if (direction === 'left') {
        newScrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        newScrollLeft += scrollAmount;
      }

      /* todo: 动画帧函数 */
      let startTimestamp = 0;
      const currentScrollLeft = hotListRef.current.scrollLeft;
      const scrollDiff = newScrollLeft - currentScrollLeft;
      const duration = 300;
      const frame = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        hotListRef.current.scrollLeft = easeInOutQuad(
          progress,
          currentScrollLeft,
          scrollDiff,
          duration,
        );
        if (progress < duration) {
          requestAnimationFrame(frame);
        }
      };
      requestAnimationFrame(frame);
    }
  };
  return (
    <SectionCardsWrapper>
      <SectionHeader title={title} keywords={keywords} toPath={toPath} />
      <div
        className={`${mode === 'card' ? 'hot-list' : 'hot-scroll'}`}
        ref={hotListRef}
      >
        {cards.map((item) => (
          <div key={item.id}>
            <SectionCard imageUrl={item.imageUrl} title={item.title} />
          </div>
        ))}
      </div>
      {mode === 'scroll' ? (
        <div className="hot-scroll-iterator">
          <div
            className={'hot-scroll-icon-left'}
            onClick={() => moveScrollElement('left')}
          >
            <LeftOutlined />
          </div>
          <div
            className={'hot-scroll-icon-right'}
            onClick={() => moveScrollElement('right')}
          >
            <RightOutlined />
          </div>
        </div>
      ) : null}
    </SectionCardsWrapper>
  );
};

export default memo(SectionCards);
