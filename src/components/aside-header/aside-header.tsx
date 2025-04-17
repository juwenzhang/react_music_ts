import React, { memo } from 'react';
import AsideHeaderWrapper from '@components/aside-header/style/asideHeaderWrapper';
import { RightOutlined } from '@ant-design/icons';

interface AsideHeaderProps {
  children?: React.ReactNode;
  leftDesc: string;
  rightDesc?: string;
}

const AsideHeader: React.FC<AsideHeaderProps> = (props: AsideHeaderProps) => {
  const { leftDesc, rightDesc } = props;
  return (
    <AsideHeaderWrapper>
      <header className={'aside-header'}>
        <div className={'left-desc'}>{leftDesc}</div>
        {rightDesc && (
          <div className={'right-desc'}>
            <span>
              {rightDesc}
              <RightOutlined />
            </span>
          </div>
        )}
      </header>
    </AsideHeaderWrapper>
  );
};

export default memo(AsideHeader);
