import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HashRouter } from 'react-router-dom';
import AppLoading from '@/base-ui/loading/app-loading';
import { Provider } from 'react-redux';
import { store } from '@/stores';
import '@/assets/css/reset.less';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  // 严格模式
  <React.StrictMode>
    {/* hash 模式路由 */}
    <HashRouter>
      <Provider store={store}>
        {/* 路由懒加载实现 */}
        <Suspense fallback={<AppLoading />}>
          <App />
        </Suspense>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
