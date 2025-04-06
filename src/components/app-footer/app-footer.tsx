import React, { Fragment, memo } from 'react';

const AppFooter: React.FC = () => {
  return (
    <Fragment>
      <footer
        className="app-footer"
        style={{ textAlign: 'center', marginTop: '20px' }}
      >
        <span>hello world, Github-Juwenzhang</span>
      </footer>
    </Fragment>
  );
};

export default memo(AppFooter);
