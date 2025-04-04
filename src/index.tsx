import React from 'react';
import ReactDOM from 'react-dom/client';
import WithAppConfig from '@/hocs/AppConfig';
import App from '@/App';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const WrapperApp = WithAppConfig(App);

root.render(<WrapperApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
