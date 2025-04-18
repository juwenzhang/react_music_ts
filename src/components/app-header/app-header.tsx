import React, { memo, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRouteLink from '@/base-ui/link/app-route-link';
import AppLink from '@/base-ui/link/app-link';
import AppHeaderWrapper from '@/components/app-header/style/appHeaderWrapper';
import type { NavConfig, NavConfigType } from '@/views/configs/nav-config';
import { localCache } from '@/utils';
import { APP_CURRENT_INDEX, RECOMMEND_BANNER_INDEX } from '@/constants/active';
import { SearchOutlined } from '@ant-design/icons';
import { Input, type InputRef } from 'antd';

interface PropsType {
  children?: React.ReactNode;
  navConfig: NavConfig;
}

const AppHeader: React.FC<PropsType> = (props: PropsType) => {
  const { navConfig: navConfig } = props;
  const localCacheKey = APP_CURRENT_INDEX;
  const localCacheKey1 = RECOMMEND_BANNER_INDEX;
  const navigate = useNavigate();
  const inputRef = useRef<InputRef | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(
    Number(localCache.getCache(localCacheKey)) || 0,
  );

  useEffect(() => {
    inputRef.current?.focus();
    if (localCache.getCache(localCacheKey)) {
      setCurrentIndex(Number(localCache.getCache(localCacheKey)));
    } else {
      setCurrentIndex(0);
      localCache.setCache(localCacheKey, currentIndex);
    }

    return () => {
      localCache.removeCache(localCacheKey);
      inputRef.current?.blur();
    };
  }, []);

  // todo: maintain nav active equal with pre that you refresh the page
  // todo: also, you can define a method to match our current route with our config
  const clickHandler = (index: number) => {
    if (localCache.getCache(localCacheKey)) {
      localCache.removeCache(localCacheKey);
    }
    localCache.setCache(localCacheKey1, 0);
    localCache.setCache(localCacheKey, index);
    setCurrentIndex(index);
  };
  const logoClickHandler = () => {
    localCache.setCache(localCacheKey1, 0);
    navigate('/');
  };

  return (
    <AppHeaderWrapper>
      <div className={'app-header-container'}>
        <aside className={'app-left-container'}>
          <div
            className={'app-left-container-content'}
            onClick={() => logoClickHandler()}
          >
            {/* todo: after you exec fork, the text do not delete, maybe lead our spirit image can not display */}
            网易云音乐
          </div>
        </aside>
        <nav className={'app-nav-container'}>
          {navConfig.map((item: NavConfigType, index: number) => {
            {
              /*todo: if contain more choices, you can use switch or if, but there only has two choices*/
            }
            return item.type === 'route' ? (
              <AppRouteLink
                key={item.name}
                to={item.route}
                title={item.title}
                isActive={index === currentIndex}
                onClick={() => clickHandler(index)}
              />
            ) : (
              <AppLink key={item.name} href={item.route} title={item.title} />
            );
          })}
        </nav>
        <aside className={'app-right-container'}>
          <div className={'app-right-input'}>
            <Input
              className={'search'}
              prefix={<SearchOutlined className={'search-prefix'} />}
              placeholder="音乐/视频/电台/用户"
              ref={inputRef}
            />
          </div>
          <div>
            <a
              href="https://music.163.com/#/creatorcenter"
              target={'_blank'}
              rel="noreferrer"
            >
              <span className={'app-right-content'}>创作者中心</span>
            </a>
          </div>
          <div className={'app-right-login'}>登录</div>
        </aside>
      </div>
    </AppHeaderWrapper>
  );
};

export default memo(AppHeader);
