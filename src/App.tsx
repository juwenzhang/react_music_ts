import React, { Fragment, memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router/index';
import navConfig from '@/views/configs/nav-config';
import AppLink from '@/base-ui/link/app-link';
import AppRouteLink from '@/base-ui/link/app-route-link';
import AppRouteLoading from '@/base-ui/loading/app-route-loading';

const App: React.FC = () => {
  return (
    <Fragment>
      <div className="app">
        <nav className="app-nav">
          {navConfig.map((item) => {
            return item.type === 'route' ? (
              <AppRouteLink
                key={item.name}
                to={item.route}
                title={item.title}
              />
            ) : (
              <AppLink key={item.name} href={item.route} title={item.title} />
            );
          })}
        </nav>
        <Suspense fallback={<AppRouteLoading />}>
          <div className="app-route">{useRoutes(routes)}</div>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default memo(App);
