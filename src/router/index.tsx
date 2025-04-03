import { RouteObject, Navigate } from 'react-router-dom';
import React, { lazy, type LazyExoticComponent } from 'react';

// use lazy import the resource
const DiscoverPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/discover/discover-page'),
);
const DownloadPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/download/download-page'),
);
const MinePage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/mine/mine-page'),
);
const FocusPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/focus/focus-page'),
);
const NotFoundPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/notFound/not-found-page'),
);
const RecommendPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/discover/pages/recommend/recommend-page'),
);
const DjRadioPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/discover/pages/djradio/djradio-page'),
);
const RankingPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/discover/pages/ranking/ranking-page'),
);
const SingerPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/discover/pages/singer/singer-page'),
);
const SongPage: LazyExoticComponent<React.FC> = lazy(
  () => import('@/views/discover/pages/song/song-page'),
);

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <DiscoverPage />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <RecommendPage />,
      },
      {
        path: '/discover/djradio',
        element: <DjRadioPage />,
      },
      {
        path: '/discover/ranking',
        element: <RankingPage />,
      },
      {
        path: '/discover/singers',
        element: <SingerPage />,
      },
      {
        path: '/discover/songs',
        element: <SongPage />,
      },
    ],
  },
  {
    path: '/mine',
    element: <MinePage />,
  },
  {
    path: '/focus',
    element: <FocusPage />,
  },
  {
    path: '/download',
    element: <DownloadPage />,
  },
  {
    path: '/',
    element: <Navigate to="/discover" replace />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
