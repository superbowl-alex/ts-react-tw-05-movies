import{c as l,r as o,j as e}from"./index-wJwm7Zkf.js";import{d as x}from"./fetchMovies-sDX7K-fA.js";import{E as m}from"./ErrorMessage-LWgUil_B.js";const f=()=>{const{movieId:a}=l(),[t,i]=o.useState(),[c,n]=o.useState(!1);return o.useEffect(()=>{async function r(){try{if(a){const s=await x(a);i(s.data)}}catch(s){n(!0),console.log(s)}}r()},[a]),o.useEffect(()=>{window.scroll({top:570,left:0,behavior:"smooth"})},[t]),t?t.results.length===0?e.jsx("div",{className:"text-secondaryText text-2xl",children:"We don`t have any reviews for this movie."}):e.jsxs(e.Fragment,{children:[c&&e.jsx(m,{}),e.jsx("ul",{children:t.results.map(({author:r,content:s})=>e.jsxs("li",{children:[e.jsxs("h4",{className:"mb-4 text-secondaryText text-base",children:["Author: ",r]}),e.jsx("h4",{className:"mb-2 text-buttonColor text-xl",children:s})]},r))})]}):null},v=f;export{v as default};