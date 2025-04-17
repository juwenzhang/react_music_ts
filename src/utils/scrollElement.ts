import React from 'react';

/* todo: 平滑滚动实现函数， ease-in-out-cubic  平滑滚动的实现吧 */
const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

/* todo ease-in-out-sine  */
const easeInOutSine = (t: number, b: number, c: number, d: number): number => {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
};

/* todo: 平滑滚动实现函数， ease-in-out-expo  */
const easeInOutExpo = (t: number, b: number, c: number, d: number): number => {
  if (t === 0) return b;
  if (t === d) return b + c;
  if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
  return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
};

// todo: more timing-function realise

const moveScrollElement = (
  elementRef: React.RefObject<HTMLDivElement>,
  direction: 'left' | 'right',
  scrollAmountProps: number = 210,
  durationProps: number = 300,
  animationMode:
    | 'ease-in-out-cubic'
    | 'ease-in-out-sine'
    | 'ease-in-out-expo' = 'ease-in-out-cubic',
) => {
  let frame;
  if (elementRef.current) {
    /* todo: 滚动逻辑 */
    const scrollAmount: number = scrollAmountProps; // 每次滚动的距离
    let newScrollLeft = elementRef.current.scrollLeft;
    if (direction === 'left') {
      newScrollLeft -= scrollAmount;
    } else if (direction === 'right') {
      newScrollLeft += scrollAmount;
    }

    /* todo: 动画帧函数 */
    let startTimestamp: number = 0;
    const currentScrollLeft: number = elementRef.current.scrollLeft;
    const scrollDiff: number = newScrollLeft - currentScrollLeft;
    const duration: number = durationProps;
    frame = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      switch (animationMode) {
        case 'ease-in-out-cubic':
          elementRef.current.scrollLeft = easeInOutQuad(
            progress,
            currentScrollLeft,
            scrollDiff,
            duration,
          );
          break;
        case 'ease-in-out-sine':
          elementRef.current.scrollLeft = easeInOutSine(
            progress,
            currentScrollLeft,
            scrollDiff,
            duration,
          );
          break;
        case 'ease-in-out-expo':
          elementRef.current.scrollLeft = easeInOutExpo(
            progress,
            currentScrollLeft,
            scrollDiff,
            duration,
          );
      }
      if (progress < duration) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }
  return () => {
    cancelAnimationFrame(frame);
  };
};

export default moveScrollElement;
export { easeInOutQuad, easeInOutSine, easeInOutExpo };
