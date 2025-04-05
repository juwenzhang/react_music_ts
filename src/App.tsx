import React, { Fragment, memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { navConfig } from '@/views/configs/nav-config';
import routes from '@/router/index';
import AppRouteLoading from '@/base-ui/loading/app-route-loading';
import AppHeader from '@/components/app-header/app-header';
import AppFooter from '@/components/app-footer/app-footer';

const App: React.FC = () => {
  return (
    <Fragment>
      <div className="app">
        <AppHeader navConfig={navConfig} />
        <Suspense fallback={<AppRouteLoading />}>
          <article className="app-route">{useRoutes(routes)}</article>
        </Suspense>
      </div>
      <AppFooter />
    </Fragment>
  );
};

export default memo(App);
