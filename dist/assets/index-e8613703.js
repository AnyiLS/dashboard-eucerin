import{j as t,u as p}from"./index-4e8d4208.js";import{u as c}from"./index-7da2ae5d.js";import{s as e}from"./styled-components.browser.esm-b8878f14.js";const l=e.div`
    ${{marginBottom:"4rem",marginTop:"4rem",display:"flex",height:"80vh",width:"100%",alignItems:"center",justifyContent:"center",paddingLeft:"0.5rem",paddingRight:"0.5rem","@media (min-width: 768px)":{marginLeft:"0px",marginRight:"0px",paddingLeft:"0px",paddingRight:"0px"},"@media (min-width: 992px)":{marginBottom:"2.5rem",alignItems:"center",justifyContent:"center"}}}
`,g=e.div`
    ${{width:"100%",maxWidth:"100%",flexDirection:"column",alignItems:"center","@media (min-width: 768px)":{paddingLeft:"1rem"},"@media (min-width: 992px)":{paddingLeft:"0px"},"@media (min-width: 1200px)":{maxWidth:"420px"}}}
`,x=e.h4`
  ${{marginBottom:"0.625rem",fontSize:"2.25rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(27 37 75 / var(--tw-text-opacity))",":is(.dark &)":{"--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"}}}
`,h=e.p`
  ${{marginBottom:"2.25rem",marginLeft:"0.25rem",fontSize:"1rem",lineHeight:"1.5rem","--tw-text-opacity":"1",color:"rgb(163 174 208 / var(--tw-text-opacity))"}}
`,u=()=>{const{useComponents:r}=p(),{Button:a,Input:i}=r(),{useScreensHooks:o}=c(),{useLogin:m}=o(),{register:n,handleLogin:s,handleSubmit:d}=m();return t.jsx(l,{children:t.jsxs(g,{children:[t.jsx(x,{children:"Sign In"}),t.jsx(h,{children:"Enter your email and password to sign in!"}),t.jsx(i,{variant:"auth",extra:"mb-3",label:"Email*",placeholder:"mail@simmmple.com",type:"email",register:n,name:"email"}),t.jsx(i,{variant:"auth",extra:"mb-3",label:"Password*",placeholder:"Min. 8 characters",type:"password",register:n,name:"password"}),t.jsx(a,{color:"#374e9a",text:"white",onClick:d(s),children:"Ingresar"})]})})},j=u;export{j as default};