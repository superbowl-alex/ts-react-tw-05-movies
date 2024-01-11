import{r as m,t as T,j as M,u as ue,L as de}from"./index.V_D1yhwf.js";import{M as me}from"./chunk.MovieCard.cqYbDZc8.js";import{a as fe}from"./chunk.fetchMovies.sDX7K-fA.js";import{E as pe}from"./chunk.ErrorMessage.Gi5m0jA3.js";import"./chunk.index.esm.fscZEIMe.js";function ie(e){var t,s,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=ie(e[t]))&&(o&&(o+=" "),o+=s);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function $(){for(var e,t,s=0,o="";s<arguments.length;)(e=arguments[s++])&&(t=ie(e))&&(o&&(o+=" "),o+=t);return o}const V=e=>typeof e=="number"&&!isNaN(e),F=e=>typeof e=="string",L=e=>typeof e=="function",Y=e=>F(e)||L(e)?e:null,ee=e=>m.isValidElement(e)||F(e)||L(e)||V(e);function he(e,t,s){s===void 0&&(s=300);const{scrollHeight:o,style:u}=e;requestAnimationFrame(()=>{u.minHeight="initial",u.height=o+"px",u.transition=`all ${s}ms`,requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(t,s)})})}function J(e){let{enter:t,exit:s,appendPosition:o=!1,collapse:u=!0,collapseDuration:l=300}=e;return function(n){let{children:a,position:b,preventExitTransition:E,done:p,nodeRef:h,isIn:x}=n;const r=o?`${t}--${b}`:t,d=o?`${s}--${b}`:s,f=m.useRef(0);return m.useLayoutEffect(()=>{const i=h.current,c=r.split(" "),C=_=>{_.target===h.current&&(i.dispatchEvent(new Event("d")),i.removeEventListener("animationend",C),i.removeEventListener("animationcancel",C),f.current===0&&_.type!=="animationcancel"&&i.classList.remove(...c))};i.classList.add(...c),i.addEventListener("animationend",C),i.addEventListener("animationcancel",C)},[]),m.useEffect(()=>{const i=h.current,c=()=>{i.removeEventListener("animationend",c),u?he(i,p,l):p()};x||(E?c():(f.current=1,i.className+=` ${d}`,i.addEventListener("animationend",c)))},[x]),T.createElement(T.Fragment,null,a)}}function se(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const w={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const s=this.list.get(e).filter(o=>o!==t);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const s=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},W=e=>{let{theme:t,type:s,...o}=e;return T.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...o})},te={info:function(e){return T.createElement(W,{...e},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return T.createElement(W,{...e},T.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return T.createElement(W,{...e},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return T.createElement(W,{...e},T.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return T.createElement("div",{className:"Toastify__spinner"})}};function ge(e){const[,t]=m.useReducer(r=>r+1,0),[s,o]=m.useState([]),u=m.useRef(null),l=m.useRef(new Map).current,n=r=>s.indexOf(r)!==-1,a=m.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:r=>l.get(r)}).current;function b(r){let{containerId:d}=r;const{limit:f}=a.props;!f||d&&a.containerId!==d||(a.count-=a.queue.length,a.queue=[])}function E(r){o(d=>r==null?[]:d.filter(f=>f!==r))}function p(){const{toastContent:r,toastProps:d,staleId:f}=a.queue.shift();x(r,d,f)}function h(r,d){let{delay:f,staleId:i,...c}=d;if(!ee(r)||function(R){return!u.current||a.props.enableMultiContainer&&R.containerId!==a.props.containerId||l.has(R.toastId)&&R.updateId==null}(c))return;const{toastId:C,updateId:_,data:g}=c,{props:y}=a,k=()=>E(C),B=_==null;B&&a.count++;const I={...y,style:y.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(c).filter(R=>{let[S,N]=R;return N!=null})),toastId:C,updateId:_,data:g,closeToast:k,isIn:!1,className:Y(c.className||y.toastClassName),bodyClassName:Y(c.bodyClassName||y.bodyClassName),progressClassName:Y(c.progressClassName||y.progressClassName),autoClose:!c.isLoading&&(D=c.autoClose,H=y.autoClose,D===!1||V(D)&&D>0?D:H),deleteToast(){const R=se(l.get(C),"removed");l.delete(C),w.emit(4,R);const S=a.queue.length;if(a.count=C==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),S>0){const N=C==null?a.props.limit:1;if(S===1||N===1)a.displayedToast++,p();else{const j=N>S?S:N;a.displayedToast=j;for(let O=0;O<j;O++)p()}}else t()}};var D,H;I.iconOut=function(R){let{theme:S,type:N,isLoading:j,icon:O}=R,P=null;const z={theme:S,type:N};return O===!1||(L(O)?P=O(z):m.isValidElement(O)?P=m.cloneElement(O,z):F(O)||V(O)?P=O:j?P=te.spinner():(U=>U in te)(N)&&(P=te[N](z))),P}(I),L(c.onOpen)&&(I.onOpen=c.onOpen),L(c.onClose)&&(I.onClose=c.onClose),I.closeButton=y.closeButton,c.closeButton===!1||ee(c.closeButton)?I.closeButton=c.closeButton:c.closeButton===!0&&(I.closeButton=!ee(y.closeButton)||y.closeButton);let A=r;m.isValidElement(r)&&!F(r.type)?A=m.cloneElement(r,{closeToast:k,toastProps:I,data:g}):L(r)&&(A=r({closeToast:k,toastProps:I,data:g})),y.limit&&y.limit>0&&a.count>y.limit&&B?a.queue.push({toastContent:A,toastProps:I,staleId:i}):V(f)?setTimeout(()=>{x(A,I,i)},f):x(A,I,i)}function x(r,d,f){const{toastId:i}=d;f&&l.delete(f);const c={content:r,props:d};l.set(i,c),o(C=>[...C,i].filter(_=>_!==f)),w.emit(4,se(c,c.props.updateId==null?"added":"updated"))}return m.useEffect(()=>(a.containerId=e.containerId,w.cancelEmit(3).on(0,h).on(1,r=>u.current&&E(r)).on(5,b).emit(2,a),()=>{l.clear(),w.emit(3,a)}),[]),m.useEffect(()=>{a.props=e,a.isToastActive=n,a.displayedToast=s.length}),{getToastToRender:function(r){const d=new Map,f=Array.from(l.values());return e.newestOnTop&&f.reverse(),f.forEach(i=>{const{position:c}=i.props;d.has(c)||d.set(c,[]),d.get(c).push(i)}),Array.from(d,i=>r(i[0],i[1]))},containerRef:u,isToastActive:n}}function ae(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function re(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function ye(e){const[t,s]=m.useState(!1),[o,u]=m.useState(!1),l=m.useRef(null),n=m.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=m.useRef(e),{autoClose:b,pauseOnHover:E,closeToast:p,onClick:h,closeOnClick:x}=e;function r(g){if(e.draggable){g.nativeEvent.type==="touchstart"&&g.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",c),document.addEventListener("mouseup",C),document.addEventListener("touchmove",c),document.addEventListener("touchend",C);const y=l.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=y.getBoundingClientRect(),y.style.transition="",n.x=ae(g.nativeEvent),n.y=re(g.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function d(g){if(n.boundingRect){const{top:y,bottom:k,left:B,right:I}=n.boundingRect;g.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=B&&n.x<=I&&n.y>=y&&n.y<=k?i():f()}}function f(){s(!0)}function i(){s(!1)}function c(g){const y=l.current;n.canDrag&&y&&(n.didMove=!0,t&&i(),n.x=ae(g),n.y=re(g),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),y.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,y.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function C(){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",C);const g=l.current;if(n.canDrag&&n.didMove&&g){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return u(!0),void e.closeToast();g.style.transition="transform 0.2s, opacity 0.2s",g.style.transform=`translate${e.draggableDirection}(0)`,g.style.opacity="1"}}m.useEffect(()=>{a.current=e}),m.useEffect(()=>(l.current&&l.current.addEventListener("d",f,{once:!0}),L(e.onOpen)&&e.onOpen(m.isValidElement(e.children)&&e.children.props),()=>{const g=a.current;L(g.onClose)&&g.onClose(m.isValidElement(g.children)&&g.children.props)}),[]),m.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||i(),window.addEventListener("focus",f),window.addEventListener("blur",i)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",f),window.removeEventListener("blur",i))}),[e.pauseOnFocusLoss]);const _={onMouseDown:r,onTouchStart:r,onMouseUp:d,onTouchEnd:d};return b&&E&&(_.onMouseEnter=i,_.onMouseLeave=f),x&&(_.onClick=g=>{h&&h(g),n.canCloseOnClick&&p()}),{playToast:f,pauseToast:i,isRunning:t,preventExitTransition:o,toastRef:l,eventHandlers:_}}function le(e){let{closeToast:t,theme:s,ariaLabel:o="close"}=e;return T.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:u=>{u.stopPropagation(),t(u)},"aria-label":o},T.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},T.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ve(e){let{delay:t,isRunning:s,closeToast:o,type:u="default",hide:l,className:n,style:a,controlledProgress:b,progress:E,rtl:p,isIn:h,theme:x}=e;const r=l||b&&E===0,d={...a,animationDuration:`${t}ms`,animationPlayState:s?"running":"paused",opacity:r?0:1};b&&(d.transform=`scaleX(${E})`);const f=$("Toastify__progress-bar",b?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${x}`,`Toastify__progress-bar--${u}`,{"Toastify__progress-bar--rtl":p}),i=L(n)?n({rtl:p,type:u,defaultClassName:f}):$(f,n);return T.createElement("div",{role:"progressbar","aria-hidden":r?"true":"false","aria-label":"notification timer",className:i,style:d,[b&&E>=1?"onTransitionEnd":"onAnimationEnd"]:b&&E<1?null:()=>{h&&o()}})}const Te=e=>{const{isRunning:t,preventExitTransition:s,toastRef:o,eventHandlers:u}=ye(e),{closeButton:l,children:n,autoClose:a,onClick:b,type:E,hideProgressBar:p,closeToast:h,transition:x,position:r,className:d,style:f,bodyClassName:i,bodyStyle:c,progressClassName:C,progressStyle:_,updateId:g,role:y,progress:k,rtl:B,toastId:I,deleteToast:D,isIn:H,isLoading:A,iconOut:R,closeOnClick:S,theme:N}=e,j=$("Toastify__toast",`Toastify__toast-theme--${N}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":B},{"Toastify__toast--close-on-click":S}),O=L(d)?d({rtl:B,position:r,type:E,defaultClassName:j}):$(j,d),P=!!k||!a,z={closeToast:h,type:E,theme:N};let U=null;return l===!1||(U=L(l)?l(z):m.isValidElement(l)?m.cloneElement(l,z):le(z)),T.createElement(x,{isIn:H,done:D,position:r,preventExitTransition:s,nodeRef:o},T.createElement("div",{id:I,onClick:b,className:O,...u,style:f,ref:o},T.createElement("div",{...H&&{role:y},className:L(i)?i({type:E}):$("Toastify__toast-body",i),style:c},R!=null&&T.createElement("div",{className:$("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},R),T.createElement("div",null,n)),U,T.createElement(ve,{...g&&!P?{key:`pb-${g}`}:{},rtl:B,theme:N,delay:a,isRunning:t,isIn:H,closeToast:h,hide:p,type:E,style:_,className:C,controlledProgress:P,progress:k||0})))},Z=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ee=J(Z("bounce",!0));J(Z("slide",!0));J(Z("zoom"));J(Z("flip"));const oe=m.forwardRef((e,t)=>{const{getToastToRender:s,containerRef:o,isToastActive:u}=ge(e),{className:l,style:n,rtl:a,containerId:b}=e;function E(p){const h=$("Toastify__toast-container",`Toastify__toast-container--${p}`,{"Toastify__toast-container--rtl":a});return L(l)?l({position:p,rtl:a,defaultClassName:h}):$(h,Y(l))}return m.useEffect(()=>{t&&(t.current=o.current)},[]),T.createElement("div",{ref:o,className:"Toastify",id:b},s((p,h)=>{const x=h.length?{...n}:{...n,pointerEvents:"none"};return T.createElement("div",{className:E(p),style:x,key:`container-${p}`},h.map((r,d)=>{let{content:f,props:i}=r;return T.createElement(Te,{...i,isIn:u(i.toastId),style:{...i.style,"--nth":d+1,"--len":h.length},key:`toast-${i.key}`},f)}))}))});oe.displayName="ToastContainer",oe.defaultProps={position:"top-right",transition:Ee,autoClose:5e3,closeButton:le,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ne,q=new Map,Q=[],be=1;function ce(){return""+be++}function xe(e){return e&&(F(e.toastId)||V(e.toastId))?e.toastId:ce()}function G(e,t){return q.size>0?w.emit(0,e,t):Q.push({content:e,options:t}),t.toastId}function K(e,t){return{...t,type:t&&t.type||e,toastId:xe(t)}}function X(e){return(t,s)=>G(t,K(e,s))}function v(e,t){return G(e,K("default",t))}v.loading=(e,t)=>G(e,K("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),v.promise=function(e,t,s){let o,{pending:u,error:l,success:n}=t;u&&(o=F(u)?v.loading(u,s):v.loading(u.render,{...s,...u}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},b=(p,h,x)=>{if(h==null)return void v.dismiss(o);const r={type:p,...a,...s,data:x},d=F(h)?{render:h}:h;return o?v.update(o,{...r,...d}):v(d.render,{...r,...d}),x},E=L(e)?e():e;return E.then(p=>b("success",n,p)).catch(p=>b("error",l,p)),E},v.success=X("success"),v.info=X("info"),v.error=X("error"),v.warning=X("warning"),v.warn=v.warning,v.dark=(e,t)=>G(e,K("default",{theme:"dark",...t})),v.dismiss=e=>{q.size>0?w.emit(1,e):Q=Q.filter(t=>e!=null&&t.options.toastId!==e)},v.clearWaitingQueue=function(e){return e===void 0&&(e={}),w.emit(5,e)},v.isActive=e=>{let t=!1;return q.forEach(s=>{s.isToastActive&&s.isToastActive(e)&&(t=!0)}),t},v.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const s=function(o,u){let{containerId:l}=u;const n=q.get(l||ne);return n&&n.getToast(o)}(e,t);if(s){const{props:o,content:u}=s,l={delay:100,...o,...t,toastId:t.toastId||e,updateId:ce()};l.toastId!==e&&(l.staleId=e);const n=l.render||u;delete l.render,G(n,l)}},0)},v.done=e=>{v.update(e,{progress:1})},v.onChange=e=>(w.on(4,e),()=>{w.off(4,e)}),v.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},v.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,e=>{ne=e.containerId||e,q.set(ne,e),Q.forEach(t=>{w.emit(0,t.content,t.options)}),Q=[]}).on(3,e=>{q.delete(e.containerId||e),q.size===0&&w.off(0).off(1).off(5)});const Ce=({onSubmit:e})=>M.jsx("div",{className:"flex justify-center items-center mb-8",children:M.jsxs("form",{className:"flex items-center gap-1 w-full max-w-[500px] overflow-hidden",onSubmit:e,children:[M.jsx("input",{className:"inline-block h-[48px] w-full text-2xl text-secondaryText rounded border-2 border-secondaryBacground outline-none px-2 transition-all duration-300 hover:border-secondaryText placeholder:text-base placeholder:text-buttonColor",type:"text",name:"query",autoComplete:"off",placeholder:"Search movies"}),M.jsx("button",{className:"flex items-center justify-center h-[48px] px-2 bg-buttonColor text-primaryText text-2xl cursor-pointer outline-none rounded border-2 border-secondaryBacground transition-all duration-300 hover:border-secondaryText hover:bg-buttonHoverColor ",type:"submit",children:"Search"})]})}),Ie=({movies:e})=>M.jsx("ul",{className:"grid max-w-calc-vw-48 grid-cols-auto-fill-minmax gap-4 my-0 p-0 list-none mx-auto",children:e.map(t=>M.jsx(me,{movie:t},t.id))}),_e=()=>{const[e,t]=m.useState(),[s,o]=m.useState(!1),[u,l]=m.useState(!1),[n,a]=ue(),b=n.get("query")??"";m.useEffect(()=>{if(b==="")return;o(!0);async function p(){try{const x=(await fe(b)).data.results;x.length===0&&v.warn("There are no films matching your search.",{theme:"colored"}),t(x)}catch(h){l(!0),console.log(h)}finally{o(!1)}}p()},[b]);const E=p=>{p.preventDefault();const x=p.currentTarget.elements.namedItem("query");if(x){const r=x.value.trim();r===""&&v.warn("Enter the movie's name you want to search.",{theme:"colored"}),a({query:r})}};return M.jsxs("main",{children:[M.jsx(Ce,{onSubmit:E}),e&&M.jsx(Ie,{movies:e}),u&&M.jsx(pe,{}),s&&M.jsx(de,{}),M.jsx(oe,{})]})},Me=_e;export{Me as default};