import React, { memo, Fragment } from 'react';

interface AppLinkProps {
  children?: React.ReactNode;
  href?: string;
  title?: string;
}
const AppLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {
  return (
    <Fragment>
      <a href={props.href}>{props.title}</a>
    </Fragment>
  );
};

export default memo(AppLink);
