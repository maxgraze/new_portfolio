import{S as oe,i as ce,s as ie,e as g,t as x,k as S,c as v,a as I,h as E,d as m,m as q,b as p,L as ee,g as B,H as n,j as ue,w as de,x as he,y as fe,q as M,o as O,B as me,p as pe,M as te,n as _e}from"../chunks/vendor-de77e6d6.js";import{c as ae,b as ge,p as ve}from"../chunks/site-metadata-1ad74a74.js";import{P as be}from"../chunks/project-card-d8065716.js";function se(c,t,l){const a=c.slice();return a[2]=t[l].name,a[3]=t[l].slug,a[4]=t[l].description,a[5]=t[l].image,a}function le(c,t,l){const a=c.slice();return a[2]=t[l].name,a[8]=t[l].intro,a[9]=t[l].picture.url,a}function re(c){let t,l,a=c[2]+"",i,d,b,u,j,r,R,s,o,e,k,_,Q,C,y,G,$,A,z,F,N,J,K,D,w,V,L,H;return{c(){t=g("div"),l=g("h2"),i=x(a),d=S(),b=g("span"),u=x("data designer"),j=S(),r=g("br"),R=S(),s=g("br"),o=S(),e=g("p"),k=x("I "),_=g("span"),Q=x("research"),C=x(`,
          I
          `),y=g("span"),G=x("\xA0write\xA0"),$=x(`, I
          `),A=g("span"),z=x("tinker"),F=x(`, and
          `),N=g("span"),J=x("craft"),K=x(`,
          exploring intuitive ways to represent data. Learn more about
          what I'm all about, what I've done, and how to get in touch.`),D=S(),w=g("img"),H=S(),this.h()},l(f){t=v(f,"DIV",{class:!0});var h=I(t);l=v(h,"H2",{class:!0});var T=I(l);i=E(T,a),T.forEach(m),d=q(h),b=v(h,"SPAN",{class:!0});var U=I(b);u=E(U,"data designer"),U.forEach(m),j=q(h),r=v(h,"BR",{}),R=q(h),s=v(h,"BR",{}),o=q(h),e=v(h,"P",{class:!0});var P=I(e);k=E(P,"I "),_=v(P,"SPAN",{class:!0});var W=I(_);Q=E(W,"research"),W.forEach(m),C=E(P,`,
          I
          `),y=v(P,"SPAN",{class:!0});var X=I(y);G=E(X,"\xA0write\xA0"),X.forEach(m),$=E(P,`, I
          `),A=v(P,"SPAN",{class:!0});var Y=I(A);z=E(Y,"tinker"),Y.forEach(m),F=E(P,`, and
          `),N=v(P,"SPAN",{class:!0});var Z=I(N);J=E(Z,"craft"),Z.forEach(m),K=E(P,`,
          exploring intuitive ways to represent data. Learn more about
          what I'm all about, what I've done, and how to get in touch.`),P.forEach(m),h.forEach(m),D=q(f),w=v(f,"IMG",{class:!0,src:!0,alt:!0}),H=q(f),this.h()},h(){p(l,"class","text-4xl md:text-5xl font-display font-bold tracking-wider md:leading-3 leading-4"),p(b,"class","text-blue-700 font-display italic md:tracking-[.58em] tracking-[.28em]"),p(_,"class","underline decoration-double"),p(y,"class","border-2 border-slate-700 space-x-1"),p(A,"class","underline decoration-wavy "),p(N,"class","underline decoration-4"),p(e,"class","md:text-xl mb-4"),p(t,"class","md:mb-40 justify-items-center inline"),p(w,"class","mx-auto block mb-20 mask mask-squircle h-48"),ee(w.src,V=c[9])||p(w,"src",V),p(w,"alt",L=c[2])},m(f,h){B(f,t,h),n(t,l),n(l,i),n(t,d),n(t,b),n(b,u),n(t,j),n(t,r),n(t,R),n(t,s),n(t,o),n(t,e),n(e,k),n(e,_),n(_,Q),n(e,C),n(e,y),n(y,G),n(e,$),n(e,A),n(A,z),n(e,F),n(e,N),n(N,J),n(e,K),B(f,D,h),B(f,w,h),B(f,H,h)},p(f,h){h&2&&a!==(a=f[2]+"")&&ue(i,a),h&2&&!ee(w.src,V=f[9])&&p(w,"src",V),h&2&&L!==(L=f[2])&&p(w,"alt",L)},d(f){f&&m(t),f&&m(D),f&&m(w),f&&m(H)}}}function ne(c){let t,l;return t=new be({props:{name:c[2],description:c[4],url:c[5][0].url,slug:c[3]}}),{c(){de(t.$$.fragment)},l(a){he(t.$$.fragment,a)},m(a,i){fe(t,a,i),l=!0},p(a,i){const d={};i&1&&(d.name=a[2]),i&1&&(d.description=a[4]),i&1&&(d.url=a[5][0].url),i&1&&(d.slug=a[3]),t.$set(d)},i(a){l||(M(t.$$.fragment,a),l=!0)},o(a){O(t.$$.fragment,a),l=!1},d(a){me(t,a)}}}function ke(c){let t,l,a,i,d,b=c[1],u=[];for(let s=0;s<b.length;s+=1)u[s]=re(le(c,b,s));let j=c[0],r=[];for(let s=0;s<j.length;s+=1)r[s]=ne(se(c,j,s));const R=s=>O(r[s],1,1,()=>{r[s]=null});return{c(){t=g("div"),l=g("div");for(let s=0;s<u.length;s+=1)u[s].c();a=S(),i=g("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=v(s,"DIV",{class:!0});var o=I(t);l=v(o,"DIV",{class:!0});var e=I(l);for(let _=0;_<u.length;_+=1)u[_].l(e);e.forEach(m),a=q(o),i=v(o,"DIV",{class:!0});var k=I(i);for(let _=0;_<r.length;_+=1)r[_].l(k);k.forEach(m),o.forEach(m),this.h()},h(){p(l,"class","md:flex md:space-x-8 pt-12 md:mr-12 md:pd-0 px-7 md:px-0"),p(i,"class","px-7 grid gap-10 md:grid-cols-4 md:px-0 lg:grid-cols-6 "),p(t,"class","mb-20 text-xl md:pl-24 max-w-prose md:box-content")},m(s,o){B(s,t,o),n(t,l);for(let e=0;e<u.length;e+=1)u[e].m(l,null);n(t,a),n(t,i);for(let e=0;e<r.length;e+=1)r[e].m(i,null);d=!0},p(s,[o]){if(o&2){b=s[1];let e;for(e=0;e<b.length;e+=1){const k=le(s,b,e);u[e]?u[e].p(k,o):(u[e]=re(k),u[e].c(),u[e].m(l,null))}for(;e<u.length;e+=1)u[e].d(1);u.length=b.length}if(o&1){j=s[0];let e;for(e=0;e<j.length;e+=1){const k=se(s,j,e);r[e]?(r[e].p(k,o),M(r[e],1)):(r[e]=ne(k),r[e].c(),M(r[e],1),r[e].m(i,null))}for(_e(),e=j.length;e<r.length;e+=1)R(e);pe()}},i(s){if(!d){for(let o=0;o<j.length;o+=1)M(r[o]);d=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)O(r[o]);d=!1},d(s){s&&m(t),te(u,s),te(r,s)}}}const Ee=async()=>{const[c,t]=await Promise.all([ae.request(ge),ae.request(ve)]),{authors:l}=c,{projects:a}=t;return{props:{projects:a,authors:l}}};function je(c,t,l){let{projects:a}=t,{authors:i}=t;return c.$$set=d=>{"projects"in d&&l(0,a=d.projects),"authors"in d&&l(1,i=d.authors)},[a,i]}class Pe extends oe{constructor(t){super();ce(this,t,je,ke,ie,{projects:0,authors:1})}}export{Pe as default,Ee as load};
