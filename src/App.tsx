import React, { Fragment, memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { navConfig } from '@/views/configs/nav-config';
import routes from '@/router/index';
import AppRouteLoading from '@/base-ui/loading/app-route-loading';
import AppHeader from '@/components/app-header/app-header';
import AppFooter from '@/components/app-footer/app-footer';
import PlayerBar from '@/views/player/player-bar/player-bar';
import AnimationHoc from '@/hocs/AnimationHoc';

const App: React.FC = () => {
  const Router: React.FC = () => {
    const element = useRoutes(routes);
    return <article className="app-route">{element}</article>;
  };
  const AnimationRouter = AnimationHoc(Router);
  return (
    <Fragment>
      <div className="app">
        <AppHeader navConfig={navConfig} />
        <Suspense fallback={<AppRouteLoading />}>
          <AnimationRouter />
        </Suspense>
      </div>
      <AppFooter />
      {/* player bar 的展示 */}
      <PlayerBar />
    </Fragment>
  );
};

export default memo(App);
