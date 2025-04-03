import React, { Fragment, memo, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SubNavConfig from '@/views/discover/pages/configs/subNav-config';
import AppRouteLoading from '@/base-ui/loading/app-route-loading';
// you can also use React.FC<Props> to get props validation
const DiscoverPage: React.FC = () => {
  return (
    <Fragment>
      <div className="discover">
        <nav className={'discover-nav'}>
          {SubNavConfig.map((item) => (
            <Link to={item.path} key={item.name}>
              {item.title}
            </Link>
          ))}
        </nav>
        <article className={'discover-article'}>
          <Suspense fallback={<AppRouteLoading />}>
            <Outlet />
          </Suspense>
        </article>
      </div>
    </Fragment>
  );
};

export default memo(DiscoverPage);
