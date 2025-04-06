"use strict";(self.webpackChunkreact_music_ts=self.webpackChunkreact_music_ts||[]).push([[494],{4895:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var r=n(5043),i=n(280),a=n(5366);const s=n.p+"static/media/default.42982e4a7b20f1188abc.png";var o=n(5464);const l=o.Ay.div`
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
    background: #935a5a;
    filter: blur(20px);
    z-index: 0;
  }
`,c=o.Ay.div`
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
    filter: blur(1px);

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
`,d=o.Ay.div`
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
`;var u=n(682),g=n(9905),h=n(579);const m=e=>{const{banners:t}=e,o=new URL(n(6431),n.b).href,m=(0,r.useRef)(null),[b,p]=(0,r.useState)([]),[x,f]=(0,r.useState)(0);(0,r.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const n=Number(t.target.getAttribute("data-index"));b.includes(n)||p((e=>[...e,n])),e.unobserve(t.target)}}))}));return document.querySelectorAll("img[data-index]").forEach((t=>{e.observe(t)})),()=>{e.disconnect()}}),[b]);const v=e=>{var t,n;if(m.current)return e?null===(t=m.current)||void 0===t?void 0:t.next():null===(n=m.current)||void 0===n?void 0:n.prev()};return(0,h.jsx)(l,{children:(0,h.jsxs)(c,{$BannerImageWidth:i.ud,$BannerImageHeight:i.FK,$BannerRightImage:o,children:[(0,h.jsxs)("div",{className:"banner-items",children:[(0,h.jsx)(a.A,{autoplay:!0,autoplaySpeed:5e3,ref:m,effect:"fade",dots:!1,afterChange:e=>{f(e)},beforeChange:(e,t)=>{f(t)},children:t&&t.map(((e,t)=>(0,h.jsx)("div",{className:"banner-item",children:(0,h.jsx)("a",{href:e.imageUrl,children:(0,h.jsx)("img",{className:"banner-item-img",src:e.imageUrl,"data-index":t,alt:e.title,title:e.title,"data-src":s})})},e.id)))}),(0,h.jsx)("ul",{className:"banner-item-dots",children:t.length&&t.map(((e,t)=>(0,h.jsx)("li",{children:(0,h.jsx)("span",{className:"item "+(x===t?"is-active":""),onClick:()=>(e=>{var t;m.current&&(null===(t=m.current)||void 0===t||t.goTo(e),f(e))})(t)})},`${e}-${t}`)))})]}),(0,h.jsx)("div",{className:"banner-right-img"}),(0,h.jsxs)(d,{children:[(0,h.jsx)("div",{className:"btn-left",onClick:()=>v(!1),children:(0,h.jsx)(u.A,{})}),(0,h.jsx)("div",{className:"btn-right",onClick:()=>v(!0),children:(0,h.jsx)(g.A,{})})]})]})})},b=(0,r.memo)(m);var p=n(351);const x=n(3003).wA;var f=n(9972);const v=()=>{const e=x(),[t,n]=(0,r.useState)(p.sg.getCache(i.JN)||[]);return(0,r.useEffect)((()=>{e((0,f.I8)()).then((e=>{e&&n(e.payload)})).catch((()=>{console.log("\u8bf7\u6c42Banners\u6570\u636e\u5931\u8d25")}))}),[e]),(0,h.jsx)(r.Fragment,{children:(0,h.jsx)("div",{children:(0,h.jsx)(b,{banners:t})})})},j=(0,r.memo)(v)},6431:(e,t,n)=>{e.exports=n.p+"static/media/bannerRight.d83f3ed623c72a08acb2.png"}}]);
//# sourceMappingURL=494.84ca0dd1.chunk.js.map