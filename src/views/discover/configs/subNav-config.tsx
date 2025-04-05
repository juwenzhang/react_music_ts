import React from 'react';

interface SubNavConfig {
  path: string;
  name: string;
  title: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

type SubNavConfigType = SubNavConfig[];

const subNavConfig: SubNavConfigType = [
  {
    path: '/discover/recommend',
    name: 'recommend',
    title: '推荐',
  },
  {
    path: '/discover/ranking',
    name: 'ranking',
    title: '排行榜',
  },
  {
    path: '/discover/songs',
    name: 'songs',
    title: '歌单',
  },
  {
    path: '/discover/singers',
    name: 'singers',
    title: '歌手',
  },
  {
    path: '/discover/djradio',
    name: 'djradio',
    title: '新碟上架',
  },
];
export default subNavConfig;
