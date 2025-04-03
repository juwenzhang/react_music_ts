import React, { memo, Fragment } from 'react';

const AppRouteLoading: React.FC = () => {
  return (
    <Fragment>
      <div>页面正在加载中……</div>
    </Fragment>
  );
};

export default memo(AppRouteLoading);
