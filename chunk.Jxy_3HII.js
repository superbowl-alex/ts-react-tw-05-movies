import{G as m,c as u,r,j as t}from"./index.5sZXc0PI.js";import{c as x}from"./chunk.sDX7K-fA.js";import{E as f}from"./chunk.osAA7a5d.js";function h(s){return m({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z"}}]})(s)}const v=()=>{const{movieId:s}=u(),[a,n]=r.useState(),[i,d]=r.useState(!1);return r.useEffect(()=>{async function o(){if(s)try{const c=(await x(s)).data.cast;n(c)}catch(e){d(!0),console.log(e)}}o()},[s]),r.useEffect(()=>{window.scroll({top:570,left:0,behavior:"smooth"})},[a]),a?a.length===0?t.jsx("div",{children:"Sorry, but we have no information about the actors of this movie."}):t.jsxs(t.Fragment,{children:[i&&t.jsx(f,{}),t.jsx("div",{className:"max-w-calc-vw-48 grid grid-cols-cast-template gap-4 my-0 p-0 mx-auto",children:a.map(({id:o,original_name:e,character:c,profile_path:l})=>t.jsxs("div",{className:"flex flex-col items-start rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 hover:scale-[1.02]",children:[l?t.jsx("img",{className:"w-full h-auto object-cover",src:`https://www.themoviedb.org/t/p/w200${l}`,alt:e,loading:"lazy"}):t.jsx(h,{className:"w-full mt-[70px] object-cover fill-secondaryBacground",size:230}),t.jsx("div",{className:"mt-auto p-2 text-xl text-secondaryText",children:e}),t.jsxs("div",{className:"p-2 text-xl text-secondaryText",children:["Character: ",c]})]},o))})]}):null},j=v;export{j as default};
