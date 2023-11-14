import{j as o,R as e}from"./index-4e8d4208.js";import{s as r}from"./styled-components.browser.esm-b8878f14.js";const i=r.div`
  ${({open:t})=>t?{display:"flex"}:{display:"none"}}
  ${{position:"fixed",left:"0px",top:"0px",zIndex:"100",height:"100vh",width:"100vw",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.4)"}}
`,s=r.div`
  ${{width:"100%",maxWidth:"800px",borderRadius:"20px","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"1.25rem","--tw-shadow":"0 5px 10px 0 rgba(0,0,0,0.2)","--tw-shadow-colored":"0 5px 10px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}};
  
  @media (max-width: 800px) {
    ${{width:"90%",maxWidth:"100%"}}
  }
`,n=r.h2`
  ${{borderBottomWidth:"1px",borderStyle:"solid","--tw-border-opacity":"1",borderColor:"rgb(238 238 238 / var(--tw-border-opacity))",padding:"10px",fontSize:"25px",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(27 37 75 / var(--tw-text-opacity))"}}  
`,p=r.div`
  ${{display:"flex",justifyContent:"flex-end",borderTopWidth:"1px",borderStyle:"solid","--tw-border-opacity":"1",borderColor:"rgb(238 238 238 / var(--tw-border-opacity))",padding:"10px"}}
`,x=({children:t,title:d,open:a})=>o.jsx(e.Fragment,{children:o.jsx(i,{open:a,children:o.jsxs(s,{children:[o.jsx(n,{children:d}),o.jsx("div",{className:"overflow-auto",children:t&&t.content()}),o.jsx(p,{children:t&&t.bottom()})]})})}),w=x;export{w as default};
