import{n as f,o as a,h as n,C as s,a as e,j as p,c as g,s as h,b as o,S as v,w as k,F as y,L as C,e as S,T as w,N as B,k as N}from"./index-CgsUNcZw.js";const x={class:"modal-content"},M=["alt"],q={__name:"TourModal",props:{images:{type:Array,required:!0},initialIndex:{type:Number,default:0},isModalOpen:{type:Boolean,required:!0}},emits:["close"],setup(i,{emit:r}){const c=f([B]),d=r,t=()=>{d("close")};return(u,T)=>{const m=N("lazy");return a(),n(w,{name:"fade"},{default:s(()=>[e("div",{class:"modal",onClick:S(t,["self"])},[e("span",{class:"close",onClick:t},"×"),e("div",x,[p(o(C),{class:"image-container",modules:c.value,navigation:"","initial-slide":i.initialIndex,onSlideChange:u.onSlideChange},{default:s(()=>[(a(!0),g(y,null,h(i.images,(l,_)=>(a(),n(o(v),{key:_},{default:s(()=>[k(e("img",{alt:l.alt,class:"modal-image"},null,8,M),[[m,l.src]])]),_:2},1024))),128))]),_:1},8,["modules","initial-slide","onSlideChange"])])])]),_:1})}}};export{q as _};
