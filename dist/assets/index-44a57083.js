import{j as s,R as i,u as m}from"./index-4e8d4208.js";import{u}from"./index-7da2ae5d.js";import{h as d}from"./moment-fbc5633a.js";const l=()=>{const{useComponents:e}=m(),{Table:t,Button:p}=e(),{useScreensHooks:o}=u(),{useActiveUsers:r}=o(),{headings:n,users:a}=r();return s.jsx(i.Fragment,{children:s.jsx(t,{headings:n,data:a,children:{created_at:c=>s.jsx("p",{children:d(c.created_at).format("YYYY-MM-DD H:mm:ss")})}})})},j=l;export{j as default};