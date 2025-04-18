"use strict";(self.webpackChunkreact_music_ts=self.webpackChunkreact_music_ts||[]).push([[41],{5989:(e,s,a)=>{a.d(s,{A:()=>t});const t=[{path:"/discover/recommend",name:"recommend",title:"\u63a8\u8350"},{path:"/discover/ranking",name:"ranking",title:"\u6392\u884c\u699c"},{path:"/discover/songs",name:"songs",title:"\u6b4c\u5355"},{path:"/discover/singers",name:"singers",title:"\u6b4c\u624b"},{path:"/discover/djradio",name:"djradio",title:"\u65b0\u789f\u4e0a\u67b6"}]},7041:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var t=a(5043),i=a(9900),r=a(5989),c=a(4886),o=a(7768);const n=a(5464).Ay.div`
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

  .discover-article {
    border-bottom: 1px solid #a4a3a3;
  }
`;var d=a(8386),l=a(480),h=a(351),v=a(579);const m=()=>{const e=l.r,s=l.V,[a,m]=(0,t.useState)(h.sg.getCache(e)||0);(0,t.useEffect)((()=>{const a=h.sg.getCache(s);h.sg.getCache(e)?m(h.sg.getCache(e)):(m(0),h.sg.setCache(e,a))}),[h.sg.getCache(s)]);const g=(0,d.A)((()=>(0,v.jsx)(i.sv,{})));return(0,v.jsx)(t.Fragment,{children:(0,v.jsxs)(n,{children:[(0,v.jsx)("nav",{className:"discover-nav",children:(0,v.jsx)("span",{className:"discover-nav-items",children:r.A.map(((s,t)=>(0,v.jsx)("span",{className:"discover-nav-item "+(a===t?"isActive":""),children:(0,v.jsx)(o.A,{to:s.path,title:s.title,onClick:()=>(s=>{h.sg.getCache(e)&&h.sg.removeCache(e),h.sg.setCache(e,s),m(s)})(t)})},s.name)))})}),(0,v.jsx)("article",{className:"discover-article",children:(0,v.jsx)(t.Suspense,{fallback:(0,v.jsx)(c.A,{}),children:(0,v.jsx)(g,{})})})]})})},g=(0,t.memo)(m)}}]);
//# sourceMappingURL=41.9788e0f6.chunk.js.map