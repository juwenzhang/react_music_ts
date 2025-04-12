import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import SectionHeaderWrapper from '@/components/section-header/style/sectionHeaderWrapper';

interface SectionHeaderProps {
  children?: React.ReactNode;
  title?: string;
  keywords?: string[];
  toPath?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { title, keywords, toPath } = props;
  const navigate = useNavigate();
  const jumpRoute = (path: string) => {
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
