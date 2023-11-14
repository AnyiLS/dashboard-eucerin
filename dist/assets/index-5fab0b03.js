import{j as t,R as g,r as u,u as w}from"./index-4e8d4208.js";import{G as h,u as b}from"./index-7da2ae5d.js";import{s as a}from"./styled-components.browser.esm-b8878f14.js";function f(o){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(o)}const y=a.div`
  ${{position:"fixed",zIndex:"50 !important",display:"flex",minHeight:"100%",width:"300px",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgb(31 43 64 / var(--tw-bg-opacity))",paddingBottom:"2.5rem","--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",transitionProperty:"all",transitionTimingFunction:"linear",transitionDuration:"175ms",":is(.dark &)":{"--tw-bg-opacity":"1 !important",backgroundColor:"rgb(17 28 68 / var(--tw-bg-opacity)) !important","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"},"@media (min-width: 576px)":{backgroundImage:"none"},"@media (min-width: 768px)":{zIndex:"50 !important"},"@media (min-width: 992px)":{zIndex:"50 !important"},"@media (min-width: 1200px)":{zIndex:"0 !important"}}}
  transform: ${({open:o})=>o?"translateX(0)":"translateX(-100%)"};
`,v=a.span`
  ${{position:"absolute",right:"1rem",top:"1rem",display:"block",cursor:"pointer","@media (min-width: 1200px)":{display:"none"}}}
`,k=a.div`
  ${{marginLeft:"auto",marginRight:"auto",marginBottom:"15px",marginTop:"20px",display:"flex",alignItems:"center"}}
  .title-text {
    ${{marginLeft:"0.25rem",marginTop:"0.25rem",display:"flex",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"20px",fontFamily:"Poppins, sans-serif",fontSize:"26px",fontWeight:"700",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(27 37 75 / var(--tw-text-opacity))",":is(.dark &)":{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}}}
  }
`;a.div`
  ${{marginBottom:"1.75rem",marginTop:"58px",height:"1px",backgroundColor:"#374e9a75",":is(.dark &)":{backgroundColor:"rgb(255 255 255 / 0.3)"}}}
`;const j=({open:o,onClose:r})=>{const{useComponents:e}=w(),{Separator:n,LinkSidebar:s}=e(),{useLocalComponentsHooks:p}=b(),{useSidebar:l}=p(),{routes:d}=l();return t.jsxs(y,{open:o,children:[t.jsx(v,{onClick:r,children:t.jsx(f,{})}),t.jsx(k,{children:t.jsxs("div",{className:"title-text",children:[t.jsx("img",{src:"/logo.png",className:"rounded-[100%] w-[100px]",alt:""}),t.jsx("h1",{className:"text-white capitalize text-[32px] font-bold",children:"Administrador"})]})}),t.jsx("ul",{className:"mb-auto pt-1",children:d.map((i,c)=>t.jsxs(g.Fragment,{children:[t.jsx(n,{description:i.title}),i.links.map((m,x)=>u.createElement(s,{...m,key:x}))]},c))})]})},S=j;export{S as default};