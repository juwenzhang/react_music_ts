import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface AppLinkProps {
  children?: React.ReactNode;
  to: string;
  title?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const AppRouteLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {
  return (
    <NavLink
      to={props.to}
      onClick={props.onClick}
      className={`app-route-link ${props.isActive ? 'isActive' : ''}`}
      style={{ padding: '0 10px', fontSize: '14px' }}
    >
      {props.title}
    </NavLink>
  );
};

export default memo(AppRouteLink);
