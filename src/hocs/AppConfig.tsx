import React, { Suspense, memo } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppLoading from '@/base-ui/loading/app-loading';
import { Provider } from 'react-redux';
import { store } from '@/stores';
import '@/assets/css/reset.less';
import { theme } from '@/assets/theme/theme';
import ErrorBoundary from '@/hocs/ErrorBoundary';

const WithAppConfig = (WrappedComponent: React.ComponentType) => {
  const AppConfigHOC: React.FC = () => {
    return (
      <React.StrictMode>
        <ErrorBoundary>
          <ThemeProvider theme={theme}>
            <HashRouter>
              <Provider store={store}>
                <Suspense fallback={<AppLoading />}>
                  <WrappedComponent />
                </Suspense>
              </Provider>
            </HashRouter>
          </ThemeProvider>
        </ErrorBoundary>
      </React.StrictMode>
    );
  };

  return memo(AppConfigHOC);
};

export default WithAppConfig;
