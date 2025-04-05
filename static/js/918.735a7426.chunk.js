"use strict";(self.webpackChunkreact_music_ts=self.webpackChunkreact_music_ts||[]).push([[918],{918:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var t=a(43),i=a(900);const r=[{path:"/discover/recommend",name:"recommend",title:"\u63a8\u8350"},{path:"/discover/ranking",name:"ranking",title:"\u6392\u884c\u699c"},{path:"/discover/songs",name:"songs",title:"\u6b4c\u5355"},{path:"/discover/singers",name:"singers",title:"\u6b4c\u624b"},{path:"/discover/djradio",name:"djradio",title:"\u65b0\u789f\u4e0a\u67b6"}];var c=a(886),n=a(768);const o=a(464).Ay.div`
  a {
    color: white;
  }
  .discover-nav {
    background-color: ${e=>{var s;return null===(s=e.theme)||void 0===s?void 0:s.color.primary}};
    height: 40px;
    font-size: 14px;
    .discover-nav-items {
      width: 1300px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      .discover-nav-item {
        padding: 5px;
        border: 1px solid #333333;
        border-radius: 15px;
        transition: all 0.3s ease;
        margin: 0 40px;
      }
      .discover-nav-item:hover {
        border: 1px solid white;
      }
      .discover-nav-item.isActive {
        border: 1px solid white;
        background-color: ${e=>e.theme.color.secondary};
        a {
          color: black;
        }
      }
    }
  }
`;var d=a(480),l=a(351),h=a(579);const v=()=>{const e=d.r,s=d.V,[a,v]=(0,t.useState)(l.sg.getCache(e)||0);(0,t.useEffect)((()=>{const a=l.sg.getCache(s);l.sg.getCache(e)?v(l.sg.getCache(e)):(v(0),l.sg.setCache(e,a)),0===a&&l.sg.setCache(e,0)}),[]);return(0,h.jsx)(t.Fragment,{children:(0,h.jsxs)(o,{children:[(0,h.jsx)("nav",{className:"discover-nav",children:(0,h.jsx)("span",{className:"discover-nav-items",children:r.map(((s,t)=>(0,h.jsx)("span",{className:"discover-nav-item "+(a===t?"isActive":""),children:(0,h.jsx)(n.A,{to:s.path,title:s.title,onClick:()=>(s=>{l.sg.getCache(e)&&l.sg.removeCache(e),l.sg.setCache(e,s),v(s)})(t)})},s.name)))})}),(0,h.jsx)("article",{className:"discover-article",children:(0,h.jsx)(t.Suspense,{fallback:(0,h.jsx)(c.A,{}),children:(0,h.jsx)(i.sv,{})})})]})})},m=(0,t.memo)(v)}}]);
//# sourceMappingURL=918.735a7426.chunk.js.map