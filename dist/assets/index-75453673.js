import{j as i}from"./index-4e8d4208.js";import{s as n}from"./styled-components.browser.esm-b8878f14.js";const s=n.button`
  ${({color:o})=>`background: ${o};`};
  ${({text:o})=>`color: ${o??"white"};`};
  ${{position:"relative",margin:"0px",boxSizing:"border-box",display:"inline-flex",minWidth:"64px",cursor:"pointer",userSelect:"none",alignItems:"center",justifyContent:"center",borderRadius:"5px",borderWidth:"0px",paddingLeft:"1.375rem",paddingRight:"1.375rem",paddingTop:"0.46875rem",paddingBottom:"0.46875rem",verticalAlign:"middle",fontWeight:"600",textTransform:"uppercase",lineHeight:"1.71",letterSpacing:"0.3px"}};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  outline: 0;
  
  &:hover {
    ${{textDecorationLine:"none","--tw-shadow":"0px 6px 18px -8px rgba(58,53,65,0.56)","--tw-shadow-colored":"0px 6px 18px -8px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}};
  }
`,a=({children:o,onClick:t,color:e,text:r})=>i.jsx(s,{onClick:t,color:e,text:r,children:o}),c=a;export{c as default};
