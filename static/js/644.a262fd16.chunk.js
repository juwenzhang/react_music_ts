"use strict";(self.webpackChunkreact_music_ts=self.webpackChunkreact_music_ts||[]).push([[644],{2401:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Y});var r=i(5043),o=i(280),n=i(5366);const s=i.p+"static/media/default.42982e4a7b20f1188abc.png";var a=i(5464);const l=a.Ay.div`
  position: relative;
  z-index: 1;

  // todo: use before to settle banner display blur stylus
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${e=>{let{$BannerImageColor:t}=e;return t}};
    filter: blur(5px);
    z-index: 0;
  }
`,c=a.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>{let{$BannerImageHeight:t}=e;return`${t}px`}};
  width: 980px;
  margin: 0 auto;
  position: relative;
  z-index: 9;

  .banner-items {
    margin: 0 auto;
    width: ${e=>{let{$BannerImageWidth:t}=e;return`${t}px`}};
    position: relative;

    .banner-item {
      overflow: hidden;
      height: 100%;

      .banner-item-img {
        width: ${e=>{let{$BannerImageWidth:t}=e;return`${t}px`}};
        height: 100%;
      }
    }

    .banner-item-dots {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      z-index: 11;
      margin: 0 auto;
      display: flex;
      justify-content: center;

      > li {
        margin: 0 10px;
        cursor: pointer;

        .item {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: rgba(227, 209, 209, 0.5);

          &:hover,
          &.is-active {
            background-color: rgba(238, 117, 117, 0.5);
          }
        }
      }
    }
  }

  .banner-right-img {
    width: 250px;
    height: 100%;
    background: #1c1919 url(${e=>e.$BannerRightImage}) 0 60px/250px
      100% no-repeat;
  }
`,d=a.Ay.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;

  div {
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    color: black;
    font-size: 50px;
    transform: translateY(-50%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .btn-left {
    left: -68px;
  }
  .btn-right {
    right: -68px;
  }
`;var h=i(682),x=i(9905);const g=async e=>new Promise(((t,i)=>{const r=new Image;r.crossOrigin="Anonymous",r.src=e,r.onload=()=>{const e=document.createElement("canvas"),o=e.getContext("2d");if(!o)return void i("Failed to get canvas context");e.width=r.width,e.height=r.height,o.drawImage(r,0,0);const n=o.getImageData(0,0,e.width,e.height).data,s={};for(let t=0;t<n.length;t+=4){const e=n[t],i=n[t+1],r=n[t+2];if(n[t+3]<128)continue;const o=`rgb(${e},${i},${r})`;s[o]=(s[o]||0)+1}let a="",l=0;for(const t in s)s[t]>l&&(a=t,l=s[t]);t(a)},r.onerror=()=>{i("Failed to load image")}}));var p=i(579);const m=e=>{const{banners:t}=e,a=new URL(i(6431),i.b).href,m=(0,r.useRef)(null),[u,f]=(0,r.useState)([]),[b,v]=(0,r.useState)(0),[j,y]=(0,r.useState)("#fff");(0,r.useEffect)((()=>{setTimeout((()=>{g(t[b].imageUrl).then((e=>{y(e)}))}),0)}),[b,t]),(0,r.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const i=Number(t.target.getAttribute("data-index"));u.includes(i)||f((e=>[...e,i])),e.unobserve(t.target)}}))}));return document.querySelectorAll("img[data-index]").forEach((t=>{e.observe(t)})),()=>{e.disconnect()}}),[u]);const w=async e=>{if(m.current){var i,r;const o=await g(t[b].imageUrl);return y(o),e?null===(i=m.current)||void 0===i?void 0:i.next():null===(r=m.current)||void 0===r?void 0:r.prev()}};return(0,p.jsx)(l,{$BannerImageColor:j,children:(0,p.jsxs)(c,{$BannerImageWidth:o.ud,$BannerImageHeight:o.FK,$BannerRightImage:a,children:[(0,p.jsxs)("div",{className:"banner-items",children:[(0,p.jsx)(n.A,{autoplay:!0,autoplaySpeed:5e3,ref:m,effect:"fade",dots:!1,afterChange:e=>{v(e)},beforeChange:(e,t)=>{v(t)},children:t&&t.map(((e,t)=>(0,p.jsx)("div",{className:"banner-item",children:(0,p.jsx)("a",{href:e.imageUrl,children:(0,p.jsx)("img",{className:"banner-item-img",src:e.imageUrl,"data-index":t,alt:e.title,title:e.title,"data-src":s})})},e.id)))}),(0,p.jsx)("ul",{className:"banner-item-dots",children:t.length&&t.map(((e,t)=>(0,p.jsx)("li",{children:(0,p.jsx)("span",{className:"item "+(b===t?"is-active":""),onClick:()=>(e=>{var t;m.current&&(null===(t=m.current)||void 0===t||t.goTo(e),v(e))})(t)})},`${e}-${t}`)))})]}),(0,p.jsx)("div",{className:"banner-right-img"}),(0,p.jsxs)(d,{children:[(0,p.jsx)("div",{className:"btn-left",onClick:()=>w(!1),children:(0,p.jsx)(h.A,{})}),(0,p.jsx)("div",{className:"btn-right",onClick:()=>w(!0),children:(0,p.jsx)(x.A,{})})]})]})})},u=(0,r.memo)(m);var f=i(351);const b=i(3003).wA;var v=i(3287);const j=a.Ay.div`
  border: 1px solid #d3d3d3;
  width: 980px;
  display: flex;
  margin: 0 auto;

  .recommend-left,
  .recommend-right {
    background-color: #f3f0f0;
    box-sizing: border-box;
  }

  .recommend-left {
    width: 729px;
    padding: 20px;
  }

  .recommend-right {
    margin-left: 1px;
    width: 250px;
  }
`,y=a.Ay.div``,w=a.Ay.div`
  margin-bottom: 20px;
  width: auto;
  position: relative;

  .hot-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .hot-scroll {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow-x: auto;
    padding-left: 4px;
    border: 1px solid #d5d0d0;
    background-color: #eee7e7;
    position: relative;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .hot-scroll-iterator {
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    .hot-scroll-icon-left,
    .hot-scroll-icon-right {
      font-size: 20px;
      position: absolute;
      top: 60%;
      transform: translateY(-50%);
      transition: all 0.3s ease;
      cursor: pointer;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
      border-radius: 50%;
      z-index: 11;
    }

    .hot-scroll-icon-left {
      left: -20px;
    }

    .hot-scroll-icon-right {
      right: -20px;
    }
  }
`;var k=i(9900),N=i(8600);const C=a.Ay.div`
  background-color: #d3d3d3;
  border-bottom: 2px solid #c10d0c;
  height: 40px;
  padding: 0 10px 4px 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .section-header-left {
    display: flex;
    align-items: center;

    .section-header-title {
      font-size: 20px;
      margin-right: 20px;
    }

    .section-header-keywords {
      display: flex;
      align-items: center;

      .section-header-keyword {
        .section-header-keyword-text {
          font-size: 12px;
          padding: 0 20px;
          border-right: 1px solid #7e7777;
          &:hover {
            text-decoration-line: underline;
          }
        }
      }
      .section-header-keyword:last-child {
        .section-header-keyword-text {
          border-right: none;
        }
      }
      .section-header-keyword:first-child {
        .section-header-keyword-text {
          padding-left: 0;
        }
      }
    }
  }

  .section-header-right {
    display: flex;
    cursor: pointer;
    margin-right: 10px;

    .section-header-right-more,
    .section-header-right-icon {
      font-size: 12px;
    }

    .section-header-right-icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
    }

    &:hover {
      text-decoration-line: underline;
      .section-header-right-more {
        color: skyblue;
      }
      .section-header-right-icon {
        color: darkred;
      }
    }
  }
`,A=e=>{const{title:t,keywords:i,toPath:r,subNavConfig:o,activeCacheKey:n}=e,s=(0,k.Zp)();return(0,p.jsxs)(C,{children:[(0,p.jsxs)("div",{className:"section-header-left",children:[(0,p.jsx)("h3",{className:"section-header-title",children:t}),(0,p.jsx)("div",{className:"section-header-keywords",children:null===i||void 0===i?void 0:i.map(((e,t)=>(0,p.jsx)("div",{className:"section-header-keyword",children:(0,p.jsx)("span",{className:"section-header-keyword-text",children:e})},t)))})]}),(0,p.jsxs)("div",{className:"section-header-right",onClick:()=>(e=>{var t;let i=0;Array.isArray(o)&&(i=null===o||void 0===o?void 0:o.findIndex((t=>{if(t.path)return t.path===e}))),f.sg.setCache(n,null!==(t=i)&&void 0!==t?t:0),s(e)})(null!==r&&void 0!==r?r:"/"),children:[(0,p.jsx)("div",{className:"section-header-right-more",children:"\u66f4\u591a"}),(0,p.jsx)("div",{className:"section-header-right-icon",children:(0,p.jsx)(N.A,{})})]})]})},z=(0,r.memo)(A),$=a.Ay.div`
  width: 160px;
  height: 180px;
  margin: 20px 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  box-sizing: border-box;

  .card-top {
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .card-top-cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(229, 221, 221, 0.3);
      z-index: 2;

      .card-play-info {
        position: relative;
        top: 100px;
        display: block;
        width: 100%;
        height: 40px;
        background-color: rgba(124, 121, 121, 0.7);

        .card-play-icon {
          float: left;
          margin-left: 5px;
          margin-top: 8px;
          height: 100%;

          svg {
            line-height: 40px;
            font-size: 20px;
            color: #1f1e1e;
          }
        }

        .play-icon {
          margin-right: 5px;
          font-size: 20px;
          color: #333333;
          float: right;
          line-height: 40px;
        }
      }
    }
  }

  .card-bottom {
    width: 140px;
    height: 35px;
    box-sizing: border-box;
    transition: all 500ms ease;
    // 实现文本溢出的解决方案吧
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: absolute;
    bottom: 0;

    &:hover {
      text-decoration-line: underline;
    }
  }
`;var I=i(7677);const L=e=>{const{imageUrl:t,title:i,mode:r}=e;return(0,p.jsxs)($,{children:[(0,p.jsxs)("div",{className:"card-top",children:[(0,p.jsx)("img",{src:t,width:"140px",alt:"\u56fe\u7247\u6b63\u5728\u52a0\u8f7d\u4e2d\u2026\u2026"}),(0,p.jsx)("div",{className:"card-top-cover",children:"card"===r&&(0,p.jsxs)("span",{className:"card-play-info",children:[(0,p.jsx)("span",{className:"card-play-icon",children:(0,p.jsxs)("svg",{width:"25",height:"25",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,p.jsx)("path",{d:"M4 28C4 26.8954 4.89543 26 6 26H10V38H6C4.89543 38 4 37.1046 4 36V28Z",fill:"none"}),(0,p.jsx)("path",{d:"M38 26H42C43.1046 26 44 26.8954 44 28V36C44 37.1046 43.1046 38 42 38H38V26Z",fill:"none"}),(0,p.jsx)("path",{d:"M10 36V24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24V36M10 26H6C4.89543 26 4 26.8954 4 28V36C4 37.1046 4.89543 38 6 38H10V26ZM38 26H42C43.1046 26 44 26.8954 44 28V36C44 37.1046 43.1046 38 42 38H38V26Z",stroke:"#1b1a1a",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M16 32H20L22 26L26 38L28 32H32",stroke:"#1b1a1a",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})}),(0,p.jsx)("span",{className:"play-icon",children:(0,p.jsx)(I.A,{})})]})})]}),(0,p.jsx)("div",{className:"card-bottom",children:i})]})},H=(0,r.memo)(L),B=function(e,t){let i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:210,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"ease-in-out-cubic";if(e.current){const s=r;let a=e.current.scrollLeft;"left"===t?a-=s:"right"===t&&(a+=s);let l=0;const c=e.current.scrollLeft,d=a-c,h=o;i=t=>{l||(l=t);const r=t-l;switch(n){case"ease-in-out-cubic":e.current.scrollLeft=(o=r,s=c,a=d,(o/=h/2)<1?a/2*o*o+s:-a/2*(--o*(o-2)-1)+s);break;case"ease-in-out-sine":e.current.scrollLeft=((e,t,i,r)=>-i/2*(Math.cos(Math.PI*e/r)-1)+t)(r,c,d,h);break;case"ease-in-out-expo":e.current.scrollLeft=((e,t,i,r)=>0===e?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(2-Math.pow(2,-10*--e))+t)(r,c,d,h)}var o,s,a;r<h&&requestAnimationFrame(i)},requestAnimationFrame(i)}return()=>{cancelAnimationFrame(i)}},M=e=>{const{title:t,keywords:i,toPath:o,cards:n,mode:s,subNavConfig:a,activeCacheKey:l}=e,c=(0,r.useRef)(null),d=(0,r.useCallback)((e=>{let t;c.current&&(t=B(c,e)),t()}),[c]);return(0,p.jsxs)(w,{children:[(0,p.jsx)(z,{title:t,keywords:i,toPath:o,subNavConfig:a,activeCacheKey:l}),(0,p.jsx)("article",{className:""+("card"===s?"hot-list":"hot-scroll"),ref:c,children:n.map((e=>(0,p.jsx)("div",{children:(0,p.jsx)(H,{imageUrl:e.imageUrl,title:e.title,mode:s})},e.id)))}),"scroll"===s?(0,p.jsxs)("article",{className:"hot-scroll-iterator",children:[(0,p.jsx)("div",{className:"hot-scroll-icon-left",onClick:()=>d("left"),children:(0,p.jsx)(h.A,{})}),(0,p.jsx)("div",{className:"hot-scroll-icon-right",onClick:()=>d("right"),children:(0,p.jsx)(x.A,{})})]}):null]})},V=(0,r.memo)(M);var P=i(5989),U=i(480);const E=e=>{const{hotList:t}=e;return(0,p.jsxs)(y,{children:[(0,p.jsx)(V,{title:"\u70ed\u95e8\u6b4c\u5355\u63a8\u8350",keywords:["\u534e\u8bed","\u6d41\u884c","\u6447\u6eda","\u6c11\u8c23","\u7535\u5b50"],toPath:"/discover/songs",cards:t.slice(0,8),mode:"card",subNavConfig:P.A,activeCacheKey:U.r}),(0,p.jsx)(V,{title:"\u65b0\u789f\u4e0a\u67b6",toPath:"/discover/djradio",cards:t.slice(8,28),mode:"scroll",subNavConfig:P.A,activeCacheKey:U.r})]})},F=(0,r.memo)(E),K=a.Ay.div``,S=()=>(0,p.jsxs)(K,{children:[(0,p.jsx)(z,{title:"\u699c\u5355",activeCacheKey:U.r,toPath:"/discover/ranking",subNavConfig:P.A}),(0,p.jsx)("article",{children:"\u6ca1\u6709\u5185\u5bb9\uff0c\u54c8\u54c8\u54c8(\u6ca1\u6709\u6570\u636e\u5450\uff01\uff01\uff01\ud83d\ude2d\ud83d\ude2d\ud83d\ude2d)"})]}),D=(0,r.memo)(S),R=a.Ay.div`
  width: 100%;
  height: 200px;
  background-color: #f5f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px #b2b0b0 solid;
  box-sizing: border-box;

  .user-login-img {
    height: auto;

    img {
      width: 100%;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .user-login-desc {
    text-align: center;
    font-size: 12px;
    padding: 0 5px;
  }

  .user-login-btn {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: aliceblue;
    font-size: 12px;
    background-color: red;
    margin: 0 auto;
    border: 1px #8c8b8b solid;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }
  }
`,_=()=>(0,p.jsxs)(R,{children:[(0,p.jsx)("div",{className:"user-login-img",children:(0,p.jsx)("img",{src:"https://music.163.com/style/web2/img/dis_vip_card.png",alt:""})}),(0,p.jsx)("p",{className:"user-login-desc",children:"\u767b\u5f55\u7f51\u6613\u4e91\u97f3\u4e50\uff0c\u53ef\u4ee5\u4eab\u53d7\u65e0\u9650\u6536\u85cf\u7684\u4e50\u8da3\uff0c\u5e76\u4e14\u65e0\u9650\u540c\u6b65\u5230\u624b\u673a"}),(0,p.jsx)("article",{className:"user-login-btn",children:"\u7528\u6237\u767b\u5f55"})]}),W=(0,r.memo)(_),Z=a.Ay.div`
  width: 100%;
  margin-top: 5px;
  background-color: #f3f0f0;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;

  .aside-header {
    padding: 5px;
    display: flex;
    justify-content: space-between;

    .left-desc,
    .right-desc {
      font-size: 12px;
    }

    .left-desc {
      font-weight: 600;
    }

    .right-desc {
      font-weight: 200;

      &:hover {
        cursor: pointer;

        span {
          text-decoration-line: underline;
        }
      }
    }
  }
`,q=e=>{const{leftDesc:t,rightDesc:i}=e;return(0,p.jsx)(Z,{children:(0,p.jsxs)("header",{className:"aside-header",children:[(0,p.jsx)("div",{className:"left-desc",children:t}),i&&(0,p.jsx)("div",{className:"right-desc",children:(0,p.jsxs)("span",{children:[i,(0,p.jsx)(x.A,{})]})})]})})},O=(0,r.memo)(q),T=()=>{const e=b(),[t,i]=(0,r.useState)(f.sg.getCache(o.JN)||[]),[n,s]=(0,r.useState)([]);return(0,r.useEffect)((()=>{e((0,v.I8)()).then((e=>{e&&i(e.payload)})).catch((()=>{console.log("\u8bf7\u6c42Banners\u6570\u636e\u5931\u8d25")})),e((0,v.EQ)()).then((e=>{e&&s(e.payload)})).catch((()=>{console.log("\u8bf7\u6c42\u70ed\u95e8\u6b4c\u5355\u6570\u636e\u5931\u8d25")}))}),[e]),(0,p.jsx)(r.Fragment,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(u,{banners:t}),(0,p.jsxs)(j,{children:[(0,p.jsxs)("div",{className:"recommend-left",children:[(0,p.jsx)(F,{hotList:n}),(0,p.jsx)(D,{})]}),(0,p.jsxs)("div",{className:"recommend-right",children:[(0,p.jsx)(W,{}),(0,p.jsx)(O,{leftDesc:"\u5165\u9a7b\u6b4c\u624b",rightDesc:"\u66f4\u591a"}),(0,p.jsx)(O,{leftDesc:"\u70ed\u95e8\u4e3b\u64ad"})]})]})]})})},Y=(0,r.memo)(T)},5989:(e,t,i)=>{i.d(t,{A:()=>r});const r=[{path:"/discover/recommend",name:"recommend",title:"\u63a8\u8350"},{path:"/discover/ranking",name:"ranking",title:"\u6392\u884c\u699c"},{path:"/discover/songs",name:"songs",title:"\u6b4c\u5355"},{path:"/discover/singers",name:"singers",title:"\u6b4c\u624b"},{path:"/discover/djradio",name:"djradio",title:"\u65b0\u789f\u4e0a\u67b6"}]},6431:(e,t,i)=>{e.exports=i.p+"static/media/bannerRight.d83f3ed623c72a08acb2.png"}}]);
//# sourceMappingURL=644.a262fd16.chunk.js.map