import React, { memo, Fragment } from 'react';

const AppLoading: React.FC = () => {
  return (
    <Fragment>
      <div style={{ textAlign: 'center', color: 'red' }}>应用正在加载中……</div>
    </Fragment>
  );
};

export default memo(AppLoading);
