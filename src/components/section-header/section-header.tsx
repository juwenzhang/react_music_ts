import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import SectionHeaderWrapper from '@/components/section-header/style/sectionHeaderWrapper';
import { localCache } from '@/utils';

interface SectionHeaderProps {
  children?: React.ReactNode;
  title?: string;
  keywords?: string[];
  toPath?: string;
  subNavConfig?: unknown;
  activeCacheKey?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { title, keywords, toPath, subNavConfig, activeCacheKey } = props;
  const navigate = useNavigate();
  const jumpRoute = (path: string) => {
    let currentIndex = 0;
    if (Array.isArray(subNavConfig)) {
      currentIndex = subNavConfig?.findIndex((item: { path: string }) => {
        if (item.path) {
          return item.path === path;
        }
      });
    }
    localCache.setCache(activeCacheKey, currentIndex ?? 0);
    navigate(path);
  };
  return (
    <SectionHeaderWrapper>
      <div className={'section-header-left'}>
        <h3 className={'section-header-title'}>{title}</h3>
        <div className={'section-header-keywords'}>
          {keywords?.map((item, index) => (
            <div className={'section-header-keyword'} key={index}>
              <span className={'section-header-keyword-text'}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={'section-header-right'}
        onClick={() => jumpRoute(toPath ?? '/')}
      >
        <div className={'section-header-right-more'}>更多</div>
        <div className={'section-header-right-icon'}>
          <ArrowRightOutlined />
        </div>
      </div>
    </SectionHeaderWrapper>
  );
};

export default memo(SectionHeader);
