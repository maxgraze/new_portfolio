import{S as Q,i as R,s as z,V as F,e as d,c as p,a as b,d as n,b as m,g as u,t as C,h as L,H as I,I as K,M as O,w as W,k as S,x as X,m as V,L as Y,y as Z,q as ee,o as te,B as se,J as P}from"../../chunks/vendor-de77e6d6.js";import{c as ae,d as le,e as re}from"../../chunks/site-metadata-1ad74a74.js";import{H as ie}from"../../chunks/head-9d72888a.js";import{p as ne}from"../../chunks/stores-a51032af.js";function T(l,a,i){const t=l.slice();return t[10]=a[i],t}function oe(l){let a,i=l[3],t=[];for(let s=0;s<i.length;s+=1)t[s]=U(T(l,i,s));return{c(){a=d("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){a=p(s,"DIV",{class:!0});var o=b(a);for(let r=0;r<t.length;r+=1)t[r].l(o);o.forEach(n),this.h()},h(){m(a,"class","mt-5 space-x-2")},m(s,o){u(s,a,o);for(let r=0;r<t.length;r+=1)t[r].m(a,null)},p(s,o){if(o&8){i=s[3];let r;for(r=0;r<i.length;r+=1){const f=T(s,i,r);t[r]?t[r].p(f,o):(t[r]=U(f),t[r].c(),t[r].m(a,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=i.length}},d(s){s&&n(a),O(t,s)}}}function U(l){let a,i=l[10]+"",t;return{c(){a=d("span"),t=C(i),this.h()},l(s){a=p(s,"SPAN",{class:!0});var o=b(a);t=L(o,i),o.forEach(n),this.h()},h(){m(a,"class","badge badge-primary")},m(s,o){u(s,a,o),I(a,t)},p:K,d(s){s&&n(a)}}}function ce(l){let a,i,t,s,o,r,f,k,y,$,h,j=new Date(l[2]).toDateString()+"",_,H,E,D,M,g,G=F(l[4])+"",q;a=new ie({props:{title:`${l[1]} \xB7 ${l[7]}`,description:l[4].slice(0,120),image:l[5].url,url:`${l[6]}${l[0].url.pathname}`}});let v=l[3]&&oe(l);return{c(){W(a.$$.fragment),i=S(),t=d("div"),s=d("img"),r=S(),f=d("div"),k=d("h1"),y=C(l[1]),$=S(),h=d("p"),_=C(j),H=S(),E=d("div"),D=d("div"),v&&v.c(),M=S(),g=d("article"),this.h()},l(e){X(a.$$.fragment,e),i=V(e),t=p(e,"DIV",{class:!0});var c=b(t);s=p(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(n),r=V(e),f=p(e,"DIV",{class:!0});var w=b(f);k=p(w,"H1",{});var x=b(k);y=L(x,l[1]),x.forEach(n),w.forEach(n),$=V(e),h=p(e,"P",{class:!0});var A=b(h);_=L(A,j),A.forEach(n),H=V(e),E=p(e,"DIV",{class:!0});var B=b(E);D=p(B,"DIV",{});var N=b(D);v&&v.l(N),N.forEach(n),B.forEach(n),M=V(e),g=p(e,"ARTICLE",{div:!0,class:!0});var J=b(g);J.forEach(n),this.h()},h(){m(s,"class","rounded-xl"),Y(s.src,o=l[5].url)||m(s,"src",o),m(s,"alt",`Cover image for ${l[1]}`),m(t,"class","sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5"),m(f,"class","prose prose-xl"),m(h,"class","text-secondary text-xs tracking-widest font-semibold"),m(E,"class","mb-5 flex justify-between"),m(g,"div",""),m(g,"class","prose prose-lg")},m(e,c){Z(a,e,c),u(e,i,c),u(e,t,c),I(t,s),u(e,r,c),u(e,f,c),I(f,k),I(k,y),u(e,$,c),u(e,h,c),I(h,_),u(e,H,c),u(e,E,c),I(E,D),v&&v.m(D,null),u(e,M,c),u(e,g,c),g.innerHTML=G,q=!0},p(e,[c]){const w={};c&1&&(w.url=`${e[6]}${e[0].url.pathname}`),a.$set(w),e[3]&&v.p(e,c)},i(e){q||(ee(a.$$.fragment,e),q=!0)},o(e){te(a.$$.fragment,e),q=!1},d(e){se(a,e),e&&n(i),e&&n(t),e&&n(r),e&&n(f),e&&n($),e&&n(h),e&&n(H),e&&n(E),v&&v.d(),e&&n(M),e&&n(g)}}}const pe=async({params:l})=>{const{slug:a}=l,i={slug:a},{article:t}=await ae.request(le,i);return{props:{article:t}}};function fe(l,a,i){let t,s;P(l,re,_=>i(9,t=_)),P(l,ne,_=>i(0,s=_));let{article:o}=a;const{title:r,date:f,tags:k,content:y,coverImage:$}=o,{siteUrl:h,name:j}=t;return l.$$set=_=>{"article"in _&&i(8,o=_.article)},[s,r,f,k,y,$,h,j,o]}class he extends Q{constructor(a){super();R(this,a,fe,ce,z,{article:8})}}export{he as default,pe as load};