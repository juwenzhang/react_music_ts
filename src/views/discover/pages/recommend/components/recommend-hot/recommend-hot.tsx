import React, { memo } from 'react';
import RecommendHotWrapper from '@/views/discover/pages/recommend/components/recommend-hot/style/recommendHotWrapper';
import { HotDataTemplateType } from '@/views/discover/pages/recommend/faker/recommend-fakerHot';
import SectionCards from '@/components/section-cards/section-cards';
import subNavConfig from '@/views/discover/configs/subNav-config';
import { RECOMMEND_BANNER_INDEX } from '@/constants/active';

interface RecommendHotProps {
  children?: React.ReactNode;
  hotList: HotDataTemplateType[];
}

const RecommendHot: React.FC<RecommendHotProps> = (props) => {
  const { hotList } = props;
  return (
    <RecommendHotWrapper>
      <SectionCards
        title={'热门歌单推荐'}
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        toPath={'/discover/songs'}
        cards={hotList.slice(0, 8)}
        mode={'card'}
        subNavConfig={subNavConfig}
        activeCacheKey={RECOMMEND_BANNER_INDEX}
      />
      <SectionCards
        title={'新碟上架'}
        toPath={'/discover/djradio'}
        cards={hotList.slice(8, 28)}
        mode={'scroll'}
        subNavConfig={subNavConfig}
        activeCacheKey={RECOMMEND_BANNER_INDEX}
      />
    </RecommendHotWrapper>
  );
};
export default memo(RecommendHot);
