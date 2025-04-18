import React from 'react';
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: never) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: never, errorInfo: never) {
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 降级后展示的UI界面吧
      return (
        <div>
          <h1>
            Something went wrong.Please try again later Or upgrade your browser
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
