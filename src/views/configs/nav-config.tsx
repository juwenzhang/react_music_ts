import React from 'react';

interface NavConfigType {
  name: string;
  route: string;
  title: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  type?: 'route' | 'link';
}

type NavConfig = NavConfigType[];

const navConfig: NavConfig = [
  {
    name: 'discover',
    route: '/discover',
    title: '发现音乐',
    type: 'route',
  },
  {
    name: 'mine',
    route: '/mine',
    title: '我的音乐',
    type: 'route',
  },
  {
    name: 'focus',
    route: '/focus',
    title: '关注',
    type: 'route',
  },
  {
    name: 'download',
    route: '/download',
    title: '下载客户端',
    type: 'route',
  },
];

export default navConfig;
