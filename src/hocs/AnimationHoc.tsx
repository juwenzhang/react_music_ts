import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface AnimationHocProps {
  animation?: string;
  timeout?: number;
  unmountOnExit?: boolean;
  appear?: boolean;
  enter?: boolean;
  exit?: boolean;
}

const AnimationWrapper = styled.div`
  .fade-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition:
      opacity 300ms,
      transform 300ms;
  }

  .fade-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition:
      opacity 300ms,
      transform 300ms;
  }
`;

// 修复：将 Component 的类型改为 React.ComponentType<any>
const AnimationHoc = <P extends object>(Component: React.ComponentType<P>) => {
  const location = useLocation();

  // 修复：添加泛型支持，确保 props 类型安全
  const AnimationHocComponent = (props: AnimationHocProps & P) => {
    return (
      <AnimationWrapper>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={props.timeout || 300}
            unmountOnExit={props.unmountOnExit}
            appear={props.appear}
            enter={props.enter}
            exit={props.exit}
          >
            {/* 修复：正确调用 Component 并传递 props */}
            <Component {...props} />
          </CSSTransition>
        </TransitionGroup>
      </AnimationWrapper>
    );
  };

  return memo(AnimationHocComponent);
};

export default AnimationHoc;
