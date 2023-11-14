import{j as o,L as p}from"./index-4e8d4208.js";import{u as l}from"./index-7da2ae5d.js";import{s as i}from"./styled-components.browser.esm-b8878f14.js";const x=i.li`
  ${{marginTop:"3px",marginBottom:"3px",display:"flex",height:"36px",cursor:"pointer",alignItems:"center",gap:"20px"}}
  ${({active:t})=>t?{fontWeight:"700","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",":is(.dark &)":{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}}:{fontWeight:"500","--tw-text-opacity":"1",color:"rgb(163 174 208 / var(--tw-text-opacity))"}}
  
  p {
    ${({active:t})=>t?{fontWeight:"700","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}:{fontWeight:"400","--tw-text-opacity":"1",color:"rgb(173 181 189 / var(--tw-text-opacity))"}}
  }
`,g=i.span`
  ${{marginLeft:"1rem",display:"flex",lineHeight:"20px"}}
  ${({active:t})=>t?{fontWeight:"700","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",":is(.dark &)":{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}}:{fontWeight:"500","--tw-text-opacity":"1",color:"rgb(163 174 208 / var(--tw-text-opacity))"}}
`,d=i.div`
  ${{position:"absolute",right:"0px",top:"1px",height:"2.25rem",width:"0.25rem",borderRadius:"0.5rem"}}
  background-color: ${({active:t})=>t?"white":"transparent"}; // Cambia el color de fondo aquí
`,m=({to:t,icon:a,name:c,path:e})=>{const{useComponentsHooks:s}=l(),{useLinkSidebar:n}=s(),{activeRoute:r}=n();return o.jsx("li",{children:o.jsx(p,{to:t,children:o.jsxs("div",{className:"relative flex hover:cursor-pointer",children:[o.jsxs(x,{active:r(e),children:[o.jsx(g,{active:r(e),children:a||null}),o.jsx("p",{children:c})]}),r(e)?o.jsx(d,{active:r(e)}):null]})})})},v=m;export{v as default};
