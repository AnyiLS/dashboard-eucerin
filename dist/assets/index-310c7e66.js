import{L as r,R as d,j as i,a as s,b as m,N as g}from"./index-4e8d4208.js";import{r as h,u as p}from"./index-7da2ae5d.js";import{s as t}from"./styled-components.browser.esm-b8878f14.js";const l=t.div`
    ${{position:"relative",float:"right",height:"100%",minHeight:"100vh",width:"100%","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",":is(.dark &)":{"--tw-bg-opacity":"1",backgroundColor:"rgb(11 20 55 / var(--tw-bg-opacity))"}}}
`,c=t.main`
  ${{marginLeft:"auto",marginRight:"auto",minHeight:"100vh"}}
`,u=t.div`
  ${{position:"relative",marginLeft:"auto",marginRight:"auto",display:"flex",minHeight:"100%",width:"100%",flexDirection:"column",justifyContent:"center",paddingTop:"3rem","@media (min-width: 768px)":{maxWidth:"75%"},"@media (min-width: 992px)":{height:"100vh",maxWidth:"100%",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0px"},"@media (min-width: 1200px)":{height:"100vh",paddingLeft:"70px",paddingRight:"0px"}}}
`,x=t.div`
  ${{marginBottom:"auto",display:"flex",flexDirection:"column",alignItems:"center",paddingLeft:"1.25rem",paddingRight:"1.25rem","@media (min-width: 768px)":{paddingLeft:"3rem",paddingRight:"0px"},"@media (min-width: 992px)":{maxWidth:"48%",paddingLeft:"0px"},"@media (min-width: 1200px)":{maxWidth:"48%"}}}
`;t(r)`
  ${{marginLeft:"auto",marginRight:"auto",marginTop:"0px",display:"flex",height:"fit-content",width:"max-content",alignItems:"center",":hover":{cursor:"pointer"},"@media (min-width: 992px)":{paddingTop:"2.5rem"}}}
`;t.svg`
  ${{height:"3rem",width:"2rem"}}
`;t.p`
  ${{marginLeft:"0.75rem",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(163 174 208 / var(--tw-text-opacity))"}}
`;const f=t.div`
  ${{position:"absolute",right:"0px",display:"none",height:"100%",minHeight:"100vh","@media (min-width: 768px)":{display:"block"},"@media (min-width: 992px)":{width:"50vw"},"@media (min-width: 1320px)":{width:"50vw"}}}
`,w=t.div`
  ${{position:"absolute",display:"flex",height:"100%",width:"100%",alignItems:"flex-end",justifyContent:"center",borderRadius:"0 0 0 200px",backgroundSize:"cover",backgroundPosition:"center"}};
  background-image: url(${({image:e})=>e});
  iframe {  
    ${{borderRadius:"0 0 0 200px"}}

    .spline-watermark {
      display: none !important;
    }
  }
`,v=({})=>{const{useLayoutsHooks:e}=p(),{useAuth:a}=e(),{getRoutes:n}=a();return d.useEffect(()=>{let o=JSON.parse(localStorage.getItem("persist:root"));JSON.parse(o.auth??"").auth.token&&(window.location.href="/admin/inactive-users")},[]),i.jsx(l,{children:i.jsx(c,{children:i.jsxs(u,{children:[i.jsx(x,{children:i.jsxs(s,{children:[n(h()),i.jsx(m,{path:"/",element:i.jsx(g,{to:"/auth/login",replace:!0})})]})}),i.jsx(f,{children:i.jsx(w,{image:"/logo.png"})})]})})})},L=v;export{L as default};
