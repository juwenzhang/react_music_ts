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
