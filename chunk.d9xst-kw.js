import{a as i,j as s,N as c}from"./index.5sZXc0PI.js";import{B as n}from"./chunk.Vq9CPxgK.js";const x=({movie:t})=>{const{id:a,original_title:e,poster_path:o}=t,l=i(),r="/movies";return s.jsx("li",{className:"rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.02]",children:s.jsxs(c,{className:"h-full flex flex-col items-start",to:`${r}/${a}`,state:{from:l},children:[o?s.jsx("img",{className:"w-full object-cover",src:`https://www.themoviedb.org/t/p/w300${o}`,alt:e,loading:"lazy"}):s.jsx(n,{className:"w-full object-cover fill-secondaryBacground",size:400}),s.jsxs("div",{className:"p-2 text-secondaryText text-2xl",children:[" ",e]})]})})};export{x as M};