import{R as x,j as t,a as b,b as f,N as j,u as v}from"./index-4e8d4208.js";import{u as w}from"./index-7da2ae5d.js";import{s as e}from"./styled-components.browser.esm-b8878f14.js";const C=e.div`
  ${{display:"flex",height:"100%",width:"100%"}}
`,R=e.div`
  ${{height:"100%",width:"100%","--tw-bg-opacity":"1",backgroundColor:"rgb(244 247 254 / var(--tw-bg-opacity))",":is(.dark &)":{"--tw-bg-opacity":"1 !important",backgroundColor:"rgb(11 20 55 / var(--tw-bg-opacity)) !important"}}}
`,y=e.main`
  ${{marginLeft:"12px",marginRight:"12px",height:"100%",flex:"none",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms","@media (min-width: 768px)":{paddingRight:"1rem"},"@media (min-width: 1200px)":{marginLeft:"313px"}}}
`,N=e.div`
  ${{height:"100%"}}
`,S=({...i})=>{document.documentElement.dir="ltr";const{useLocalComponents:o}=v(),{Navbar:a,Sidebar:s}=o(),{useLayoutsHooks:r}=w(),{useAdmin:d}=r(),{open:c,currentRoute:l,handleCloseSidebar:m,handleOpenSidebar:u,getActiveNavbar:p,routes:n,getRoutes:h}=d();return x.useEffect(()=>{let g=JSON.parse(localStorage.getItem("persist:root"));JSON.parse(g.auth).auth.token||(window.location.href="/auth/login")},[]),t.jsxs(C,{children:[t.jsx(s,{open:c,onClose:m}),t.jsx(R,{children:t.jsx(y,{children:t.jsxs(N,{children:[t.jsx(a,{onOpenSidenav:u,brandText:l,secondary:p(n()),...i}),t.jsx("div",{className:"pt-[20px] mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2",children:t.jsxs(b,{children:[h(n()),t.jsx(f,{path:"/",element:t.jsx(j,{to:"/admin/user",replace:!0})})]})}),t.jsx("div",{className:"p-3"})]})})})]})},O=S;export{O as default};
