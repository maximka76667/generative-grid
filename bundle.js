/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@georgedoescode/generative-utils/dist/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@georgedoescode/generative-utils/dist/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCoordsTransformer": () => (/* binding */ yo),
/* harmony export */   "createNoiseGrid": () => (/* binding */ Wa),
/* harmony export */   "createQtGrid": () => (/* binding */ Mo),
/* harmony export */   "createVoronoiDiagram": () => (/* binding */ Qi),
/* harmony export */   "createVoronoiTessellation": () => (/* binding */ Qi),
/* harmony export */   "distToSegment": () => (/* binding */ ye),
/* harmony export */   "map": () => (/* binding */ vo),
/* harmony export */   "pointsInPath": () => (/* binding */ _o),
/* harmony export */   "random": () => (/* binding */ At),
/* harmony export */   "randomBias": () => (/* binding */ po),
/* harmony export */   "randomSnap": () => (/* binding */ mo),
/* harmony export */   "seedPRNG": () => (/* binding */ ho),
/* harmony export */   "spline": () => (/* binding */ xo)
/* harmony export */ });
var Ji=Object.create;var on=Object.defineProperty;var to=Object.getOwnPropertyDescriptor;var eo=Object.getOwnPropertyNames;var no=Object.getPrototypeOf,ro=Object.prototype.hasOwnProperty;var io=t=>on(t,"__esModule",{value:!0});var U=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var oo=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of eo(e))!ro.call(t,r)&&r!=="default"&&on(t,r,{get:()=>e[r],enumerable:!(n=to(e,r))||n.enumerable});return t},sn=t=>oo(io(on(t!=null?Ji(no(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var Rn=U((zn,an)=>{(function(t,e,n){function r(o){var l=this,f=a();l.next=function(){var u=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=u-(l.c=u|0)},l.c=1,l.s0=f(" "),l.s1=f(" "),l.s2=f(" "),l.s0-=f(o),l.s0<0&&(l.s0+=1),l.s1-=f(o),l.s1<0&&(l.s1+=1),l.s2-=f(o),l.s2<0&&(l.s2+=1),f=null}function i(o,l){return l.c=o.c,l.s0=o.s0,l.s1=o.s1,l.s2=o.s2,l}function s(o,l){var f=new r(o),u=l&&l.state,c=f.next;return c.int32=function(){return f.next()*4294967296|0},c.double=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.quick=c,u&&(typeof u=="object"&&i(u,f),c.state=function(){return i(f,{})}),c}function a(){var o=4022871197,l=function(f){f=String(f);for(var u=0;u<f.length;u++){o+=f.charCodeAt(u);var c=.02519603282416938*o;o=c>>>0,c-=o,c*=o,o=c>>>0,c-=o,o+=c*4294967296}return(o>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=s:n&&n.amd?n(function(){return s}):this.alea=s})(zn,typeof an=="object"&&an,typeof define=="function"&&define)});var Fn=U((Bn,ln)=>{(function(t,e,n){function r(a){var o=this,l="";o.x=0,o.y=0,o.z=0,o.w=0,o.next=function(){var u=o.x^o.x<<11;return o.x=o.y,o.y=o.z,o.z=o.w,o.w^=o.w>>>19^u^u>>>8},a===(a|0)?o.x=a:l+=a;for(var f=0;f<l.length+64;f++)o.x^=l.charCodeAt(f)|0,o.next()}function i(a,o){return o.x=a.x,o.y=a.y,o.z=a.z,o.w=a.w,o}function s(a,o){var l=new r(a),f=o&&o.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var c=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},u.int32=l.next,u.quick=u,f&&(typeof f=="object"&&i(f,l),u.state=function(){return i(l,{})}),u}e&&e.exports?e.exports=s:n&&n.amd?n(function(){return s}):this.xor128=s})(Bn,typeof ln=="object"&&ln,typeof define=="function"&&define)});var Vn=U((Ln,un)=>{(function(t,e,n){function r(a){var o=this,l="";o.next=function(){var u=o.x^o.x>>>2;return o.x=o.y,o.y=o.z,o.z=o.w,o.w=o.v,(o.d=o.d+362437|0)+(o.v=o.v^o.v<<4^(u^u<<1))|0},o.x=0,o.y=0,o.z=0,o.w=0,o.v=0,a===(a|0)?o.x=a:l+=a;for(var f=0;f<l.length+64;f++)o.x^=l.charCodeAt(f)|0,f==l.length&&(o.d=o.x<<10^o.x>>>4),o.next()}function i(a,o){return o.x=a.x,o.y=a.y,o.z=a.z,o.w=a.w,o.v=a.v,o.d=a.d,o}function s(a,o){var l=new r(a),f=o&&o.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var c=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},u.int32=l.next,u.quick=u,f&&(typeof f=="object"&&i(f,l),u.state=function(){return i(l,{})}),u}e&&e.exports?e.exports=s:n&&n.amd?n(function(){return s}):this.xorwow=s})(Ln,typeof un=="object"&&un,typeof define=="function"&&define)});var Hn=U((Yn,cn)=>{(function(t,e,n){function r(a){var o=this;o.next=function(){var f=o.x,u=o.i,c,h,p;return c=f[u],c^=c>>>7,h=c^c<<24,c=f[u+1&7],h^=c^c>>>10,c=f[u+3&7],h^=c^c>>>3,c=f[u+4&7],h^=c^c<<7,c=f[u+7&7],c=c^c<<13,h^=c^c<<9,f[u]=h,o.i=u+1&7,h};function l(f,u){var c,h,p=[];if(u===(u|0))h=p[0]=u;else for(u=""+u,c=0;c<u.length;++c)p[c&7]=p[c&7]<<15^u.charCodeAt(c)+p[c+1&7]<<13;for(;p.length<8;)p.push(0);for(c=0;c<8&&p[c]===0;++c);for(c==8?h=p[7]=-1:h=p[c],f.x=p,f.i=0,c=256;c>0;--c)f.next()}l(o,a)}function i(a,o){return o.x=a.x.slice(),o.i=a.i,o}function s(a,o){a==null&&(a=+new Date);var l=new r(a),f=o&&o.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var c=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},u.int32=l.next,u.quick=u,f&&(f.x&&i(f,l),u.state=function(){return i(l,{})}),u}e&&e.exports?e.exports=s:n&&n.amd?n(function(){return s}):this.xorshift7=s})(Yn,typeof cn=="object"&&cn,typeof define=="function"&&define)});var $n=U((Gn,fn)=>{(function(t,e,n){function r(a){var o=this;o.next=function(){var f=o.w,u=o.X,c=o.i,h,p;return o.w=f=f+1640531527|0,p=u[c+34&127],h=u[c=c+1&127],p^=p<<13,h^=h<<17,p^=p>>>15,h^=h>>>12,p=u[c]=p^h,o.i=c,p+(f^f>>>16)|0};function l(f,u){var c,h,p,d,m,x=[],_=128;for(u===(u|0)?(h=u,u=null):(u=u+"\0",h=0,_=Math.max(_,u.length)),p=0,d=-32;d<_;++d)u&&(h^=u.charCodeAt((d+32)%u.length)),d===0&&(m=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,d>=0&&(m=m+1640531527|0,c=x[d&127]^=h+m,p=c==0?p+1:0);for(p>=128&&(x[(u&&u.length||0)&127]=-1),p=127,d=4*128;d>0;--d)h=x[p+34&127],c=x[p=p+1&127],h^=h<<13,c^=c<<17,h^=h>>>15,c^=c>>>12,x[p]=h^c;f.w=m,f.X=x,f.i=p}l(o,a)}function i(a,o){return o.i=a.i,o.w=a.w,o.X=a.X.slice(),o}function s(a,o){a==null&&(a=+new Date);var l=new r(a),f=o&&o.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var c=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},u.int32=l.next,u.quick=u,f&&(f.X&&i(f,l),u.state=function(){return i(l,{})}),u}e&&e.exports?e.exports=s:n&&n.amd?n(function(){return s}):this.xor4096=s})(Gn,typeof fn=="object"&&fn,typeof define=="function"&&define)});var Un=U((Qn,hn)=>{(function(t,e,n){function r(a){var o=this,l="";o.next=function(){var u=o.b,c=o.c,h=o.d,p=o.a;return u=u<<25^u>>>7^c,c=c-h|0,h=h<<24^h>>>8^p,p=p-u|0,o.b=u=u<<20^u>>>12^c,o.c=c=c-h|0,o.d=h<<16^c>>>16^p,o.a=p-u|0},o.a=0,o.b=0,o.c=2654435769|0,o.d=1367130551,a===Math.floor(a)?(o.a=a/4294967296|0,o.b=a|0):l+=a;for(var f=0;f<l.length+20;f++)o.b^=l.charCodeAt(f)|0,o.next()}function i(a,o){return o.a=a.a,o.b=a.b,o.c=a.c,o.d=a.d,o}function s(a,o){var l=new r(a),f=o&&o.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var c=l.next()>>>11,h=(l.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},u.int32=l.next,u.quick=u,f&&(typeof f=="object"&&i(f,l),u.state=function(){return i(l,{})}),u}e&&e.exports?e.exports=s:n&&n.amd?n(function(){return s}):this.tychei=s})(Qn,typeof hn=="object"&&hn,typeof define=="function"&&define)});var Kn=U(()=>{});var Wn=U((Zn,ve)=>{(function(t,e,n){var r=256,i=6,s=52,a="random",o=n.pow(r,i),l=n.pow(2,s),f=l*2,u=r-1,c;function h(y,w,T){var A=[];w=w==!0?{entropy:!0}:w||{};var C=x(m(w.entropy?[y,b(e)]:y??_(),3),A),S=new p(A),N=function(){for(var v=S.g(i),M=o,j=0;v<l;)v=(v+j)*r,M*=r,j=S.g(1);for(;v>=f;)v/=2,M/=2,j>>>=1;return(v+j)/M};return N.int32=function(){return S.g(4)|0},N.quick=function(){return S.g(4)/4294967296},N.double=N,x(b(S.S),e),(w.pass||T||function(v,M,j,k){return k&&(k.S&&d(k,S),v.state=function(){return d(S,{})}),j?(n[a]=v,M):v})(N,C,"global"in w?w.global:this==n,w.state)}function p(y){var w,T=y.length,A=this,C=0,S=A.i=A.j=0,N=A.S=[];for(T||(y=[T++]);C<r;)N[C]=C++;for(C=0;C<r;C++)N[C]=N[S=u&S+y[C%T]+(w=N[C])],N[S]=w;(A.g=function(v){for(var M,j=0,k=A.i,E=A.j,P=A.S;v--;)M=P[k=u&k+1],j=j*r+P[u&(P[k]=P[E=u&E+M])+(P[E]=M)];return A.i=k,A.j=E,j})(r)}function d(y,w){return w.i=y.i,w.j=y.j,w.S=y.S.slice(),w}function m(y,w){var T=[],A=typeof y,C;if(w&&A=="object")for(C in y)try{T.push(m(y[C],w-1))}catch(S){}return T.length?T:A=="string"?y:y+"\0"}function x(y,w){for(var T=y+"",A,C=0;C<T.length;)w[u&C]=u&(A^=w[u&C]*19)+T.charCodeAt(C++);return b(w)}function _(){try{var y;return c&&(y=c.randomBytes)?y=y(r):(y=new Uint8Array(r),(t.crypto||t.msCrypto).getRandomValues(y)),b(y)}catch(A){var w=t.navigator,T=w&&w.plugins;return[+new Date,t,T,t.screen,b(e)]}}function b(y){return String.fromCharCode.apply(0,y)}if(x(n.random(),e),typeof ve=="object"&&ve.exports){ve.exports=h;try{c=Kn()}catch(y){}}else typeof define=="function"&&__webpack_require__.amdO?define(function(){return h}):n["seed"+a]=h})(typeof self!="undefined"?self:Zn,[],Math)});var tr=U((nl,Jn)=>{var so=Rn(),ao=Fn(),lo=Vn(),uo=Hn(),co=$n(),fo=Un(),Mt=Wn();Mt.alea=so;Mt.xor128=ao;Mt.xorwow=lo;Mt.xorshift7=uo;Mt.xor4096=co;Mt.tychei=fo;Jn.exports=Mt});var er=U((dl,_e)=>{(function(){function t(e,n,r,i){this.max_objects=n||10,this.max_levels=r||4,this.level=i||0,this.bounds=e,this.objects=[],this.nodes=[]}t.prototype.split=function(){var e=this.level+1,n=this.bounds.width/2,r=this.bounds.height/2,i=this.bounds.x,s=this.bounds.y;this.nodes[0]=new t({x:i+n,y:s,width:n,height:r},this.max_objects,this.max_levels,e),this.nodes[1]=new t({x:i,y:s,width:n,height:r},this.max_objects,this.max_levels,e),this.nodes[2]=new t({x:i,y:s+r,width:n,height:r},this.max_objects,this.max_levels,e),this.nodes[3]=new t({x:i+n,y:s+r,width:n,height:r},this.max_objects,this.max_levels,e)},t.prototype.getIndex=function(e){var n=[],r=this.bounds.x+this.bounds.width/2,i=this.bounds.y+this.bounds.height/2,s=e.y<i,a=e.x<r,o=e.x+e.width>r,l=e.y+e.height>i;return s&&o&&n.push(0),a&&s&&n.push(1),a&&l&&n.push(2),o&&l&&n.push(3),n},t.prototype.insert=function(e){var n=0,r;if(this.nodes.length){for(r=this.getIndex(e),n=0;n<r.length;n++)this.nodes[r[n]].insert(e);return}if(this.objects.push(e),this.objects.length>this.max_objects&&this.level<this.max_levels){for(this.nodes.length||this.split(),n=0;n<this.objects.length;n++){r=this.getIndex(this.objects[n]);for(var i=0;i<r.length;i++)this.nodes[r[i]].insert(this.objects[n])}this.objects=[]}},t.prototype.retrieve=function(e){var n=this.getIndex(e),r=this.objects;if(this.nodes.length)for(var i=0;i<n.length;i++)r=r.concat(this.nodes[n[i]].retrieve(e));return r=r.filter(function(s,a){return r.indexOf(s)>=a}),r},t.prototype.clear=function(){this.objects=[];for(var e=0;e<this.nodes.length;e++)this.nodes.length&&this.nodes[e].clear();this.nodes=[]},typeof _e!="undefined"&&typeof _e.exports!="undefined"?_e.exports=t:window.Quadtree=t})()});var Ki=U((qn,Xn)=>{(function(){"use strict";var t=.5*(Math.sqrt(3)-1),e=(3-Math.sqrt(3))/6,n=1/3,r=1/6,i=(Math.sqrt(5)-1)/4,s=(5-Math.sqrt(5))/20;function a(u){var c;typeof u=="function"?c=u:u?c=l(u):c=Math.random,this.p=o(c),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var h=0;h<512;h++)this.perm[h]=this.p[h&255],this.permMod12[h]=this.perm[h]%12}a.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(u,c){var h=this.permMod12,p=this.perm,d=this.grad3,m=0,x=0,_=0,b=(u+c)*t,y=Math.floor(u+b),w=Math.floor(c+b),T=(y+w)*e,A=y-T,C=w-T,S=u-A,N=c-C,v,M;S>N?(v=1,M=0):(v=0,M=1);var j=S-v+e,k=N-M+e,E=S-1+2*e,P=N-1+2*e,D=y&255,I=w&255,O=.5-S*S-N*N;if(O>=0){var z=h[D+p[I]]*3;O*=O,m=O*O*(d[z]*S+d[z+1]*N)}var X=.5-j*j-k*k;if(X>=0){var V=h[D+v+p[I+M]]*3;X*=X,x=X*X*(d[V]*j+d[V+1]*k)}var L=.5-E*E-P*P;if(L>=0){var Z=h[D+1+p[I+1]]*3;L*=L,_=L*L*(d[Z]*E+d[Z+1]*P)}return 70*(m+x+_)},noise3D:function(u,c,h){var p=this.permMod12,d=this.perm,m=this.grad3,x,_,b,y,w=(u+c+h)*n,T=Math.floor(u+w),A=Math.floor(c+w),C=Math.floor(h+w),S=(T+A+C)*r,N=T-S,v=A-S,M=C-S,j=u-N,k=c-v,E=h-M,P,D,I,O,z,X;j>=k?k>=E?(P=1,D=0,I=0,O=1,z=1,X=0):j>=E?(P=1,D=0,I=0,O=1,z=0,X=1):(P=0,D=0,I=1,O=1,z=0,X=1):k<E?(P=0,D=0,I=1,O=0,z=1,X=1):j<E?(P=0,D=1,I=0,O=0,z=1,X=1):(P=0,D=1,I=0,O=1,z=1,X=0);var V=j-P+r,L=k-D+r,Z=E-I+r,dt=j-O+2*r,mt=k-z+2*r,gt=E-X+2*r,xt=j-1+3*r,vt=k-1+3*r,_t=E-1+3*r,at=T&255,lt=A&255,ut=C&255,tt=.6-j*j-k*k-E*E;if(tt<0)x=0;else{var yt=p[at+d[lt+d[ut]]]*3;tt*=tt,x=tt*tt*(m[yt]*j+m[yt+1]*k+m[yt+2]*E)}var et=.6-V*V-L*L-Z*Z;if(et<0)_=0;else{var wt=p[at+P+d[lt+D+d[ut+I]]]*3;et*=et,_=et*et*(m[wt]*V+m[wt+1]*L+m[wt+2]*Z)}var nt=.6-dt*dt-mt*mt-gt*gt;if(nt<0)b=0;else{var bt=p[at+O+d[lt+z+d[ut+X]]]*3;nt*=nt,b=nt*nt*(m[bt]*dt+m[bt+1]*mt+m[bt+2]*gt)}var rt=.6-xt*xt-vt*vt-_t*_t;if(rt<0)y=0;else{var jt=p[at+1+d[lt+1+d[ut+1]]]*3;rt*=rt,y=rt*rt*(m[jt]*xt+m[jt+1]*vt+m[jt+2]*_t)}return 32*(x+_+b+y)},noise4D:function(u,c,h,p){var d=this.perm,m=this.grad4,x,_,b,y,w,T=(u+c+h+p)*i,A=Math.floor(u+T),C=Math.floor(c+T),S=Math.floor(h+T),N=Math.floor(p+T),v=(A+C+S+N)*s,M=A-v,j=C-v,k=S-v,E=N-v,P=u-M,D=c-j,I=h-k,O=p-E,z=0,X=0,V=0,L=0;P>D?z++:X++,P>I?z++:V++,P>O?z++:L++,D>I?X++:V++,D>O?X++:L++,I>O?V++:L++;var Z,dt,mt,gt,xt,vt,_t,at,lt,ut,tt,yt;Z=z>=3?1:0,dt=X>=3?1:0,mt=V>=3?1:0,gt=L>=3?1:0,xt=z>=2?1:0,vt=X>=2?1:0,_t=V>=2?1:0,at=L>=2?1:0,lt=z>=1?1:0,ut=X>=1?1:0,tt=V>=1?1:0,yt=L>=1?1:0;var et=P-Z+s,wt=D-dt+s,nt=I-mt+s,bt=O-gt+s,rt=P-xt+2*s,jt=D-vt+2*s,Qe=I-_t+2*s,Ue=O-at+2*s,Ke=P-lt+3*s,Ze=D-ut+3*s,We=I-tt+3*s,Je=O-yt+3*s,tn=P-1+4*s,en=D-1+4*s,nn=I-1+4*s,rn=O-1+4*s,Ft=A&255,Lt=C&255,Vt=S&255,Yt=N&255,Ht=.6-P*P-D*D-I*I-O*O;if(Ht<0)x=0;else{var pe=d[Ft+d[Lt+d[Vt+d[Yt]]]]%32*4;Ht*=Ht,x=Ht*Ht*(m[pe]*P+m[pe+1]*D+m[pe+2]*I+m[pe+3]*O)}var Gt=.6-et*et-wt*wt-nt*nt-bt*bt;if(Gt<0)_=0;else{var de=d[Ft+Z+d[Lt+dt+d[Vt+mt+d[Yt+gt]]]]%32*4;Gt*=Gt,_=Gt*Gt*(m[de]*et+m[de+1]*wt+m[de+2]*nt+m[de+3]*bt)}var $t=.6-rt*rt-jt*jt-Qe*Qe-Ue*Ue;if($t<0)b=0;else{var me=d[Ft+xt+d[Lt+vt+d[Vt+_t+d[Yt+at]]]]%32*4;$t*=$t,b=$t*$t*(m[me]*rt+m[me+1]*jt+m[me+2]*Qe+m[me+3]*Ue)}var Qt=.6-Ke*Ke-Ze*Ze-We*We-Je*Je;if(Qt<0)y=0;else{var ge=d[Ft+lt+d[Lt+ut+d[Vt+tt+d[Yt+yt]]]]%32*4;Qt*=Qt,y=Qt*Qt*(m[ge]*Ke+m[ge+1]*Ze+m[ge+2]*We+m[ge+3]*Je)}var Ut=.6-tn*tn-en*en-nn*nn-rn*rn;if(Ut<0)w=0;else{var xe=d[Ft+1+d[Lt+1+d[Vt+1+d[Yt+1]]]]%32*4;Ut*=Ut,w=Ut*Ut*(m[xe]*tn+m[xe+1]*en+m[xe+2]*nn+m[xe+3]*rn)}return 27*(x+_+b+y+w)}};function o(u){var c,h=new Uint8Array(256);for(c=0;c<256;c++)h[c]=c;for(c=0;c<255;c++){var p=c+~~(u()*(256-c)),d=h[c];h[c]=h[p],h[p]=d}return h}a._buildPermutationTable=o;function l(){var u=0,c=0,h=0,p=1,d=f();u=d(" "),c=d(" "),h=d(" ");for(var m=0;m<arguments.length;m++)u-=d(arguments[m]),u<0&&(u+=1),c-=d(arguments[m]),c<0&&(c+=1),h-=d(arguments[m]),h<0&&(h+=1);return d=null,function(){var x=2091639*u+p*23283064365386963e-26;return u=c,c=h,h=x-(p=x|0)}}function f(){var u=4022871197;return function(c){c=c.toString();for(var h=0;h<c.length;h++){u+=c.charCodeAt(h);var p=.02519603282416938*u;u=p>>>0,p-=u,p*=u,u=p>>>0,p-=u,u+=p*4294967296}return(u>>>0)*23283064365386963e-26}}typeof define!="undefined"&&__webpack_require__.amdO&&define(function(){return a}),typeof qn!="undefined"?qn.SimplexNoise=a:typeof window!="undefined"&&(window.SimplexNoise=a),typeof Xn!="undefined"&&(Xn.exports=a)})()});var pn=sn(tr()),dn=(0,pn.default)();function ho(t){dn=(0,pn.default)(t)}function At(){if(Array.isArray(arguments[0])){let e=arguments[0];return e[At(0,e.length-1,!0)]}else{let e=arguments[0],n=arguments[1],r=arguments[2]||!1,i=dn()*(n-e)+e;return r?Math.round(i):i}}function po(t,e,n,r=.5){let i=At(t,e),s=At(0,1)*r;return i*(1-s)+n*s}function mo(t,e,n){return Math.round(At(t,e)/n)*n}function go(t,e){if(t=[...t],Array.isArray(t[0])||(t=t.map(({x:n,y:r})=>[n,r])),e){let n=t[t.length-1],r=t[t.length-2],i=t[0],s=t[1];t.unshift(n),t.unshift(r),t.push(i),t.push(s)}return t.flat()}function xo(t=[],e=1,n=!1,r){t=go(t,n);let i=t.length,s=i-4,a=n?t[2]:t[0],o=n?t[3]:t[1],l="M"+[a,o];r&&r("MOVE",[a,o]);let f=n?2:0,u=n?i-4:i-2,c=2;for(let h=f;h<u;h+=c){let p=h?t[h-2]:t[0],d=h?t[h-1]:t[1],m=t[h+0],x=t[h+1],_=t[h+2],b=t[h+3],y=h!==s?t[h+4]:_,w=h!==s?t[h+5]:b,T=m+(_-p)/6*e,A=x+(b-d)/6*e,C=_-(y-m)/6*e,S=b-(w-x)/6*e;l+="C"+[T,A,C,S,_,b],r&&r("CURVE",[T,A,C,S,_,b])}return l}function vo(t,e,n,r,i){return(t-e)/(n-e)*(i-r)+r}function _o(t,e=10){let n=t.getTotalLength(),r=n/e,i=[];for(let s=0;s<n;s+=r)i.push(t.getPointAtLength(s));return i}function yo(t){let e=t.createSVGPoint();return function(n){return e.x=n.clientX,e.y=n.clientY,e.matrixTransform(t.getScreenCTM().inverse())}}var nr=sn(er()),wo={width:1024,height:1024,points:[],gap:0,maxQtObjects:10,maxQtLevels:4};function bo(t,e,n){return{col:{start:t.x/e,end:(t.x+t.width)/e},row:{start:t.y/n,end:(t.y+t.height)/n}}}function jo(t){let e=[];return function n(r){r.nodes.length===0?e.push(r):r.nodes.forEach(i=>n(i))}(t),e}function Mo(t){t=Object.assign({},wo,t);let e=new nr.default({x:0,y:0,width:t.width,height:t.height},t.maxQtObjects,t.maxQtLevels);t.points.forEach(s=>{e.insert(s)});let n=Math.pow(2,t.maxQtLevels),r=t.width/n,i=t.height/n;return{width:t.width,height:t.height,cols:n,rows:n,areas:jo(e).map(({bounds:s})=>({x:s.x+t.gap,y:s.y+t.gap,width:s.width-t.gap*2,height:s.height-t.gap*2,...bo(s,r,i)}))}}function rr(t){return t*t}function mn(t,e){return rr(t[0]-e[0])+rr(t[1]-e[1])}function Ao(t,e,n){var r=mn(e,n);if(r===0)return mn(t,e);var i=((t[0]-e[0])*(n[0]-e[0])+(t[1]-e[1])*(n[1]-e[1]))/r;return i=Math.max(0,Math.min(1,i)),mn(t,[e[0]+i*(n[0]-e[0]),e[1]+i*(n[1]-e[1])])}function ye(t,e,n){return Math.sqrt(Ao(t,e,n))}var q=11102230246251565e-32,R=134217729,Kt=(3+8*q)*q;function kt(t,e,n,r,i){let s,a,o,l,f=e[0],u=r[0],c=0,h=0;u>f==u>-f?(s=f,f=e[++c]):(s=u,u=r[++h]);let p=0;if(c<t&&h<n)for(u>f==u>-f?(a=f+s,o=s-(a-f),f=e[++c]):(a=u+s,o=s-(a-u),u=r[++h]),s=a,o!==0&&(i[p++]=o);c<t&&h<n;)u>f==u>-f?(a=s+f,l=a-s,o=s-(a-l)+(f-l),f=e[++c]):(a=s+u,l=a-s,o=s-(a-l)+(u-l),u=r[++h]),s=a,o!==0&&(i[p++]=o);for(;c<t;)a=s+f,l=a-s,o=s-(a-l)+(f-l),f=e[++c],s=a,o!==0&&(i[p++]=o);for(;h<n;)a=s+u,l=a-s,o=s-(a-l)+(u-l),u=r[++h],s=a,o!==0&&(i[p++]=o);return(s!==0||p===0)&&(i[p++]=s),p}function Zt(t,e){let n=e[0];for(let r=1;r<t;r++)n+=e[r];return n}function g(t){return new Float64Array(t)}var ko=(3+16*q)*q,To=(2+12*q)*q,Io=(9+64*q)*q*q,Nt=g(4),ir=g(8),or=g(12),sr=g(16),H=g(4);function So(t,e,n,r,i,s,a){let o,l,f,u,c,h,p,d,m,x,_,b,y,w,T,A,C,S,N=t-i,v=n-i,M=e-s,j=r-s;w=N*j,h=R*N,p=h-(h-N),d=N-p,h=R*j,m=h-(h-j),x=j-m,T=d*x-(w-p*m-d*m-p*x),A=M*v,h=R*M,p=h-(h-M),d=M-p,h=R*v,m=h-(h-v),x=v-m,C=d*x-(A-p*m-d*m-p*x),_=T-C,c=T-_,Nt[0]=T-(_+c)+(c-C),b=w+_,c=b-w,y=w-(b-c)+(_-c),_=y-A,c=y-_,Nt[1]=y-(_+c)+(c-A),S=b+_,c=S-b,Nt[2]=b-(S-c)+(_-c),Nt[3]=S;let k=Zt(4,Nt),E=To*a;if(k>=E||-k>=E||(c=t-N,o=t-(N+c)+(c-i),c=n-v,f=n-(v+c)+(c-i),c=e-M,l=e-(M+c)+(c-s),c=r-j,u=r-(j+c)+(c-s),o===0&&l===0&&f===0&&u===0)||(E=Io*a+Kt*Math.abs(k),k+=N*u+j*o-(M*f+v*l),k>=E||-k>=E))return k;w=o*j,h=R*o,p=h-(h-o),d=o-p,h=R*j,m=h-(h-j),x=j-m,T=d*x-(w-p*m-d*m-p*x),A=l*v,h=R*l,p=h-(h-l),d=l-p,h=R*v,m=h-(h-v),x=v-m,C=d*x-(A-p*m-d*m-p*x),_=T-C,c=T-_,H[0]=T-(_+c)+(c-C),b=w+_,c=b-w,y=w-(b-c)+(_-c),_=y-A,c=y-_,H[1]=y-(_+c)+(c-A),S=b+_,c=S-b,H[2]=b-(S-c)+(_-c),H[3]=S;let P=kt(4,Nt,4,H,ir);w=N*u,h=R*N,p=h-(h-N),d=N-p,h=R*u,m=h-(h-u),x=u-m,T=d*x-(w-p*m-d*m-p*x),A=M*f,h=R*M,p=h-(h-M),d=M-p,h=R*f,m=h-(h-f),x=f-m,C=d*x-(A-p*m-d*m-p*x),_=T-C,c=T-_,H[0]=T-(_+c)+(c-C),b=w+_,c=b-w,y=w-(b-c)+(_-c),_=y-A,c=y-_,H[1]=y-(_+c)+(c-A),S=b+_,c=S-b,H[2]=b-(S-c)+(_-c),H[3]=S;let D=kt(P,ir,4,H,or);w=o*u,h=R*o,p=h-(h-o),d=o-p,h=R*u,m=h-(h-u),x=u-m,T=d*x-(w-p*m-d*m-p*x),A=l*f,h=R*l,p=h-(h-l),d=l-p,h=R*f,m=h-(h-f),x=f-m,C=d*x-(A-p*m-d*m-p*x),_=T-C,c=T-_,H[0]=T-(_+c)+(c-C),b=w+_,c=b-w,y=w-(b-c)+(_-c),_=y-A,c=y-_,H[1]=y-(_+c)+(c-A),S=b+_,c=S-b,H[2]=b-(S-c)+(_-c),H[3]=S;let I=kt(D,or,4,H,sr);return sr[I-1]}function Ot(t,e,n,r,i,s){let a=(e-s)*(n-i),o=(t-i)*(r-s),l=a-o;if(a===0||o===0||a>0!=o>0)return l;let f=Math.abs(a+o);return Math.abs(l)>=ko*f?l:-So(t,e,n,r,i,s,f)}var wl=(7+56*q)*q,bl=(3+28*q)*q,jl=(26+288*q)*q*q,Ml=g(4),Al=g(4),kl=g(4),Tl=g(4),Il=g(4),Sl=g(4),Cl=g(4),El=g(4),Nl=g(4),Ol=g(8),Pl=g(8),Dl=g(8),ql=g(4),Xl=g(8),zl=g(8),Rl=g(8),Bl=g(12),Fl=g(192),Ll=g(192);var Hl=(10+96*q)*q,Gl=(4+48*q)*q,$l=(44+576*q)*q*q,Ql=g(4),Ul=g(4),Kl=g(4),Zl=g(4),Wl=g(4),Jl=g(4),tu=g(4),eu=g(4),nu=g(8),ru=g(8),iu=g(8),ou=g(8),su=g(8),au=g(8),lu=g(8),uu=g(8),cu=g(8),fu=g(4),hu=g(4),pu=g(4),du=g(8),mu=g(16),gu=g(16),xu=g(16),vu=g(32),_u=g(32),yu=g(48),wu=g(64),bu=g(1152),ju=g(1152);var Tu=(16+224*q)*q,Iu=(5+72*q)*q,Su=(71+1408*q)*q*q,Cu=g(4),Eu=g(4),Nu=g(4),Ou=g(4),Pu=g(4),Du=g(4),qu=g(4),Xu=g(4),zu=g(4),Ru=g(4),Bu=g(24),Fu=g(24),Lu=g(24),Vu=g(24),Yu=g(24),Hu=g(24),Gu=g(24),$u=g(24),Qu=g(24),Uu=g(24),Ku=g(1152),Zu=g(1152),Wu=g(1152),Ju=g(1152),tc=g(1152),ec=g(2304),nc=g(2304),rc=g(3456),ic=g(5760),oc=g(8),sc=g(8),ac=g(8),lc=g(16),uc=g(24),cc=g(48),fc=g(48),hc=g(96),pc=g(192),dc=g(384),mc=g(384),gc=g(384),xc=g(768);var vc=g(96),_c=g(96),yc=g(96),wc=g(1152);var lr=Math.pow(2,-52),we=new Uint32Array(512),Tt=class{static from(e,n=Do,r=qo){let i=e.length,s=new Float64Array(i*2);for(let a=0;a<i;a++){let o=e[a];s[2*a]=n(o),s[2*a+1]=r(o)}return new Tt(s)}constructor(e){let n=e.length>>1;if(n>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;let r=Math.max(2*n-5,0);this._triangles=new Uint32Array(r*3),this._halfedges=new Int32Array(r*3),this._hashSize=Math.ceil(Math.sqrt(n)),this._hullPrev=new Uint32Array(n),this._hullNext=new Uint32Array(n),this._hullTri=new Uint32Array(n),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(n),this._dists=new Float64Array(n),this.update()}update(){let{coords:e,_hullPrev:n,_hullNext:r,_hullTri:i,_hullHash:s}=this,a=e.length>>1,o=Infinity,l=Infinity,f=-Infinity,u=-Infinity;for(let v=0;v<a;v++){let M=e[2*v],j=e[2*v+1];M<o&&(o=M),j<l&&(l=j),M>f&&(f=M),j>u&&(u=j),this._ids[v]=v}let c=(o+f)/2,h=(l+u)/2,p=Infinity,d,m,x;for(let v=0;v<a;v++){let M=gn(c,h,e[2*v],e[2*v+1]);M<p&&(d=v,p=M)}let _=e[2*d],b=e[2*d+1];p=Infinity;for(let v=0;v<a;v++){if(v===d)continue;let M=gn(_,b,e[2*v],e[2*v+1]);M<p&&M>0&&(m=v,p=M)}let y=e[2*m],w=e[2*m+1],T=Infinity;for(let v=0;v<a;v++){if(v===d||v===m)continue;let M=Oo(_,b,y,w,e[2*v],e[2*v+1]);M<T&&(x=v,T=M)}let A=e[2*x],C=e[2*x+1];if(T===Infinity){for(let j=0;j<a;j++)this._dists[j]=e[2*j]-e[0]||e[2*j+1]-e[1];Pt(this._ids,this._dists,0,a-1);let v=new Uint32Array(a),M=0;for(let j=0,k=-Infinity;j<a;j++){let E=this._ids[j];this._dists[E]>k&&(v[M++]=E,k=this._dists[E])}this.hull=v.subarray(0,M),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(Ot(_,b,y,w,A,C)<0){let v=m,M=y,j=w;m=x,y=A,w=C,x=v,A=M,C=j}let S=Po(_,b,y,w,A,C);this._cx=S.x,this._cy=S.y;for(let v=0;v<a;v++)this._dists[v]=gn(e[2*v],e[2*v+1],S.x,S.y);Pt(this._ids,this._dists,0,a-1),this._hullStart=d;let N=3;r[d]=n[x]=m,r[m]=n[d]=x,r[x]=n[m]=d,i[d]=0,i[m]=1,i[x]=2,s.fill(-1),s[this._hashKey(_,b)]=d,s[this._hashKey(y,w)]=m,s[this._hashKey(A,C)]=x,this.trianglesLen=0,this._addTriangle(d,m,x,-1,-1,-1);for(let v=0,M,j;v<this._ids.length;v++){let k=this._ids[v],E=e[2*k],P=e[2*k+1];if(v>0&&Math.abs(E-M)<=lr&&Math.abs(P-j)<=lr||(M=E,j=P,k===d||k===m||k===x))continue;let D=0;for(let V=0,L=this._hashKey(E,P);V<this._hashSize&&(D=s[(L+V)%this._hashSize],!(D!==-1&&D!==r[D]));V++);D=n[D];let I=D,O;for(;O=r[I],Ot(E,P,e[2*I],e[2*I+1],e[2*O],e[2*O+1])>=0;)if(I=O,I===D){I=-1;break}if(I===-1)continue;let z=this._addTriangle(I,k,r[I],-1,-1,i[I]);i[k]=this._legalize(z+2),i[I]=z,N++;let X=r[I];for(;O=r[X],Ot(E,P,e[2*X],e[2*X+1],e[2*O],e[2*O+1])<0;)z=this._addTriangle(X,k,O,i[k],-1,i[X]),i[k]=this._legalize(z+2),r[X]=X,N--,X=O;if(I===D)for(;O=n[I],Ot(E,P,e[2*O],e[2*O+1],e[2*I],e[2*I+1])<0;)z=this._addTriangle(O,k,I,-1,i[I],i[O]),this._legalize(z+2),i[O]=z,r[I]=I,N--,I=O;this._hullStart=n[k]=I,r[I]=n[X]=k,r[k]=X,s[this._hashKey(E,P)]=k,s[this._hashKey(e[2*I],e[2*I+1])]=I}this.hull=new Uint32Array(N);for(let v=0,M=this._hullStart;v<N;v++)this.hull[v]=M,M=r[M];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,n){return Math.floor(Eo(e-this._cx,n-this._cy)*this._hashSize)%this._hashSize}_legalize(e){let{_triangles:n,_halfedges:r,coords:i}=this,s=0,a=0;for(;;){let o=r[e],l=e-e%3;if(a=l+(e+2)%3,o===-1){if(s===0)break;e=we[--s];continue}let f=o-o%3,u=l+(e+1)%3,c=f+(o+2)%3,h=n[a],p=n[e],d=n[u],m=n[c];if(No(i[2*h],i[2*h+1],i[2*p],i[2*p+1],i[2*d],i[2*d+1],i[2*m],i[2*m+1])){n[e]=m,n[o]=h;let _=r[c];if(_===-1){let y=this._hullStart;do{if(this._hullTri[y]===c){this._hullTri[y]=e;break}y=this._hullPrev[y]}while(y!==this._hullStart)}this._link(e,_),this._link(o,r[a]),this._link(a,c);let b=f+(o+1)%3;s<we.length&&(we[s++]=b)}else{if(s===0)break;e=we[--s]}}return a}_link(e,n){this._halfedges[e]=n,n!==-1&&(this._halfedges[n]=e)}_addTriangle(e,n,r,i,s,a){let o=this.trianglesLen;return this._triangles[o]=e,this._triangles[o+1]=n,this._triangles[o+2]=r,this._link(o,i),this._link(o+1,s),this._link(o+2,a),this.trianglesLen+=3,o}};function Eo(t,e){let n=t/(Math.abs(t)+Math.abs(e));return(e>0?3-n:1+n)/4}function gn(t,e,n,r){let i=t-n,s=e-r;return i*i+s*s}function No(t,e,n,r,i,s,a,o){let l=t-a,f=e-o,u=n-a,c=r-o,h=i-a,p=s-o,d=l*l+f*f,m=u*u+c*c,x=h*h+p*p;return l*(c*x-m*p)-f*(u*x-m*h)+d*(u*p-c*h)<0}function Oo(t,e,n,r,i,s){let a=n-t,o=r-e,l=i-t,f=s-e,u=a*a+o*o,c=l*l+f*f,h=.5/(a*f-o*l),p=(f*u-o*c)*h,d=(a*c-l*u)*h;return p*p+d*d}function Po(t,e,n,r,i,s){let a=n-t,o=r-e,l=i-t,f=s-e,u=a*a+o*o,c=l*l+f*f,h=.5/(a*f-o*l),p=t+(f*u-o*c)*h,d=e+(a*c-l*u)*h;return{x:p,y:d}}function Pt(t,e,n,r){if(r-n<=20)for(let i=n+1;i<=r;i++){let s=t[i],a=e[s],o=i-1;for(;o>=n&&e[t[o]]>a;)t[o+1]=t[o--];t[o+1]=s}else{let i=n+r>>1,s=n+1,a=r;Wt(t,i,s),e[t[n]]>e[t[r]]&&Wt(t,n,r),e[t[s]]>e[t[r]]&&Wt(t,s,r),e[t[n]]>e[t[s]]&&Wt(t,n,s);let o=t[s],l=e[o];for(;;){do s++;while(e[t[s]]<l);do a--;while(e[t[a]]>l);if(a<s)break;Wt(t,s,a)}t[n+1]=t[a],t[a]=o,r-s+1>=a-n?(Pt(t,e,s,r),Pt(t,e,n,a-1)):(Pt(t,e,n,a-1),Pt(t,e,s,r))}}function Wt(t,e,n){let r=t[e];t[e]=t[n],t[n]=r}function Do(t){return t[0]}function qo(t){return t[1]}var ur=1e-6,K=class{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,n){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,n){this._+=`L${this._x1=+e},${this._y1=+n}`}arc(e,n,r){e=+e,n=+n,r=+r;let i=e+r,s=n;if(r<0)throw new Error("negative radius");this._x1===null?this._+=`M${i},${s}`:(Math.abs(this._x1-i)>ur||Math.abs(this._y1-s)>ur)&&(this._+="L"+i+","+s),!!r&&(this._+=`A${r},${r},0,1,1,${e-r},${n}A${r},${r},0,1,1,${this._x1=i},${this._y1=s}`)}rect(e,n,r,i){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}h${+r}v${+i}h${-r}Z`}value(){return this._||null}};var It=class{constructor(){this._=[]}moveTo(e,n){this._.push([e,n])}closePath(){this._.push(this._[0].slice())}lineTo(e,n){this._.push([e,n])}value(){return this._.length?this._:null}};var be=class{constructor(e,[n,r,i,s]=[0,0,960,500]){if(!((i=+i)>=(n=+n))||!((s=+s)>=(r=+r)))throw new Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(e.points.length*2),this.vectors=new Float64Array(e.points.length*2),this.xmax=i,this.xmin=n,this.ymax=s,this.ymin=r,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){let{delaunay:{points:e,hull:n,triangles:r},vectors:i}=this,s=this.circumcenters=this._circumcenters.subarray(0,r.length/3*2);for(let p=0,d=0,m=r.length,x,_;p<m;p+=3,d+=2){let b=r[p]*2,y=r[p+1]*2,w=r[p+2]*2,T=e[b],A=e[b+1],C=e[y],S=e[y+1],N=e[w],v=e[w+1],M=C-T,j=S-A,k=N-T,E=v-A,P=(M*E-j*k)*2;if(Math.abs(P)<1e-9){let D=1e9,I=r[0]*2;D*=Math.sign((e[I]-T)*E-(e[I+1]-A)*k),x=(T+N)/2-D*E,_=(A+v)/2+D*k}else{let D=1/P,I=M*M+j*j,O=k*k+E*E;x=T+(E*I-j*O)*D,_=A+(M*O-k*I)*D}s[d]=x,s[d+1]=_}let a=n[n.length-1],o,l=a*4,f,u=e[2*a],c,h=e[2*a+1];i.fill(0);for(let p=0;p<n.length;++p)a=n[p],o=l,f=u,c=h,l=a*4,u=e[2*a],h=e[2*a+1],i[o+2]=i[l]=c-h,i[o+3]=i[l+1]=u-f}render(e){let n=e==null?e=new K:void 0,{delaunay:{halfedges:r,inedges:i,hull:s},circumcenters:a,vectors:o}=this;if(s.length<=1)return null;for(let u=0,c=r.length;u<c;++u){let h=r[u];if(h<u)continue;let p=Math.floor(u/3)*2,d=Math.floor(h/3)*2,m=a[p],x=a[p+1],_=a[d],b=a[d+1];this._renderSegment(m,x,_,b,e)}let l,f=s[s.length-1];for(let u=0;u<s.length;++u){l=f,f=s[u];let c=Math.floor(i[f]/3)*2,h=a[c],p=a[c+1],d=l*4,m=this._project(h,p,o[d+2],o[d+3]);m&&this._renderSegment(h,p,m[0],m[1],e)}return n&&n.value()}renderBounds(e){let n=e==null?e=new K:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),n&&n.value()}renderCell(e,n){let r=n==null?n=new K:void 0,i=this._clip(e);if(i===null||!i.length)return;n.moveTo(i[0],i[1]);let s=i.length;for(;i[0]===i[s-2]&&i[1]===i[s-1]&&s>1;)s-=2;for(let a=2;a<s;a+=2)(i[a]!==i[a-2]||i[a+1]!==i[a-1])&&n.lineTo(i[a],i[a+1]);return n.closePath(),r&&r.value()}*cellPolygons(){let{delaunay:{points:e}}=this;for(let n=0,r=e.length/2;n<r;++n){let i=this.cellPolygon(n);i&&(i.index=n,yield i)}}cellPolygon(e){let n=new It;return this.renderCell(e,n),n.value()}_renderSegment(e,n,r,i,s){let a,o=this._regioncode(e,n),l=this._regioncode(r,i);o===0&&l===0?(s.moveTo(e,n),s.lineTo(r,i)):(a=this._clipSegment(e,n,r,i,o,l))&&(s.moveTo(a[0],a[1]),s.lineTo(a[2],a[3]))}contains(e,n,r){return n=+n,n!==n||(r=+r,r!==r)?!1:this.delaunay._step(e,n,r)===e}*neighbors(e){let n=this._clip(e);if(n)for(let r of this.delaunay.neighbors(e)){let i=this._clip(r);if(i)t:for(let s=0,a=n.length;s<a;s+=2)for(let o=0,l=i.length;o<l;o+=2)if(n[s]==i[o]&&n[s+1]==i[o+1]&&n[(s+2)%a]==i[(o+l-2)%l]&&n[(s+3)%a]==i[(o+l-1)%l]){yield r;break t}}}_cell(e){let{circumcenters:n,delaunay:{inedges:r,halfedges:i,triangles:s}}=this,a=r[e];if(a===-1)return null;let o=[],l=a;do{let f=Math.floor(l/3);if(o.push(n[f*2],n[f*2+1]),l=l%3==2?l-2:l+1,s[l]!==e)break;l=i[l]}while(l!==a&&l!==-1);return o}_clip(e){if(e===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];let n=this._cell(e);if(n===null)return null;let{vectors:r}=this,i=e*4;return r[i]||r[i+1]?this._clipInfinite(e,n,r[i],r[i+1],r[i+2],r[i+3]):this._clipFinite(e,n)}_clipFinite(e,n){let r=n.length,i=null,s,a,o=n[r-2],l=n[r-1],f,u=this._regioncode(o,l),c,h=0;for(let p=0;p<r;p+=2)if(s=o,a=l,o=n[p],l=n[p+1],f=u,u=this._regioncode(o,l),f===0&&u===0)c=h,h=0,i?i.push(o,l):i=[o,l];else{let d,m,x,_,b;if(f===0){if((d=this._clipSegment(s,a,o,l,f,u))===null)continue;[m,x,_,b]=d}else{if((d=this._clipSegment(o,l,s,a,u,f))===null)continue;[_,b,m,x]=d,c=h,h=this._edgecode(m,x),c&&h&&this._edge(e,c,h,i,i.length),i?i.push(m,x):i=[m,x]}c=h,h=this._edgecode(_,b),c&&h&&this._edge(e,c,h,i,i.length),i?i.push(_,b):i=[_,b]}if(i)c=h,h=this._edgecode(i[0],i[1]),c&&h&&this._edge(e,c,h,i,i.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return i}_clipSegment(e,n,r,i,s,a){for(;;){if(s===0&&a===0)return[e,n,r,i];if(s&a)return null;let o,l,f=s||a;f&8?(o=e+(r-e)*(this.ymax-n)/(i-n),l=this.ymax):f&4?(o=e+(r-e)*(this.ymin-n)/(i-n),l=this.ymin):f&2?(l=n+(i-n)*(this.xmax-e)/(r-e),o=this.xmax):(l=n+(i-n)*(this.xmin-e)/(r-e),o=this.xmin),s?(e=o,n=l,s=this._regioncode(e,n)):(r=o,i=l,a=this._regioncode(r,i))}}_clipInfinite(e,n,r,i,s,a){let o=Array.from(n),l;if((l=this._project(o[0],o[1],r,i))&&o.unshift(l[0],l[1]),(l=this._project(o[o.length-2],o[o.length-1],s,a))&&o.push(l[0],l[1]),o=this._clipFinite(e,o))for(let f=0,u=o.length,c,h=this._edgecode(o[u-2],o[u-1]);f<u;f+=2)c=h,h=this._edgecode(o[f],o[f+1]),c&&h&&(f=this._edge(e,c,h,o,f),u=o.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(o=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return o}_edge(e,n,r,i,s){for(;n!==r;){let a,o;switch(n){case 5:n=4;continue;case 4:n=6,a=this.xmax,o=this.ymin;break;case 6:n=2;continue;case 2:n=10,a=this.xmax,o=this.ymax;break;case 10:n=8;continue;case 8:n=9,a=this.xmin,o=this.ymax;break;case 9:n=1;continue;case 1:n=5,a=this.xmin,o=this.ymin;break}(i[s]!==a||i[s+1]!==o)&&this.contains(e,a,o)&&(i.splice(s,0,a,o),s+=2)}if(i.length>4)for(let a=0;a<i.length;a+=2){let o=(a+2)%i.length,l=(a+4)%i.length;(i[a]===i[o]&&i[o]===i[l]||i[a+1]===i[o+1]&&i[o+1]===i[l+1])&&(i.splice(o,2),a-=2)}return s}_project(e,n,r,i){let s=Infinity,a,o,l;if(i<0){if(n<=this.ymin)return null;(a=(this.ymin-n)/i)<s&&(l=this.ymin,o=e+(s=a)*r)}else if(i>0){if(n>=this.ymax)return null;(a=(this.ymax-n)/i)<s&&(l=this.ymax,o=e+(s=a)*r)}if(r>0){if(e>=this.xmax)return null;(a=(this.xmax-e)/r)<s&&(o=this.xmax,l=n+(s=a)*i)}else if(r<0){if(e<=this.xmin)return null;(a=(this.xmin-e)/r)<s&&(o=this.xmin,l=n+(s=a)*i)}return[o,l]}_edgecode(e,n){return(e===this.xmin?1:e===this.xmax?2:0)|(n===this.ymin?4:n===this.ymax?8:0)}_regioncode(e,n){return(e<this.xmin?1:e>this.xmax?2:0)|(n<this.ymin?4:n>this.ymax?8:0)}};var Xo=2*Math.PI,Dt=Math.pow;function zo(t){return t[0]}function Ro(t){return t[1]}function Bo(t){let{triangles:e,coords:n}=t;for(let r=0;r<e.length;r+=3){let i=2*e[r],s=2*e[r+1],a=2*e[r+2];if((n[a]-n[i])*(n[s+1]-n[i+1])-(n[s]-n[i])*(n[a+1]-n[i+1])>1e-10)return!1}return!0}function Fo(t,e,n){return[t+Math.sin(t+e)*n,e+Math.cos(t-e)*n]}var St=class{static from(e,n=zo,r=Ro,i){return new St("length"in e?Lo(e,n,r,i):Float64Array.from(Vo(e,n,r,i)))}constructor(e){this._delaunator=new Tt(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){let e=this._delaunator,n=this.points;if(e.hull&&e.hull.length>2&&Bo(e)){this.collinear=Int32Array.from({length:n.length/2},(h,p)=>p).sort((h,p)=>n[2*h]-n[2*p]||n[2*h+1]-n[2*p+1]);let l=this.collinear[0],f=this.collinear[this.collinear.length-1],u=[n[2*l],n[2*l+1],n[2*f],n[2*f+1]],c=1e-8*Math.hypot(u[3]-u[1],u[2]-u[0]);for(let h=0,p=n.length/2;h<p;++h){let d=Fo(n[2*h],n[2*h+1],c);n[2*h]=d[0],n[2*h+1]=d[1]}this._delaunator=new Tt(n)}else delete this.collinear;let r=this.halfedges=this._delaunator.halfedges,i=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,a=this.inedges.fill(-1),o=this._hullIndex.fill(-1);for(let l=0,f=r.length;l<f;++l){let u=s[l%3==2?l-2:l+1];(r[l]===-1||a[u]===-1)&&(a[u]=l)}for(let l=0,f=i.length;l<f;++l)o[i[l]]=l;i.length<=2&&i.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=i[0],a[i[0]]=1,i.length===2&&(a[i[1]]=0,this.triangles[1]=i[1],this.triangles[2]=i[1]))}voronoi(e){return new be(this,e)}*neighbors(e){let{inedges:n,hull:r,_hullIndex:i,halfedges:s,triangles:a,collinear:o}=this;if(o){let c=o.indexOf(e);c>0&&(yield o[c-1]),c<o.length-1&&(yield o[c+1]);return}let l=n[e];if(l===-1)return;let f=l,u=-1;do{if(yield u=a[f],f=f%3==2?f-2:f+1,a[f]!==e)return;if(f=s[f],f===-1){let c=r[(i[e]+1)%r.length];c!==u&&(yield c);return}}while(f!==l)}find(e,n,r=0){if(e=+e,e!==e||(n=+n,n!==n))return-1;let i=r,s;for(;(s=this._step(r,e,n))>=0&&s!==r&&s!==i;)r=s;return s}_step(e,n,r){let{inedges:i,hull:s,_hullIndex:a,halfedges:o,triangles:l,points:f}=this;if(i[e]===-1||!f.length)return(e+1)%(f.length>>1);let u=e,c=Dt(n-f[e*2],2)+Dt(r-f[e*2+1],2),h=i[e],p=h;do{let d=l[p],m=Dt(n-f[d*2],2)+Dt(r-f[d*2+1],2);if(m<c&&(c=m,u=d),p=p%3==2?p-2:p+1,l[p]!==e)break;if(p=o[p],p===-1){if(p=s[(a[e]+1)%s.length],p!==d&&Dt(n-f[p*2],2)+Dt(r-f[p*2+1],2)<c)return p;break}}while(p!==h);return u}render(e){let n=e==null?e=new K:void 0,{points:r,halfedges:i,triangles:s}=this;for(let a=0,o=i.length;a<o;++a){let l=i[a];if(l<a)continue;let f=s[a]*2,u=s[l]*2;e.moveTo(r[f],r[f+1]),e.lineTo(r[u],r[u+1])}return this.renderHull(e),n&&n.value()}renderPoints(e,n){n===void 0&&(!e||typeof e.moveTo!="function")&&(n=e,e=null),n=n==null?2:+n;let r=e==null?e=new K:void 0,{points:i}=this;for(let s=0,a=i.length;s<a;s+=2){let o=i[s],l=i[s+1];e.moveTo(o+n,l),e.arc(o,l,n,0,Xo)}return r&&r.value()}renderHull(e){let n=e==null?e=new K:void 0,{hull:r,points:i}=this,s=r[0]*2,a=r.length;e.moveTo(i[s],i[s+1]);for(let o=1;o<a;++o){let l=2*r[o];e.lineTo(i[l],i[l+1])}return e.closePath(),n&&n.value()}hullPolygon(){let e=new It;return this.renderHull(e),e.value()}renderTriangle(e,n){let r=n==null?n=new K:void 0,{points:i,triangles:s}=this,a=s[e*=3]*2,o=s[e+1]*2,l=s[e+2]*2;return n.moveTo(i[a],i[a+1]),n.lineTo(i[o],i[o+1]),n.lineTo(i[l],i[l+1]),n.closePath(),r&&r.value()}*trianglePolygons(){let{triangles:e}=this;for(let n=0,r=e.length/3;n<r;++n)yield this.trianglePolygon(n)}trianglePolygon(e){let n=new It;return this.renderTriangle(e,n),n.value()}};function Lo(t,e,n,r){let i=t.length,s=new Float64Array(i*2);for(let a=0;a<i;++a){let o=t[a];s[a*2]=e.call(r,o,a,t),s[a*2+1]=n.call(r,o,a,t)}return s}function*Vo(t,e,n,r){let i=0;for(let s of t)yield e.call(r,s,i,t),yield n.call(r,s,i,t),++i}var Yo={value:()=>{}};function cr(){for(var t=0,e=arguments.length,n={},r;t<e;++t){if(!(r=arguments[t]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new je(n)}function je(t){this._=t}function Ho(t,e){return t.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}je.prototype=cr.prototype={constructor:je,on:function(t,e){var n=this._,r=Ho(t+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(t=r[s]).type)&&(i=Go(n[i],t.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<a;)if(i=(t=r[s]).type)n[i]=fr(n[i],t.name,e);else if(e==null)for(i in n)n[i]=fr(n[i],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new je(t)},call:function(t,e){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],r=0,i=s.length;r<i;++r)s[r].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(e,n)}};function Go(t,e){for(var n=0,r=t.length,i;n<r;++n)if((i=t[n]).name===e)return i.value}function fr(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=Yo,t=t.slice(0,r).concat(t.slice(r+1));break}return n!=null&&t.push({name:e,value:n}),t}var xn=cr;var Me="http://www.w3.org/1999/xhtml",vn={svg:"http://www.w3.org/2000/svg",xhtml:Me,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function it(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),vn.hasOwnProperty(e)?{space:vn[e],local:t}:t}function $o(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Me&&e.documentElement.namespaceURI===Me?e.createElement(t):e.createElementNS(n,t)}}function Qo(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Ae(t){var e=it(t);return(e.local?Qo:$o)(e)}function Uo(){}function Ct(t){return t==null?Uo:function(){return this.querySelector(t)}}function hr(t){typeof t!="function"&&(t=Ct(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s=e[i],a=s.length,o=r[i]=new Array(a),l,f,u=0;u<a;++u)(l=s[u])&&(f=t.call(l,l.__data__,u,s))&&("__data__"in l&&(f.__data__=l.__data__),o[u]=f);return new B(r,this._parents)}function _n(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Ko(){return[]}function Jt(t){return t==null?Ko:function(){return this.querySelectorAll(t)}}function Zo(t){return function(){return _n(t.apply(this,arguments))}}function pr(t){typeof t=="function"?t=Zo(t):t=Jt(t);for(var e=this._groups,n=e.length,r=[],i=[],s=0;s<n;++s)for(var a=e[s],o=a.length,l,f=0;f<o;++f)(l=a[f])&&(r.push(t.call(l,l.__data__,f,a)),i.push(l));return new B(r,i)}function te(t){return function(){return this.matches(t)}}function ke(t){return function(e){return e.matches(t)}}var Wo=Array.prototype.find;function Jo(t){return function(){return Wo.call(this.children,t)}}function ts(){return this.firstElementChild}function dr(t){return this.select(t==null?ts:Jo(typeof t=="function"?t:ke(t)))}var es=Array.prototype.filter;function ns(){return Array.from(this.children)}function rs(t){return function(){return es.call(this.children,t)}}function mr(t){return this.selectAll(t==null?ns:rs(typeof t=="function"?t:ke(t)))}function gr(t){typeof t!="function"&&(t=te(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s=e[i],a=s.length,o=r[i]=[],l,f=0;f<a;++f)(l=s[f])&&t.call(l,l.__data__,f,s)&&o.push(l);return new B(r,this._parents)}function Te(t){return new Array(t.length)}function xr(){return new B(this._enter||this._groups.map(Te),this._parents)}function ee(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}ee.prototype={constructor:ee,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function vr(t){return function(){return t}}function is(t,e,n,r,i,s){for(var a=0,o,l=e.length,f=s.length;a<f;++a)(o=e[a])?(o.__data__=s[a],r[a]=o):n[a]=new ee(t,s[a]);for(;a<l;++a)(o=e[a])&&(i[a]=o)}function os(t,e,n,r,i,s,a){var o,l,f=new Map,u=e.length,c=s.length,h=new Array(u),p;for(o=0;o<u;++o)(l=e[o])&&(h[o]=p=a.call(l,l.__data__,o,e)+"",f.has(p)?i[o]=l:f.set(p,l));for(o=0;o<c;++o)p=a.call(t,s[o],o,s)+"",(l=f.get(p))?(r[o]=l,l.__data__=s[o],f.delete(p)):n[o]=new ee(t,s[o]);for(o=0;o<u;++o)(l=e[o])&&f.get(h[o])===l&&(i[o]=l)}function ss(t){return t.__data__}function _r(t,e){if(!arguments.length)return Array.from(this,ss);var n=e?os:is,r=this._parents,i=this._groups;typeof t!="function"&&(t=vr(t));for(var s=i.length,a=new Array(s),o=new Array(s),l=new Array(s),f=0;f<s;++f){var u=r[f],c=i[f],h=c.length,p=as(t.call(u,u&&u.__data__,f,r)),d=p.length,m=o[f]=new Array(d),x=a[f]=new Array(d),_=l[f]=new Array(h);n(u,c,m,x,_,p,e);for(var b=0,y=0,w,T;b<d;++b)if(w=m[b]){for(b>=y&&(y=b+1);!(T=x[y])&&++y<d;);w._next=T||null}}return a=new B(a,r),a._enter=o,a._exit=l,a}function as(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function yr(){return new B(this._exit||this._groups.map(Te),this._parents)}function wr(t,e,n){var r=this.enter(),i=this,s=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),e!=null&&(i=e(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function br(t){for(var e=t.selection?t.selection():t,n=this._groups,r=e._groups,i=n.length,s=r.length,a=Math.min(i,s),o=new Array(i),l=0;l<a;++l)for(var f=n[l],u=r[l],c=f.length,h=o[l]=new Array(c),p,d=0;d<c;++d)(p=f[d]||u[d])&&(h[d]=p);for(;l<i;++l)o[l]=n[l];return new B(o,this._parents)}function jr(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r=t[e],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function Mr(t){t||(t=ls);function e(c,h){return c&&h?t(c.__data__,h.__data__):!c-!h}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],o=a.length,l=i[s]=new Array(o),f,u=0;u<o;++u)(f=a[u])&&(l[u]=f);l.sort(e)}return new B(i,this._parents).order()}function ls(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function Ar(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function kr(){return Array.from(this)}function Tr(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function Ir(){let t=0;for(let e of this)++t;return t}function Sr(){return!this.node()}function Cr(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i=e[n],s=0,a=i.length,o;s<a;++s)(o=i[s])&&t.call(o,o.__data__,s,i);return this}function us(t){return function(){this.removeAttribute(t)}}function cs(t){return function(){this.removeAttributeNS(t.space,t.local)}}function fs(t,e){return function(){this.setAttribute(t,e)}}function hs(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function ps(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function ds(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function Er(t,e){var n=it(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((e==null?n.local?cs:us:typeof e=="function"?n.local?ds:ps:n.local?hs:fs)(n,e))}function Ie(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ms(t){return function(){this.style.removeProperty(t)}}function gs(t,e,n){return function(){this.style.setProperty(t,e,n)}}function xs(t,e,n){return function(){var r=e.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function Nr(t,e,n){return arguments.length>1?this.each((e==null?ms:typeof e=="function"?xs:gs)(t,e,n??"")):ct(this.node(),t)}function ct(t,e){return t.style.getPropertyValue(e)||Ie(t).getComputedStyle(t,null).getPropertyValue(e)}function vs(t){return function(){delete this[t]}}function _s(t,e){return function(){this[t]=e}}function ys(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function Or(t,e){return arguments.length>1?this.each((e==null?vs:typeof e=="function"?ys:_s)(t,e)):this.node()[t]}function Pr(t){return t.trim().split(/^|\s+/)}function yn(t){return t.classList||new Dr(t)}function Dr(t){this._node=t,this._names=Pr(t.getAttribute("class")||"")}Dr.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function qr(t,e){for(var n=yn(t),r=-1,i=e.length;++r<i;)n.add(e[r])}function Xr(t,e){for(var n=yn(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}function ws(t){return function(){qr(this,t)}}function bs(t){return function(){Xr(this,t)}}function js(t,e){return function(){(e.apply(this,arguments)?qr:Xr)(this,t)}}function zr(t,e){var n=Pr(t+"");if(arguments.length<2){for(var r=yn(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof e=="function"?js:e?ws:bs)(n,e))}function Ms(){this.textContent=""}function As(t){return function(){this.textContent=t}}function ks(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function Rr(t){return arguments.length?this.each(t==null?Ms:(typeof t=="function"?ks:As)(t)):this.node().textContent}function Ts(){this.innerHTML=""}function Is(t){return function(){this.innerHTML=t}}function Ss(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function Br(t){return arguments.length?this.each(t==null?Ts:(typeof t=="function"?Ss:Is)(t)):this.node().innerHTML}function Cs(){this.nextSibling&&this.parentNode.appendChild(this)}function Fr(){return this.each(Cs)}function Es(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Lr(){return this.each(Es)}function Vr(t){var e=typeof t=="function"?t:Ae(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function Ns(){return null}function Yr(t,e){var n=typeof t=="function"?t:Ae(t),r=e==null?Ns:typeof e=="function"?e:Ct(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Os(){var t=this.parentNode;t&&t.removeChild(this)}function Hr(){return this.each(Os)}function Ps(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Ds(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Gr(t){return this.select(t?Ds:Ps)}function $r(t){return arguments.length?this.property("__data__",t):this.node().__data__}function qs(t){return function(e){t.call(this,e,this.__data__)}}function Xs(t){return t.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");return r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),{type:e,name:n}})}function zs(t){return function(){var e=this.__on;if(!!e){for(var n=0,r=-1,i=e.length,s;n<i;++n)s=e[n],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):e[++r]=s;++r?e.length=r:delete this.__on}}}function Rs(t,e,n){return function(){var r=this.__on,i,s=qs(e);if(r){for(var a=0,o=r.length;a<o;++a)if((i=r[a]).type===t.type&&i.name===t.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=e;return}}this.addEventListener(t.type,s,n),i={type:t.type,name:t.name,value:e,listener:s,options:n},r?r.push(i):this.__on=[i]}}function Qr(t,e,n){var r=Xs(t+""),i,s=r.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,f=o.length,u;l<f;++l)for(i=0,u=o[l];i<s;++i)if((a=r[i]).type===u.type&&a.name===u.name)return u.value}return}for(o=e?Rs:zs,i=0;i<s;++i)this.each(o(r[i],e,n));return this}function Ur(t,e,n){var r=Ie(t),i=r.CustomEvent;typeof i=="function"?i=new i(e,n):(i=r.document.createEvent("Event"),n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function Bs(t,e){return function(){return Ur(this,t,e)}}function Fs(t,e){return function(){return Ur(this,t,e.apply(this,arguments))}}function Kr(t,e){return this.each((typeof e=="function"?Fs:Bs)(t,e))}function*Zr(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var Ls=[null];function B(t,e){this._groups=t,this._parents=e}function Wr(){return new B([[document.documentElement]],Ls)}function Vs(){return this}B.prototype=Wr.prototype={constructor:B,select:hr,selectAll:pr,selectChild:dr,selectChildren:mr,filter:gr,data:_r,enter:xr,exit:yr,join:wr,merge:br,selection:Vs,order:jr,sort:Mr,call:Ar,nodes:kr,node:Tr,size:Ir,empty:Sr,each:Cr,attr:Er,style:Nr,property:Or,classed:zr,text:Rr,html:Br,raise:Fr,lower:Lr,append:Vr,insert:Yr,remove:Hr,clone:Gr,datum:$r,on:Qr,dispatch:Kr,[Symbol.iterator]:Zr};var ot=Wr;function Se(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function wn(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function ne(){}var re=.7,Ce=1/re,qt="\\s*([+-]?\\d+)\\s*",ie="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",W="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ys=/^#([0-9a-f]{3,8})$/,Hs=new RegExp("^rgb\\("+[qt,qt,qt]+"\\)$"),Gs=new RegExp("^rgb\\("+[W,W,W]+"\\)$"),$s=new RegExp("^rgba\\("+[qt,qt,qt,ie]+"\\)$"),Qs=new RegExp("^rgba\\("+[W,W,W,ie]+"\\)$"),Us=new RegExp("^hsl\\("+[ie,W,W]+"\\)$"),Ks=new RegExp("^hsla\\("+[ie,W,W,ie]+"\\)$"),Jr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Se(ne,ft,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:ti,formatHex:ti,formatHsl:Zs,formatRgb:ei,toString:ei});function ti(){return this.rgb().formatHex()}function Zs(){return si(this).formatHsl()}function ei(){return this.rgb().formatRgb()}function ft(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=Ys.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?ni(e):n===3?new $(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Ee(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Ee(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Hs.exec(t))?new $(e[1],e[2],e[3],1):(e=Gs.exec(t))?new $(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=$s.exec(t))?Ee(e[1],e[2],e[3],e[4]):(e=Qs.exec(t))?Ee(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Us.exec(t))?oi(e[1],e[2]/100,e[3]/100,1):(e=Ks.exec(t))?oi(e[1],e[2]/100,e[3]/100,e[4]):Jr.hasOwnProperty(t)?ni(Jr[t]):t==="transparent"?new $(NaN,NaN,NaN,0):null}function ni(t){return new $(t>>16&255,t>>8&255,t&255,1)}function Ee(t,e,n,r){return r<=0&&(t=e=n=NaN),new $(t,e,n,r)}function Ws(t){return t instanceof ne||(t=ft(t)),t?(t=t.rgb(),new $(t.r,t.g,t.b,t.opacity)):new $}function Xt(t,e,n,r){return arguments.length===1?Ws(t):new $(t,e,n,r??1)}function $(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}Se($,Xt,wn(ne,{brighter:function(t){return t=t==null?Ce:Math.pow(Ce,t),new $(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=t==null?re:Math.pow(re,t),new $(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ri,formatHex:ri,formatRgb:ii,toString:ii}));function ri(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)}function ii(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(t===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(t===1?")":", "+t+")")}function bn(t){return t=Math.max(0,Math.min(255,Math.round(t)||0)),(t<16?"0":"")+t.toString(16)}function oi(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new J(t,e,n,r)}function si(t){if(t instanceof J)return new J(t.h,t.s,t.l,t.opacity);if(t instanceof ne||(t=ft(t)),!t)return new J;if(t instanceof J)return t;t=t.rgb();var e=t.r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),s=Math.max(e,n,r),a=NaN,o=s-i,l=(s+i)/2;return o?(e===s?a=(n-r)/o+(n<r)*6:n===s?a=(r-e)/o+2:a=(e-n)/o+4,o/=l<.5?s+i:2-s-i,a*=60):o=l>0&&l<1?0:a,new J(a,o,l,t.opacity)}function ai(t,e,n,r){return arguments.length===1?si(t):new J(t,e,n,r??1)}function J(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}Se(J,ai,wn(ne,{brighter:function(t){return t=t==null?Ce:Math.pow(Ce,t),new J(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=t==null?re:Math.pow(re,t),new J(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new $(jn(t>=240?t-240:t+120,i,r),jn(t,i,r),jn(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(t===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(t===1?")":", "+t+")")}}));function jn(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}function Mn(t,e,n,r,i){var s=t*t,a=s*t;return((1-3*t+3*s-a)*e+(4-6*s+3*a)*n+(1+3*t+3*s-3*a)*r+a*i)/6}function li(t){var e=t.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),i=t[r],s=t[r+1],a=r>0?t[r-1]:2*i-s,o=r<e-1?t[r+2]:2*s-i;return Mn((n-r/e)*e,a,i,s,o)}}function ui(t){var e=t.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*e),i=t[(r+e-1)%e],s=t[r%e],a=t[(r+1)%e],o=t[(r+2)%e];return Mn((n-r/e)*e,i,s,a,o)}}var An=t=>()=>t;function Js(t,e){return function(n){return t+n*e}}function ta(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}function ci(t){return(t=+t)==1?Ne:function(e,n){return n-e?ta(e,n,t):An(isNaN(e)?n:e)}}function Ne(t,e){var n=e-t;return n?Js(t,n):An(isNaN(t)?e:t)}var Oe=function t(e){var n=ci(e);function r(i,s){var a=n((i=Xt(i)).r,(s=Xt(s)).r),o=n(i.g,s.g),l=n(i.b,s.b),f=Ne(i.opacity,s.opacity);return function(u){return i.r=a(u),i.g=o(u),i.b=l(u),i.opacity=f(u),i+""}}return r.gamma=t,r}(1);function fi(t){return function(e){var n=e.length,r=new Array(n),i=new Array(n),s=new Array(n),a,o;for(a=0;a<n;++a)o=Xt(e[a]),r[a]=o.r||0,i[a]=o.g||0,s[a]=o.b||0;return r=t(r),i=t(i),s=t(s),o.opacity=1,function(l){return o.r=r(l),o.g=i(l),o.b=s(l),o+""}}}var ea=fi(li),na=fi(ui);function Q(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var kn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Tn=new RegExp(kn.source,"g");function ra(t){return function(){return t}}function ia(t){return function(e){return t(e)+""}}function In(t,e){var n=kn.lastIndex=Tn.lastIndex=0,r,i,s,a=-1,o=[],l=[];for(t=t+"",e=e+"";(r=kn.exec(t))&&(i=Tn.exec(e));)(s=i.index)>n&&(s=e.slice(n,s),o[a]?o[a]+=s:o[++a]=s),(r=r[0])===(i=i[0])?o[a]?o[a]+=i:o[++a]=i:(o[++a]=null,l.push({i:a,x:Q(r,i)})),n=Tn.lastIndex;return n<e.length&&(s=e.slice(n),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?ia(l[0].x):ra(e):(e=l.length,function(f){for(var u=0,c;u<e;++u)o[(c=l[u]).i]=c.x(f);return o.join("")})}var hi=180/Math.PI,Pe={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Sn(t,e,n,r,i,s){var a,o,l;return(a=Math.sqrt(t*t+e*e))&&(t/=a,e/=a),(l=t*n+e*r)&&(n-=t*l,r-=e*l),(o=Math.sqrt(n*n+r*r))&&(n/=o,r/=o,l/=o),t*r<e*n&&(t=-t,e=-e,l=-l,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(e,t)*hi,skewX:Math.atan(l)*hi,scaleX:a,scaleY:o}}var De;function pi(t){let e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Pe:Sn(e.a,e.b,e.c,e.d,e.e,e.f)}function di(t){return t==null?Pe:(De||(De=document.createElementNS("http://www.w3.org/2000/svg","g")),De.setAttribute("transform",t),(t=De.transform.baseVal.consolidate())?(t=t.matrix,Sn(t.a,t.b,t.c,t.d,t.e,t.f)):Pe)}function mi(t,e,n,r){function i(f){return f.length?f.pop()+" ":""}function s(f,u,c,h,p,d){if(f!==c||u!==h){var m=p.push("translate(",null,e,null,n);d.push({i:m-4,x:Q(f,c)},{i:m-2,x:Q(u,h)})}else(c||h)&&p.push("translate("+c+e+h+n)}function a(f,u,c,h){f!==u?(f-u>180?u+=360:u-f>180&&(f+=360),h.push({i:c.push(i(c)+"rotate(",null,r)-2,x:Q(f,u)})):u&&c.push(i(c)+"rotate("+u+r)}function o(f,u,c,h){f!==u?h.push({i:c.push(i(c)+"skewX(",null,r)-2,x:Q(f,u)}):u&&c.push(i(c)+"skewX("+u+r)}function l(f,u,c,h,p,d){if(f!==c||u!==h){var m=p.push(i(p)+"scale(",null,",",null,")");d.push({i:m-4,x:Q(f,c)},{i:m-2,x:Q(u,h)})}else(c!==1||h!==1)&&p.push(i(p)+"scale("+c+","+h+")")}return function(f,u){var c=[],h=[];return f=t(f),u=t(u),s(f.translateX,f.translateY,u.translateX,u.translateY,c,h),a(f.rotate,u.rotate,c,h),o(f.skewX,u.skewX,c,h),l(f.scaleX,f.scaleY,u.scaleX,u.scaleY,c,h),f=u=null,function(p){for(var d=-1,m=h.length,x;++d<m;)c[(x=h[d]).i]=x.x(p);return c.join("")}}}var Cn=mi(pi,"px, ","px)","deg)"),En=mi(di,", ",")",")");var zt=0,oe=0,se=0,gi=1e3,qe,ae,Xe=0,Et=0,ze=0,le=typeof performance=="object"&&performance.now?performance:Date,xi=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function ue(){return Et||(xi(oa),Et=le.now()+ze)}function oa(){Et=0}function ce(){this._call=this._time=this._next=null}ce.prototype=Re.prototype={constructor:ce,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?ue():+n)+(e==null?0:+e),!this._next&&ae!==this&&(ae?ae._next=this:qe=this,ae=this),this._call=t,this._time=n,Nn()},stop:function(){this._call&&(this._call=null,this._time=Infinity,Nn())}};function Re(t,e,n){var r=new ce;return r.restart(t,e,n),r}function vi(){ue(),++zt;for(var t=qe,e;t;)(e=Et-t._time)>=0&&t._call.call(void 0,e),t=t._next;--zt}function _i(){Et=(Xe=le.now())+ze,zt=oe=0;try{vi()}finally{zt=0,aa(),Et=0}}function sa(){var t=le.now(),e=t-Xe;e>gi&&(ze-=e,Xe=t)}function aa(){for(var t,e=qe,n,r=Infinity;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:qe=n);ae=t,Nn(r)}function Nn(t){if(!zt){oe&&(oe=clearTimeout(oe));var e=t-Et;e>24?(t<Infinity&&(oe=setTimeout(_i,t-le.now()-ze)),se&&(se=clearInterval(se))):(se||(Xe=le.now(),se=setInterval(sa,gi)),zt=1,xi(_i))}}function Be(t,e,n){var r=new ce;return e=e==null?0:+e,r.restart(i=>{r.stop(),t(i+e)},e,n),r}var la=xn("start","end","cancel","interrupt"),ua=[],yi=0,wi=1,Fe=2,Le=3,bi=4,Ve=5,fe=6;function ht(t,e,n,r,i,s){var a=t.__transition;if(!a)t.__transition={};else if(n in a)return;ca(t,n,{name:e,index:r,group:i,on:la,tween:ua,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:yi})}function he(t,e){var n=F(t,e);if(n.state>yi)throw new Error("too late; already scheduled");return n}function Y(t,e){var n=F(t,e);if(n.state>Le)throw new Error("too late; already running");return n}function F(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function ca(t,e,n){var r=t.__transition,i;r[e]=n,n.timer=Re(s,0,n.time);function s(f){n.state=wi,n.timer.restart(a,n.delay,n.time),n.delay<=f&&a(f-n.delay)}function a(f){var u,c,h,p;if(n.state!==wi)return l();for(u in r)if(p=r[u],p.name===n.name){if(p.state===Le)return Be(a);p.state===bi?(p.state=fe,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete r[u]):+u<e&&(p.state=fe,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete r[u])}if(Be(function(){n.state===Le&&(n.state=bi,n.timer.restart(o,n.delay,n.time),o(f))}),n.state=Fe,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Fe){for(n.state=Le,i=new Array(h=n.tween.length),u=0,c=-1;u<h;++u)(p=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(i[++c]=p);i.length=c+1}}function o(f){for(var u=f<n.duration?n.ease.call(null,f/n.duration):(n.timer.restart(l),n.state=Ve,1),c=-1,h=i.length;++c<h;)i[c].call(t,u);n.state===Ve&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=fe,n.timer.stop(),delete r[e];for(var f in r)return;delete t.__transition}}function Ye(t,e){var n=t.__transition,r,i,s=!0,a;if(!!n){e=e==null?null:e+"";for(a in n){if((r=n[a]).name!==e){s=!1;continue}i=r.state>Fe&&r.state<Ve,r.state=fe,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete n[a]}s&&delete t.__transition}}function ji(t){return this.each(function(){Ye(this,t)})}function fa(t,e){var n,r;return function(){var i=Y(this,t),s=i.tween;if(s!==n){r=n=s;for(var a=0,o=r.length;a<o;++a)if(r[a].name===e){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function ha(t,e,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=Y(this,t),a=s.tween;if(a!==r){i=(r=a).slice();for(var o={name:e,value:n},l=0,f=i.length;l<f;++l)if(i[l].name===e){i[l]=o;break}l===f&&i.push(o)}s.tween=i}}function Mi(t,e){var n=this._id;if(t+="",arguments.length<2){for(var r=F(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===t)return a.value;return null}return this.each((e==null?fa:ha)(n,t,e))}function Rt(t,e,n){var r=t._id;return t.each(function(){var i=Y(this,r);(i.value||(i.value={}))[e]=n.apply(this,arguments)}),function(i){return F(i,r).value[e]}}function He(t,e){var n;return(typeof e=="number"?Q:e instanceof ft?Oe:(n=ft(e))?(e=n,Oe):In)(t,e)}function pa(t){return function(){this.removeAttribute(t)}}function da(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ma(t,e,n){var r,i=n+"",s;return function(){var a=this.getAttribute(t);return a===i?null:a===r?s:s=e(r=a,n)}}function ga(t,e,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(t.space,t.local);return a===i?null:a===r?s:s=e(r=a,n)}}function xa(t,e,n){var r,i,s;return function(){var a,o=n(this),l;return o==null?void this.removeAttribute(t):(a=this.getAttribute(t),l=o+"",a===l?null:a===r&&l===i?s:(i=l,s=e(r=a,o)))}}function va(t,e,n){var r,i,s;return function(){var a,o=n(this),l;return o==null?void this.removeAttributeNS(t.space,t.local):(a=this.getAttributeNS(t.space,t.local),l=o+"",a===l?null:a===r&&l===i?s:(i=l,s=e(r=a,o)))}}function Ai(t,e){var n=it(t),r=n==="transform"?En:He;return this.attrTween(t,typeof e=="function"?(n.local?va:xa)(n,r,Rt(this,"attr."+t,e)):e==null?(n.local?da:pa)(n):(n.local?ga:ma)(n,r,e))}function _a(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function ya(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function wa(t,e){var n,r;function i(){var s=e.apply(this,arguments);return s!==r&&(n=(r=s)&&ya(t,s)),n}return i._value=e,i}function ba(t,e){var n,r;function i(){var s=e.apply(this,arguments);return s!==r&&(n=(r=s)&&_a(t,s)),n}return i._value=e,i}function ki(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var r=it(t);return this.tween(n,(r.local?wa:ba)(r,e))}function ja(t,e){return function(){he(this,t).delay=+e.apply(this,arguments)}}function Ma(t,e){return e=+e,function(){he(this,t).delay=e}}function Ti(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?ja:Ma)(e,t)):F(this.node(),e).delay}function Aa(t,e){return function(){Y(this,t).duration=+e.apply(this,arguments)}}function ka(t,e){return e=+e,function(){Y(this,t).duration=e}}function Ii(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?Aa:ka)(e,t)):F(this.node(),e).duration}function Ta(t,e){if(typeof e!="function")throw new Error;return function(){Y(this,t).ease=e}}function Si(t){var e=this._id;return arguments.length?this.each(Ta(e,t)):F(this.node(),e).ease}function Ia(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;Y(this,t).ease=n}}function Ci(t){if(typeof t!="function")throw new Error;return this.each(Ia(this._id,t))}function Ei(t){typeof t!="function"&&(t=te(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var s=e[i],a=s.length,o=r[i]=[],l,f=0;f<a;++f)(l=s[f])&&t.call(l,l.__data__,f,s)&&o.push(l);return new G(r,this._parents,this._name,this._id)}function Ni(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,r=e.length,i=n.length,s=Math.min(r,i),a=new Array(r),o=0;o<s;++o)for(var l=e[o],f=n[o],u=l.length,c=a[o]=new Array(u),h,p=0;p<u;++p)(h=l[p]||f[p])&&(c[p]=h);for(;o<r;++o)a[o]=e[o];return new G(a,this._parents,this._name,this._id)}function Sa(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function Ca(t,e,n){var r,i,s=Sa(e)?he:Y;return function(){var a=s(this,t),o=a.on;o!==r&&(i=(r=o).copy()).on(e,n),a.on=i}}function Oi(t,e){var n=this._id;return arguments.length<2?F(this.node(),n).on.on(t):this.each(Ca(n,t,e))}function Ea(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function Pi(){return this.on("end.remove",Ea(this._id))}function Di(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Ct(t));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var o=r[a],l=o.length,f=s[a]=new Array(l),u,c,h=0;h<l;++h)(u=o[h])&&(c=t.call(u,u.__data__,h,o))&&("__data__"in u&&(c.__data__=u.__data__),f[h]=c,ht(f[h],e,n,h,f,F(u,n)));return new G(s,this._parents,e,n)}function qi(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Jt(t));for(var r=this._groups,i=r.length,s=[],a=[],o=0;o<i;++o)for(var l=r[o],f=l.length,u,c=0;c<f;++c)if(u=l[c]){for(var h=t.call(u,u.__data__,c,l),p,d=F(u,n),m=0,x=h.length;m<x;++m)(p=h[m])&&ht(p,e,n,m,h,d);s.push(h),a.push(u)}return new G(s,a,e,n)}var Na=ot.prototype.constructor;function Xi(){return new Na(this._groups,this._parents)}function Oa(t,e){var n,r,i;return function(){var s=ct(this,t),a=(this.style.removeProperty(t),ct(this,t));return s===a?null:s===n&&a===r?i:i=e(n=s,r=a)}}function zi(t){return function(){this.style.removeProperty(t)}}function Pa(t,e,n){var r,i=n+"",s;return function(){var a=ct(this,t);return a===i?null:a===r?s:s=e(r=a,n)}}function Da(t,e,n){var r,i,s;return function(){var a=ct(this,t),o=n(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(t),ct(this,t))),a===l?null:a===r&&l===i?s:(i=l,s=e(r=a,o))}}function qa(t,e){var n,r,i,s="style."+e,a="end."+s,o;return function(){var l=Y(this,t),f=l.on,u=l.value[s]==null?o||(o=zi(e)):void 0;(f!==n||i!==u)&&(r=(n=f).copy()).on(a,i=u),l.on=r}}function Ri(t,e,n){var r=(t+="")==="transform"?Cn:He;return e==null?this.styleTween(t,Oa(t,r)).on("end.style."+t,zi(t)):typeof e=="function"?this.styleTween(t,Da(t,r,Rt(this,"style."+t,e))).each(qa(this._id,t)):this.styleTween(t,Pa(t,r,e),n).on("end.style."+t,null)}function Xa(t,e,n){return function(r){this.style.setProperty(t,e.call(this,r),n)}}function za(t,e,n){var r,i;function s(){var a=e.apply(this,arguments);return a!==i&&(r=(i=a)&&Xa(t,a,n)),r}return s._value=e,s}function Bi(t,e,n){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return this.tween(r,null);if(typeof e!="function")throw new Error;return this.tween(r,za(t,e,n??""))}function Ra(t){return function(){this.textContent=t}}function Ba(t){return function(){var e=t(this);this.textContent=e??""}}function Fi(t){return this.tween("text",typeof t=="function"?Ba(Rt(this,"text",t)):Ra(t==null?"":t+""))}function Fa(t){return function(e){this.textContent=t.call(this,e)}}function La(t){var e,n;function r(){var i=t.apply(this,arguments);return i!==n&&(e=(n=i)&&Fa(i)),e}return r._value=t,r}function Li(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,La(t))}function Vi(){for(var t=this._name,e=this._id,n=Ge(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],o=a.length,l,f=0;f<o;++f)if(l=a[f]){var u=F(l,e);ht(l,t,n,f,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new G(r,this._parents,t,n)}function Yi(){var t,e,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var o={value:a},l={value:function(){--i==0&&s()}};n.each(function(){var f=Y(this,r),u=f.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(o),e._.interrupt.push(o),e._.end.push(l)),f.on=e}),i===0&&s()})}var Va=0;function G(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}function Hi(t){return ot().transition(t)}function Ge(){return++Va}var st=ot.prototype;G.prototype=Hi.prototype={constructor:G,select:Di,selectAll:qi,selectChild:st.selectChild,selectChildren:st.selectChildren,filter:Ei,merge:Ni,selection:Xi,transition:Vi,call:st.call,nodes:st.nodes,node:st.node,size:st.size,empty:st.empty,each:st.each,on:Oi,attr:Ai,attrTween:ki,style:Ri,styleTween:Bi,text:Fi,textTween:Li,remove:Pi,tween:Mi,delay:Ti,duration:Ii,ease:Si,easeVarying:Ci,end:Yi,[Symbol.iterator]:st[Symbol.iterator]};function $e(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Ya={time:null,delay:0,duration:250,ease:$e};function Ha(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function Gi(t){var e,n;t instanceof G?(e=t._id,t=t._name):(e=Ge(),(n=Ya).time=ue(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],o=a.length,l,f=0;f<o;++f)(l=a[f])&&ht(l,t,e,f,a,n||Ha(l,e));return new G(r,this._parents,t,e)}ot.prototype.interrupt=ji;ot.prototype.transition=Gi;function $i(t){return[+t[0],+t[1]]}function Ga(t){return[$i(t[0]),$i(t[1])]}var Fd={name:"x",handles:["w","e"].map(On),input:function(t,e){return t==null?null:[[+t[0],e[0][1]],[+t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Ld={name:"y",handles:["n","s"].map(On),input:function(t,e){return t==null?null:[[e[0][0],+t[0]],[e[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},Vd={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(On),input:function(t){return t==null?null:Ga(t)},output:function(t){return t}};function On(t){return{type:t}}function Bt(t){for(var e=-1,n=t.length,r=0,i=0,s,a=t[n-1],o,l=0;++e<n;)s=a,a=t[e],l+=o=s[0]*a[1]-a[0]*s[1],r+=(s[0]+a[0])*o,i+=(s[1]+a[1])*o;return l*=3,[r/l,i/l]}function pt(t,e,n){this.k=t,this.x=e,this.y=n}pt.prototype={constructor:pt,scale:function(t){return t===1?this:new pt(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new pt(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Pn=new pt(1,0,0);Dn.prototype=pt.prototype;function Dn(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Pn;return t.__zoom}var $a={width:1024,height:1024,points:[],relaxIterations:8};function Qi(t){t=Object.assign({},$a,t),t.points=t.points.map(s=>[s.x,s.y]);let e=St.from(t.points),n=e.voronoi([0,0,t.width,t.height]),r=[];for(let s=0;s<t.relaxIterations;s++){for(let a=0;a<e.points.length;a+=2){let o=n.cellPolygon(a>>1);if(o===null)continue;let l=e.points[a],f=e.points[a+1],[u,c]=Bt(o);e.points[a]=l+(u-l)*1,e.points[a+1]=f+(c-f)*1}n.update()}for(let s=0;s<e.points.length;s+=2){let a=e.points[s],o=e.points[s+1];r.push({x:a,y:o})}let i=[];for(let s=0;s<e.points.length;s+=2){let a=n.cellPolygon(s>>1);a!==null&&i.push({...Ui(a),neighbors:[...n.neighbors(s)].map(o=>({...Ui(n.cellPolygon(o))}))})}return{cells:i.map((s,a)=>{let o=[...n.neighbors(a)];return s.neighbors=o.map(l=>i[l]),s}),points:r}}function Ui(t){return{points:t,innerCircleRadius:Qa(t),centroid:{x:Bt(t)[0],y:Bt(t)[1]}}}function Qa(t){let e=Bt(t),n=Ua(e,t),r=ye(e,n[0],n[1]);for(let i=1;i<t.length-1;i++)if(t[i+1]){let s=ye(e,n[i],n[i+1]);s<r&&(r=s)}return r}function Ua(t,e){let n=t,r=e.slice(0),i=(s,a)=>Math.atan2(s[1]-n[1],s[0]-n[0])*180/Math.PI-Math.atan2(a[1]-n[1],a[0]-n[0])*180/Math.PI;return r.sort(i),r}var Zi=sn(Ki()),Ka={width:200,height:200,resolution:8,xInc:.01,yInc:.01,seed:Math.random()*1e3};function Wi(t,e,n){return Math.max(e,Math.min(t,n))}function Za(t,e,n,r,i){return function(s){let a=Math.floor(Wi(s.x,0,e-1)/i),o=Math.floor(Wi(s.y,0,n-1)/i);return t[a+o*r]}}function Wa(t){t=Object.assign({},Ka,t);let e=new Zi.default(t.seed),n=t.resolution,r=t.resolution,i=t.width/n,s=t.height/r,a=new Array(n*r),o=0;for(let l=0;l<t.height;l+=s){let f=0;for(let u=0;u<t.width;u+=i)Math.floor(u+i)<=t.width&&Math.floor(l+s)<=t.height&&(a[Math.round(u/i+l/s*n)]={x:u,y:l,width:i,height:s,noiseValue:e.noise2D(f,o)},f+=t.xInc);o+=t.yInc}return{cells:a,lookup:Za(a,t.width,t.height,n,Math.max(i,s))}}
/**
 * quadtree-js
 * @version 1.2.4
 * @license MIT
 * @author Timo Hausmann
 */


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/dist/svg.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "Animator": () => (/* binding */ Animator),
/* harmony export */   "Array": () => (/* binding */ SVGArray),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "ClipPath": () => (/* binding */ ClipPath),
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "Defs": () => (/* binding */ Defs),
/* harmony export */   "Dom": () => (/* binding */ Dom),
/* harmony export */   "Ease": () => (/* binding */ Ease),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Ellipse": () => (/* binding */ Ellipse),
/* harmony export */   "EventTarget": () => (/* binding */ EventTarget),
/* harmony export */   "ForeignObject": () => (/* binding */ ForeignObject),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "Gradient": () => (/* binding */ Gradient),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Marker": () => (/* binding */ Marker),
/* harmony export */   "Mask": () => (/* binding */ Mask),
/* harmony export */   "Matrix": () => (/* binding */ Matrix),
/* harmony export */   "Morphable": () => (/* binding */ Morphable),
/* harmony export */   "NonMorphable": () => (/* binding */ NonMorphable),
/* harmony export */   "Number": () => (/* binding */ SVGNumber),
/* harmony export */   "ObjectBag": () => (/* binding */ ObjectBag),
/* harmony export */   "PID": () => (/* binding */ PID),
/* harmony export */   "Path": () => (/* binding */ Path),
/* harmony export */   "PathArray": () => (/* binding */ PathArray),
/* harmony export */   "Pattern": () => (/* binding */ Pattern),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "PointArray": () => (/* binding */ PointArray),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
/* harmony export */   "Polyline": () => (/* binding */ Polyline),
/* harmony export */   "Queue": () => (/* binding */ Queue),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "Runner": () => (/* binding */ Runner),
/* harmony export */   "SVG": () => (/* binding */ SVG),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "Spring": () => (/* binding */ Spring),
/* harmony export */   "Stop": () => (/* binding */ Stop),
/* harmony export */   "Style": () => (/* binding */ Style),
/* harmony export */   "Svg": () => (/* binding */ Svg),
/* harmony export */   "Symbol": () => (/* binding */ Symbol),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "TextPath": () => (/* binding */ TextPath),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "TransformBag": () => (/* binding */ TransformBag),
/* harmony export */   "Tspan": () => (/* binding */ Tspan),
/* harmony export */   "Use": () => (/* binding */ Use),
/* harmony export */   "adopt": () => (/* binding */ adopt),
/* harmony export */   "assignNewId": () => (/* binding */ assignNewId),
/* harmony export */   "clearEvents": () => (/* binding */ clearEvents),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "defaults": () => (/* binding */ defaults),
/* harmony export */   "dispatch": () => (/* binding */ dispatch),
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "eid": () => (/* binding */ eid),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "find": () => (/* binding */ baseFind),
/* harmony export */   "getClass": () => (/* binding */ getClass),
/* harmony export */   "getEventTarget": () => (/* binding */ getEventTarget),
/* harmony export */   "getEvents": () => (/* binding */ getEvents),
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "makeInstance": () => (/* binding */ makeInstance),
/* harmony export */   "makeMorphable": () => (/* binding */ makeMorphable),
/* harmony export */   "mockAdopt": () => (/* binding */ mockAdopt),
/* harmony export */   "namespaces": () => (/* binding */ namespaces),
/* harmony export */   "nodeOrNew": () => (/* binding */ nodeOrNew),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "registerMorphableType": () => (/* binding */ registerMorphableType),
/* harmony export */   "registerWindow": () => (/* binding */ registerWindow),
/* harmony export */   "restoreWindow": () => (/* binding */ restoreWindow),
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "saveWindow": () => (/* binding */ saveWindow),
/* harmony export */   "utils": () => (/* binding */ utils),
/* harmony export */   "windowEvents": () => (/* binding */ windowEvents),
/* harmony export */   "withWindow": () => (/* binding */ withWindow),
/* harmony export */   "wrapWithAttrCheck": () => (/* binding */ wrapWithAttrCheck)
/* harmony export */ });
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.1.2
* https://svgjs.dev/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Wed Jan 26 2022 23:19:07 GMT+0100 (Mitteleuropäische Normalzeit)
*/;
const methods$1 = {};
const names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    for (const _name of name) {
      registerMethods(_name, m);
    }

    return;
  }

  if (typeof name === 'object') {
    for (const _name in name) {
      registerMethods(_name, name[_name]);
    }

    return;
  }

  addMethodNames(Object.getOwnPropertyNames(m));
  methods$1[name] = Object.assign(methods$1[name] || {}, m);
}
function getMethodsFor(name) {
  return methods$1[name] || {};
}
function getMethodNames() {
  return [...new Set(names)];
}
function addMethodNames(_names) {
  names.push(..._names);
}

// Map function
function map(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }

  return result;
} // Filter function

function filter(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
} // Degrees to radians

function radians(d) {
  return d % 360 * Math.PI / 180;
} // Radians to degrees

function degrees(r) {
  return r * 180 / Math.PI % 360;
} // Convert dash-separated-string to camelCase

function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
} // Convert camel cased string to dash separated

function unCamelCase(s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase();
  });
} // Capitalize first letter of a string

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
} // Calculate proportional width and height values when necessary

function proportionalSize(element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox();

    if (width == null) {
      width = box.width / box.height * height;
    } else if (height == null) {
      height = box.height / box.width * width;
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/

function getOrigin(o, element) {
  const origin = o.origin; // First check if origin is in ox or originX

  let ox = o.ox != null ? o.ox : o.originX != null ? o.originX : 'center';
  let oy = o.oy != null ? o.oy : o.originY != null ? o.originY : 'center'; // Then check if origin was used and overwrite in that case

  if (origin != null) {
    [ox, oy] = Array.isArray(origin) ? origin : typeof origin === 'object' ? [origin.x, origin.y] : [origin, origin];
  } // Make sure to only call bbox when actually needed


  const condX = typeof ox === 'string';
  const condY = typeof oy === 'string';

  if (condX || condY) {
    const {
      height,
      width,
      x,
      y
    } = element.bbox(); // And only overwrite if string was passed for this specific axis

    if (condX) {
      ox = ox.includes('left') ? x : ox.includes('right') ? x + width : x + width / 2;
    }

    if (condY) {
      oy = oy.includes('top') ? y : oy.includes('bottom') ? y + height : y + height / 2;
    }
  } // Return the origin as it is if it wasn't a string


  return [ox, oy];
}

var utils = {
  __proto__: null,
  map: map,
  filter: filter,
  radians: radians,
  degrees: degrees,
  camelCase: camelCase,
  unCamelCase: unCamelCase,
  capitalize: capitalize,
  proportionalSize: proportionalSize,
  getOrigin: getOrigin
};

// Default namespaces
const svg = 'http://www.w3.org/2000/svg';
const html = 'http://www.w3.org/1999/xhtml';
const xmlns = 'http://www.w3.org/2000/xmlns/';
const xlink = 'http://www.w3.org/1999/xlink';
const svgjs = 'http://svgjs.dev/svgjs';

var namespaces = {
  __proto__: null,
  svg: svg,
  html: html,
  xmlns: xmlns,
  xlink: xlink,
  svgjs: svgjs
};

const globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};
function registerWindow(win = null, doc = null) {
  globals.window = win;
  globals.document = doc;
}
const save = {};
function saveWindow() {
  save.window = globals.window;
  save.document = globals.document;
}
function restoreWindow() {
  globals.window = save.window;
  globals.document = save.document;
}
function withWindow(win, fn) {
  saveWindow();
  registerWindow(win, win.document);
  fn(win, win.document);
  restoreWindow();
}
function getWindow() {
  return globals.window;
}

class Base {// constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
}

const elements = {};
const root = '___SYMBOL___ROOT___'; // Method for element creation

function create(name, ns = svg) {
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element, isHTML = false) {
  if (element instanceof Base) return element;

  if (typeof element === 'object') {
    return adopter(element);
  }

  if (element == null) {
    return new elements[root]();
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  } // Make sure, that HTML elements are created with the correct namespace


  const wrapper = isHTML ? globals.document.createElement('div') : create('svg');
  wrapper.innerHTML = element; // We can use firstChild here because we know,
  // that the first char is < and thus an element

  element = adopter(wrapper.firstChild); // make sure, that element doesnt have its wrapper attached

  wrapper.removeChild(wrapper.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node && node.ownerDocument && node instanceof node.ownerDocument.defaultView.Node ? node : create(name);
} // Adopt existing svg elements

function adopt(node) {
  // check for presence of node
  if (!node) return null; // make sure a node isn't already adopted

  if (node.instance instanceof Base) return node.instance;

  if (node.nodeName === '#document-fragment') {
    return new elements.Fragment(node);
  } // initialize variables


  let className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'; // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom';
  }

  return new elements[className](node);
}
let adopter = adopt;
function mockAdopt(mock = adopt) {
  adopter = mock;
}
function register(element, name = element.name, asRoot = false) {
  elements[name] = element;
  if (asRoot) elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return elements[name];
} // Element id sequence

let did = 1000; // Get next named element id

function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
} // Deep new id assignment

function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (let i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }

  if (node.id) {
    node.id = eid(node.nodeName);
    return node;
  }

  return node;
} // Method for extending objects

function extend(modules, methods) {
  let key, i;
  modules = Array.isArray(modules) ? modules : [modules];

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      modules[i].prototype[key] = methods[key];
    }
  }
}
function wrapWithAttrCheck(fn) {
  return function (...args) {
    const o = args[args.length - 1];

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}

function siblings() {
  return this.parent().children();
} // Get the current position siblings

function position() {
  return this.parent().index(this);
} // Get the next element (will return null if there is none)

function next() {
  return this.siblings()[this.position() + 1];
} // Get the next element (will return null if there is none)

function prev() {
  return this.siblings()[this.position() - 1];
} // Send given element one step forward

function forward() {
  const i = this.position();
  const p = this.parent(); // move node one step forward

  p.add(this.remove(), i + 1);
  return this;
} // Send given element one step backward

function backward() {
  const i = this.position();
  const p = this.parent();
  p.add(this.remove(), i ? i - 1 : 0);
  return this;
} // Send given element all the way to the front

function front() {
  const p = this.parent(); // Move node forward

  p.add(this.remove());
  return this;
} // Send given element all the way to the back

function back() {
  const p = this.parent(); // Move node back

  p.add(this.remove(), 0);
  return this;
} // Inserts a given element before the targeted element

function before(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i);
  return this;
} // Inserts a given element after the targeted element

function after(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i + 1);
  return this;
}
function insertBefore(element) {
  element = makeInstance(element);
  element.before(this);
  return this;
}
function insertAfter(element) {
  element = makeInstance(element);
  element.after(this);
  return this;
}
registerMethods('Dom', {
  siblings,
  position,
  next,
  prev,
  forward,
  backward,
  front,
  back,
  before,
  after,
  insertBefore,
  insertAfter
});

// Parse unit value
const numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

const rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

const reference = /(#[a-z_][a-z0-9\-_]*)/i; // splits a transformation chain

const transforms = /\)\s*,?\s*/; // Whitespace

const whitespace = /\s/g; // Test hex value

const isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i; // Test rgb value

const isRgb = /^rgb\(/; // Test for blank string

const isBlank = /^(\s+)?$/; // Test for numeric string

const isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for image url

const isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

const delimiter = /[\s,]+/; // Test for path letter

const isPathLetter = /[MLHVCSQTAZ]/i;

var regex = {
  __proto__: null,
  numberAndUnit: numberAndUnit,
  hex: hex,
  rgb: rgb,
  reference: reference,
  transforms: transforms,
  whitespace: whitespace,
  isHex: isHex,
  isRgb: isRgb,
  isBlank: isBlank,
  isNumber: isNumber,
  isImage: isImage,
  delimiter: delimiter,
  isPathLetter: isPathLetter
};

function classes() {
  const attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise

function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
} // Add class to the node

function addClass(name) {
  if (!this.hasClass(name)) {
    const array = this.classes();
    array.push(name);
    this.attr('class', array.join(' '));
  }

  return this;
} // Remove class from the node

function removeClass(name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name;
    }).join(' '));
  }

  return this;
} // Toggle the presence of a class on the node

function toggleClass(name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods('Dom', {
  classes,
  hasClass,
  addClass,
  removeClass,
  toggleClass
});

function css(style, val) {
  const ret = {};

  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      const t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }

  if (arguments.length < 2) {
    // get style properties as array
    if (Array.isArray(style)) {
      for (const name of style) {
        const cased = camelCase(name);
        ret[name] = this.node.style[cased];
      }

      return ret;
    } // get style for property


    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    } // set styles in object


    if (typeof style === 'object') {
      for (const name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(name)] = style[name] == null || isBlank.test(style[name]) ? '' : style[name];
      }
    }
  } // set style for property


  if (arguments.length === 2) {
    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
  }

  return this;
} // Show element

function show() {
  return this.css('display', '');
} // Hide element

function hide() {
  return this.css('display', 'none');
} // Is element visible?

function visible() {
  return this.css('display') !== 'none';
}
registerMethods('Dom', {
  css,
  show,
  hide,
  visible
});

function data(a, v, r) {
  if (a == null) {
    // get an object of attributes
    return this.data(map(filter(this.node.attributes, el => el.nodeName.indexOf('data-') === 0), el => el.nodeName.slice(5)));
  } else if (a instanceof Array) {
    const data = {};

    for (const key of a) {
      data[key] = this.data(key);
    }

    return data;
  } else if (typeof a === 'object') {
    for (v in a) {
      this.data(v, a[v]);
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a));
    } catch (e) {
      return this.attr('data-' + a);
    }
  } else {
    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
  }

  return this;
}
registerMethods('Dom', {
  data
});

function remember(k, v) {
  // remember every item in an object individually
  if (typeof arguments[0] === 'object') {
    for (const key in k) {
      this.remember(key, k[key]);
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k];
  } else {
    // store memory
    this.memory()[k] = v;
  }

  return this;
} // Erase a given memory

function forget() {
  if (arguments.length === 0) {
    this._memory = {};
  } else {
    for (let i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }
  }

  return this;
} // This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object

function memory() {
  return this._memory = this._memory || {};
}
registerMethods('Dom', {
  remember,
  forget,
  memory
});

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

function componentHex(component) {
  const integer = Math.round(component);
  const bounded = Math.max(0, Math.min(255, integer));
  const hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function is(object, space) {
  for (let i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }

  return true;
}

function getParameters(a, b) {
  const params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
    _d: 0,
    space: 'rgb'
  } : is(a, 'xyz') ? {
    _a: a.x,
    _b: a.y,
    _c: a.z,
    _d: 0,
    space: 'xyz'
  } : is(a, 'hsl') ? {
    _a: a.h,
    _b: a.s,
    _c: a.l,
    _d: 0,
    space: 'hsl'
  } : is(a, 'lab') ? {
    _a: a.l,
    _b: a.a,
    _c: a.b,
    _d: 0,
    space: 'lab'
  } : is(a, 'lch') ? {
    _a: a.l,
    _b: a.c,
    _c: a.h,
    _d: 0,
    space: 'lch'
  } : is(a, 'cmyk') ? {
    _a: a.c,
    _b: a.m,
    _c: a.y,
    _d: a.k,
    space: 'cmyk'
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: 'rgb'
  };
  params.space = b || params.space;
  return params;
}

function cieSpace(space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true;
  } else {
    return false;
  }
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

class Color {
  constructor(...inputs) {
    this.init(...inputs);
  } // Test if given value is a color


  static isColor(color) {
    return color && (color instanceof Color || this.isRgb(color) || this.test(color));
  } // Test if given value is an rgb object


  static isRgb(color) {
    return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
  }
  /*
  Generating random colors
  */


  static random(mode = 'vibrant', t, u) {
    // Get the math modules
    const {
      random,
      round,
      sin,
      PI: pi
    } = Math; // Run the correct generator

    if (mode === 'vibrant') {
      const l = (81 - 57) * random() + 57;
      const c = (83 - 45) * random() + 45;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'sine') {
      t = t == null ? random() : t;
      const r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
      const g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
      const b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'pastel') {
      const l = (94 - 86) * random() + 86;
      const c = (26 - 9) * random() + 9;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'dark') {
      const l = 10 + 10 * random();
      const c = (125 - 75) * random() + 86;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'rgb') {
      const r = 255 * random();
      const g = 255 * random();
      const b = 255 * random();
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'lab') {
      const l = 100 * random();
      const a = 256 * random() - 128;
      const b = 256 * random() - 128;
      const color = new Color(l, a, b, 'lab');
      return color;
    } else if (mode === 'grey') {
      const grey = 255 * random();
      const color = new Color(grey, grey, grey);
      return color;
    } else {
      throw new Error('Unsupported random color mode');
    }
  } // Test if given value is a color string


  static test(color) {
    return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
  }

  cmyk() {
    // Get the rgb values for the current color
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Get the cmyk values in an unbounded format

    const k = Math.min(1 - r, 1 - g, 1 - b);

    if (k === 1) {
      // Catch the black case
      return new Color(0, 0, 0, 1, 'cmyk');
    }

    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k); // Construct the new color

    const color = new Color(c, m, y, k, 'cmyk');
    return color;
  }

  hsl() {
    // Get the rgb values
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Find the maximum and minimum values to get the lightness

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2; // If the r, g, v values are identical then we are grey

    const isGrey = max === min; // Calculate the hue and saturation

    const delta = max - min;
    const s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    const h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

    const color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
    return color;
  }

  init(a = 0, b = 0, c = 0, d = 0, space = 'rgb') {
    // This catches the case when a falsy value is passed like ''
    a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

    if (this.space) {
      for (const component in this.space) {
        delete this[this.space[component]];
      }
    }

    if (typeof a === 'number') {
      // Allow for the case that we don't need d...
      space = typeof d === 'string' ? d : space;
      d = typeof d === 'string' ? 0 : d; // Assign the values straight to the color

      Object.assign(this, {
        _a: a,
        _b: b,
        _c: c,
        _d: d,
        space
      }); // If the user gave us an array, make the color from it
    } else if (a instanceof Array) {
      this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
      Object.assign(this, {
        _a: a[0],
        _b: a[1],
        _c: a[2],
        _d: a[3] || 0
      });
    } else if (a instanceof Object) {
      // Set the object up and assign its values directly
      const values = getParameters(a, b);
      Object.assign(this, values);
    } else if (typeof a === 'string') {
      if (isRgb.test(a)) {
        const noWhitespace = a.replace(whitespace, '');
        const [_a, _b, _c] = rgb.exec(noWhitespace).slice(1, 4).map(v => parseInt(v));
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else if (isHex.test(a)) {
        const hexParse = v => parseInt(v, 16);

        const [, _a, _b, _c] = hex.exec(sixDigitHex(a)).map(hexParse);
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else throw Error('Unsupported string format, can\'t construct Color');
    } // Now add the components as a convenience


    const {
      _a,
      _b,
      _c,
      _d
    } = this;
    const components = this.space === 'rgb' ? {
      r: _a,
      g: _b,
      b: _c
    } : this.space === 'xyz' ? {
      x: _a,
      y: _b,
      z: _c
    } : this.space === 'hsl' ? {
      h: _a,
      s: _b,
      l: _c
    } : this.space === 'lab' ? {
      l: _a,
      a: _b,
      b: _c
    } : this.space === 'lch' ? {
      l: _a,
      c: _b,
      h: _c
    } : this.space === 'cmyk' ? {
      c: _a,
      m: _b,
      y: _c,
      k: _d
    } : {};
    Object.assign(this, components);
  }

  lab() {
    // Get the xyz color
    const {
      x,
      y,
      z
    } = this.xyz(); // Get the lab components

    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z); // Construct and return a new color

    const color = new Color(l, a, b, 'lab');
    return color;
  }

  lch() {
    // Get the lab color directly
    const {
      l,
      a,
      b
    } = this.lab(); // Get the chromaticity and the hue using polar coordinates

    const c = Math.sqrt(a ** 2 + b ** 2);
    let h = 180 * Math.atan2(b, a) / Math.PI;

    if (h < 0) {
      h *= -1;
      h = 360 - h;
    } // Make a new color and return it


    const color = new Color(l, c, h, 'lch');
    return color;
  }
  /*
  Conversion Methods
  */


  rgb() {
    if (this.space === 'rgb') {
      return this;
    } else if (cieSpace(this.space)) {
      // Convert to the xyz color space
      let {
        x,
        y,
        z
      } = this;

      if (this.space === 'lab' || this.space === 'lch') {
        // Get the values in the lab space
        let {
          l,
          a,
          b
        } = this;

        if (this.space === 'lch') {
          const {
            c,
            h
          } = this;
          const dToR = Math.PI / 180;
          a = c * Math.cos(dToR * h);
          b = c * Math.sin(dToR * h);
        } // Undo the nonlinear function


        const yL = (l + 16) / 116;
        const xL = a / 500 + yL;
        const zL = yL - b / 200; // Get the xyz values

        const ct = 16 / 116;
        const mx = 0.008856;
        const nm = 7.787;
        x = 0.95047 * (xL ** 3 > mx ? xL ** 3 : (xL - ct) / nm);
        y = 1.00000 * (yL ** 3 > mx ? yL ** 3 : (yL - ct) / nm);
        z = 1.08883 * (zL ** 3 > mx ? zL ** 3 : (zL - ct) / nm);
      } // Convert xyz to unbounded rgb values


      const rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
      const gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
      const bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

      const pow = Math.pow;
      const bd = 0.0031308;
      const r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
      const g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
      const b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

      const color = new Color(255 * r, 255 * g, 255 * b);
      return color;
    } else if (this.space === 'hsl') {
      // https://bgrins.github.io/TinyColor/docs/tinycolor.html
      // Get the current hsl values
      let {
        h,
        s,
        l
      } = this;
      h /= 360;
      s /= 100;
      l /= 100; // If we are grey, then just make the color directly

      if (s === 0) {
        l *= 255;
        const color = new Color(l, l, l);
        return color;
      } // TODO I have no idea what this does :D If you figure it out, tell me!


      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q; // Get the rgb values

      const r = 255 * hueToRgb(p, q, h + 1 / 3);
      const g = 255 * hueToRgb(p, q, h);
      const b = 255 * hueToRgb(p, q, h - 1 / 3); // Make a new color

      const color = new Color(r, g, b);
      return color;
    } else if (this.space === 'cmyk') {
      // https://gist.github.com/felipesabino/5066336
      // Get the normalised cmyk values
      const {
        c,
        m,
        y,
        k
      } = this; // Get the rgb values

      const r = 255 * (1 - Math.min(1, c * (1 - k) + k));
      const g = 255 * (1 - Math.min(1, m * (1 - k) + k));
      const b = 255 * (1 - Math.min(1, y * (1 - k) + k)); // Form the color and return it

      const color = new Color(r, g, b);
      return color;
    } else {
      return this;
    }
  }

  toArray() {
    const {
      _a,
      _b,
      _c,
      _d,
      space
    } = this;
    return [_a, _b, _c, _d, space];
  }

  toHex() {
    const [r, g, b] = this._clamped().map(componentHex);

    return `#${r}${g}${b}`;
  }

  toRgb() {
    const [rV, gV, bV] = this._clamped();

    const string = `rgb(${rV},${gV},${bV})`;
    return string;
  }

  toString() {
    return this.toHex();
  }

  xyz() {
    // Normalise the red, green and blue values
    const {
      _a: r255,
      _b: g255,
      _c: b255
    } = this.rgb();
    const [r, g, b] = [r255, g255, b255].map(v => v / 255); // Convert to the lab rgb space

    const rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    const gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    const bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

    const xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
    const yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
    const zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

    const x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
    const y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
    const z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

    const color = new Color(x, y, z, 'xyz');
    return color;
  }
  /*
  Input and Output methods
  */


  _clamped() {
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const {
      max,
      min,
      round
    } = Math;

    const format = v => max(0, min(round(v), 255));

    return [_a, _b, _c].map(format);
  }
  /*
  Constructing colors
  */


}

class Point {
  // Initialize
  constructor(...args) {
    this.init(...args);
  } // Clone point


  clone() {
    return new Point(this);
  }

  init(x, y) {
    const base = {
      x: 0,
      y: 0
    }; // ensure source as object

    const source = Array.isArray(x) ? {
      x: x[0],
      y: x[1]
    } : typeof x === 'object' ? {
      x: x.x,
      y: x.y
    } : {
      x: x,
      y: y
    }; // merge source

    this.x = source.x == null ? base.x : source.x;
    this.y = source.y == null ? base.y : source.y;
    return this;
  }

  toArray() {
    return [this.x, this.y];
  }

  transform(m) {
    return this.clone().transformO(m);
  } // Transform point with matrix


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    const {
      x,
      y
    } = this; // Perform the matrix multiplication

    this.x = m.a * x + m.c * y + m.e;
    this.y = m.b * x + m.d * y + m.f;
    return this;
  }

}
function point(x, y) {
  return new Point(x, y).transform(this.screenCTM().inverse());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6);
}

class Matrix {
  constructor(...args) {
    this.init(...args);
  }

  static formatTransforms(o) {
    // Get all of the parameters required to form the matrix
    const flipBoth = o.flip === 'both' || o.flip === true;
    const flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
    const flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
    const skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
    const skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
    const scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
    const scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
    const shear = o.shear || 0;
    const theta = o.rotate || o.theta || 0;
    const origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
    const ox = origin.x;
    const oy = origin.y; // We need Point to be invalid if nothing was passed because we cannot default to 0 here. Thats why NaN

    const position = new Point(o.position || o.px || o.positionX || NaN, o.py || o.positionY || NaN);
    const px = position.x;
    const py = position.y;
    const translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
    const tx = translate.x;
    const ty = translate.y;
    const relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
    const rx = relative.x;
    const ry = relative.y; // Populate all of the values

    return {
      scaleX,
      scaleY,
      skewX,
      skewY,
      shear,
      theta,
      rx,
      ry,
      tx,
      ty,
      ox,
      oy,
      px,
      py
    };
  }

  static fromArray(a) {
    return {
      a: a[0],
      b: a[1],
      c: a[2],
      d: a[3],
      e: a[4],
      f: a[5]
    };
  }

  static isMatrixLike(o) {
    return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
  } // left matrix, right matrix, target matrix which is overwritten


  static matrixMultiply(l, r, o) {
    // Work out the product directly
    const a = l.a * r.a + l.c * r.b;
    const b = l.b * r.a + l.d * r.b;
    const c = l.a * r.c + l.c * r.d;
    const d = l.b * r.c + l.d * r.d;
    const e = l.e + l.a * r.e + l.c * r.f;
    const f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

    o.a = a;
    o.b = b;
    o.c = c;
    o.d = d;
    o.e = e;
    o.f = f;
    return o;
  }

  around(cx, cy, matrix) {
    return this.clone().aroundO(cx, cy, matrix);
  } // Transform around a center point


  aroundO(cx, cy, matrix) {
    const dx = cx || 0;
    const dy = cy || 0;
    return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
  } // Clones this matrix


  clone() {
    return new Matrix(this);
  } // Decomposes this matrix into its affine parameters


  decompose(cx = 0, cy = 0) {
    // Get the parameters from the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

    const determinant = a * d - b * c;
    const ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
    // and the rotation of the resulting matrix

    const sx = ccw * Math.sqrt(a * a + b * b);
    const thetaRad = Math.atan2(ccw * b, ccw * a);
    const theta = 180 / Math.PI * thetaRad;
    const ct = Math.cos(thetaRad);
    const st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
    // two affine parameters directly from these parameters

    const lam = (a * c + b * d) / determinant;
    const sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

    const tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
    const ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

    return {
      // Return the affine parameters
      scaleX: sx,
      scaleY: sy,
      shear: lam,
      rotate: theta,
      translateX: tx,
      translateY: ty,
      originX: cx,
      originY: cy,
      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  } // Check if two matrices are equal


  equals(other) {
    if (other === this) return true;
    const comp = new Matrix(other);
    return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
  } // Flip matrix on x or y, at a given offset


  flip(axis, around) {
    return this.clone().flipO(axis, around);
  }

  flipO(axis, around) {
    return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
  } // Initialize


  init(source) {
    const base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

    source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : typeof source === 'object' && Matrix.isMatrixLike(source) ? source : typeof source === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

    this.a = source.a != null ? source.a : base.a;
    this.b = source.b != null ? source.b : base.b;
    this.c = source.c != null ? source.c : base.c;
    this.d = source.d != null ? source.d : base.d;
    this.e = source.e != null ? source.e : base.e;
    this.f = source.f != null ? source.f : base.f;
    return this;
  }

  inverse() {
    return this.clone().inverseO();
  } // Inverses matrix


  inverseO() {
    // Get the current parameters out of the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Invert the 2x2 matrix in the top left

    const det = a * d - b * c;
    if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

    const na = d / det;
    const nb = -b / det;
    const nc = -c / det;
    const nd = a / det; // Apply the inverted matrix to the top right

    const ne = -(na * e + nc * f);
    const nf = -(nb * e + nd * f); // Construct the inverted matrix

    this.a = na;
    this.b = nb;
    this.c = nc;
    this.d = nd;
    this.e = ne;
    this.f = nf;
    return this;
  }

  lmultiply(matrix) {
    return this.clone().lmultiplyO(matrix);
  }

  lmultiplyO(matrix) {
    const r = this;
    const l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Left multiplies by the given matrix


  multiply(matrix) {
    return this.clone().multiplyO(matrix);
  }

  multiplyO(matrix) {
    // Get the matrices
    const l = this;
    const r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Rotate matrix


  rotate(r, cx, cy) {
    return this.clone().rotateO(r, cx, cy);
  }

  rotateO(r, cx = 0, cy = 0) {
    // Convert degrees to radians
    r = radians(r);
    const cos = Math.cos(r);
    const sin = Math.sin(r);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * cos - b * sin;
    this.b = b * cos + a * sin;
    this.c = c * cos - d * sin;
    this.d = d * cos + c * sin;
    this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
    this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
    return this;
  } // Scale matrix


  scale(x, y, cx, cy) {
    return this.clone().scaleO(...arguments);
  }

  scaleO(x, y = x, cx = 0, cy = 0) {
    // Support uniform scaling
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    }

    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * x;
    this.b = b * y;
    this.c = c * x;
    this.d = d * y;
    this.e = e * x - cx * x + cx;
    this.f = f * y - cy * y + cy;
    return this;
  } // Shear matrix


  shear(a, cx, cy) {
    return this.clone().shearO(a, cx, cy);
  }

  shearO(lx, cx = 0, cy = 0) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.c = c + d * lx;
    this.e = e + f * lx - cy * lx;
    return this;
  } // Skew Matrix


  skew(x, y, cx, cy) {
    return this.clone().skewO(...arguments);
  }

  skewO(x, y = x, cx = 0, cy = 0) {
    // support uniformal skew
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    } // Convert degrees to radians


    x = radians(x);
    y = radians(y);
    const lx = Math.tan(x);
    const ly = Math.tan(y);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.b = b + a * ly;
    this.c = c + d * lx;
    this.d = d + c * ly;
    this.e = e + f * lx - cy * lx;
    this.f = f + e * ly - cx * ly;
    return this;
  } // SkewX


  skewX(x, cx, cy) {
    return this.skew(x, 0, cx, cy);
  } // SkewY


  skewY(y, cx, cy) {
    return this.skew(0, y, cx, cy);
  }

  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  } // Convert matrix to string


  toString() {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
  } // Transform a matrix into another matrix by manipulating the space


  transform(o) {
    // Check if o is a matrix and then left multiply it directly
    if (Matrix.isMatrixLike(o)) {
      const matrix = new Matrix(o);
      return matrix.multiplyO(this);
    } // Get the proposed transformations and the current transformations


    const t = Matrix.formatTransforms(o);
    const current = this;
    const {
      x: ox,
      y: oy
    } = new Point(t.ox, t.oy).transform(current); // Construct the resulting matrix

    const transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

    if (isFinite(t.px) || isFinite(t.py)) {
      const origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)
      // Doesnt work because t.px is also 0 if it wasnt passed

      const dx = isFinite(t.px) ? t.px - origin.x : 0;
      const dy = isFinite(t.py) ? t.py - origin.y : 0;
      transformer.translateO(dx, dy);
    } // Translate now after positioning


    transformer.translateO(t.tx, t.ty);
    return transformer;
  } // Translate matrix


  translate(x, y) {
    return this.clone().translateO(x, y);
  }

  translateO(x, y) {
    this.e += x || 0;
    this.f += y || 0;
    return this;
  }

  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }

}
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    const rect = this.rect(1, 1);
    const m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }

  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    const svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    const path = svg.path().node;
    parser.nodes = {
      svg,
      path
    };
  }

  if (!parser.nodes.svg.node.parentNode) {
    const b = globals.document.body || globals.document.documentElement;
    parser.nodes.svg.addTo(b);
  }

  return parser.nodes;
}

function isNulledBox(box) {
  return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node) {
  return node === globals.document || (globals.document.documentElement.contains || function (node) {
    // This is IE - it does not support contains() for top-level SVGs
    while (node.parentNode) {
      node = node.parentNode;
    }

    return node === globals.document;
  }).call(globals.document.documentElement, node);
}
class Box {
  constructor(...args) {
    this.init(...args);
  }

  addOffset() {
    // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
    this.x += globals.window.pageXOffset;
    this.y += globals.window.pageYOffset;
    return new Box(this);
  }

  init(source) {
    const base = [0, 0, 0, 0];
    source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : typeof source === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
    this.x = source[0] || 0;
    this.y = source[1] || 0;
    this.width = this.w = source[2] || 0;
    this.height = this.h = source[3] || 0; // Add more bounding box properties

    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
    this.cx = this.x + this.w / 2;
    this.cy = this.y + this.h / 2;
    return this;
  }

  isNulled() {
    return isNulledBox(this);
  } // Merge rect box with another, return a new instance


  merge(box) {
    const x = Math.min(this.x, box.x);
    const y = Math.min(this.y, box.y);
    const width = Math.max(this.x + this.width, box.x + box.width) - x;
    const height = Math.max(this.y + this.height, box.y + box.height) - y;
    return new Box(x, y, width, height);
  }

  toArray() {
    return [this.x, this.y, this.width, this.height];
  }

  toString() {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
  }

  transform(m) {
    if (!(m instanceof Matrix)) {
      m = new Matrix(m);
    }

    let xMin = Infinity;
    let xMax = -Infinity;
    let yMin = Infinity;
    let yMax = -Infinity;
    const pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
    pts.forEach(function (p) {
      p = p.transform(m);
      xMin = Math.min(xMin, p.x);
      xMax = Math.max(xMax, p.x);
      yMin = Math.min(yMin, p.y);
      yMax = Math.max(yMax, p.y);
    });
    return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
  }

}

function getBox(el, getBBoxFn, retry) {
  let box;

  try {
    // Try to get the box with the provided function
    box = getBBoxFn(el.node); // If the box is worthless and not even in the dom, retry
    // by throwing an error here...

    if (isNulledBox(box) && !domContains(el.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    // ... and calling the retry handler here
    box = retry(el);
  }

  return box;
}

function bbox() {
  // Function to get bbox is getBBox()
  const getBBox = node => node.getBBox(); // Take all measures so that a stupid browser renders the element
  // so we can get the bbox from it when we try again


  const retry = el => {
    try {
      const clone = el.clone().addTo(parser().svg).show();
      const box = clone.node.getBBox();
      clone.remove();
      return box;
    } catch (e) {
      // We give up...
      throw new Error(`Getting bbox of element "${el.node.nodeName}" is not possible: ${e.toString()}`);
    }
  };

  const box = getBox(this, getBBox, retry);
  const bbox = new Box(box);
  return bbox;
}
function rbox(el) {
  const getRBox = node => node.getBoundingClientRect();

  const retry = el => {
    // There is no point in trying tricks here because if we insert the element into the dom ourselves
    // it obviously will be at the wrong position
    throw new Error(`Getting rbox of element "${el.node.nodeName}" is not possible`);
  };

  const box = getBox(this, getRBox, retry);
  const rbox = new Box(box); // If an element was passed, we want the bbox in the coordinate system of that element

  if (el) {
    return rbox.transform(el.screenCTM().inverseO());
  } // Else we want it in absolute screen coordinates
  // Therefore we need to add the scrollOffset


  return rbox.addOffset();
} // Checks whether the given point is inside the bounding box

function inside(x, y) {
  const box = this.bbox();
  return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
}
registerMethods({
  viewbox: {
    viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox')); // act as setter

      return this.attr('viewBox', new Box(x, y, width, height));
    },

    zoom(level, point) {
      // Its best to rely on the attributes here and here is why:
      // clientXYZ: Doesn't work on non-root svgs because they dont have a CSSBox (silly!)
      // getBoundingClientRect: Doesn't work because Chrome just ignores width and height of nested svgs completely
      //                        that means, their clientRect is always as big as the content.
      //                        Furthermore this size is incorrect if the element is further transformed by its parents
      // computedStyle: Only returns meaningful values if css was used with px. We dont go this route here!
      // getBBox: returns the bounding box of its content - that doesnt help!
      let {
        width,
        height
      } = this.attr(['width', 'height']); // Width and height is a string when a number with a unit is present which we can't use
      // So we try clientXYZ

      if (!width && !height || typeof width === 'string' || typeof height === 'string') {
        width = this.node.clientWidth;
        height = this.node.clientHeight;
      } // Giving up...


      if (!width || !height) {
        throw new Error('Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element');
      }

      const v = this.viewbox();
      const zoomX = width / v.width;
      const zoomY = height / v.height;
      const zoom = Math.min(zoomX, zoomY);

      if (level == null) {
        return zoom;
      }

      let zoomAmount = zoom / level; // Set the zoomAmount to the highest value which is safe to process and recover from
      // The * 100 is a bit of wiggle room for the matrix transformation

      if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      const box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }

  }
});
register(Box, 'Box');

class List extends Array {
  constructor(arr = [], ...args) {
    super(arr, ...args);
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...arr);
  }

}
extend([List], {
  each(fnOrMethodName, ...args) {
    if (typeof fnOrMethodName === 'function') {
      return this.map((el, i, arr) => {
        return fnOrMethodName.call(el, el, i, arr);
      });
    } else {
      return this.map(el => {
        return el[fnOrMethodName](...args);
      });
    }
  },

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

});
const reserved = ['toArray', 'constructor', 'each'];

List.extend = function (methods) {
  methods = methods.reduce((obj, name) => {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj; // Don't add private methods

    if (name[0] === '_') return obj; // Relay every call to each()

    obj[name] = function (...attrs) {
      return this.each(name, ...attrs);
    };

    return obj;
  }, {});
  extend([List], methods);
};

function baseFind(query, parent) {
  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node);
  }));
} // Scoped find method

function find(query) {
  return baseFind(query, this.node);
}
function findOne(query) {
  return adopt(this.node.querySelector(query));
}

let listenerId = 0;
const windowEvents = {};
function getEvents(instance) {
  let n = instance.getEventHolder(); // We dont want to save events in global space

  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}
function getEventTarget(instance) {
  return instance.getEventTarget();
}
function clearEvents(instance) {
  let n = instance.getEventHolder();
  if (n === globals.window) n = windowEvents;
  if (n.events) n.events = {};
} // Add event binder in the SVG namespace

function on(node, events, listener, binding, options) {
  const l = listener.bind(binding || node);
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // events can be an array of events or a string of events

  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }

  events.forEach(function (event) {
    const ev = event.split('.')[0];
    const ns = event.split('.')[1] || '*'; // ensure valid object

    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

    n.addEventListener(ev, l, options || false);
  });
} // Add event unbinder in the SVG namespace

function off(node, events, listener, options) {
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // listener can be a function or a number

  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  } // events can be an array of events or a string or undefined


  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    const ev = event && event.split('.')[0];
    const ns = event && event.split('.')[1];
    let namespace, l;

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
        delete bag[ev][ns || '*'][listener];
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ev, ns].join('.'), l);
        }

        delete bag[ev][ns];
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [event, ns].join('.'));
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ev, namespace].join('.'));
        }

        delete bag[ev];
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event);
      }

      clearEvents(instance);
    }
  });
}
function dispatch(node, event, data, options) {
  const n = getEventTarget(node); // Dispatch event

  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, {
      detail: data,
      cancelable: true,
      ...options
    });
    n.dispatchEvent(event);
  }

  return event;
}

class EventTarget extends Base {
  addEventListener() {}

  dispatch(event, data, options) {
    return dispatch(this, event, data, options);
  }

  dispatchEvent(event) {
    const bag = this.getEventHolder().events;
    if (!bag) return true;
    const events = bag[event.type];

    for (const i in events) {
      for (const j in events[i]) {
        events[i][j](event);
      }
    }

    return !event.defaultPrevented;
  } // Fire given event


  fire(event, data, options) {
    this.dispatch(event, data, options);
    return this;
  }

  getEventHolder() {
    return this;
  }

  getEventTarget() {
    return this;
  } // Unbind event from listener


  off(event, listener, options) {
    off(this, event, listener, options);
    return this;
  } // Bind given event to listener


  on(event, listener, binding, options) {
    on(this, event, listener, binding, options);
    return this;
  }

  removeEventListener() {}

}
register(EventTarget, 'EventTarget');

function noop() {} // Default animation values

const timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}; // Default attribute values

const attrs = {
  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',
  // text
  'text-anchor': 'start'
};

var defaults = {
  __proto__: null,
  noop: noop,
  timeline: timeline,
  attrs: attrs
};

class SVGArray extends Array {
  constructor(...args) {
    super(...args);
    this.init(...args);
  }

  clone() {
    return new this.constructor(this);
  }

  init(arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...this.parse(arr));
    return this;
  } // Parse whitespace separated string


  parse(array = []) {
    // If already is an array, no need to parse it
    if (array instanceof Array) return array;
    return array.trim().split(delimiter).map(parseFloat);
  }

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

  toSet() {
    return new Set(this);
  }

  toString() {
    return this.join(' ');
  } // Flattens the array if needed


  valueOf() {
    const ret = [];
    ret.push(...this);
    return ret;
  }

}

class SVGNumber {
  // Initialize
  constructor(...args) {
    this.init(...args);
  }

  convert(unit) {
    return new SVGNumber(this.value, unit);
  } // Divide number


  divide(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this / number, this.unit || number.unit);
  }

  init(value, unit) {
    unit = Array.isArray(value) ? value[1] : unit;
    value = Array.isArray(value) ? value[0] : value; // initialize defaults

    this.value = 0;
    this.unit = unit || ''; // parse value

    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
    } else if (typeof value === 'string') {
      unit = value.match(numberAndUnit);

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1]); // normalize

        if (unit[5] === '%') {
          this.value /= 100;
        } else if (unit[5] === 's') {
          this.value *= 1000;
        } // store unit


        this.unit = unit[5];
      }
    } else {
      if (value instanceof SVGNumber) {
        this.value = value.valueOf();
        this.unit = value.unit;
      }
    }

    return this;
  } // Subtract number


  minus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this - number, this.unit || number.unit);
  } // Add number


  plus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this + number, this.unit || number.unit);
  } // Multiply number


  times(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this * number, this.unit || number.unit);
  }

  toArray() {
    return [this.value, this.unit];
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
  }

  valueOf() {
    return this.value;
  }

}

const hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
} // Set svg element attribute

function attr(attr, val, ns) {
  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;

    for (const node of val) {
      attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
    }

    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce((last, curr) => {
      last[curr] = this.attr(curr);
      return last;
    }, {});
  } else if (typeof attr === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) this.attr(val, attr[val]);
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce((_val, hook) => {
      return hook(attr, _val, this);
    }, val); // ensure correct numeric values (also accepts NaN and Infinity)

    if (typeof val === 'number') {
      val = new SVGNumber(val);
    } else if (Color.isColor(val)) {
      // ensure full hex color
      val = new Color(val);
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new SVGArray(val);
    } // if the passed attribute is leading...


    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val);
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
    } // rebuild if required


    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild();
    }
  }

  return this;
}

class Dom extends EventTarget {
  constructor(node, attrs) {
    super();
    this.node = node;
    this.type = node.nodeName;

    if (attrs && node !== attrs) {
      this.attr(attrs);
    }
  } // Add given element at a position


  add(element, i) {
    element = makeInstance(element); // If non-root svg nodes are added we have to remove their namespaces

    if (element.removeNamespace && this.node instanceof globals.window.SVGElement) {
      element.removeNamespace();
    }

    if (i == null) {
      this.node.appendChild(element.node);
    } else if (element.node !== this.node.childNodes[i]) {
      this.node.insertBefore(element.node, this.node.childNodes[i]);
    }

    return this;
  } // Add element to given container and return self


  addTo(parent, i) {
    return makeInstance(parent).put(this, i);
  } // Returns all child elements


  children() {
    return new List(map(this.node.children, function (node) {
      return adopt(node);
    }));
  } // Remove all elements in this container


  clear() {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild);
    }

    return this;
  } // Clone element


  clone(deep = true) {
    // write dom data to the dom so the clone can pickup the data
    this.writeDataToDom(); // clone element and assign new id

    return new this.constructor(assignNewId(this.node.cloneNode(deep)));
  } // Iterates over all children and invokes a given block


  each(block, deep) {
    const children = this.children();
    let i, il;

    for (i = 0, il = children.length; i < il; i++) {
      block.apply(children[i], [i, children]);

      if (deep) {
        children[i].each(block, deep);
      }
    }

    return this;
  }

  element(nodeName, attrs) {
    return this.put(new Dom(create(nodeName), attrs));
  } // Get first child


  first() {
    return adopt(this.node.firstChild);
  } // Get a element at the given index


  get(i) {
    return adopt(this.node.childNodes[i]);
  }

  getEventHolder() {
    return this.node;
  }

  getEventTarget() {
    return this.node;
  } // Checks if the given element is a child


  has(element) {
    return this.index(element) >= 0;
  }

  html(htmlOrFn, outerHTML) {
    return this.xml(htmlOrFn, outerHTML, html);
  } // Get / set id


  id(id) {
    // generate new id if no id set
    if (typeof id === 'undefined' && !this.node.id) {
      this.node.id = eid(this.type);
    } // don't set directly with this.node.id to make `null` work correctly


    return this.attr('id', id);
  } // Gets index of given element


  index(element) {
    return [].slice.call(this.node.childNodes).indexOf(element.node);
  } // Get the last child


  last() {
    return adopt(this.node.lastChild);
  } // matches the element vs a css selector


  matches(selector) {
    const el = this.node;
    const matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
    return matcher && matcher.call(el, selector);
  } // Returns the parent element instance


  parent(type) {
    let parent = this; // check for parent

    if (!parent.node.parentNode) return null; // get parent element

    parent = adopt(parent.node.parentNode);
    if (!type) return parent; // loop trough ancestors if type is given

    do {
      if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
    } while (parent = adopt(parent.node.parentNode));

    return parent;
  } // Basically does the same as `add()` but returns the added element instead


  put(element, i) {
    element = makeInstance(element);
    this.add(element, i);
    return element;
  } // Add element to given container and return container


  putIn(parent, i) {
    return makeInstance(parent).add(this, i);
  } // Remove element


  remove() {
    if (this.parent()) {
      this.parent().removeElement(this);
    }

    return this;
  } // Remove a given child


  removeElement(element) {
    this.node.removeChild(element.node);
    return this;
  } // Replace this with element


  replace(element) {
    element = makeInstance(element);

    if (this.node.parentNode) {
      this.node.parentNode.replaceChild(element.node, this.node);
    }

    return element;
  }

  round(precision = 2, map = null) {
    const factor = 10 ** precision;
    const attrs = this.attr(map);

    for (const i in attrs) {
      if (typeof attrs[i] === 'number') {
        attrs[i] = Math.round(attrs[i] * factor) / factor;
      }
    }

    this.attr(attrs);
    return this;
  } // Import / Export raw svg


  svg(svgOrFn, outerSVG) {
    return this.xml(svgOrFn, outerSVG, svg);
  } // Return id on string conversion


  toString() {
    return this.id();
  }

  words(text) {
    // This is faster than removing all children and adding a new one
    this.node.textContent = text;
    return this;
  }

  wrap(node) {
    const parent = this.parent();

    if (!parent) {
      return this.addTo(node);
    }

    const position = parent.index(this);
    return parent.put(node, position).put(this);
  } // write svgjs data to the dom


  writeDataToDom() {
    // dump variables recursively
    this.each(function () {
      this.writeDataToDom();
    });
    return this;
  } // Import / Export raw svg


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // act as getter if no svg string is given


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      // The default for exports is, that the outerNode is included
      outerXML = outerXML == null ? true : outerXML; // write svgjs data to the dom

      this.writeDataToDom();
      let current = this; // An export modifier was passed

      if (xmlOrFn != null) {
        current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

        if (outerXML) {
          const result = xmlOrFn(current);
          current = result || current; // The user does not want this node? Well, then he gets nothing

          if (result === false) return '';
        } // Deep loop through all children and apply modifier


        current.each(function () {
          const result = xmlOrFn(this);

          const _this = result || this; // If modifier returns false, discard node


          if (result === false) {
            this.remove(); // If modifier returns new node, use it
          } else if (result && this !== _this) {
            this.replace(_this);
          }
        }, true);
      } // Return outer or inner content


      return outerXML ? current.node.outerHTML : current.node.innerHTML;
    } // Act as setter if we got a string
    // The default for import is, that the current node is not replaced


    outerXML = outerXML == null ? false : outerXML; // Create temporary holder

    const well = create('wrapper', ns);
    const fragment = globals.document.createDocumentFragment(); // Dump raw svg

    well.innerHTML = xmlOrFn; // Transplant nodes into the fragment

    for (let len = well.children.length; len--;) {
      fragment.appendChild(well.firstElementChild);
    }

    const parent = this.parent(); // Add the whole fragment at once

    return outerXML ? this.replace(fragment) && parent : this.add(fragment);
  }

}
extend(Dom, {
  attr,
  find,
  findOne
});
register(Dom, 'Dom');

class Element extends Dom {
  constructor(node, attrs) {
    super(node, attrs); // initialize data object

    this.dom = {}; // create circular reference

    this.node.instance = this;

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }
  } // Move element by its center


  center(x, y) {
    return this.cx(x).cy(y);
  } // Move by center over x-axis


  cx(x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
  } // Move by center over y-axis


  cy(y) {
    return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
  } // Get defs


  defs() {
    const root = this.root();
    return root && root.defs();
  } // Relative move over x and y axes


  dmove(x, y) {
    return this.dx(x).dy(y);
  } // Relative move over x axis


  dx(x = 0) {
    return this.x(new SVGNumber(x).plus(this.x()));
  } // Relative move over y axis


  dy(y = 0) {
    return this.y(new SVGNumber(y).plus(this.y()));
  }

  getEventHolder() {
    return this;
  } // Set height of element


  height(height) {
    return this.attr('height', height);
  } // Move element to given x and y values


  move(x, y) {
    return this.x(x).y(y);
  } // return array of all ancestors of given type up to the root svg


  parents(until = this.root()) {
    const isSelector = typeof until === 'string';

    if (!isSelector) {
      until = makeInstance(until);
    }

    const parents = new List();
    let parent = this;

    while ((parent = parent.parent()) && parent.node !== globals.document && parent.nodeName !== '#document-fragment') {
      parents.push(parent);

      if (!isSelector && parent.node === until.node) {
        break;
      }

      if (isSelector && parent.matches(until)) {
        break;
      }

      if (parent.node === this.root().node) {
        // We worked our way to the root and didn't match `until`
        return null;
      }
    }

    return parents;
  } // Get referenced element form attribute value


  reference(attr) {
    attr = this.attr(attr);
    if (!attr) return null;
    const m = (attr + '').match(reference);
    return m ? makeInstance(m[1]) : null;
  } // Get parent document


  root() {
    const p = this.parent(getClass(root));
    return p && p.root();
  } // set given data to the elements data property


  setData(o) {
    this.dom = o;
    return this;
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
  } // Set width of element


  width(width) {
    return this.attr('width', width);
  } // write svgjs data to the dom


  writeDataToDom() {
    // remove previously set data
    this.node.removeAttribute('svgjs:data');

    if (Object.keys(this.dom).length) {
      this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
    }

    return super.writeDataToDom();
  } // Move over x-axis


  x(x) {
    return this.attr('x', x);
  } // Move over y-axis


  y(y) {
    return this.attr('y', y);
  }

}
extend(Element, {
  bbox,
  rbox,
  inside,
  point,
  ctm,
  screenCTM
});
register(Element, 'Element');

const sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function (t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
} // Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  const extension = {};
  let i;

  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m);
    }

    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
      this.attr(m, o);
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
        }
      }
    }

    return this;
  };

  registerMethods(['Element', 'Runner'], extension);
});
registerMethods(['Element', 'Runner'], {
  // Let the user set the matrix directly
  matrix: function (mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    } // Act as a setter, the user can pass a matrix or a set of numbers


    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function (angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      skew: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  shear: function (lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      scale: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  // Map translate to transform
  translate: function (x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function (x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function (direction = 'both', origin = 'center') {
    if ('xybothtrue'.indexOf(direction) === -1) {
      origin = direction;
      direction = 'both';
    }

    return this.transform({
      flip: direction,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function (value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function (x, y = x) {
    const type = (this._element || this).type;
    return type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function () {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function (length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function (a, v) {
    if (typeof a === 'object') {
      for (v in a) this.font(v, a[v]);

      return this;
    }

    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
}); // Add events to elements

const methods = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  const fn = function (f) {
    if (f === null) {
      this.off(event);
    } else {
      this.on(event, f);
    }

    return this;
  };

  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods);

function untransform() {
  return this.attr('transform', null);
} // merge the whole transformation chain into one matrix and returns it

function matrixify() {
  const matrix = (this.attr('transform') || '' // split transformations
  ).split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    const kv = str.trim().split('(');
    return [kv[0], kv[1].split(delimiter).map(function (str) {
      return parseFloat(str);
    })];
  }).reverse() // merge every transformation into one matrix
  .reduce(function (matrix, transform) {
    if (transform[0] === 'matrix') {
      return matrix.lmultiply(Matrix.fromArray(transform[1]));
    }

    return matrix[transform[0]].apply(matrix, transform[1]);
  }, new Matrix());
  return matrix;
} // add an element to another parent without changing the visual representation on the screen

function toParent(parent, i) {
  if (this === parent) return this;
  const ctm = this.screenCTM();
  const pCtm = parent.screenCTM().inverse();
  this.addTo(parent, i).untransform().transform(pCtm.multiply(ctm));
  return this;
} // same as above with parent equals root-svg

function toRoot(i) {
  return this.toParent(this.root(), i);
} // Add transformations

function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    const decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }

  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = { ...o,
      origin: getOrigin(o, this)
    };
  } // The user can pass a boolean, an Element or an Matrix or nothing


  const cleanRelative = relative === true ? this : relative || false;
  const result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform,
  matrixify,
  toParent,
  toRoot,
  transform
});

class Container extends Element {
  flatten(parent = this, index) {
    this.each(function () {
      if (this instanceof Container) {
        return this.flatten().ungroup();
      }
    });
    return this;
  }

  ungroup(parent = this.parent(), index = parent.index(this)) {
    // when parent != this, we want append all elements to the end
    index = index === -1 ? parent.children().length : index;
    this.each(function (i, children) {
      // reverse each
      return children[children.length - i - 1].toParent(parent, index);
    });
    return this.remove();
  }

}
register(Container, 'Container');

class Defs extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('defs', node), attrs);
  }

  flatten() {
    return this;
  }

  ungroup() {
    return this;
  }

}
register(Defs, 'Defs');

class Shape extends Element {}
register(Shape, 'Shape');

function rx(rx) {
  return this.attr('rx', rx);
} // Radius y value

function ry(ry) {
  return this.attr('ry', ry);
} // Move over x-axis

function x$3(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
} // Move over y-axis

function y$3(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
} // Move by center over x-axis

function cx$1(x) {
  return this.attr('cx', x);
} // Move by center over y-axis

function cy$1(y) {
  return this.attr('cy', y);
} // Set width of element

function width$2(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
} // Set height of element

function height$2(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = {
  __proto__: null,
  rx: rx,
  ry: ry,
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
};

class Ellipse extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('ellipse', node), attrs);
  }

  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
  }

}
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function (width = 0, height = width) {
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

class Fragment extends Dom {
  constructor(node = globals.document.createDocumentFragment()) {
    super(node);
  } // Import / Export raw xml


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // because this is a fragment we have to put all elements into a wrapper first
    // before we can get the innerXML from it


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      const wrapper = new Dom(create('wrapper', ns));
      wrapper.add(this.node.cloneNode(true));
      return wrapper.xml(false, ns);
    } // Act as setter if we got a string


    return super.xml(xmlOrFn, false, ns);
  }

}

register(Fragment, 'Fragment');

function from(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    fx: new SVGNumber(x),
    fy: new SVGNumber(y)
  }) : this.attr({
    x1: new SVGNumber(x),
    y1: new SVGNumber(y)
  });
}
function to(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    cx: new SVGNumber(x),
    cy: new SVGNumber(y)
  }) : this.attr({
    x2: new SVGNumber(x),
    y2: new SVGNumber(y)
  });
}

var gradiented = {
  __proto__: null,
  from: from,
  to: to
};

class Gradient extends Container {
  constructor(type, attrs) {
    super(nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'gradientTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update gradient


  update(block) {
    // remove all stops
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient(...args) {
      return this.defs().gradient(...args);
    }

  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

class Pattern extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('pattern', node), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'patternTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update pattern by rebuilding


  update(block) {
    // remove content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern(...args) {
      return this.defs().pattern(...args);
    }

  },
  Defs: {
    pattern: wrapWithAttrCheck(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      });
    })
  }
});
register(Pattern, 'Pattern');

class Image extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('image', node), attrs);
  } // (re)load image


  load(url, callback) {
    if (!url) return this;
    const img = new globals.window.Image();
    on(img, 'load', function (e) {
      const p = this.parent(Pattern); // ensure image size

      if (this.width() === 0 && this.height() === 0) {
        this.size(img.width, img.height);
      }

      if (p instanceof Pattern) {
        // ensure pattern size if not set
        if (p.width() === 0 && p.height() === 0) {
          p.size(this.width(), this.height());
        }
      }

      if (typeof callback === 'function') {
        callback.call(this, e);
      }
    }, this);
    on(img, 'load error', function () {
      // dont forget to unbind memory leaking events
      off(img);
    });
    return this.attr('href', img.src = url, xlink);
  }

}
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }

  if (val instanceof Image) {
    val = _this.root().defs().pattern(0, 0, pattern => {
      pattern.add(val);
    });
  }

  return val;
});
registerMethods({
  Container: {
    // create image element, load image and set its size
    image: wrapWithAttrCheck(function (source, callback) {
      return this.put(new Image()).size(0, 0).load(source, callback);
    })
  }
});
register(Image, 'Image');

class PointArray extends SVGArray {
  // Get bounding box of points
  bbox() {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX);
      maxY = Math.max(el[1], maxY);
      minX = Math.min(el[0], minX);
      minY = Math.min(el[1], minY);
    });
    return new Box(minX, minY, maxX - minX, maxY - minY);
  } // Move point string


  move(x, y) {
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y; // move every point

    if (!isNaN(x) && !isNaN(y)) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i] = [this[i][0] + x, this[i][1] + y];
      }
    }

    return this;
  } // Parse point string and flat array


  parse(array = [0, 0]) {
    const points = []; // if it is an array, we flatten it and therefore clone it to 1 depths

    if (array instanceof Array) {
      array = Array.prototype.concat.apply([], array);
    } else {
      // Else, it is considered as a string
      // parse points
      array = array.trim().split(delimiter).map(parseFloat);
    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

    for (let i = 0, len = array.length; i < len; i = i + 2) {
      points.push([array[i], array[i + 1]]);
    }

    return points;
  } // Resize poly string


  size(width, height) {
    let i;
    const box = this.bbox(); // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  } // Convert array to line object


  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  } // Convert array to string


  toString() {
    const array = []; // convert to a poly point string

    for (let i = 0, il = this.length; i < il; i++) {
      array.push(this[i].join(','));
    }

    return array.join(' ');
  }

  transform(m) {
    return this.clone().transformO(m);
  } // transform points with matrix (similar to Point.transform)


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    for (let i = this.length; i--;) {
      // Perform the matrix multiplication
      const [x, y] = this[i];
      this[i][0] = m.a * x + m.c * y + m.e;
      this[i][1] = m.b * x + m.d * y + m.f;
    }

    return this;
  }

}

const MorphArray = PointArray; // Move by left top corner over x-axis

function x$2(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
} // Move by left top corner over y-axis

function y$2(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
} // Set width of element

function width$1(width) {
  const b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
} // Set height of element

function height$1(height) {
  const b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = {
  __proto__: null,
  MorphArray: MorphArray,
  x: x$2,
  y: y$2,
  width: width$1,
  height: height$1
};

class Line extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('line', node), attrs);
  } // Get array


  array() {
    return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
  } // Move by left top corner


  move(x, y) {
    return this.attr(this.array().move(x, y).toLine());
  } // Overwrite native plot() method


  plot(x1, y1, x2, y2) {
    if (x1 == null) {
      return this.array();
    } else if (typeof y1 !== 'undefined') {
      x1 = {
        x1,
        y1,
        x2,
        y2
      };
    } else {
      x1 = new PointArray(x1).toLine();
    }

    return this.attr(x1);
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr(this.array().size(p.width, p.height).toLine());
  }

}
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function (...args) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

class Marker extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('marker', node), attrs);
  } // Set height of element


  height(height) {
    return this.attr('markerHeight', height);
  }

  orient(orient) {
    return this.attr('orient', orient);
  } // Set marker refX and refY


  ref(x, y) {
    return this.attr('refX', x).attr('refY', y);
  } // Return the fill id


  toString() {
    return 'url(#' + this.id() + ')';
  } // Update marker


  update(block) {
    // remove all content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Set width of element


  width(width) {
    return this.attr('markerWidth', width);
  }

}
registerMethods({
  Container: {
    marker(...args) {
      // Create marker element in defs
      return this.defs().marker(...args);
    }

  },
  Defs: {
    // Create marker
    marker: wrapWithAttrCheck(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
    })
  },
  marker: {
    // Create and attach markers
    marker(marker, width, height, block) {
      let attr = ['marker']; // Build attribute name

      if (marker !== 'all') attr.push(marker);
      attr = attr.join('-'); // Set marker attribute

      marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, marker);
    }

  }
});
register(Marker, 'Marker');

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[k];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}

const easing = {
  '-': function (pos) {
    return pos;
  },
  '<>': function (pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function (pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function (pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function (x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t;
        } else if (x2 > 0) {
          return y2 / x2 * t;
        } else {
          return 0;
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
        } else {
          return 1;
        }
      } else {
        return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3;
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function (steps, stepPosition = 'end') {
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    let jumps = steps;

    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    } // The beforeFlag is essentially useless


    return (t, beforeFlag = false) => {
      // Step is called currentStep in referenced url
      let step = Math.floor(t * steps);
      const jumping = t * step % 1 === 0;

      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step;
      }

      if (beforeFlag && jumping) {
        --step;
      }

      if (t >= 0 && step < 0) {
        step = 0;
      }

      if (t <= 1 && step > jumps) {
        step = jumps;
      }

      return step / jumps;
    };
  }
};
class Stepper {
  done() {
    return false;
  }

}
/***
Easing Functions
================
***/

class Ease extends Stepper {
  constructor(fn = timeline.ease) {
    super();
    this.ease = easing[fn] || fn;
  }

  step(from, to, pos) {
    if (typeof from !== 'number') {
      return pos < 1 ? from : to;
    }

    return from + (to - from) * this.ease(pos);
  }

}
/***
Controller Types
================
***/

class Controller extends Stepper {
  constructor(fn) {
    super();
    this.stepper = fn;
  }

  done(c) {
    return c.done;
  }

  step(current, target, dt, c) {
    return this.stepper(current, target, dt, c);
  }

}

function recalculate() {
  // Apply the default parameters
  const duration = (this._duration || 500) / 1000;
  const overshoot = this._overshoot || 0; // Calculate the PID natural response

  const eps = 1e-10;
  const pi = Math.PI;
  const os = Math.log(overshoot / 100 + eps);
  const zeta = -os / Math.sqrt(pi * pi + os * os);
  const wn = 3.9 / (zeta * duration); // Calculate the Spring values

  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}

class Spring extends Controller {
  constructor(duration = 500, overshoot = 0) {
    super();
    this.duration(duration).overshoot(overshoot);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    if (dt > 100) dt = 16;
    dt /= 1000; // Get the previous velocity

    const velocity = c.velocity || 0; // Apply the control to get the new position and store it

    const acceleration = -this.d * velocity - this.k * (current - target);
    const newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

    c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

    c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
    return c.done ? target : newPosition;
  }

}
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
class PID extends Controller {
  constructor(p = 0.1, i = 0.01, d = 0, windup = 1000) {
    super();
    this.p(p).i(i).d(d).windup(windup);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    const p = target - current;
    let i = (c.integral || 0) + p * dt;
    const d = (p - (c.error || 0)) / dt;
    const windup = this._windup; // antiwindup

    if (windup !== false) {
      i = Math.max(-windup, Math.min(i, windup));
    }

    c.error = p;
    c.integral = i;
    c.done = Math.abs(p) < 0.001;
    return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
  }

}
extend(PID, {
  windup: makeSetterGetter('_windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

const segmentParameters = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
const pathHandlers = {
  M: function (c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function (c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function (c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function (c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function (c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function (c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
const mlhvqtcsaz = 'mlhvqtcsaz'.split('');

for (let i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (let j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i].toUpperCase());
}

function makeAbsolut(parser) {
  const command = parser.segment[0];
  return pathHandlers[command](parser.segment.slice(1), parser.p, parser.p0);
}

function segmentComplete(parser) {
  return parser.segment.length && parser.segment.length - 1 === segmentParameters[parser.segment[0].toUpperCase()];
}

function startNewSegment(parser, token) {
  parser.inNumber && finalizeNumber(parser, false);
  const pathLetter = isPathLetter.test(token);

  if (pathLetter) {
    parser.segment = [token];
  } else {
    const lastCommand = parser.lastCommand;
    const small = lastCommand.toLowerCase();
    const isSmall = lastCommand === small;
    parser.segment = [small === 'm' ? isSmall ? 'l' : 'L' : lastCommand];
  }

  parser.inSegment = true;
  parser.lastCommand = parser.segment[0];
  return pathLetter;
}

function finalizeNumber(parser, inNumber) {
  if (!parser.inNumber) throw new Error('Parser Error');
  parser.number && parser.segment.push(parseFloat(parser.number));
  parser.inNumber = inNumber;
  parser.number = '';
  parser.pointSeen = false;
  parser.hasExponent = false;

  if (segmentComplete(parser)) {
    finalizeSegment(parser);
  }
}

function finalizeSegment(parser) {
  parser.inSegment = false;

  if (parser.absolute) {
    parser.segment = makeAbsolut(parser);
  }

  parser.segments.push(parser.segment);
}

function isArcFlag(parser) {
  if (!parser.segment.length) return false;
  const isArc = parser.segment[0].toUpperCase() === 'A';
  const length = parser.segment.length;
  return isArc && (length === 4 || length === 5);
}

function isExponential(parser) {
  return parser.lastToken.toUpperCase() === 'E';
}

function pathParser(d, toAbsolute = true) {
  let index = 0;
  let token = '';
  const parser = {
    segment: [],
    inNumber: false,
    number: '',
    lastToken: '',
    inSegment: false,
    segments: [],
    pointSeen: false,
    hasExponent: false,
    absolute: toAbsolute,
    p0: new Point(),
    p: new Point()
  };

  while (parser.lastToken = token, token = d.charAt(index++)) {
    if (!parser.inSegment) {
      if (startNewSegment(parser, token)) {
        continue;
      }
    }

    if (token === '.') {
      if (parser.pointSeen || parser.hasExponent) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.inNumber = true;
      parser.pointSeen = true;
      parser.number += token;
      continue;
    }

    if (!isNaN(parseInt(token))) {
      if (parser.number === '0' || isArcFlag(parser)) {
        parser.inNumber = true;
        parser.number = token;
        finalizeNumber(parser, true);
        continue;
      }

      parser.inNumber = true;
      parser.number += token;
      continue;
    }

    if (token === ' ' || token === ',') {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      }

      continue;
    }

    if (token === '-') {
      if (parser.inNumber && !isExponential(parser)) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.number += token;
      parser.inNumber = true;
      continue;
    }

    if (token.toUpperCase() === 'E') {
      parser.number += token;
      parser.hasExponent = true;
      continue;
    }

    if (isPathLetter.test(token)) {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      } else if (!segmentComplete(parser)) {
        throw new Error('parser Error');
      } else {
        finalizeSegment(parser);
      }

      --index;
    }
  }

  if (parser.inNumber) {
    finalizeNumber(parser, false);
  }

  if (parser.inSegment && segmentComplete(parser)) {
    finalizeSegment(parser);
  }

  return parser.segments;
}

function arrayToString(a) {
  let s = '';

  for (let i = 0, il = a.length; i < il; i++) {
    s += a[i][0];

    if (a[i][1] != null) {
      s += a[i][1];

      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];

        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];

          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];

            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }

  return s + ' ';
}

class PathArray extends SVGArray {
  // Get bounding box of path
  bbox() {
    parser().path.setAttribute('d', this.toString());
    return new Box(parser.nodes.path.getBBox());
  } // Move path string


  move(x, y) {
    // get bounding box of current situation
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (let l, i = this.length - 1; i >= 0; i--) {
        l = this[i][0];

        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] += x;
          this[i][2] += y;
        } else if (l === 'H') {
          this[i][1] += x;
        } else if (l === 'V') {
          this[i][1] += y;
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] += x;
          this[i][2] += y;
          this[i][3] += x;
          this[i][4] += y;

          if (l === 'C') {
            this[i][5] += x;
            this[i][6] += y;
          }
        } else if (l === 'A') {
          this[i][6] += x;
          this[i][7] += y;
        }
      }
    }

    return this;
  } // Absolutize and parse path to array


  parse(d = 'M0 0') {
    if (Array.isArray(d)) {
      d = Array.prototype.concat.apply([], d).toString();
    }

    return pathParser(d);
  } // Resize path string


  size(width, height) {
    // get bounding box of current situation
    const box = this.bbox();
    let i, l; // If the box width or height is 0 then we ignore
    // transformations on the respective axis

    box.width = box.width === 0 ? 1 : box.width;
    box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      l = this[i][0];

      if (l === 'M' || l === 'L' || l === 'T') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
      } else if (l === 'H') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
      } else if (l === 'V') {
        this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
      } else if (l === 'C' || l === 'S' || l === 'Q') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
        this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
        this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;

        if (l === 'C') {
          this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
          this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
        }
      } else if (l === 'A') {
        // resize radii
        this[i][1] = this[i][1] * width / box.width;
        this[i][2] = this[i][2] * height / box.height; // move position values

        this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
        this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
      }
    }

    return this;
  } // Convert array to string


  toString() {
    return arrayToString(this);
  }

}

const getClassForType = value => {
  const type = typeof value;

  if (type === 'number') {
    return SVGNumber;
  } else if (type === 'string') {
    if (Color.isColor(value)) {
      return Color;
    } else if (delimiter.test(value)) {
      return isPathLetter.test(value) ? PathArray : SVGArray;
    } else if (numberAndUnit.test(value)) {
      return SVGNumber;
    } else {
      return NonMorphable;
    }
  } else if (morphableTypes.indexOf(value.constructor) > -1) {
    return value.constructor;
  } else if (Array.isArray(value)) {
    return SVGArray;
  } else if (type === 'object') {
    return ObjectBag;
  } else {
    return NonMorphable;
  }
};

class Morphable {
  constructor(stepper) {
    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }

  at(pos) {
    return this._morphObj.morph(this._from, this._to, pos, this._stepper, this._context);
  }

  done() {
    const complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
      return last && curr;
    }, true);

    return complete;
  }

  from(val) {
    if (val == null) {
      return this._from;
    }

    this._from = this._set(val);
    return this;
  }

  stepper(stepper) {
    if (stepper == null) return this._stepper;
    this._stepper = stepper;
    return this;
  }

  to(val) {
    if (val == null) {
      return this._to;
    }

    this._to = this._set(val);
    return this;
  }

  type(type) {
    // getter
    if (type == null) {
      return this._type;
    } // setter


    this._type = type;
    return this;
  }

  _set(value) {
    if (!this._type) {
      this.type(getClassForType(value));
    }

    let result = new this._type(value);

    if (this._type === Color) {
      result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
    }

    if (this._type === ObjectBag) {
      result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
    }

    result = result.toConsumable();
    this._morphObj = this._morphObj || new this._type();
    this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
      o.done = true;
      return o;
    });
    return result;
  }

}
class NonMorphable {
  constructor(...args) {
    this.init(...args);
  }

  init(val) {
    val = Array.isArray(val) ? val[0] : val;
    this.value = val;
    return this;
  }

  toArray() {
    return [this.value];
  }

  valueOf() {
    return this.value;
  }

}
class TransformBag {
  constructor(...args) {
    this.init(...args);
  }

  init(obj) {
    if (Array.isArray(obj)) {
      obj = {
        scaleX: obj[0],
        scaleY: obj[1],
        shear: obj[2],
        rotate: obj[3],
        translateX: obj[4],
        translateY: obj[5],
        originX: obj[6],
        originY: obj[7]
      };
    }

    Object.assign(this, TransformBag.defaults, obj);
    return this;
  }

  toArray() {
    const v = this;
    return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
  }

}
TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};

const sortByKey = (a, b) => {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};

class ObjectBag {
  constructor(...args) {
    this.init(...args);
  }

  align(other) {
    const values = this.values;

    for (let i = 0, il = values.length; i < il; ++i) {
      // If the type is the same we only need to check if the color is in the correct format
      if (values[i + 1] === other[i + 1]) {
        if (values[i + 1] === Color && other[i + 7] !== values[i + 7]) {
          const space = other[i + 7];
          const color = new Color(this.values.splice(i + 3, 5))[space]().toArray();
          this.values.splice(i + 3, 0, ...color);
        }

        i += values[i + 2] + 2;
        continue;
      }

      if (!other[i + 1]) {
        return this;
      } // The types differ, so we overwrite the new type with the old one
      // And initialize it with the types default (e.g. black for color or 0 for number)


      const defaultObject = new other[i + 1]().toArray(); // Than we fix the values array

      const toDelete = values[i + 2] + 3;
      values.splice(i, toDelete, other[i], other[i + 1], other[i + 2], ...defaultObject);
      i += values[i + 2] + 2;
    }

    return this;
  }

  init(objOrArr) {
    this.values = [];

    if (Array.isArray(objOrArr)) {
      this.values = objOrArr.slice();
      return;
    }

    objOrArr = objOrArr || {};
    const entries = [];

    for (const i in objOrArr) {
      const Type = getClassForType(objOrArr[i]);
      const val = new Type(objOrArr[i]).toArray();
      entries.push([i, Type, val.length, ...val]);
    }

    entries.sort(sortByKey);
    this.values = entries.reduce((last, curr) => last.concat(curr), []);
    return this;
  }

  toArray() {
    return this.values;
  }

  valueOf() {
    const obj = {};
    const arr = this.values; // for (var i = 0, len = arr.length; i < len; i += 2) {

    while (arr.length) {
      const key = arr.shift();
      const Type = arr.shift();
      const num = arr.shift();
      const values = arr.splice(0, num);
      obj[key] = new Type(values); // .valueOf()
    }

    return obj;
  }

}
const morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType(type = []) {
  morphableTypes.push(...[].concat(type));
}
function makeMorphable() {
  extend(morphableTypes, {
    to(val) {
      return new Morphable().type(this.constructor).from(this.toArray()) // this.valueOf())
      .to(val);
    },

    fromArray(arr) {
      this.init(arr);
      return this;
    },

    toConsumable() {
      return this.toArray();
    },

    morph(from, to, pos, stepper, context) {
      const mapper = function (i, index) {
        return stepper.step(i, to[index], pos, context[index], context);
      };

      return this.fromArray(from.map(mapper));
    }

  });
}

class Path extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('path', node), attrs);
  } // Get array


  array() {
    return this._array || (this._array = new PathArray(this.attr('d')));
  } // Clear array cache


  clear() {
    delete this._array;
    return this;
  } // Set height of element


  height(height) {
    return height == null ? this.bbox().height : this.size(this.bbox().width, height);
  } // Move by left top corner


  move(x, y) {
    return this.attr('d', this.array().move(x, y));
  } // Plot new path


  plot(d) {
    return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr('d', this.array().size(p.width, p.height));
  } // Set width of element


  width(width) {
    return width == null ? this.bbox().width : this.size(width, this.bbox().height);
  } // Move by left top corner over x-axis


  x(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y);
  } // Move by left top corner over y-axis


  y(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y);
  }

} // Define morphable array

Path.prototype.MorphArray = PathArray; // Add parent method

registerMethods({
  Container: {
    // Create a wrapped path element
    path: wrapWithAttrCheck(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new PathArray());
    })
  }
});
register(Path, 'Path');

function array() {
  return this._array || (this._array = new PointArray(this.attr('points')));
} // Clear array cache

function clear() {
  delete this._array;
  return this;
} // Move by left top corner

function move$2(x, y) {
  return this.attr('points', this.array().move(x, y));
} // Plot new path

function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
} // Set element size to given width and height

function size$1(width, height) {
  const p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = {
  __proto__: null,
  array: array,
  clear: clear,
  move: move$2,
  plot: plot,
  size: size$1
};

class Polygon extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polygon', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polygon: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new PointArray());
    })
  }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, 'Polygon');

class Polyline extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polyline', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray());
    })
  }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, 'Polyline');

class Rect extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('rect', node), attrs);
  }

}
extend(Rect, {
  rx,
  ry
});
registerMethods({
  Container: {
    // Create a rect element
    rect: wrapWithAttrCheck(function (width, height) {
      return this.put(new Rect()).size(width, height);
    })
  }
});
register(Rect, 'Rect');

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  } // Shows us the first item in the list


  first() {
    return this._first && this._first.value;
  } // Shows us the last item in the list


  last() {
    return this._last && this._last.value;
  }

  push(value) {
    // An item stores an id and the provided value
    const item = typeof value.next !== 'undefined' ? value : {
      value: value,
      next: null,
      prev: null
    }; // Deal with the queue being empty or populated

    if (this._last) {
      item.prev = this._last;
      this._last.next = item;
      this._last = item;
    } else {
      this._last = item;
      this._first = item;
    } // Return the current item


    return item;
  } // Removes the item that was returned from the push


  remove(item) {
    // Relink the previous item
    if (item.prev) item.prev.next = item.next;
    if (item.next) item.next.prev = item.prev;
    if (item === this._last) this._last = item.prev;
    if (item === this._first) this._first = item.next; // Invalidate item

    item.prev = null;
    item.next = null;
  }

  shift() {
    // Check if we have a value
    const remove = this._first;
    if (!remove) return null; // If we do, remove it and relink things

    this._first = remove.next;
    if (this._first) this._first.prev = null;
    this._last = this._first ? this._last : null;
    return remove.value;
  }

}

const Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: () => globals.window.performance || globals.window.Date,
  transforms: [],

  frame(fn) {
    // Store the node
    const node = Animator.frames.push({
      run: fn
    }); // Request an animation frame if we don't have one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    } // Return the node so we can remove it easily


    return node;
  },

  timeout(fn, delay) {
    delay = delay || 0; // Work out when the event should fire

    const time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

    const node = Animator.timeouts.push({
      run: fn,
      time: time
    }); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  immediate(fn) {
    // Add the immediate fn to the end of the queue
    const node = Animator.immediates.push(fn); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },

  clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },

  cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },

  _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    let nextTimeout = null;
    const lastTimeout = Animator.timeouts.last();

    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      } // If we hit the last item, we should stop shifting out more items


      if (nextTimeout === lastTimeout) break;
    } // Run all of the animation frames


    let nextFrame = null;
    const lastFrame = Animator.frames.last();

    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }

    let nextImmediate = null;

    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    } // If we have remaining timeouts or frames, draw until we don't anymore


    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }

};

const makeSchedule = function (runnerInfo) {
  const start = runnerInfo.start;
  const duration = runnerInfo.runner.duration();
  const end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};

const defaultSource = function () {
  const w = globals.window;
  return (w.performance || w.Date).now();
};

class Timeline extends EventTarget {
  // Construct a new timeline on the given element
  constructor(timeSource = defaultSource) {
    super();
    this._timeSource = timeSource; // Store the timing variables

    this._startTime = 0;
    this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

    this._persist = 0; // Keep track of the running animations and their starting parameters

    this._nextFrame = null;
    this._paused = true;
    this._runners = [];
    this._runnerIds = [];
    this._lastRunnerId = -1;
    this._time = 0;
    this._lastSourceTime = 0;
    this._lastStepTime = 0; // Make sure that step is always called in class context

    this._step = this._stepFn.bind(this, false);
    this._stepImmediate = this._stepFn.bind(this, true);
  }

  active() {
    return !!this._nextFrame;
  }

  finish() {
    // Go to end and pause
    this.time(this.getEndTimeOfTimeline() + 1);
    return this.pause();
  } // Calculates the end of the timeline


  getEndTime() {
    const lastRunnerInfo = this.getLastRunnerInfo();
    const lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
    const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
    return lastStartTime + lastDuration;
  }

  getEndTimeOfTimeline() {
    const endTimes = this._runners.map(i => i.start + i.runner.duration());

    return Math.max(0, ...endTimes);
  }

  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }

  getRunnerInfoById(id) {
    return this._runners[this._runnerIds.indexOf(id)] || null;
  }

  pause() {
    this._paused = true;
    return this._continue();
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  play() {
    // Now make sure we are not paused and continue the animation
    this._paused = false;
    return this.updateTime()._continue();
  }

  reverse(yes) {
    const currentSpeed = this.speed();
    if (yes == null) return this.speed(-currentSpeed);
    const positive = Math.abs(currentSpeed);
    return this.speed(yes ? -positive : positive);
  } // schedules a runner on the timeline


  schedule(runner, delay, when) {
    if (runner == null) {
      return this._runners.map(makeSchedule);
    } // The start time for the next animation can either be given explicitly,
    // derived from the current timeline time or it can be relative to the
    // last start time to chain animations directly


    let absoluteStartTime = 0;
    const endTime = this.getEndTime();
    delay = delay || 0; // Work out when to start the animation

    if (when == null || when === 'last' || when === 'after') {
      // Take the last time and increment
      absoluteStartTime = endTime;
    } else if (when === 'absolute' || when === 'start') {
      absoluteStartTime = delay;
      delay = 0;
    } else if (when === 'now') {
      absoluteStartTime = this._time;
    } else if (when === 'relative') {
      const runnerInfo = this.getRunnerInfoById(runner.id);

      if (runnerInfo) {
        absoluteStartTime = runnerInfo.start + delay;
        delay = 0;
      }
    } else if (when === 'with-last') {
      const lastRunnerInfo = this.getLastRunnerInfo();
      const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
      absoluteStartTime = lastStartTime;
    } else {
      throw new Error('Invalid value for the "when" parameter');
    } // Manage runner


    runner.unschedule();
    runner.timeline(this);
    const persist = runner.persist();
    const runnerInfo = {
      persist: persist === null ? this._persist : persist,
      start: absoluteStartTime + delay,
      runner
    };
    this._lastRunnerId = runner.id;

    this._runners.push(runnerInfo);

    this._runners.sort((a, b) => a.start - b.start);

    this._runnerIds = this._runners.map(info => info.runner.id);

    this.updateTime()._continue();

    return this;
  }

  seek(dt) {
    return this.time(this._time + dt);
  }

  source(fn) {
    if (fn == null) return this._timeSource;
    this._timeSource = fn;
    return this;
  }

  speed(speed) {
    if (speed == null) return this._speed;
    this._speed = speed;
    return this;
  }

  stop() {
    // Go to start and pause
    this.time(0);
    return this.pause();
  }

  time(time) {
    if (time == null) return this._time;
    this._time = time;
    return this._continue(true);
  } // Remove the runner from this timeline


  unschedule(runner) {
    const index = this._runnerIds.indexOf(runner.id);

    if (index < 0) return this;

    this._runners.splice(index, 1);

    this._runnerIds.splice(index, 1);

    runner.timeline(null);
    return this;
  } // Makes sure, that after pausing the time doesn't jump


  updateTime() {
    if (!this.active()) {
      this._lastSourceTime = this._timeSource();
    }

    return this;
  } // Checks if we are running and continues the animation


  _continue(immediateStep = false) {
    Animator.cancelFrame(this._nextFrame);
    this._nextFrame = null;
    if (immediateStep) return this._stepImmediate();
    if (this._paused) return this;
    this._nextFrame = Animator.frame(this._step);
    return this;
  }

  _stepFn(immediateStep = false) {
    // Get the time delta from the last time and update the time
    const time = this._timeSource();

    let dtSource = time - this._lastSourceTime;
    if (immediateStep) dtSource = 0;
    const dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
    this._lastSourceTime = time; // Only update the time if we use the timeSource.
    // Otherwise use the current time

    if (!immediateStep) {
      // Update the time
      this._time += dtTime;
      this._time = this._time < 0 ? 0 : this._time;
    }

    this._lastStepTime = this._time;
    this.fire('time', this._time); // This is for the case that the timeline was seeked so that the time
    // is now before the startTime of the runner. Thats why we need to set
    // the runner to position 0
    // FIXME:
    // However, reseting in insertion order leads to bugs. Considering the case,
    // where 2 runners change the same attribute but in different times,
    // reseting both of them will lead to the case where the later defined
    // runner always wins the reset even if the other runner started earlier
    // and therefore should win the attribute battle
    // this can be solved by reseting them backwards

    for (let k = this._runners.length; k--;) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[k];
      const runner = runnerInfo.runner; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
      // and try to reset it

      if (dtToStart <= 0) {
        runner.reset();
      }
    } // Run all of the runners directly


    let runnersLeft = false;

    for (let i = 0, len = this._runners.length; i < len; i++) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[i];
      const runner = runnerInfo.runner;
      let dt = dtTime; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet

      if (dtToStart <= 0) {
        runnersLeft = true;
        continue;
      } else if (dtToStart < dt) {
        // Adjust dt to make sure that animation is on point
        dt = dtToStart;
      }

      if (!runner.active()) continue; // If this runner is still going, signal that we need another animation
      // frame, otherwise, remove the completed runner

      const finished = runner.step(dt).done;

      if (!finished) {
        runnersLeft = true; // continue
      } else if (runnerInfo.persist !== true) {
        // runner is finished. And runner might get removed
        const endTime = runner.duration() - runner.time() + this._time;

        if (endTime + runnerInfo.persist < this._time) {
          // Delete runner and correct index
          runner.unschedule();
          --i;
          --len;
        }
      }
    } // Basically: we continue when there are runners right from us in time
    // when -->, and when runners are left from us when <--


    if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
      this._continue();
    } else {
      this.pause();
      this.fire('finished');
    }

    return this;
  }

}
registerMethods({
  Element: {
    timeline: function (timeline) {
      if (timeline == null) {
        this._timeline = this._timeline || new Timeline();
        return this._timeline;
      } else {
        this._timeline = timeline;
        return this;
      }
    }
  }
});

class Runner extends EventTarget {
  constructor(options) {
    super(); // Store a unique id on the runner, so that we can identify it later

    this.id = Runner.id++; // Ensure a default value

    options = options == null ? timeline.duration : options; // Ensure that we get a controller

    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

    this._element = null;
    this._timeline = null;
    this.done = false;
    this._queue = []; // Work out the stepper and the duration

    this._duration = typeof options === 'number' && options;
    this._isDeclarative = options instanceof Controller;
    this._stepper = this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

    this._history = {}; // Store the state of the runner

    this.enabled = true;
    this._time = 0;
    this._lastTime = 0; // At creation, the runner is in reseted state

    this._reseted = true; // Save transforms applied to this runner

    this.transforms = new Matrix();
    this.transformId = 1; // Looping variables

    this._haveReversed = false;
    this._reverse = false;
    this._loopsDone = 0;
    this._swing = false;
    this._wait = 0;
    this._times = 1;
    this._frameId = null; // Stores how long a runner is stored after beeing done

    this._persist = this._isDeclarative ? true : null;
  }

  static sanitise(duration, delay, when) {
    // Initialise the default parameters
    let times = 1;
    let swing = false;
    let wait = 0;
    duration = duration || timeline.duration;
    delay = delay || timeline.delay;
    when = when || 'last'; // If we have an object, unpack the values

    if (typeof duration === 'object' && !(duration instanceof Stepper)) {
      delay = duration.delay || delay;
      when = duration.when || when;
      swing = duration.swing || swing;
      times = duration.times || times;
      wait = duration.wait || wait;
      duration = duration.duration || timeline.duration;
    }

    return {
      duration: duration,
      delay: delay,
      swing: swing,
      times: times,
      wait: wait,
      when: when
    };
  }

  active(enabled) {
    if (enabled == null) return this.enabled;
    this.enabled = enabled;
    return this;
  }
  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */


  addTransform(transform, index) {
    this.transforms.lmultiplyO(transform);
    return this;
  }

  after(fn) {
    return this.on('finished', fn);
  }

  animate(duration, delay, when) {
    const o = Runner.sanitise(duration, delay, when);
    const runner = new Runner(o.duration);
    if (this._timeline) runner.timeline(this._timeline);
    if (this._element) runner.element(this._element);
    return runner.loop(o).schedule(o.delay, o.when);
  }

  clearTransform() {
    this.transforms = new Matrix();
    return this;
  } // TODO: Keep track of all transformations so that deletion is faster


  clearTransformsFromQueue() {
    if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
      this._queue = this._queue.filter(item => {
        return !item.isTransform;
      });
    }
  }

  delay(delay) {
    return this.animate(0, delay);
  }

  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }

  during(fn) {
    return this.queue(null, fn);
  }

  ease(fn) {
    this._stepper = new Ease(fn);
    return this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */


  element(element) {
    if (element == null) return this._element;
    this._element = element;

    element._prepareRunner();

    return this;
  }

  finish() {
    return this.step(Infinity);
  }

  loop(times, swing, wait) {
    // Deal with the user passing in an object
    if (typeof times === 'object') {
      swing = times.swing;
      wait = times.wait;
      times = times.times;
    } // Sanitise the values and store them


    this._times = times || Infinity;
    this._swing = swing || false;
    this._wait = wait || 0; // Allow true to be passed

    if (this._times === true) {
      this._times = Infinity;
    }

    return this;
  }

  loops(p) {
    const loopDuration = this._duration + this._wait;

    if (p == null) {
      const loopsDone = Math.floor(this._time / loopDuration);
      const relativeTime = this._time - loopsDone * loopDuration;
      const position = relativeTime / this._duration;
      return Math.min(loopsDone + position, this._times);
    }

    const whole = Math.floor(p);
    const partial = p % 1;
    const time = loopDuration * whole + this._duration * partial;
    return this.time(time);
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  position(p) {
    // Get all of the variables we need
    const x = this._time;
    const d = this._duration;
    const w = this._wait;
    const t = this._times;
    const s = this._swing;
    const r = this._reverse;
    let position;

    if (p == null) {
      /*
      This function converts a time to a position in the range [0, 1]
      The full explanation can be found in this desmos demonstration
        https://www.desmos.com/calculator/u4fbavgche
      The logic is slightly simplified here because we can use booleans
      */
      // Figure out the value without thinking about the start or end time
      const f = function (x) {
        const swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
        const backwards = swinging && !r || !swinging && r;
        const uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
        const clipped = Math.max(Math.min(uncliped, 1), 0);
        return clipped;
      }; // Figure out the value by incorporating the start time


      const endTime = t * (w + d) - w;
      position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
      return position;
    } // Work out the loops done and add the position to the loops done


    const loopsDone = Math.floor(this.loops());
    const swingForward = s && loopsDone % 2 === 0;
    const forwards = swingForward && !r || r && swingForward;
    position = loopsDone + (forwards ? p : 1 - p);
    return this.loops(position);
  }

  progress(p) {
    if (p == null) {
      return Math.min(1, this._time / this.duration());
    }

    return this.time(p * this.duration());
  }
  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */


  queue(initFn, runFn, retargetFn, isTransform) {
    this._queue.push({
      initialiser: initFn || noop,
      runner: runFn || noop,
      retarget: retargetFn,
      isTransform: isTransform,
      initialised: false,
      finished: false
    });

    const timeline = this.timeline();
    timeline && this.timeline()._continue();
    return this;
  }

  reset() {
    if (this._reseted) return this;
    this.time(0);
    this._reseted = true;
    return this;
  }

  reverse(reverse) {
    this._reverse = reverse == null ? !this._reverse : reverse;
    return this;
  }

  schedule(timeline, delay, when) {
    // The user doesn't need to pass a timeline if we already have one
    if (!(timeline instanceof Timeline)) {
      when = delay;
      delay = timeline;
      timeline = this.timeline();
    } // If there is no timeline, yell at the user...


    if (!timeline) {
      throw Error('Runner cannot be scheduled without timeline');
    } // Schedule the runner on the timeline provided


    timeline.schedule(this, delay, when);
    return this;
  }

  step(dt) {
    // If we are inactive, this stepper just gets skipped
    if (!this.enabled) return this; // Update the time and get the new position

    dt = dt == null ? 16 : dt;
    this._time += dt;
    const position = this.position(); // Figure out if we need to run the stepper in this frame

    const running = this._lastPosition !== position && this._time >= 0;
    this._lastPosition = position; // Figure out if we just started

    const duration = this.duration();
    const justStarted = this._lastTime <= 0 && this._time > 0;
    const justFinished = this._lastTime < duration && this._time >= duration;
    this._lastTime = this._time;

    if (justStarted) {
      this.fire('start', this);
    } // Work out if the runner is finished set the done flag here so animations
    // know, that they are running in the last step (this is good for
    // transformations which can be merged)


    const declarative = this._isDeclarative;
    this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore

    this._reseted = false;
    let converged = false; // Call initialise and the run function

    if (running || declarative) {
      this._initialise(running); // clear the transforms on this runner so they dont get added again and again


      this.transforms = new Matrix();
      converged = this._run(declarative ? dt : position);
      this.fire('step', this);
    } // correct the done flag here
    // declaritive animations itself know when they converged


    this.done = this.done || converged && declarative;

    if (justFinished) {
      this.fire('finished', this);
    }

    return this;
  }
  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */


  time(time) {
    if (time == null) {
      return this._time;
    }

    const dt = time - this._time;
    this.step(dt);
    return this;
  }

  timeline(timeline) {
    // check explicitly for undefined so we can set the timeline to null
    if (typeof timeline === 'undefined') return this._timeline;
    this._timeline = timeline;
    return this;
  }

  unschedule() {
    const timeline = this.timeline();
    timeline && timeline.unschedule(this);
    return this;
  } // Run each initialise function in the runner if required


  _initialise(running) {
    // If we aren't running, we shouldn't initialise when not declarative
    if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current initialiser
      const current = this._queue[i]; // Determine whether we need to initialise

      const needsIt = this._isDeclarative || !current.initialised && running;
      running = !current.finished; // Call the initialiser if we need to

      if (needsIt && running) {
        current.initialiser.call(this);
        current.initialised = true;
      }
    }
  } // Save a morpher to the morpher list so that we can retarget it later


  _rememberMorpher(method, morpher) {
    this._history[method] = {
      morpher: morpher,
      caller: this._queue[this._queue.length - 1]
    }; // We have to resume the timeline in case a controller
    // is already done without being ever run
    // This can happen when e.g. this is done:
    //    anim = el.animate(new SVG.Spring)
    // and later
    //    anim.move(...)

    if (this._isDeclarative) {
      const timeline = this.timeline();
      timeline && timeline.play();
    }
  } // Try to set the target for a morpher if the morpher exists, otherwise
  // Run each run function for the position or dt given


  _run(positionOrDt) {
    // Run all of the _queue directly
    let allfinished = true;

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current function to run
      const current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
      // flag for the sake of declarative _queue

      const converged = current.runner.call(this, positionOrDt);
      current.finished = current.finished || converged === true;
      allfinished = allfinished && current.finished;
    } // We report when all of the constructors are finished


    return allfinished;
  } // do nothing and return false


  _tryRetarget(method, target, extra) {
    if (this._history[method]) {
      // if the last method wasnt even initialised, throw it away
      if (!this._history[method].caller.initialised) {
        const index = this._queue.indexOf(this._history[method].caller);

        this._queue.splice(index, 1);

        return false;
      } // for the case of transformations, we use the special retarget function
      // which has access to the outer scope


      if (this._history[method].caller.retarget) {
        this._history[method].caller.retarget.call(this, target, extra); // for everything else a simple morpher change is sufficient

      } else {
        this._history[method].morpher.to(target);
      }

      this._history[method].caller.finished = false;
      const timeline = this.timeline();
      timeline && timeline.play();
      return true;
    }

    return false;
  }

}
Runner.id = 0;
class FakeRunner {
  constructor(transforms = new Matrix(), id = -1, done = true) {
    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }

  clearTransformsFromQueue() {}

}
extend([Runner, FakeRunner], {
  mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }

}); // FakeRunner.emptyRunner = new FakeRunner()

const lmultiply = (last, curr) => last.lmultiplyO(curr);

const getRunnerTransform = runner => runner.transforms;

function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  const runners = this._transformationRunners.runners;
  const netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);

  this._transformationRunners.merge();

  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}

class RunnerArray {
  constructor() {
    this.runners = [];
    this.ids = [];
  }

  add(runner) {
    if (this.runners.includes(runner)) return;
    const id = runner.id + 1;
    this.runners.push(runner);
    this.ids.push(id);
    return this;
  }

  clearBefore(id) {
    const deleteCnt = this.ids.indexOf(id + 1) || 1;
    this.ids.splice(0, deleteCnt, 0);
    this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(r => r.clearTransformsFromQueue());
    return this;
  }

  edit(id, newRunner) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1, id + 1);
    this.runners.splice(index, 1, newRunner);
    return this;
  }

  getByID(id) {
    return this.runners[this.ids.indexOf(id + 1)];
  }

  length() {
    return this.ids.length;
  }

  merge() {
    let lastRunner = null;

    for (let i = 0; i < this.runners.length; ++i) {
      const runner = this.runners[i];
      const condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
      && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

      if (condition) {
        // the +1 happens in the function
        this.remove(runner.id);
        const newRunner = runner.mergeWith(lastRunner);
        this.edit(lastRunner.id, newRunner);
        lastRunner = newRunner;
        --i;
      } else {
        lastRunner = runner;
      }
    }

    return this;
  }

  remove(id) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1);
    this.runners.splice(index, 1);
    return this;
  }

}
registerMethods({
  Element: {
    animate(duration, delay, when) {
      const o = Runner.sanitise(duration, delay, when);
      const timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },

    delay(by, when) {
      return this.animate(0, by, when);
    },

    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwfrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },

    _currentTransform(current) {
      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(runner => runner.id <= current.id).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },

    _addRunner(runner) {
      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
      // all Animator functions. Thats why we use immediate here to execute
      // the merge right after all frames are run


      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },

    _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }

  }
}); // Will output the elements from array A that are not in the array B

const difference = (a, b) => a.filter(x => !b.includes(x));

extend(Runner, {
  attr(a, v) {
    return this.styleAttr('attr', a, v);
  },

  // Add animatable styles
  css(s, v) {
    return this.styleAttr('css', s, v);
  },

  styleAttr(type, nameOrAttrs, val) {
    if (typeof nameOrAttrs === 'string') {
      return this.styleAttr(type, {
        [nameOrAttrs]: val
      });
    }

    let attrs = nameOrAttrs;
    if (this._tryRetarget(type, attrs)) return this;
    let morpher = new Morphable(this._stepper).to(attrs);
    let keys = Object.keys(attrs);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](keys));
    }, function (pos) {
      this.element()[type](morpher.at(pos).valueOf());
      return morpher.done();
    }, function (newToAttrs) {
      // Check if any new keys were added
      const newKeys = Object.keys(newToAttrs);
      const differences = difference(newKeys, keys); // If their are new keys, initialize them and add them to morpher

      if (differences.length) {
        // Get the values
        const addedFromAttrs = this.element()[type](differences); // Get the already initialized values

        const oldFromAttrs = new ObjectBag(morpher.from()).valueOf(); // Merge old and new

        Object.assign(oldFromAttrs, addedFromAttrs);
        morpher.from(oldFromAttrs);
      } // Get the object from the morpher


      const oldToAttrs = new ObjectBag(morpher.to()).valueOf(); // Merge in new attributes

      Object.assign(oldToAttrs, newToAttrs); // Change morpher target

      morpher.to(oldToAttrs); // Make sure that we save the work we did so we don't need it to do again

      keys = newKeys;
      attrs = newToAttrs;
    });

    this._rememberMorpher(type, morpher);

    return this;
  },

  zoom(level, point) {
    if (this._tryRetarget('zoom', level, point)) return this;
    let morpher = new Morphable(this._stepper).to(new SVGNumber(level));
    this.queue(function () {
      morpher = morpher.from(this.element().zoom());
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point);
      return morpher.done();
    }, function (newLevel, newPoint) {
      point = newPoint;
      morpher.to(newLevel);
    });

    this._rememberMorpher('zoom', morpher);

    return this;
  },

  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;

    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    } // Parse the parameters


    const isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type

    const morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    let origin;
    let element;
    let current;
    let currentAngle;
    let startTransform;

    function setup() {
      // make sure element and origin is defined
      element = element || this.element();
      origin = origin || getOrigin(transforms, element);
      startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations

      element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute


      if (!relative) {
        element._clearTransformRunnersBefore(this);
      }
    }

    function run(pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform();
      const {
        x,
        y
      } = new Point(origin).transform(element._currentTransform(this));
      let target = new Matrix({ ...transforms,
        origin: [x, y]
      });
      let start = this._isDeclarative && current ? current : startTransform;

      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y); // Get the current and target angle as it was set

        const rTarget = target.rotate;
        const rCurrent = start.rotate; // Figure out the shortest path to rotate directly

        const possibilities = [rTarget - 360, rTarget, rTarget + 360];
        const distances = possibilities.map(a => Math.abs(a - rCurrent));
        const shortest = Math.min(...distances);
        const index = distances.indexOf(shortest);
        target.rotate = possibilities[index];
      }

      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0;
        }

        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle;
        }
      }

      morpher.from(start);
      morpher.to(target);
      const affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);

      element._addRunner(this);

      return morpher.done();
    }

    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(newTransforms, element);
      } // overwrite the old transformations with the new ones


      transforms = { ...newTransforms,
        origin
      };
    }

    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },

  // Animatable x-axis
  x(x, relative) {
    return this._queueNumber('x', x);
  },

  // Animatable y-axis
  y(y) {
    return this._queueNumber('y', y);
  },

  dx(x = 0) {
    return this._queueNumberDelta('x', x);
  },

  dy(y = 0) {
    return this._queueNumberDelta('y', y);
  },

  dmove(x, y) {
    return this.dx(x).dy(y);
  },

  _queueNumberDelta(method, to) {
    to = new SVGNumber(to); // Try to change the target if we have this method already registerd

    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    let from = null;
    this.queue(function () {
      from = this.element()[method]();
      morpher.from(from);
      morpher.to(from + to);
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }, function (newTo) {
      morpher.to(from + new SVGNumber(newTo));
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueObject(method, to) {
    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },

  // Animatable center x-axis
  cx(x) {
    return this._queueNumber('cx', x);
  },

  // Animatable center y-axis
  cy(y) {
    return this._queueNumber('cy', y);
  },

  // Add animatable move
  move(x, y) {
    return this.x(x).y(y);
  },

  // Add animatable center
  center(x, y) {
    return this.cx(x).cy(y);
  },

  // Add animatable size
  size(width, height) {
    // animate bbox based size for all other elements
    let box;

    if (!width || !height) {
      box = this._element.bbox();
    }

    if (!width) {
      width = box.width / box.height * height;
    }

    if (!height) {
      height = box.height / box.width * width;
    }

    return this.width(width).height(height);
  },

  // Add animatable width
  width(width) {
    return this._queueNumber('width', width);
  },

  // Add animatable height
  height(height) {
    return this._queueNumber('height', height);
  },

  // Add animatable plot
  plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }

    if (this._tryRetarget('plot', a)) return this;
    const morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
    this.queue(function () {
      morpher.from(this._element.array());
    }, function (pos) {
      this._element.plot(morpher.at(pos));

      return morpher.done();
    });

    this._rememberMorpher('plot', morpher);

    return this;
  },

  // Add leading method
  leading(value) {
    return this._queueNumber('leading', value);
  },

  // Add animatable viewbox
  viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },

  update(o) {
    if (typeof o !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      });
    }

    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', o.offset);
    return this;
  }

});
extend(Runner, {
  rx,
  ry,
  from,
  to
});
register(Runner, 'Runner');

class Svg extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('svg', node), attrs);
    this.namespace();
  } // Creates and returns defs element


  defs() {
    if (!this.isRoot()) return this.root().defs();
    return adopt(this.node.querySelector('defs')) || this.put(new Defs());
  }

  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== '#document-fragment';
  } // Add namespaces


  namespace() {
    if (!this.isRoot()) return this.root().namespace();
    return this.attr({
      xmlns: svg,
      version: '1.1'
    }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
  }

  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr('xmlns:xlink', null, xmlns).attr('xmlns:svgjs', null, xmlns);
  } // Check if this is a root svg
  // If not, call root() from this element


  root() {
    if (this.isRoot()) return this;
    return super.root();
  }

}
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

class Symbol extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('symbol', node), attrs);
  }

}
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new Symbol());
    })
  }
});
register(Symbol, 'Symbol');

function plain(text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear();
  } // create text node


  this.node.appendChild(globals.document.createTextNode(text));
  return this;
} // Get length of text element

function length() {
  return this.node.getComputedTextLength();
} // Move over x-axis
// Text is moved by its bounding box
// text-anchor does NOT matter

function x$1(x, box = this.bbox()) {
  if (x == null) {
    return box.x;
  }

  return this.attr('x', this.attr('x') + x - box.x);
} // Move over y-axis

function y$1(y, box = this.bbox()) {
  if (y == null) {
    return box.y;
  }

  return this.attr('y', this.attr('y') + y - box.y);
}
function move$1(x, y, box = this.bbox()) {
  return this.x(x, box).y(y, box);
} // Move center over x-axis

function cx(x, box = this.bbox()) {
  if (x == null) {
    return box.cx;
  }

  return this.attr('x', this.attr('x') + x - box.cx);
} // Move center over y-axis

function cy(y, box = this.bbox()) {
  if (y == null) {
    return box.cy;
  }

  return this.attr('y', this.attr('y') + y - box.cy);
}
function center(x, y, box = this.bbox()) {
  return this.cx(x, box).cy(y, box);
}
function ax(x) {
  return this.attr('x', x);
}
function ay(y) {
  return this.attr('y', y);
}
function amove(x, y) {
  return this.ax(x).ay(y);
} // Enable / disable build mode

function build(build) {
  this._build = !!build;
  return this;
}

var textable = {
  __proto__: null,
  plain: plain,
  length: length,
  x: x$1,
  y: y$1,
  move: move$1,
  cx: cx,
  cy: cy,
  center: center,
  ax: ax,
  ay: ay,
  amove: amove,
  build: build
};

class Text extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('text', node), attrs);
    this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

    this._rebuild = true; // enable automatic updating of dy values

    this._build = false; // disable build mode for adding multiple lines
  } // Set / get leading


  leading(value) {
    // act as getter
    if (value == null) {
      return this.dom.leading;
    } // act as setter


    this.dom.leading = new SVGNumber(value);
    return this.rebuild();
  } // Rebuild appearance type


  rebuild(rebuild) {
    // store new rebuild flag if given
    if (typeof rebuild === 'boolean') {
      this._rebuild = rebuild;
    } // define position of all lines


    if (this._rebuild) {
      const self = this;
      let blankLineOffset = 0;
      const leading = this.dom.leading;
      this.each(function (i) {
        const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
        const dy = leading * new SVGNumber(fontSize);

        if (this.dom.newLined) {
          this.attr('x', self.attr('x'));

          if (this.text() === '\n') {
            blankLineOffset += dy;
          } else {
            this.attr('dy', i ? dy + blankLineOffset : 0);
            blankLineOffset = 0;
          }
        }
      });
      this.fire('rebuild');
    }

    return this;
  } // overwrite method from parent to set data properly


  setData(o) {
    this.dom = o;
    this.dom.leading = new SVGNumber(o.leading || 1.3);
    return this;
  } // Set the text content


  text(text) {
    // act as getter
    if (text === undefined) {
      const children = this.node.childNodes;
      let firstLine = 0;
      text = '';

      for (let i = 0, len = children.length; i < len; ++i) {
        // skip textPaths - they are no lines
        if (children[i].nodeName === 'textPath') {
          if (i === 0) firstLine = 1;
          continue;
        } // add newline if its not the first child and newLined is set to true


        if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
          text += '\n';
        } // add content of this node


        text += children[i].textContent;
      }

      return text;
    } // remove existing content


    this.clear().build(true);

    if (typeof text === 'function') {
      // call block
      text.call(this, this);
    } else {
      // store text and make sure text is not blank
      text = (text + '').split('\n'); // build new lines

      for (let j = 0, jl = text.length; j < jl; j++) {
        this.newLine(text[j]);
      }
    } // disable build mode and rebuild lines


    return this.build(false).rebuild();
  }

}
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

class Tspan extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('tspan', node), attrs);
    this._build = false; // disable build mode for adding multiple lines
  } // Shortcut dx


  dx(dx) {
    return this.attr('dx', dx);
  } // Shortcut dy


  dy(dy) {
    return this.attr('dy', dy);
  } // Create new line


  newLine() {
    // mark new line
    this.dom.newLined = true; // fetch parent

    const text = this.parent(); // early return in case we are not in a text element

    if (!(text instanceof Text)) {
      return this;
    }

    const i = text.index(this);
    const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
    const dy = text.dom.leading * new SVGNumber(fontSize); // apply new position

    return this.dy(i ? dy : 0).attr('x', text.x());
  } // Set text content


  text(text) {
    if (text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');

    if (typeof text === 'function') {
      this.clear().build(true);
      text.call(this, this);
      this.build(false);
    } else {
      this.plain(text);
    }

    return this;
  }

}
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function (text = '') {
      const tspan = new Tspan(); // clear if build mode is disabled

      if (!this._build) {
        this.clear();
      } // add new tspan


      return this.put(tspan).text(text);
    })
  },
  Text: {
    newLine: function (text = '') {
      return this.tspan(text).newLine();
    }
  }
});
register(Tspan, 'Tspan');

class Circle extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('circle', node), attrs);
  }

  radius(r) {
    return this.attr('r', r);
  } // Radius x value


  rx(rx) {
    return this.attr('r', rx);
  } // Alias radius x value


  ry(ry) {
    return this.rx(ry);
  }

  size(size) {
    return this.radius(new SVGNumber(size).divide(2));
  }

}
extend(Circle, {
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function (size = 0) {
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

class ClipPath extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('clipPath', node), attrs);
  } // Unclip all clipped elements and remove itself


  remove() {
    // unclip all targets
    this.targets().forEach(function (el) {
      el.unclip();
    }); // remove clipPath from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [clip-path*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper() {
      return this.reference('clip-path');
    },

    clipWith(element) {
      // use given clip or create a new one
      const clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

      return this.attr('clip-path', 'url("#' + clipper.id() + '")');
    },

    // Unclip element
    unclip() {
      return this.attr('clip-path', null);
    }

  }
});
register(ClipPath, 'ClipPath');

class ForeignObject extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('foreignObject', node), attrs);
  }

}
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

function dmove(dx, dy) {
  this.children().forEach((child, i) => {
    let bbox; // We have to wrap this for elements that dont have a bbox
    // e.g. title and other descriptive elements

    try {
      // Get the childs bbox
      bbox = child.bbox();
    } catch (e) {
      return;
    } // Get childs matrix


    const m = new Matrix(child); // Translate childs matrix by amount and
    // transform it back into parents space

    const matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

    const p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

    child.move(p.x, p.y);
  });
  return this;
}
function dx(dx) {
  return this.dmove(dx, 0);
}
function dy(dy) {
  return this.dmove(0, dy);
}
function height(height, box = this.bbox()) {
  if (height == null) return box.height;
  return this.size(box.width, height, box);
}
function move(x = 0, y = 0, box = this.bbox()) {
  const dx = x - box.x;
  const dy = y - box.y;
  return this.dmove(dx, dy);
}
function size(width, height, box = this.bbox()) {
  const p = proportionalSize(this, width, height, box);
  const scaleX = p.width / box.width;
  const scaleY = p.height / box.height;
  this.children().forEach((child, i) => {
    const o = new Point(box).transform(new Matrix(child).inverse());
    child.scale(scaleX, scaleY, o.x, o.y);
  });
  return this;
}
function width(width, box = this.bbox()) {
  if (width == null) return box.width;
  return this.size(width, box.height, box);
}
function x(x, box = this.bbox()) {
  if (x == null) return box.x;
  return this.move(x, box.y, box);
}
function y(y, box = this.bbox()) {
  if (y == null) return box.y;
  return this.move(box.x, y, box);
}

var containerGeometry = {
  __proto__: null,
  dmove: dmove,
  dx: dx,
  dy: dy,
  height: height,
  move: move,
  size: size,
  width: width,
  x: x,
  y: y
};

class G extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('g', node), attrs);
  }

}
extend(G, containerGeometry);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

class A extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('a', node), attrs);
  } // Link target attribute


  target(target) {
    return this.attr('target', target);
  } // Link url


  to(url) {
    return this.attr('href', url, xlink);
  }

}
extend(A, containerGeometry);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    unlink() {
      const link = this.linker();
      if (!link) return this;
      const parent = link.parent();

      if (!parent) {
        return this.remove();
      }

      const index = parent.index(link);
      parent.add(this, index);
      link.remove();
      return this;
    },

    linkTo(url) {
      // reuse old link if possible
      let link = this.linker();

      if (!link) {
        link = new A();
        this.wrap(link);
      }

      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }

      return this;
    },

    linker() {
      const link = this.parent();

      if (link && link.node.nodeName.toLowerCase() === 'a') {
        return link;
      }

      return null;
    }

  }
});
register(A, 'A');

class Mask extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('mask', node), attrs);
  } // Unmask all masked elements and remove itself


  remove() {
    // unmask all targets
    this.targets().forEach(function (el) {
      el.unmask();
    }); // remove mask from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [mask*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker() {
      return this.reference('mask');
    },

    maskWith(element) {
      // use given mask or create a new one
      const masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

      return this.attr('mask', 'url("#' + masker.id() + '")');
    },

    // Unmask element
    unmask() {
      return this.attr('mask', null);
    }

  }
});
register(Mask, 'Mask');

class Stop extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('stop', node), attrs);
  } // add color stops


  update(o) {
    if (typeof o === 'number' || o instanceof SVGNumber) {
      o = {
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      };
    } // set attributes


    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
    return this;
  }

}
registerMethods({
  Gradient: {
    // Add a color stop
    stop: function (offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    }
  }
});
register(Stop, 'Stop');

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  let ret = selector + '{';

  for (const i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }

  ret += '}';
  return ret;
}

class Style extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('style', node), attrs);
  }

  addText(w = '') {
    this.node.textContent += w;
    return this;
  }

  font(name, src, params = {}) {
    return this.rule('@font-face', {
      fontFamily: name,
      src: src,
      ...params
    });
  }

  rule(selector, obj) {
    return this.addText(cssRule(selector, obj));
  }

}
registerMethods('Dom', {
  style(selector, obj) {
    return this.put(new Style()).rule(selector, obj);
  },

  fontface(name, src, params) {
    return this.put(new Style()).font(name, src, params);
  }

});
register(Style, 'Style');

class TextPath extends Text {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('textPath', node), attrs);
  } // return the array of the path track element


  array() {
    const track = this.track();
    return track ? track.array() : null;
  } // Plot path if any


  plot(d) {
    const track = this.track();
    let pathArray = null;

    if (track) {
      pathArray = track.plot(d);
    }

    return d == null ? pathArray : this;
  } // Get the path element


  track() {
    return this.reference('href');
  }

}
registerMethods({
  Container: {
    textPath: wrapWithAttrCheck(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = this.text(text);
      }

      return text.path(path);
    })
  },
  Text: {
    // Create path for text to run on
    path: wrapWithAttrCheck(function (track, importNodes = true) {
      const textPath = new TextPath(); // if track is a path, reuse it

      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      } // link textPath to path and add content


      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

      let node;

      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      } // add textPath element as child node and return textPath


      return this.put(textPath);
    }),

    // Get the textPath children
    textPath() {
      return this.findOne('textPath');
    }

  },
  Path: {
    // creates a textPath from this path
    text: wrapWithAttrCheck(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = new Text().addTo(this.parent()).text(text);
      } // Create textPath from text and path and return


      return text.path(this);
    }),

    targets() {
      return baseFind('svg textPath').filter(node => {
        return (node.attr('href') || '').includes(this.id());
      }); // Does not work in IE11. Use when IE support is dropped
      // return baseFind('svg textPath[*|href*="' + this.id() + '"]')
    }

  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

class Use extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('use', node), attrs);
  } // Use element as a reference


  use(element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + element, xlink);
  }

}
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).use(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
const SVG = makeInstance;
extend([Svg, Symbol, Image, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Gradient, Runner], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(Shape, getMethodsFor('Shape'));
extend([Container, Fragment], getMethodsFor('Container'));
extend(Gradient, getMethodsFor('Gradient'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray, Point]);
makeMorphable();


//# sourceMappingURL=svg.esm.js.map


/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSPlugin": () => (/* binding */ CSSPlugin),
/* harmony export */   "_createElement": () => (/* binding */ _createElement),
/* harmony export */   "_getBBox": () => (/* binding */ _getBBox),
/* harmony export */   "checkPrefix": () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      relative,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: relative ? relative * endNum : endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = relative ? endNum * relative : endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], endValue, index, targets);
          } else {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, endValue);
        }

        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Back": () => (/* binding */ Back),
/* harmony export */   "Bounce": () => (/* binding */ Bounce),
/* harmony export */   "Circ": () => (/* binding */ Circ),
/* harmony export */   "Cubic": () => (/* binding */ Cubic),
/* harmony export */   "Elastic": () => (/* binding */ Elastic),
/* harmony export */   "Expo": () => (/* binding */ Expo),
/* harmony export */   "GSCache": () => (/* binding */ GSCache),
/* harmony export */   "Linear": () => (/* binding */ Linear),
/* harmony export */   "Power0": () => (/* binding */ Power0),
/* harmony export */   "Power1": () => (/* binding */ Power1),
/* harmony export */   "Power2": () => (/* binding */ Power2),
/* harmony export */   "Power3": () => (/* binding */ Power3),
/* harmony export */   "Power4": () => (/* binding */ Power4),
/* harmony export */   "PropTween": () => (/* binding */ PropTween),
/* harmony export */   "Quad": () => (/* binding */ Quad),
/* harmony export */   "Quart": () => (/* binding */ Quart),
/* harmony export */   "Quint": () => (/* binding */ Quint),
/* harmony export */   "Sine": () => (/* binding */ Sine),
/* harmony export */   "SteppedEase": () => (/* binding */ SteppedEase),
/* harmony export */   "Strong": () => (/* binding */ Strong),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "TimelineLite": () => (/* binding */ Timeline),
/* harmony export */   "TimelineMax": () => (/* binding */ Timeline),
/* harmony export */   "Tween": () => (/* binding */ Tween),
/* harmony export */   "TweenLite": () => (/* binding */ Tween),
/* harmony export */   "TweenMax": () => (/* binding */ Tween),
/* harmony export */   "_checkPlugin": () => (/* binding */ _checkPlugin),
/* harmony export */   "_colorExp": () => (/* binding */ _colorExp),
/* harmony export */   "_colorStringFilter": () => (/* binding */ _colorStringFilter),
/* harmony export */   "_config": () => (/* binding */ _config),
/* harmony export */   "_forEachName": () => (/* binding */ _forEachName),
/* harmony export */   "_getCache": () => (/* binding */ _getCache),
/* harmony export */   "_getProperty": () => (/* binding */ _getProperty),
/* harmony export */   "_getSetter": () => (/* binding */ _getSetter),
/* harmony export */   "_isString": () => (/* binding */ _isString),
/* harmony export */   "_isUndefined": () => (/* binding */ _isUndefined),
/* harmony export */   "_missingPlugin": () => (/* binding */ _missingPlugin),
/* harmony export */   "_numExp": () => (/* binding */ _numExp),
/* harmony export */   "_numWithUnitExp": () => (/* binding */ _numWithUnitExp),
/* harmony export */   "_plugins": () => (/* binding */ _plugins),
/* harmony export */   "_relExp": () => (/* binding */ _relExp),
/* harmony export */   "_removeLinkedListItem": () => (/* binding */ _removeLinkedListItem),
/* harmony export */   "_renderComplexString": () => (/* binding */ _renderComplexString),
/* harmony export */   "_replaceRandom": () => (/* binding */ _replaceRandom),
/* harmony export */   "_round": () => (/* binding */ _round),
/* harmony export */   "_roundModifier": () => (/* binding */ _roundModifier),
/* harmony export */   "_setDefaults": () => (/* binding */ _setDefaults),
/* harmony export */   "_sortPropTweensByPriority": () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   "_ticker": () => (/* binding */ _ticker),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   "distribute": () => (/* binding */ distribute),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "gsap": () => (/* binding */ gsap),
/* harmony export */   "interpolate": () => (/* binding */ interpolate),
/* harmony export */   "mapRange": () => (/* binding */ mapRange),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "selector": () => (/* binding */ selector),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "snap": () => (/* binding */ snap),
/* harmony export */   "splitColor": () => (/* binding */ splitColor),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "unitize": () => (/* binding */ unitize),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapYoyo": () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : value.substr(v.index + v[0].length);
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback) {
      _listeners.indexOf(callback) < 0 && _listeners.push(callback);

      _wake();
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return this;
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (parsedStart !== end) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);
    prevStartAt && _removeFromParent(prevStartAt.render(-1, true));

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.

        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        } // if (time > 0) {
        // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        // } else if (dur && !(time < 0 && prevStartAt)) {
        // 	time && (tween._zTime = time);
        // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        // }

      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.

        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.9.1";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Back": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   "Bounce": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   "CSSPlugin": () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   "Circ": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   "Cubic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   "Elastic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   "Expo": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   "Linear": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   "Power0": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   "Power1": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   "Power2": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   "Power3": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   "Power4": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   "Quad": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   "Quart": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   "Quint": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   "Sine": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   "SteppedEase": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   "Strong": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   "TimelineLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   "TimelineMax": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   "TweenLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   "TweenMax": () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   "gsap": () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "squareSize": () => (/* binding */ squareSize)
/* harmony export */ });
const squareSize = 30;



/***/ }),

/***/ "./src/shapes.js":
/*!***********************!*\
  !*** ./src/shapes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @georgedoescode/generative-utils */ "./node_modules/@georgedoescode/generative-utils/dist/index.js");



function renderBlock(draw, x, y, background, foreground) {

  // Create group element
  const group = draw.group().addClass("block");

  // Draw Square
  group.rect(_config__WEBPACK_IMPORTED_MODULE_0__.squareSize, _config__WEBPACK_IMPORTED_MODULE_0__.squareSize).fill(background).move(x, y);
}

function renderCircle(draw, x, y, background, foreground) {
  // Create group element
  const group = draw.group().addClass("circle");

  // Draw Background
  group.rect(_config__WEBPACK_IMPORTED_MODULE_0__.squareSize, _config__WEBPACK_IMPORTED_MODULE_0__.squareSize).fill(background).move(x, y);

  // Draw Foreground
  group.circle(_config__WEBPACK_IMPORTED_MODULE_0__.squareSize).fill(foreground).move(x, y);

  if ((0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_1__.random)([0, 1])) {
    const scale = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_1__.random)(0.5, 0.9);
    group.circle(_config__WEBPACK_IMPORTED_MODULE_0__.squareSize * scale).fill(background).center(x + _config__WEBPACK_IMPORTED_MODULE_0__.squareSize * 0.5, y + _config__WEBPACK_IMPORTED_MODULE_0__.squareSize * 0.5);
  }
}

function renderOppositeCircles(draw, x, y, background, foreground) {
  const group = draw.group().addClass("opposite-circles");

  group.rect(_config__WEBPACK_IMPORTED_MODULE_0__.squareSize, _config__WEBPACK_IMPORTED_MODULE_0__.squareSize).fill(background).move(x, y);

  const circleGroup = draw.group();
  const mask = draw.rect(_config__WEBPACK_IMPORTED_MODULE_0__.squareSize, _config__WEBPACK_IMPORTED_MODULE_0__.squareSize).fill("#fff").move(x, y);

  const offset = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_1__.random)([
    [0, _config__WEBPACK_IMPORTED_MODULE_0__.squareSize, _config__WEBPACK_IMPORTED_MODULE_0__.squareSize, 0],
    [0, 0, _config__WEBPACK_IMPORTED_MODULE_0__.squareSize, _config__WEBPACK_IMPORTED_MODULE_0__.squareSize],
  ]);

  circleGroup.circle(_config__WEBPACK_IMPORTED_MODULE_0__.squareSize).fill(foreground).center(x + offset[0], y + offset[1]);

  circleGroup.circle(_config__WEBPACK_IMPORTED_MODULE_0__.squareSize).fill(foreground).center(x + offset[2], y + offset[3]);

  circleGroup.maskWith(mask);
  group.add(circleGroup);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  renderCircle,
  renderOppositeCircles,
]);

/***/ }),

/***/ "./node_modules/nice-color-palettes/100.json":
/*!***************************************************!*\
  !*** ./node_modules/nice-color-palettes/100.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"],["#ecd078","#d95b43","#c02942","#542437","#53777a"],["#556270","#4ecdc4","#c7f464","#ff6b6b","#c44d58"],["#774f38","#e08e79","#f1d4af","#ece5ce","#c5e0dc"],["#e8ddcb","#cdb380","#036564","#033649","#031634"],["#490a3d","#bd1550","#e97f02","#f8ca00","#8a9b0f"],["#594f4f","#547980","#45ada8","#9de0ad","#e5fcc2"],["#00a0b0","#6a4a3c","#cc333f","#eb6841","#edc951"],["#e94e77","#d68189","#c6a49a","#c6e5d9","#f4ead5"],["#3fb8af","#7fc7af","#dad8a7","#ff9e9d","#ff3d7f"],["#d9ceb2","#948c75","#d5ded9","#7a6a53","#99b2b7"],["#ffffff","#cbe86b","#f2e9e1","#1c140d","#cbe86b"],["#efffcd","#dce9be","#555152","#2e2633","#99173c"],["#343838","#005f6b","#008c9e","#00b4cc","#00dffc"],["#413e4a","#73626e","#b38184","#f0b49e","#f7e4be"],["#ff4e50","#fc913a","#f9d423","#ede574","#e1f5c4"],["#99b898","#fecea8","#ff847c","#e84a5f","#2a363b"],["#655643","#80bca3","#f6f7bd","#e6ac27","#bf4d28"],["#00a8c6","#40c0cb","#f9f2e7","#aee239","#8fbe00"],["#351330","#424254","#64908a","#e8caa4","#cc2a41"],["#554236","#f77825","#d3ce3d","#f1efa5","#60b99a"],["#5d4157","#838689","#a8caba","#cad7b2","#ebe3aa"],["#8c2318","#5e8c6a","#88a65e","#bfb35a","#f2c45a"],["#fad089","#ff9c5b","#f5634a","#ed303c","#3b8183"],["#ff4242","#f4fad2","#d4ee5e","#e1edb9","#f0f2eb"],["#f8b195","#f67280","#c06c84","#6c5b7b","#355c7d"],["#d1e751","#ffffff","#000000","#4dbce9","#26ade4"],["#1b676b","#519548","#88c425","#bef202","#eafde6"],["#5e412f","#fcebb6","#78c0a8","#f07818","#f0a830"],["#bcbdac","#cfbe27","#f27435","#f02475","#3b2d38"],["#452632","#91204d","#e4844a","#e8bf56","#e2f7ce"],["#eee6ab","#c5bc8e","#696758","#45484b","#36393b"],["#f0d8a8","#3d1c00","#86b8b1","#f2d694","#fa2a00"],["#2a044a","#0b2e59","#0d6759","#7ab317","#a0c55f"],["#f04155","#ff823a","#f2f26f","#fff7bd","#95cfb7"],["#b9d7d9","#668284","#2a2829","#493736","#7b3b3b"],["#bbbb88","#ccc68d","#eedd99","#eec290","#eeaa88"],["#b3cc57","#ecf081","#ffbe40","#ef746f","#ab3e5b"],["#a3a948","#edb92e","#f85931","#ce1836","#009989"],["#300030","#480048","#601848","#c04848","#f07241"],["#67917a","#170409","#b8af03","#ccbf82","#e33258"],["#aab3ab","#c4cbb7","#ebefc9","#eee0b7","#e8caaf"],["#e8d5b7","#0e2430","#fc3a51","#f5b349","#e8d5b9"],["#ab526b","#bca297","#c5ceae","#f0e2a4","#f4ebc3"],["#607848","#789048","#c0d860","#f0f0d8","#604848"],["#b6d8c0","#c8d9bf","#dadabd","#ecdbbc","#fedcba"],["#a8e6ce","#dcedc2","#ffd3b5","#ffaaa6","#ff8c94"],["#3e4147","#fffedf","#dfba69","#5a2e2e","#2a2c31"],["#fc354c","#29221f","#13747d","#0abfbc","#fcf7c5"],["#cc0c39","#e6781e","#c8cf02","#f8fcc1","#1693a7"],["#1c2130","#028f76","#b3e099","#ffeaad","#d14334"],["#a7c5bd","#e5ddcb","#eb7b59","#cf4647","#524656"],["#dad6ca","#1bb0ce","#4f8699","#6a5e72","#563444"],["#5c323e","#a82743","#e15e32","#c0d23e","#e5f04c"],["#edebe6","#d6e1c7","#94c7b6","#403b33","#d3643b"],["#fdf1cc","#c6d6b8","#987f69","#e3ad40","#fcd036"],["#230f2b","#f21d41","#ebebbc","#bce3c5","#82b3ae"],["#b9d3b0","#81bda4","#b28774","#f88f79","#f6aa93"],["#3a111c","#574951","#83988e","#bcdea5","#e6f9bc"],["#5e3929","#cd8c52","#b7d1a3","#dee8be","#fcf7d3"],["#1c0113","#6b0103","#a30006","#c21a01","#f03c02"],["#000000","#9f111b","#b11623","#292c37","#cccccc"],["#382f32","#ffeaf2","#fcd9e5","#fbc5d8","#f1396d"],["#e3dfba","#c8d6bf","#93ccc6","#6cbdb5","#1a1f1e"],["#f6f6f6","#e8e8e8","#333333","#990100","#b90504"],["#1b325f","#9cc4e4","#e9f2f9","#3a89c9","#f26c4f"],["#a1dbb2","#fee5ad","#faca66","#f7a541","#f45d4c"],["#c1b398","#605951","#fbeec2","#61a6ab","#accec0"],["#5e9fa3","#dcd1b4","#fab87f","#f87e7b","#b05574"],["#951f2b","#f5f4d7","#e0dfb1","#a5a36c","#535233"],["#8dccad","#988864","#fea6a2","#f9d6ac","#ffe9af"],["#2d2d29","#215a6d","#3ca2a2","#92c7a3","#dfece6"],["#413d3d","#040004","#c8ff00","#fa023c","#4b000f"],["#eff3cd","#b2d5ba","#61ada0","#248f8d","#605063"],["#ffefd3","#fffee4","#d0ecea","#9fd6d2","#8b7a5e"],["#cfffdd","#b4dec1","#5c5863","#a85163","#ff1f4c"],["#9dc9ac","#fffec7","#f56218","#ff9d2e","#919167"],["#4e395d","#827085","#8ebe94","#ccfc8e","#dc5b3e"],["#a8a7a7","#cc527a","#e8175d","#474747","#363636"],["#f8edd1","#d88a8a","#474843","#9d9d93","#c5cfc6"],["#046d8b","#309292","#2fb8ac","#93a42a","#ecbe13"],["#f38a8a","#55443d","#a0cab5","#cde9ca","#f1edd0"],["#a70267","#f10c49","#fb6b41","#f6d86b","#339194"],["#ff003c","#ff8a00","#fabe28","#88c100","#00c176"],["#ffedbf","#f7803c","#f54828","#2e0d23","#f8e4c1"],["#4e4d4a","#353432","#94ba65","#2790b0","#2b4e72"],["#0ca5b0","#4e3f30","#fefeeb","#f8f4e4","#a5b3aa"],["#4d3b3b","#de6262","#ffb88c","#ffd0b3","#f5e0d3"],["#fffbb7","#a6f6af","#66b6ab","#5b7c8d","#4f2958"],["#edf6ee","#d1c089","#b3204d","#412e28","#151101"],["#9d7e79","#ccac95","#9a947c","#748b83","#5b756c"],["#fcfef5","#e9ffe1","#cdcfb7","#d6e6c3","#fafbe3"],["#9cddc8","#bfd8ad","#ddd9ab","#f7af63","#633d2e"],["#30261c","#403831","#36544f","#1f5f61","#0b8185"],["#aaff00","#ffaa00","#ff00aa","#aa00ff","#00aaff"],["#d1313d","#e5625c","#f9bf76","#8eb2c5","#615375"],["#ffe181","#eee9e5","#fad3b2","#ffba7f","#ff9c97"],["#73c8a9","#dee1b6","#e1b866","#bd5532","#373b44"],["#805841","#dcf7f3","#fffcdd","#ffd8d8","#f5a2a2"]]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @georgedoescode/generative-utils */ "./node_modules/@georgedoescode/generative-utils/dist/index.js");
/* harmony import */ var nice_color_palettes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nice-color-palettes */ "./node_modules/nice-color-palettes/100.json");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes */ "./src/shapes.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./src/config.js");









let numRows, numCols, draw, palette;

function generateGrid() {
  // Remove SVG
  document.querySelector(".container").innerHTML = "";
  renderGrid();
}

function renderGrid() {
  palette = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(nice_color_palettes__WEBPACK_IMPORTED_MODULE_3__);
  numRows = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(4, 8, true);
  numCols = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(4, 8, true);

  const bg = tinycolor2__WEBPACK_IMPORTED_MODULE_4___default().mix(palette[0], palette[2], 50)
    .desaturate(10)
    .toString();

  const bgInner = tinycolor2__WEBPACK_IMPORTED_MODULE_4___default()(bg).lighten(10);
  const bgOuter = tinycolor2__WEBPACK_IMPORTED_MODULE_4___default()(bg).darken(10);

  gsap__WEBPACK_IMPORTED_MODULE_7__["default"].to(".container", {
    "background-image": `radial-gradient(${bgInner} 0%, ${bgOuter} 100%)`,
    duration: 0.5,
  })

  draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__.SVG)()
    .addTo(".container")
    .size("100%", "100%")
    .viewbox(`0 0 ${numRows * _config__WEBPACK_IMPORTED_MODULE_6__.squareSize} ${numCols * _config__WEBPACK_IMPORTED_MODULE_6__.squareSize}`);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      generateBlock(i, j);
    }
  }
}

function generateBlock(i, j) {
  const x = i * _config__WEBPACK_IMPORTED_MODULE_6__.squareSize;
  const y = j * _config__WEBPACK_IMPORTED_MODULE_6__.squareSize;

  const shape = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(_shapes__WEBPACK_IMPORTED_MODULE_5__["default"]);

  const { background, foreground } = getTwoRandomColors();

  shape(draw, x, y, background, foreground);
}

function getTwoRandomColors() {
  const colors = [...palette];

  const backgroundIndex = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(0, palette.length - 1, true);
  colors.splice(backgroundIndex, 1);

  return { background: palette[backgroundIndex], foreground: (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(colors) };
}

function init() {
  generateGrid();

  document.querySelector('.grid-button').addEventListener(('click'), generateGrid);
}

init();
})();

/******/ })()
;