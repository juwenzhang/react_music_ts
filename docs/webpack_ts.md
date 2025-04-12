# webpack_ts.md
* node_modules: dependencies
* public folder: static files
* src folder: source files
  * App.tsx: main entry point
  * index.tsx: main entry point
  * react-app-env.d.ts: typescript definitions
## 项目初始化
* 配置项目 icon
* 配置项目标题
* 配置项目描述
* 配置项目 craco.config.ts
  * 配置项目 @ 的别名的话需要进行对 tsconfig 和 craco.config.ts 的配置
* 配置项目 tsconfig.json
* 重置样式
* 构建项目开发架构
* 主要需要进行重新配置的含有
  * .editorconfig
  * prettierrc.json
  * prettierignore
  * eslintrc.json
  * commitlint.config.js
  * .gitignore
  * tsconfig.json
  * craco.config.ts
  * package.json
  * .husky

## react 中书写 ts 
* props 接收的时候类型的校验
* 组件类型的定义
* 函数类型的定义
* state 类型的定义吧
* 基础的模板就是
```typescript jsx
import React from "react";

const myComponent: React.FC<MyComponentProps> = (props: MyComponentProps) => {
  return <div>{props.name}</div>
}
export default myComponent
```

## 区分开发环境和生产环境
* webpack 而言的话
  * .env .env.development .env.production 声明不同固定的名称
  * 通过 process.env.NODE_ENV 来判断并且获取定义的一些属性
  * react-app-env.d.ts 中 declare 声明自定义变量，提高提示
* vite 而言的话
  * .env .env.development .env.production 声明不同固定的名称
  * 通过 import.env.mode 来判断并且获取定义的一些属性
  * vite.config.ts 中声明自定义变量，提高提示

```typescript
const moveScrollElement = (direction: 'left' | 'right') => {
    if (hotListRef.current) {
      const scrollAmount = 200; // 每次滚动的距离
      let newScrollLeft = hotListRef.current.scrollLeft;

      if (direction === 'left') {
        newScrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        newScrollLeft += scrollAmount;
      }

      let startTimestamp = 0;
      const currentScrollLeft = hotListRef.current.scrollLeft;
      const scrollDiff = newScrollLeft - currentScrollLeft;
      const duration = 300; // 滚动动画的持续时间（毫秒）

      const easeInOutQuad = (
        t: number,  // 当前时间
        b: number,  // 起始位置
        c: number,  // 结束位置
        d: number,  // 总时间
      ): number => {
        t /= d / 2;  // 时间进度
        if (t < 1) return (c / 2) * t * t + b;  
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      // 使用 requestAnimationFrame 实现顺滑滚动
      const frame = (timestamp: number) => {  // 时间戳
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;  // 时间进度
        hotListRef.current.scrollLeft = easeInOutQuad(  // 滚动动画的缓动效果
          progress,
          currentScrollLeft,
          scrollDiff,
          duration,
        );
        if (progress < duration) {  // 如果时间进度小于总时间，继续滚动
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    }
  };
```


在前端开发中，动画曲线通常被称为**缓动函数（Easing Functions）**或**贝塞尔曲线（Bezier Curves）**。这些曲线用于控制动画的速度变化，使动画看起来更加自然和流畅。

### 常见的动画曲线类型
1. **线性动画（Linear）**
  - 动画从开始到结束速度保持一致，没有加速或减速。
  - CSS 属性值：`linear`。

2. **缓入动画（Ease-in）**
  - 动画开始时速度较慢，逐渐加速。
  - CSS 属性值：`ease-in`。

3. **缓出动画（Ease-out）**
  - 动画开始时速度较快，逐渐减速。
  - CSS 属性值：`ease-out`。

4. **缓入缓出动画（Ease-in-out）**
  - 动画开始和结束时速度较慢，中间部分速度最快。
  - CSS 属性值：`ease-in-out`。

5. **自定义贝塞尔曲线（Cubic-bezier）**
  - 通过四个控制点（`P0(0,0)`、`P1(x1,y1)`、`P2(x2,y2)`、`P3(1,1)`）定义动画的速度曲线。
  - CSS 属性值：`cubic-bezier(x1, y1, x2, y2)`。

### 贝塞尔曲线
贝塞尔曲线是一种通过控制点定义的曲线，常用于前端动画中。它可以通过调整控制点的位置来改变曲线的形状，从而实现不同的动画效果。例如：
- **二次贝塞尔曲线**：由三个控制点定义。
- **三次贝塞尔曲线**：由四个控制点定义，是最常用的类型。

### 在线工具
为了方便开发，有一些在线工具可以帮助你生成和调试贝塞尔曲线，例如：
- **Easing Wizard**：提供所见即所得的动画效果调试。
- **Cubic-bezier.com**：可以自定义贝塞尔曲线并生成对应的 CSS 代码。

这些工具可以帮助你更直观地理解和生成各种动画效果，满足特定的开发需求。
