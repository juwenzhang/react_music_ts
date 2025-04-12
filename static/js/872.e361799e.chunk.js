"use strict";(self.webpackChunkreact_music_ts=self.webpackChunkreact_music_ts||[]).push([[872],{6431:(e,t,i)=>{e.exports=i.p+"static/media/bannerRight.d83f3ed623c72a08acb2.png"},7789:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var r=i(5043),o=i(280),n=i(5366);const s=i.p+"static/media/default.42982e4a7b20f1188abc.png";var a=i(5464);const l=a.Ay.div`
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
    filter: blur(20px);
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
`;var h=i(682),x=i(9905);const p=async e=>new Promise(((t,i)=>{const r=new Image;r.crossOrigin="Anonymous",r.src=e,r.onload=()=>{const e=document.createElement("canvas"),o=e.getContext("2d");if(!o)return void i("Failed to get canvas context");e.width=r.width,e.height=r.height,o.drawImage(r,0,0);const n=o.getImageData(0,0,e.width,e.height).data,s={};for(let t=0;t<n.length;t+=4){const e=n[t],i=n[t+1],r=n[t+2];if(n[t+3]<128)continue;const o=`rgb(${e},${i},${r})`;s[o]=(s[o]||0)+1}let a="",l=0;for(const t in s)s[t]>l&&(a=t,l=s[t]);t(a)},r.onerror=()=>{i("Failed to load image")}}));var g=i(579);const m=e=>{const{banners:t}=e,a=new URL(i(6431),i.b).href,m=(0,r.useRef)(null),[u,f]=(0,r.useState)([]),[b,v]=(0,r.useState)(0),[j,y]=(0,r.useState)("#fff");(0,r.useEffect)((()=>{setTimeout((()=>{p(t[b].imageUrl).then((e=>{y(e)}))}),0)}),[b,t]),(0,r.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const i=Number(t.target.getAttribute("data-index"));u.includes(i)||f((e=>[...e,i])),e.unobserve(t.target)}}))}));return document.querySelectorAll("img[data-index]").forEach((t=>{e.observe(t)})),()=>{e.disconnect()}}),[u]);const w=async e=>{if(m.current){var i,r;const o=await p(t[b].imageUrl);return y(o),e?null===(i=m.current)||void 0===i?void 0:i.next():null===(r=m.current)||void 0===r?void 0:r.prev()}};return(0,g.jsx)(l,{$BannerImageColor:j,children:(0,g.jsxs)(c,{$BannerImageWidth:o.ud,$BannerImageHeight:o.FK,$BannerRightImage:a,children:[(0,g.jsxs)("div",{className:"banner-items",children:[(0,g.jsx)(n.A,{autoplay:!0,autoplaySpeed:5e3,ref:m,effect:"fade",dots:!1,afterChange:e=>{v(e)},beforeChange:(e,t)=>{v(t)},children:t&&t.map(((e,t)=>(0,g.jsx)("div",{className:"banner-item",children:(0,g.jsx)("a",{href:e.imageUrl,children:(0,g.jsx)("img",{className:"banner-item-img",src:e.imageUrl,"data-index":t,alt:e.title,title:e.title,"data-src":s})})},e.id)))}),(0,g.jsx)("ul",{className:"banner-item-dots",children:t.length&&t.map(((e,t)=>(0,g.jsx)("li",{children:(0,g.jsx)("span",{className:"item "+(b===t?"is-active":""),onClick:()=>(e=>{var t;m.current&&(null===(t=m.current)||void 0===t||t.goTo(e),v(e))})(t)})},`${e}-${t}`)))})]}),(0,g.jsx)("div",{className:"banner-right-img"}),(0,g.jsxs)(d,{children:[(0,g.jsx)("div",{className:"btn-left",onClick:()=>w(!1),children:(0,g.jsx)(h.A,{})}),(0,g.jsx)("div",{className:"btn-right",onClick:()=>w(!0),children:(0,g.jsx)(x.A,{})})]})]})})},u=(0,r.memo)(m);var f=i(351);const b=i(3003).wA;var v=i(3287);const j=a.Ay.div`
  border: 1px solid #d3d3d3;
  width: 980px;
  display: flex;
  margin: 10px auto;

  .recommend-left,
  .recommend-right {
    background-color: #e7dcdc;
    padding: 20px;
    box-sizing: border-box;
  }

  .recommend-left {
    width: 729px;
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
    margin-top: 10px;
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
    top: 0;
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
`,$=e=>{const{title:t,keywords:i,toPath:r}=e,o=(0,k.Zp)();return(0,g.jsxs)(C,{children:[(0,g.jsxs)("div",{className:"section-header-left",children:[(0,g.jsx)("h3",{className:"section-header-title",children:t}),(0,g.jsx)("div",{className:"section-header-keywords",children:null===i||void 0===i?void 0:i.map(((e,t)=>(0,g.jsx)("div",{className:"section-header-keyword",children:(0,g.jsx)("span",{className:"section-header-keyword-text",children:e})},t)))})]}),(0,g.jsxs)("div",{className:"section-header-right",onClick:()=>{o(null!==r&&void 0!==r?r:"/")},children:[(0,g.jsx)("div",{className:"section-header-right-more",children:"\u66f4\u591a"}),(0,g.jsx)("div",{className:"section-header-right-icon",children:(0,g.jsx)(N.A,{})})]})]})},A=(0,r.memo)($),z=a.Ay.div`
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
        position: absolute;
        bottom: 0;
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
    height: 40px;
    box-sizing: border-box;
    transition: all 500ms ease;
    // 实现文本溢出的解决方案吧
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover {
      text-decoration-line: underline;
    }
  }
`;var I=i(7677);const L=e=>{const{imageUrl:t,title:i}=e;return(0,g.jsxs)(z,{children:[(0,g.jsxs)("div",{className:"card-top",children:[(0,g.jsx)("img",{src:t,width:"140px",alt:"\u56fe\u7247\u6b63\u5728\u52a0\u8f7d\u4e2d\u2026\u2026"}),(0,g.jsx)("div",{className:"card-top-cover",children:(0,g.jsxs)("span",{className:"card-play-info",children:[(0,g.jsx)("span",{className:"card-play-icon",children:(0,g.jsxs)("svg",{width:"25",height:"25",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,g.jsx)("path",{d:"M4 28C4 26.8954 4.89543 26 6 26H10V38H6C4.89543 38 4 37.1046 4 36V28Z",fill:"none"}),(0,g.jsx)("path",{d:"M38 26H42C43.1046 26 44 26.8954 44 28V36C44 37.1046 43.1046 38 42 38H38V26Z",fill:"none"}),(0,g.jsx)("path",{d:"M10 36V24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24V36M10 26H6C4.89543 26 4 26.8954 4 28V36C4 37.1046 4.89543 38 6 38H10V26ZM38 26H42C43.1046 26 44 26.8954 44 28V36C44 37.1046 43.1046 38 42 38H38V26Z",stroke:"#1b1a1a",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,g.jsx)("path",{d:"M16 32H20L22 26L26 38L28 32H32",stroke:"#1b1a1a",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})}),(0,g.jsx)("span",{className:"play-icon",children:(0,g.jsx)(I.A,{})})]})})]}),(0,g.jsx)("div",{className:"card-bottom",children:i})]})},H=(0,r.memo)(L),B=e=>{const{title:t,keywords:i,toPath:o,cards:n,mode:s}=e,a=(0,r.useRef)(null),l=e=>{if(a.current){const t=210;let i=a.current.scrollLeft;"left"===e?i-=t:"right"===e&&(i+=t);let r=0;const o=a.current.scrollLeft,n=i-o,s=300,l=e=>{r||(r=e);const t=e-r;var i,c,d;a.current.scrollLeft=(i=t,c=o,d=n,(i/=s/2)<1?d/2*i*i+c:-d/2*(--i*(i-2)-1)+c),t<s&&requestAnimationFrame(l)};requestAnimationFrame(l)}};return(0,g.jsxs)(w,{children:[(0,g.jsx)(A,{title:t,keywords:i,toPath:o}),(0,g.jsx)("div",{className:""+("card"===s?"hot-list":"hot-scroll"),ref:a,children:n.map((e=>(0,g.jsx)("div",{children:(0,g.jsx)(H,{imageUrl:e.imageUrl,title:e.title})},e.id)))}),"scroll"===s?(0,g.jsxs)("div",{className:"hot-scroll-iterator",children:[(0,g.jsx)("div",{className:"hot-scroll-icon-left",onClick:()=>l("left"),children:(0,g.jsx)(h.A,{})}),(0,g.jsx)("div",{className:"hot-scroll-icon-right",onClick:()=>l("right"),children:(0,g.jsx)(x.A,{})})]}):null]})},V=(0,r.memo)(B),U=e=>{const{hotList:t}=e;return(0,g.jsxs)(y,{children:[(0,g.jsx)(V,{title:"\u70ed\u95e8\u6b4c\u5355\u63a8\u8350",keywords:["\u534e\u8bed","\u6d41\u884c","\u6447\u6eda","\u6c11\u8c23","\u7535\u5b50"],toPath:"/discover/ranking",cards:t.slice(0,8),mode:"card"}),(0,g.jsx)(V,{title:"\u65b0\u789f\u4e0a\u67b6",toPath:"/discover/djradio",cards:t.slice(8,28),mode:"scroll"})]})},E=(0,r.memo)(U),S=()=>{const e=b(),[t,i]=(0,r.useState)(f.sg.getCache(o.JN)||[]),[n,s]=(0,r.useState)([]);return(0,r.useEffect)((()=>{e((0,v.I8)()).then((e=>{e&&i(e.payload)})).catch((()=>{console.log("\u8bf7\u6c42Banners\u6570\u636e\u5931\u8d25")})),e((0,v.EQ)()).then((e=>{e&&s(e.payload)})).catch((()=>{console.log("\u8bf7\u6c42\u70ed\u95e8\u6b4c\u5355\u6570\u636e\u5931\u8d25")}))}),[e]),(0,g.jsx)(r.Fragment,{children:(0,g.jsxs)("div",{children:[(0,g.jsx)(u,{banners:t}),(0,g.jsxs)(j,{children:[(0,g.jsx)("div",{className:"recommend-left",children:(0,g.jsx)(E,{hotList:n})}),(0,g.jsx)("div",{className:"recommend-right",children:"right"})]})]})})},F=(0,r.memo)(S)}}]);
//# sourceMappingURL=872.e361799e.chunk.js.map