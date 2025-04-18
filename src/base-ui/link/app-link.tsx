import React, { memo, Fragment } from 'react';

interface AppLinkProps {
  children?: React.ReactNode;
  href?: string;
  title?: string;
}
const AppLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {
  return (
    <Fragment>
      <a
        href={props.href}
        rel="noreferrer"
        className={'app-link'}
        style={{ padding: '0 10px', fontSize: '14px' }}
      >
        {props.title}
      </a>
    </Fragment>
  );
};

export default memo(AppLink);
