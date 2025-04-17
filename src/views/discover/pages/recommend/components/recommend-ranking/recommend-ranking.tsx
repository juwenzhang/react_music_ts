import React, { memo } from 'react';
import SectionHeader from '@/components/section-header/section-header';
import { RECOMMEND_BANNER_INDEX } from '@/constants/active';
import RecommendRankingWrapper from '@/views/discover/pages/recommend/components/recommend-ranking/style/recommendRankingWrapper';
import subNavConfig from '@/views/discover/configs/subNav-config';

const RecommendRanking: React.FC = () => {
  return (
    <RecommendRankingWrapper>
      <SectionHeader
        title="榜单"
        activeCacheKey={RECOMMEND_BANNER_INDEX}
        toPath={'/discover/ranking'}
        subNavConfig={subNavConfig}
      />
      <article>没有内容，哈哈哈(没有数据呐！！！😭😭😭)</article>
    </RecommendRankingWrapper>
  );
};

export default memo(RecommendRanking);
