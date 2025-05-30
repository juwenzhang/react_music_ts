import React, { memo } from 'react';
import SectionCardWrapper from '@/components/section-card/style/SectionCardWrapper';
import { PlayCircleOutlined } from '@ant-design/icons';

interface SectionCardProps {
  children?: React.ReactNode;
  imageUrl?: string;
  title?: string;
  likeNumber?: string;
  mode?: 'card' | 'scroll';
}

const SectionCard: React.FC<SectionCardProps> = (props) => {
  const { imageUrl, title, mode } = props;
  return (
    <SectionCardWrapper>
      <div className="card-top">
        <img src={imageUrl} width="140px" alt="图片正在加载中……" />
        <div className={'card-top-cover'}>
          {mode === 'card' && (
            <span className="card-play-info">
              <span className="card-play-icon">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 28C4 26.8954 4.89543 26 6 26H10V38H6C4.89543 38 4 37.1046 4 36V28Z"
                    fill="none"
                  />
                  <path
                    d="M38 26H42C43.1046 26 44 26.8954 44 28V36C44 37.1046 43.1046 38 42 38H38V26Z"
                    fill="none"
                  />
                  <path
                    d="M10 36V24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24V36M10 26H6C4.89543 26 4 26.8954 4 28V36C4 37.1046 4.89543 38 6 38H10V26ZM38 26H42C43.1046 26 44 26.8954 44 28V36C44 37.1046 43.1046 38 42 38H38V26Z"
                    stroke="#1b1a1a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 32H20L22 26L26 38L28 32H32"
                    stroke="#1b1a1a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={'play-icon'}>
                <PlayCircleOutlined />
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="card-bottom">{title}</div>
    </SectionCardWrapper>
  );
};

export default memo(SectionCard);
