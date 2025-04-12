import React, { Fragment, memo } from 'react';

const AppFooter: React.FC = () => {
  return (
    <Fragment>
      <footer
        className="app-footer"
        style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}
      >
        <div>Released under the MIT License.</div>
        <div>Copyright © 2025 @bytedance JuWenZhang</div>
      </footer>
    </Fragment>
  );
};

export default memo(AppFooter);
