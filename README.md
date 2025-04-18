react + typescript _ webpack + eslint + craco + prettier + commitLint + husky
lint-staged + axios + fakerJs + react-router + reduxjs/toolkit + styled-components + github-actions

* 网站大部分图标资源来源于: https://iconpark.oceanengine.com/ 【字节跳动】
* 大部分的图片资源来源于: fakerJs 随机生成图片，但是每次生成的数据都通过 localStorage 缓存，避免每次都请求接口 
* 注意很多数据的话都是直接在客户端进行缓存的，没有后端接口，全部通过
  * redux-toolkit --> try...catch 捕获错误 --> 返回fakerJs生成的模板数据 --> toolkit-dispatch返回数据即可
  * 页面中使用 localStorage 进行缓存数据 --> 渲染到组件中使用即可
* 所以说是一个纯前端界面，如果说需要进行看到不同的数据出现，请手动清楚 localStorage 中的缓存数据即可
  * 或者说后端接口可以按照 fakerJs 生成的数据模板进行书写后端接口也是可以的呐

---
* fork 这个 repo 的时候，提交 pr 的时候，在书写代码注释的时候
* 一定在代码注释前加上 todo 标识， webstorm 具备高亮显示的功能，这一点注意，thanks!!!
