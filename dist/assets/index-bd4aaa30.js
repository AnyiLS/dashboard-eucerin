import{j as s,R as h,u as l}from"./index-4e8d4208.js";import{u}from"./index-7da2ae5d.js";const m=()=>{const{useComponents:r}=l(),{Table:n,Button:o}=r(),{useScreensHooks:c}=u(),{useScores:t}=c(),{headings:a,scores:i}=t();return s.jsx(h.Fragment,{children:s.jsx(n,{headings:a,data:i,children:{name:e=>s.jsx("p",{children:e.user.name}),email:e=>s.jsx("p",{children:e.user.email}),phone:e=>s.jsx("p",{children:e.user.phone}),pharmacy_name:e=>s.jsx("p",{children:e.user.pharmacy_name}),chain:e=>s.jsx("p",{children:e.user.chain}),score:e=>s.jsx(o,{color:"green",text:"white",children:parseInt(e.score).toLocaleString("es-CO")})}})})},d=m;export{d as default};
