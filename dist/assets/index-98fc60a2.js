import{R as p,j as e,l as a}from"./index-4e8d4208.js";import{s as r}from"./styled-components.browser.esm-b8878f14.js";const u=r.table`
  ${{display:"table",width:"100%",borderCollapse:"separate","--tw-border-spacing-x":"0px","--tw-border-spacing-y":"0px",borderSpacing:"var(--tw-border-spacing-x) var(--tw-border-spacing-y)",overflowX:"scroll"}}
  white-space: nowrap;
`,y=r.thead`
  ${{display:"table-header-group",textTransform:"uppercase"}}
`,j=r.tr`
  ${{display:"table-row",verticalAlign:"middle",color:"inherit"}};
  outline: 0;
  
  th {
    ${{position:"sticky",top:"0px",zIndex:"2",display:"table-cell",minWidth:"170px",borderBottomWidth:"1px",borderStyle:"solid",borderBottomColor:"rgba(58,53,65,0.12)","--tw-bg-opacity":"1",backgroundColor:"rgb(249 250 252 / var(--tw-bg-opacity))",padding:"1rem",textAlign:"left",fontSize:"0.75rem",lineHeight:"1.5rem",fontWeight:"600",letterSpacing:"0.13px",color:"rgba(58,53,65,0.87)"}};
    vertical-align: inherit;
  }
`,h=r.tbody`
  ${{display:"table-row-group"}}
  
  tr {
    ${{display:"table-row",verticalAlign:"middle",color:"inherit"}};
    outline: 0;
  }
  
  td {
    ${{display:"table-cell",borderBottomWidth:"1px",borderStyle:"solid",borderBottomColor:"rgba(58,53,65,0.12)",padding:"1rem",textAlign:"left",fontSize:"0.875rem",lineHeight:"1.5",fontWeight:"400",letterSpacing:"0.25px",color:"rgba(58,53,65,0.68)"}};
    vertical-align: inherit;
  }
`,v=r.div`
  ${{overflow:"auto",fontSize:"0.875rem",lineHeight:"1.25rem",color:"rgba(58,53,65,0.87)"}}
  
  .paginator {
    ${{position:"relative",display:"flex",minHeight:"52px",alignItems:"center",paddingLeft:"0.75rem",paddingRight:"0.125rem",fontSize:"0.875rem",lineHeight:"1.25rem",color:"rgba(58,53,65,0.87)"}}
    
    .spacer {
      ${{flex:"1 1 100%"}}
    }
    
    .row-description {
      ${{flexShrink:"0",fontSize:"0.875rem",lineHeight:"1.5",fontWeight:"400",letterSpacing:"0.15px",color:"rgba(58,53,65,0.68)"}}
    }
    
    .items {
      ${{flexShrink:"0",fontSize:"0.875rem",lineHeight:"1.5",fontWeight:"400",letterSpacing:"0.15px",color:"rgba(58,53,65,0.68)"}};
    }
    
    .buttons {
      ${{marginLeft:"1.25rem",display:"flex"}}
      
      .left-button, .right-button {
        ${{position:"relative",margin:"0px",boxSizing:"border-box",display:"inline-flex",cursor:"pointer",alignItems:"center",justifyContent:"center",overflow:"visible",borderRadius:"50%",borderWidth:"0px",backgroundColor:"transparent",padding:"0.5rem",textAlign:"center",verticalAlign:"middle",fontSize:"1.5rem",lineHeight:"2rem",color:"rgba(58,53,65,0.3)",textDecorationLine:"none",transitionProperty:"background-color",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",transitionDelay:"0ms"}};
        outline: 0;
        
        svg {
          ${{display:"inline-block",height:"1em",width:"1em",flexShrink:"0",fill:"rgba(58,53,65,0.3)",fontSize:"1.5rem",lineHeight:"2rem",transitionProperty:"fill",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",transitionDelay:"0ms"}}
        }
      }
    }
  }
`,S=({headings:d,data:t,children:n})=>{const[i,c]=p.useState(1),[x,b]=p.useState(t.length/10),g=(i-1)*10,m=g+10;return console.log("children: ",t),e.jsxs("div",{className:"rounded-[10px] mt-[10px] shadow-[0_5px_10px_0_rgba(0,0,0,0.2)] bg-white",children:[e.jsx("div",{className:"relative overflow-x-auto",children:e.jsxs(u,{children:[e.jsx(y,{children:e.jsx(j,{children:a.map(Object.values(d),(o,l)=>e.jsx("th",{children:o},l))})}),t&&t.length>0?e.jsx(h,{children:a.map(t&&t.slice(g,m),(o,l)=>e.jsx("tr",{children:a.map(Object.keys(d),(s,f)=>e.jsx("td",{children:e.jsx("p",{className:"text-navy-800 font-medium",children:n&&n[s]?n[s](o):o[s]})},f))},l))}):e.jsx(h,{children:e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:"Opsss...!, No hay datos..."})})})]})}),e.jsx(v,{children:e.jsxs("div",{className:"paginator",children:[e.jsx("div",{className:"spacer"}),e.jsx("p",{className:"items",children:t&&t.length===0?"0 - 0 de 0":`${(i-1)*10+1} - ${Math.min(i*10,t?t.length:0)} de ${t?t.length:0}`}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:"left-button",onClick:()=>{i-1>0&&c(i-1)},children:e.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"KeyboardArrowLeftIcon",children:e.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})})}),e.jsx("button",{className:"right-button",onClick:()=>{b(Math.round(t.length/10)),i+1<=x&&c(i+1)},children:e.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"KeyboardArrowRightIcon",children:e.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"})})})]})]})})]})},z=S;export{z as default};
