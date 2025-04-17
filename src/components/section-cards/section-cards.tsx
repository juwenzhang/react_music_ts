import React, { memo, useRef, useCallback } from 'react';
import SectionCardsWrapper from '@/components/section-cards/style/sectionCardsWrapper';
import { type HotDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerHot';
import SectionHeader from '@/components/section-header/section-header';
import SectionCard from '@/components/section-card/section-card';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import moveScrollElement from '@/utils/scrollElement';

interface SectionCardsProps {
  children?: React.ReactNode;
  title: string;
  keywords?: string[];
  toPath: string;
  cards: HotDataTemplateType[];
  mode: 'card' | 'scroll';
  subNavConfig?: unknown;
  activeCacheKey?: string;
}

const SectionCards: React.FC<SectionCardsProps> = (props) => {
  const { title, keywords, toPath, cards, mode, subNavConfig, activeCacheKey } =
    props;
  const hotListRef = useRef<HTMLDivElement>(null);
  const scrollElement = useCallback(
    (direction: 'left' | 'right') => {
      let cancelAnimationFunc: () => void;
      if (hotListRef.current) {
        cancelAnimationFunc = moveScrollElement(hotListRef, direction);
      }
      cancelAnimationFunc();
    },
    [hotListRef],
  );
  return (
    <SectionCardsWrapper>
      <SectionHeader
        title={title}
        keywords={keywords}
        toPath={toPath}
        subNavConfig={subNavConfig}
        activeCacheKey={activeCacheKey}
      />
      <article
        className={`${mode === 'card' ? 'hot-list' : 'hot-scroll'}`}
        ref={hotListRef}
      >
        {cards.map((item) => (
          <div key={item.id}>
            <SectionCard
              imageUrl={item.imageUrl}
              title={item.title}
              mode={mode}
            />
          </div>
        ))}
      </article>
      {mode === 'scroll' ? (
        <article className="hot-scroll-iterator">
          <div
            className={'hot-scroll-icon-left'}
            onClick={() => scrollElement('left')}
          >
            <LeftOutlined />
          </div>
          <div
            className={'hot-scroll-icon-right'}
            onClick={() => scrollElement('right')}
          >
            <RightOutlined />
          </div>
        </article>
      ) : null}
    </SectionCardsWrapper>
  );
};

export default memo(SectionCards);
