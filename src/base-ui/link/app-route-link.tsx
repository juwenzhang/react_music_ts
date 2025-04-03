import React, { memo, Fragment } from 'react';
import { Link } from 'react-router-dom';

interface AppLinkProps {
  children?: React.ReactNode;
  to: string;
  title?: string;
}
const AppRouteLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {
  return (
    <Fragment>
      <Link to={props.to}>{props.title}</Link>
    </Fragment>
  );
};

export default memo(AppRouteLink);
