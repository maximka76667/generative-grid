/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@georgedoescode/generative-utils/dist/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@georgedoescode/generative-utils/dist/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/nice-color-palettes/100.json":
/*!***************************************************!*\
  !*** ./node_modules/nice-color-palettes/100.json ***!
  \***************************************************/
/***/ ((module) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @georgedoescode/generative-utils */ "./node_modules/@georgedoescode/generative-utils/dist/index.js");
/* harmony import */ var nice_color_palettes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nice-color-palettes */ "./node_modules/nice-color-palettes/100.json");





let numRows, numCols, draw, squareSize, palette;

function generateGrid() {
  // Remove SVG
  document.querySelector(".container").innerHTML = "";
  renderGrid();
}

function renderGrid() {
  palette = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(nice_color_palettes__WEBPACK_IMPORTED_MODULE_3__);
  squareSize = 30;
  numRows = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(4, 8, true);
  numCols = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(4, 8, true);

  draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__.SVG)()
    .addTo(".container")
    .size("100%", "100%")
    .viewbox(`0 0 ${numRows * squareSize} ${numCols * squareSize}`);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      generateBlock(i, j);
    }
  }
}

function generateBlock(i, j) {
  const x = i * squareSize;
  const y = j * squareSize;

  renderBlock(x, y);
}

function renderBlock(x, y) {

  // Create group element
  const group = draw.group().addClass("draw-block");

  const background = (0,_georgedoescode_generative_utils__WEBPACK_IMPORTED_MODULE_2__.random)(palette);

  // Draw Square
  group.rect(squareSize, squareSize).fill(background).move(x, y);
}

function init() {
  generateGrid();

  document.querySelector('.grid-button').addEventListener(('click'), generateGrid);
}

init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsSUFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sUUFBUTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNEQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sUUFBUTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQSxpRUFBaUU7O0FBRWpFO0FBQ0EsdUVBQXVFOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9KQUFvSjtBQUNwSixJQUFJOzs7QUFHSjtBQUNBLHVEQUF1RDs7QUFFdkQseVpBQXlaOztBQUV6WjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQSx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNENBQTRDOztBQUVsRCw2TUFBNk07O0FBRTdNO0FBQ0EsK0RBQStEO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0RBQWtELGlCQUFpQixxQkFBcUIsYUFBYTtBQUNyRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsaUJBQWlCO0FBQ2pFOztBQUVBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtDQUFrQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0MscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QyxxRUFBcUU7O0FBRXJFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBLHFDQUFxQzs7QUFFckMsZ0RBQWdEOztBQUVoRDtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVOzs7QUFHVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1QsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSyxRQUFROztBQUViO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLFFBQVE7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLHVCQUF1Qjs7QUFFdkIsOENBQThDOztBQUU5QztBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBLFVBQVU7OztBQUdWO0FBQ0E7O0FBRUEsd0NBQXdDOzs7QUFHeEM7QUFDQSwyQkFBMkI7QUFDM0IsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTs7O0FBR1I7QUFDQSxNQUFNO0FBQ047OztBQUdBLG9EQUFvRDs7QUFFcEQ7QUFDQSxnRUFBZ0U7O0FBRWhFLDhCQUE4Qjs7QUFFOUIseUNBQXlDLE1BQU07QUFDL0M7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QixtQkFBbUI7O0FBRW5COztBQUVBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0U7QUFDdEU7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsR0FBRzs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0EsNkNBQTZDOztBQUU3Qyx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0IsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLHNCQUFzQjs7QUFFdEIsc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsSUFBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQixzQ0FBc0M7O0FBRXRDO0FBQ0EsOEVBQThFOztBQUU5RSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQSx1Q0FBdUMsc0NBQXNDO0FBQzdFO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLG9EQUFvRDs7QUFFcEQsOEJBQThCLFFBQVE7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIscUNBQXFDLFNBQVM7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOztBQUVGLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOzs7QUFHQTtBQUNBLHlFQUF5RTs7QUFFekU7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0EsaUNBQWlDOzs7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QUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0Es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bEI7QUFDQSxTQUFTLHFEQUFHO0FBQ1o7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0IsRUFBRSxxQkFBcUI7QUFDakU7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQixvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdFQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VuZXJhdGl2ZS1ncmlkLy4vbm9kZV9tb2R1bGVzL0BnZW9yZ2Vkb2VzY29kZS9nZW5lcmF0aXZlLXV0aWxzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGl2ZS1ncmlkLy4vbm9kZV9tb2R1bGVzL0Bzdmdkb3Rqcy9zdmcuanMvZGlzdC9zdmcuZXNtLmpzIiwid2VicGFjazovL2dlbmVyYXRpdmUtZ3JpZC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9nZW5lcmF0aXZlLWdyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2VuZXJhdGl2ZS1ncmlkL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9nZW5lcmF0aXZlLWdyaWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dlbmVyYXRpdmUtZ3JpZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlbmVyYXRpdmUtZ3JpZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dlbmVyYXRpdmUtZ3JpZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSmk9T2JqZWN0LmNyZWF0ZTt2YXIgb249T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciB0bz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBlbz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgbm89T2JqZWN0LmdldFByb3RvdHlwZU9mLHJvPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIGlvPXQ9Pm9uKHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIFU9KHQsZSk9PigpPT4oZXx8dCgoZT17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZSksZS5leHBvcnRzKTt2YXIgb289KHQsZSxuKT0+e2lmKGUmJnR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKWZvcihsZXQgciBvZiBlbyhlKSkhcm8uY2FsbCh0LHIpJiZyIT09XCJkZWZhdWx0XCImJm9uKHQscix7Z2V0OigpPT5lW3JdLGVudW1lcmFibGU6IShuPXRvKGUscikpfHxuLmVudW1lcmFibGV9KTtyZXR1cm4gdH0sc249dD0+b28oaW8ob24odCE9bnVsbD9KaShubyh0KSk6e30sXCJkZWZhdWx0XCIsdCYmdC5fX2VzTW9kdWxlJiZcImRlZmF1bHRcImluIHQ/e2dldDooKT0+dC5kZWZhdWx0LGVudW1lcmFibGU6ITB9Ont2YWx1ZTp0LGVudW1lcmFibGU6ITB9KSksdCk7dmFyIFJuPVUoKHpuLGFuKT0+eyhmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gcihvKXt2YXIgbD10aGlzLGY9YSgpO2wubmV4dD1mdW5jdGlvbigpe3ZhciB1PTIwOTE2MzkqbC5zMCtsLmMqMjMyODMwNjQzNjUzODY5NjNlLTI2O3JldHVybiBsLnMwPWwuczEsbC5zMT1sLnMyLGwuczI9dS0obC5jPXV8MCl9LGwuYz0xLGwuczA9ZihcIiBcIiksbC5zMT1mKFwiIFwiKSxsLnMyPWYoXCIgXCIpLGwuczAtPWYobyksbC5zMDwwJiYobC5zMCs9MSksbC5zMS09ZihvKSxsLnMxPDAmJihsLnMxKz0xKSxsLnMyLT1mKG8pLGwuczI8MCYmKGwuczIrPTEpLGY9bnVsbH1mdW5jdGlvbiBpKG8sbCl7cmV0dXJuIGwuYz1vLmMsbC5zMD1vLnMwLGwuczE9by5zMSxsLnMyPW8uczIsbH1mdW5jdGlvbiBzKG8sbCl7dmFyIGY9bmV3IHIobyksdT1sJiZsLnN0YXRlLGM9Zi5uZXh0O3JldHVybiBjLmludDMyPWZ1bmN0aW9uKCl7cmV0dXJuIGYubmV4dCgpKjQyOTQ5NjcyOTZ8MH0sYy5kb3VibGU9ZnVuY3Rpb24oKXtyZXR1cm4gYygpKyhjKCkqMjA5NzE1MnwwKSoxMTEwMjIzMDI0NjI1MTU2NWUtMzJ9LGMucXVpY2s9Yyx1JiYodHlwZW9mIHU9PVwib2JqZWN0XCImJmkodSxmKSxjLnN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIGkoZix7fSl9KSxjfWZ1bmN0aW9uIGEoKXt2YXIgbz00MDIyODcxMTk3LGw9ZnVuY3Rpb24oZil7Zj1TdHJpbmcoZik7Zm9yKHZhciB1PTA7dTxmLmxlbmd0aDt1Kyspe28rPWYuY2hhckNvZGVBdCh1KTt2YXIgYz0uMDI1MTk2MDMyODI0MTY5MzgqbztvPWM+Pj4wLGMtPW8sYyo9byxvPWM+Pj4wLGMtPW8sbys9Yyo0Mjk0OTY3Mjk2fXJldHVybihvPj4+MCkqMjMyODMwNjQzNjUzODY5NjNlLTI2fTtyZXR1cm4gbH1lJiZlLmV4cG9ydHM/ZS5leHBvcnRzPXM6biYmbi5hbWQ/bihmdW5jdGlvbigpe3JldHVybiBzfSk6dGhpcy5hbGVhPXN9KSh6bix0eXBlb2YgYW49PVwib2JqZWN0XCImJmFuLHR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmZGVmaW5lKX0pO3ZhciBGbj1VKChCbixsbik9PnsoZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIHIoYSl7dmFyIG89dGhpcyxsPVwiXCI7by54PTAsby55PTAsby56PTAsby53PTAsby5uZXh0PWZ1bmN0aW9uKCl7dmFyIHU9by54Xm8ueDw8MTE7cmV0dXJuIG8ueD1vLnksby55PW8ueixvLno9by53LG8ud149by53Pj4+MTledV51Pj4+OH0sYT09PShhfDApP28ueD1hOmwrPWE7Zm9yKHZhciBmPTA7ZjxsLmxlbmd0aCs2NDtmKyspby54Xj1sLmNoYXJDb2RlQXQoZil8MCxvLm5leHQoKX1mdW5jdGlvbiBpKGEsbyl7cmV0dXJuIG8ueD1hLngsby55PWEueSxvLno9YS56LG8udz1hLncsb31mdW5jdGlvbiBzKGEsbyl7dmFyIGw9bmV3IHIoYSksZj1vJiZvLnN0YXRlLHU9ZnVuY3Rpb24oKXtyZXR1cm4obC5uZXh0KCk+Pj4wKS80Mjk0OTY3Mjk2fTtyZXR1cm4gdS5kb3VibGU9ZnVuY3Rpb24oKXtkbyB2YXIgYz1sLm5leHQoKT4+PjExLGg9KGwubmV4dCgpPj4+MCkvNDI5NDk2NzI5NixwPShjK2gpLygxPDwyMSk7d2hpbGUocD09PTApO3JldHVybiBwfSx1LmludDMyPWwubmV4dCx1LnF1aWNrPXUsZiYmKHR5cGVvZiBmPT1cIm9iamVjdFwiJiZpKGYsbCksdS5zdGF0ZT1mdW5jdGlvbigpe3JldHVybiBpKGwse30pfSksdX1lJiZlLmV4cG9ydHM/ZS5leHBvcnRzPXM6biYmbi5hbWQ/bihmdW5jdGlvbigpe3JldHVybiBzfSk6dGhpcy54b3IxMjg9c30pKEJuLHR5cGVvZiBsbj09XCJvYmplY3RcIiYmbG4sdHlwZW9mIGRlZmluZT09XCJmdW5jdGlvblwiJiZkZWZpbmUpfSk7dmFyIFZuPVUoKExuLHVuKT0+eyhmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gcihhKXt2YXIgbz10aGlzLGw9XCJcIjtvLm5leHQ9ZnVuY3Rpb24oKXt2YXIgdT1vLnheby54Pj4+MjtyZXR1cm4gby54PW8ueSxvLnk9by56LG8uej1vLncsby53PW8udiwoby5kPW8uZCszNjI0Mzd8MCkrKG8udj1vLnZeby52PDw0Xih1XnU8PDEpKXwwfSxvLng9MCxvLnk9MCxvLno9MCxvLnc9MCxvLnY9MCxhPT09KGF8MCk/by54PWE6bCs9YTtmb3IodmFyIGY9MDtmPGwubGVuZ3RoKzY0O2YrKylvLnhePWwuY2hhckNvZGVBdChmKXwwLGY9PWwubGVuZ3RoJiYoby5kPW8ueDw8MTBeby54Pj4+NCksby5uZXh0KCl9ZnVuY3Rpb24gaShhLG8pe3JldHVybiBvLng9YS54LG8ueT1hLnksby56PWEueixvLnc9YS53LG8udj1hLnYsby5kPWEuZCxvfWZ1bmN0aW9uIHMoYSxvKXt2YXIgbD1uZXcgcihhKSxmPW8mJm8uc3RhdGUsdT1mdW5jdGlvbigpe3JldHVybihsLm5leHQoKT4+PjApLzQyOTQ5NjcyOTZ9O3JldHVybiB1LmRvdWJsZT1mdW5jdGlvbigpe2RvIHZhciBjPWwubmV4dCgpPj4+MTEsaD0obC5uZXh0KCk+Pj4wKS80Mjk0OTY3Mjk2LHA9KGMraCkvKDE8PDIxKTt3aGlsZShwPT09MCk7cmV0dXJuIHB9LHUuaW50MzI9bC5uZXh0LHUucXVpY2s9dSxmJiYodHlwZW9mIGY9PVwib2JqZWN0XCImJmkoZixsKSx1LnN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIGkobCx7fSl9KSx1fWUmJmUuZXhwb3J0cz9lLmV4cG9ydHM9czpuJiZuLmFtZD9uKGZ1bmN0aW9uKCl7cmV0dXJuIHN9KTp0aGlzLnhvcndvdz1zfSkoTG4sdHlwZW9mIHVuPT1cIm9iamVjdFwiJiZ1bix0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZSl9KTt2YXIgSG49VSgoWW4sY24pPT57KGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiByKGEpe3ZhciBvPXRoaXM7by5uZXh0PWZ1bmN0aW9uKCl7dmFyIGY9by54LHU9by5pLGMsaCxwO3JldHVybiBjPWZbdV0sY149Yz4+PjcsaD1jXmM8PDI0LGM9Zlt1KzEmN10saF49Y15jPj4+MTAsYz1mW3UrMyY3XSxoXj1jXmM+Pj4zLGM9Zlt1KzQmN10saF49Y15jPDw3LGM9Zlt1KzcmN10sYz1jXmM8PDEzLGhePWNeYzw8OSxmW3VdPWgsby5pPXUrMSY3LGh9O2Z1bmN0aW9uIGwoZix1KXt2YXIgYyxoLHA9W107aWYodT09PSh1fDApKWg9cFswXT11O2Vsc2UgZm9yKHU9XCJcIit1LGM9MDtjPHUubGVuZ3RoOysrYylwW2MmN109cFtjJjddPDwxNV51LmNoYXJDb2RlQXQoYykrcFtjKzEmN108PDEzO2Zvcig7cC5sZW5ndGg8ODspcC5wdXNoKDApO2ZvcihjPTA7Yzw4JiZwW2NdPT09MDsrK2MpO2ZvcihjPT04P2g9cFs3XT0tMTpoPXBbY10sZi54PXAsZi5pPTAsYz0yNTY7Yz4wOy0tYylmLm5leHQoKX1sKG8sYSl9ZnVuY3Rpb24gaShhLG8pe3JldHVybiBvLng9YS54LnNsaWNlKCksby5pPWEuaSxvfWZ1bmN0aW9uIHMoYSxvKXthPT1udWxsJiYoYT0rbmV3IERhdGUpO3ZhciBsPW5ldyByKGEpLGY9byYmby5zdGF0ZSx1PWZ1bmN0aW9uKCl7cmV0dXJuKGwubmV4dCgpPj4+MCkvNDI5NDk2NzI5Nn07cmV0dXJuIHUuZG91YmxlPWZ1bmN0aW9uKCl7ZG8gdmFyIGM9bC5uZXh0KCk+Pj4xMSxoPShsLm5leHQoKT4+PjApLzQyOTQ5NjcyOTYscD0oYytoKS8oMTw8MjEpO3doaWxlKHA9PT0wKTtyZXR1cm4gcH0sdS5pbnQzMj1sLm5leHQsdS5xdWljaz11LGYmJihmLngmJmkoZixsKSx1LnN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIGkobCx7fSl9KSx1fWUmJmUuZXhwb3J0cz9lLmV4cG9ydHM9czpuJiZuLmFtZD9uKGZ1bmN0aW9uKCl7cmV0dXJuIHN9KTp0aGlzLnhvcnNoaWZ0Nz1zfSkoWW4sdHlwZW9mIGNuPT1cIm9iamVjdFwiJiZjbix0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZSl9KTt2YXIgJG49VSgoR24sZm4pPT57KGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiByKGEpe3ZhciBvPXRoaXM7by5uZXh0PWZ1bmN0aW9uKCl7dmFyIGY9by53LHU9by5YLGM9by5pLGgscDtyZXR1cm4gby53PWY9ZisxNjQwNTMxNTI3fDAscD11W2MrMzQmMTI3XSxoPXVbYz1jKzEmMTI3XSxwXj1wPDwxMyxoXj1oPDwxNyxwXj1wPj4+MTUsaF49aD4+PjEyLHA9dVtjXT1wXmgsby5pPWMscCsoZl5mPj4+MTYpfDB9O2Z1bmN0aW9uIGwoZix1KXt2YXIgYyxoLHAsZCxtLHg9W10sXz0xMjg7Zm9yKHU9PT0odXwwKT8oaD11LHU9bnVsbCk6KHU9dStcIlxcMFwiLGg9MCxfPU1hdGgubWF4KF8sdS5sZW5ndGgpKSxwPTAsZD0tMzI7ZDxfOysrZCl1JiYoaF49dS5jaGFyQ29kZUF0KChkKzMyKSV1Lmxlbmd0aCkpLGQ9PT0wJiYobT1oKSxoXj1oPDwxMCxoXj1oPj4+MTUsaF49aDw8NCxoXj1oPj4+MTMsZD49MCYmKG09bSsxNjQwNTMxNTI3fDAsYz14W2QmMTI3XV49aCttLHA9Yz09MD9wKzE6MCk7Zm9yKHA+PTEyOCYmKHhbKHUmJnUubGVuZ3RofHwwKSYxMjddPS0xKSxwPTEyNyxkPTQqMTI4O2Q+MDstLWQpaD14W3ArMzQmMTI3XSxjPXhbcD1wKzEmMTI3XSxoXj1oPDwxMyxjXj1jPDwxNyxoXj1oPj4+MTUsY149Yz4+PjEyLHhbcF09aF5jO2Yudz1tLGYuWD14LGYuaT1wfWwobyxhKX1mdW5jdGlvbiBpKGEsbyl7cmV0dXJuIG8uaT1hLmksby53PWEudyxvLlg9YS5YLnNsaWNlKCksb31mdW5jdGlvbiBzKGEsbyl7YT09bnVsbCYmKGE9K25ldyBEYXRlKTt2YXIgbD1uZXcgcihhKSxmPW8mJm8uc3RhdGUsdT1mdW5jdGlvbigpe3JldHVybihsLm5leHQoKT4+PjApLzQyOTQ5NjcyOTZ9O3JldHVybiB1LmRvdWJsZT1mdW5jdGlvbigpe2RvIHZhciBjPWwubmV4dCgpPj4+MTEsaD0obC5uZXh0KCk+Pj4wKS80Mjk0OTY3Mjk2LHA9KGMraCkvKDE8PDIxKTt3aGlsZShwPT09MCk7cmV0dXJuIHB9LHUuaW50MzI9bC5uZXh0LHUucXVpY2s9dSxmJiYoZi5YJiZpKGYsbCksdS5zdGF0ZT1mdW5jdGlvbigpe3JldHVybiBpKGwse30pfSksdX1lJiZlLmV4cG9ydHM/ZS5leHBvcnRzPXM6biYmbi5hbWQ/bihmdW5jdGlvbigpe3JldHVybiBzfSk6dGhpcy54b3I0MDk2PXN9KShHbix0eXBlb2YgZm49PVwib2JqZWN0XCImJmZuLHR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmZGVmaW5lKX0pO3ZhciBVbj1VKChRbixobik9PnsoZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIHIoYSl7dmFyIG89dGhpcyxsPVwiXCI7by5uZXh0PWZ1bmN0aW9uKCl7dmFyIHU9by5iLGM9by5jLGg9by5kLHA9by5hO3JldHVybiB1PXU8PDI1XnU+Pj43XmMsYz1jLWh8MCxoPWg8PDI0Xmg+Pj44XnAscD1wLXV8MCxvLmI9dT11PDwyMF51Pj4+MTJeYyxvLmM9Yz1jLWh8MCxvLmQ9aDw8MTZeYz4+PjE2XnAsby5hPXAtdXwwfSxvLmE9MCxvLmI9MCxvLmM9MjY1NDQzNTc2OXwwLG8uZD0xMzY3MTMwNTUxLGE9PT1NYXRoLmZsb29yKGEpPyhvLmE9YS80Mjk0OTY3Mjk2fDAsby5iPWF8MCk6bCs9YTtmb3IodmFyIGY9MDtmPGwubGVuZ3RoKzIwO2YrKylvLmJePWwuY2hhckNvZGVBdChmKXwwLG8ubmV4dCgpfWZ1bmN0aW9uIGkoYSxvKXtyZXR1cm4gby5hPWEuYSxvLmI9YS5iLG8uYz1hLmMsby5kPWEuZCxvfWZ1bmN0aW9uIHMoYSxvKXt2YXIgbD1uZXcgcihhKSxmPW8mJm8uc3RhdGUsdT1mdW5jdGlvbigpe3JldHVybihsLm5leHQoKT4+PjApLzQyOTQ5NjcyOTZ9O3JldHVybiB1LmRvdWJsZT1mdW5jdGlvbigpe2RvIHZhciBjPWwubmV4dCgpPj4+MTEsaD0obC5uZXh0KCk+Pj4wKS80Mjk0OTY3Mjk2LHA9KGMraCkvKDE8PDIxKTt3aGlsZShwPT09MCk7cmV0dXJuIHB9LHUuaW50MzI9bC5uZXh0LHUucXVpY2s9dSxmJiYodHlwZW9mIGY9PVwib2JqZWN0XCImJmkoZixsKSx1LnN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIGkobCx7fSl9KSx1fWUmJmUuZXhwb3J0cz9lLmV4cG9ydHM9czpuJiZuLmFtZD9uKGZ1bmN0aW9uKCl7cmV0dXJuIHN9KTp0aGlzLnR5Y2hlaT1zfSkoUW4sdHlwZW9mIGhuPT1cIm9iamVjdFwiJiZobix0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZSl9KTt2YXIgS249VSgoKT0+e30pO3ZhciBXbj1VKChabix2ZSk9PnsoZnVuY3Rpb24odCxlLG4pe3ZhciByPTI1NixpPTYscz01MixhPVwicmFuZG9tXCIsbz1uLnBvdyhyLGkpLGw9bi5wb3coMixzKSxmPWwqMix1PXItMSxjO2Z1bmN0aW9uIGgoeSx3LFQpe3ZhciBBPVtdO3c9dz09ITA/e2VudHJvcHk6ITB9Ond8fHt9O3ZhciBDPXgobSh3LmVudHJvcHk/W3ksYihlKV06eT8/XygpLDMpLEEpLFM9bmV3IHAoQSksTj1mdW5jdGlvbigpe2Zvcih2YXIgdj1TLmcoaSksTT1vLGo9MDt2PGw7KXY9KHYraikqcixNKj1yLGo9Uy5nKDEpO2Zvcig7dj49Zjspdi89MixNLz0yLGo+Pj49MTtyZXR1cm4oditqKS9NfTtyZXR1cm4gTi5pbnQzMj1mdW5jdGlvbigpe3JldHVybiBTLmcoNCl8MH0sTi5xdWljaz1mdW5jdGlvbigpe3JldHVybiBTLmcoNCkvNDI5NDk2NzI5Nn0sTi5kb3VibGU9Tix4KGIoUy5TKSxlKSwody5wYXNzfHxUfHxmdW5jdGlvbih2LE0saixrKXtyZXR1cm4gayYmKGsuUyYmZChrLFMpLHYuc3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gZChTLHt9KX0pLGo/KG5bYV09dixNKTp2fSkoTixDLFwiZ2xvYmFsXCJpbiB3P3cuZ2xvYmFsOnRoaXM9PW4sdy5zdGF0ZSl9ZnVuY3Rpb24gcCh5KXt2YXIgdyxUPXkubGVuZ3RoLEE9dGhpcyxDPTAsUz1BLmk9QS5qPTAsTj1BLlM9W107Zm9yKFR8fCh5PVtUKytdKTtDPHI7KU5bQ109QysrO2ZvcihDPTA7QzxyO0MrKylOW0NdPU5bUz11JlMreVtDJVRdKyh3PU5bQ10pXSxOW1NdPXc7KEEuZz1mdW5jdGlvbih2KXtmb3IodmFyIE0saj0wLGs9QS5pLEU9QS5qLFA9QS5TO3YtLTspTT1QW2s9dSZrKzFdLGo9aipyK1BbdSYoUFtrXT1QW0U9dSZFK01dKSsoUFtFXT1NKV07cmV0dXJuIEEuaT1rLEEuaj1FLGp9KShyKX1mdW5jdGlvbiBkKHksdyl7cmV0dXJuIHcuaT15Lmksdy5qPXkuaix3LlM9eS5TLnNsaWNlKCksd31mdW5jdGlvbiBtKHksdyl7dmFyIFQ9W10sQT10eXBlb2YgeSxDO2lmKHcmJkE9PVwib2JqZWN0XCIpZm9yKEMgaW4geSl0cnl7VC5wdXNoKG0oeVtDXSx3LTEpKX1jYXRjaChTKXt9cmV0dXJuIFQubGVuZ3RoP1Q6QT09XCJzdHJpbmdcIj95OnkrXCJcXDBcIn1mdW5jdGlvbiB4KHksdyl7Zm9yKHZhciBUPXkrXCJcIixBLEM9MDtDPFQubGVuZ3RoOyl3W3UmQ109dSYoQV49d1t1JkNdKjE5KStULmNoYXJDb2RlQXQoQysrKTtyZXR1cm4gYih3KX1mdW5jdGlvbiBfKCl7dHJ5e3ZhciB5O3JldHVybiBjJiYoeT1jLnJhbmRvbUJ5dGVzKT95PXkocik6KHk9bmV3IFVpbnQ4QXJyYXkociksKHQuY3J5cHRvfHx0Lm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMoeSkpLGIoeSl9Y2F0Y2goQSl7dmFyIHc9dC5uYXZpZ2F0b3IsVD13JiZ3LnBsdWdpbnM7cmV0dXJuWytuZXcgRGF0ZSx0LFQsdC5zY3JlZW4sYihlKV19fWZ1bmN0aW9uIGIoeSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoMCx5KX1pZih4KG4ucmFuZG9tKCksZSksdHlwZW9mIHZlPT1cIm9iamVjdFwiJiZ2ZS5leHBvcnRzKXt2ZS5leHBvcnRzPWg7dHJ5e2M9S24oKX1jYXRjaCh5KXt9fWVsc2UgdHlwZW9mIGRlZmluZT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBofSk6bltcInNlZWRcIithXT1ofSkodHlwZW9mIHNlbGYhPVwidW5kZWZpbmVkXCI/c2VsZjpabixbXSxNYXRoKX0pO3ZhciB0cj1VKChubCxKbik9Pnt2YXIgc289Um4oKSxhbz1GbigpLGxvPVZuKCksdW89SG4oKSxjbz0kbigpLGZvPVVuKCksTXQ9V24oKTtNdC5hbGVhPXNvO010LnhvcjEyOD1hbztNdC54b3J3b3c9bG87TXQueG9yc2hpZnQ3PXVvO010LnhvcjQwOTY9Y287TXQudHljaGVpPWZvO0puLmV4cG9ydHM9TXR9KTt2YXIgZXI9VSgoZGwsX2UpPT57KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLG4scixpKXt0aGlzLm1heF9vYmplY3RzPW58fDEwLHRoaXMubWF4X2xldmVscz1yfHw0LHRoaXMubGV2ZWw9aXx8MCx0aGlzLmJvdW5kcz1lLHRoaXMub2JqZWN0cz1bXSx0aGlzLm5vZGVzPVtdfXQucHJvdG90eXBlLnNwbGl0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5sZXZlbCsxLG49dGhpcy5ib3VuZHMud2lkdGgvMixyPXRoaXMuYm91bmRzLmhlaWdodC8yLGk9dGhpcy5ib3VuZHMueCxzPXRoaXMuYm91bmRzLnk7dGhpcy5ub2Rlc1swXT1uZXcgdCh7eDppK24seTpzLHdpZHRoOm4saGVpZ2h0OnJ9LHRoaXMubWF4X29iamVjdHMsdGhpcy5tYXhfbGV2ZWxzLGUpLHRoaXMubm9kZXNbMV09bmV3IHQoe3g6aSx5OnMsd2lkdGg6bixoZWlnaHQ6cn0sdGhpcy5tYXhfb2JqZWN0cyx0aGlzLm1heF9sZXZlbHMsZSksdGhpcy5ub2Rlc1syXT1uZXcgdCh7eDppLHk6cytyLHdpZHRoOm4saGVpZ2h0OnJ9LHRoaXMubWF4X29iamVjdHMsdGhpcy5tYXhfbGV2ZWxzLGUpLHRoaXMubm9kZXNbM109bmV3IHQoe3g6aStuLHk6cytyLHdpZHRoOm4saGVpZ2h0OnJ9LHRoaXMubWF4X29iamVjdHMsdGhpcy5tYXhfbGV2ZWxzLGUpfSx0LnByb3RvdHlwZS5nZXRJbmRleD1mdW5jdGlvbihlKXt2YXIgbj1bXSxyPXRoaXMuYm91bmRzLngrdGhpcy5ib3VuZHMud2lkdGgvMixpPXRoaXMuYm91bmRzLnkrdGhpcy5ib3VuZHMuaGVpZ2h0LzIscz1lLnk8aSxhPWUueDxyLG89ZS54K2Uud2lkdGg+cixsPWUueStlLmhlaWdodD5pO3JldHVybiBzJiZvJiZuLnB1c2goMCksYSYmcyYmbi5wdXNoKDEpLGEmJmwmJm4ucHVzaCgyKSxvJiZsJiZuLnB1c2goMyksbn0sdC5wcm90b3R5cGUuaW5zZXJ0PWZ1bmN0aW9uKGUpe3ZhciBuPTAscjtpZih0aGlzLm5vZGVzLmxlbmd0aCl7Zm9yKHI9dGhpcy5nZXRJbmRleChlKSxuPTA7bjxyLmxlbmd0aDtuKyspdGhpcy5ub2Rlc1tyW25dXS5pbnNlcnQoZSk7cmV0dXJufWlmKHRoaXMub2JqZWN0cy5wdXNoKGUpLHRoaXMub2JqZWN0cy5sZW5ndGg+dGhpcy5tYXhfb2JqZWN0cyYmdGhpcy5sZXZlbDx0aGlzLm1heF9sZXZlbHMpe2Zvcih0aGlzLm5vZGVzLmxlbmd0aHx8dGhpcy5zcGxpdCgpLG49MDtuPHRoaXMub2JqZWN0cy5sZW5ndGg7bisrKXtyPXRoaXMuZ2V0SW5kZXgodGhpcy5vYmplY3RzW25dKTtmb3IodmFyIGk9MDtpPHIubGVuZ3RoO2krKyl0aGlzLm5vZGVzW3JbaV1dLmluc2VydCh0aGlzLm9iamVjdHNbbl0pfXRoaXMub2JqZWN0cz1bXX19LHQucHJvdG90eXBlLnJldHJpZXZlPWZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMuZ2V0SW5kZXgoZSkscj10aGlzLm9iamVjdHM7aWYodGhpcy5ub2Rlcy5sZW5ndGgpZm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspcj1yLmNvbmNhdCh0aGlzLm5vZGVzW25baV1dLnJldHJpZXZlKGUpKTtyZXR1cm4gcj1yLmZpbHRlcihmdW5jdGlvbihzLGEpe3JldHVybiByLmluZGV4T2Yocyk+PWF9KSxyfSx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMub2JqZWN0cz1bXTtmb3IodmFyIGU9MDtlPHRoaXMubm9kZXMubGVuZ3RoO2UrKyl0aGlzLm5vZGVzLmxlbmd0aCYmdGhpcy5ub2Rlc1tlXS5jbGVhcigpO3RoaXMubm9kZXM9W119LHR5cGVvZiBfZSE9XCJ1bmRlZmluZWRcIiYmdHlwZW9mIF9lLmV4cG9ydHMhPVwidW5kZWZpbmVkXCI/X2UuZXhwb3J0cz10OndpbmRvdy5RdWFkdHJlZT10fSkoKX0pO3ZhciBLaT1VKChxbixYbik9PnsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0uNSooTWF0aC5zcXJ0KDMpLTEpLGU9KDMtTWF0aC5zcXJ0KDMpKS82LG49MS8zLHI9MS82LGk9KE1hdGguc3FydCg1KS0xKS80LHM9KDUtTWF0aC5zcXJ0KDUpKS8yMDtmdW5jdGlvbiBhKHUpe3ZhciBjO3R5cGVvZiB1PT1cImZ1bmN0aW9uXCI/Yz11OnU/Yz1sKHUpOmM9TWF0aC5yYW5kb20sdGhpcy5wPW8oYyksdGhpcy5wZXJtPW5ldyBVaW50OEFycmF5KDUxMiksdGhpcy5wZXJtTW9kMTI9bmV3IFVpbnQ4QXJyYXkoNTEyKTtmb3IodmFyIGg9MDtoPDUxMjtoKyspdGhpcy5wZXJtW2hdPXRoaXMucFtoJjI1NV0sdGhpcy5wZXJtTW9kMTJbaF09dGhpcy5wZXJtW2hdJTEyfWEucHJvdG90eXBlPXtncmFkMzpuZXcgRmxvYXQzMkFycmF5KFsxLDEsMCwtMSwxLDAsMSwtMSwwLC0xLC0xLDAsMSwwLDEsLTEsMCwxLDEsMCwtMSwtMSwwLC0xLDAsMSwxLDAsLTEsMSwwLDEsLTEsMCwtMSwtMV0pLGdyYWQ0Om5ldyBGbG9hdDMyQXJyYXkoWzAsMSwxLDEsMCwxLDEsLTEsMCwxLC0xLDEsMCwxLC0xLC0xLDAsLTEsMSwxLDAsLTEsMSwtMSwwLC0xLC0xLDEsMCwtMSwtMSwtMSwxLDAsMSwxLDEsMCwxLC0xLDEsMCwtMSwxLDEsMCwtMSwtMSwtMSwwLDEsMSwtMSwwLDEsLTEsLTEsMCwtMSwxLC0xLDAsLTEsLTEsMSwxLDAsMSwxLDEsMCwtMSwxLC0xLDAsMSwxLC0xLDAsLTEsLTEsMSwwLDEsLTEsMSwwLC0xLC0xLC0xLDAsMSwtMSwtMSwwLC0xLDEsMSwxLDAsMSwxLC0xLDAsMSwtMSwxLDAsMSwtMSwtMSwwLC0xLDEsMSwwLC0xLDEsLTEsMCwtMSwtMSwxLDAsLTEsLTEsLTEsMF0pLG5vaXNlMkQ6ZnVuY3Rpb24odSxjKXt2YXIgaD10aGlzLnBlcm1Nb2QxMixwPXRoaXMucGVybSxkPXRoaXMuZ3JhZDMsbT0wLHg9MCxfPTAsYj0odStjKSp0LHk9TWF0aC5mbG9vcih1K2IpLHc9TWF0aC5mbG9vcihjK2IpLFQ9KHkrdykqZSxBPXktVCxDPXctVCxTPXUtQSxOPWMtQyx2LE07Uz5OPyh2PTEsTT0wKToodj0wLE09MSk7dmFyIGo9Uy12K2Usaz1OLU0rZSxFPVMtMSsyKmUsUD1OLTErMiplLEQ9eSYyNTUsST13JjI1NSxPPS41LVMqUy1OKk47aWYoTz49MCl7dmFyIHo9aFtEK3BbSV1dKjM7Tyo9TyxtPU8qTyooZFt6XSpTK2RbeisxXSpOKX12YXIgWD0uNS1qKmotayprO2lmKFg+PTApe3ZhciBWPWhbRCt2K3BbSStNXV0qMztYKj1YLHg9WCpYKihkW1ZdKmorZFtWKzFdKmspfXZhciBMPS41LUUqRS1QKlA7aWYoTD49MCl7dmFyIFo9aFtEKzErcFtJKzFdXSozO0wqPUwsXz1MKkwqKGRbWl0qRStkW1orMV0qUCl9cmV0dXJuIDcwKihtK3grXyl9LG5vaXNlM0Q6ZnVuY3Rpb24odSxjLGgpe3ZhciBwPXRoaXMucGVybU1vZDEyLGQ9dGhpcy5wZXJtLG09dGhpcy5ncmFkMyx4LF8sYix5LHc9KHUrYytoKSpuLFQ9TWF0aC5mbG9vcih1K3cpLEE9TWF0aC5mbG9vcihjK3cpLEM9TWF0aC5mbG9vcihoK3cpLFM9KFQrQStDKSpyLE49VC1TLHY9QS1TLE09Qy1TLGo9dS1OLGs9Yy12LEU9aC1NLFAsRCxJLE8seixYO2o+PWs/az49RT8oUD0xLEQ9MCxJPTAsTz0xLHo9MSxYPTApOmo+PUU/KFA9MSxEPTAsST0wLE89MSx6PTAsWD0xKTooUD0wLEQ9MCxJPTEsTz0xLHo9MCxYPTEpOms8RT8oUD0wLEQ9MCxJPTEsTz0wLHo9MSxYPTEpOmo8RT8oUD0wLEQ9MSxJPTAsTz0wLHo9MSxYPTEpOihQPTAsRD0xLEk9MCxPPTEsej0xLFg9MCk7dmFyIFY9ai1QK3IsTD1rLUQrcixaPUUtSStyLGR0PWotTysyKnIsbXQ9ay16KzIqcixndD1FLVgrMipyLHh0PWotMSszKnIsdnQ9ay0xKzMqcixfdD1FLTErMypyLGF0PVQmMjU1LGx0PUEmMjU1LHV0PUMmMjU1LHR0PS42LWoqai1rKmstRSpFO2lmKHR0PDApeD0wO2Vsc2V7dmFyIHl0PXBbYXQrZFtsdCtkW3V0XV1dKjM7dHQqPXR0LHg9dHQqdHQqKG1beXRdKmorbVt5dCsxXSprK21beXQrMl0qRSl9dmFyIGV0PS42LVYqVi1MKkwtWipaO2lmKGV0PDApXz0wO2Vsc2V7dmFyIHd0PXBbYXQrUCtkW2x0K0QrZFt1dCtJXV1dKjM7ZXQqPWV0LF89ZXQqZXQqKG1bd3RdKlYrbVt3dCsxXSpMK21bd3QrMl0qWil9dmFyIG50PS42LWR0KmR0LW10Km10LWd0Kmd0O2lmKG50PDApYj0wO2Vsc2V7dmFyIGJ0PXBbYXQrTytkW2x0K3orZFt1dCtYXV1dKjM7bnQqPW50LGI9bnQqbnQqKG1bYnRdKmR0K21bYnQrMV0qbXQrbVtidCsyXSpndCl9dmFyIHJ0PS42LXh0Knh0LXZ0KnZ0LV90Kl90O2lmKHJ0PDApeT0wO2Vsc2V7dmFyIGp0PXBbYXQrMStkW2x0KzErZFt1dCsxXV1dKjM7cnQqPXJ0LHk9cnQqcnQqKG1banRdKnh0K21banQrMV0qdnQrbVtqdCsyXSpfdCl9cmV0dXJuIDMyKih4K18rYit5KX0sbm9pc2U0RDpmdW5jdGlvbih1LGMsaCxwKXt2YXIgZD10aGlzLnBlcm0sbT10aGlzLmdyYWQ0LHgsXyxiLHksdyxUPSh1K2MraCtwKSppLEE9TWF0aC5mbG9vcih1K1QpLEM9TWF0aC5mbG9vcihjK1QpLFM9TWF0aC5mbG9vcihoK1QpLE49TWF0aC5mbG9vcihwK1QpLHY9KEErQytTK04pKnMsTT1BLXYsaj1DLXYsaz1TLXYsRT1OLXYsUD11LU0sRD1jLWosST1oLWssTz1wLUUsej0wLFg9MCxWPTAsTD0wO1A+RD96Kys6WCsrLFA+ST96Kys6VisrLFA+Tz96Kys6TCsrLEQ+ST9YKys6VisrLEQ+Tz9YKys6TCsrLEk+Tz9WKys6TCsrO3ZhciBaLGR0LG10LGd0LHh0LHZ0LF90LGF0LGx0LHV0LHR0LHl0O1o9ej49Mz8xOjAsZHQ9WD49Mz8xOjAsbXQ9Vj49Mz8xOjAsZ3Q9TD49Mz8xOjAseHQ9ej49Mj8xOjAsdnQ9WD49Mj8xOjAsX3Q9Vj49Mj8xOjAsYXQ9TD49Mj8xOjAsbHQ9ej49MT8xOjAsdXQ9WD49MT8xOjAsdHQ9Vj49MT8xOjAseXQ9TD49MT8xOjA7dmFyIGV0PVAtWitzLHd0PUQtZHQrcyxudD1JLW10K3MsYnQ9Ty1ndCtzLHJ0PVAteHQrMipzLGp0PUQtdnQrMipzLFFlPUktX3QrMipzLFVlPU8tYXQrMipzLEtlPVAtbHQrMypzLFplPUQtdXQrMypzLFdlPUktdHQrMypzLEplPU8teXQrMypzLHRuPVAtMSs0KnMsZW49RC0xKzQqcyxubj1JLTErNCpzLHJuPU8tMSs0KnMsRnQ9QSYyNTUsTHQ9QyYyNTUsVnQ9UyYyNTUsWXQ9TiYyNTUsSHQ9LjYtUCpQLUQqRC1JKkktTypPO2lmKEh0PDApeD0wO2Vsc2V7dmFyIHBlPWRbRnQrZFtMdCtkW1Z0K2RbWXRdXV1dJTMyKjQ7SHQqPUh0LHg9SHQqSHQqKG1bcGVdKlArbVtwZSsxXSpEK21bcGUrMl0qSSttW3BlKzNdKk8pfXZhciBHdD0uNi1ldCpldC13dCp3dC1udCpudC1idCpidDtpZihHdDwwKV89MDtlbHNle3ZhciBkZT1kW0Z0K1orZFtMdCtkdCtkW1Z0K210K2RbWXQrZ3RdXV1dJTMyKjQ7R3QqPUd0LF89R3QqR3QqKG1bZGVdKmV0K21bZGUrMV0qd3QrbVtkZSsyXSpudCttW2RlKzNdKmJ0KX12YXIgJHQ9LjYtcnQqcnQtanQqanQtUWUqUWUtVWUqVWU7aWYoJHQ8MCliPTA7ZWxzZXt2YXIgbWU9ZFtGdCt4dCtkW0x0K3Z0K2RbVnQrX3QrZFtZdCthdF1dXV0lMzIqNDskdCo9JHQsYj0kdCokdCoobVttZV0qcnQrbVttZSsxXSpqdCttW21lKzJdKlFlK21bbWUrM10qVWUpfXZhciBRdD0uNi1LZSpLZS1aZSpaZS1XZSpXZS1KZSpKZTtpZihRdDwwKXk9MDtlbHNle3ZhciBnZT1kW0Z0K2x0K2RbTHQrdXQrZFtWdCt0dCtkW1l0K3l0XV1dXSUzMio0O1F0Kj1RdCx5PVF0KlF0KihtW2dlXSpLZSttW2dlKzFdKlplK21bZ2UrMl0qV2UrbVtnZSszXSpKZSl9dmFyIFV0PS42LXRuKnRuLWVuKmVuLW5uKm5uLXJuKnJuO2lmKFV0PDApdz0wO2Vsc2V7dmFyIHhlPWRbRnQrMStkW0x0KzErZFtWdCsxK2RbWXQrMV1dXV0lMzIqNDtVdCo9VXQsdz1VdCpVdCoobVt4ZV0qdG4rbVt4ZSsxXSplbittW3hlKzJdKm5uK21beGUrM10qcm4pfXJldHVybiAyNyooeCtfK2IreSt3KX19O2Z1bmN0aW9uIG8odSl7dmFyIGMsaD1uZXcgVWludDhBcnJheSgyNTYpO2ZvcihjPTA7YzwyNTY7YysrKWhbY109Yztmb3IoYz0wO2M8MjU1O2MrKyl7dmFyIHA9Yyt+fih1KCkqKDI1Ni1jKSksZD1oW2NdO2hbY109aFtwXSxoW3BdPWR9cmV0dXJuIGh9YS5fYnVpbGRQZXJtdXRhdGlvblRhYmxlPW87ZnVuY3Rpb24gbCgpe3ZhciB1PTAsYz0wLGg9MCxwPTEsZD1mKCk7dT1kKFwiIFwiKSxjPWQoXCIgXCIpLGg9ZChcIiBcIik7Zm9yKHZhciBtPTA7bTxhcmd1bWVudHMubGVuZ3RoO20rKyl1LT1kKGFyZ3VtZW50c1ttXSksdTwwJiYodSs9MSksYy09ZChhcmd1bWVudHNbbV0pLGM8MCYmKGMrPTEpLGgtPWQoYXJndW1lbnRzW21dKSxoPDAmJihoKz0xKTtyZXR1cm4gZD1udWxsLGZ1bmN0aW9uKCl7dmFyIHg9MjA5MTYzOSp1K3AqMjMyODMwNjQzNjUzODY5NjNlLTI2O3JldHVybiB1PWMsYz1oLGg9eC0ocD14fDApfX1mdW5jdGlvbiBmKCl7dmFyIHU9NDAyMjg3MTE5NztyZXR1cm4gZnVuY3Rpb24oYyl7Yz1jLnRvU3RyaW5nKCk7Zm9yKHZhciBoPTA7aDxjLmxlbmd0aDtoKyspe3UrPWMuY2hhckNvZGVBdChoKTt2YXIgcD0uMDI1MTk2MDMyODI0MTY5MzgqdTt1PXA+Pj4wLHAtPXUscCo9dSx1PXA+Pj4wLHAtPXUsdSs9cCo0Mjk0OTY3Mjk2fXJldHVybih1Pj4+MCkqMjMyODMwNjQzNjUzODY5NjNlLTI2fX10eXBlb2YgZGVmaW5lIT1cInVuZGVmaW5lZFwiJiZkZWZpbmUuYW1kJiZkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gYX0pLHR5cGVvZiBxbiE9XCJ1bmRlZmluZWRcIj9xbi5TaW1wbGV4Tm9pc2U9YTp0eXBlb2Ygd2luZG93IT1cInVuZGVmaW5lZFwiJiYod2luZG93LlNpbXBsZXhOb2lzZT1hKSx0eXBlb2YgWG4hPVwidW5kZWZpbmVkXCImJihYbi5leHBvcnRzPWEpfSkoKX0pO3ZhciBwbj1zbih0cigpKSxkbj0oMCxwbi5kZWZhdWx0KSgpO2Z1bmN0aW9uIGhvKHQpe2RuPSgwLHBuLmRlZmF1bHQpKHQpfWZ1bmN0aW9uIEF0KCl7aWYoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKXtsZXQgZT1hcmd1bWVudHNbMF07cmV0dXJuIGVbQXQoMCxlLmxlbmd0aC0xLCEwKV19ZWxzZXtsZXQgZT1hcmd1bWVudHNbMF0sbj1hcmd1bWVudHNbMV0scj1hcmd1bWVudHNbMl18fCExLGk9ZG4oKSoobi1lKStlO3JldHVybiByP01hdGgucm91bmQoaSk6aX19ZnVuY3Rpb24gcG8odCxlLG4scj0uNSl7bGV0IGk9QXQodCxlKSxzPUF0KDAsMSkqcjtyZXR1cm4gaSooMS1zKStuKnN9ZnVuY3Rpb24gbW8odCxlLG4pe3JldHVybiBNYXRoLnJvdW5kKEF0KHQsZSkvbikqbn1mdW5jdGlvbiBnbyh0LGUpe2lmKHQ9Wy4uLnRdLEFycmF5LmlzQXJyYXkodFswXSl8fCh0PXQubWFwKCh7eDpuLHk6cn0pPT5bbixyXSkpLGUpe2xldCBuPXRbdC5sZW5ndGgtMV0scj10W3QubGVuZ3RoLTJdLGk9dFswXSxzPXRbMV07dC51bnNoaWZ0KG4pLHQudW5zaGlmdChyKSx0LnB1c2goaSksdC5wdXNoKHMpfXJldHVybiB0LmZsYXQoKX1mdW5jdGlvbiB4byh0PVtdLGU9MSxuPSExLHIpe3Q9Z28odCxuKTtsZXQgaT10Lmxlbmd0aCxzPWktNCxhPW4/dFsyXTp0WzBdLG89bj90WzNdOnRbMV0sbD1cIk1cIitbYSxvXTtyJiZyKFwiTU9WRVwiLFthLG9dKTtsZXQgZj1uPzI6MCx1PW4/aS00OmktMixjPTI7Zm9yKGxldCBoPWY7aDx1O2grPWMpe2xldCBwPWg/dFtoLTJdOnRbMF0sZD1oP3RbaC0xXTp0WzFdLG09dFtoKzBdLHg9dFtoKzFdLF89dFtoKzJdLGI9dFtoKzNdLHk9aCE9PXM/dFtoKzRdOl8sdz1oIT09cz90W2grNV06YixUPW0rKF8tcCkvNiplLEE9eCsoYi1kKS82KmUsQz1fLSh5LW0pLzYqZSxTPWItKHcteCkvNiplO2wrPVwiQ1wiK1tULEEsQyxTLF8sYl0sciYmcihcIkNVUlZFXCIsW1QsQSxDLFMsXyxiXSl9cmV0dXJuIGx9ZnVuY3Rpb24gdm8odCxlLG4scixpKXtyZXR1cm4odC1lKS8obi1lKSooaS1yKStyfWZ1bmN0aW9uIF9vKHQsZT0xMCl7bGV0IG49dC5nZXRUb3RhbExlbmd0aCgpLHI9bi9lLGk9W107Zm9yKGxldCBzPTA7czxuO3MrPXIpaS5wdXNoKHQuZ2V0UG9pbnRBdExlbmd0aChzKSk7cmV0dXJuIGl9ZnVuY3Rpb24geW8odCl7bGV0IGU9dC5jcmVhdGVTVkdQb2ludCgpO3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gZS54PW4uY2xpZW50WCxlLnk9bi5jbGllbnRZLGUubWF0cml4VHJhbnNmb3JtKHQuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKX19dmFyIG5yPXNuKGVyKCkpLHdvPXt3aWR0aDoxMDI0LGhlaWdodDoxMDI0LHBvaW50czpbXSxnYXA6MCxtYXhRdE9iamVjdHM6MTAsbWF4UXRMZXZlbHM6NH07ZnVuY3Rpb24gYm8odCxlLG4pe3JldHVybntjb2w6e3N0YXJ0OnQueC9lLGVuZDoodC54K3Qud2lkdGgpL2V9LHJvdzp7c3RhcnQ6dC55L24sZW5kOih0LnkrdC5oZWlnaHQpL259fX1mdW5jdGlvbiBqbyh0KXtsZXQgZT1bXTtyZXR1cm4gZnVuY3Rpb24gbihyKXtyLm5vZGVzLmxlbmd0aD09PTA/ZS5wdXNoKHIpOnIubm9kZXMuZm9yRWFjaChpPT5uKGkpKX0odCksZX1mdW5jdGlvbiBNbyh0KXt0PU9iamVjdC5hc3NpZ24oe30sd28sdCk7bGV0IGU9bmV3IG5yLmRlZmF1bHQoe3g6MCx5OjAsd2lkdGg6dC53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9LHQubWF4UXRPYmplY3RzLHQubWF4UXRMZXZlbHMpO3QucG9pbnRzLmZvckVhY2gocz0+e2UuaW5zZXJ0KHMpfSk7bGV0IG49TWF0aC5wb3coMix0Lm1heFF0TGV2ZWxzKSxyPXQud2lkdGgvbixpPXQuaGVpZ2h0L247cmV0dXJue3dpZHRoOnQud2lkdGgsaGVpZ2h0OnQuaGVpZ2h0LGNvbHM6bixyb3dzOm4sYXJlYXM6am8oZSkubWFwKCh7Ym91bmRzOnN9KT0+KHt4OnMueCt0LmdhcCx5OnMueSt0LmdhcCx3aWR0aDpzLndpZHRoLXQuZ2FwKjIsaGVpZ2h0OnMuaGVpZ2h0LXQuZ2FwKjIsLi4uYm8ocyxyLGkpfSkpfX1mdW5jdGlvbiBycih0KXtyZXR1cm4gdCp0fWZ1bmN0aW9uIG1uKHQsZSl7cmV0dXJuIHJyKHRbMF0tZVswXSkrcnIodFsxXS1lWzFdKX1mdW5jdGlvbiBBbyh0LGUsbil7dmFyIHI9bW4oZSxuKTtpZihyPT09MClyZXR1cm4gbW4odCxlKTt2YXIgaT0oKHRbMF0tZVswXSkqKG5bMF0tZVswXSkrKHRbMV0tZVsxXSkqKG5bMV0tZVsxXSkpL3I7cmV0dXJuIGk9TWF0aC5tYXgoMCxNYXRoLm1pbigxLGkpKSxtbih0LFtlWzBdK2kqKG5bMF0tZVswXSksZVsxXStpKihuWzFdLWVbMV0pXSl9ZnVuY3Rpb24geWUodCxlLG4pe3JldHVybiBNYXRoLnNxcnQoQW8odCxlLG4pKX12YXIgcT0xMTEwMjIzMDI0NjI1MTU2NWUtMzIsUj0xMzQyMTc3MjksS3Q9KDMrOCpxKSpxO2Z1bmN0aW9uIGt0KHQsZSxuLHIsaSl7bGV0IHMsYSxvLGwsZj1lWzBdLHU9clswXSxjPTAsaD0wO3U+Zj09dT4tZj8ocz1mLGY9ZVsrK2NdKToocz11LHU9clsrK2hdKTtsZXQgcD0wO2lmKGM8dCYmaDxuKWZvcih1PmY9PXU+LWY/KGE9ZitzLG89cy0oYS1mKSxmPWVbKytjXSk6KGE9dStzLG89cy0oYS11KSx1PXJbKytoXSkscz1hLG8hPT0wJiYoaVtwKytdPW8pO2M8dCYmaDxuOyl1PmY9PXU+LWY/KGE9cytmLGw9YS1zLG89cy0oYS1sKSsoZi1sKSxmPWVbKytjXSk6KGE9cyt1LGw9YS1zLG89cy0oYS1sKSsodS1sKSx1PXJbKytoXSkscz1hLG8hPT0wJiYoaVtwKytdPW8pO2Zvcig7Yzx0OylhPXMrZixsPWEtcyxvPXMtKGEtbCkrKGYtbCksZj1lWysrY10scz1hLG8hPT0wJiYoaVtwKytdPW8pO2Zvcig7aDxuOylhPXMrdSxsPWEtcyxvPXMtKGEtbCkrKHUtbCksdT1yWysraF0scz1hLG8hPT0wJiYoaVtwKytdPW8pO3JldHVybihzIT09MHx8cD09PTApJiYoaVtwKytdPXMpLHB9ZnVuY3Rpb24gWnQodCxlKXtsZXQgbj1lWzBdO2ZvcihsZXQgcj0xO3I8dDtyKyspbis9ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiBnKHQpe3JldHVybiBuZXcgRmxvYXQ2NEFycmF5KHQpfXZhciBrbz0oMysxNipxKSpxLFRvPSgyKzEyKnEpKnEsSW89KDkrNjQqcSkqcSpxLE50PWcoNCksaXI9Zyg4KSxvcj1nKDEyKSxzcj1nKDE2KSxIPWcoNCk7ZnVuY3Rpb24gU28odCxlLG4scixpLHMsYSl7bGV0IG8sbCxmLHUsYyxoLHAsZCxtLHgsXyxiLHksdyxULEEsQyxTLE49dC1pLHY9bi1pLE09ZS1zLGo9ci1zO3c9TipqLGg9UipOLHA9aC0oaC1OKSxkPU4tcCxoPVIqaixtPWgtKGgtaikseD1qLW0sVD1kKngtKHctcCptLWQqbS1wKngpLEE9TSp2LGg9UipNLHA9aC0oaC1NKSxkPU0tcCxoPVIqdixtPWgtKGgtdikseD12LW0sQz1kKngtKEEtcCptLWQqbS1wKngpLF89VC1DLGM9VC1fLE50WzBdPVQtKF8rYykrKGMtQyksYj13K18sYz1iLXcseT13LShiLWMpKyhfLWMpLF89eS1BLGM9eS1fLE50WzFdPXktKF8rYykrKGMtQSksUz1iK18sYz1TLWIsTnRbMl09Yi0oUy1jKSsoXy1jKSxOdFszXT1TO2xldCBrPVp0KDQsTnQpLEU9VG8qYTtpZihrPj1FfHwtaz49RXx8KGM9dC1OLG89dC0oTitjKSsoYy1pKSxjPW4tdixmPW4tKHYrYykrKGMtaSksYz1lLU0sbD1lLShNK2MpKyhjLXMpLGM9ci1qLHU9ci0oaitjKSsoYy1zKSxvPT09MCYmbD09PTAmJmY9PT0wJiZ1PT09MCl8fChFPUlvKmErS3QqTWF0aC5hYnMoayksays9Tip1K2oqby0oTSpmK3YqbCksaz49RXx8LWs+PUUpKXJldHVybiBrO3c9bypqLGg9UipvLHA9aC0oaC1vKSxkPW8tcCxoPVIqaixtPWgtKGgtaikseD1qLW0sVD1kKngtKHctcCptLWQqbS1wKngpLEE9bCp2LGg9UipsLHA9aC0oaC1sKSxkPWwtcCxoPVIqdixtPWgtKGgtdikseD12LW0sQz1kKngtKEEtcCptLWQqbS1wKngpLF89VC1DLGM9VC1fLEhbMF09VC0oXytjKSsoYy1DKSxiPXcrXyxjPWItdyx5PXctKGItYykrKF8tYyksXz15LUEsYz15LV8sSFsxXT15LShfK2MpKyhjLUEpLFM9YitfLGM9Uy1iLEhbMl09Yi0oUy1jKSsoXy1jKSxIWzNdPVM7bGV0IFA9a3QoNCxOdCw0LEgsaXIpO3c9Tip1LGg9UipOLHA9aC0oaC1OKSxkPU4tcCxoPVIqdSxtPWgtKGgtdSkseD11LW0sVD1kKngtKHctcCptLWQqbS1wKngpLEE9TSpmLGg9UipNLHA9aC0oaC1NKSxkPU0tcCxoPVIqZixtPWgtKGgtZikseD1mLW0sQz1kKngtKEEtcCptLWQqbS1wKngpLF89VC1DLGM9VC1fLEhbMF09VC0oXytjKSsoYy1DKSxiPXcrXyxjPWItdyx5PXctKGItYykrKF8tYyksXz15LUEsYz15LV8sSFsxXT15LShfK2MpKyhjLUEpLFM9YitfLGM9Uy1iLEhbMl09Yi0oUy1jKSsoXy1jKSxIWzNdPVM7bGV0IEQ9a3QoUCxpciw0LEgsb3IpO3c9byp1LGg9UipvLHA9aC0oaC1vKSxkPW8tcCxoPVIqdSxtPWgtKGgtdSkseD11LW0sVD1kKngtKHctcCptLWQqbS1wKngpLEE9bCpmLGg9UipsLHA9aC0oaC1sKSxkPWwtcCxoPVIqZixtPWgtKGgtZikseD1mLW0sQz1kKngtKEEtcCptLWQqbS1wKngpLF89VC1DLGM9VC1fLEhbMF09VC0oXytjKSsoYy1DKSxiPXcrXyxjPWItdyx5PXctKGItYykrKF8tYyksXz15LUEsYz15LV8sSFsxXT15LShfK2MpKyhjLUEpLFM9YitfLGM9Uy1iLEhbMl09Yi0oUy1jKSsoXy1jKSxIWzNdPVM7bGV0IEk9a3QoRCxvciw0LEgsc3IpO3JldHVybiBzcltJLTFdfWZ1bmN0aW9uIE90KHQsZSxuLHIsaSxzKXtsZXQgYT0oZS1zKSoobi1pKSxvPSh0LWkpKihyLXMpLGw9YS1vO2lmKGE9PT0wfHxvPT09MHx8YT4wIT1vPjApcmV0dXJuIGw7bGV0IGY9TWF0aC5hYnMoYStvKTtyZXR1cm4gTWF0aC5hYnMobCk+PWtvKmY/bDotU28odCxlLG4scixpLHMsZil9dmFyIHdsPSg3KzU2KnEpKnEsYmw9KDMrMjgqcSkqcSxqbD0oMjYrMjg4KnEpKnEqcSxNbD1nKDQpLEFsPWcoNCksa2w9Zyg0KSxUbD1nKDQpLElsPWcoNCksU2w9Zyg0KSxDbD1nKDQpLEVsPWcoNCksTmw9Zyg0KSxPbD1nKDgpLFBsPWcoOCksRGw9Zyg4KSxxbD1nKDQpLFhsPWcoOCksemw9Zyg4KSxSbD1nKDgpLEJsPWcoMTIpLEZsPWcoMTkyKSxMbD1nKDE5Mik7dmFyIEhsPSgxMCs5NipxKSpxLEdsPSg0KzQ4KnEpKnEsJGw9KDQ0KzU3NipxKSpxKnEsUWw9Zyg0KSxVbD1nKDQpLEtsPWcoNCksWmw9Zyg0KSxXbD1nKDQpLEpsPWcoNCksdHU9Zyg0KSxldT1nKDQpLG51PWcoOCkscnU9Zyg4KSxpdT1nKDgpLG91PWcoOCksc3U9Zyg4KSxhdT1nKDgpLGx1PWcoOCksdXU9Zyg4KSxjdT1nKDgpLGZ1PWcoNCksaHU9Zyg0KSxwdT1nKDQpLGR1PWcoOCksbXU9ZygxNiksZ3U9ZygxNikseHU9ZygxNiksdnU9ZygzMiksX3U9ZygzMikseXU9Zyg0OCksd3U9Zyg2NCksYnU9ZygxMTUyKSxqdT1nKDExNTIpO3ZhciBUdT0oMTYrMjI0KnEpKnEsSXU9KDUrNzIqcSkqcSxTdT0oNzErMTQwOCpxKSpxKnEsQ3U9Zyg0KSxFdT1nKDQpLE51PWcoNCksT3U9Zyg0KSxQdT1nKDQpLER1PWcoNCkscXU9Zyg0KSxYdT1nKDQpLHp1PWcoNCksUnU9Zyg0KSxCdT1nKDI0KSxGdT1nKDI0KSxMdT1nKDI0KSxWdT1nKDI0KSxZdT1nKDI0KSxIdT1nKDI0KSxHdT1nKDI0KSwkdT1nKDI0KSxRdT1nKDI0KSxVdT1nKDI0KSxLdT1nKDExNTIpLFp1PWcoMTE1MiksV3U9ZygxMTUyKSxKdT1nKDExNTIpLHRjPWcoMTE1MiksZWM9ZygyMzA0KSxuYz1nKDIzMDQpLHJjPWcoMzQ1NiksaWM9Zyg1NzYwKSxvYz1nKDgpLHNjPWcoOCksYWM9Zyg4KSxsYz1nKDE2KSx1Yz1nKDI0KSxjYz1nKDQ4KSxmYz1nKDQ4KSxoYz1nKDk2KSxwYz1nKDE5MiksZGM9ZygzODQpLG1jPWcoMzg0KSxnYz1nKDM4NCkseGM9Zyg3NjgpO3ZhciB2Yz1nKDk2KSxfYz1nKDk2KSx5Yz1nKDk2KSx3Yz1nKDExNTIpO3ZhciBscj1NYXRoLnBvdygyLC01Miksd2U9bmV3IFVpbnQzMkFycmF5KDUxMiksVHQ9Y2xhc3N7c3RhdGljIGZyb20oZSxuPURvLHI9cW8pe2xldCBpPWUubGVuZ3RoLHM9bmV3IEZsb2F0NjRBcnJheShpKjIpO2ZvcihsZXQgYT0wO2E8aTthKyspe2xldCBvPWVbYV07c1syKmFdPW4obyksc1syKmErMV09cihvKX1yZXR1cm4gbmV3IFR0KHMpfWNvbnN0cnVjdG9yKGUpe2xldCBuPWUubGVuZ3RoPj4xO2lmKG4+MCYmdHlwZW9mIGVbMF0hPVwibnVtYmVyXCIpdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgY29vcmRzIHRvIGNvbnRhaW4gbnVtYmVycy5cIik7dGhpcy5jb29yZHM9ZTtsZXQgcj1NYXRoLm1heCgyKm4tNSwwKTt0aGlzLl90cmlhbmdsZXM9bmV3IFVpbnQzMkFycmF5KHIqMyksdGhpcy5faGFsZmVkZ2VzPW5ldyBJbnQzMkFycmF5KHIqMyksdGhpcy5faGFzaFNpemU9TWF0aC5jZWlsKE1hdGguc3FydChuKSksdGhpcy5faHVsbFByZXY9bmV3IFVpbnQzMkFycmF5KG4pLHRoaXMuX2h1bGxOZXh0PW5ldyBVaW50MzJBcnJheShuKSx0aGlzLl9odWxsVHJpPW5ldyBVaW50MzJBcnJheShuKSx0aGlzLl9odWxsSGFzaD1uZXcgSW50MzJBcnJheSh0aGlzLl9oYXNoU2l6ZSkuZmlsbCgtMSksdGhpcy5faWRzPW5ldyBVaW50MzJBcnJheShuKSx0aGlzLl9kaXN0cz1uZXcgRmxvYXQ2NEFycmF5KG4pLHRoaXMudXBkYXRlKCl9dXBkYXRlKCl7bGV0e2Nvb3JkczplLF9odWxsUHJldjpuLF9odWxsTmV4dDpyLF9odWxsVHJpOmksX2h1bGxIYXNoOnN9PXRoaXMsYT1lLmxlbmd0aD4+MSxvPUluZmluaXR5LGw9SW5maW5pdHksZj0tSW5maW5pdHksdT0tSW5maW5pdHk7Zm9yKGxldCB2PTA7djxhO3YrKyl7bGV0IE09ZVsyKnZdLGo9ZVsyKnYrMV07TTxvJiYobz1NKSxqPGwmJihsPWopLE0+ZiYmKGY9TSksaj51JiYodT1qKSx0aGlzLl9pZHNbdl09dn1sZXQgYz0obytmKS8yLGg9KGwrdSkvMixwPUluZmluaXR5LGQsbSx4O2ZvcihsZXQgdj0wO3Y8YTt2Kyspe2xldCBNPWduKGMsaCxlWzIqdl0sZVsyKnYrMV0pO008cCYmKGQ9dixwPU0pfWxldCBfPWVbMipkXSxiPWVbMipkKzFdO3A9SW5maW5pdHk7Zm9yKGxldCB2PTA7djxhO3YrKyl7aWYodj09PWQpY29udGludWU7bGV0IE09Z24oXyxiLGVbMip2XSxlWzIqdisxXSk7TTxwJiZNPjAmJihtPXYscD1NKX1sZXQgeT1lWzIqbV0sdz1lWzIqbSsxXSxUPUluZmluaXR5O2ZvcihsZXQgdj0wO3Y8YTt2Kyspe2lmKHY9PT1kfHx2PT09bSljb250aW51ZTtsZXQgTT1PbyhfLGIseSx3LGVbMip2XSxlWzIqdisxXSk7TTxUJiYoeD12LFQ9TSl9bGV0IEE9ZVsyKnhdLEM9ZVsyKngrMV07aWYoVD09PUluZmluaXR5KXtmb3IobGV0IGo9MDtqPGE7aisrKXRoaXMuX2Rpc3RzW2pdPWVbMipqXS1lWzBdfHxlWzIqaisxXS1lWzFdO1B0KHRoaXMuX2lkcyx0aGlzLl9kaXN0cywwLGEtMSk7bGV0IHY9bmV3IFVpbnQzMkFycmF5KGEpLE09MDtmb3IobGV0IGo9MCxrPS1JbmZpbml0eTtqPGE7aisrKXtsZXQgRT10aGlzLl9pZHNbal07dGhpcy5fZGlzdHNbRV0+ayYmKHZbTSsrXT1FLGs9dGhpcy5fZGlzdHNbRV0pfXRoaXMuaHVsbD12LnN1YmFycmF5KDAsTSksdGhpcy50cmlhbmdsZXM9bmV3IFVpbnQzMkFycmF5KDApLHRoaXMuaGFsZmVkZ2VzPW5ldyBVaW50MzJBcnJheSgwKTtyZXR1cm59aWYoT3QoXyxiLHksdyxBLEMpPDApe2xldCB2PW0sTT15LGo9dzttPXgseT1BLHc9Qyx4PXYsQT1NLEM9an1sZXQgUz1QbyhfLGIseSx3LEEsQyk7dGhpcy5fY3g9Uy54LHRoaXMuX2N5PVMueTtmb3IobGV0IHY9MDt2PGE7disrKXRoaXMuX2Rpc3RzW3ZdPWduKGVbMip2XSxlWzIqdisxXSxTLngsUy55KTtQdCh0aGlzLl9pZHMsdGhpcy5fZGlzdHMsMCxhLTEpLHRoaXMuX2h1bGxTdGFydD1kO2xldCBOPTM7cltkXT1uW3hdPW0sclttXT1uW2RdPXgsclt4XT1uW21dPWQsaVtkXT0wLGlbbV09MSxpW3hdPTIscy5maWxsKC0xKSxzW3RoaXMuX2hhc2hLZXkoXyxiKV09ZCxzW3RoaXMuX2hhc2hLZXkoeSx3KV09bSxzW3RoaXMuX2hhc2hLZXkoQSxDKV09eCx0aGlzLnRyaWFuZ2xlc0xlbj0wLHRoaXMuX2FkZFRyaWFuZ2xlKGQsbSx4LC0xLC0xLC0xKTtmb3IobGV0IHY9MCxNLGo7djx0aGlzLl9pZHMubGVuZ3RoO3YrKyl7bGV0IGs9dGhpcy5faWRzW3ZdLEU9ZVsyKmtdLFA9ZVsyKmsrMV07aWYodj4wJiZNYXRoLmFicyhFLU0pPD1sciYmTWF0aC5hYnMoUC1qKTw9bHJ8fChNPUUsaj1QLGs9PT1kfHxrPT09bXx8az09PXgpKWNvbnRpbnVlO2xldCBEPTA7Zm9yKGxldCBWPTAsTD10aGlzLl9oYXNoS2V5KEUsUCk7Vjx0aGlzLl9oYXNoU2l6ZSYmKEQ9c1soTCtWKSV0aGlzLl9oYXNoU2l6ZV0sIShEIT09LTEmJkQhPT1yW0RdKSk7VisrKTtEPW5bRF07bGV0IEk9RCxPO2Zvcig7Tz1yW0ldLE90KEUsUCxlWzIqSV0sZVsyKkkrMV0sZVsyKk9dLGVbMipPKzFdKT49MDspaWYoST1PLEk9PT1EKXtJPS0xO2JyZWFrfWlmKEk9PT0tMSljb250aW51ZTtsZXQgej10aGlzLl9hZGRUcmlhbmdsZShJLGsscltJXSwtMSwtMSxpW0ldKTtpW2tdPXRoaXMuX2xlZ2FsaXplKHorMiksaVtJXT16LE4rKztsZXQgWD1yW0ldO2Zvcig7Tz1yW1hdLE90KEUsUCxlWzIqWF0sZVsyKlgrMV0sZVsyKk9dLGVbMipPKzFdKTwwOyl6PXRoaXMuX2FkZFRyaWFuZ2xlKFgsayxPLGlba10sLTEsaVtYXSksaVtrXT10aGlzLl9sZWdhbGl6ZSh6KzIpLHJbWF09WCxOLS0sWD1PO2lmKEk9PT1EKWZvcig7Tz1uW0ldLE90KEUsUCxlWzIqT10sZVsyKk8rMV0sZVsyKkldLGVbMipJKzFdKTwwOyl6PXRoaXMuX2FkZFRyaWFuZ2xlKE8sayxJLC0xLGlbSV0saVtPXSksdGhpcy5fbGVnYWxpemUoeisyKSxpW09dPXoscltJXT1JLE4tLSxJPU87dGhpcy5faHVsbFN0YXJ0PW5ba109SSxyW0ldPW5bWF09ayxyW2tdPVgsc1t0aGlzLl9oYXNoS2V5KEUsUCldPWssc1t0aGlzLl9oYXNoS2V5KGVbMipJXSxlWzIqSSsxXSldPUl9dGhpcy5odWxsPW5ldyBVaW50MzJBcnJheShOKTtmb3IobGV0IHY9MCxNPXRoaXMuX2h1bGxTdGFydDt2PE47disrKXRoaXMuaHVsbFt2XT1NLE09cltNXTt0aGlzLnRyaWFuZ2xlcz10aGlzLl90cmlhbmdsZXMuc3ViYXJyYXkoMCx0aGlzLnRyaWFuZ2xlc0xlbiksdGhpcy5oYWxmZWRnZXM9dGhpcy5faGFsZmVkZ2VzLnN1YmFycmF5KDAsdGhpcy50cmlhbmdsZXNMZW4pfV9oYXNoS2V5KGUsbil7cmV0dXJuIE1hdGguZmxvb3IoRW8oZS10aGlzLl9jeCxuLXRoaXMuX2N5KSp0aGlzLl9oYXNoU2l6ZSkldGhpcy5faGFzaFNpemV9X2xlZ2FsaXplKGUpe2xldHtfdHJpYW5nbGVzOm4sX2hhbGZlZGdlczpyLGNvb3JkczppfT10aGlzLHM9MCxhPTA7Zm9yKDs7KXtsZXQgbz1yW2VdLGw9ZS1lJTM7aWYoYT1sKyhlKzIpJTMsbz09PS0xKXtpZihzPT09MClicmVhaztlPXdlWy0tc107Y29udGludWV9bGV0IGY9by1vJTMsdT1sKyhlKzEpJTMsYz1mKyhvKzIpJTMsaD1uW2FdLHA9bltlXSxkPW5bdV0sbT1uW2NdO2lmKE5vKGlbMipoXSxpWzIqaCsxXSxpWzIqcF0saVsyKnArMV0saVsyKmRdLGlbMipkKzFdLGlbMiptXSxpWzIqbSsxXSkpe25bZV09bSxuW29dPWg7bGV0IF89cltjXTtpZihfPT09LTEpe2xldCB5PXRoaXMuX2h1bGxTdGFydDtkb3tpZih0aGlzLl9odWxsVHJpW3ldPT09Yyl7dGhpcy5faHVsbFRyaVt5XT1lO2JyZWFrfXk9dGhpcy5faHVsbFByZXZbeV19d2hpbGUoeSE9PXRoaXMuX2h1bGxTdGFydCl9dGhpcy5fbGluayhlLF8pLHRoaXMuX2xpbmsobyxyW2FdKSx0aGlzLl9saW5rKGEsYyk7bGV0IGI9ZisobysxKSUzO3M8d2UubGVuZ3RoJiYod2VbcysrXT1iKX1lbHNle2lmKHM9PT0wKWJyZWFrO2U9d2VbLS1zXX19cmV0dXJuIGF9X2xpbmsoZSxuKXt0aGlzLl9oYWxmZWRnZXNbZV09bixuIT09LTEmJih0aGlzLl9oYWxmZWRnZXNbbl09ZSl9X2FkZFRyaWFuZ2xlKGUsbixyLGkscyxhKXtsZXQgbz10aGlzLnRyaWFuZ2xlc0xlbjtyZXR1cm4gdGhpcy5fdHJpYW5nbGVzW29dPWUsdGhpcy5fdHJpYW5nbGVzW28rMV09bix0aGlzLl90cmlhbmdsZXNbbysyXT1yLHRoaXMuX2xpbmsobyxpKSx0aGlzLl9saW5rKG8rMSxzKSx0aGlzLl9saW5rKG8rMixhKSx0aGlzLnRyaWFuZ2xlc0xlbis9MyxvfX07ZnVuY3Rpb24gRW8odCxlKXtsZXQgbj10LyhNYXRoLmFicyh0KStNYXRoLmFicyhlKSk7cmV0dXJuKGU+MD8zLW46MStuKS80fWZ1bmN0aW9uIGduKHQsZSxuLHIpe2xldCBpPXQtbixzPWUtcjtyZXR1cm4gaSppK3Mqc31mdW5jdGlvbiBObyh0LGUsbixyLGkscyxhLG8pe2xldCBsPXQtYSxmPWUtbyx1PW4tYSxjPXItbyxoPWktYSxwPXMtbyxkPWwqbCtmKmYsbT11KnUrYypjLHg9aCpoK3AqcDtyZXR1cm4gbCooYyp4LW0qcCktZioodSp4LW0qaCkrZCoodSpwLWMqaCk8MH1mdW5jdGlvbiBPbyh0LGUsbixyLGkscyl7bGV0IGE9bi10LG89ci1lLGw9aS10LGY9cy1lLHU9YSphK28qbyxjPWwqbCtmKmYsaD0uNS8oYSpmLW8qbCkscD0oZip1LW8qYykqaCxkPShhKmMtbCp1KSpoO3JldHVybiBwKnArZCpkfWZ1bmN0aW9uIFBvKHQsZSxuLHIsaSxzKXtsZXQgYT1uLXQsbz1yLWUsbD1pLXQsZj1zLWUsdT1hKmErbypvLGM9bCpsK2YqZixoPS41LyhhKmYtbypsKSxwPXQrKGYqdS1vKmMpKmgsZD1lKyhhKmMtbCp1KSpoO3JldHVybnt4OnAseTpkfX1mdW5jdGlvbiBQdCh0LGUsbixyKXtpZihyLW48PTIwKWZvcihsZXQgaT1uKzE7aTw9cjtpKyspe2xldCBzPXRbaV0sYT1lW3NdLG89aS0xO2Zvcig7bz49biYmZVt0W29dXT5hOyl0W28rMV09dFtvLS1dO3RbbysxXT1zfWVsc2V7bGV0IGk9bityPj4xLHM9bisxLGE9cjtXdCh0LGkscyksZVt0W25dXT5lW3Rbcl1dJiZXdCh0LG4sciksZVt0W3NdXT5lW3Rbcl1dJiZXdCh0LHMsciksZVt0W25dXT5lW3Rbc11dJiZXdCh0LG4scyk7bGV0IG89dFtzXSxsPWVbb107Zm9yKDs7KXtkbyBzKys7d2hpbGUoZVt0W3NdXTxsKTtkbyBhLS07d2hpbGUoZVt0W2FdXT5sKTtpZihhPHMpYnJlYWs7V3QodCxzLGEpfXRbbisxXT10W2FdLHRbYV09byxyLXMrMT49YS1uPyhQdCh0LGUscyxyKSxQdCh0LGUsbixhLTEpKTooUHQodCxlLG4sYS0xKSxQdCh0LGUscyxyKSl9fWZ1bmN0aW9uIFd0KHQsZSxuKXtsZXQgcj10W2VdO3RbZV09dFtuXSx0W25dPXJ9ZnVuY3Rpb24gRG8odCl7cmV0dXJuIHRbMF19ZnVuY3Rpb24gcW8odCl7cmV0dXJuIHRbMV19dmFyIHVyPTFlLTYsSz1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuX3gwPXRoaXMuX3kwPXRoaXMuX3gxPXRoaXMuX3kxPW51bGwsdGhpcy5fPVwiXCJ9bW92ZVRvKGUsbil7dGhpcy5fKz1gTSR7dGhpcy5feDA9dGhpcy5feDE9K2V9LCR7dGhpcy5feTA9dGhpcy5feTE9K259YH1jbG9zZVBhdGgoKXt0aGlzLl94MSE9PW51bGwmJih0aGlzLl94MT10aGlzLl94MCx0aGlzLl95MT10aGlzLl95MCx0aGlzLl8rPVwiWlwiKX1saW5lVG8oZSxuKXt0aGlzLl8rPWBMJHt0aGlzLl94MT0rZX0sJHt0aGlzLl95MT0rbn1gfWFyYyhlLG4scil7ZT0rZSxuPStuLHI9K3I7bGV0IGk9ZStyLHM9bjtpZihyPDApdGhyb3cgbmV3IEVycm9yKFwibmVnYXRpdmUgcmFkaXVzXCIpO3RoaXMuX3gxPT09bnVsbD90aGlzLl8rPWBNJHtpfSwke3N9YDooTWF0aC5hYnModGhpcy5feDEtaSk+dXJ8fE1hdGguYWJzKHRoaXMuX3kxLXMpPnVyKSYmKHRoaXMuXys9XCJMXCIraStcIixcIitzKSwhIXImJih0aGlzLl8rPWBBJHtyfSwke3J9LDAsMSwxLCR7ZS1yfSwke259QSR7cn0sJHtyfSwwLDEsMSwke3RoaXMuX3gxPWl9LCR7dGhpcy5feTE9c31gKX1yZWN0KGUsbixyLGkpe3RoaXMuXys9YE0ke3RoaXMuX3gwPXRoaXMuX3gxPStlfSwke3RoaXMuX3kwPXRoaXMuX3kxPStufWgkeytyfXYkeytpfWgkey1yfVpgfXZhbHVlKCl7cmV0dXJuIHRoaXMuX3x8bnVsbH19O3ZhciBJdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuXz1bXX1tb3ZlVG8oZSxuKXt0aGlzLl8ucHVzaChbZSxuXSl9Y2xvc2VQYXRoKCl7dGhpcy5fLnB1c2godGhpcy5fWzBdLnNsaWNlKCkpfWxpbmVUbyhlLG4pe3RoaXMuXy5wdXNoKFtlLG5dKX12YWx1ZSgpe3JldHVybiB0aGlzLl8ubGVuZ3RoP3RoaXMuXzpudWxsfX07dmFyIGJlPWNsYXNze2NvbnN0cnVjdG9yKGUsW24scixpLHNdPVswLDAsOTYwLDUwMF0pe2lmKCEoKGk9K2kpPj0obj0rbikpfHwhKChzPStzKT49KHI9K3IpKSl0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGJvdW5kc1wiKTt0aGlzLmRlbGF1bmF5PWUsdGhpcy5fY2lyY3VtY2VudGVycz1uZXcgRmxvYXQ2NEFycmF5KGUucG9pbnRzLmxlbmd0aCoyKSx0aGlzLnZlY3RvcnM9bmV3IEZsb2F0NjRBcnJheShlLnBvaW50cy5sZW5ndGgqMiksdGhpcy54bWF4PWksdGhpcy54bWluPW4sdGhpcy55bWF4PXMsdGhpcy55bWluPXIsdGhpcy5faW5pdCgpfXVwZGF0ZSgpe3JldHVybiB0aGlzLmRlbGF1bmF5LnVwZGF0ZSgpLHRoaXMuX2luaXQoKSx0aGlzfV9pbml0KCl7bGV0e2RlbGF1bmF5Ontwb2ludHM6ZSxodWxsOm4sdHJpYW5nbGVzOnJ9LHZlY3RvcnM6aX09dGhpcyxzPXRoaXMuY2lyY3VtY2VudGVycz10aGlzLl9jaXJjdW1jZW50ZXJzLnN1YmFycmF5KDAsci5sZW5ndGgvMyoyKTtmb3IobGV0IHA9MCxkPTAsbT1yLmxlbmd0aCx4LF87cDxtO3ArPTMsZCs9Mil7bGV0IGI9cltwXSoyLHk9cltwKzFdKjIsdz1yW3ArMl0qMixUPWVbYl0sQT1lW2IrMV0sQz1lW3ldLFM9ZVt5KzFdLE49ZVt3XSx2PWVbdysxXSxNPUMtVCxqPVMtQSxrPU4tVCxFPXYtQSxQPShNKkUtaiprKSoyO2lmKE1hdGguYWJzKFApPDFlLTkpe2xldCBEPTFlOSxJPXJbMF0qMjtEKj1NYXRoLnNpZ24oKGVbSV0tVCkqRS0oZVtJKzFdLUEpKmspLHg9KFQrTikvMi1EKkUsXz0oQSt2KS8yK0Qqa31lbHNle2xldCBEPTEvUCxJPU0qTStqKmosTz1rKmsrRSpFO3g9VCsoRSpJLWoqTykqRCxfPUErKE0qTy1rKkkpKkR9c1tkXT14LHNbZCsxXT1ffWxldCBhPW5bbi5sZW5ndGgtMV0sbyxsPWEqNCxmLHU9ZVsyKmFdLGMsaD1lWzIqYSsxXTtpLmZpbGwoMCk7Zm9yKGxldCBwPTA7cDxuLmxlbmd0aDsrK3ApYT1uW3BdLG89bCxmPXUsYz1oLGw9YSo0LHU9ZVsyKmFdLGg9ZVsyKmErMV0saVtvKzJdPWlbbF09Yy1oLGlbbyszXT1pW2wrMV09dS1mfXJlbmRlcihlKXtsZXQgbj1lPT1udWxsP2U9bmV3IEs6dm9pZCAwLHtkZWxhdW5heTp7aGFsZmVkZ2VzOnIsaW5lZGdlczppLGh1bGw6c30sY2lyY3VtY2VudGVyczphLHZlY3RvcnM6b309dGhpcztpZihzLmxlbmd0aDw9MSlyZXR1cm4gbnVsbDtmb3IobGV0IHU9MCxjPXIubGVuZ3RoO3U8YzsrK3Upe2xldCBoPXJbdV07aWYoaDx1KWNvbnRpbnVlO2xldCBwPU1hdGguZmxvb3IodS8zKSoyLGQ9TWF0aC5mbG9vcihoLzMpKjIsbT1hW3BdLHg9YVtwKzFdLF89YVtkXSxiPWFbZCsxXTt0aGlzLl9yZW5kZXJTZWdtZW50KG0seCxfLGIsZSl9bGV0IGwsZj1zW3MubGVuZ3RoLTFdO2ZvcihsZXQgdT0wO3U8cy5sZW5ndGg7Kyt1KXtsPWYsZj1zW3VdO2xldCBjPU1hdGguZmxvb3IoaVtmXS8zKSoyLGg9YVtjXSxwPWFbYysxXSxkPWwqNCxtPXRoaXMuX3Byb2plY3QoaCxwLG9bZCsyXSxvW2QrM10pO20mJnRoaXMuX3JlbmRlclNlZ21lbnQoaCxwLG1bMF0sbVsxXSxlKX1yZXR1cm4gbiYmbi52YWx1ZSgpfXJlbmRlckJvdW5kcyhlKXtsZXQgbj1lPT1udWxsP2U9bmV3IEs6dm9pZCAwO3JldHVybiBlLnJlY3QodGhpcy54bWluLHRoaXMueW1pbix0aGlzLnhtYXgtdGhpcy54bWluLHRoaXMueW1heC10aGlzLnltaW4pLG4mJm4udmFsdWUoKX1yZW5kZXJDZWxsKGUsbil7bGV0IHI9bj09bnVsbD9uPW5ldyBLOnZvaWQgMCxpPXRoaXMuX2NsaXAoZSk7aWYoaT09PW51bGx8fCFpLmxlbmd0aClyZXR1cm47bi5tb3ZlVG8oaVswXSxpWzFdKTtsZXQgcz1pLmxlbmd0aDtmb3IoO2lbMF09PT1pW3MtMl0mJmlbMV09PT1pW3MtMV0mJnM+MTspcy09Mjtmb3IobGV0IGE9MjthPHM7YSs9MikoaVthXSE9PWlbYS0yXXx8aVthKzFdIT09aVthLTFdKSYmbi5saW5lVG8oaVthXSxpW2ErMV0pO3JldHVybiBuLmNsb3NlUGF0aCgpLHImJnIudmFsdWUoKX0qY2VsbFBvbHlnb25zKCl7bGV0e2RlbGF1bmF5Ontwb2ludHM6ZX19PXRoaXM7Zm9yKGxldCBuPTAscj1lLmxlbmd0aC8yO248cjsrK24pe2xldCBpPXRoaXMuY2VsbFBvbHlnb24obik7aSYmKGkuaW5kZXg9bix5aWVsZCBpKX19Y2VsbFBvbHlnb24oZSl7bGV0IG49bmV3IEl0O3JldHVybiB0aGlzLnJlbmRlckNlbGwoZSxuKSxuLnZhbHVlKCl9X3JlbmRlclNlZ21lbnQoZSxuLHIsaSxzKXtsZXQgYSxvPXRoaXMuX3JlZ2lvbmNvZGUoZSxuKSxsPXRoaXMuX3JlZ2lvbmNvZGUocixpKTtvPT09MCYmbD09PTA/KHMubW92ZVRvKGUsbikscy5saW5lVG8ocixpKSk6KGE9dGhpcy5fY2xpcFNlZ21lbnQoZSxuLHIsaSxvLGwpKSYmKHMubW92ZVRvKGFbMF0sYVsxXSkscy5saW5lVG8oYVsyXSxhWzNdKSl9Y29udGFpbnMoZSxuLHIpe3JldHVybiBuPStuLG4hPT1ufHwocj0rcixyIT09cik/ITE6dGhpcy5kZWxhdW5heS5fc3RlcChlLG4scik9PT1lfSpuZWlnaGJvcnMoZSl7bGV0IG49dGhpcy5fY2xpcChlKTtpZihuKWZvcihsZXQgciBvZiB0aGlzLmRlbGF1bmF5Lm5laWdoYm9ycyhlKSl7bGV0IGk9dGhpcy5fY2xpcChyKTtpZihpKXQ6Zm9yKGxldCBzPTAsYT1uLmxlbmd0aDtzPGE7cys9Milmb3IobGV0IG89MCxsPWkubGVuZ3RoO288bDtvKz0yKWlmKG5bc109PWlbb10mJm5bcysxXT09aVtvKzFdJiZuWyhzKzIpJWFdPT1pWyhvK2wtMiklbF0mJm5bKHMrMyklYV09PWlbKG8rbC0xKSVsXSl7eWllbGQgcjticmVhayB0fX19X2NlbGwoZSl7bGV0e2NpcmN1bWNlbnRlcnM6bixkZWxhdW5heTp7aW5lZGdlczpyLGhhbGZlZGdlczppLHRyaWFuZ2xlczpzfX09dGhpcyxhPXJbZV07aWYoYT09PS0xKXJldHVybiBudWxsO2xldCBvPVtdLGw9YTtkb3tsZXQgZj1NYXRoLmZsb29yKGwvMyk7aWYoby5wdXNoKG5bZioyXSxuW2YqMisxXSksbD1sJTM9PTI/bC0yOmwrMSxzW2xdIT09ZSlicmVhaztsPWlbbF19d2hpbGUobCE9PWEmJmwhPT0tMSk7cmV0dXJuIG99X2NsaXAoZSl7aWYoZT09PTAmJnRoaXMuZGVsYXVuYXkuaHVsbC5sZW5ndGg9PT0xKXJldHVyblt0aGlzLnhtYXgsdGhpcy55bWluLHRoaXMueG1heCx0aGlzLnltYXgsdGhpcy54bWluLHRoaXMueW1heCx0aGlzLnhtaW4sdGhpcy55bWluXTtsZXQgbj10aGlzLl9jZWxsKGUpO2lmKG49PT1udWxsKXJldHVybiBudWxsO2xldHt2ZWN0b3JzOnJ9PXRoaXMsaT1lKjQ7cmV0dXJuIHJbaV18fHJbaSsxXT90aGlzLl9jbGlwSW5maW5pdGUoZSxuLHJbaV0scltpKzFdLHJbaSsyXSxyW2krM10pOnRoaXMuX2NsaXBGaW5pdGUoZSxuKX1fY2xpcEZpbml0ZShlLG4pe2xldCByPW4ubGVuZ3RoLGk9bnVsbCxzLGEsbz1uW3ItMl0sbD1uW3ItMV0sZix1PXRoaXMuX3JlZ2lvbmNvZGUobyxsKSxjLGg9MDtmb3IobGV0IHA9MDtwPHI7cCs9MilpZihzPW8sYT1sLG89bltwXSxsPW5bcCsxXSxmPXUsdT10aGlzLl9yZWdpb25jb2RlKG8sbCksZj09PTAmJnU9PT0wKWM9aCxoPTAsaT9pLnB1c2gobyxsKTppPVtvLGxdO2Vsc2V7bGV0IGQsbSx4LF8sYjtpZihmPT09MCl7aWYoKGQ9dGhpcy5fY2xpcFNlZ21lbnQocyxhLG8sbCxmLHUpKT09PW51bGwpY29udGludWU7W20seCxfLGJdPWR9ZWxzZXtpZigoZD10aGlzLl9jbGlwU2VnbWVudChvLGwscyxhLHUsZikpPT09bnVsbCljb250aW51ZTtbXyxiLG0seF09ZCxjPWgsaD10aGlzLl9lZGdlY29kZShtLHgpLGMmJmgmJnRoaXMuX2VkZ2UoZSxjLGgsaSxpLmxlbmd0aCksaT9pLnB1c2gobSx4KTppPVttLHhdfWM9aCxoPXRoaXMuX2VkZ2Vjb2RlKF8sYiksYyYmaCYmdGhpcy5fZWRnZShlLGMsaCxpLGkubGVuZ3RoKSxpP2kucHVzaChfLGIpOmk9W18sYl19aWYoaSljPWgsaD10aGlzLl9lZGdlY29kZShpWzBdLGlbMV0pLGMmJmgmJnRoaXMuX2VkZ2UoZSxjLGgsaSxpLmxlbmd0aCk7ZWxzZSBpZih0aGlzLmNvbnRhaW5zKGUsKHRoaXMueG1pbit0aGlzLnhtYXgpLzIsKHRoaXMueW1pbit0aGlzLnltYXgpLzIpKXJldHVyblt0aGlzLnhtYXgsdGhpcy55bWluLHRoaXMueG1heCx0aGlzLnltYXgsdGhpcy54bWluLHRoaXMueW1heCx0aGlzLnhtaW4sdGhpcy55bWluXTtyZXR1cm4gaX1fY2xpcFNlZ21lbnQoZSxuLHIsaSxzLGEpe2Zvcig7Oyl7aWYocz09PTAmJmE9PT0wKXJldHVybltlLG4scixpXTtpZihzJmEpcmV0dXJuIG51bGw7bGV0IG8sbCxmPXN8fGE7ZiY4PyhvPWUrKHItZSkqKHRoaXMueW1heC1uKS8oaS1uKSxsPXRoaXMueW1heCk6ZiY0PyhvPWUrKHItZSkqKHRoaXMueW1pbi1uKS8oaS1uKSxsPXRoaXMueW1pbik6ZiYyPyhsPW4rKGktbikqKHRoaXMueG1heC1lKS8oci1lKSxvPXRoaXMueG1heCk6KGw9bisoaS1uKSoodGhpcy54bWluLWUpLyhyLWUpLG89dGhpcy54bWluKSxzPyhlPW8sbj1sLHM9dGhpcy5fcmVnaW9uY29kZShlLG4pKToocj1vLGk9bCxhPXRoaXMuX3JlZ2lvbmNvZGUocixpKSl9fV9jbGlwSW5maW5pdGUoZSxuLHIsaSxzLGEpe2xldCBvPUFycmF5LmZyb20obiksbDtpZigobD10aGlzLl9wcm9qZWN0KG9bMF0sb1sxXSxyLGkpKSYmby51bnNoaWZ0KGxbMF0sbFsxXSksKGw9dGhpcy5fcHJvamVjdChvW28ubGVuZ3RoLTJdLG9bby5sZW5ndGgtMV0scyxhKSkmJm8ucHVzaChsWzBdLGxbMV0pLG89dGhpcy5fY2xpcEZpbml0ZShlLG8pKWZvcihsZXQgZj0wLHU9by5sZW5ndGgsYyxoPXRoaXMuX2VkZ2Vjb2RlKG9bdS0yXSxvW3UtMV0pO2Y8dTtmKz0yKWM9aCxoPXRoaXMuX2VkZ2Vjb2RlKG9bZl0sb1tmKzFdKSxjJiZoJiYoZj10aGlzLl9lZGdlKGUsYyxoLG8sZiksdT1vLmxlbmd0aCk7ZWxzZSB0aGlzLmNvbnRhaW5zKGUsKHRoaXMueG1pbit0aGlzLnhtYXgpLzIsKHRoaXMueW1pbit0aGlzLnltYXgpLzIpJiYobz1bdGhpcy54bWluLHRoaXMueW1pbix0aGlzLnhtYXgsdGhpcy55bWluLHRoaXMueG1heCx0aGlzLnltYXgsdGhpcy54bWluLHRoaXMueW1heF0pO3JldHVybiBvfV9lZGdlKGUsbixyLGkscyl7Zm9yKDtuIT09cjspe2xldCBhLG87c3dpdGNoKG4pe2Nhc2UgNTpuPTQ7Y29udGludWU7Y2FzZSA0Om49NixhPXRoaXMueG1heCxvPXRoaXMueW1pbjticmVhaztjYXNlIDY6bj0yO2NvbnRpbnVlO2Nhc2UgMjpuPTEwLGE9dGhpcy54bWF4LG89dGhpcy55bWF4O2JyZWFrO2Nhc2UgMTA6bj04O2NvbnRpbnVlO2Nhc2UgODpuPTksYT10aGlzLnhtaW4sbz10aGlzLnltYXg7YnJlYWs7Y2FzZSA5Om49MTtjb250aW51ZTtjYXNlIDE6bj01LGE9dGhpcy54bWluLG89dGhpcy55bWluO2JyZWFrfShpW3NdIT09YXx8aVtzKzFdIT09bykmJnRoaXMuY29udGFpbnMoZSxhLG8pJiYoaS5zcGxpY2UocywwLGEsbykscys9Mil9aWYoaS5sZW5ndGg+NClmb3IobGV0IGE9MDthPGkubGVuZ3RoO2ErPTIpe2xldCBvPShhKzIpJWkubGVuZ3RoLGw9KGErNCklaS5sZW5ndGg7KGlbYV09PT1pW29dJiZpW29dPT09aVtsXXx8aVthKzFdPT09aVtvKzFdJiZpW28rMV09PT1pW2wrMV0pJiYoaS5zcGxpY2UobywyKSxhLT0yKX1yZXR1cm4gc31fcHJvamVjdChlLG4scixpKXtsZXQgcz1JbmZpbml0eSxhLG8sbDtpZihpPDApe2lmKG48PXRoaXMueW1pbilyZXR1cm4gbnVsbDsoYT0odGhpcy55bWluLW4pL2kpPHMmJihsPXRoaXMueW1pbixvPWUrKHM9YSkqcil9ZWxzZSBpZihpPjApe2lmKG4+PXRoaXMueW1heClyZXR1cm4gbnVsbDsoYT0odGhpcy55bWF4LW4pL2kpPHMmJihsPXRoaXMueW1heCxvPWUrKHM9YSkqcil9aWYocj4wKXtpZihlPj10aGlzLnhtYXgpcmV0dXJuIG51bGw7KGE9KHRoaXMueG1heC1lKS9yKTxzJiYobz10aGlzLnhtYXgsbD1uKyhzPWEpKmkpfWVsc2UgaWYocjwwKXtpZihlPD10aGlzLnhtaW4pcmV0dXJuIG51bGw7KGE9KHRoaXMueG1pbi1lKS9yKTxzJiYobz10aGlzLnhtaW4sbD1uKyhzPWEpKmkpfXJldHVybltvLGxdfV9lZGdlY29kZShlLG4pe3JldHVybihlPT09dGhpcy54bWluPzE6ZT09PXRoaXMueG1heD8yOjApfChuPT09dGhpcy55bWluPzQ6bj09PXRoaXMueW1heD84OjApfV9yZWdpb25jb2RlKGUsbil7cmV0dXJuKGU8dGhpcy54bWluPzE6ZT50aGlzLnhtYXg/MjowKXwobjx0aGlzLnltaW4/NDpuPnRoaXMueW1heD84OjApfX07dmFyIFhvPTIqTWF0aC5QSSxEdD1NYXRoLnBvdztmdW5jdGlvbiB6byh0KXtyZXR1cm4gdFswXX1mdW5jdGlvbiBSbyh0KXtyZXR1cm4gdFsxXX1mdW5jdGlvbiBCbyh0KXtsZXR7dHJpYW5nbGVzOmUsY29vcmRzOm59PXQ7Zm9yKGxldCByPTA7cjxlLmxlbmd0aDtyKz0zKXtsZXQgaT0yKmVbcl0scz0yKmVbcisxXSxhPTIqZVtyKzJdO2lmKChuW2FdLW5baV0pKihuW3MrMV0tbltpKzFdKS0obltzXS1uW2ldKSooblthKzFdLW5baSsxXSk+MWUtMTApcmV0dXJuITF9cmV0dXJuITB9ZnVuY3Rpb24gRm8odCxlLG4pe3JldHVyblt0K01hdGguc2luKHQrZSkqbixlK01hdGguY29zKHQtZSkqbl19dmFyIFN0PWNsYXNze3N0YXRpYyBmcm9tKGUsbj16byxyPVJvLGkpe3JldHVybiBuZXcgU3QoXCJsZW5ndGhcImluIGU/TG8oZSxuLHIsaSk6RmxvYXQ2NEFycmF5LmZyb20oVm8oZSxuLHIsaSkpKX1jb25zdHJ1Y3RvcihlKXt0aGlzLl9kZWxhdW5hdG9yPW5ldyBUdChlKSx0aGlzLmluZWRnZXM9bmV3IEludDMyQXJyYXkoZS5sZW5ndGgvMiksdGhpcy5faHVsbEluZGV4PW5ldyBJbnQzMkFycmF5KGUubGVuZ3RoLzIpLHRoaXMucG9pbnRzPXRoaXMuX2RlbGF1bmF0b3IuY29vcmRzLHRoaXMuX2luaXQoKX11cGRhdGUoKXtyZXR1cm4gdGhpcy5fZGVsYXVuYXRvci51cGRhdGUoKSx0aGlzLl9pbml0KCksdGhpc31faW5pdCgpe2xldCBlPXRoaXMuX2RlbGF1bmF0b3Isbj10aGlzLnBvaW50cztpZihlLmh1bGwmJmUuaHVsbC5sZW5ndGg+MiYmQm8oZSkpe3RoaXMuY29sbGluZWFyPUludDMyQXJyYXkuZnJvbSh7bGVuZ3RoOm4ubGVuZ3RoLzJ9LChoLHApPT5wKS5zb3J0KChoLHApPT5uWzIqaF0tblsyKnBdfHxuWzIqaCsxXS1uWzIqcCsxXSk7bGV0IGw9dGhpcy5jb2xsaW5lYXJbMF0sZj10aGlzLmNvbGxpbmVhclt0aGlzLmNvbGxpbmVhci5sZW5ndGgtMV0sdT1bblsyKmxdLG5bMipsKzFdLG5bMipmXSxuWzIqZisxXV0sYz0xZS04Kk1hdGguaHlwb3QodVszXS11WzFdLHVbMl0tdVswXSk7Zm9yKGxldCBoPTAscD1uLmxlbmd0aC8yO2g8cDsrK2gpe2xldCBkPUZvKG5bMipoXSxuWzIqaCsxXSxjKTtuWzIqaF09ZFswXSxuWzIqaCsxXT1kWzFdfXRoaXMuX2RlbGF1bmF0b3I9bmV3IFR0KG4pfWVsc2UgZGVsZXRlIHRoaXMuY29sbGluZWFyO2xldCByPXRoaXMuaGFsZmVkZ2VzPXRoaXMuX2RlbGF1bmF0b3IuaGFsZmVkZ2VzLGk9dGhpcy5odWxsPXRoaXMuX2RlbGF1bmF0b3IuaHVsbCxzPXRoaXMudHJpYW5nbGVzPXRoaXMuX2RlbGF1bmF0b3IudHJpYW5nbGVzLGE9dGhpcy5pbmVkZ2VzLmZpbGwoLTEpLG89dGhpcy5faHVsbEluZGV4LmZpbGwoLTEpO2ZvcihsZXQgbD0wLGY9ci5sZW5ndGg7bDxmOysrbCl7bGV0IHU9c1tsJTM9PTI/bC0yOmwrMV07KHJbbF09PT0tMXx8YVt1XT09PS0xKSYmKGFbdV09bCl9Zm9yKGxldCBsPTAsZj1pLmxlbmd0aDtsPGY7KytsKW9baVtsXV09bDtpLmxlbmd0aDw9MiYmaS5sZW5ndGg+MCYmKHRoaXMudHJpYW5nbGVzPW5ldyBJbnQzMkFycmF5KDMpLmZpbGwoLTEpLHRoaXMuaGFsZmVkZ2VzPW5ldyBJbnQzMkFycmF5KDMpLmZpbGwoLTEpLHRoaXMudHJpYW5nbGVzWzBdPWlbMF0sYVtpWzBdXT0xLGkubGVuZ3RoPT09MiYmKGFbaVsxXV09MCx0aGlzLnRyaWFuZ2xlc1sxXT1pWzFdLHRoaXMudHJpYW5nbGVzWzJdPWlbMV0pKX12b3Jvbm9pKGUpe3JldHVybiBuZXcgYmUodGhpcyxlKX0qbmVpZ2hib3JzKGUpe2xldHtpbmVkZ2VzOm4saHVsbDpyLF9odWxsSW5kZXg6aSxoYWxmZWRnZXM6cyx0cmlhbmdsZXM6YSxjb2xsaW5lYXI6b309dGhpcztpZihvKXtsZXQgYz1vLmluZGV4T2YoZSk7Yz4wJiYoeWllbGQgb1tjLTFdKSxjPG8ubGVuZ3RoLTEmJih5aWVsZCBvW2MrMV0pO3JldHVybn1sZXQgbD1uW2VdO2lmKGw9PT0tMSlyZXR1cm47bGV0IGY9bCx1PS0xO2Rve2lmKHlpZWxkIHU9YVtmXSxmPWYlMz09Mj9mLTI6ZisxLGFbZl0hPT1lKXJldHVybjtpZihmPXNbZl0sZj09PS0xKXtsZXQgYz1yWyhpW2VdKzEpJXIubGVuZ3RoXTtjIT09dSYmKHlpZWxkIGMpO3JldHVybn19d2hpbGUoZiE9PWwpfWZpbmQoZSxuLHI9MCl7aWYoZT0rZSxlIT09ZXx8KG49K24sbiE9PW4pKXJldHVybi0xO2xldCBpPXIscztmb3IoOyhzPXRoaXMuX3N0ZXAocixlLG4pKT49MCYmcyE9PXImJnMhPT1pOylyPXM7cmV0dXJuIHN9X3N0ZXAoZSxuLHIpe2xldHtpbmVkZ2VzOmksaHVsbDpzLF9odWxsSW5kZXg6YSxoYWxmZWRnZXM6byx0cmlhbmdsZXM6bCxwb2ludHM6Zn09dGhpcztpZihpW2VdPT09LTF8fCFmLmxlbmd0aClyZXR1cm4oZSsxKSUoZi5sZW5ndGg+PjEpO2xldCB1PWUsYz1EdChuLWZbZSoyXSwyKStEdChyLWZbZSoyKzFdLDIpLGg9aVtlXSxwPWg7ZG97bGV0IGQ9bFtwXSxtPUR0KG4tZltkKjJdLDIpK0R0KHItZltkKjIrMV0sMik7aWYobTxjJiYoYz1tLHU9ZCkscD1wJTM9PTI/cC0yOnArMSxsW3BdIT09ZSlicmVhaztpZihwPW9bcF0scD09PS0xKXtpZihwPXNbKGFbZV0rMSklcy5sZW5ndGhdLHAhPT1kJiZEdChuLWZbcCoyXSwyKStEdChyLWZbcCoyKzFdLDIpPGMpcmV0dXJuIHA7YnJlYWt9fXdoaWxlKHAhPT1oKTtyZXR1cm4gdX1yZW5kZXIoZSl7bGV0IG49ZT09bnVsbD9lPW5ldyBLOnZvaWQgMCx7cG9pbnRzOnIsaGFsZmVkZ2VzOmksdHJpYW5nbGVzOnN9PXRoaXM7Zm9yKGxldCBhPTAsbz1pLmxlbmd0aDthPG87KythKXtsZXQgbD1pW2FdO2lmKGw8YSljb250aW51ZTtsZXQgZj1zW2FdKjIsdT1zW2xdKjI7ZS5tb3ZlVG8ocltmXSxyW2YrMV0pLGUubGluZVRvKHJbdV0sclt1KzFdKX1yZXR1cm4gdGhpcy5yZW5kZXJIdWxsKGUpLG4mJm4udmFsdWUoKX1yZW5kZXJQb2ludHMoZSxuKXtuPT09dm9pZCAwJiYoIWV8fHR5cGVvZiBlLm1vdmVUbyE9XCJmdW5jdGlvblwiKSYmKG49ZSxlPW51bGwpLG49bj09bnVsbD8yOituO2xldCByPWU9PW51bGw/ZT1uZXcgSzp2b2lkIDAse3BvaW50czppfT10aGlzO2ZvcihsZXQgcz0wLGE9aS5sZW5ndGg7czxhO3MrPTIpe2xldCBvPWlbc10sbD1pW3MrMV07ZS5tb3ZlVG8obytuLGwpLGUuYXJjKG8sbCxuLDAsWG8pfXJldHVybiByJiZyLnZhbHVlKCl9cmVuZGVySHVsbChlKXtsZXQgbj1lPT1udWxsP2U9bmV3IEs6dm9pZCAwLHtodWxsOnIscG9pbnRzOml9PXRoaXMscz1yWzBdKjIsYT1yLmxlbmd0aDtlLm1vdmVUbyhpW3NdLGlbcysxXSk7Zm9yKGxldCBvPTE7bzxhOysrbyl7bGV0IGw9MipyW29dO2UubGluZVRvKGlbbF0saVtsKzFdKX1yZXR1cm4gZS5jbG9zZVBhdGgoKSxuJiZuLnZhbHVlKCl9aHVsbFBvbHlnb24oKXtsZXQgZT1uZXcgSXQ7cmV0dXJuIHRoaXMucmVuZGVySHVsbChlKSxlLnZhbHVlKCl9cmVuZGVyVHJpYW5nbGUoZSxuKXtsZXQgcj1uPT1udWxsP249bmV3IEs6dm9pZCAwLHtwb2ludHM6aSx0cmlhbmdsZXM6c309dGhpcyxhPXNbZSo9M10qMixvPXNbZSsxXSoyLGw9c1tlKzJdKjI7cmV0dXJuIG4ubW92ZVRvKGlbYV0saVthKzFdKSxuLmxpbmVUbyhpW29dLGlbbysxXSksbi5saW5lVG8oaVtsXSxpW2wrMV0pLG4uY2xvc2VQYXRoKCksciYmci52YWx1ZSgpfSp0cmlhbmdsZVBvbHlnb25zKCl7bGV0e3RyaWFuZ2xlczplfT10aGlzO2ZvcihsZXQgbj0wLHI9ZS5sZW5ndGgvMztuPHI7KytuKXlpZWxkIHRoaXMudHJpYW5nbGVQb2x5Z29uKG4pfXRyaWFuZ2xlUG9seWdvbihlKXtsZXQgbj1uZXcgSXQ7cmV0dXJuIHRoaXMucmVuZGVyVHJpYW5nbGUoZSxuKSxuLnZhbHVlKCl9fTtmdW5jdGlvbiBMbyh0LGUsbixyKXtsZXQgaT10Lmxlbmd0aCxzPW5ldyBGbG9hdDY0QXJyYXkoaSoyKTtmb3IobGV0IGE9MDthPGk7KythKXtsZXQgbz10W2FdO3NbYSoyXT1lLmNhbGwocixvLGEsdCksc1thKjIrMV09bi5jYWxsKHIsbyxhLHQpfXJldHVybiBzfWZ1bmN0aW9uKlZvKHQsZSxuLHIpe2xldCBpPTA7Zm9yKGxldCBzIG9mIHQpeWllbGQgZS5jYWxsKHIscyxpLHQpLHlpZWxkIG4uY2FsbChyLHMsaSx0KSwrK2l9dmFyIFlvPXt2YWx1ZTooKT0+e319O2Z1bmN0aW9uIGNyKCl7Zm9yKHZhciB0PTAsZT1hcmd1bWVudHMubGVuZ3RoLG49e30scjt0PGU7Kyt0KXtpZighKHI9YXJndW1lbnRzW3RdK1wiXCIpfHxyIGluIG58fC9bXFxzLl0vLnRlc3QocikpdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIityKTtuW3JdPVtdfXJldHVybiBuZXcgamUobil9ZnVuY3Rpb24gamUodCl7dGhpcy5fPXR9ZnVuY3Rpb24gSG8odCxlKXtyZXR1cm4gdC50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbihuKXt2YXIgcj1cIlwiLGk9bi5pbmRleE9mKFwiLlwiKTtpZihpPj0wJiYocj1uLnNsaWNlKGkrMSksbj1uLnNsaWNlKDAsaSkpLG4mJiFlLmhhc093blByb3BlcnR5KG4pKXRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIrbik7cmV0dXJue3R5cGU6bixuYW1lOnJ9fSl9amUucHJvdG90eXBlPWNyLnByb3RvdHlwZT17Y29uc3RydWN0b3I6amUsb246ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl8scj1Ibyh0K1wiXCIsbiksaSxzPS0xLGE9ci5sZW5ndGg7aWYoYXJndW1lbnRzLmxlbmd0aDwyKXtmb3IoOysrczxhOylpZigoaT0odD1yW3NdKS50eXBlKSYmKGk9R28obltpXSx0Lm5hbWUpKSlyZXR1cm4gaTtyZXR1cm59aWYoZSE9bnVsbCYmdHlwZW9mIGUhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNhbGxiYWNrOiBcIitlKTtmb3IoOysrczxhOylpZihpPSh0PXJbc10pLnR5cGUpbltpXT1mcihuW2ldLHQubmFtZSxlKTtlbHNlIGlmKGU9PW51bGwpZm9yKGkgaW4gbiluW2ldPWZyKG5baV0sdC5uYW1lLG51bGwpO3JldHVybiB0aGlzfSxjb3B5OmZ1bmN0aW9uKCl7dmFyIHQ9e30sZT10aGlzLl87Zm9yKHZhciBuIGluIGUpdFtuXT1lW25dLnNsaWNlKCk7cmV0dXJuIG5ldyBqZSh0KX0sY2FsbDpmdW5jdGlvbih0LGUpe2lmKChpPWFyZ3VtZW50cy5sZW5ndGgtMik+MClmb3IodmFyIG49bmV3IEFycmF5KGkpLHI9MCxpLHM7cjxpOysrciluW3JdPWFyZ3VtZW50c1tyKzJdO2lmKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodCkpdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIit0KTtmb3Iocz10aGlzLl9bdF0scj0wLGk9cy5sZW5ndGg7cjxpOysrcilzW3JdLnZhbHVlLmFwcGx5KGUsbil9LGFwcGx5OmZ1bmN0aW9uKHQsZSxuKXtpZighdGhpcy5fLmhhc093blByb3BlcnR5KHQpKXRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIrdCk7Zm9yKHZhciByPXRoaXMuX1t0XSxpPTAscz1yLmxlbmd0aDtpPHM7KytpKXJbaV0udmFsdWUuYXBwbHkoZSxuKX19O2Z1bmN0aW9uIEdvKHQsZSl7Zm9yKHZhciBuPTAscj10Lmxlbmd0aCxpO248cjsrK24paWYoKGk9dFtuXSkubmFtZT09PWUpcmV0dXJuIGkudmFsdWV9ZnVuY3Rpb24gZnIodCxlLG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpOysrcilpZih0W3JdLm5hbWU9PT1lKXt0W3JdPVlvLHQ9dC5zbGljZSgwLHIpLmNvbmNhdCh0LnNsaWNlKHIrMSkpO2JyZWFrfXJldHVybiBuIT1udWxsJiZ0LnB1c2goe25hbWU6ZSx2YWx1ZTpufSksdH12YXIgeG49Y3I7dmFyIE1lPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLHZuPXtzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLHhodG1sOk1lLHhsaW5rOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLHhtbDpcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIn07ZnVuY3Rpb24gaXQodCl7dmFyIGU9dCs9XCJcIixuPWUuaW5kZXhPZihcIjpcIik7cmV0dXJuIG4+PTAmJihlPXQuc2xpY2UoMCxuKSkhPT1cInhtbG5zXCImJih0PXQuc2xpY2UobisxKSksdm4uaGFzT3duUHJvcGVydHkoZSk/e3NwYWNlOnZuW2VdLGxvY2FsOnR9OnR9ZnVuY3Rpb24gJG8odCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50LG49dGhpcy5uYW1lc3BhY2VVUkk7cmV0dXJuIG49PT1NZSYmZS5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJPT09TWU/ZS5jcmVhdGVFbGVtZW50KHQpOmUuY3JlYXRlRWxlbWVudE5TKG4sdCl9fWZ1bmN0aW9uIFFvKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHQuc3BhY2UsdC5sb2NhbCl9fWZ1bmN0aW9uIEFlKHQpe3ZhciBlPWl0KHQpO3JldHVybihlLmxvY2FsP1FvOiRvKShlKX1mdW5jdGlvbiBVbygpe31mdW5jdGlvbiBDdCh0KXtyZXR1cm4gdD09bnVsbD9VbzpmdW5jdGlvbigpe3JldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3IodCl9fWZ1bmN0aW9uIGhyKHQpe3R5cGVvZiB0IT1cImZ1bmN0aW9uXCImJih0PUN0KHQpKTtmb3IodmFyIGU9dGhpcy5fZ3JvdXBzLG49ZS5sZW5ndGgscj1uZXcgQXJyYXkobiksaT0wO2k8bjsrK2kpZm9yKHZhciBzPWVbaV0sYT1zLmxlbmd0aCxvPXJbaV09bmV3IEFycmF5KGEpLGwsZix1PTA7dTxhOysrdSkobD1zW3VdKSYmKGY9dC5jYWxsKGwsbC5fX2RhdGFfXyx1LHMpKSYmKFwiX19kYXRhX19cImluIGwmJihmLl9fZGF0YV9fPWwuX19kYXRhX18pLG9bdV09Zik7cmV0dXJuIG5ldyBCKHIsdGhpcy5fcGFyZW50cyl9ZnVuY3Rpb24gX24odCl7cmV0dXJuIHQ9PW51bGw/W106QXJyYXkuaXNBcnJheSh0KT90OkFycmF5LmZyb20odCl9ZnVuY3Rpb24gS28oKXtyZXR1cm5bXX1mdW5jdGlvbiBKdCh0KXtyZXR1cm4gdD09bnVsbD9LbzpmdW5jdGlvbigpe3JldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwodCl9fWZ1bmN0aW9uIFpvKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfbih0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9fWZ1bmN0aW9uIHByKHQpe3R5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dD1abyh0KTp0PUp0KHQpO2Zvcih2YXIgZT10aGlzLl9ncm91cHMsbj1lLmxlbmd0aCxyPVtdLGk9W10scz0wO3M8bjsrK3MpZm9yKHZhciBhPWVbc10sbz1hLmxlbmd0aCxsLGY9MDtmPG87KytmKShsPWFbZl0pJiYoci5wdXNoKHQuY2FsbChsLGwuX19kYXRhX18sZixhKSksaS5wdXNoKGwpKTtyZXR1cm4gbmV3IEIocixpKX1mdW5jdGlvbiB0ZSh0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXRjaGVzKHQpfX1mdW5jdGlvbiBrZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUubWF0Y2hlcyh0KX19dmFyIFdvPUFycmF5LnByb3RvdHlwZS5maW5kO2Z1bmN0aW9uIEpvKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBXby5jYWxsKHRoaXMuY2hpbGRyZW4sdCl9fWZ1bmN0aW9uIHRzKCl7cmV0dXJuIHRoaXMuZmlyc3RFbGVtZW50Q2hpbGR9ZnVuY3Rpb24gZHIodCl7cmV0dXJuIHRoaXMuc2VsZWN0KHQ9PW51bGw/dHM6Sm8odHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90OmtlKHQpKSl9dmFyIGVzPUFycmF5LnByb3RvdHlwZS5maWx0ZXI7ZnVuY3Rpb24gbnMoKXtyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKX1mdW5jdGlvbiBycyh0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZXMuY2FsbCh0aGlzLmNoaWxkcmVuLHQpfX1mdW5jdGlvbiBtcih0KXtyZXR1cm4gdGhpcy5zZWxlY3RBbGwodD09bnVsbD9uczpycyh0eXBlb2YgdD09XCJmdW5jdGlvblwiP3Q6a2UodCkpKX1mdW5jdGlvbiBncih0KXt0eXBlb2YgdCE9XCJmdW5jdGlvblwiJiYodD10ZSh0KSk7Zm9yKHZhciBlPXRoaXMuX2dyb3VwcyxuPWUubGVuZ3RoLHI9bmV3IEFycmF5KG4pLGk9MDtpPG47KytpKWZvcih2YXIgcz1lW2ldLGE9cy5sZW5ndGgsbz1yW2ldPVtdLGwsZj0wO2Y8YTsrK2YpKGw9c1tmXSkmJnQuY2FsbChsLGwuX19kYXRhX18sZixzKSYmby5wdXNoKGwpO3JldHVybiBuZXcgQihyLHRoaXMuX3BhcmVudHMpfWZ1bmN0aW9uIFRlKHQpe3JldHVybiBuZXcgQXJyYXkodC5sZW5ndGgpfWZ1bmN0aW9uIHhyKCl7cmV0dXJuIG5ldyBCKHRoaXMuX2VudGVyfHx0aGlzLl9ncm91cHMubWFwKFRlKSx0aGlzLl9wYXJlbnRzKX1mdW5jdGlvbiBlZSh0LGUpe3RoaXMub3duZXJEb2N1bWVudD10Lm93bmVyRG9jdW1lbnQsdGhpcy5uYW1lc3BhY2VVUkk9dC5uYW1lc3BhY2VVUkksdGhpcy5fbmV4dD1udWxsLHRoaXMuX3BhcmVudD10LHRoaXMuX19kYXRhX189ZX1lZS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmVlLGFwcGVuZENoaWxkOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKHQsdGhpcy5fbmV4dCl9LGluc2VydEJlZm9yZTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKHQsZSl9LHF1ZXJ5U2VsZWN0b3I6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yKHQpfSxxdWVyeVNlbGVjdG9yQWxsOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbCh0KX19O2Z1bmN0aW9uIHZyKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX1mdW5jdGlvbiBpcyh0LGUsbixyLGkscyl7Zm9yKHZhciBhPTAsbyxsPWUubGVuZ3RoLGY9cy5sZW5ndGg7YTxmOysrYSkobz1lW2FdKT8oby5fX2RhdGFfXz1zW2FdLHJbYV09byk6blthXT1uZXcgZWUodCxzW2FdKTtmb3IoO2E8bDsrK2EpKG89ZVthXSkmJihpW2FdPW8pfWZ1bmN0aW9uIG9zKHQsZSxuLHIsaSxzLGEpe3ZhciBvLGwsZj1uZXcgTWFwLHU9ZS5sZW5ndGgsYz1zLmxlbmd0aCxoPW5ldyBBcnJheSh1KSxwO2ZvcihvPTA7bzx1OysrbykobD1lW29dKSYmKGhbb109cD1hLmNhbGwobCxsLl9fZGF0YV9fLG8sZSkrXCJcIixmLmhhcyhwKT9pW29dPWw6Zi5zZXQocCxsKSk7Zm9yKG89MDtvPGM7KytvKXA9YS5jYWxsKHQsc1tvXSxvLHMpK1wiXCIsKGw9Zi5nZXQocCkpPyhyW29dPWwsbC5fX2RhdGFfXz1zW29dLGYuZGVsZXRlKHApKTpuW29dPW5ldyBlZSh0LHNbb10pO2ZvcihvPTA7bzx1OysrbykobD1lW29dKSYmZi5nZXQoaFtvXSk9PT1sJiYoaVtvXT1sKX1mdW5jdGlvbiBzcyh0KXtyZXR1cm4gdC5fX2RhdGFfX31mdW5jdGlvbiBfcih0LGUpe2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiBBcnJheS5mcm9tKHRoaXMsc3MpO3ZhciBuPWU/b3M6aXMscj10aGlzLl9wYXJlbnRzLGk9dGhpcy5fZ3JvdXBzO3R5cGVvZiB0IT1cImZ1bmN0aW9uXCImJih0PXZyKHQpKTtmb3IodmFyIHM9aS5sZW5ndGgsYT1uZXcgQXJyYXkocyksbz1uZXcgQXJyYXkocyksbD1uZXcgQXJyYXkocyksZj0wO2Y8czsrK2Ype3ZhciB1PXJbZl0sYz1pW2ZdLGg9Yy5sZW5ndGgscD1hcyh0LmNhbGwodSx1JiZ1Ll9fZGF0YV9fLGYscikpLGQ9cC5sZW5ndGgsbT1vW2ZdPW5ldyBBcnJheShkKSx4PWFbZl09bmV3IEFycmF5KGQpLF89bFtmXT1uZXcgQXJyYXkoaCk7bih1LGMsbSx4LF8scCxlKTtmb3IodmFyIGI9MCx5PTAsdyxUO2I8ZDsrK2IpaWYodz1tW2JdKXtmb3IoYj49eSYmKHk9YisxKTshKFQ9eFt5XSkmJisreTxkOyk7dy5fbmV4dD1UfHxudWxsfX1yZXR1cm4gYT1uZXcgQihhLHIpLGEuX2VudGVyPW8sYS5fZXhpdD1sLGF9ZnVuY3Rpb24gYXModCl7cmV0dXJuIHR5cGVvZiB0PT1cIm9iamVjdFwiJiZcImxlbmd0aFwiaW4gdD90OkFycmF5LmZyb20odCl9ZnVuY3Rpb24geXIoKXtyZXR1cm4gbmV3IEIodGhpcy5fZXhpdHx8dGhpcy5fZ3JvdXBzLm1hcChUZSksdGhpcy5fcGFyZW50cyl9ZnVuY3Rpb24gd3IodCxlLG4pe3ZhciByPXRoaXMuZW50ZXIoKSxpPXRoaXMscz10aGlzLmV4aXQoKTtyZXR1cm4gdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj8ocj10KHIpLHImJihyPXIuc2VsZWN0aW9uKCkpKTpyPXIuYXBwZW5kKHQrXCJcIiksZSE9bnVsbCYmKGk9ZShpKSxpJiYoaT1pLnNlbGVjdGlvbigpKSksbj09bnVsbD9zLnJlbW92ZSgpOm4ocyksciYmaT9yLm1lcmdlKGkpLm9yZGVyKCk6aX1mdW5jdGlvbiBicih0KXtmb3IodmFyIGU9dC5zZWxlY3Rpb24/dC5zZWxlY3Rpb24oKTp0LG49dGhpcy5fZ3JvdXBzLHI9ZS5fZ3JvdXBzLGk9bi5sZW5ndGgscz1yLmxlbmd0aCxhPU1hdGgubWluKGkscyksbz1uZXcgQXJyYXkoaSksbD0wO2w8YTsrK2wpZm9yKHZhciBmPW5bbF0sdT1yW2xdLGM9Zi5sZW5ndGgsaD1vW2xdPW5ldyBBcnJheShjKSxwLGQ9MDtkPGM7KytkKShwPWZbZF18fHVbZF0pJiYoaFtkXT1wKTtmb3IoO2w8aTsrK2wpb1tsXT1uW2xdO3JldHVybiBuZXcgQihvLHRoaXMuX3BhcmVudHMpfWZ1bmN0aW9uIGpyKCl7Zm9yKHZhciB0PXRoaXMuX2dyb3VwcyxlPS0xLG49dC5sZW5ndGg7KytlPG47KWZvcih2YXIgcj10W2VdLGk9ci5sZW5ndGgtMSxzPXJbaV0sYTstLWk+PTA7KShhPXJbaV0pJiYocyYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihzKV40JiZzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEscykscz1hKTtyZXR1cm4gdGhpc31mdW5jdGlvbiBNcih0KXt0fHwodD1scyk7ZnVuY3Rpb24gZShjLGgpe3JldHVybiBjJiZoP3QoYy5fX2RhdGFfXyxoLl9fZGF0YV9fKTohYy0haH1mb3IodmFyIG49dGhpcy5fZ3JvdXBzLHI9bi5sZW5ndGgsaT1uZXcgQXJyYXkocikscz0wO3M8cjsrK3Mpe2Zvcih2YXIgYT1uW3NdLG89YS5sZW5ndGgsbD1pW3NdPW5ldyBBcnJheShvKSxmLHU9MDt1PG87Kyt1KShmPWFbdV0pJiYobFt1XT1mKTtsLnNvcnQoZSl9cmV0dXJuIG5ldyBCKGksdGhpcy5fcGFyZW50cykub3JkZXIoKX1mdW5jdGlvbiBscyh0LGUpe3JldHVybiB0PGU/LTE6dD5lPzE6dD49ZT8wOk5hTn1mdW5jdGlvbiBBcigpe3ZhciB0PWFyZ3VtZW50c1swXTtyZXR1cm4gYXJndW1lbnRzWzBdPXRoaXMsdC5hcHBseShudWxsLGFyZ3VtZW50cyksdGhpc31mdW5jdGlvbiBrcigpe3JldHVybiBBcnJheS5mcm9tKHRoaXMpfWZ1bmN0aW9uIFRyKCl7Zm9yKHZhciB0PXRoaXMuX2dyb3VwcyxlPTAsbj10Lmxlbmd0aDtlPG47KytlKWZvcih2YXIgcj10W2VdLGk9MCxzPXIubGVuZ3RoO2k8czsrK2kpe3ZhciBhPXJbaV07aWYoYSlyZXR1cm4gYX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBJcigpe2xldCB0PTA7Zm9yKGxldCBlIG9mIHRoaXMpKyt0O3JldHVybiB0fWZ1bmN0aW9uIFNyKCl7cmV0dXJuIXRoaXMubm9kZSgpfWZ1bmN0aW9uIENyKHQpe2Zvcih2YXIgZT10aGlzLl9ncm91cHMsbj0wLHI9ZS5sZW5ndGg7bjxyOysrbilmb3IodmFyIGk9ZVtuXSxzPTAsYT1pLmxlbmd0aCxvO3M8YTsrK3MpKG89aVtzXSkmJnQuY2FsbChvLG8uX19kYXRhX18scyxpKTtyZXR1cm4gdGhpc31mdW5jdGlvbiB1cyh0KXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnJlbW92ZUF0dHJpYnV0ZSh0KX19ZnVuY3Rpb24gY3ModCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyh0LnNwYWNlLHQubG9jYWwpfX1mdW5jdGlvbiBmcyh0LGUpe3JldHVybiBmdW5jdGlvbigpe3RoaXMuc2V0QXR0cmlidXRlKHQsZSl9fWZ1bmN0aW9uIGhzKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5zZXRBdHRyaWJ1dGVOUyh0LnNwYWNlLHQubG9jYWwsZSl9fWZ1bmN0aW9uIHBzKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bj09bnVsbD90aGlzLnJlbW92ZUF0dHJpYnV0ZSh0KTp0aGlzLnNldEF0dHJpYnV0ZSh0LG4pfX1mdW5jdGlvbiBkcyh0LGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPWUuYXBwbHkodGhpcyxhcmd1bWVudHMpO249PW51bGw/dGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyh0LnNwYWNlLHQubG9jYWwpOnRoaXMuc2V0QXR0cmlidXRlTlModC5zcGFjZSx0LmxvY2FsLG4pfX1mdW5jdGlvbiBFcih0LGUpe3ZhciBuPWl0KHQpO2lmKGFyZ3VtZW50cy5sZW5ndGg8Mil7dmFyIHI9dGhpcy5ub2RlKCk7cmV0dXJuIG4ubG9jYWw/ci5nZXRBdHRyaWJ1dGVOUyhuLnNwYWNlLG4ubG9jYWwpOnIuZ2V0QXR0cmlidXRlKG4pfXJldHVybiB0aGlzLmVhY2goKGU9PW51bGw/bi5sb2NhbD9jczp1czp0eXBlb2YgZT09XCJmdW5jdGlvblwiP24ubG9jYWw/ZHM6cHM6bi5sb2NhbD9oczpmcykobixlKSl9ZnVuY3Rpb24gSWUodCl7cmV0dXJuIHQub3duZXJEb2N1bWVudCYmdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx0LmRvY3VtZW50JiZ0fHx0LmRlZmF1bHRWaWV3fWZ1bmN0aW9uIG1zKHQpe3JldHVybiBmdW5jdGlvbigpe3RoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkodCl9fWZ1bmN0aW9uIGdzKHQsZSxuKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnN0eWxlLnNldFByb3BlcnR5KHQsZSxuKX19ZnVuY3Rpb24geHModCxlLG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciByPWUuYXBwbHkodGhpcyxhcmd1bWVudHMpO3I9PW51bGw/dGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSh0KTp0aGlzLnN0eWxlLnNldFByb3BlcnR5KHQscixuKX19ZnVuY3Rpb24gTnIodCxlLG4pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjE/dGhpcy5lYWNoKChlPT1udWxsP21zOnR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/eHM6Z3MpKHQsZSxuPz9cIlwiKSk6Y3QodGhpcy5ub2RlKCksdCl9ZnVuY3Rpb24gY3QodCxlKXtyZXR1cm4gdC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGUpfHxJZSh0KS5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShlKX1mdW5jdGlvbiB2cyh0KXtyZXR1cm4gZnVuY3Rpb24oKXtkZWxldGUgdGhpc1t0XX19ZnVuY3Rpb24gX3ModCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzW3RdPWV9fWZ1bmN0aW9uIHlzKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bj09bnVsbD9kZWxldGUgdGhpc1t0XTp0aGlzW3RdPW59fWZ1bmN0aW9uIE9yKHQsZSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MT90aGlzLmVhY2goKGU9PW51bGw/dnM6dHlwZW9mIGU9PVwiZnVuY3Rpb25cIj95czpfcykodCxlKSk6dGhpcy5ub2RlKClbdF19ZnVuY3Rpb24gUHIodCl7cmV0dXJuIHQudHJpbSgpLnNwbGl0KC9efFxccysvKX1mdW5jdGlvbiB5bih0KXtyZXR1cm4gdC5jbGFzc0xpc3R8fG5ldyBEcih0KX1mdW5jdGlvbiBEcih0KXt0aGlzLl9ub2RlPXQsdGhpcy5fbmFtZXM9UHIodC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9RHIucHJvdG90eXBlPXthZGQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fbmFtZXMuaW5kZXhPZih0KTtlPDAmJih0aGlzLl9uYW1lcy5wdXNoKHQpLHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSkpfSxyZW1vdmU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fbmFtZXMuaW5kZXhPZih0KTtlPj0wJiYodGhpcy5fbmFtZXMuc3BsaWNlKGUsMSksdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKSl9LGNvbnRhaW5zOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKHQpPj0wfX07ZnVuY3Rpb24gcXIodCxlKXtmb3IodmFyIG49eW4odCkscj0tMSxpPWUubGVuZ3RoOysrcjxpOyluLmFkZChlW3JdKX1mdW5jdGlvbiBYcih0LGUpe2Zvcih2YXIgbj15bih0KSxyPS0xLGk9ZS5sZW5ndGg7KytyPGk7KW4ucmVtb3ZlKGVbcl0pfWZ1bmN0aW9uIHdzKHQpe3JldHVybiBmdW5jdGlvbigpe3FyKHRoaXMsdCl9fWZ1bmN0aW9uIGJzKHQpe3JldHVybiBmdW5jdGlvbigpe1hyKHRoaXMsdCl9fWZ1bmN0aW9uIGpzKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7KGUuYXBwbHkodGhpcyxhcmd1bWVudHMpP3FyOlhyKSh0aGlzLHQpfX1mdW5jdGlvbiB6cih0LGUpe3ZhciBuPVByKHQrXCJcIik7aWYoYXJndW1lbnRzLmxlbmd0aDwyKXtmb3IodmFyIHI9eW4odGhpcy5ub2RlKCkpLGk9LTEscz1uLmxlbmd0aDsrK2k8czspaWYoIXIuY29udGFpbnMobltpXSkpcmV0dXJuITE7cmV0dXJuITB9cmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIGU9PVwiZnVuY3Rpb25cIj9qczplP3dzOmJzKShuLGUpKX1mdW5jdGlvbiBNcygpe3RoaXMudGV4dENvbnRlbnQ9XCJcIn1mdW5jdGlvbiBBcyh0KXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnRleHRDb250ZW50PXR9fWZ1bmN0aW9uIGtzKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3RoaXMudGV4dENvbnRlbnQ9ZT8/XCJcIn19ZnVuY3Rpb24gUnIodCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5lYWNoKHQ9PW51bGw/TXM6KHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/a3M6QXMpKHQpKTp0aGlzLm5vZGUoKS50ZXh0Q29udGVudH1mdW5jdGlvbiBUcygpe3RoaXMuaW5uZXJIVE1MPVwiXCJ9ZnVuY3Rpb24gSXModCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5pbm5lckhUTUw9dH19ZnVuY3Rpb24gU3ModCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dGhpcy5pbm5lckhUTUw9ZT8/XCJcIn19ZnVuY3Rpb24gQnIodCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5lYWNoKHQ9PW51bGw/VHM6KHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/U3M6SXMpKHQpKTp0aGlzLm5vZGUoKS5pbm5lckhUTUx9ZnVuY3Rpb24gQ3MoKXt0aGlzLm5leHRTaWJsaW5nJiZ0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyl9ZnVuY3Rpb24gRnIoKXtyZXR1cm4gdGhpcy5lYWNoKENzKX1mdW5jdGlvbiBFcygpe3RoaXMucHJldmlvdXNTaWJsaW5nJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIExyKCl7cmV0dXJuIHRoaXMuZWFjaChFcyl9ZnVuY3Rpb24gVnIodCl7dmFyIGU9dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90OkFlKHQpO3JldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpe3JldHVybiB0aGlzLmFwcGVuZENoaWxkKGUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0pfWZ1bmN0aW9uIE5zKCl7cmV0dXJuIG51bGx9ZnVuY3Rpb24gWXIodCxlKXt2YXIgbj10eXBlb2YgdD09XCJmdW5jdGlvblwiP3Q6QWUodCkscj1lPT1udWxsP05zOnR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/ZTpDdChlKTtyZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobi5hcHBseSh0aGlzLGFyZ3VtZW50cyksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fG51bGwpfSl9ZnVuY3Rpb24gT3MoKXt2YXIgdD10aGlzLnBhcmVudE5vZGU7dCYmdC5yZW1vdmVDaGlsZCh0aGlzKX1mdW5jdGlvbiBIcigpe3JldHVybiB0aGlzLmVhY2goT3MpfWZ1bmN0aW9uIFBzKCl7dmFyIHQ9dGhpcy5jbG9uZU5vZGUoITEpLGU9dGhpcy5wYXJlbnROb2RlO3JldHVybiBlP2UuaW5zZXJ0QmVmb3JlKHQsdGhpcy5uZXh0U2libGluZyk6dH1mdW5jdGlvbiBEcygpe3ZhciB0PXRoaXMuY2xvbmVOb2RlKCEwKSxlPXRoaXMucGFyZW50Tm9kZTtyZXR1cm4gZT9lLmluc2VydEJlZm9yZSh0LHRoaXMubmV4dFNpYmxpbmcpOnR9ZnVuY3Rpb24gR3IodCl7cmV0dXJuIHRoaXMuc2VsZWN0KHQ/RHM6UHMpfWZ1bmN0aW9uICRyKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3RoaXMucHJvcGVydHkoXCJfX2RhdGFfX1wiLHQpOnRoaXMubm9kZSgpLl9fZGF0YV9ffWZ1bmN0aW9uIHFzKHQpe3JldHVybiBmdW5jdGlvbihlKXt0LmNhbGwodGhpcyxlLHRoaXMuX19kYXRhX18pfX1mdW5jdGlvbiBYcyh0KXtyZXR1cm4gdC50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbihlKXt2YXIgbj1cIlwiLHI9ZS5pbmRleE9mKFwiLlwiKTtyZXR1cm4gcj49MCYmKG49ZS5zbGljZShyKzEpLGU9ZS5zbGljZSgwLHIpKSx7dHlwZTplLG5hbWU6bn19KX1mdW5jdGlvbiB6cyh0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9fb247aWYoISFlKXtmb3IodmFyIG49MCxyPS0xLGk9ZS5sZW5ndGgscztuPGk7KytuKXM9ZVtuXSwoIXQudHlwZXx8cy50eXBlPT09dC50eXBlKSYmcy5uYW1lPT09dC5uYW1lP3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLnR5cGUscy5saXN0ZW5lcixzLm9wdGlvbnMpOmVbKytyXT1zOysrcj9lLmxlbmd0aD1yOmRlbGV0ZSB0aGlzLl9fb259fX1mdW5jdGlvbiBScyh0LGUsbil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHI9dGhpcy5fX29uLGkscz1xcyhlKTtpZihyKXtmb3IodmFyIGE9MCxvPXIubGVuZ3RoO2E8bzsrK2EpaWYoKGk9clthXSkudHlwZT09PXQudHlwZSYmaS5uYW1lPT09dC5uYW1lKXt0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS50eXBlLGkubGlzdGVuZXIsaS5vcHRpb25zKSx0aGlzLmFkZEV2ZW50TGlzdGVuZXIoaS50eXBlLGkubGlzdGVuZXI9cyxpLm9wdGlvbnM9biksaS52YWx1ZT1lO3JldHVybn19dGhpcy5hZGRFdmVudExpc3RlbmVyKHQudHlwZSxzLG4pLGk9e3R5cGU6dC50eXBlLG5hbWU6dC5uYW1lLHZhbHVlOmUsbGlzdGVuZXI6cyxvcHRpb25zOm59LHI/ci5wdXNoKGkpOnRoaXMuX19vbj1baV19fWZ1bmN0aW9uIFFyKHQsZSxuKXt2YXIgcj1Ycyh0K1wiXCIpLGkscz1yLmxlbmd0aCxhO2lmKGFyZ3VtZW50cy5sZW5ndGg8Mil7dmFyIG89dGhpcy5ub2RlKCkuX19vbjtpZihvKXtmb3IodmFyIGw9MCxmPW8ubGVuZ3RoLHU7bDxmOysrbClmb3IoaT0wLHU9b1tsXTtpPHM7KytpKWlmKChhPXJbaV0pLnR5cGU9PT11LnR5cGUmJmEubmFtZT09PXUubmFtZSlyZXR1cm4gdS52YWx1ZX1yZXR1cm59Zm9yKG89ZT9Sczp6cyxpPTA7aTxzOysraSl0aGlzLmVhY2gobyhyW2ldLGUsbikpO3JldHVybiB0aGlzfWZ1bmN0aW9uIFVyKHQsZSxuKXt2YXIgcj1JZSh0KSxpPXIuQ3VzdG9tRXZlbnQ7dHlwZW9mIGk9PVwiZnVuY3Rpb25cIj9pPW5ldyBpKGUsbik6KGk9ci5kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpLG4/KGkuaW5pdEV2ZW50KGUsbi5idWJibGVzLG4uY2FuY2VsYWJsZSksaS5kZXRhaWw9bi5kZXRhaWwpOmkuaW5pdEV2ZW50KGUsITEsITEpKSx0LmRpc3BhdGNoRXZlbnQoaSl9ZnVuY3Rpb24gQnModCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gVXIodGhpcyx0LGUpfX1mdW5jdGlvbiBGcyh0LGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBVcih0aGlzLHQsZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfX1mdW5jdGlvbiBLcih0LGUpe3JldHVybiB0aGlzLmVhY2goKHR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/RnM6QnMpKHQsZSkpfWZ1bmN0aW9uKlpyKCl7Zm9yKHZhciB0PXRoaXMuX2dyb3VwcyxlPTAsbj10Lmxlbmd0aDtlPG47KytlKWZvcih2YXIgcj10W2VdLGk9MCxzPXIubGVuZ3RoLGE7aTxzOysraSkoYT1yW2ldKSYmKHlpZWxkIGEpfXZhciBMcz1bbnVsbF07ZnVuY3Rpb24gQih0LGUpe3RoaXMuX2dyb3Vwcz10LHRoaXMuX3BhcmVudHM9ZX1mdW5jdGlvbiBXcigpe3JldHVybiBuZXcgQihbW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF1dLExzKX1mdW5jdGlvbiBWcygpe3JldHVybiB0aGlzfUIucHJvdG90eXBlPVdyLnByb3RvdHlwZT17Y29uc3RydWN0b3I6QixzZWxlY3Q6aHIsc2VsZWN0QWxsOnByLHNlbGVjdENoaWxkOmRyLHNlbGVjdENoaWxkcmVuOm1yLGZpbHRlcjpncixkYXRhOl9yLGVudGVyOnhyLGV4aXQ6eXIsam9pbjp3cixtZXJnZTpicixzZWxlY3Rpb246VnMsb3JkZXI6anIsc29ydDpNcixjYWxsOkFyLG5vZGVzOmtyLG5vZGU6VHIsc2l6ZTpJcixlbXB0eTpTcixlYWNoOkNyLGF0dHI6RXIsc3R5bGU6TnIscHJvcGVydHk6T3IsY2xhc3NlZDp6cix0ZXh0OlJyLGh0bWw6QnIscmFpc2U6RnIsbG93ZXI6THIsYXBwZW5kOlZyLGluc2VydDpZcixyZW1vdmU6SHIsY2xvbmU6R3IsZGF0dW06JHIsb246UXIsZGlzcGF0Y2g6S3IsW1N5bWJvbC5pdGVyYXRvcl06WnJ9O3ZhciBvdD1XcjtmdW5jdGlvbiBTZSh0LGUsbil7dC5wcm90b3R5cGU9ZS5wcm90b3R5cGU9bixuLmNvbnN0cnVjdG9yPXR9ZnVuY3Rpb24gd24odCxlKXt2YXIgbj1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlKTtmb3IodmFyIHIgaW4gZSluW3JdPWVbcl07cmV0dXJuIG59ZnVuY3Rpb24gbmUoKXt9dmFyIHJlPS43LENlPTEvcmUscXQ9XCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsaWU9XCJcXFxccyooWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcXFxccypcIixXPVwiXFxcXHMqKFsrLV0/XFxcXGQqXFxcXC4/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pJVxcXFxzKlwiLFlzPS9eIyhbMC05YS1mXXszLDh9KSQvLEhzPW5ldyBSZWdFeHAoXCJecmdiXFxcXChcIitbcXQscXQscXRdK1wiXFxcXCkkXCIpLEdzPW5ldyBSZWdFeHAoXCJecmdiXFxcXChcIitbVyxXLFddK1wiXFxcXCkkXCIpLCRzPW5ldyBSZWdFeHAoXCJecmdiYVxcXFwoXCIrW3F0LHF0LHF0LGllXStcIlxcXFwpJFwiKSxRcz1uZXcgUmVnRXhwKFwiXnJnYmFcXFxcKFwiK1tXLFcsVyxpZV0rXCJcXFxcKSRcIiksVXM9bmV3IFJlZ0V4cChcIl5oc2xcXFxcKFwiK1tpZSxXLFddK1wiXFxcXCkkXCIpLEtzPW5ldyBSZWdFeHAoXCJeaHNsYVxcXFwoXCIrW2llLFcsVyxpZV0rXCJcXFxcKSRcIiksSnI9e2FsaWNlYmx1ZToxNTc5MjM4MyxhbnRpcXVld2hpdGU6MTY0NDQzNzUsYXF1YTo2NTUzNSxhcXVhbWFyaW5lOjgzODg1NjQsYXp1cmU6MTU3OTQxNzUsYmVpZ2U6MTYxMTkyNjAsYmlzcXVlOjE2NzcwMjQ0LGJsYWNrOjAsYmxhbmNoZWRhbG1vbmQ6MTY3NzIwNDUsYmx1ZToyNTUsYmx1ZXZpb2xldDo5MDU1MjAyLGJyb3duOjEwODI0MjM0LGJ1cmx5d29vZDoxNDU5NjIzMSxjYWRldGJsdWU6NjI2NjUyOCxjaGFydHJldXNlOjgzODgzNTIsY2hvY29sYXRlOjEzNzg5NDcwLGNvcmFsOjE2NzQ0MjcyLGNvcm5mbG93ZXJibHVlOjY1OTE5ODEsY29ybnNpbGs6MTY3NzUzODgsY3JpbXNvbjoxNDQyMzEwMCxjeWFuOjY1NTM1LGRhcmtibHVlOjEzOSxkYXJrY3lhbjozNTcyMyxkYXJrZ29sZGVucm9kOjEyMDkyOTM5LGRhcmtncmF5OjExMTE5MDE3LGRhcmtncmVlbjoyNTYwMCxkYXJrZ3JleToxMTExOTAxNyxkYXJra2hha2k6MTI0MzMyNTksZGFya21hZ2VudGE6OTEwOTY0MyxkYXJrb2xpdmVncmVlbjo1NTk3OTk5LGRhcmtvcmFuZ2U6MTY3NDc1MjAsZGFya29yY2hpZDoxMDA0MDAxMixkYXJrcmVkOjkxMDk1MDQsZGFya3NhbG1vbjoxNTMwODQxMCxkYXJrc2VhZ3JlZW46OTQxOTkxOSxkYXJrc2xhdGVibHVlOjQ3MzQzNDcsZGFya3NsYXRlZ3JheTozMTAwNDk1LGRhcmtzbGF0ZWdyZXk6MzEwMDQ5NSxkYXJrdHVycXVvaXNlOjUyOTQ1LGRhcmt2aW9sZXQ6OTY5OTUzOSxkZWVwcGluazoxNjcxNjk0NyxkZWVwc2t5Ymx1ZTo0OTE1MSxkaW1ncmF5OjY5MDgyNjUsZGltZ3JleTo2OTA4MjY1LGRvZGdlcmJsdWU6MjAwMzE5OSxmaXJlYnJpY2s6MTE2NzQxNDYsZmxvcmFsd2hpdGU6MTY3NzU5MjAsZm9yZXN0Z3JlZW46MjI2Mzg0MixmdWNoc2lhOjE2NzExOTM1LGdhaW5zYm9ybzoxNDQ3NDQ2MCxnaG9zdHdoaXRlOjE2MzE2NjcxLGdvbGQ6MTY3NjY3MjAsZ29sZGVucm9kOjE0MzI5MTIwLGdyYXk6ODQyMTUwNCxncmVlbjozMjc2OCxncmVlbnllbGxvdzoxMTQwMzA1NSxncmV5Ojg0MjE1MDQsaG9uZXlkZXc6MTU3OTQxNjAsaG90cGluazoxNjczODc0MCxpbmRpYW5yZWQ6MTM0NTg1MjQsaW5kaWdvOjQ5MTUzMzAsaXZvcnk6MTY3NzcyMDAsa2hha2k6MTU3ODc2NjAsbGF2ZW5kZXI6MTUxMzI0MTAsbGF2ZW5kZXJibHVzaDoxNjc3MzM2NSxsYXduZ3JlZW46ODE5MDk3NixsZW1vbmNoaWZmb246MTY3NzU4ODUsbGlnaHRibHVlOjExMzkzMjU0LGxpZ2h0Y29yYWw6MTU3NjE1MzYsbGlnaHRjeWFuOjE0NzQ1NTk5LGxpZ2h0Z29sZGVucm9keWVsbG93OjE2NDQ4MjEwLGxpZ2h0Z3JheToxMzg4MjMyMyxsaWdodGdyZWVuOjk0OTgyNTYsbGlnaHRncmV5OjEzODgyMzIzLGxpZ2h0cGluazoxNjc1ODQ2NSxsaWdodHNhbG1vbjoxNjc1Mjc2MixsaWdodHNlYWdyZWVuOjIxNDI4OTAsbGlnaHRza3libHVlOjg5MDAzNDYsbGlnaHRzbGF0ZWdyYXk6NzgzMzc1MyxsaWdodHNsYXRlZ3JleTo3ODMzNzUzLGxpZ2h0c3RlZWxibHVlOjExNTg0NzM0LGxpZ2h0eWVsbG93OjE2Nzc3MTg0LGxpbWU6NjUyODAsbGltZWdyZWVuOjMzMjkzMzAsbGluZW46MTY0NDU2NzAsbWFnZW50YToxNjcxMTkzNSxtYXJvb246ODM4ODYwOCxtZWRpdW1hcXVhbWFyaW5lOjY3MzczMjIsbWVkaXVtYmx1ZToyMDUsbWVkaXVtb3JjaGlkOjEyMjExNjY3LG1lZGl1bXB1cnBsZTo5NjYyNjgzLG1lZGl1bXNlYWdyZWVuOjM5NzgwOTcsbWVkaXVtc2xhdGVibHVlOjgwODc3OTAsbWVkaXVtc3ByaW5nZ3JlZW46NjQxNTQsbWVkaXVtdHVycXVvaXNlOjQ3NzIzMDAsbWVkaXVtdmlvbGV0cmVkOjEzMDQ3MTczLG1pZG5pZ2h0Ymx1ZToxNjQ0OTEyLG1pbnRjcmVhbToxNjEyMTg1MCxtaXN0eXJvc2U6MTY3NzAyNzMsbW9jY2FzaW46MTY3NzAyMjksbmF2YWpvd2hpdGU6MTY3Njg2ODUsbmF2eToxMjgsb2xkbGFjZToxNjY0MzU1OCxvbGl2ZTo4NDIxMzc2LG9saXZlZHJhYjo3MDQ4NzM5LG9yYW5nZToxNjc1MzkyMCxvcmFuZ2VyZWQ6MTY3MjkzNDQsb3JjaGlkOjE0MzE1NzM0LHBhbGVnb2xkZW5yb2Q6MTU2NTcxMzAscGFsZWdyZWVuOjEwMDI1ODgwLHBhbGV0dXJxdW9pc2U6MTE1Mjk5NjYscGFsZXZpb2xldHJlZDoxNDM4MTIwMyxwYXBheWF3aGlwOjE2NzczMDc3LHBlYWNocHVmZjoxNjc2NzY3MyxwZXJ1OjEzNDY4OTkxLHBpbms6MTY3NjEwMzUscGx1bToxNDUyNDYzNyxwb3dkZXJibHVlOjExNTkxOTEwLHB1cnBsZTo4Mzg4NzM2LHJlYmVjY2FwdXJwbGU6NjY5Nzg4MSxyZWQ6MTY3MTE2ODAscm9zeWJyb3duOjEyMzU3NTE5LHJveWFsYmx1ZTo0Mjg2OTQ1LHNhZGRsZWJyb3duOjkxMjcxODcsc2FsbW9uOjE2NDE2ODgyLHNhbmR5YnJvd246MTYwMzI4NjQsc2VhZ3JlZW46MzA1MDMyNyxzZWFzaGVsbDoxNjc3NDYzOCxzaWVubmE6MTA1MDY3OTcsc2lsdmVyOjEyNjMyMjU2LHNreWJsdWU6ODkwMDMzMSxzbGF0ZWJsdWU6Njk3MDA2MSxzbGF0ZWdyYXk6NzM3Mjk0NCxzbGF0ZWdyZXk6NzM3Mjk0NCxzbm93OjE2Nzc1OTMwLHNwcmluZ2dyZWVuOjY1NDA3LHN0ZWVsYmx1ZTo0NjIwOTgwLHRhbjoxMzgwODc4MCx0ZWFsOjMyODk2LHRoaXN0bGU6MTQyMDQ4ODgsdG9tYXRvOjE2NzM3MDk1LHR1cnF1b2lzZTo0MjUxODU2LHZpb2xldDoxNTYzMTA4Nix3aGVhdDoxNjExMzMzMSx3aGl0ZToxNjc3NzIxNSx3aGl0ZXNtb2tlOjE2MTE5Mjg1LHllbGxvdzoxNjc3Njk2MCx5ZWxsb3dncmVlbjoxMDE0NTA3NH07U2UobmUsZnQse2NvcHk6ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IHRoaXMuY29uc3RydWN0b3IsdGhpcyx0KX0sZGlzcGxheWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZ2IoKS5kaXNwbGF5YWJsZSgpfSxoZXg6dGksZm9ybWF0SGV4OnRpLGZvcm1hdEhzbDpacyxmb3JtYXRSZ2I6ZWksdG9TdHJpbmc6ZWl9KTtmdW5jdGlvbiB0aSgpe3JldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleCgpfWZ1bmN0aW9uIFpzKCl7cmV0dXJuIHNpKHRoaXMpLmZvcm1hdEhzbCgpfWZ1bmN0aW9uIGVpKCl7cmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0UmdiKCl9ZnVuY3Rpb24gZnQodCl7dmFyIGUsbjtyZXR1cm4gdD0odCtcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKSwoZT1Zcy5leGVjKHQpKT8obj1lWzFdLmxlbmd0aCxlPXBhcnNlSW50KGVbMV0sMTYpLG49PT02P25pKGUpOm49PT0zP25ldyAkKGU+PjgmMTV8ZT4+NCYyNDAsZT4+NCYxNXxlJjI0MCwoZSYxNSk8PDR8ZSYxNSwxKTpuPT09OD9FZShlPj4yNCYyNTUsZT4+MTYmMjU1LGU+PjgmMjU1LChlJjI1NSkvMjU1KTpuPT09ND9FZShlPj4xMiYxNXxlPj44JjI0MCxlPj44JjE1fGU+PjQmMjQwLGU+PjQmMTV8ZSYyNDAsKChlJjE1KTw8NHxlJjE1KS8yNTUpOm51bGwpOihlPUhzLmV4ZWModCkpP25ldyAkKGVbMV0sZVsyXSxlWzNdLDEpOihlPUdzLmV4ZWModCkpP25ldyAkKGVbMV0qMjU1LzEwMCxlWzJdKjI1NS8xMDAsZVszXSoyNTUvMTAwLDEpOihlPSRzLmV4ZWModCkpP0VlKGVbMV0sZVsyXSxlWzNdLGVbNF0pOihlPVFzLmV4ZWModCkpP0VlKGVbMV0qMjU1LzEwMCxlWzJdKjI1NS8xMDAsZVszXSoyNTUvMTAwLGVbNF0pOihlPVVzLmV4ZWModCkpP29pKGVbMV0sZVsyXS8xMDAsZVszXS8xMDAsMSk6KGU9S3MuZXhlYyh0KSk/b2koZVsxXSxlWzJdLzEwMCxlWzNdLzEwMCxlWzRdKTpKci5oYXNPd25Qcm9wZXJ0eSh0KT9uaShKclt0XSk6dD09PVwidHJhbnNwYXJlbnRcIj9uZXcgJChOYU4sTmFOLE5hTiwwKTpudWxsfWZ1bmN0aW9uIG5pKHQpe3JldHVybiBuZXcgJCh0Pj4xNiYyNTUsdD4+OCYyNTUsdCYyNTUsMSl9ZnVuY3Rpb24gRWUodCxlLG4scil7cmV0dXJuIHI8PTAmJih0PWU9bj1OYU4pLG5ldyAkKHQsZSxuLHIpfWZ1bmN0aW9uIFdzKHQpe3JldHVybiB0IGluc3RhbmNlb2YgbmV8fCh0PWZ0KHQpKSx0Pyh0PXQucmdiKCksbmV3ICQodC5yLHQuZyx0LmIsdC5vcGFjaXR5KSk6bmV3ICR9ZnVuY3Rpb24gWHQodCxlLG4scil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg9PT0xP1dzKHQpOm5ldyAkKHQsZSxuLHI/PzEpfWZ1bmN0aW9uICQodCxlLG4scil7dGhpcy5yPSt0LHRoaXMuZz0rZSx0aGlzLmI9K24sdGhpcy5vcGFjaXR5PStyfVNlKCQsWHQsd24obmUse2JyaWdodGVyOmZ1bmN0aW9uKHQpe3JldHVybiB0PXQ9PW51bGw/Q2U6TWF0aC5wb3coQ2UsdCksbmV3ICQodGhpcy5yKnQsdGhpcy5nKnQsdGhpcy5iKnQsdGhpcy5vcGFjaXR5KX0sZGFya2VyOmZ1bmN0aW9uKHQpe3JldHVybiB0PXQ9PW51bGw/cmU6TWF0aC5wb3cocmUsdCksbmV3ICQodGhpcy5yKnQsdGhpcy5nKnQsdGhpcy5iKnQsdGhpcy5vcGFjaXR5KX0scmdiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGRpc3BsYXlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuLS41PD10aGlzLnImJnRoaXMucjwyNTUuNSYmLS41PD10aGlzLmcmJnRoaXMuZzwyNTUuNSYmLS41PD10aGlzLmImJnRoaXMuYjwyNTUuNSYmMDw9dGhpcy5vcGFjaXR5JiZ0aGlzLm9wYWNpdHk8PTF9LGhleDpyaSxmb3JtYXRIZXg6cmksZm9ybWF0UmdiOmlpLHRvU3RyaW5nOmlpfSkpO2Z1bmN0aW9uIHJpKCl7cmV0dXJuXCIjXCIrYm4odGhpcy5yKStibih0aGlzLmcpK2JuKHRoaXMuYil9ZnVuY3Rpb24gaWkoKXt2YXIgdD10aGlzLm9wYWNpdHk7cmV0dXJuIHQ9aXNOYU4odCk/MTpNYXRoLm1heCgwLE1hdGgubWluKDEsdCkpLCh0PT09MT9cInJnYihcIjpcInJnYmEoXCIpK01hdGgubWF4KDAsTWF0aC5taW4oMjU1LE1hdGgucm91bmQodGhpcy5yKXx8MCkpK1wiLCBcIitNYXRoLm1heCgwLE1hdGgubWluKDI1NSxNYXRoLnJvdW5kKHRoaXMuZyl8fDApKStcIiwgXCIrTWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsTWF0aC5yb3VuZCh0aGlzLmIpfHwwKSkrKHQ9PT0xP1wiKVwiOlwiLCBcIit0K1wiKVwiKX1mdW5jdGlvbiBibih0KXtyZXR1cm4gdD1NYXRoLm1heCgwLE1hdGgubWluKDI1NSxNYXRoLnJvdW5kKHQpfHwwKSksKHQ8MTY/XCIwXCI6XCJcIikrdC50b1N0cmluZygxNil9ZnVuY3Rpb24gb2kodCxlLG4scil7cmV0dXJuIHI8PTA/dD1lPW49TmFOOm48PTB8fG4+PTE/dD1lPU5hTjplPD0wJiYodD1OYU4pLG5ldyBKKHQsZSxuLHIpfWZ1bmN0aW9uIHNpKHQpe2lmKHQgaW5zdGFuY2VvZiBKKXJldHVybiBuZXcgSih0LmgsdC5zLHQubCx0Lm9wYWNpdHkpO2lmKHQgaW5zdGFuY2VvZiBuZXx8KHQ9ZnQodCkpLCF0KXJldHVybiBuZXcgSjtpZih0IGluc3RhbmNlb2YgSilyZXR1cm4gdDt0PXQucmdiKCk7dmFyIGU9dC5yLzI1NSxuPXQuZy8yNTUscj10LmIvMjU1LGk9TWF0aC5taW4oZSxuLHIpLHM9TWF0aC5tYXgoZSxuLHIpLGE9TmFOLG89cy1pLGw9KHMraSkvMjtyZXR1cm4gbz8oZT09PXM/YT0obi1yKS9vKyhuPHIpKjY6bj09PXM/YT0oci1lKS9vKzI6YT0oZS1uKS9vKzQsby89bDwuNT9zK2k6Mi1zLWksYSo9NjApOm89bD4wJiZsPDE/MDphLG5ldyBKKGEsbyxsLHQub3BhY2l0eSl9ZnVuY3Rpb24gYWkodCxlLG4scil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg9PT0xP3NpKHQpOm5ldyBKKHQsZSxuLHI/PzEpfWZ1bmN0aW9uIEoodCxlLG4scil7dGhpcy5oPSt0LHRoaXMucz0rZSx0aGlzLmw9K24sdGhpcy5vcGFjaXR5PStyfVNlKEosYWksd24obmUse2JyaWdodGVyOmZ1bmN0aW9uKHQpe3JldHVybiB0PXQ9PW51bGw/Q2U6TWF0aC5wb3coQ2UsdCksbmV3IEoodGhpcy5oLHRoaXMucyx0aGlzLmwqdCx0aGlzLm9wYWNpdHkpfSxkYXJrZXI6ZnVuY3Rpb24odCl7cmV0dXJuIHQ9dD09bnVsbD9yZTpNYXRoLnBvdyhyZSx0KSxuZXcgSih0aGlzLmgsdGhpcy5zLHRoaXMubCp0LHRoaXMub3BhY2l0eSl9LHJnYjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuaCUzNjArKHRoaXMuaDwwKSozNjAsZT1pc05hTih0KXx8aXNOYU4odGhpcy5zKT8wOnRoaXMucyxuPXRoaXMubCxyPW4rKG48LjU/bjoxLW4pKmUsaT0yKm4tcjtyZXR1cm4gbmV3ICQoam4odD49MjQwP3QtMjQwOnQrMTIwLGksciksam4odCxpLHIpLGpuKHQ8MTIwP3QrMjQwOnQtMTIwLGksciksdGhpcy5vcGFjaXR5KX0sZGlzcGxheWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4oMDw9dGhpcy5zJiZ0aGlzLnM8PTF8fGlzTmFOKHRoaXMucykpJiYwPD10aGlzLmwmJnRoaXMubDw9MSYmMDw9dGhpcy5vcGFjaXR5JiZ0aGlzLm9wYWNpdHk8PTF9LGZvcm1hdEhzbDpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3BhY2l0eTtyZXR1cm4gdD1pc05hTih0KT8xOk1hdGgubWF4KDAsTWF0aC5taW4oMSx0KSksKHQ9PT0xP1wiaHNsKFwiOlwiaHNsYShcIikrKHRoaXMuaHx8MCkrXCIsIFwiKyh0aGlzLnN8fDApKjEwMCtcIiUsIFwiKyh0aGlzLmx8fDApKjEwMCtcIiVcIisodD09PTE/XCIpXCI6XCIsIFwiK3QrXCIpXCIpfX0pKTtmdW5jdGlvbiBqbih0LGUsbil7cmV0dXJuKHQ8NjA/ZSsobi1lKSp0LzYwOnQ8MTgwP246dDwyNDA/ZSsobi1lKSooMjQwLXQpLzYwOmUpKjI1NX1mdW5jdGlvbiBNbih0LGUsbixyLGkpe3ZhciBzPXQqdCxhPXMqdDtyZXR1cm4oKDEtMyp0KzMqcy1hKSplKyg0LTYqcyszKmEpKm4rKDErMyp0KzMqcy0zKmEpKnIrYSppKS82fWZ1bmN0aW9uIGxpKHQpe3ZhciBlPXQubGVuZ3RoLTE7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciByPW48PTA/bj0wOm4+PTE/KG49MSxlLTEpOk1hdGguZmxvb3IobiplKSxpPXRbcl0scz10W3IrMV0sYT1yPjA/dFtyLTFdOjIqaS1zLG89cjxlLTE/dFtyKzJdOjIqcy1pO3JldHVybiBNbigobi1yL2UpKmUsYSxpLHMsbyl9fWZ1bmN0aW9uIHVpKHQpe3ZhciBlPXQubGVuZ3RoO3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj1NYXRoLmZsb29yKCgobiU9MSk8MD8rK246bikqZSksaT10WyhyK2UtMSklZV0scz10W3IlZV0sYT10WyhyKzEpJWVdLG89dFsocisyKSVlXTtyZXR1cm4gTW4oKG4tci9lKSplLGkscyxhLG8pfX12YXIgQW49dD0+KCk9PnQ7ZnVuY3Rpb24gSnModCxlKXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQrbiplfX1mdW5jdGlvbiB0YSh0LGUsbil7cmV0dXJuIHQ9TWF0aC5wb3codCxuKSxlPU1hdGgucG93KGUsbiktdCxuPTEvbixmdW5jdGlvbihyKXtyZXR1cm4gTWF0aC5wb3codCtyKmUsbil9fWZ1bmN0aW9uIGNpKHQpe3JldHVybih0PSt0KT09MT9OZTpmdW5jdGlvbihlLG4pe3JldHVybiBuLWU/dGEoZSxuLHQpOkFuKGlzTmFOKGUpP246ZSl9fWZ1bmN0aW9uIE5lKHQsZSl7dmFyIG49ZS10O3JldHVybiBuP0pzKHQsbik6QW4oaXNOYU4odCk/ZTp0KX12YXIgT2U9ZnVuY3Rpb24gdChlKXt2YXIgbj1jaShlKTtmdW5jdGlvbiByKGkscyl7dmFyIGE9bigoaT1YdChpKSkuciwocz1YdChzKSkuciksbz1uKGkuZyxzLmcpLGw9bihpLmIscy5iKSxmPU5lKGkub3BhY2l0eSxzLm9wYWNpdHkpO3JldHVybiBmdW5jdGlvbih1KXtyZXR1cm4gaS5yPWEodSksaS5nPW8odSksaS5iPWwodSksaS5vcGFjaXR5PWYodSksaStcIlwifX1yZXR1cm4gci5nYW1tYT10LHJ9KDEpO2Z1bmN0aW9uIGZpKHQpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj1lLmxlbmd0aCxyPW5ldyBBcnJheShuKSxpPW5ldyBBcnJheShuKSxzPW5ldyBBcnJheShuKSxhLG87Zm9yKGE9MDthPG47KythKW89WHQoZVthXSksclthXT1vLnJ8fDAsaVthXT1vLmd8fDAsc1thXT1vLmJ8fDA7cmV0dXJuIHI9dChyKSxpPXQoaSkscz10KHMpLG8ub3BhY2l0eT0xLGZ1bmN0aW9uKGwpe3JldHVybiBvLnI9cihsKSxvLmc9aShsKSxvLmI9cyhsKSxvK1wiXCJ9fX12YXIgZWE9ZmkobGkpLG5hPWZpKHVpKTtmdW5jdGlvbiBRKHQsZSl7cmV0dXJuIHQ9K3QsZT0rZSxmdW5jdGlvbihuKXtyZXR1cm4gdCooMS1uKStlKm59fXZhciBrbj0vWy0rXT8oPzpcXGQrXFwuP1xcZCp8XFwuP1xcZCspKD86W2VFXVstK10/XFxkKyk/L2csVG49bmV3IFJlZ0V4cChrbi5zb3VyY2UsXCJnXCIpO2Z1bmN0aW9uIHJhKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX1mdW5jdGlvbiBpYSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQoZSkrXCJcIn19ZnVuY3Rpb24gSW4odCxlKXt2YXIgbj1rbi5sYXN0SW5kZXg9VG4ubGFzdEluZGV4PTAscixpLHMsYT0tMSxvPVtdLGw9W107Zm9yKHQ9dCtcIlwiLGU9ZStcIlwiOyhyPWtuLmV4ZWModCkpJiYoaT1Ubi5leGVjKGUpKTspKHM9aS5pbmRleCk+biYmKHM9ZS5zbGljZShuLHMpLG9bYV0/b1thXSs9czpvWysrYV09cyksKHI9clswXSk9PT0oaT1pWzBdKT9vW2FdP29bYV0rPWk6b1srK2FdPWk6KG9bKythXT1udWxsLGwucHVzaCh7aTphLHg6UShyLGkpfSkpLG49VG4ubGFzdEluZGV4O3JldHVybiBuPGUubGVuZ3RoJiYocz1lLnNsaWNlKG4pLG9bYV0/b1thXSs9czpvWysrYV09cyksby5sZW5ndGg8Mj9sWzBdP2lhKGxbMF0ueCk6cmEoZSk6KGU9bC5sZW5ndGgsZnVuY3Rpb24oZil7Zm9yKHZhciB1PTAsYzt1PGU7Kyt1KW9bKGM9bFt1XSkuaV09Yy54KGYpO3JldHVybiBvLmpvaW4oXCJcIil9KX12YXIgaGk9MTgwL01hdGguUEksUGU9e3RyYW5zbGF0ZVg6MCx0cmFuc2xhdGVZOjAscm90YXRlOjAsc2tld1g6MCxzY2FsZVg6MSxzY2FsZVk6MX07ZnVuY3Rpb24gU24odCxlLG4scixpLHMpe3ZhciBhLG8sbDtyZXR1cm4oYT1NYXRoLnNxcnQodCp0K2UqZSkpJiYodC89YSxlLz1hKSwobD10Km4rZSpyKSYmKG4tPXQqbCxyLT1lKmwpLChvPU1hdGguc3FydChuKm4rcipyKSkmJihuLz1vLHIvPW8sbC89byksdCpyPGUqbiYmKHQ9LXQsZT0tZSxsPS1sLGE9LWEpLHt0cmFuc2xhdGVYOmksdHJhbnNsYXRlWTpzLHJvdGF0ZTpNYXRoLmF0YW4yKGUsdCkqaGksc2tld1g6TWF0aC5hdGFuKGwpKmhpLHNjYWxlWDphLHNjYWxlWTpvfX12YXIgRGU7ZnVuY3Rpb24gcGkodCl7bGV0IGU9bmV3KHR5cGVvZiBET01NYXRyaXg9PVwiZnVuY3Rpb25cIj9ET01NYXRyaXg6V2ViS2l0Q1NTTWF0cml4KSh0K1wiXCIpO3JldHVybiBlLmlzSWRlbnRpdHk/UGU6U24oZS5hLGUuYixlLmMsZS5kLGUuZSxlLmYpfWZ1bmN0aW9uIGRpKHQpe3JldHVybiB0PT1udWxsP1BlOihEZXx8KERlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJnXCIpKSxEZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIix0KSwodD1EZS50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpKT8odD10Lm1hdHJpeCxTbih0LmEsdC5iLHQuYyx0LmQsdC5lLHQuZikpOlBlKX1mdW5jdGlvbiBtaSh0LGUsbixyKXtmdW5jdGlvbiBpKGYpe3JldHVybiBmLmxlbmd0aD9mLnBvcCgpK1wiIFwiOlwiXCJ9ZnVuY3Rpb24gcyhmLHUsYyxoLHAsZCl7aWYoZiE9PWN8fHUhPT1oKXt2YXIgbT1wLnB1c2goXCJ0cmFuc2xhdGUoXCIsbnVsbCxlLG51bGwsbik7ZC5wdXNoKHtpOm0tNCx4OlEoZixjKX0se2k6bS0yLHg6USh1LGgpfSl9ZWxzZShjfHxoKSYmcC5wdXNoKFwidHJhbnNsYXRlKFwiK2MrZStoK24pfWZ1bmN0aW9uIGEoZix1LGMsaCl7ZiE9PXU/KGYtdT4xODA/dSs9MzYwOnUtZj4xODAmJihmKz0zNjApLGgucHVzaCh7aTpjLnB1c2goaShjKStcInJvdGF0ZShcIixudWxsLHIpLTIseDpRKGYsdSl9KSk6dSYmYy5wdXNoKGkoYykrXCJyb3RhdGUoXCIrdStyKX1mdW5jdGlvbiBvKGYsdSxjLGgpe2YhPT11P2gucHVzaCh7aTpjLnB1c2goaShjKStcInNrZXdYKFwiLG51bGwsciktMix4OlEoZix1KX0pOnUmJmMucHVzaChpKGMpK1wic2tld1goXCIrdStyKX1mdW5jdGlvbiBsKGYsdSxjLGgscCxkKXtpZihmIT09Y3x8dSE9PWgpe3ZhciBtPXAucHVzaChpKHApK1wic2NhbGUoXCIsbnVsbCxcIixcIixudWxsLFwiKVwiKTtkLnB1c2goe2k6bS00LHg6UShmLGMpfSx7aTptLTIseDpRKHUsaCl9KX1lbHNlKGMhPT0xfHxoIT09MSkmJnAucHVzaChpKHApK1wic2NhbGUoXCIrYytcIixcIitoK1wiKVwiKX1yZXR1cm4gZnVuY3Rpb24oZix1KXt2YXIgYz1bXSxoPVtdO3JldHVybiBmPXQoZiksdT10KHUpLHMoZi50cmFuc2xhdGVYLGYudHJhbnNsYXRlWSx1LnRyYW5zbGF0ZVgsdS50cmFuc2xhdGVZLGMsaCksYShmLnJvdGF0ZSx1LnJvdGF0ZSxjLGgpLG8oZi5za2V3WCx1LnNrZXdYLGMsaCksbChmLnNjYWxlWCxmLnNjYWxlWSx1LnNjYWxlWCx1LnNjYWxlWSxjLGgpLGY9dT1udWxsLGZ1bmN0aW9uKHApe2Zvcih2YXIgZD0tMSxtPWgubGVuZ3RoLHg7KytkPG07KWNbKHg9aFtkXSkuaV09eC54KHApO3JldHVybiBjLmpvaW4oXCJcIil9fX12YXIgQ249bWkocGksXCJweCwgXCIsXCJweClcIixcImRlZylcIiksRW49bWkoZGksXCIsIFwiLFwiKVwiLFwiKVwiKTt2YXIgenQ9MCxvZT0wLHNlPTAsZ2k9MWUzLHFlLGFlLFhlPTAsRXQ9MCx6ZT0wLGxlPXR5cGVvZiBwZXJmb3JtYW5jZT09XCJvYmplY3RcIiYmcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlOkRhdGUseGk9dHlwZW9mIHdpbmRvdz09XCJvYmplY3RcIiYmd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTpmdW5jdGlvbih0KXtzZXRUaW1lb3V0KHQsMTcpfTtmdW5jdGlvbiB1ZSgpe3JldHVybiBFdHx8KHhpKG9hKSxFdD1sZS5ub3coKSt6ZSl9ZnVuY3Rpb24gb2EoKXtFdD0wfWZ1bmN0aW9uIGNlKCl7dGhpcy5fY2FsbD10aGlzLl90aW1lPXRoaXMuX25leHQ9bnVsbH1jZS5wcm90b3R5cGU9UmUucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpjZSxyZXN0YXJ0OmZ1bmN0aW9uKHQsZSxuKXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvblwiKTtuPShuPT1udWxsP3VlKCk6K24pKyhlPT1udWxsPzA6K2UpLCF0aGlzLl9uZXh0JiZhZSE9PXRoaXMmJihhZT9hZS5fbmV4dD10aGlzOnFlPXRoaXMsYWU9dGhpcyksdGhpcy5fY2FsbD10LHRoaXMuX3RpbWU9bixObigpfSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5fY2FsbCYmKHRoaXMuX2NhbGw9bnVsbCx0aGlzLl90aW1lPUluZmluaXR5LE5uKCkpfX07ZnVuY3Rpb24gUmUodCxlLG4pe3ZhciByPW5ldyBjZTtyZXR1cm4gci5yZXN0YXJ0KHQsZSxuKSxyfWZ1bmN0aW9uIHZpKCl7dWUoKSwrK3p0O2Zvcih2YXIgdD1xZSxlO3Q7KShlPUV0LXQuX3RpbWUpPj0wJiZ0Ll9jYWxsLmNhbGwodm9pZCAwLGUpLHQ9dC5fbmV4dDstLXp0fWZ1bmN0aW9uIF9pKCl7RXQ9KFhlPWxlLm5vdygpKSt6ZSx6dD1vZT0wO3RyeXt2aSgpfWZpbmFsbHl7enQ9MCxhYSgpLEV0PTB9fWZ1bmN0aW9uIHNhKCl7dmFyIHQ9bGUubm93KCksZT10LVhlO2U+Z2kmJih6ZS09ZSxYZT10KX1mdW5jdGlvbiBhYSgpe2Zvcih2YXIgdCxlPXFlLG4scj1JbmZpbml0eTtlOyllLl9jYWxsPyhyPmUuX3RpbWUmJihyPWUuX3RpbWUpLHQ9ZSxlPWUuX25leHQpOihuPWUuX25leHQsZS5fbmV4dD1udWxsLGU9dD90Ll9uZXh0PW46cWU9bik7YWU9dCxObihyKX1mdW5jdGlvbiBObih0KXtpZighenQpe29lJiYob2U9Y2xlYXJUaW1lb3V0KG9lKSk7dmFyIGU9dC1FdDtlPjI0Pyh0PEluZmluaXR5JiYob2U9c2V0VGltZW91dChfaSx0LWxlLm5vdygpLXplKSksc2UmJihzZT1jbGVhckludGVydmFsKHNlKSkpOihzZXx8KFhlPWxlLm5vdygpLHNlPXNldEludGVydmFsKHNhLGdpKSksenQ9MSx4aShfaSkpfX1mdW5jdGlvbiBCZSh0LGUsbil7dmFyIHI9bmV3IGNlO3JldHVybiBlPWU9PW51bGw/MDorZSxyLnJlc3RhcnQoaT0+e3Iuc3RvcCgpLHQoaStlKX0sZSxuKSxyfXZhciBsYT14bihcInN0YXJ0XCIsXCJlbmRcIixcImNhbmNlbFwiLFwiaW50ZXJydXB0XCIpLHVhPVtdLHlpPTAsd2k9MSxGZT0yLExlPTMsYmk9NCxWZT01LGZlPTY7ZnVuY3Rpb24gaHQodCxlLG4scixpLHMpe3ZhciBhPXQuX190cmFuc2l0aW9uO2lmKCFhKXQuX190cmFuc2l0aW9uPXt9O2Vsc2UgaWYobiBpbiBhKXJldHVybjtjYSh0LG4se25hbWU6ZSxpbmRleDpyLGdyb3VwOmksb246bGEsdHdlZW46dWEsdGltZTpzLnRpbWUsZGVsYXk6cy5kZWxheSxkdXJhdGlvbjpzLmR1cmF0aW9uLGVhc2U6cy5lYXNlLHRpbWVyOm51bGwsc3RhdGU6eWl9KX1mdW5jdGlvbiBoZSh0LGUpe3ZhciBuPUYodCxlKTtpZihuLnN0YXRlPnlpKXRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHNjaGVkdWxlZFwiKTtyZXR1cm4gbn1mdW5jdGlvbiBZKHQsZSl7dmFyIG49Rih0LGUpO2lmKG4uc3RhdGU+TGUpdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgcnVubmluZ1wiKTtyZXR1cm4gbn1mdW5jdGlvbiBGKHQsZSl7dmFyIG49dC5fX3RyYW5zaXRpb247aWYoIW58fCEobj1uW2VdKSl0aHJvdyBuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIG5vdCBmb3VuZFwiKTtyZXR1cm4gbn1mdW5jdGlvbiBjYSh0LGUsbil7dmFyIHI9dC5fX3RyYW5zaXRpb24saTtyW2VdPW4sbi50aW1lcj1SZShzLDAsbi50aW1lKTtmdW5jdGlvbiBzKGYpe24uc3RhdGU9d2ksbi50aW1lci5yZXN0YXJ0KGEsbi5kZWxheSxuLnRpbWUpLG4uZGVsYXk8PWYmJmEoZi1uLmRlbGF5KX1mdW5jdGlvbiBhKGYpe3ZhciB1LGMsaCxwO2lmKG4uc3RhdGUhPT13aSlyZXR1cm4gbCgpO2Zvcih1IGluIHIpaWYocD1yW3VdLHAubmFtZT09PW4ubmFtZSl7aWYocC5zdGF0ZT09PUxlKXJldHVybiBCZShhKTtwLnN0YXRlPT09Ymk/KHAuc3RhdGU9ZmUscC50aW1lci5zdG9wKCkscC5vbi5jYWxsKFwiaW50ZXJydXB0XCIsdCx0Ll9fZGF0YV9fLHAuaW5kZXgscC5ncm91cCksZGVsZXRlIHJbdV0pOit1PGUmJihwLnN0YXRlPWZlLHAudGltZXIuc3RvcCgpLHAub24uY2FsbChcImNhbmNlbFwiLHQsdC5fX2RhdGFfXyxwLmluZGV4LHAuZ3JvdXApLGRlbGV0ZSByW3VdKX1pZihCZShmdW5jdGlvbigpe24uc3RhdGU9PT1MZSYmKG4uc3RhdGU9Ymksbi50aW1lci5yZXN0YXJ0KG8sbi5kZWxheSxuLnRpbWUpLG8oZikpfSksbi5zdGF0ZT1GZSxuLm9uLmNhbGwoXCJzdGFydFwiLHQsdC5fX2RhdGFfXyxuLmluZGV4LG4uZ3JvdXApLG4uc3RhdGU9PT1GZSl7Zm9yKG4uc3RhdGU9TGUsaT1uZXcgQXJyYXkoaD1uLnR3ZWVuLmxlbmd0aCksdT0wLGM9LTE7dTxoOysrdSkocD1uLnR3ZWVuW3VdLnZhbHVlLmNhbGwodCx0Ll9fZGF0YV9fLG4uaW5kZXgsbi5ncm91cCkpJiYoaVsrK2NdPXApO2kubGVuZ3RoPWMrMX19ZnVuY3Rpb24gbyhmKXtmb3IodmFyIHU9ZjxuLmR1cmF0aW9uP24uZWFzZS5jYWxsKG51bGwsZi9uLmR1cmF0aW9uKToobi50aW1lci5yZXN0YXJ0KGwpLG4uc3RhdGU9VmUsMSksYz0tMSxoPWkubGVuZ3RoOysrYzxoOylpW2NdLmNhbGwodCx1KTtuLnN0YXRlPT09VmUmJihuLm9uLmNhbGwoXCJlbmRcIix0LHQuX19kYXRhX18sbi5pbmRleCxuLmdyb3VwKSxsKCkpfWZ1bmN0aW9uIGwoKXtuLnN0YXRlPWZlLG4udGltZXIuc3RvcCgpLGRlbGV0ZSByW2VdO2Zvcih2YXIgZiBpbiByKXJldHVybjtkZWxldGUgdC5fX3RyYW5zaXRpb259fWZ1bmN0aW9uIFllKHQsZSl7dmFyIG49dC5fX3RyYW5zaXRpb24scixpLHM9ITAsYTtpZighIW4pe2U9ZT09bnVsbD9udWxsOmUrXCJcIjtmb3IoYSBpbiBuKXtpZigocj1uW2FdKS5uYW1lIT09ZSl7cz0hMTtjb250aW51ZX1pPXIuc3RhdGU+RmUmJnIuc3RhdGU8VmUsci5zdGF0ZT1mZSxyLnRpbWVyLnN0b3AoKSxyLm9uLmNhbGwoaT9cImludGVycnVwdFwiOlwiY2FuY2VsXCIsdCx0Ll9fZGF0YV9fLHIuaW5kZXgsci5ncm91cCksZGVsZXRlIG5bYV19cyYmZGVsZXRlIHQuX190cmFuc2l0aW9ufX1mdW5jdGlvbiBqaSh0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7WWUodGhpcyx0KX0pfWZ1bmN0aW9uIGZhKHQsZSl7dmFyIG4scjtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaT1ZKHRoaXMsdCkscz1pLnR3ZWVuO2lmKHMhPT1uKXtyPW49cztmb3IodmFyIGE9MCxvPXIubGVuZ3RoO2E8bzsrK2EpaWYoclthXS5uYW1lPT09ZSl7cj1yLnNsaWNlKCksci5zcGxpY2UoYSwxKTticmVha319aS50d2Vlbj1yfX1mdW5jdGlvbiBoYSh0LGUsbil7dmFyIHIsaTtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBFcnJvcjtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcz1ZKHRoaXMsdCksYT1zLnR3ZWVuO2lmKGEhPT1yKXtpPShyPWEpLnNsaWNlKCk7Zm9yKHZhciBvPXtuYW1lOmUsdmFsdWU6bn0sbD0wLGY9aS5sZW5ndGg7bDxmOysrbClpZihpW2xdLm5hbWU9PT1lKXtpW2xdPW87YnJlYWt9bD09PWYmJmkucHVzaChvKX1zLnR3ZWVuPWl9fWZ1bmN0aW9uIE1pKHQsZSl7dmFyIG49dGhpcy5faWQ7aWYodCs9XCJcIixhcmd1bWVudHMubGVuZ3RoPDIpe2Zvcih2YXIgcj1GKHRoaXMubm9kZSgpLG4pLnR3ZWVuLGk9MCxzPXIubGVuZ3RoLGE7aTxzOysraSlpZigoYT1yW2ldKS5uYW1lPT09dClyZXR1cm4gYS52YWx1ZTtyZXR1cm4gbnVsbH1yZXR1cm4gdGhpcy5lYWNoKChlPT1udWxsP2ZhOmhhKShuLHQsZSkpfWZ1bmN0aW9uIFJ0KHQsZSxuKXt2YXIgcj10Ll9pZDtyZXR1cm4gdC5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9WSh0aGlzLHIpOyhpLnZhbHVlfHwoaS52YWx1ZT17fSkpW2VdPW4uYXBwbHkodGhpcyxhcmd1bWVudHMpfSksZnVuY3Rpb24oaSl7cmV0dXJuIEYoaSxyKS52YWx1ZVtlXX19ZnVuY3Rpb24gSGUodCxlKXt2YXIgbjtyZXR1cm4odHlwZW9mIGU9PVwibnVtYmVyXCI/UTplIGluc3RhbmNlb2YgZnQ/T2U6KG49ZnQoZSkpPyhlPW4sT2UpOkluKSh0LGUpfWZ1bmN0aW9uIHBhKHQpe3JldHVybiBmdW5jdGlvbigpe3RoaXMucmVtb3ZlQXR0cmlidXRlKHQpfX1mdW5jdGlvbiBkYSh0KXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKHQuc3BhY2UsdC5sb2NhbCl9fWZ1bmN0aW9uIG1hKHQsZSxuKXt2YXIgcixpPW4rXCJcIixzO3JldHVybiBmdW5jdGlvbigpe3ZhciBhPXRoaXMuZ2V0QXR0cmlidXRlKHQpO3JldHVybiBhPT09aT9udWxsOmE9PT1yP3M6cz1lKHI9YSxuKX19ZnVuY3Rpb24gZ2EodCxlLG4pe3ZhciByLGk9bitcIlwiLHM7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5nZXRBdHRyaWJ1dGVOUyh0LnNwYWNlLHQubG9jYWwpO3JldHVybiBhPT09aT9udWxsOmE9PT1yP3M6cz1lKHI9YSxuKX19ZnVuY3Rpb24geGEodCxlLG4pe3ZhciByLGkscztyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYSxvPW4odGhpcyksbDtyZXR1cm4gbz09bnVsbD92b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlKHQpOihhPXRoaXMuZ2V0QXR0cmlidXRlKHQpLGw9bytcIlwiLGE9PT1sP251bGw6YT09PXImJmw9PT1pP3M6KGk9bCxzPWUocj1hLG8pKSl9fWZ1bmN0aW9uIHZhKHQsZSxuKXt2YXIgcixpLHM7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGEsbz1uKHRoaXMpLGw7cmV0dXJuIG89PW51bGw/dm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKHQuc3BhY2UsdC5sb2NhbCk6KGE9dGhpcy5nZXRBdHRyaWJ1dGVOUyh0LnNwYWNlLHQubG9jYWwpLGw9bytcIlwiLGE9PT1sP251bGw6YT09PXImJmw9PT1pP3M6KGk9bCxzPWUocj1hLG8pKSl9fWZ1bmN0aW9uIEFpKHQsZSl7dmFyIG49aXQodCkscj1uPT09XCJ0cmFuc2Zvcm1cIj9FbjpIZTtyZXR1cm4gdGhpcy5hdHRyVHdlZW4odCx0eXBlb2YgZT09XCJmdW5jdGlvblwiPyhuLmxvY2FsP3ZhOnhhKShuLHIsUnQodGhpcyxcImF0dHIuXCIrdCxlKSk6ZT09bnVsbD8obi5sb2NhbD9kYTpwYSkobik6KG4ubG9jYWw/Z2E6bWEpKG4scixlKSl9ZnVuY3Rpb24gX2EodCxlKXtyZXR1cm4gZnVuY3Rpb24obil7dGhpcy5zZXRBdHRyaWJ1dGUodCxlLmNhbGwodGhpcyxuKSl9fWZ1bmN0aW9uIHlhKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe3RoaXMuc2V0QXR0cmlidXRlTlModC5zcGFjZSx0LmxvY2FsLGUuY2FsbCh0aGlzLG4pKX19ZnVuY3Rpb24gd2EodCxlKXt2YXIgbixyO2Z1bmN0aW9uIGkoKXt2YXIgcz1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcyE9PXImJihuPShyPXMpJiZ5YSh0LHMpKSxufXJldHVybiBpLl92YWx1ZT1lLGl9ZnVuY3Rpb24gYmEodCxlKXt2YXIgbixyO2Z1bmN0aW9uIGkoKXt2YXIgcz1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcyE9PXImJihuPShyPXMpJiZfYSh0LHMpKSxufXJldHVybiBpLl92YWx1ZT1lLGl9ZnVuY3Rpb24ga2kodCxlKXt2YXIgbj1cImF0dHIuXCIrdDtpZihhcmd1bWVudHMubGVuZ3RoPDIpcmV0dXJuKG49dGhpcy50d2VlbihuKSkmJm4uX3ZhbHVlO2lmKGU9PW51bGwpcmV0dXJuIHRoaXMudHdlZW4obixudWxsKTtpZih0eXBlb2YgZSE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBFcnJvcjt2YXIgcj1pdCh0KTtyZXR1cm4gdGhpcy50d2VlbihuLChyLmxvY2FsP3dhOmJhKShyLGUpKX1mdW5jdGlvbiBqYSh0LGUpe3JldHVybiBmdW5jdGlvbigpe2hlKHRoaXMsdCkuZGVsYXk9K2UuYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiBNYSh0LGUpe3JldHVybiBlPStlLGZ1bmN0aW9uKCl7aGUodGhpcyx0KS5kZWxheT1lfX1mdW5jdGlvbiBUaSh0KXt2YXIgZT10aGlzLl9pZDtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90aGlzLmVhY2goKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/amE6TWEpKGUsdCkpOkYodGhpcy5ub2RlKCksZSkuZGVsYXl9ZnVuY3Rpb24gQWEodCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtZKHRoaXMsdCkuZHVyYXRpb249K2UuYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiBrYSh0LGUpe3JldHVybiBlPStlLGZ1bmN0aW9uKCl7WSh0aGlzLHQpLmR1cmF0aW9uPWV9fWZ1bmN0aW9uIElpKHQpe3ZhciBlPXRoaXMuX2lkO3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3RoaXMuZWFjaCgodHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj9BYTprYSkoZSx0KSk6Rih0aGlzLm5vZGUoKSxlKS5kdXJhdGlvbn1mdW5jdGlvbiBUYSh0LGUpe2lmKHR5cGVvZiBlIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEVycm9yO3JldHVybiBmdW5jdGlvbigpe1kodGhpcyx0KS5lYXNlPWV9fWZ1bmN0aW9uIFNpKHQpe3ZhciBlPXRoaXMuX2lkO3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3RoaXMuZWFjaChUYShlLHQpKTpGKHRoaXMubm9kZSgpLGUpLmVhc2V9ZnVuY3Rpb24gSWEodCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBFcnJvcjtZKHRoaXMsdCkuZWFzZT1ufX1mdW5jdGlvbiBDaSh0KXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBFcnJvcjtyZXR1cm4gdGhpcy5lYWNoKElhKHRoaXMuX2lkLHQpKX1mdW5jdGlvbiBFaSh0KXt0eXBlb2YgdCE9XCJmdW5jdGlvblwiJiYodD10ZSh0KSk7Zm9yKHZhciBlPXRoaXMuX2dyb3VwcyxuPWUubGVuZ3RoLHI9bmV3IEFycmF5KG4pLGk9MDtpPG47KytpKWZvcih2YXIgcz1lW2ldLGE9cy5sZW5ndGgsbz1yW2ldPVtdLGwsZj0wO2Y8YTsrK2YpKGw9c1tmXSkmJnQuY2FsbChsLGwuX19kYXRhX18sZixzKSYmby5wdXNoKGwpO3JldHVybiBuZXcgRyhyLHRoaXMuX3BhcmVudHMsdGhpcy5fbmFtZSx0aGlzLl9pZCl9ZnVuY3Rpb24gTmkodCl7aWYodC5faWQhPT10aGlzLl9pZCl0aHJvdyBuZXcgRXJyb3I7Zm9yKHZhciBlPXRoaXMuX2dyb3VwcyxuPXQuX2dyb3VwcyxyPWUubGVuZ3RoLGk9bi5sZW5ndGgscz1NYXRoLm1pbihyLGkpLGE9bmV3IEFycmF5KHIpLG89MDtvPHM7KytvKWZvcih2YXIgbD1lW29dLGY9bltvXSx1PWwubGVuZ3RoLGM9YVtvXT1uZXcgQXJyYXkodSksaCxwPTA7cDx1OysrcCkoaD1sW3BdfHxmW3BdKSYmKGNbcF09aCk7Zm9yKDtvPHI7KytvKWFbb109ZVtvXTtyZXR1cm4gbmV3IEcoYSx0aGlzLl9wYXJlbnRzLHRoaXMuX25hbWUsdGhpcy5faWQpfWZ1bmN0aW9uIFNhKHQpe3JldHVybih0K1wiXCIpLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykuZXZlcnkoZnVuY3Rpb24oZSl7dmFyIG49ZS5pbmRleE9mKFwiLlwiKTtyZXR1cm4gbj49MCYmKGU9ZS5zbGljZSgwLG4pKSwhZXx8ZT09PVwic3RhcnRcIn0pfWZ1bmN0aW9uIENhKHQsZSxuKXt2YXIgcixpLHM9U2EoZSk/aGU6WTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT1zKHRoaXMsdCksbz1hLm9uO28hPT1yJiYoaT0ocj1vKS5jb3B5KCkpLm9uKGUsbiksYS5vbj1pfX1mdW5jdGlvbiBPaSh0LGUpe3ZhciBuPXRoaXMuX2lkO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPDI/Rih0aGlzLm5vZGUoKSxuKS5vbi5vbih0KTp0aGlzLmVhY2goQ2Eobix0LGUpKX1mdW5jdGlvbiBFYSh0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT10aGlzLnBhcmVudE5vZGU7Zm9yKHZhciBuIGluIHRoaXMuX190cmFuc2l0aW9uKWlmKCtuIT09dClyZXR1cm47ZSYmZS5yZW1vdmVDaGlsZCh0aGlzKX19ZnVuY3Rpb24gUGkoKXtyZXR1cm4gdGhpcy5vbihcImVuZC5yZW1vdmVcIixFYSh0aGlzLl9pZCkpfWZ1bmN0aW9uIERpKHQpe3ZhciBlPXRoaXMuX25hbWUsbj10aGlzLl9pZDt0eXBlb2YgdCE9XCJmdW5jdGlvblwiJiYodD1DdCh0KSk7Zm9yKHZhciByPXRoaXMuX2dyb3VwcyxpPXIubGVuZ3RoLHM9bmV3IEFycmF5KGkpLGE9MDthPGk7KythKWZvcih2YXIgbz1yW2FdLGw9by5sZW5ndGgsZj1zW2FdPW5ldyBBcnJheShsKSx1LGMsaD0wO2g8bDsrK2gpKHU9b1toXSkmJihjPXQuY2FsbCh1LHUuX19kYXRhX18saCxvKSkmJihcIl9fZGF0YV9fXCJpbiB1JiYoYy5fX2RhdGFfXz11Ll9fZGF0YV9fKSxmW2hdPWMsaHQoZltoXSxlLG4saCxmLEYodSxuKSkpO3JldHVybiBuZXcgRyhzLHRoaXMuX3BhcmVudHMsZSxuKX1mdW5jdGlvbiBxaSh0KXt2YXIgZT10aGlzLl9uYW1lLG49dGhpcy5faWQ7dHlwZW9mIHQhPVwiZnVuY3Rpb25cIiYmKHQ9SnQodCkpO2Zvcih2YXIgcj10aGlzLl9ncm91cHMsaT1yLmxlbmd0aCxzPVtdLGE9W10sbz0wO288aTsrK28pZm9yKHZhciBsPXJbb10sZj1sLmxlbmd0aCx1LGM9MDtjPGY7KytjKWlmKHU9bFtjXSl7Zm9yKHZhciBoPXQuY2FsbCh1LHUuX19kYXRhX18sYyxsKSxwLGQ9Rih1LG4pLG09MCx4PWgubGVuZ3RoO208eDsrK20pKHA9aFttXSkmJmh0KHAsZSxuLG0saCxkKTtzLnB1c2goaCksYS5wdXNoKHUpfXJldHVybiBuZXcgRyhzLGEsZSxuKX12YXIgTmE9b3QucHJvdG90eXBlLmNvbnN0cnVjdG9yO2Z1bmN0aW9uIFhpKCl7cmV0dXJuIG5ldyBOYSh0aGlzLl9ncm91cHMsdGhpcy5fcGFyZW50cyl9ZnVuY3Rpb24gT2EodCxlKXt2YXIgbixyLGk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHM9Y3QodGhpcyx0KSxhPSh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KHQpLGN0KHRoaXMsdCkpO3JldHVybiBzPT09YT9udWxsOnM9PT1uJiZhPT09cj9pOmk9ZShuPXMscj1hKX19ZnVuY3Rpb24gemkodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSh0KX19ZnVuY3Rpb24gUGEodCxlLG4pe3ZhciByLGk9bitcIlwiLHM7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9Y3QodGhpcyx0KTtyZXR1cm4gYT09PWk/bnVsbDphPT09cj9zOnM9ZShyPWEsbil9fWZ1bmN0aW9uIERhKHQsZSxuKXt2YXIgcixpLHM7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9Y3QodGhpcyx0KSxvPW4odGhpcyksbD1vK1wiXCI7cmV0dXJuIG89PW51bGwmJihsPW89KHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkodCksY3QodGhpcyx0KSkpLGE9PT1sP251bGw6YT09PXImJmw9PT1pP3M6KGk9bCxzPWUocj1hLG8pKX19ZnVuY3Rpb24gcWEodCxlKXt2YXIgbixyLGkscz1cInN0eWxlLlwiK2UsYT1cImVuZC5cIitzLG87cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGw9WSh0aGlzLHQpLGY9bC5vbix1PWwudmFsdWVbc109PW51bGw/b3x8KG89emkoZSkpOnZvaWQgMDsoZiE9PW58fGkhPT11KSYmKHI9KG49ZikuY29weSgpKS5vbihhLGk9dSksbC5vbj1yfX1mdW5jdGlvbiBSaSh0LGUsbil7dmFyIHI9KHQrPVwiXCIpPT09XCJ0cmFuc2Zvcm1cIj9DbjpIZTtyZXR1cm4gZT09bnVsbD90aGlzLnN0eWxlVHdlZW4odCxPYSh0LHIpKS5vbihcImVuZC5zdHlsZS5cIit0LHppKHQpKTp0eXBlb2YgZT09XCJmdW5jdGlvblwiP3RoaXMuc3R5bGVUd2Vlbih0LERhKHQscixSdCh0aGlzLFwic3R5bGUuXCIrdCxlKSkpLmVhY2gocWEodGhpcy5faWQsdCkpOnRoaXMuc3R5bGVUd2Vlbih0LFBhKHQscixlKSxuKS5vbihcImVuZC5zdHlsZS5cIit0LG51bGwpfWZ1bmN0aW9uIFhhKHQsZSxuKXtyZXR1cm4gZnVuY3Rpb24ocil7dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSh0LGUuY2FsbCh0aGlzLHIpLG4pfX1mdW5jdGlvbiB6YSh0LGUsbil7dmFyIHIsaTtmdW5jdGlvbiBzKCl7dmFyIGE9ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIGEhPT1pJiYocj0oaT1hKSYmWGEodCxhLG4pKSxyfXJldHVybiBzLl92YWx1ZT1lLHN9ZnVuY3Rpb24gQmkodCxlLG4pe3ZhciByPVwic3R5bGUuXCIrKHQrPVwiXCIpO2lmKGFyZ3VtZW50cy5sZW5ndGg8MilyZXR1cm4ocj10aGlzLnR3ZWVuKHIpKSYmci5fdmFsdWU7aWYoZT09bnVsbClyZXR1cm4gdGhpcy50d2VlbihyLG51bGwpO2lmKHR5cGVvZiBlIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEVycm9yO3JldHVybiB0aGlzLnR3ZWVuKHIsemEodCxlLG4/P1wiXCIpKX1mdW5jdGlvbiBSYSh0KXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnRleHRDb250ZW50PXR9fWZ1bmN0aW9uIEJhKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7dGhpcy50ZXh0Q29udGVudD1lPz9cIlwifX1mdW5jdGlvbiBGaSh0KXtyZXR1cm4gdGhpcy50d2VlbihcInRleHRcIix0eXBlb2YgdD09XCJmdW5jdGlvblwiP0JhKFJ0KHRoaXMsXCJ0ZXh0XCIsdCkpOlJhKHQ9PW51bGw/XCJcIjp0K1wiXCIpKX1mdW5jdGlvbiBGYSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dGhpcy50ZXh0Q29udGVudD10LmNhbGwodGhpcyxlKX19ZnVuY3Rpb24gTGEodCl7dmFyIGUsbjtmdW5jdGlvbiByKCl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIGkhPT1uJiYoZT0obj1pKSYmRmEoaSkpLGV9cmV0dXJuIHIuX3ZhbHVlPXQscn1mdW5jdGlvbiBMaSh0KXt2YXIgZT1cInRleHRcIjtpZihhcmd1bWVudHMubGVuZ3RoPDEpcmV0dXJuKGU9dGhpcy50d2VlbihlKSkmJmUuX3ZhbHVlO2lmKHQ9PW51bGwpcmV0dXJuIHRoaXMudHdlZW4oZSxudWxsKTtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBFcnJvcjtyZXR1cm4gdGhpcy50d2VlbihlLExhKHQpKX1mdW5jdGlvbiBWaSgpe2Zvcih2YXIgdD10aGlzLl9uYW1lLGU9dGhpcy5faWQsbj1HZSgpLHI9dGhpcy5fZ3JvdXBzLGk9ci5sZW5ndGgscz0wO3M8aTsrK3MpZm9yKHZhciBhPXJbc10sbz1hLmxlbmd0aCxsLGY9MDtmPG87KytmKWlmKGw9YVtmXSl7dmFyIHU9RihsLGUpO2h0KGwsdCxuLGYsYSx7dGltZTp1LnRpbWUrdS5kZWxheSt1LmR1cmF0aW9uLGRlbGF5OjAsZHVyYXRpb246dS5kdXJhdGlvbixlYXNlOnUuZWFzZX0pfXJldHVybiBuZXcgRyhyLHRoaXMuX3BhcmVudHMsdCxuKX1mdW5jdGlvbiBZaSgpe3ZhciB0LGUsbj10aGlzLHI9bi5faWQsaT1uLnNpemUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocyxhKXt2YXIgbz17dmFsdWU6YX0sbD17dmFsdWU6ZnVuY3Rpb24oKXstLWk9PTAmJnMoKX19O24uZWFjaChmdW5jdGlvbigpe3ZhciBmPVkodGhpcyxyKSx1PWYub247dSE9PXQmJihlPSh0PXUpLmNvcHkoKSxlLl8uY2FuY2VsLnB1c2gobyksZS5fLmludGVycnVwdC5wdXNoKG8pLGUuXy5lbmQucHVzaChsKSksZi5vbj1lfSksaT09PTAmJnMoKX0pfXZhciBWYT0wO2Z1bmN0aW9uIEcodCxlLG4scil7dGhpcy5fZ3JvdXBzPXQsdGhpcy5fcGFyZW50cz1lLHRoaXMuX25hbWU9bix0aGlzLl9pZD1yfWZ1bmN0aW9uIEhpKHQpe3JldHVybiBvdCgpLnRyYW5zaXRpb24odCl9ZnVuY3Rpb24gR2UoKXtyZXR1cm4rK1ZhfXZhciBzdD1vdC5wcm90b3R5cGU7Ry5wcm90b3R5cGU9SGkucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpHLHNlbGVjdDpEaSxzZWxlY3RBbGw6cWksc2VsZWN0Q2hpbGQ6c3Quc2VsZWN0Q2hpbGQsc2VsZWN0Q2hpbGRyZW46c3Quc2VsZWN0Q2hpbGRyZW4sZmlsdGVyOkVpLG1lcmdlOk5pLHNlbGVjdGlvbjpYaSx0cmFuc2l0aW9uOlZpLGNhbGw6c3QuY2FsbCxub2RlczpzdC5ub2Rlcyxub2RlOnN0Lm5vZGUsc2l6ZTpzdC5zaXplLGVtcHR5OnN0LmVtcHR5LGVhY2g6c3QuZWFjaCxvbjpPaSxhdHRyOkFpLGF0dHJUd2VlbjpraSxzdHlsZTpSaSxzdHlsZVR3ZWVuOkJpLHRleHQ6RmksdGV4dFR3ZWVuOkxpLHJlbW92ZTpQaSx0d2VlbjpNaSxkZWxheTpUaSxkdXJhdGlvbjpJaSxlYXNlOlNpLGVhc2VWYXJ5aW5nOkNpLGVuZDpZaSxbU3ltYm9sLml0ZXJhdG9yXTpzdFtTeW1ib2wuaXRlcmF0b3JdfTtmdW5jdGlvbiAkZSh0KXtyZXR1cm4oKHQqPTIpPD0xP3QqdCp0Oih0LT0yKSp0KnQrMikvMn12YXIgWWE9e3RpbWU6bnVsbCxkZWxheTowLGR1cmF0aW9uOjI1MCxlYXNlOiRlfTtmdW5jdGlvbiBIYSh0LGUpe2Zvcih2YXIgbjshKG49dC5fX3RyYW5zaXRpb24pfHwhKG49bltlXSk7KWlmKCEodD10LnBhcmVudE5vZGUpKXRocm93IG5ldyBFcnJvcihgdHJhbnNpdGlvbiAke2V9IG5vdCBmb3VuZGApO3JldHVybiBufWZ1bmN0aW9uIEdpKHQpe3ZhciBlLG47dCBpbnN0YW5jZW9mIEc/KGU9dC5faWQsdD10Ll9uYW1lKTooZT1HZSgpLChuPVlhKS50aW1lPXVlKCksdD10PT1udWxsP251bGw6dCtcIlwiKTtmb3IodmFyIHI9dGhpcy5fZ3JvdXBzLGk9ci5sZW5ndGgscz0wO3M8aTsrK3MpZm9yKHZhciBhPXJbc10sbz1hLmxlbmd0aCxsLGY9MDtmPG87KytmKShsPWFbZl0pJiZodChsLHQsZSxmLGEsbnx8SGEobCxlKSk7cmV0dXJuIG5ldyBHKHIsdGhpcy5fcGFyZW50cyx0LGUpfW90LnByb3RvdHlwZS5pbnRlcnJ1cHQ9amk7b3QucHJvdG90eXBlLnRyYW5zaXRpb249R2k7ZnVuY3Rpb24gJGkodCl7cmV0dXJuWyt0WzBdLCt0WzFdXX1mdW5jdGlvbiBHYSh0KXtyZXR1cm5bJGkodFswXSksJGkodFsxXSldfXZhciBGZD17bmFtZTpcInhcIixoYW5kbGVzOltcIndcIixcImVcIl0ubWFwKE9uKSxpbnB1dDpmdW5jdGlvbih0LGUpe3JldHVybiB0PT1udWxsP251bGw6W1srdFswXSxlWzBdWzFdXSxbK3RbMV0sZVsxXVsxXV1dfSxvdXRwdXQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlt0WzBdWzBdLHRbMV1bMF1dfX0sTGQ9e25hbWU6XCJ5XCIsaGFuZGxlczpbXCJuXCIsXCJzXCJdLm1hcChPbiksaW5wdXQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD09bnVsbD9udWxsOltbZVswXVswXSwrdFswXV0sW2VbMV1bMF0sK3RbMV1dXX0sb3V0cHV0OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZbdFswXVsxXSx0WzFdWzFdXX19LFZkPXtuYW1lOlwieHlcIixoYW5kbGVzOltcIm5cIixcIndcIixcImVcIixcInNcIixcIm53XCIsXCJuZVwiLFwic3dcIixcInNlXCJdLm1hcChPbiksaW5wdXQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PW51bGw/bnVsbDpHYSh0KX0sb3V0cHV0OmZ1bmN0aW9uKHQpe3JldHVybiB0fX07ZnVuY3Rpb24gT24odCl7cmV0dXJue3R5cGU6dH19ZnVuY3Rpb24gQnQodCl7Zm9yKHZhciBlPS0xLG49dC5sZW5ndGgscj0wLGk9MCxzLGE9dFtuLTFdLG8sbD0wOysrZTxuOylzPWEsYT10W2VdLGwrPW89c1swXSphWzFdLWFbMF0qc1sxXSxyKz0oc1swXSthWzBdKSpvLGkrPShzWzFdK2FbMV0pKm87cmV0dXJuIGwqPTMsW3IvbCxpL2xdfWZ1bmN0aW9uIHB0KHQsZSxuKXt0aGlzLms9dCx0aGlzLng9ZSx0aGlzLnk9bn1wdC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnB0LHNjYWxlOmZ1bmN0aW9uKHQpe3JldHVybiB0PT09MT90aGlzOm5ldyBwdCh0aGlzLmsqdCx0aGlzLngsdGhpcy55KX0sdHJhbnNsYXRlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9PT0wJmU9PT0wP3RoaXM6bmV3IHB0KHRoaXMuayx0aGlzLngrdGhpcy5rKnQsdGhpcy55K3RoaXMuayplKX0sYXBwbHk6ZnVuY3Rpb24odCl7cmV0dXJuW3RbMF0qdGhpcy5rK3RoaXMueCx0WzFdKnRoaXMuayt0aGlzLnldfSxhcHBseVg6ZnVuY3Rpb24odCl7cmV0dXJuIHQqdGhpcy5rK3RoaXMueH0sYXBwbHlZOmZ1bmN0aW9uKHQpe3JldHVybiB0KnRoaXMuayt0aGlzLnl9LGludmVydDpmdW5jdGlvbih0KXtyZXR1cm5bKHRbMF0tdGhpcy54KS90aGlzLmssKHRbMV0tdGhpcy55KS90aGlzLmtdfSxpbnZlcnRYOmZ1bmN0aW9uKHQpe3JldHVybih0LXRoaXMueCkvdGhpcy5rfSxpbnZlcnRZOmZ1bmN0aW9uKHQpe3JldHVybih0LXRoaXMueSkvdGhpcy5rfSxyZXNjYWxlWDpmdW5jdGlvbih0KXtyZXR1cm4gdC5jb3B5KCkuZG9tYWluKHQucmFuZ2UoKS5tYXAodGhpcy5pbnZlcnRYLHRoaXMpLm1hcCh0LmludmVydCx0KSl9LHJlc2NhbGVZOmZ1bmN0aW9uKHQpe3JldHVybiB0LmNvcHkoKS5kb21haW4odC5yYW5nZSgpLm1hcCh0aGlzLmludmVydFksdGhpcykubWFwKHQuaW52ZXJ0LHQpKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cInRyYW5zbGF0ZShcIit0aGlzLngrXCIsXCIrdGhpcy55K1wiKSBzY2FsZShcIit0aGlzLmsrXCIpXCJ9fTt2YXIgUG49bmV3IHB0KDEsMCwwKTtEbi5wcm90b3R5cGU9cHQucHJvdG90eXBlO2Z1bmN0aW9uIERuKHQpe2Zvcig7IXQuX196b29tOylpZighKHQ9dC5wYXJlbnROb2RlKSlyZXR1cm4gUG47cmV0dXJuIHQuX196b29tfXZhciAkYT17d2lkdGg6MTAyNCxoZWlnaHQ6MTAyNCxwb2ludHM6W10scmVsYXhJdGVyYXRpb25zOjh9O2Z1bmN0aW9uIFFpKHQpe3Q9T2JqZWN0LmFzc2lnbih7fSwkYSx0KSx0LnBvaW50cz10LnBvaW50cy5tYXAocz0+W3MueCxzLnldKTtsZXQgZT1TdC5mcm9tKHQucG9pbnRzKSxuPWUudm9yb25vaShbMCwwLHQud2lkdGgsdC5oZWlnaHRdKSxyPVtdO2ZvcihsZXQgcz0wO3M8dC5yZWxheEl0ZXJhdGlvbnM7cysrKXtmb3IobGV0IGE9MDthPGUucG9pbnRzLmxlbmd0aDthKz0yKXtsZXQgbz1uLmNlbGxQb2x5Z29uKGE+PjEpO2lmKG89PT1udWxsKWNvbnRpbnVlO2xldCBsPWUucG9pbnRzW2FdLGY9ZS5wb2ludHNbYSsxXSxbdSxjXT1CdChvKTtlLnBvaW50c1thXT1sKyh1LWwpKjEsZS5wb2ludHNbYSsxXT1mKyhjLWYpKjF9bi51cGRhdGUoKX1mb3IobGV0IHM9MDtzPGUucG9pbnRzLmxlbmd0aDtzKz0yKXtsZXQgYT1lLnBvaW50c1tzXSxvPWUucG9pbnRzW3MrMV07ci5wdXNoKHt4OmEseTpvfSl9bGV0IGk9W107Zm9yKGxldCBzPTA7czxlLnBvaW50cy5sZW5ndGg7cys9Mil7bGV0IGE9bi5jZWxsUG9seWdvbihzPj4xKTthIT09bnVsbCYmaS5wdXNoKHsuLi5VaShhKSxuZWlnaGJvcnM6Wy4uLm4ubmVpZ2hib3JzKHMpXS5tYXAobz0+KHsuLi5VaShuLmNlbGxQb2x5Z29uKG8pKX0pKX0pfXJldHVybntjZWxsczppLm1hcCgocyxhKT0+e2xldCBvPVsuLi5uLm5laWdoYm9ycyhhKV07cmV0dXJuIHMubmVpZ2hib3JzPW8ubWFwKGw9PmlbbF0pLHN9KSxwb2ludHM6cn19ZnVuY3Rpb24gVWkodCl7cmV0dXJue3BvaW50czp0LGlubmVyQ2lyY2xlUmFkaXVzOlFhKHQpLGNlbnRyb2lkOnt4OkJ0KHQpWzBdLHk6QnQodClbMV19fX1mdW5jdGlvbiBRYSh0KXtsZXQgZT1CdCh0KSxuPVVhKGUsdCkscj15ZShlLG5bMF0sblsxXSk7Zm9yKGxldCBpPTE7aTx0Lmxlbmd0aC0xO2krKylpZih0W2krMV0pe2xldCBzPXllKGUsbltpXSxuW2krMV0pO3M8ciYmKHI9cyl9cmV0dXJuIHJ9ZnVuY3Rpb24gVWEodCxlKXtsZXQgbj10LHI9ZS5zbGljZSgwKSxpPShzLGEpPT5NYXRoLmF0YW4yKHNbMV0tblsxXSxzWzBdLW5bMF0pKjE4MC9NYXRoLlBJLU1hdGguYXRhbjIoYVsxXS1uWzFdLGFbMF0tblswXSkqMTgwL01hdGguUEk7cmV0dXJuIHIuc29ydChpKSxyfXZhciBaaT1zbihLaSgpKSxLYT17d2lkdGg6MjAwLGhlaWdodDoyMDAscmVzb2x1dGlvbjo4LHhJbmM6LjAxLHlJbmM6LjAxLHNlZWQ6TWF0aC5yYW5kb20oKSoxZTN9O2Z1bmN0aW9uIFdpKHQsZSxuKXtyZXR1cm4gTWF0aC5tYXgoZSxNYXRoLm1pbih0LG4pKX1mdW5jdGlvbiBaYSh0LGUsbixyLGkpe3JldHVybiBmdW5jdGlvbihzKXtsZXQgYT1NYXRoLmZsb29yKFdpKHMueCwwLGUtMSkvaSksbz1NYXRoLmZsb29yKFdpKHMueSwwLG4tMSkvaSk7cmV0dXJuIHRbYStvKnJdfX1mdW5jdGlvbiBXYSh0KXt0PU9iamVjdC5hc3NpZ24oe30sS2EsdCk7bGV0IGU9bmV3IFppLmRlZmF1bHQodC5zZWVkKSxuPXQucmVzb2x1dGlvbixyPXQucmVzb2x1dGlvbixpPXQud2lkdGgvbixzPXQuaGVpZ2h0L3IsYT1uZXcgQXJyYXkobipyKSxvPTA7Zm9yKGxldCBsPTA7bDx0LmhlaWdodDtsKz1zKXtsZXQgZj0wO2ZvcihsZXQgdT0wO3U8dC53aWR0aDt1Kz1pKU1hdGguZmxvb3IodStpKTw9dC53aWR0aCYmTWF0aC5mbG9vcihsK3MpPD10LmhlaWdodCYmKGFbTWF0aC5yb3VuZCh1L2krbC9zKm4pXT17eDp1LHk6bCx3aWR0aDppLGhlaWdodDpzLG5vaXNlVmFsdWU6ZS5ub2lzZTJEKGYsbyl9LGYrPXQueEluYyk7bys9dC55SW5jfXJldHVybntjZWxsczphLGxvb2t1cDpaYShhLHQud2lkdGgsdC5oZWlnaHQsbixNYXRoLm1heChpLHMpKX19ZXhwb3J0e3lvIGFzIGNyZWF0ZUNvb3Jkc1RyYW5zZm9ybWVyLFdhIGFzIGNyZWF0ZU5vaXNlR3JpZCxNbyBhcyBjcmVhdGVRdEdyaWQsUWkgYXMgY3JlYXRlVm9yb25vaURpYWdyYW0sUWkgYXMgY3JlYXRlVm9yb25vaVRlc3NlbGxhdGlvbix5ZSBhcyBkaXN0VG9TZWdtZW50LHZvIGFzIG1hcCxfbyBhcyBwb2ludHNJblBhdGgsQXQgYXMgcmFuZG9tLHBvIGFzIHJhbmRvbUJpYXMsbW8gYXMgcmFuZG9tU25hcCxobyBhcyBzZWVkUFJORyx4byBhcyBzcGxpbmV9O1xuLyoqXG4gKiBxdWFkdHJlZS1qc1xuICogQHZlcnNpb24gMS4yLjRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBUaW1vIEhhdXNtYW5uXG4gKi9cbiIsIi8qIVxuKiBAc3ZnZG90anMvc3ZnLmpzIC0gQSBsaWdodHdlaWdodCBsaWJyYXJ5IGZvciBtYW5pcHVsYXRpbmcgYW5kIGFuaW1hdGluZyBTVkcuXG4qIEB2ZXJzaW9uIDMuMS4yXG4qIGh0dHBzOi8vc3ZnanMuZGV2L1xuKlxuKiBAY29weXJpZ2h0IFdvdXQgRmllcmVucyA8d291dEBtaWNrLXdvdXQuY29tPlxuKiBAbGljZW5zZSBNSVRcbipcbiogQlVJTFQ6IFdlZCBKYW4gMjYgMjAyMiAyMzoxOTowNyBHTVQrMDEwMCAoTWl0dGVsZXVyb3DDpGlzY2hlIE5vcm1hbHplaXQpXG4qLztcbmNvbnN0IG1ldGhvZHMkMSA9IHt9O1xuY29uc3QgbmFtZXMgPSBbXTtcbmZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyhuYW1lLCBtKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCBfbmFtZSBvZiBuYW1lKSB7XG4gICAgICByZWdpc3Rlck1ldGhvZHMoX25hbWUsIG0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IF9uYW1lIGluIG5hbWUpIHtcbiAgICAgIHJlZ2lzdGVyTWV0aG9kcyhfbmFtZSwgbmFtZVtfbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGFkZE1ldGhvZE5hbWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG0pKTtcbiAgbWV0aG9kcyQxW25hbWVdID0gT2JqZWN0LmFzc2lnbihtZXRob2RzJDFbbmFtZV0gfHwge30sIG0pO1xufVxuZnVuY3Rpb24gZ2V0TWV0aG9kc0ZvcihuYW1lKSB7XG4gIHJldHVybiBtZXRob2RzJDFbbmFtZV0gfHwge307XG59XG5mdW5jdGlvbiBnZXRNZXRob2ROYW1lcygpIHtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KG5hbWVzKV07XG59XG5mdW5jdGlvbiBhZGRNZXRob2ROYW1lcyhfbmFtZXMpIHtcbiAgbmFtZXMucHVzaCguLi5fbmFtZXMpO1xufVxuXG4vLyBNYXAgZnVuY3Rpb25cbmZ1bmN0aW9uIG1hcChhcnJheSwgYmxvY2spIHtcbiAgbGV0IGk7XG4gIGNvbnN0IGlsID0gYXJyYXkubGVuZ3RoO1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgaWw7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKGJsb2NrKGFycmF5W2ldKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSAvLyBGaWx0ZXIgZnVuY3Rpb25cblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBibG9jaykge1xuICBsZXQgaTtcbiAgY29uc3QgaWwgPSBhcnJheS5sZW5ndGg7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBpbDsgaSsrKSB7XG4gICAgaWYgKGJsb2NrKGFycmF5W2ldKSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyYXlbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IC8vIERlZ3JlZXMgdG8gcmFkaWFuc1xuXG5mdW5jdGlvbiByYWRpYW5zKGQpIHtcbiAgcmV0dXJuIGQgJSAzNjAgKiBNYXRoLlBJIC8gMTgwO1xufSAvLyBSYWRpYW5zIHRvIGRlZ3JlZXNcblxuZnVuY3Rpb24gZGVncmVlcyhyKSB7XG4gIHJldHVybiByICogMTgwIC8gTWF0aC5QSSAlIDM2MDtcbn0gLy8gQ29udmVydCBkYXNoLXNlcGFyYXRlZC1zdHJpbmcgdG8gY2FtZWxDYXNlXG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZShzKSB7XG4gIHJldHVybiBzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLSguKS9nLCBmdW5jdGlvbiAobSwgZykge1xuICAgIHJldHVybiBnLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufSAvLyBDb252ZXJ0IGNhbWVsIGNhc2VkIHN0cmluZyB0byBkYXNoIHNlcGFyYXRlZFxuXG5mdW5jdGlvbiB1bkNhbWVsQ2FzZShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG0sIGcpIHtcbiAgICByZXR1cm4gJy0nICsgZy50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn0gLy8gQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmdcblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn0gLy8gQ2FsY3VsYXRlIHByb3BvcnRpb25hbCB3aWR0aCBhbmQgaGVpZ2h0IHZhbHVlcyB3aGVuIG5lY2Vzc2FyeVxuXG5mdW5jdGlvbiBwcm9wb3J0aW9uYWxTaXplKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQsIGJveCkge1xuICBpZiAod2lkdGggPT0gbnVsbCB8fCBoZWlnaHQgPT0gbnVsbCkge1xuICAgIGJveCA9IGJveCB8fCBlbGVtZW50LmJib3goKTtcblxuICAgIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgICB3aWR0aCA9IGJveC53aWR0aCAvIGJveC5oZWlnaHQgKiBoZWlnaHQ7XG4gICAgfSBlbHNlIGlmIChoZWlnaHQgPT0gbnVsbCkge1xuICAgICAgaGVpZ2h0ID0gYm94LmhlaWdodCAvIGJveC53aWR0aCAqIHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBhZGRzIHN1cHBvcnQgZm9yIHN0cmluZyBvcmlnaW5zLlxyXG4gKiBJdCBzZWFyY2hlcyBmb3IgYW4gb3JpZ2luIGluIG8ub3JpZ2luIG8ub3ggYW5kIG8ub3JpZ2luWC5cclxuICogVGhpcyB3YXksIG9yaWdpbjoge3g6ICdjZW50ZXInLCB5OiA1MH0gY2FuIGJlIHBhc3NlZCBhcyB3ZWxsIGFzIG94OiAnY2VudGVyJywgb3k6IDUwXHJcbioqL1xuXG5mdW5jdGlvbiBnZXRPcmlnaW4obywgZWxlbWVudCkge1xuICBjb25zdCBvcmlnaW4gPSBvLm9yaWdpbjsgLy8gRmlyc3QgY2hlY2sgaWYgb3JpZ2luIGlzIGluIG94IG9yIG9yaWdpblhcblxuICBsZXQgb3ggPSBvLm94ICE9IG51bGwgPyBvLm94IDogby5vcmlnaW5YICE9IG51bGwgPyBvLm9yaWdpblggOiAnY2VudGVyJztcbiAgbGV0IG95ID0gby5veSAhPSBudWxsID8gby5veSA6IG8ub3JpZ2luWSAhPSBudWxsID8gby5vcmlnaW5ZIDogJ2NlbnRlcic7IC8vIFRoZW4gY2hlY2sgaWYgb3JpZ2luIHdhcyB1c2VkIGFuZCBvdmVyd3JpdGUgaW4gdGhhdCBjYXNlXG5cbiAgaWYgKG9yaWdpbiAhPSBudWxsKSB7XG4gICAgW294LCBveV0gPSBBcnJheS5pc0FycmF5KG9yaWdpbikgPyBvcmlnaW4gOiB0eXBlb2Ygb3JpZ2luID09PSAnb2JqZWN0JyA/IFtvcmlnaW4ueCwgb3JpZ2luLnldIDogW29yaWdpbiwgb3JpZ2luXTtcbiAgfSAvLyBNYWtlIHN1cmUgdG8gb25seSBjYWxsIGJib3ggd2hlbiBhY3R1YWxseSBuZWVkZWRcblxuXG4gIGNvbnN0IGNvbmRYID0gdHlwZW9mIG94ID09PSAnc3RyaW5nJztcbiAgY29uc3QgY29uZFkgPSB0eXBlb2Ygb3kgPT09ICdzdHJpbmcnO1xuXG4gIGlmIChjb25kWCB8fCBjb25kWSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gZWxlbWVudC5iYm94KCk7IC8vIEFuZCBvbmx5IG92ZXJ3cml0ZSBpZiBzdHJpbmcgd2FzIHBhc3NlZCBmb3IgdGhpcyBzcGVjaWZpYyBheGlzXG5cbiAgICBpZiAoY29uZFgpIHtcbiAgICAgIG94ID0gb3guaW5jbHVkZXMoJ2xlZnQnKSA/IHggOiBveC5pbmNsdWRlcygncmlnaHQnKSA/IHggKyB3aWR0aCA6IHggKyB3aWR0aCAvIDI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmRZKSB7XG4gICAgICBveSA9IG95LmluY2x1ZGVzKCd0b3AnKSA/IHkgOiBveS5pbmNsdWRlcygnYm90dG9tJykgPyB5ICsgaGVpZ2h0IDogeSArIGhlaWdodCAvIDI7XG4gICAgfVxuICB9IC8vIFJldHVybiB0aGUgb3JpZ2luIGFzIGl0IGlzIGlmIGl0IHdhc24ndCBhIHN0cmluZ1xuXG5cbiAgcmV0dXJuIFtveCwgb3ldO1xufVxuXG52YXIgdXRpbHMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgbWFwOiBtYXAsXG4gIGZpbHRlcjogZmlsdGVyLFxuICByYWRpYW5zOiByYWRpYW5zLFxuICBkZWdyZWVzOiBkZWdyZWVzLFxuICBjYW1lbENhc2U6IGNhbWVsQ2FzZSxcbiAgdW5DYW1lbENhc2U6IHVuQ2FtZWxDYXNlLFxuICBjYXBpdGFsaXplOiBjYXBpdGFsaXplLFxuICBwcm9wb3J0aW9uYWxTaXplOiBwcm9wb3J0aW9uYWxTaXplLFxuICBnZXRPcmlnaW46IGdldE9yaWdpblxufTtcblxuLy8gRGVmYXVsdCBuYW1lc3BhY2VzXG5jb25zdCBzdmcgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuY29uc3QgaHRtbCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmNvbnN0IHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJztcbmNvbnN0IHhsaW5rID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuY29uc3Qgc3ZnanMgPSAnaHR0cDovL3N2Z2pzLmRldi9zdmdqcyc7XG5cbnZhciBuYW1lc3BhY2VzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIHN2Zzogc3ZnLFxuICBodG1sOiBodG1sLFxuICB4bWxuczogeG1sbnMsXG4gIHhsaW5rOiB4bGluayxcbiAgc3ZnanM6IHN2Z2pzXG59O1xuXG5jb25zdCBnbG9iYWxzID0ge1xuICB3aW5kb3c6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyxcbiAgZG9jdW1lbnQ6IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogZG9jdW1lbnRcbn07XG5mdW5jdGlvbiByZWdpc3RlcldpbmRvdyh3aW4gPSBudWxsLCBkb2MgPSBudWxsKSB7XG4gIGdsb2JhbHMud2luZG93ID0gd2luO1xuICBnbG9iYWxzLmRvY3VtZW50ID0gZG9jO1xufVxuY29uc3Qgc2F2ZSA9IHt9O1xuZnVuY3Rpb24gc2F2ZVdpbmRvdygpIHtcbiAgc2F2ZS53aW5kb3cgPSBnbG9iYWxzLndpbmRvdztcbiAgc2F2ZS5kb2N1bWVudCA9IGdsb2JhbHMuZG9jdW1lbnQ7XG59XG5mdW5jdGlvbiByZXN0b3JlV2luZG93KCkge1xuICBnbG9iYWxzLndpbmRvdyA9IHNhdmUud2luZG93O1xuICBnbG9iYWxzLmRvY3VtZW50ID0gc2F2ZS5kb2N1bWVudDtcbn1cbmZ1bmN0aW9uIHdpdGhXaW5kb3cod2luLCBmbikge1xuICBzYXZlV2luZG93KCk7XG4gIHJlZ2lzdGVyV2luZG93KHdpbiwgd2luLmRvY3VtZW50KTtcbiAgZm4od2luLCB3aW4uZG9jdW1lbnQpO1xuICByZXN0b3JlV2luZG93KCk7XG59XG5mdW5jdGlvbiBnZXRXaW5kb3coKSB7XG4gIHJldHVybiBnbG9iYWxzLndpbmRvdztcbn1cblxuY2xhc3MgQmFzZSB7Ly8gY29uc3RydWN0b3IgKG5vZGUvKiwge2V4dGVuc2lvbnMgPSBbXX0gKi8pIHtcbiAgLy8gICAvLyB0aGlzLnRhZ3MgPSBbXVxuICAvLyAgIC8vXG4gIC8vICAgLy8gZm9yIChsZXQgZXh0ZW5zaW9uIG9mIGV4dGVuc2lvbnMpIHtcbiAgLy8gICAvLyAgIGV4dGVuc2lvbi5zZXR1cC5jYWxsKHRoaXMsIG5vZGUpXG4gIC8vICAgLy8gICB0aGlzLnRhZ3MucHVzaChleHRlbnNpb24ubmFtZSlcbiAgLy8gICAvLyB9XG4gIC8vIH1cbn1cblxuY29uc3QgZWxlbWVudHMgPSB7fTtcbmNvbnN0IHJvb3QgPSAnX19fU1lNQk9MX19fUk9PVF9fXyc7IC8vIE1ldGhvZCBmb3IgZWxlbWVudCBjcmVhdGlvblxuXG5mdW5jdGlvbiBjcmVhdGUobmFtZSwgbnMgPSBzdmcpIHtcbiAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgcmV0dXJuIGdsb2JhbHMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIG1ha2VJbnN0YW5jZShlbGVtZW50LCBpc0hUTUwgPSBmYWxzZSkge1xuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJhc2UpIHJldHVybiBlbGVtZW50O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gYWRvcHRlcihlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gbmV3IGVsZW1lbnRzW3Jvb3RdKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnICYmIGVsZW1lbnQuY2hhckF0KDApICE9PSAnPCcpIHtcbiAgICByZXR1cm4gYWRvcHRlcihnbG9iYWxzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkpO1xuICB9IC8vIE1ha2Ugc3VyZSwgdGhhdCBIVE1MIGVsZW1lbnRzIGFyZSBjcmVhdGVkIHdpdGggdGhlIGNvcnJlY3QgbmFtZXNwYWNlXG5cblxuICBjb25zdCB3cmFwcGVyID0gaXNIVE1MID8gZ2xvYmFscy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA6IGNyZWF0ZSgnc3ZnJyk7XG4gIHdyYXBwZXIuaW5uZXJIVE1MID0gZWxlbWVudDsgLy8gV2UgY2FuIHVzZSBmaXJzdENoaWxkIGhlcmUgYmVjYXVzZSB3ZSBrbm93LFxuICAvLyB0aGF0IHRoZSBmaXJzdCBjaGFyIGlzIDwgYW5kIHRodXMgYW4gZWxlbWVudFxuXG4gIGVsZW1lbnQgPSBhZG9wdGVyKHdyYXBwZXIuZmlyc3RDaGlsZCk7IC8vIG1ha2Ugc3VyZSwgdGhhdCBlbGVtZW50IGRvZXNudCBoYXZlIGl0cyB3cmFwcGVyIGF0dGFjaGVkXG5cbiAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbmZ1bmN0aW9uIG5vZGVPck5ldyhuYW1lLCBub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUub3duZXJEb2N1bWVudCAmJiBub2RlIGluc3RhbmNlb2Ygbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3Lk5vZGUgPyBub2RlIDogY3JlYXRlKG5hbWUpO1xufSAvLyBBZG9wdCBleGlzdGluZyBzdmcgZWxlbWVudHNcblxuZnVuY3Rpb24gYWRvcHQobm9kZSkge1xuICAvLyBjaGVjayBmb3IgcHJlc2VuY2Ugb2Ygbm9kZVxuICBpZiAoIW5vZGUpIHJldHVybiBudWxsOyAvLyBtYWtlIHN1cmUgYSBub2RlIGlzbid0IGFscmVhZHkgYWRvcHRlZFxuXG4gIGlmIChub2RlLmluc3RhbmNlIGluc3RhbmNlb2YgQmFzZSkgcmV0dXJuIG5vZGUuaW5zdGFuY2U7XG5cbiAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICcjZG9jdW1lbnQtZnJhZ21lbnQnKSB7XG4gICAgcmV0dXJuIG5ldyBlbGVtZW50cy5GcmFnbWVudChub2RlKTtcbiAgfSAvLyBpbml0aWFsaXplIHZhcmlhYmxlc1xuXG5cbiAgbGV0IGNsYXNzTmFtZSA9IGNhcGl0YWxpemUobm9kZS5ub2RlTmFtZSB8fCAnRG9tJyk7IC8vIE1ha2Ugc3VyZSB0aGF0IGdyYWRpZW50cyBhcmUgYWRvcHRlZCBjb3JyZWN0bHlcblxuICBpZiAoY2xhc3NOYW1lID09PSAnTGluZWFyR3JhZGllbnQnIHx8IGNsYXNzTmFtZSA9PT0gJ1JhZGlhbEdyYWRpZW50Jykge1xuICAgIGNsYXNzTmFtZSA9ICdHcmFkaWVudCc7IC8vIEZhbGxiYWNrIHRvIERvbSBpZiBlbGVtZW50IGlzIG5vdCBrbm93blxuICB9IGVsc2UgaWYgKCFlbGVtZW50c1tjbGFzc05hbWVdKSB7XG4gICAgY2xhc3NOYW1lID0gJ0RvbSc7XG4gIH1cblxuICByZXR1cm4gbmV3IGVsZW1lbnRzW2NsYXNzTmFtZV0obm9kZSk7XG59XG5sZXQgYWRvcHRlciA9IGFkb3B0O1xuZnVuY3Rpb24gbW9ja0Fkb3B0KG1vY2sgPSBhZG9wdCkge1xuICBhZG9wdGVyID0gbW9jaztcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyKGVsZW1lbnQsIG5hbWUgPSBlbGVtZW50Lm5hbWUsIGFzUm9vdCA9IGZhbHNlKSB7XG4gIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcbiAgaWYgKGFzUm9vdCkgZWxlbWVudHNbcm9vdF0gPSBlbGVtZW50O1xuICBhZGRNZXRob2ROYW1lcyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlbGVtZW50LnByb3RvdHlwZSkpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbmZ1bmN0aW9uIGdldENsYXNzKG5hbWUpIHtcbiAgcmV0dXJuIGVsZW1lbnRzW25hbWVdO1xufSAvLyBFbGVtZW50IGlkIHNlcXVlbmNlXG5cbmxldCBkaWQgPSAxMDAwOyAvLyBHZXQgbmV4dCBuYW1lZCBlbGVtZW50IGlkXG5cbmZ1bmN0aW9uIGVpZChuYW1lKSB7XG4gIHJldHVybiAnU3ZnanMnICsgY2FwaXRhbGl6ZShuYW1lKSArIGRpZCsrO1xufSAvLyBEZWVwIG5ldyBpZCBhc3NpZ25tZW50XG5cbmZ1bmN0aW9uIGFzc2lnbk5ld0lkKG5vZGUpIHtcbiAgLy8gZG8gdGhlIHNhbWUgZm9yIFNWRyBjaGlsZCBub2RlcyBhcyB3ZWxsXG4gIGZvciAobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgYXNzaWduTmV3SWQobm9kZS5jaGlsZHJlbltpXSk7XG4gIH1cblxuICBpZiAobm9kZS5pZCkge1xuICAgIG5vZGUuaWQgPSBlaWQobm9kZS5ub2RlTmFtZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0gLy8gTWV0aG9kIGZvciBleHRlbmRpbmcgb2JqZWN0c1xuXG5mdW5jdGlvbiBleHRlbmQobW9kdWxlcywgbWV0aG9kcykge1xuICBsZXQga2V5LCBpO1xuICBtb2R1bGVzID0gQXJyYXkuaXNBcnJheShtb2R1bGVzKSA/IG1vZHVsZXMgOiBbbW9kdWxlc107XG5cbiAgZm9yIChpID0gbW9kdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIG1vZHVsZXNbaV0ucHJvdG90eXBlW2tleV0gPSBtZXRob2RzW2tleV07XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB3cmFwV2l0aEF0dHJDaGVjayhmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBvID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKG8gJiYgby5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmICEobyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3Muc2xpY2UoMCwgLTEpKS5hdHRyKG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBzaWJsaW5ncygpIHtcbiAgcmV0dXJuIHRoaXMucGFyZW50KCkuY2hpbGRyZW4oKTtcbn0gLy8gR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHNpYmxpbmdzXG5cbmZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnQoKS5pbmRleCh0aGlzKTtcbn0gLy8gR2V0IHRoZSBuZXh0IGVsZW1lbnQgKHdpbGwgcmV0dXJuIG51bGwgaWYgdGhlcmUgaXMgbm9uZSlcblxuZnVuY3Rpb24gbmV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuc2libGluZ3MoKVt0aGlzLnBvc2l0aW9uKCkgKyAxXTtcbn0gLy8gR2V0IHRoZSBuZXh0IGVsZW1lbnQgKHdpbGwgcmV0dXJuIG51bGwgaWYgdGhlcmUgaXMgbm9uZSlcblxuZnVuY3Rpb24gcHJldigpIHtcbiAgcmV0dXJuIHRoaXMuc2libGluZ3MoKVt0aGlzLnBvc2l0aW9uKCkgLSAxXTtcbn0gLy8gU2VuZCBnaXZlbiBlbGVtZW50IG9uZSBzdGVwIGZvcndhcmRcblxuZnVuY3Rpb24gZm9yd2FyZCgpIHtcbiAgY29uc3QgaSA9IHRoaXMucG9zaXRpb24oKTtcbiAgY29uc3QgcCA9IHRoaXMucGFyZW50KCk7IC8vIG1vdmUgbm9kZSBvbmUgc3RlcCBmb3J3YXJkXG5cbiAgcC5hZGQodGhpcy5yZW1vdmUoKSwgaSArIDEpO1xuICByZXR1cm4gdGhpcztcbn0gLy8gU2VuZCBnaXZlbiBlbGVtZW50IG9uZSBzdGVwIGJhY2t3YXJkXG5cbmZ1bmN0aW9uIGJhY2t3YXJkKCkge1xuICBjb25zdCBpID0gdGhpcy5wb3NpdGlvbigpO1xuICBjb25zdCBwID0gdGhpcy5wYXJlbnQoKTtcbiAgcC5hZGQodGhpcy5yZW1vdmUoKSwgaSA/IGkgLSAxIDogMCk7XG4gIHJldHVybiB0aGlzO1xufSAvLyBTZW5kIGdpdmVuIGVsZW1lbnQgYWxsIHRoZSB3YXkgdG8gdGhlIGZyb250XG5cbmZ1bmN0aW9uIGZyb250KCkge1xuICBjb25zdCBwID0gdGhpcy5wYXJlbnQoKTsgLy8gTW92ZSBub2RlIGZvcndhcmRcblxuICBwLmFkZCh0aGlzLnJlbW92ZSgpKTtcbiAgcmV0dXJuIHRoaXM7XG59IC8vIFNlbmQgZ2l2ZW4gZWxlbWVudCBhbGwgdGhlIHdheSB0byB0aGUgYmFja1xuXG5mdW5jdGlvbiBiYWNrKCkge1xuICBjb25zdCBwID0gdGhpcy5wYXJlbnQoKTsgLy8gTW92ZSBub2RlIGJhY2tcblxuICBwLmFkZCh0aGlzLnJlbW92ZSgpLCAwKTtcbiAgcmV0dXJuIHRoaXM7XG59IC8vIEluc2VydHMgYSBnaXZlbiBlbGVtZW50IGJlZm9yZSB0aGUgdGFyZ2V0ZWQgZWxlbWVudFxuXG5mdW5jdGlvbiBiZWZvcmUoZWxlbWVudCkge1xuICBlbGVtZW50ID0gbWFrZUluc3RhbmNlKGVsZW1lbnQpO1xuICBlbGVtZW50LnJlbW92ZSgpO1xuICBjb25zdCBpID0gdGhpcy5wb3NpdGlvbigpO1xuICB0aGlzLnBhcmVudCgpLmFkZChlbGVtZW50LCBpKTtcbiAgcmV0dXJuIHRoaXM7XG59IC8vIEluc2VydHMgYSBnaXZlbiBlbGVtZW50IGFmdGVyIHRoZSB0YXJnZXRlZCBlbGVtZW50XG5cbmZ1bmN0aW9uIGFmdGVyKGVsZW1lbnQpIHtcbiAgZWxlbWVudCA9IG1ha2VJbnN0YW5jZShlbGVtZW50KTtcbiAgZWxlbWVudC5yZW1vdmUoKTtcbiAgY29uc3QgaSA9IHRoaXMucG9zaXRpb24oKTtcbiAgdGhpcy5wYXJlbnQoKS5hZGQoZWxlbWVudCwgaSArIDEpO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShlbGVtZW50KSB7XG4gIGVsZW1lbnQgPSBtYWtlSW5zdGFuY2UoZWxlbWVudCk7XG4gIGVsZW1lbnQuYmVmb3JlKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGluc2VydEFmdGVyKGVsZW1lbnQpIHtcbiAgZWxlbWVudCA9IG1ha2VJbnN0YW5jZShlbGVtZW50KTtcbiAgZWxlbWVudC5hZnRlcih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5yZWdpc3Rlck1ldGhvZHMoJ0RvbScsIHtcbiAgc2libGluZ3MsXG4gIHBvc2l0aW9uLFxuICBuZXh0LFxuICBwcmV2LFxuICBmb3J3YXJkLFxuICBiYWNrd2FyZCxcbiAgZnJvbnQsXG4gIGJhY2ssXG4gIGJlZm9yZSxcbiAgYWZ0ZXIsXG4gIGluc2VydEJlZm9yZSxcbiAgaW5zZXJ0QWZ0ZXJcbn0pO1xuXG4vLyBQYXJzZSB1bml0IHZhbHVlXG5jb25zdCBudW1iZXJBbmRVbml0ID0gL14oWystXT8oXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoZVsrLV0/XFxkKyk/KShbYS16JV0qKSQvaTsgLy8gUGFyc2UgaGV4IHZhbHVlXG5cbmNvbnN0IGhleCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2k7IC8vIFBhcnNlIHJnYiB2YWx1ZVxuXG5jb25zdCByZ2IgPSAvcmdiXFwoKFxcZCspLChcXGQrKSwoXFxkKylcXCkvOyAvLyBQYXJzZSByZWZlcmVuY2UgaWRcblxuY29uc3QgcmVmZXJlbmNlID0gLygjW2Etel9dW2EtejAtOVxcLV9dKikvaTsgLy8gc3BsaXRzIGEgdHJhbnNmb3JtYXRpb24gY2hhaW5cblxuY29uc3QgdHJhbnNmb3JtcyA9IC9cXClcXHMqLD9cXHMqLzsgLy8gV2hpdGVzcGFjZVxuXG5jb25zdCB3aGl0ZXNwYWNlID0gL1xccy9nOyAvLyBUZXN0IGhleCB2YWx1ZVxuXG5jb25zdCBpc0hleCA9IC9eI1thLWYwLTldezN9JHxeI1thLWYwLTldezZ9JC9pOyAvLyBUZXN0IHJnYiB2YWx1ZVxuXG5jb25zdCBpc1JnYiA9IC9ecmdiXFwoLzsgLy8gVGVzdCBmb3IgYmxhbmsgc3RyaW5nXG5cbmNvbnN0IGlzQmxhbmsgPSAvXihcXHMrKT8kLzsgLy8gVGVzdCBmb3IgbnVtZXJpYyBzdHJpbmdcblxuY29uc3QgaXNOdW1iZXIgPSAvXlsrLV0/KFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKGVbKy1dP1xcZCspPyQvaTsgLy8gVGVzdCBmb3IgaW1hZ2UgdXJsXG5cbmNvbnN0IGlzSW1hZ2UgPSAvXFwuKGpwZ3xqcGVnfHBuZ3xnaWZ8c3ZnKShcXD9bXj1dKy4qKT8vaTsgLy8gc3BsaXQgYXQgd2hpdGVzcGFjZSBhbmQgY29tbWFcblxuY29uc3QgZGVsaW1pdGVyID0gL1tcXHMsXSsvOyAvLyBUZXN0IGZvciBwYXRoIGxldHRlclxuXG5jb25zdCBpc1BhdGhMZXR0ZXIgPSAvW01MSFZDU1FUQVpdL2k7XG5cbnZhciByZWdleCA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBudW1iZXJBbmRVbml0OiBudW1iZXJBbmRVbml0LFxuICBoZXg6IGhleCxcbiAgcmdiOiByZ2IsXG4gIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICB0cmFuc2Zvcm1zOiB0cmFuc2Zvcm1zLFxuICB3aGl0ZXNwYWNlOiB3aGl0ZXNwYWNlLFxuICBpc0hleDogaXNIZXgsXG4gIGlzUmdiOiBpc1JnYixcbiAgaXNCbGFuazogaXNCbGFuayxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc0ltYWdlOiBpc0ltYWdlLFxuICBkZWxpbWl0ZXI6IGRlbGltaXRlcixcbiAgaXNQYXRoTGV0dGVyOiBpc1BhdGhMZXR0ZXJcbn07XG5cbmZ1bmN0aW9uIGNsYXNzZXMoKSB7XG4gIGNvbnN0IGF0dHIgPSB0aGlzLmF0dHIoJ2NsYXNzJyk7XG4gIHJldHVybiBhdHRyID09IG51bGwgPyBbXSA6IGF0dHIudHJpbSgpLnNwbGl0KGRlbGltaXRlcik7XG59IC8vIFJldHVybiB0cnVlIGlmIGNsYXNzIGV4aXN0cyBvbiB0aGUgbm9kZSwgZmFsc2Ugb3RoZXJ3aXNlXG5cbmZ1bmN0aW9uIGhhc0NsYXNzKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY2xhc3NlcygpLmluZGV4T2YobmFtZSkgIT09IC0xO1xufSAvLyBBZGQgY2xhc3MgdG8gdGhlIG5vZGVcblxuZnVuY3Rpb24gYWRkQ2xhc3MobmFtZSkge1xuICBpZiAoIXRoaXMuaGFzQ2xhc3MobmFtZSkpIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMuY2xhc3NlcygpO1xuICAgIGFycmF5LnB1c2gobmFtZSk7XG4gICAgdGhpcy5hdHRyKCdjbGFzcycsIGFycmF5LmpvaW4oJyAnKSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn0gLy8gUmVtb3ZlIGNsYXNzIGZyb20gdGhlIG5vZGVcblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MobmFtZSkge1xuICBpZiAodGhpcy5oYXNDbGFzcyhuYW1lKSkge1xuICAgIHRoaXMuYXR0cignY2xhc3MnLCB0aGlzLmNsYXNzZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjICE9PSBuYW1lO1xuICAgIH0pLmpvaW4oJyAnKSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn0gLy8gVG9nZ2xlIHRoZSBwcmVzZW5jZSBvZiBhIGNsYXNzIG9uIHRoZSBub2RlXG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuaGFzQ2xhc3MobmFtZSkgPyB0aGlzLnJlbW92ZUNsYXNzKG5hbWUpIDogdGhpcy5hZGRDbGFzcyhuYW1lKTtcbn1cbnJlZ2lzdGVyTWV0aG9kcygnRG9tJywge1xuICBjbGFzc2VzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzc1xufSk7XG5cbmZ1bmN0aW9uIGNzcyhzdHlsZSwgdmFsKSB7XG4gIGNvbnN0IHJldCA9IHt9O1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gZ2V0IGZ1bGwgc3R5bGUgYXMgb2JqZWN0XG4gICAgdGhpcy5ub2RlLnN0eWxlLmNzc1RleHQuc3BsaXQoL1xccyo7XFxzKi8pLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiAhIWVsLmxlbmd0aDtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgY29uc3QgdCA9IGVsLnNwbGl0KC9cXHMqOlxccyovKTtcbiAgICAgIHJldFt0WzBdXSA9IHRbMV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIC8vIGdldCBzdHlsZSBwcm9wZXJ0aWVzIGFzIGFycmF5XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgb2Ygc3R5bGUpIHtcbiAgICAgICAgY29uc3QgY2FzZWQgPSBjYW1lbENhc2UobmFtZSk7XG4gICAgICAgIHJldFtuYW1lXSA9IHRoaXMubm9kZS5zdHlsZVtjYXNlZF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSAvLyBnZXQgc3R5bGUgZm9yIHByb3BlcnR5XG5cblxuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLnN0eWxlW2NhbWVsQ2FzZShzdHlsZSldO1xuICAgIH0gLy8gc2V0IHN0eWxlcyBpbiBvYmplY3RcblxuXG4gICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZSkge1xuICAgICAgICAvLyBzZXQgZW1wdHkgc3RyaW5nIGlmIG51bGwvdW5kZWZpbmVkLycnIHdhcyBnaXZlblxuICAgICAgICB0aGlzLm5vZGUuc3R5bGVbY2FtZWxDYXNlKG5hbWUpXSA9IHN0eWxlW25hbWVdID09IG51bGwgfHwgaXNCbGFuay50ZXN0KHN0eWxlW25hbWVdKSA/ICcnIDogc3R5bGVbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIHNldCBzdHlsZSBmb3IgcHJvcGVydHlcblxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdGhpcy5ub2RlLnN0eWxlW2NhbWVsQ2FzZShzdHlsZSldID0gdmFsID09IG51bGwgfHwgaXNCbGFuay50ZXN0KHZhbCkgPyAnJyA6IHZhbDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufSAvLyBTaG93IGVsZW1lbnRcblxuZnVuY3Rpb24gc2hvdygpIHtcbiAgcmV0dXJuIHRoaXMuY3NzKCdkaXNwbGF5JywgJycpO1xufSAvLyBIaWRlIGVsZW1lbnRcblxuZnVuY3Rpb24gaGlkZSgpIHtcbiAgcmV0dXJuIHRoaXMuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbn0gLy8gSXMgZWxlbWVudCB2aXNpYmxlP1xuXG5mdW5jdGlvbiB2aXNpYmxlKCkge1xuICByZXR1cm4gdGhpcy5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnO1xufVxucmVnaXN0ZXJNZXRob2RzKCdEb20nLCB7XG4gIGNzcyxcbiAgc2hvdyxcbiAgaGlkZSxcbiAgdmlzaWJsZVxufSk7XG5cbmZ1bmN0aW9uIGRhdGEoYSwgdiwgcikge1xuICBpZiAoYSA9PSBudWxsKSB7XG4gICAgLy8gZ2V0IGFuIG9iamVjdCBvZiBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIHRoaXMuZGF0YShtYXAoZmlsdGVyKHRoaXMubm9kZS5hdHRyaWJ1dGVzLCBlbCA9PiBlbC5ub2RlTmFtZS5pbmRleE9mKCdkYXRhLScpID09PSAwKSwgZWwgPT4gZWwubm9kZU5hbWUuc2xpY2UoNSkpKTtcbiAgfSBlbHNlIGlmIChhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjb25zdCBkYXRhID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBhKSB7XG4gICAgICBkYXRhW2tleV0gPSB0aGlzLmRhdGEoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHYgaW4gYSkge1xuICAgICAgdGhpcy5kYXRhKHYsIGFbdl0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmF0dHIoJ2RhdGEtJyArIGEpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdkYXRhLScgKyBhKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hdHRyKCdkYXRhLScgKyBhLCB2ID09PSBudWxsID8gbnVsbCA6IHIgPT09IHRydWUgfHwgdHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJyA/IHYgOiBKU09OLnN0cmluZ2lmeSh2KSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbnJlZ2lzdGVyTWV0aG9kcygnRG9tJywge1xuICBkYXRhXG59KTtcblxuZnVuY3Rpb24gcmVtZW1iZXIoaywgdikge1xuICAvLyByZW1lbWJlciBldmVyeSBpdGVtIGluIGFuIG9iamVjdCBpbmRpdmlkdWFsbHlcbiAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gaykge1xuICAgICAgdGhpcy5yZW1lbWJlcihrZXksIGtba2V5XSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAvLyByZXRyaWV2ZSBtZW1vcnlcbiAgICByZXR1cm4gdGhpcy5tZW1vcnkoKVtrXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBzdG9yZSBtZW1vcnlcbiAgICB0aGlzLm1lbW9yeSgpW2tdID0gdjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufSAvLyBFcmFzZSBhIGdpdmVuIG1lbW9yeVxuXG5mdW5jdGlvbiBmb3JnZXQoKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhpcy5fbWVtb3J5ID0ge307XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgZGVsZXRlIHRoaXMubWVtb3J5KClbYXJndW1lbnRzW2ldXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn0gLy8gVGhpcyB0cmlnZ2VycyBjcmVhdGlvbiBvZiBhIG5ldyBoaWRkZW4gY2xhc3Mgd2hpY2ggaXMgbm90IHBlcmZvcm1hbnRcbi8vIEhvd2V2ZXIsIHRoaXMgZnVuY3Rpb24gaXMgbm90IHJhcmVseSB1c2VkIHNvIGl0IHdpbGwgbm90IGhhcHBlbiBmcmVxdWVudGx5XG4vLyBSZXR1cm4gbG9jYWwgbWVtb3J5IG9iamVjdFxuXG5mdW5jdGlvbiBtZW1vcnkoKSB7XG4gIHJldHVybiB0aGlzLl9tZW1vcnkgPSB0aGlzLl9tZW1vcnkgfHwge307XG59XG5yZWdpc3Rlck1ldGhvZHMoJ0RvbScsIHtcbiAgcmVtZW1iZXIsXG4gIGZvcmdldCxcbiAgbWVtb3J5XG59KTtcblxuZnVuY3Rpb24gc2l4RGlnaXRIZXgoaGV4KSB7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSA0ID8gWycjJywgaGV4LnN1YnN0cmluZygxLCAyKSwgaGV4LnN1YnN0cmluZygxLCAyKSwgaGV4LnN1YnN0cmluZygyLCAzKSwgaGV4LnN1YnN0cmluZygyLCAzKSwgaGV4LnN1YnN0cmluZygzLCA0KSwgaGV4LnN1YnN0cmluZygzLCA0KV0uam9pbignJykgOiBoZXg7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEhleChjb21wb25lbnQpIHtcbiAgY29uc3QgaW50ZWdlciA9IE1hdGgucm91bmQoY29tcG9uZW50KTtcbiAgY29uc3QgYm91bmRlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgaW50ZWdlcikpO1xuICBjb25zdCBoZXggPSBib3VuZGVkLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XG59XG5cbmZ1bmN0aW9uIGlzKG9iamVjdCwgc3BhY2UpIHtcbiAgZm9yIChsZXQgaSA9IHNwYWNlLmxlbmd0aDsgaS0tOykge1xuICAgIGlmIChvYmplY3Rbc3BhY2VbaV1dID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1ldGVycyhhLCBiKSB7XG4gIGNvbnN0IHBhcmFtcyA9IGlzKGEsICdyZ2InKSA/IHtcbiAgICBfYTogYS5yLFxuICAgIF9iOiBhLmcsXG4gICAgX2M6IGEuYixcbiAgICBfZDogMCxcbiAgICBzcGFjZTogJ3JnYidcbiAgfSA6IGlzKGEsICd4eXonKSA/IHtcbiAgICBfYTogYS54LFxuICAgIF9iOiBhLnksXG4gICAgX2M6IGEueixcbiAgICBfZDogMCxcbiAgICBzcGFjZTogJ3h5eidcbiAgfSA6IGlzKGEsICdoc2wnKSA/IHtcbiAgICBfYTogYS5oLFxuICAgIF9iOiBhLnMsXG4gICAgX2M6IGEubCxcbiAgICBfZDogMCxcbiAgICBzcGFjZTogJ2hzbCdcbiAgfSA6IGlzKGEsICdsYWInKSA/IHtcbiAgICBfYTogYS5sLFxuICAgIF9iOiBhLmEsXG4gICAgX2M6IGEuYixcbiAgICBfZDogMCxcbiAgICBzcGFjZTogJ2xhYidcbiAgfSA6IGlzKGEsICdsY2gnKSA/IHtcbiAgICBfYTogYS5sLFxuICAgIF9iOiBhLmMsXG4gICAgX2M6IGEuaCxcbiAgICBfZDogMCxcbiAgICBzcGFjZTogJ2xjaCdcbiAgfSA6IGlzKGEsICdjbXlrJykgPyB7XG4gICAgX2E6IGEuYyxcbiAgICBfYjogYS5tLFxuICAgIF9jOiBhLnksXG4gICAgX2Q6IGEuayxcbiAgICBzcGFjZTogJ2NteWsnXG4gIH0gOiB7XG4gICAgX2E6IDAsXG4gICAgX2I6IDAsXG4gICAgX2M6IDAsXG4gICAgc3BhY2U6ICdyZ2InXG4gIH07XG4gIHBhcmFtcy5zcGFjZSA9IGIgfHwgcGFyYW1zLnNwYWNlO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5mdW5jdGlvbiBjaWVTcGFjZShzcGFjZSkge1xuICBpZiAoc3BhY2UgPT09ICdsYWInIHx8IHNwYWNlID09PSAneHl6JyB8fCBzcGFjZSA9PT0gJ2xjaCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaHVlVG9SZ2IocCwgcSwgdCkge1xuICBpZiAodCA8IDApIHQgKz0gMTtcbiAgaWYgKHQgPiAxKSB0IC09IDE7XG4gIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICByZXR1cm4gcDtcbn1cblxuY2xhc3MgQ29sb3Ige1xuICBjb25zdHJ1Y3RvciguLi5pbnB1dHMpIHtcbiAgICB0aGlzLmluaXQoLi4uaW5wdXRzKTtcbiAgfSAvLyBUZXN0IGlmIGdpdmVuIHZhbHVlIGlzIGEgY29sb3JcblxuXG4gIHN0YXRpYyBpc0NvbG9yKGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yICYmIChjb2xvciBpbnN0YW5jZW9mIENvbG9yIHx8IHRoaXMuaXNSZ2IoY29sb3IpIHx8IHRoaXMudGVzdChjb2xvcikpO1xuICB9IC8vIFRlc3QgaWYgZ2l2ZW4gdmFsdWUgaXMgYW4gcmdiIG9iamVjdFxuXG5cbiAgc3RhdGljIGlzUmdiKGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yICYmIHR5cGVvZiBjb2xvci5yID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmIgPT09ICdudW1iZXInO1xuICB9XG4gIC8qXHJcbiAgR2VuZXJhdGluZyByYW5kb20gY29sb3JzXHJcbiAgKi9cblxuXG4gIHN0YXRpYyByYW5kb20obW9kZSA9ICd2aWJyYW50JywgdCwgdSkge1xuICAgIC8vIEdldCB0aGUgbWF0aCBtb2R1bGVzXG4gICAgY29uc3Qge1xuICAgICAgcmFuZG9tLFxuICAgICAgcm91bmQsXG4gICAgICBzaW4sXG4gICAgICBQSTogcGlcbiAgICB9ID0gTWF0aDsgLy8gUnVuIHRoZSBjb3JyZWN0IGdlbmVyYXRvclxuXG4gICAgaWYgKG1vZGUgPT09ICd2aWJyYW50Jykge1xuICAgICAgY29uc3QgbCA9ICg4MSAtIDU3KSAqIHJhbmRvbSgpICsgNTc7XG4gICAgICBjb25zdCBjID0gKDgzIC0gNDUpICogcmFuZG9tKCkgKyA0NTtcbiAgICAgIGNvbnN0IGggPSAzNjAgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGwsIGMsIGgsICdsY2gnKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdzaW5lJykge1xuICAgICAgdCA9IHQgPT0gbnVsbCA/IHJhbmRvbSgpIDogdDtcbiAgICAgIGNvbnN0IHIgPSByb3VuZCg4MCAqIHNpbigyICogcGkgKiB0IC8gMC41ICsgMC4wMSkgKyAxNTApO1xuICAgICAgY29uc3QgZyA9IHJvdW5kKDUwICogc2luKDIgKiBwaSAqIHQgLyAwLjUgKyA0LjYpICsgMjAwKTtcbiAgICAgIGNvbnN0IGIgPSByb3VuZCgxMDAgKiBzaW4oMiAqIHBpICogdCAvIDAuNSArIDIuMykgKyAxNTApO1xuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IociwgZywgYik7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAncGFzdGVsJykge1xuICAgICAgY29uc3QgbCA9ICg5NCAtIDg2KSAqIHJhbmRvbSgpICsgODY7XG4gICAgICBjb25zdCBjID0gKDI2IC0gOSkgKiByYW5kb20oKSArIDk7XG4gICAgICBjb25zdCBoID0gMzYwICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihsLCBjLCBoLCAnbGNoJyk7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnZGFyaycpIHtcbiAgICAgIGNvbnN0IGwgPSAxMCArIDEwICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBjID0gKDEyNSAtIDc1KSAqIHJhbmRvbSgpICsgODY7XG4gICAgICBjb25zdCBoID0gMzYwICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihsLCBjLCBoLCAnbGNoJyk7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAncmdiJykge1xuICAgICAgY29uc3QgciA9IDI1NSAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgZyA9IDI1NSAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgYiA9IDI1NSAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IociwgZywgYik7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnbGFiJykge1xuICAgICAgY29uc3QgbCA9IDEwMCAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgYSA9IDI1NiAqIHJhbmRvbSgpIC0gMTI4O1xuICAgICAgY29uc3QgYiA9IDI1NiAqIHJhbmRvbSgpIC0gMTI4O1xuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IobCwgYSwgYiwgJ2xhYicpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2dyZXknKSB7XG4gICAgICBjb25zdCBncmV5ID0gMjU1ICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihncmV5LCBncmV5LCBncmV5KTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCByYW5kb20gY29sb3IgbW9kZScpO1xuICAgIH1cbiAgfSAvLyBUZXN0IGlmIGdpdmVuIHZhbHVlIGlzIGEgY29sb3Igc3RyaW5nXG5cblxuICBzdGF0aWMgdGVzdChjb2xvcikge1xuICAgIHJldHVybiB0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIChpc0hleC50ZXN0KGNvbG9yKSB8fCBpc1JnYi50ZXN0KGNvbG9yKSk7XG4gIH1cblxuICBjbXlrKCkge1xuICAgIC8vIEdldCB0aGUgcmdiIHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgY29sb3JcbiAgICBjb25zdCB7XG4gICAgICBfYSxcbiAgICAgIF9iLFxuICAgICAgX2NcbiAgICB9ID0gdGhpcy5yZ2IoKTtcbiAgICBjb25zdCBbciwgZywgYl0gPSBbX2EsIF9iLCBfY10ubWFwKHYgPT4gdiAvIDI1NSk7IC8vIEdldCB0aGUgY215ayB2YWx1ZXMgaW4gYW4gdW5ib3VuZGVkIGZvcm1hdFxuXG4gICAgY29uc3QgayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXG4gICAgaWYgKGsgPT09IDEpIHtcbiAgICAgIC8vIENhdGNoIHRoZSBibGFjayBjYXNlXG4gICAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDAsIDEsICdjbXlrJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKTtcbiAgICBjb25zdCBtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspO1xuICAgIGNvbnN0IHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gayk7IC8vIENvbnN0cnVjdCB0aGUgbmV3IGNvbG9yXG5cbiAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihjLCBtLCB5LCBrLCAnY215aycpO1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGhzbCgpIHtcbiAgICAvLyBHZXQgdGhlIHJnYiB2YWx1ZXNcbiAgICBjb25zdCB7XG4gICAgICBfYSxcbiAgICAgIF9iLFxuICAgICAgX2NcbiAgICB9ID0gdGhpcy5yZ2IoKTtcbiAgICBjb25zdCBbciwgZywgYl0gPSBbX2EsIF9iLCBfY10ubWFwKHYgPT4gdiAvIDI1NSk7IC8vIEZpbmQgdGhlIG1heGltdW0gYW5kIG1pbmltdW0gdmFsdWVzIHRvIGdldCB0aGUgbGlnaHRuZXNzXG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBjb25zdCBsID0gKG1heCArIG1pbikgLyAyOyAvLyBJZiB0aGUgciwgZywgdiB2YWx1ZXMgYXJlIGlkZW50aWNhbCB0aGVuIHdlIGFyZSBncmV5XG5cbiAgICBjb25zdCBpc0dyZXkgPSBtYXggPT09IG1pbjsgLy8gQ2FsY3VsYXRlIHRoZSBodWUgYW5kIHNhdHVyYXRpb25cblxuICAgIGNvbnN0IGRlbHRhID0gbWF4IC0gbWluO1xuICAgIGNvbnN0IHMgPSBpc0dyZXkgPyAwIDogbCA+IDAuNSA/IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pIDogZGVsdGEgLyAobWF4ICsgbWluKTtcbiAgICBjb25zdCBoID0gaXNHcmV5ID8gMCA6IG1heCA9PT0gciA/ICgoZyAtIGIpIC8gZGVsdGEgKyAoZyA8IGIgPyA2IDogMCkpIC8gNiA6IG1heCA9PT0gZyA/ICgoYiAtIHIpIC8gZGVsdGEgKyAyKSAvIDYgOiBtYXggPT09IGIgPyAoKHIgLSBnKSAvIGRlbHRhICsgNCkgLyA2IDogMDsgLy8gQ29uc3RydWN0IGFuZCByZXR1cm4gdGhlIG5ldyBjb2xvclxuXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoMzYwICogaCwgMTAwICogcywgMTAwICogbCwgJ2hzbCcpO1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGluaXQoYSA9IDAsIGIgPSAwLCBjID0gMCwgZCA9IDAsIHNwYWNlID0gJ3JnYicpIHtcbiAgICAvLyBUaGlzIGNhdGNoZXMgdGhlIGNhc2Ugd2hlbiBhIGZhbHN5IHZhbHVlIGlzIHBhc3NlZCBsaWtlICcnXG4gICAgYSA9ICFhID8gMCA6IGE7IC8vIFJlc2V0IGFsbCB2YWx1ZXMgaW4gY2FzZSB0aGUgaW5pdCBmdW5jdGlvbiBpcyByZXJ1biB3aXRoIG5ldyBjb2xvciBzcGFjZVxuXG4gICAgaWYgKHRoaXMuc3BhY2UpIHtcbiAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IGluIHRoaXMuc3BhY2UpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNbdGhpcy5zcGFjZVtjb21wb25lbnRdXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGEgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBBbGxvdyBmb3IgdGhlIGNhc2UgdGhhdCB3ZSBkb24ndCBuZWVkIGQuLi5cbiAgICAgIHNwYWNlID0gdHlwZW9mIGQgPT09ICdzdHJpbmcnID8gZCA6IHNwYWNlO1xuICAgICAgZCA9IHR5cGVvZiBkID09PSAnc3RyaW5nJyA/IDAgOiBkOyAvLyBBc3NpZ24gdGhlIHZhbHVlcyBzdHJhaWdodCB0byB0aGUgY29sb3JcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgIF9hOiBhLFxuICAgICAgICBfYjogYixcbiAgICAgICAgX2M6IGMsXG4gICAgICAgIF9kOiBkLFxuICAgICAgICBzcGFjZVxuICAgICAgfSk7IC8vIElmIHRoZSB1c2VyIGdhdmUgdXMgYW4gYXJyYXksIG1ha2UgdGhlIGNvbG9yIGZyb20gaXRcbiAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy5zcGFjZSA9IGIgfHwgKHR5cGVvZiBhWzNdID09PSAnc3RyaW5nJyA/IGFbM10gOiBhWzRdKSB8fCAncmdiJztcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICBfYTogYVswXSxcbiAgICAgICAgX2I6IGFbMV0sXG4gICAgICAgIF9jOiBhWzJdLFxuICAgICAgICBfZDogYVszXSB8fCAwXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIC8vIFNldCB0aGUgb2JqZWN0IHVwIGFuZCBhc3NpZ24gaXRzIHZhbHVlcyBkaXJlY3RseVxuICAgICAgY29uc3QgdmFsdWVzID0gZ2V0UGFyYW1ldGVycyhhLCBiKTtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgdmFsdWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlzUmdiLnRlc3QoYSkpIHtcbiAgICAgICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gYS5yZXBsYWNlKHdoaXRlc3BhY2UsICcnKTtcbiAgICAgICAgY29uc3QgW19hLCBfYiwgX2NdID0gcmdiLmV4ZWMobm9XaGl0ZXNwYWNlKS5zbGljZSgxLCA0KS5tYXAodiA9PiBwYXJzZUludCh2KSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIF9hLFxuICAgICAgICAgIF9iLFxuICAgICAgICAgIF9jLFxuICAgICAgICAgIF9kOiAwLFxuICAgICAgICAgIHNwYWNlOiAncmdiJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNIZXgudGVzdChhKSkge1xuICAgICAgICBjb25zdCBoZXhQYXJzZSA9IHYgPT4gcGFyc2VJbnQodiwgMTYpO1xuXG4gICAgICAgIGNvbnN0IFssIF9hLCBfYiwgX2NdID0gaGV4LmV4ZWMoc2l4RGlnaXRIZXgoYSkpLm1hcChoZXhQYXJzZSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIF9hLFxuICAgICAgICAgIF9iLFxuICAgICAgICAgIF9jLFxuICAgICAgICAgIF9kOiAwLFxuICAgICAgICAgIHNwYWNlOiAncmdiJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0aHJvdyBFcnJvcignVW5zdXBwb3J0ZWQgc3RyaW5nIGZvcm1hdCwgY2FuXFwndCBjb25zdHJ1Y3QgQ29sb3InKTtcbiAgICB9IC8vIE5vdyBhZGQgdGhlIGNvbXBvbmVudHMgYXMgYSBjb252ZW5pZW5jZVxuXG5cbiAgICBjb25zdCB7XG4gICAgICBfYSxcbiAgICAgIF9iLFxuICAgICAgX2MsXG4gICAgICBfZFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLnNwYWNlID09PSAncmdiJyA/IHtcbiAgICAgIHI6IF9hLFxuICAgICAgZzogX2IsXG4gICAgICBiOiBfY1xuICAgIH0gOiB0aGlzLnNwYWNlID09PSAneHl6JyA/IHtcbiAgICAgIHg6IF9hLFxuICAgICAgeTogX2IsXG4gICAgICB6OiBfY1xuICAgIH0gOiB0aGlzLnNwYWNlID09PSAnaHNsJyA/IHtcbiAgICAgIGg6IF9hLFxuICAgICAgczogX2IsXG4gICAgICBsOiBfY1xuICAgIH0gOiB0aGlzLnNwYWNlID09PSAnbGFiJyA/IHtcbiAgICAgIGw6IF9hLFxuICAgICAgYTogX2IsXG4gICAgICBiOiBfY1xuICAgIH0gOiB0aGlzLnNwYWNlID09PSAnbGNoJyA/IHtcbiAgICAgIGw6IF9hLFxuICAgICAgYzogX2IsXG4gICAgICBoOiBfY1xuICAgIH0gOiB0aGlzLnNwYWNlID09PSAnY215aycgPyB7XG4gICAgICBjOiBfYSxcbiAgICAgIG06IF9iLFxuICAgICAgeTogX2MsXG4gICAgICBrOiBfZFxuICAgIH0gOiB7fTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgbGFiKCkge1xuICAgIC8vIEdldCB0aGUgeHl6IGNvbG9yXG4gICAgY29uc3Qge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB6XG4gICAgfSA9IHRoaXMueHl6KCk7IC8vIEdldCB0aGUgbGFiIGNvbXBvbmVudHNcblxuICAgIGNvbnN0IGwgPSAxMTYgKiB5IC0gMTY7XG4gICAgY29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG4gICAgY29uc3QgYiA9IDIwMCAqICh5IC0geik7IC8vIENvbnN0cnVjdCBhbmQgcmV0dXJuIGEgbmV3IGNvbG9yXG5cbiAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihsLCBhLCBiLCAnbGFiJyk7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgbGNoKCkge1xuICAgIC8vIEdldCB0aGUgbGFiIGNvbG9yIGRpcmVjdGx5XG4gICAgY29uc3Qge1xuICAgICAgbCxcbiAgICAgIGEsXG4gICAgICBiXG4gICAgfSA9IHRoaXMubGFiKCk7IC8vIEdldCB0aGUgY2hyb21hdGljaXR5IGFuZCB0aGUgaHVlIHVzaW5nIHBvbGFyIGNvb3JkaW5hdGVzXG5cbiAgICBjb25zdCBjID0gTWF0aC5zcXJ0KGEgKiogMiArIGIgKiogMik7XG4gICAgbGV0IGggPSAxODAgKiBNYXRoLmF0YW4yKGIsIGEpIC8gTWF0aC5QSTtcblxuICAgIGlmIChoIDwgMCkge1xuICAgICAgaCAqPSAtMTtcbiAgICAgIGggPSAzNjAgLSBoO1xuICAgIH0gLy8gTWFrZSBhIG5ldyBjb2xvciBhbmQgcmV0dXJuIGl0XG5cblxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGwsIGMsIGgsICdsY2gnKTtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cbiAgLypcclxuICBDb252ZXJzaW9uIE1ldGhvZHNcclxuICAqL1xuXG5cbiAgcmdiKCkge1xuICAgIGlmICh0aGlzLnNwYWNlID09PSAncmdiJykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIGlmIChjaWVTcGFjZSh0aGlzLnNwYWNlKSkge1xuICAgICAgLy8gQ29udmVydCB0byB0aGUgeHl6IGNvbG9yIHNwYWNlXG4gICAgICBsZXQge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB6XG4gICAgICB9ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuc3BhY2UgPT09ICdsYWInIHx8IHRoaXMuc3BhY2UgPT09ICdsY2gnKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdmFsdWVzIGluIHRoZSBsYWIgc3BhY2VcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBsLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgYlxuICAgICAgICB9ID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5zcGFjZSA9PT0gJ2xjaCcpIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgaFxuICAgICAgICAgIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IGRUb1IgPSBNYXRoLlBJIC8gMTgwO1xuICAgICAgICAgIGEgPSBjICogTWF0aC5jb3MoZFRvUiAqIGgpO1xuICAgICAgICAgIGIgPSBjICogTWF0aC5zaW4oZFRvUiAqIGgpO1xuICAgICAgICB9IC8vIFVuZG8gdGhlIG5vbmxpbmVhciBmdW5jdGlvblxuXG5cbiAgICAgICAgY29uc3QgeUwgPSAobCArIDE2KSAvIDExNjtcbiAgICAgICAgY29uc3QgeEwgPSBhIC8gNTAwICsgeUw7XG4gICAgICAgIGNvbnN0IHpMID0geUwgLSBiIC8gMjAwOyAvLyBHZXQgdGhlIHh5eiB2YWx1ZXNcblxuICAgICAgICBjb25zdCBjdCA9IDE2IC8gMTE2O1xuICAgICAgICBjb25zdCBteCA9IDAuMDA4ODU2O1xuICAgICAgICBjb25zdCBubSA9IDcuNzg3O1xuICAgICAgICB4ID0gMC45NTA0NyAqICh4TCAqKiAzID4gbXggPyB4TCAqKiAzIDogKHhMIC0gY3QpIC8gbm0pO1xuICAgICAgICB5ID0gMS4wMDAwMCAqICh5TCAqKiAzID4gbXggPyB5TCAqKiAzIDogKHlMIC0gY3QpIC8gbm0pO1xuICAgICAgICB6ID0gMS4wODg4MyAqICh6TCAqKiAzID4gbXggPyB6TCAqKiAzIDogKHpMIC0gY3QpIC8gbm0pO1xuICAgICAgfSAvLyBDb252ZXJ0IHh5eiB0byB1bmJvdW5kZWQgcmdiIHZhbHVlc1xuXG5cbiAgICAgIGNvbnN0IHJVID0geCAqIDMuMjQwNiArIHkgKiAtMS41MzcyICsgeiAqIC0wLjQ5ODY7XG4gICAgICBjb25zdCBnVSA9IHggKiAtMC45Njg5ICsgeSAqIDEuODc1OCArIHogKiAwLjA0MTU7XG4gICAgICBjb25zdCBiVSA9IHggKiAwLjA1NTcgKyB5ICogLTAuMjA0MCArIHogKiAxLjA1NzA7IC8vIENvbnZlcnQgdGhlIHZhbHVlcyB0byB0cnVlIHJnYiB2YWx1ZXNcblxuICAgICAgY29uc3QgcG93ID0gTWF0aC5wb3c7XG4gICAgICBjb25zdCBiZCA9IDAuMDAzMTMwODtcbiAgICAgIGNvbnN0IHIgPSByVSA+IGJkID8gMS4wNTUgKiBwb3coclUsIDEgLyAyLjQpIC0gMC4wNTUgOiAxMi45MiAqIHJVO1xuICAgICAgY29uc3QgZyA9IGdVID4gYmQgPyAxLjA1NSAqIHBvdyhnVSwgMSAvIDIuNCkgLSAwLjA1NSA6IDEyLjkyICogZ1U7XG4gICAgICBjb25zdCBiID0gYlUgPiBiZCA/IDEuMDU1ICogcG93KGJVLCAxIC8gMi40KSAtIDAuMDU1IDogMTIuOTIgKiBiVTsgLy8gTWFrZSBhbmQgcmV0dXJuIHRoZSBjb2xvclxuXG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcigyNTUgKiByLCAyNTUgKiBnLCAyNTUgKiBiKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3BhY2UgPT09ICdoc2wnKSB7XG4gICAgICAvLyBodHRwczovL2Jncmlucy5naXRodWIuaW8vVGlueUNvbG9yL2RvY3MvdGlueWNvbG9yLmh0bWxcbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCBoc2wgdmFsdWVzXG4gICAgICBsZXQge1xuICAgICAgICBoLFxuICAgICAgICBzLFxuICAgICAgICBsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGggLz0gMzYwO1xuICAgICAgcyAvPSAxMDA7XG4gICAgICBsIC89IDEwMDsgLy8gSWYgd2UgYXJlIGdyZXksIHRoZW4ganVzdCBtYWtlIHRoZSBjb2xvciBkaXJlY3RseVxuXG4gICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICBsICo9IDI1NTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IobCwgbCwgbCk7XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICAgIH0gLy8gVE9ETyBJIGhhdmUgbm8gaWRlYSB3aGF0IHRoaXMgZG9lcyA6RCBJZiB5b3UgZmlndXJlIGl0IG91dCwgdGVsbCBtZSFcblxuXG4gICAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgIGNvbnN0IHAgPSAyICogbCAtIHE7IC8vIEdldCB0aGUgcmdiIHZhbHVlc1xuXG4gICAgICBjb25zdCByID0gMjU1ICogaHVlVG9SZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgIGNvbnN0IGcgPSAyNTUgKiBodWVUb1JnYihwLCBxLCBoKTtcbiAgICAgIGNvbnN0IGIgPSAyNTUgKiBodWVUb1JnYihwLCBxLCBoIC0gMSAvIDMpOyAvLyBNYWtlIGEgbmV3IGNvbG9yXG5cbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKHIsIGcsIGIpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zcGFjZSA9PT0gJ2NteWsnKSB7XG4gICAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mZWxpcGVzYWJpbm8vNTA2NjMzNlxuICAgICAgLy8gR2V0IHRoZSBub3JtYWxpc2VkIGNteWsgdmFsdWVzXG4gICAgICBjb25zdCB7XG4gICAgICAgIGMsXG4gICAgICAgIG0sXG4gICAgICAgIHksXG4gICAgICAgIGtcbiAgICAgIH0gPSB0aGlzOyAvLyBHZXQgdGhlIHJnYiB2YWx1ZXNcblxuICAgICAgY29uc3QgciA9IDI1NSAqICgxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKSk7XG4gICAgICBjb25zdCBnID0gMjU1ICogKDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspKTtcbiAgICAgIGNvbnN0IGIgPSAyNTUgKiAoMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgaykpOyAvLyBGb3JtIHRoZSBjb2xvciBhbmQgcmV0dXJuIGl0XG5cbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKHIsIGcsIGIpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIF9hLFxuICAgICAgX2IsXG4gICAgICBfYyxcbiAgICAgIF9kLFxuICAgICAgc3BhY2VcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gW19hLCBfYiwgX2MsIF9kLCBzcGFjZV07XG4gIH1cblxuICB0b0hleCgpIHtcbiAgICBjb25zdCBbciwgZywgYl0gPSB0aGlzLl9jbGFtcGVkKCkubWFwKGNvbXBvbmVudEhleCk7XG5cbiAgICByZXR1cm4gYCMke3J9JHtnfSR7Yn1gO1xuICB9XG5cbiAgdG9SZ2IoKSB7XG4gICAgY29uc3QgW3JWLCBnViwgYlZdID0gdGhpcy5fY2xhbXBlZCgpO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gYHJnYigke3JWfSwke2dWfSwke2JWfSlgO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy50b0hleCgpO1xuICB9XG5cbiAgeHl6KCkge1xuICAgIC8vIE5vcm1hbGlzZSB0aGUgcmVkLCBncmVlbiBhbmQgYmx1ZSB2YWx1ZXNcbiAgICBjb25zdCB7XG4gICAgICBfYTogcjI1NSxcbiAgICAgIF9iOiBnMjU1LFxuICAgICAgX2M6IGIyNTVcbiAgICB9ID0gdGhpcy5yZ2IoKTtcbiAgICBjb25zdCBbciwgZywgYl0gPSBbcjI1NSwgZzI1NSwgYjI1NV0ubWFwKHYgPT4gdiAvIDI1NSk7IC8vIENvbnZlcnQgdG8gdGhlIGxhYiByZ2Igc3BhY2VcblxuICAgIGNvbnN0IHJMID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygociArIDAuMDU1KSAvIDEuMDU1LCAyLjQpIDogciAvIDEyLjkyO1xuICAgIGNvbnN0IGdMID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoZyArIDAuMDU1KSAvIDEuMDU1LCAyLjQpIDogZyAvIDEyLjkyO1xuICAgIGNvbnN0IGJMID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoYiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpIDogYiAvIDEyLjkyOyAvLyBDb252ZXJ0IHRvIHRoZSB4eXogY29sb3Igc3BhY2Ugd2l0aG91dCBib3VuZGluZyB0aGUgdmFsdWVzXG5cbiAgICBjb25zdCB4VSA9IChyTCAqIDAuNDEyNCArIGdMICogMC4zNTc2ICsgYkwgKiAwLjE4MDUpIC8gMC45NTA0NztcbiAgICBjb25zdCB5VSA9IChyTCAqIDAuMjEyNiArIGdMICogMC43MTUyICsgYkwgKiAwLjA3MjIpIC8gMS4wMDAwMDtcbiAgICBjb25zdCB6VSA9IChyTCAqIDAuMDE5MyArIGdMICogMC4xMTkyICsgYkwgKiAwLjk1MDUpIC8gMS4wODg4MzsgLy8gR2V0IHRoZSBwcm9wZXIgeHl6IHZhbHVlcyBieSBhcHBseWluZyB0aGUgYm91bmRpbmdcblxuICAgIGNvbnN0IHggPSB4VSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeFUsIDEgLyAzKSA6IDcuNzg3ICogeFUgKyAxNiAvIDExNjtcbiAgICBjb25zdCB5ID0geVUgPiAwLjAwODg1NiA/IE1hdGgucG93KHlVLCAxIC8gMykgOiA3Ljc4NyAqIHlVICsgMTYgLyAxMTY7XG4gICAgY29uc3QgeiA9IHpVID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6VSwgMSAvIDMpIDogNy43ODcgKiB6VSArIDE2IC8gMTE2OyAvLyBNYWtlIGFuZCByZXR1cm4gdGhlIGNvbG9yXG5cbiAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcih4LCB5LCB6LCAneHl6Jyk7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG4gIC8qXHJcbiAgSW5wdXQgYW5kIE91dHB1dCBtZXRob2RzXHJcbiAgKi9cblxuXG4gIF9jbGFtcGVkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIF9hLFxuICAgICAgX2IsXG4gICAgICBfY1xuICAgIH0gPSB0aGlzLnJnYigpO1xuICAgIGNvbnN0IHtcbiAgICAgIG1heCxcbiAgICAgIG1pbixcbiAgICAgIHJvdW5kXG4gICAgfSA9IE1hdGg7XG5cbiAgICBjb25zdCBmb3JtYXQgPSB2ID0+IG1heCgwLCBtaW4ocm91bmQodiksIDI1NSkpO1xuXG4gICAgcmV0dXJuIFtfYSwgX2IsIF9jXS5tYXAoZm9ybWF0KTtcbiAgfVxuICAvKlxyXG4gIENvbnN0cnVjdGluZyBjb2xvcnNcclxuICAqL1xuXG5cbn1cblxuY2xhc3MgUG9pbnQge1xuICAvLyBJbml0aWFsaXplXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gIH0gLy8gQ2xvbmUgcG9pbnRcblxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcyk7XG4gIH1cblxuICBpbml0KHgsIHkpIHtcbiAgICBjb25zdCBiYXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9OyAvLyBlbnN1cmUgc291cmNlIGFzIG9iamVjdFxuXG4gICAgY29uc3Qgc291cmNlID0gQXJyYXkuaXNBcnJheSh4KSA/IHtcbiAgICAgIHg6IHhbMF0sXG4gICAgICB5OiB4WzFdXG4gICAgfSA6IHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/IHtcbiAgICAgIHg6IHgueCxcbiAgICAgIHk6IHgueVxuICAgIH0gOiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07IC8vIG1lcmdlIHNvdXJjZVxuXG4gICAgdGhpcy54ID0gc291cmNlLnggPT0gbnVsbCA/IGJhc2UueCA6IHNvdXJjZS54O1xuICAgIHRoaXMueSA9IHNvdXJjZS55ID09IG51bGwgPyBiYXNlLnkgOiBzb3VyY2UueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gIH1cblxuICB0cmFuc2Zvcm0obSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkudHJhbnNmb3JtTyhtKTtcbiAgfSAvLyBUcmFuc2Zvcm0gcG9pbnQgd2l0aCBtYXRyaXhcblxuXG4gIHRyYW5zZm9ybU8obSkge1xuICAgIGlmICghTWF0cml4LmlzTWF0cml4TGlrZShtKSkge1xuICAgICAgbSA9IG5ldyBNYXRyaXgobSk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gdGhpczsgLy8gUGVyZm9ybSB0aGUgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgICB0aGlzLnggPSBtLmEgKiB4ICsgbS5jICogeSArIG0uZTtcbiAgICB0aGlzLnkgPSBtLmIgKiB4ICsgbS5kICogeSArIG0uZjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5mdW5jdGlvbiBwb2ludCh4LCB5KSB7XG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSkudHJhbnNmb3JtKHRoaXMuc2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VFbm91Z2goYSwgYiwgdGhyZXNob2xkKSB7XG4gIHJldHVybiBNYXRoLmFicyhiIC0gYSkgPCAodGhyZXNob2xkIHx8IDFlLTYpO1xufVxuXG5jbGFzcyBNYXRyaXgge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1hdFRyYW5zZm9ybXMobykge1xuICAgIC8vIEdldCBhbGwgb2YgdGhlIHBhcmFtZXRlcnMgcmVxdWlyZWQgdG8gZm9ybSB0aGUgbWF0cml4XG4gICAgY29uc3QgZmxpcEJvdGggPSBvLmZsaXAgPT09ICdib3RoJyB8fCBvLmZsaXAgPT09IHRydWU7XG4gICAgY29uc3QgZmxpcFggPSBvLmZsaXAgJiYgKGZsaXBCb3RoIHx8IG8uZmxpcCA9PT0gJ3gnKSA/IC0xIDogMTtcbiAgICBjb25zdCBmbGlwWSA9IG8uZmxpcCAmJiAoZmxpcEJvdGggfHwgby5mbGlwID09PSAneScpID8gLTEgOiAxO1xuICAgIGNvbnN0IHNrZXdYID0gby5za2V3ICYmIG8uc2tldy5sZW5ndGggPyBvLnNrZXdbMF0gOiBpc0Zpbml0ZShvLnNrZXcpID8gby5za2V3IDogaXNGaW5pdGUoby5za2V3WCkgPyBvLnNrZXdYIDogMDtcbiAgICBjb25zdCBza2V3WSA9IG8uc2tldyAmJiBvLnNrZXcubGVuZ3RoID8gby5za2V3WzFdIDogaXNGaW5pdGUoby5za2V3KSA/IG8uc2tldyA6IGlzRmluaXRlKG8uc2tld1kpID8gby5za2V3WSA6IDA7XG4gICAgY29uc3Qgc2NhbGVYID0gby5zY2FsZSAmJiBvLnNjYWxlLmxlbmd0aCA/IG8uc2NhbGVbMF0gKiBmbGlwWCA6IGlzRmluaXRlKG8uc2NhbGUpID8gby5zY2FsZSAqIGZsaXBYIDogaXNGaW5pdGUoby5zY2FsZVgpID8gby5zY2FsZVggKiBmbGlwWCA6IGZsaXBYO1xuICAgIGNvbnN0IHNjYWxlWSA9IG8uc2NhbGUgJiYgby5zY2FsZS5sZW5ndGggPyBvLnNjYWxlWzFdICogZmxpcFkgOiBpc0Zpbml0ZShvLnNjYWxlKSA/IG8uc2NhbGUgKiBmbGlwWSA6IGlzRmluaXRlKG8uc2NhbGVZKSA/IG8uc2NhbGVZICogZmxpcFkgOiBmbGlwWTtcbiAgICBjb25zdCBzaGVhciA9IG8uc2hlYXIgfHwgMDtcbiAgICBjb25zdCB0aGV0YSA9IG8ucm90YXRlIHx8IG8udGhldGEgfHwgMDtcbiAgICBjb25zdCBvcmlnaW4gPSBuZXcgUG9pbnQoby5vcmlnaW4gfHwgby5hcm91bmQgfHwgby5veCB8fCBvLm9yaWdpblgsIG8ub3kgfHwgby5vcmlnaW5ZKTtcbiAgICBjb25zdCBveCA9IG9yaWdpbi54O1xuICAgIGNvbnN0IG95ID0gb3JpZ2luLnk7IC8vIFdlIG5lZWQgUG9pbnQgdG8gYmUgaW52YWxpZCBpZiBub3RoaW5nIHdhcyBwYXNzZWQgYmVjYXVzZSB3ZSBjYW5ub3QgZGVmYXVsdCB0byAwIGhlcmUuIFRoYXRzIHdoeSBOYU5cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KG8ucG9zaXRpb24gfHwgby5weCB8fCBvLnBvc2l0aW9uWCB8fCBOYU4sIG8ucHkgfHwgby5wb3NpdGlvblkgfHwgTmFOKTtcbiAgICBjb25zdCBweCA9IHBvc2l0aW9uLng7XG4gICAgY29uc3QgcHkgPSBwb3NpdGlvbi55O1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IG5ldyBQb2ludChvLnRyYW5zbGF0ZSB8fCBvLnR4IHx8IG8udHJhbnNsYXRlWCwgby50eSB8fCBvLnRyYW5zbGF0ZVkpO1xuICAgIGNvbnN0IHR4ID0gdHJhbnNsYXRlLng7XG4gICAgY29uc3QgdHkgPSB0cmFuc2xhdGUueTtcbiAgICBjb25zdCByZWxhdGl2ZSA9IG5ldyBQb2ludChvLnJlbGF0aXZlIHx8IG8ucnggfHwgby5yZWxhdGl2ZVgsIG8ucnkgfHwgby5yZWxhdGl2ZVkpO1xuICAgIGNvbnN0IHJ4ID0gcmVsYXRpdmUueDtcbiAgICBjb25zdCByeSA9IHJlbGF0aXZlLnk7IC8vIFBvcHVsYXRlIGFsbCBvZiB0aGUgdmFsdWVzXG5cbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGVYLFxuICAgICAgc2NhbGVZLFxuICAgICAgc2tld1gsXG4gICAgICBza2V3WSxcbiAgICAgIHNoZWFyLFxuICAgICAgdGhldGEsXG4gICAgICByeCxcbiAgICAgIHJ5LFxuICAgICAgdHgsXG4gICAgICB0eSxcbiAgICAgIG94LFxuICAgICAgb3ksXG4gICAgICBweCxcbiAgICAgIHB5XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYSkge1xuICAgIHJldHVybiB7XG4gICAgICBhOiBhWzBdLFxuICAgICAgYjogYVsxXSxcbiAgICAgIGM6IGFbMl0sXG4gICAgICBkOiBhWzNdLFxuICAgICAgZTogYVs0XSxcbiAgICAgIGY6IGFbNV1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGlzTWF0cml4TGlrZShvKSB7XG4gICAgcmV0dXJuIG8uYSAhPSBudWxsIHx8IG8uYiAhPSBudWxsIHx8IG8uYyAhPSBudWxsIHx8IG8uZCAhPSBudWxsIHx8IG8uZSAhPSBudWxsIHx8IG8uZiAhPSBudWxsO1xuICB9IC8vIGxlZnQgbWF0cml4LCByaWdodCBtYXRyaXgsIHRhcmdldCBtYXRyaXggd2hpY2ggaXMgb3ZlcndyaXR0ZW5cblxuXG4gIHN0YXRpYyBtYXRyaXhNdWx0aXBseShsLCByLCBvKSB7XG4gICAgLy8gV29yayBvdXQgdGhlIHByb2R1Y3QgZGlyZWN0bHlcbiAgICBjb25zdCBhID0gbC5hICogci5hICsgbC5jICogci5iO1xuICAgIGNvbnN0IGIgPSBsLmIgKiByLmEgKyBsLmQgKiByLmI7XG4gICAgY29uc3QgYyA9IGwuYSAqIHIuYyArIGwuYyAqIHIuZDtcbiAgICBjb25zdCBkID0gbC5iICogci5jICsgbC5kICogci5kO1xuICAgIGNvbnN0IGUgPSBsLmUgKyBsLmEgKiByLmUgKyBsLmMgKiByLmY7XG4gICAgY29uc3QgZiA9IGwuZiArIGwuYiAqIHIuZSArIGwuZCAqIHIuZjsgLy8gbWFrZSBzdXJlIHRvIHVzZSBsb2NhbCB2YXJpYWJsZXMgYmVjYXVzZSBsL3IgYW5kIG8gY291bGQgYmUgdGhlIHNhbWVcblxuICAgIG8uYSA9IGE7XG4gICAgby5iID0gYjtcbiAgICBvLmMgPSBjO1xuICAgIG8uZCA9IGQ7XG4gICAgby5lID0gZTtcbiAgICBvLmYgPSBmO1xuICAgIHJldHVybiBvO1xuICB9XG5cbiAgYXJvdW5kKGN4LCBjeSwgbWF0cml4KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5hcm91bmRPKGN4LCBjeSwgbWF0cml4KTtcbiAgfSAvLyBUcmFuc2Zvcm0gYXJvdW5kIGEgY2VudGVyIHBvaW50XG5cblxuICBhcm91bmRPKGN4LCBjeSwgbWF0cml4KSB7XG4gICAgY29uc3QgZHggPSBjeCB8fCAwO1xuICAgIGNvbnN0IGR5ID0gY3kgfHwgMDtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVPKC1keCwgLWR5KS5sbXVsdGlwbHlPKG1hdHJpeCkudHJhbnNsYXRlTyhkeCwgZHkpO1xuICB9IC8vIENsb25lcyB0aGlzIG1hdHJpeFxuXG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgodGhpcyk7XG4gIH0gLy8gRGVjb21wb3NlcyB0aGlzIG1hdHJpeCBpbnRvIGl0cyBhZmZpbmUgcGFyYW1ldGVyc1xuXG5cbiAgZGVjb21wb3NlKGN4ID0gMCwgY3kgPSAwKSB7XG4gICAgLy8gR2V0IHRoZSBwYXJhbWV0ZXJzIGZyb20gdGhlIG1hdHJpeFxuICAgIGNvbnN0IGEgPSB0aGlzLmE7XG4gICAgY29uc3QgYiA9IHRoaXMuYjtcbiAgICBjb25zdCBjID0gdGhpcy5jO1xuICAgIGNvbnN0IGQgPSB0aGlzLmQ7XG4gICAgY29uc3QgZSA9IHRoaXMuZTtcbiAgICBjb25zdCBmID0gdGhpcy5mOyAvLyBGaWd1cmUgb3V0IGlmIHRoZSB3aW5kaW5nIGRpcmVjdGlvbiBpcyBjbG9ja3dpc2Ugb3IgY291bnRlcmNsb2Nrd2lzZVxuXG4gICAgY29uc3QgZGV0ZXJtaW5hbnQgPSBhICogZCAtIGIgKiBjO1xuICAgIGNvbnN0IGNjdyA9IGRldGVybWluYW50ID4gMCA/IDEgOiAtMTsgLy8gU2luY2Ugd2Ugb25seSBzaGVhciBpbiB4LCB3ZSBjYW4gdXNlIHRoZSB4IGJhc2lzIHRvIGdldCB0aGUgeCBzY2FsZVxuICAgIC8vIGFuZCB0aGUgcm90YXRpb24gb2YgdGhlIHJlc3VsdGluZyBtYXRyaXhcblxuICAgIGNvbnN0IHN4ID0gY2N3ICogTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgIGNvbnN0IHRoZXRhUmFkID0gTWF0aC5hdGFuMihjY3cgKiBiLCBjY3cgKiBhKTtcbiAgICBjb25zdCB0aGV0YSA9IDE4MCAvIE1hdGguUEkgKiB0aGV0YVJhZDtcbiAgICBjb25zdCBjdCA9IE1hdGguY29zKHRoZXRhUmFkKTtcbiAgICBjb25zdCBzdCA9IE1hdGguc2luKHRoZXRhUmFkKTsgLy8gV2UgY2FuIHRoZW4gc29sdmUgdGhlIHkgYmFzaXMgdmVjdG9yIHNpbXVsdGFuZW91c2x5IHRvIGdldCB0aGUgb3RoZXJcbiAgICAvLyB0d28gYWZmaW5lIHBhcmFtZXRlcnMgZGlyZWN0bHkgZnJvbSB0aGVzZSBwYXJhbWV0ZXJzXG5cbiAgICBjb25zdCBsYW0gPSAoYSAqIGMgKyBiICogZCkgLyBkZXRlcm1pbmFudDtcbiAgICBjb25zdCBzeSA9IGMgKiBzeCAvIChsYW0gKiBhIC0gYikgfHwgZCAqIHN4IC8gKGxhbSAqIGIgKyBhKTsgLy8gVXNlIHRoZSB0cmFuc2xhdGlvbnNcblxuICAgIGNvbnN0IHR4ID0gZSAtIGN4ICsgY3ggKiBjdCAqIHN4ICsgY3kgKiAobGFtICogY3QgKiBzeCAtIHN0ICogc3kpO1xuICAgIGNvbnN0IHR5ID0gZiAtIGN5ICsgY3ggKiBzdCAqIHN4ICsgY3kgKiAobGFtICogc3QgKiBzeCArIGN0ICogc3kpOyAvLyBDb25zdHJ1Y3QgdGhlIGRlY29tcG9zaXRpb24gYW5kIHJldHVybiBpdFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFJldHVybiB0aGUgYWZmaW5lIHBhcmFtZXRlcnNcbiAgICAgIHNjYWxlWDogc3gsXG4gICAgICBzY2FsZVk6IHN5LFxuICAgICAgc2hlYXI6IGxhbSxcbiAgICAgIHJvdGF0ZTogdGhldGEsXG4gICAgICB0cmFuc2xhdGVYOiB0eCxcbiAgICAgIHRyYW5zbGF0ZVk6IHR5LFxuICAgICAgb3JpZ2luWDogY3gsXG4gICAgICBvcmlnaW5ZOiBjeSxcbiAgICAgIC8vIFJldHVybiB0aGUgbWF0cml4IHBhcmFtZXRlcnNcbiAgICAgIGE6IHRoaXMuYSxcbiAgICAgIGI6IHRoaXMuYixcbiAgICAgIGM6IHRoaXMuYyxcbiAgICAgIGQ6IHRoaXMuZCxcbiAgICAgIGU6IHRoaXMuZSxcbiAgICAgIGY6IHRoaXMuZlxuICAgIH07XG4gIH0gLy8gQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxuXG5cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKG90aGVyID09PSB0aGlzKSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBjb21wID0gbmV3IE1hdHJpeChvdGhlcik7XG4gICAgcmV0dXJuIGNsb3NlRW5vdWdoKHRoaXMuYSwgY29tcC5hKSAmJiBjbG9zZUVub3VnaCh0aGlzLmIsIGNvbXAuYikgJiYgY2xvc2VFbm91Z2godGhpcy5jLCBjb21wLmMpICYmIGNsb3NlRW5vdWdoKHRoaXMuZCwgY29tcC5kKSAmJiBjbG9zZUVub3VnaCh0aGlzLmUsIGNvbXAuZSkgJiYgY2xvc2VFbm91Z2godGhpcy5mLCBjb21wLmYpO1xuICB9IC8vIEZsaXAgbWF0cml4IG9uIHggb3IgeSwgYXQgYSBnaXZlbiBvZmZzZXRcblxuXG4gIGZsaXAoYXhpcywgYXJvdW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5mbGlwTyhheGlzLCBhcm91bmQpO1xuICB9XG5cbiAgZmxpcE8oYXhpcywgYXJvdW5kKSB7XG4gICAgcmV0dXJuIGF4aXMgPT09ICd4JyA/IHRoaXMuc2NhbGVPKC0xLCAxLCBhcm91bmQsIDApIDogYXhpcyA9PT0gJ3knID8gdGhpcy5zY2FsZU8oMSwgLTEsIDAsIGFyb3VuZCkgOiB0aGlzLnNjYWxlTygtMSwgLTEsIGF4aXMsIGFyb3VuZCB8fCBheGlzKTsgLy8gRGVmaW5lIGFuIHgsIHkgZmxpcCBwb2ludFxuICB9IC8vIEluaXRpYWxpemVcblxuXG4gIGluaXQoc291cmNlKSB7XG4gICAgY29uc3QgYmFzZSA9IE1hdHJpeC5mcm9tQXJyYXkoWzEsIDAsIDAsIDEsIDAsIDBdKTsgLy8gZW5zdXJlIHNvdXJjZSBhcyBvYmplY3RcblxuICAgIHNvdXJjZSA9IHNvdXJjZSBpbnN0YW5jZW9mIEVsZW1lbnQgPyBzb3VyY2UubWF0cml4aWZ5KCkgOiB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/IE1hdHJpeC5mcm9tQXJyYXkoc291cmNlLnNwbGl0KGRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpKSA6IEFycmF5LmlzQXJyYXkoc291cmNlKSA/IE1hdHJpeC5mcm9tQXJyYXkoc291cmNlKSA6IHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnICYmIE1hdHJpeC5pc01hdHJpeExpa2Uoc291cmNlKSA/IHNvdXJjZSA6IHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnID8gbmV3IE1hdHJpeCgpLnRyYW5zZm9ybShzb3VyY2UpIDogYXJndW1lbnRzLmxlbmd0aCA9PT0gNiA/IE1hdHJpeC5mcm9tQXJyYXkoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKSA6IGJhc2U7IC8vIE1lcmdlIHRoZSBzb3VyY2UgbWF0cml4IHdpdGggdGhlIGJhc2UgbWF0cml4XG5cbiAgICB0aGlzLmEgPSBzb3VyY2UuYSAhPSBudWxsID8gc291cmNlLmEgOiBiYXNlLmE7XG4gICAgdGhpcy5iID0gc291cmNlLmIgIT0gbnVsbCA/IHNvdXJjZS5iIDogYmFzZS5iO1xuICAgIHRoaXMuYyA9IHNvdXJjZS5jICE9IG51bGwgPyBzb3VyY2UuYyA6IGJhc2UuYztcbiAgICB0aGlzLmQgPSBzb3VyY2UuZCAhPSBudWxsID8gc291cmNlLmQgOiBiYXNlLmQ7XG4gICAgdGhpcy5lID0gc291cmNlLmUgIT0gbnVsbCA/IHNvdXJjZS5lIDogYmFzZS5lO1xuICAgIHRoaXMuZiA9IHNvdXJjZS5mICE9IG51bGwgPyBzb3VyY2UuZiA6IGJhc2UuZjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGludmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5pbnZlcnNlTygpO1xuICB9IC8vIEludmVyc2VzIG1hdHJpeFxuXG5cbiAgaW52ZXJzZU8oKSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHBhcmFtZXRlcnMgb3V0IG9mIHRoZSBtYXRyaXhcbiAgICBjb25zdCBhID0gdGhpcy5hO1xuICAgIGNvbnN0IGIgPSB0aGlzLmI7XG4gICAgY29uc3QgYyA9IHRoaXMuYztcbiAgICBjb25zdCBkID0gdGhpcy5kO1xuICAgIGNvbnN0IGUgPSB0aGlzLmU7XG4gICAgY29uc3QgZiA9IHRoaXMuZjsgLy8gSW52ZXJ0IHRoZSAyeDIgbWF0cml4IGluIHRoZSB0b3AgbGVmdFxuXG4gICAgY29uc3QgZGV0ID0gYSAqIGQgLSBiICogYztcbiAgICBpZiAoIWRldCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW52ZXJ0ICcgKyB0aGlzKTsgLy8gQ2FsY3VsYXRlIHRoZSB0b3AgMngyIG1hdHJpeFxuXG4gICAgY29uc3QgbmEgPSBkIC8gZGV0O1xuICAgIGNvbnN0IG5iID0gLWIgLyBkZXQ7XG4gICAgY29uc3QgbmMgPSAtYyAvIGRldDtcbiAgICBjb25zdCBuZCA9IGEgLyBkZXQ7IC8vIEFwcGx5IHRoZSBpbnZlcnRlZCBtYXRyaXggdG8gdGhlIHRvcCByaWdodFxuXG4gICAgY29uc3QgbmUgPSAtKG5hICogZSArIG5jICogZik7XG4gICAgY29uc3QgbmYgPSAtKG5iICogZSArIG5kICogZik7IC8vIENvbnN0cnVjdCB0aGUgaW52ZXJ0ZWQgbWF0cml4XG5cbiAgICB0aGlzLmEgPSBuYTtcbiAgICB0aGlzLmIgPSBuYjtcbiAgICB0aGlzLmMgPSBuYztcbiAgICB0aGlzLmQgPSBuZDtcbiAgICB0aGlzLmUgPSBuZTtcbiAgICB0aGlzLmYgPSBuZjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxtdWx0aXBseShtYXRyaXgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxtdWx0aXBseU8obWF0cml4KTtcbiAgfVxuXG4gIGxtdWx0aXBseU8obWF0cml4KSB7XG4gICAgY29uc3QgciA9IHRoaXM7XG4gICAgY29uc3QgbCA9IG1hdHJpeCBpbnN0YW5jZW9mIE1hdHJpeCA/IG1hdHJpeCA6IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gTWF0cml4Lm1hdHJpeE11bHRpcGx5KGwsIHIsIHRoaXMpO1xuICB9IC8vIExlZnQgbXVsdGlwbGllcyBieSB0aGUgZ2l2ZW4gbWF0cml4XG5cblxuICBtdWx0aXBseShtYXRyaXgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm11bHRpcGx5TyhtYXRyaXgpO1xuICB9XG5cbiAgbXVsdGlwbHlPKG1hdHJpeCkge1xuICAgIC8vIEdldCB0aGUgbWF0cmljZXNcbiAgICBjb25zdCBsID0gdGhpcztcbiAgICBjb25zdCByID0gbWF0cml4IGluc3RhbmNlb2YgTWF0cml4ID8gbWF0cml4IDogbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBNYXRyaXgubWF0cml4TXVsdGlwbHkobCwgciwgdGhpcyk7XG4gIH0gLy8gUm90YXRlIG1hdHJpeFxuXG5cbiAgcm90YXRlKHIsIGN4LCBjeSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlTyhyLCBjeCwgY3kpO1xuICB9XG5cbiAgcm90YXRlTyhyLCBjeCA9IDAsIGN5ID0gMCkge1xuICAgIC8vIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgciA9IHJhZGlhbnMocik7XG4gICAgY29uc3QgY29zID0gTWF0aC5jb3Mocik7XG4gICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocik7XG4gICAgY29uc3Qge1xuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGUsXG4gICAgICBmXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5hID0gYSAqIGNvcyAtIGIgKiBzaW47XG4gICAgdGhpcy5iID0gYiAqIGNvcyArIGEgKiBzaW47XG4gICAgdGhpcy5jID0gYyAqIGNvcyAtIGQgKiBzaW47XG4gICAgdGhpcy5kID0gZCAqIGNvcyArIGMgKiBzaW47XG4gICAgdGhpcy5lID0gZSAqIGNvcyAtIGYgKiBzaW4gKyBjeSAqIHNpbiAtIGN4ICogY29zICsgY3g7XG4gICAgdGhpcy5mID0gZiAqIGNvcyArIGUgKiBzaW4gLSBjeCAqIHNpbiAtIGN5ICogY29zICsgY3k7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2NhbGUgbWF0cml4XG5cblxuICBzY2FsZSh4LCB5LCBjeCwgY3kpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnNjYWxlTyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgc2NhbGVPKHgsIHkgPSB4LCBjeCA9IDAsIGN5ID0gMCkge1xuICAgIC8vIFN1cHBvcnQgdW5pZm9ybSBzY2FsaW5nXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGN5ID0gY3g7XG4gICAgICBjeCA9IHk7XG4gICAgICB5ID0geDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIGMsXG4gICAgICBkLFxuICAgICAgZSxcbiAgICAgIGZcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLmEgPSBhICogeDtcbiAgICB0aGlzLmIgPSBiICogeTtcbiAgICB0aGlzLmMgPSBjICogeDtcbiAgICB0aGlzLmQgPSBkICogeTtcbiAgICB0aGlzLmUgPSBlICogeCAtIGN4ICogeCArIGN4O1xuICAgIHRoaXMuZiA9IGYgKiB5IC0gY3kgKiB5ICsgY3k7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2hlYXIgbWF0cml4XG5cblxuICBzaGVhcihhLCBjeCwgY3kpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnNoZWFyTyhhLCBjeCwgY3kpO1xuICB9XG5cbiAgc2hlYXJPKGx4LCBjeCA9IDAsIGN5ID0gMCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGEsXG4gICAgICBiLFxuICAgICAgYyxcbiAgICAgIGQsXG4gICAgICBlLFxuICAgICAgZlxuICAgIH0gPSB0aGlzO1xuICAgIHRoaXMuYSA9IGEgKyBiICogbHg7XG4gICAgdGhpcy5jID0gYyArIGQgKiBseDtcbiAgICB0aGlzLmUgPSBlICsgZiAqIGx4IC0gY3kgKiBseDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTa2V3IE1hdHJpeFxuXG5cbiAgc2tldyh4LCB5LCBjeCwgY3kpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnNrZXdPKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICBza2V3Tyh4LCB5ID0geCwgY3ggPSAwLCBjeSA9IDApIHtcbiAgICAvLyBzdXBwb3J0IHVuaWZvcm1hbCBza2V3XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGN5ID0gY3g7XG4gICAgICBjeCA9IHk7XG4gICAgICB5ID0geDtcbiAgICB9IC8vIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG5cblxuICAgIHggPSByYWRpYW5zKHgpO1xuICAgIHkgPSByYWRpYW5zKHkpO1xuICAgIGNvbnN0IGx4ID0gTWF0aC50YW4oeCk7XG4gICAgY29uc3QgbHkgPSBNYXRoLnRhbih5KTtcbiAgICBjb25zdCB7XG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIGMsXG4gICAgICBkLFxuICAgICAgZSxcbiAgICAgIGZcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLmEgPSBhICsgYiAqIGx4O1xuICAgIHRoaXMuYiA9IGIgKyBhICogbHk7XG4gICAgdGhpcy5jID0gYyArIGQgKiBseDtcbiAgICB0aGlzLmQgPSBkICsgYyAqIGx5O1xuICAgIHRoaXMuZSA9IGUgKyBmICogbHggLSBjeSAqIGx4O1xuICAgIHRoaXMuZiA9IGYgKyBlICogbHkgLSBjeCAqIGx5O1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNrZXdYXG5cblxuICBza2V3WCh4LCBjeCwgY3kpIHtcbiAgICByZXR1cm4gdGhpcy5za2V3KHgsIDAsIGN4LCBjeSk7XG4gIH0gLy8gU2tld1lcblxuXG4gIHNrZXdZKHksIGN4LCBjeSkge1xuICAgIHJldHVybiB0aGlzLnNrZXcoMCwgeSwgY3gsIGN5KTtcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIFt0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0aGlzLmQsIHRoaXMuZSwgdGhpcy5mXTtcbiAgfSAvLyBDb252ZXJ0IG1hdHJpeCB0byBzdHJpbmdcblxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnbWF0cml4KCcgKyB0aGlzLmEgKyAnLCcgKyB0aGlzLmIgKyAnLCcgKyB0aGlzLmMgKyAnLCcgKyB0aGlzLmQgKyAnLCcgKyB0aGlzLmUgKyAnLCcgKyB0aGlzLmYgKyAnKSc7XG4gIH0gLy8gVHJhbnNmb3JtIGEgbWF0cml4IGludG8gYW5vdGhlciBtYXRyaXggYnkgbWFuaXB1bGF0aW5nIHRoZSBzcGFjZVxuXG5cbiAgdHJhbnNmb3JtKG8pIHtcbiAgICAvLyBDaGVjayBpZiBvIGlzIGEgbWF0cml4IGFuZCB0aGVuIGxlZnQgbXVsdGlwbHkgaXQgZGlyZWN0bHlcbiAgICBpZiAoTWF0cml4LmlzTWF0cml4TGlrZShvKSkge1xuICAgICAgY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeChvKTtcbiAgICAgIHJldHVybiBtYXRyaXgubXVsdGlwbHlPKHRoaXMpO1xuICAgIH0gLy8gR2V0IHRoZSBwcm9wb3NlZCB0cmFuc2Zvcm1hdGlvbnMgYW5kIHRoZSBjdXJyZW50IHRyYW5zZm9ybWF0aW9uc1xuXG5cbiAgICBjb25zdCB0ID0gTWF0cml4LmZvcm1hdFRyYW5zZm9ybXMobyk7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgeDogb3gsXG4gICAgICB5OiBveVxuICAgIH0gPSBuZXcgUG9pbnQodC5veCwgdC5veSkudHJhbnNmb3JtKGN1cnJlbnQpOyAvLyBDb25zdHJ1Y3QgdGhlIHJlc3VsdGluZyBtYXRyaXhcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVyID0gbmV3IE1hdHJpeCgpLnRyYW5zbGF0ZU8odC5yeCwgdC5yeSkubG11bHRpcGx5TyhjdXJyZW50KS50cmFuc2xhdGVPKC1veCwgLW95KS5zY2FsZU8odC5zY2FsZVgsIHQuc2NhbGVZKS5za2V3Tyh0LnNrZXdYLCB0LnNrZXdZKS5zaGVhck8odC5zaGVhcikucm90YXRlTyh0LnRoZXRhKS50cmFuc2xhdGVPKG94LCBveSk7IC8vIElmIHdlIHdhbnQgdGhlIG9yaWdpbiBhdCBhIHBhcnRpY3VsYXIgcGxhY2UsIHdlIGZvcmNlIGl0IHRoZXJlXG5cbiAgICBpZiAoaXNGaW5pdGUodC5weCkgfHwgaXNGaW5pdGUodC5weSkpIHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBQb2ludChveCwgb3kpLnRyYW5zZm9ybSh0cmFuc2Zvcm1lcik7IC8vIFRPRE86IFJlcGxhY2UgdC5weCB3aXRoIGlzRmluaXRlKHQucHgpXG4gICAgICAvLyBEb2VzbnQgd29yayBiZWNhdXNlIHQucHggaXMgYWxzbyAwIGlmIGl0IHdhc250IHBhc3NlZFxuXG4gICAgICBjb25zdCBkeCA9IGlzRmluaXRlKHQucHgpID8gdC5weCAtIG9yaWdpbi54IDogMDtcbiAgICAgIGNvbnN0IGR5ID0gaXNGaW5pdGUodC5weSkgPyB0LnB5IC0gb3JpZ2luLnkgOiAwO1xuICAgICAgdHJhbnNmb3JtZXIudHJhbnNsYXRlTyhkeCwgZHkpO1xuICAgIH0gLy8gVHJhbnNsYXRlIG5vdyBhZnRlciBwb3NpdGlvbmluZ1xuXG5cbiAgICB0cmFuc2Zvcm1lci50cmFuc2xhdGVPKHQudHgsIHQudHkpO1xuICAgIHJldHVybiB0cmFuc2Zvcm1lcjtcbiAgfSAvLyBUcmFuc2xhdGUgbWF0cml4XG5cblxuICB0cmFuc2xhdGUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkudHJhbnNsYXRlTyh4LCB5KTtcbiAgfVxuXG4gIHRyYW5zbGF0ZU8oeCwgeSkge1xuICAgIHRoaXMuZSArPSB4IHx8IDA7XG4gICAgdGhpcy5mICs9IHkgfHwgMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGE6IHRoaXMuYSxcbiAgICAgIGI6IHRoaXMuYixcbiAgICAgIGM6IHRoaXMuYyxcbiAgICAgIGQ6IHRoaXMuZCxcbiAgICAgIGU6IHRoaXMuZSxcbiAgICAgIGY6IHRoaXMuZlxuICAgIH07XG4gIH1cblxufVxuZnVuY3Rpb24gY3RtKCkge1xuICByZXR1cm4gbmV3IE1hdHJpeCh0aGlzLm5vZGUuZ2V0Q1RNKCkpO1xufVxuZnVuY3Rpb24gc2NyZWVuQ1RNKCkge1xuICAvKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzQ0NTM3XHJcbiAgICAgVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBGRiBkb2VzIG5vdCByZXR1cm4gdGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxyXG4gICAgIGZvciB0aGUgaW5uZXIgY29vcmRpbmF0ZSBzeXN0ZW0gd2hlbiBnZXRTY3JlZW5DVE0oKSBpcyBjYWxsZWQgb24gbmVzdGVkIHN2Z3MuXHJcbiAgICAgSG93ZXZlciBhbGwgb3RoZXIgQnJvd3NlcnMgZG8gdGhhdCAqL1xuICBpZiAodHlwZW9mIHRoaXMuaXNSb290ID09PSAnZnVuY3Rpb24nICYmICF0aGlzLmlzUm9vdCgpKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMucmVjdCgxLCAxKTtcbiAgICBjb25zdCBtID0gcmVjdC5ub2RlLmdldFNjcmVlbkNUTSgpO1xuICAgIHJlY3QucmVtb3ZlKCk7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgobSk7XG4gIH1cblxuICByZXR1cm4gbmV3IE1hdHJpeCh0aGlzLm5vZGUuZ2V0U2NyZWVuQ1RNKCkpO1xufVxucmVnaXN0ZXIoTWF0cml4LCAnTWF0cml4Jyk7XG5cbmZ1bmN0aW9uIHBhcnNlcigpIHtcbiAgLy8gUmV1c2UgY2FjaGVkIGVsZW1lbnQgaWYgcG9zc2libGVcbiAgaWYgKCFwYXJzZXIubm9kZXMpIHtcbiAgICBjb25zdCBzdmcgPSBtYWtlSW5zdGFuY2UoKS5zaXplKDIsIDApO1xuICAgIHN2Zy5ub2RlLnN0eWxlLmNzc1RleHQgPSBbJ29wYWNpdHk6IDAnLCAncG9zaXRpb246IGFic29sdXRlJywgJ2xlZnQ6IC0xMDAlJywgJ3RvcDogLTEwMCUnLCAnb3ZlcmZsb3c6IGhpZGRlbiddLmpvaW4oJzsnKTtcbiAgICBzdmcuYXR0cignZm9jdXNhYmxlJywgJ2ZhbHNlJyk7XG4gICAgc3ZnLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBjb25zdCBwYXRoID0gc3ZnLnBhdGgoKS5ub2RlO1xuICAgIHBhcnNlci5ub2RlcyA9IHtcbiAgICAgIHN2ZyxcbiAgICAgIHBhdGhcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFwYXJzZXIubm9kZXMuc3ZnLm5vZGUucGFyZW50Tm9kZSkge1xuICAgIGNvbnN0IGIgPSBnbG9iYWxzLmRvY3VtZW50LmJvZHkgfHwgZ2xvYmFscy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcGFyc2VyLm5vZGVzLnN2Zy5hZGRUbyhiKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZXIubm9kZXM7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbGVkQm94KGJveCkge1xuICByZXR1cm4gIWJveC53aWR0aCAmJiAhYm94LmhlaWdodCAmJiAhYm94LnggJiYgIWJveC55O1xufVxuZnVuY3Rpb24gZG9tQ29udGFpbnMobm9kZSkge1xuICByZXR1cm4gbm9kZSA9PT0gZ2xvYmFscy5kb2N1bWVudCB8fCAoZ2xvYmFscy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMgfHwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAvLyBUaGlzIGlzIElFIC0gaXQgZG9lcyBub3Qgc3VwcG9ydCBjb250YWlucygpIGZvciB0b3AtbGV2ZWwgU1ZHc1xuICAgIHdoaWxlIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUgPT09IGdsb2JhbHMuZG9jdW1lbnQ7XG4gIH0pLmNhbGwoZ2xvYmFscy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIG5vZGUpO1xufVxuY2xhc3MgQm94IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgfVxuXG4gIGFkZE9mZnNldCgpIHtcbiAgICAvLyBvZmZzZXQgYnkgd2luZG93IHNjcm9sbCBwb3NpdGlvbiwgYmVjYXVzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY2hhbmdlcyB3aGVuIHdpbmRvdyBpcyBzY3JvbGxlZFxuICAgIHRoaXMueCArPSBnbG9iYWxzLndpbmRvdy5wYWdlWE9mZnNldDtcbiAgICB0aGlzLnkgKz0gZ2xvYmFscy53aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgcmV0dXJuIG5ldyBCb3godGhpcyk7XG4gIH1cblxuICBpbml0KHNvdXJjZSkge1xuICAgIGNvbnN0IGJhc2UgPSBbMCwgMCwgMCwgMF07XG4gICAgc291cmNlID0gdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyBzb3VyY2Uuc3BsaXQoZGVsaW1pdGVyKS5tYXAocGFyc2VGbG9hdCkgOiBBcnJheS5pc0FycmF5KHNvdXJjZSkgPyBzb3VyY2UgOiB0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0JyA/IFtzb3VyY2UubGVmdCAhPSBudWxsID8gc291cmNlLmxlZnQgOiBzb3VyY2UueCwgc291cmNlLnRvcCAhPSBudWxsID8gc291cmNlLnRvcCA6IHNvdXJjZS55LCBzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHRdIDogYXJndW1lbnRzLmxlbmd0aCA9PT0gNCA/IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSA6IGJhc2U7XG4gICAgdGhpcy54ID0gc291cmNlWzBdIHx8IDA7XG4gICAgdGhpcy55ID0gc291cmNlWzFdIHx8IDA7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMudyA9IHNvdXJjZVsyXSB8fCAwO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5oID0gc291cmNlWzNdIHx8IDA7IC8vIEFkZCBtb3JlIGJvdW5kaW5nIGJveCBwcm9wZXJ0aWVzXG5cbiAgICB0aGlzLngyID0gdGhpcy54ICsgdGhpcy53O1xuICAgIHRoaXMueTIgPSB0aGlzLnkgKyB0aGlzLmg7XG4gICAgdGhpcy5jeCA9IHRoaXMueCArIHRoaXMudyAvIDI7XG4gICAgdGhpcy5jeSA9IHRoaXMueSArIHRoaXMuaCAvIDI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc051bGxlZCgpIHtcbiAgICByZXR1cm4gaXNOdWxsZWRCb3godGhpcyk7XG4gIH0gLy8gTWVyZ2UgcmVjdCBib3ggd2l0aCBhbm90aGVyLCByZXR1cm4gYSBuZXcgaW5zdGFuY2VcblxuXG4gIG1lcmdlKGJveCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1pbih0aGlzLngsIGJveC54KTtcbiAgICBjb25zdCB5ID0gTWF0aC5taW4odGhpcy55LCBib3gueSk7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCh0aGlzLnggKyB0aGlzLndpZHRoLCBib3gueCArIGJveC53aWR0aCkgLSB4O1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KHRoaXMueSArIHRoaXMuaGVpZ2h0LCBib3gueSArIGJveC5oZWlnaHQpIC0geTtcbiAgICByZXR1cm4gbmV3IEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMueCArICcgJyArIHRoaXMueSArICcgJyArIHRoaXMud2lkdGggKyAnICcgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHRyYW5zZm9ybShtKSB7XG4gICAgaWYgKCEobSBpbnN0YW5jZW9mIE1hdHJpeCkpIHtcbiAgICAgIG0gPSBuZXcgTWF0cml4KG0pO1xuICAgIH1cblxuICAgIGxldCB4TWluID0gSW5maW5pdHk7XG4gICAgbGV0IHhNYXggPSAtSW5maW5pdHk7XG4gICAgbGV0IHlNaW4gPSBJbmZpbml0eTtcbiAgICBsZXQgeU1heCA9IC1JbmZpbml0eTtcbiAgICBjb25zdCBwdHMgPSBbbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KSwgbmV3IFBvaW50KHRoaXMueDIsIHRoaXMueSksIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueTIpLCBuZXcgUG9pbnQodGhpcy54MiwgdGhpcy55MildO1xuICAgIHB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICBwID0gcC50cmFuc2Zvcm0obSk7XG4gICAgICB4TWluID0gTWF0aC5taW4oeE1pbiwgcC54KTtcbiAgICAgIHhNYXggPSBNYXRoLm1heCh4TWF4LCBwLngpO1xuICAgICAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHAueSk7XG4gICAgICB5TWF4ID0gTWF0aC5tYXgoeU1heCwgcC55KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEJveCh4TWluLCB5TWluLCB4TWF4IC0geE1pbiwgeU1heCAtIHlNaW4pO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0Qm94KGVsLCBnZXRCQm94Rm4sIHJldHJ5KSB7XG4gIGxldCBib3g7XG5cbiAgdHJ5IHtcbiAgICAvLyBUcnkgdG8gZ2V0IHRoZSBib3ggd2l0aCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICBib3ggPSBnZXRCQm94Rm4oZWwubm9kZSk7IC8vIElmIHRoZSBib3ggaXMgd29ydGhsZXNzIGFuZCBub3QgZXZlbiBpbiB0aGUgZG9tLCByZXRyeVxuICAgIC8vIGJ5IHRocm93aW5nIGFuIGVycm9yIGhlcmUuLi5cblxuICAgIGlmIChpc051bGxlZEJveChib3gpICYmICFkb21Db250YWlucyhlbC5ub2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG5vdCBpbiB0aGUgZG9tJyk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gLi4uIGFuZCBjYWxsaW5nIHRoZSByZXRyeSBoYW5kbGVyIGhlcmVcbiAgICBib3ggPSByZXRyeShlbCk7XG4gIH1cblxuICByZXR1cm4gYm94O1xufVxuXG5mdW5jdGlvbiBiYm94KCkge1xuICAvLyBGdW5jdGlvbiB0byBnZXQgYmJveCBpcyBnZXRCQm94KClcbiAgY29uc3QgZ2V0QkJveCA9IG5vZGUgPT4gbm9kZS5nZXRCQm94KCk7IC8vIFRha2UgYWxsIG1lYXN1cmVzIHNvIHRoYXQgYSBzdHVwaWQgYnJvd3NlciByZW5kZXJzIHRoZSBlbGVtZW50XG4gIC8vIHNvIHdlIGNhbiBnZXQgdGhlIGJib3ggZnJvbSBpdCB3aGVuIHdlIHRyeSBhZ2FpblxuXG5cbiAgY29uc3QgcmV0cnkgPSBlbCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNsb25lID0gZWwuY2xvbmUoKS5hZGRUbyhwYXJzZXIoKS5zdmcpLnNob3coKTtcbiAgICAgIGNvbnN0IGJveCA9IGNsb25lLm5vZGUuZ2V0QkJveCgpO1xuICAgICAgY2xvbmUucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gYm94O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFdlIGdpdmUgdXAuLi5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgR2V0dGluZyBiYm94IG9mIGVsZW1lbnQgXCIke2VsLm5vZGUubm9kZU5hbWV9XCIgaXMgbm90IHBvc3NpYmxlOiAke2UudG9TdHJpbmcoKX1gKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYm94ID0gZ2V0Qm94KHRoaXMsIGdldEJCb3gsIHJldHJ5KTtcbiAgY29uc3QgYmJveCA9IG5ldyBCb3goYm94KTtcbiAgcmV0dXJuIGJib3g7XG59XG5mdW5jdGlvbiByYm94KGVsKSB7XG4gIGNvbnN0IGdldFJCb3ggPSBub2RlID0+IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgY29uc3QgcmV0cnkgPSBlbCA9PiB7XG4gICAgLy8gVGhlcmUgaXMgbm8gcG9pbnQgaW4gdHJ5aW5nIHRyaWNrcyBoZXJlIGJlY2F1c2UgaWYgd2UgaW5zZXJ0IHRoZSBlbGVtZW50IGludG8gdGhlIGRvbSBvdXJzZWx2ZXNcbiAgICAvLyBpdCBvYnZpb3VzbHkgd2lsbCBiZSBhdCB0aGUgd3JvbmcgcG9zaXRpb25cbiAgICB0aHJvdyBuZXcgRXJyb3IoYEdldHRpbmcgcmJveCBvZiBlbGVtZW50IFwiJHtlbC5ub2RlLm5vZGVOYW1lfVwiIGlzIG5vdCBwb3NzaWJsZWApO1xuICB9O1xuXG4gIGNvbnN0IGJveCA9IGdldEJveCh0aGlzLCBnZXRSQm94LCByZXRyeSk7XG4gIGNvbnN0IHJib3ggPSBuZXcgQm94KGJveCk7IC8vIElmIGFuIGVsZW1lbnQgd2FzIHBhc3NlZCwgd2Ugd2FudCB0aGUgYmJveCBpbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgdGhhdCBlbGVtZW50XG5cbiAgaWYgKGVsKSB7XG4gICAgcmV0dXJuIHJib3gudHJhbnNmb3JtKGVsLnNjcmVlbkNUTSgpLmludmVyc2VPKCkpO1xuICB9IC8vIEVsc2Ugd2Ugd2FudCBpdCBpbiBhYnNvbHV0ZSBzY3JlZW4gY29vcmRpbmF0ZXNcbiAgLy8gVGhlcmVmb3JlIHdlIG5lZWQgdG8gYWRkIHRoZSBzY3JvbGxPZmZzZXRcblxuXG4gIHJldHVybiByYm94LmFkZE9mZnNldCgpO1xufSAvLyBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gcG9pbnQgaXMgaW5zaWRlIHRoZSBib3VuZGluZyBib3hcblxuZnVuY3Rpb24gaW5zaWRlKHgsIHkpIHtcbiAgY29uc3QgYm94ID0gdGhpcy5iYm94KCk7XG4gIHJldHVybiB4ID4gYm94LnggJiYgeSA+IGJveC55ICYmIHggPCBib3gueCArIGJveC53aWR0aCAmJiB5IDwgYm94LnkgKyBib3guaGVpZ2h0O1xufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgdmlld2JveDoge1xuICAgIHZpZXdib3goeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgLy8gYWN0IGFzIGdldHRlclxuICAgICAgaWYgKHggPT0gbnVsbCkgcmV0dXJuIG5ldyBCb3godGhpcy5hdHRyKCd2aWV3Qm94JykpOyAvLyBhY3QgYXMgc2V0dGVyXG5cbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3ZpZXdCb3gnLCBuZXcgQm94KHgsIHksIHdpZHRoLCBoZWlnaHQpKTtcbiAgICB9LFxuXG4gICAgem9vbShsZXZlbCwgcG9pbnQpIHtcbiAgICAgIC8vIEl0cyBiZXN0IHRvIHJlbHkgb24gdGhlIGF0dHJpYnV0ZXMgaGVyZSBhbmQgaGVyZSBpcyB3aHk6XG4gICAgICAvLyBjbGllbnRYWVo6IERvZXNuJ3Qgd29yayBvbiBub24tcm9vdCBzdmdzIGJlY2F1c2UgdGhleSBkb250IGhhdmUgYSBDU1NCb3ggKHNpbGx5ISlcbiAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogRG9lc24ndCB3b3JrIGJlY2F1c2UgQ2hyb21lIGp1c3QgaWdub3JlcyB3aWR0aCBhbmQgaGVpZ2h0IG9mIG5lc3RlZCBzdmdzIGNvbXBsZXRlbHlcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBtZWFucywgdGhlaXIgY2xpZW50UmVjdCBpcyBhbHdheXMgYXMgYmlnIGFzIHRoZSBjb250ZW50LlxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBGdXJ0aGVybW9yZSB0aGlzIHNpemUgaXMgaW5jb3JyZWN0IGlmIHRoZSBlbGVtZW50IGlzIGZ1cnRoZXIgdHJhbnNmb3JtZWQgYnkgaXRzIHBhcmVudHNcbiAgICAgIC8vIGNvbXB1dGVkU3R5bGU6IE9ubHkgcmV0dXJucyBtZWFuaW5nZnVsIHZhbHVlcyBpZiBjc3Mgd2FzIHVzZWQgd2l0aCBweC4gV2UgZG9udCBnbyB0aGlzIHJvdXRlIGhlcmUhXG4gICAgICAvLyBnZXRCQm94OiByZXR1cm5zIHRoZSBib3VuZGluZyBib3ggb2YgaXRzIGNvbnRlbnQgLSB0aGF0IGRvZXNudCBoZWxwIVxuICAgICAgbGV0IHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgfSA9IHRoaXMuYXR0cihbJ3dpZHRoJywgJ2hlaWdodCddKTsgLy8gV2lkdGggYW5kIGhlaWdodCBpcyBhIHN0cmluZyB3aGVuIGEgbnVtYmVyIHdpdGggYSB1bml0IGlzIHByZXNlbnQgd2hpY2ggd2UgY2FuJ3QgdXNlXG4gICAgICAvLyBTbyB3ZSB0cnkgY2xpZW50WFlaXG5cbiAgICAgIGlmICghd2lkdGggJiYgIWhlaWdodCB8fCB0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBoZWlnaHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdpZHRoID0gdGhpcy5ub2RlLmNsaWVudFdpZHRoO1xuICAgICAgICBoZWlnaHQgPSB0aGlzLm5vZGUuY2xpZW50SGVpZ2h0O1xuICAgICAgfSAvLyBHaXZpbmcgdXAuLi5cblxuXG4gICAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbXBvc3NpYmxlIHRvIGdldCBhYnNvbHV0ZSB3aWR0aCBhbmQgaGVpZ2h0LiBQbGVhc2UgcHJvdmlkZSBhbiBhYnNvbHV0ZSB3aWR0aCBhbmQgaGVpZ2h0IGF0dHJpYnV0ZSBvbiB0aGUgem9vbWluZyBlbGVtZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHYgPSB0aGlzLnZpZXdib3goKTtcbiAgICAgIGNvbnN0IHpvb21YID0gd2lkdGggLyB2LndpZHRoO1xuICAgICAgY29uc3Qgem9vbVkgPSBoZWlnaHQgLyB2LmhlaWdodDtcbiAgICAgIGNvbnN0IHpvb20gPSBNYXRoLm1pbih6b29tWCwgem9vbVkpO1xuXG4gICAgICBpZiAobGV2ZWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gem9vbTtcbiAgICAgIH1cblxuICAgICAgbGV0IHpvb21BbW91bnQgPSB6b29tIC8gbGV2ZWw7IC8vIFNldCB0aGUgem9vbUFtb3VudCB0byB0aGUgaGlnaGVzdCB2YWx1ZSB3aGljaCBpcyBzYWZlIHRvIHByb2Nlc3MgYW5kIHJlY292ZXIgZnJvbVxuICAgICAgLy8gVGhlICogMTAwIGlzIGEgYml0IG9mIHdpZ2dsZSByb29tIGZvciB0aGUgbWF0cml4IHRyYW5zZm9ybWF0aW9uXG5cbiAgICAgIGlmICh6b29tQW1vdW50ID09PSBJbmZpbml0eSkgem9vbUFtb3VudCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8gMTAwO1xuICAgICAgcG9pbnQgPSBwb2ludCB8fCBuZXcgUG9pbnQod2lkdGggLyAyIC8gem9vbVggKyB2LngsIGhlaWdodCAvIDIgLyB6b29tWSArIHYueSk7XG4gICAgICBjb25zdCBib3ggPSBuZXcgQm94KHYpLnRyYW5zZm9ybShuZXcgTWF0cml4KHtcbiAgICAgICAgc2NhbGU6IHpvb21BbW91bnQsXG4gICAgICAgIG9yaWdpbjogcG9pbnRcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdib3goYm94KTtcbiAgICB9XG5cbiAgfVxufSk7XG5yZWdpc3RlcihCb3gsICdCb3gnKTtcblxuY2xhc3MgTGlzdCBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3IoYXJyID0gW10sIC4uLmFyZ3MpIHtcbiAgICBzdXBlcihhcnIsIC4uLmFyZ3MpO1xuICAgIGlmICh0eXBlb2YgYXJyID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMucHVzaCguLi5hcnIpO1xuICB9XG5cbn1cbmV4dGVuZChbTGlzdF0sIHtcbiAgZWFjaChmbk9yTWV0aG9kTmFtZSwgLi4uYXJncykge1xuICAgIGlmICh0eXBlb2YgZm5Pck1ldGhvZE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcCgoZWwsIGksIGFycikgPT4ge1xuICAgICAgICByZXR1cm4gZm5Pck1ldGhvZE5hbWUuY2FsbChlbCwgZWwsIGksIGFycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGVsID0+IHtcbiAgICAgICAgcmV0dXJuIGVsW2ZuT3JNZXRob2ROYW1lXSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCB0aGlzKTtcbiAgfVxuXG59KTtcbmNvbnN0IHJlc2VydmVkID0gWyd0b0FycmF5JywgJ2NvbnN0cnVjdG9yJywgJ2VhY2gnXTtcblxuTGlzdC5leHRlbmQgPSBmdW5jdGlvbiAobWV0aG9kcykge1xuICBtZXRob2RzID0gbWV0aG9kcy5yZWR1Y2UoKG9iaiwgbmFtZSkgPT4ge1xuICAgIC8vIERvbid0IG92ZXJ3cml0ZSBvd24gbWV0aG9kc1xuICAgIGlmIChyZXNlcnZlZC5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuIG9iajsgLy8gRG9uJ3QgYWRkIHByaXZhdGUgbWV0aG9kc1xuXG4gICAgaWYgKG5hbWVbMF0gPT09ICdfJykgcmV0dXJuIG9iajsgLy8gUmVsYXkgZXZlcnkgY2FsbCB0byBlYWNoKClcblxuICAgIG9ialtuYW1lXSA9IGZ1bmN0aW9uICguLi5hdHRycykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChuYW1lLCAuLi5hdHRycyk7XG4gICAgfTtcblxuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbiAgZXh0ZW5kKFtMaXN0XSwgbWV0aG9kcyk7XG59O1xuXG5mdW5jdGlvbiBiYXNlRmluZChxdWVyeSwgcGFyZW50KSB7XG4gIHJldHVybiBuZXcgTGlzdChtYXAoKHBhcmVudCB8fCBnbG9iYWxzLmRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gYWRvcHQobm9kZSk7XG4gIH0pKTtcbn0gLy8gU2NvcGVkIGZpbmQgbWV0aG9kXG5cbmZ1bmN0aW9uIGZpbmQocXVlcnkpIHtcbiAgcmV0dXJuIGJhc2VGaW5kKHF1ZXJ5LCB0aGlzLm5vZGUpO1xufVxuZnVuY3Rpb24gZmluZE9uZShxdWVyeSkge1xuICByZXR1cm4gYWRvcHQodGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IocXVlcnkpKTtcbn1cblxubGV0IGxpc3RlbmVySWQgPSAwO1xuY29uc3Qgd2luZG93RXZlbnRzID0ge307XG5mdW5jdGlvbiBnZXRFdmVudHMoaW5zdGFuY2UpIHtcbiAgbGV0IG4gPSBpbnN0YW5jZS5nZXRFdmVudEhvbGRlcigpOyAvLyBXZSBkb250IHdhbnQgdG8gc2F2ZSBldmVudHMgaW4gZ2xvYmFsIHNwYWNlXG5cbiAgaWYgKG4gPT09IGdsb2JhbHMud2luZG93KSBuID0gd2luZG93RXZlbnRzO1xuICBpZiAoIW4uZXZlbnRzKSBuLmV2ZW50cyA9IHt9O1xuICByZXR1cm4gbi5ldmVudHM7XG59XG5mdW5jdGlvbiBnZXRFdmVudFRhcmdldChpbnN0YW5jZSkge1xuICByZXR1cm4gaW5zdGFuY2UuZ2V0RXZlbnRUYXJnZXQoKTtcbn1cbmZ1bmN0aW9uIGNsZWFyRXZlbnRzKGluc3RhbmNlKSB7XG4gIGxldCBuID0gaW5zdGFuY2UuZ2V0RXZlbnRIb2xkZXIoKTtcbiAgaWYgKG4gPT09IGdsb2JhbHMud2luZG93KSBuID0gd2luZG93RXZlbnRzO1xuICBpZiAobi5ldmVudHMpIG4uZXZlbnRzID0ge307XG59IC8vIEFkZCBldmVudCBiaW5kZXIgaW4gdGhlIFNWRyBuYW1lc3BhY2VcblxuZnVuY3Rpb24gb24obm9kZSwgZXZlbnRzLCBsaXN0ZW5lciwgYmluZGluZywgb3B0aW9ucykge1xuICBjb25zdCBsID0gbGlzdGVuZXIuYmluZChiaW5kaW5nIHx8IG5vZGUpO1xuICBjb25zdCBpbnN0YW5jZSA9IG1ha2VJbnN0YW5jZShub2RlKTtcbiAgY29uc3QgYmFnID0gZ2V0RXZlbnRzKGluc3RhbmNlKTtcbiAgY29uc3QgbiA9IGdldEV2ZW50VGFyZ2V0KGluc3RhbmNlKTsgLy8gZXZlbnRzIGNhbiBiZSBhbiBhcnJheSBvZiBldmVudHMgb3IgYSBzdHJpbmcgb2YgZXZlbnRzXG5cbiAgZXZlbnRzID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogZXZlbnRzLnNwbGl0KGRlbGltaXRlcik7IC8vIGFkZCBpZCB0byBsaXN0ZW5lclxuXG4gIGlmICghbGlzdGVuZXIuX3N2Z2pzTGlzdGVuZXJJZCkge1xuICAgIGxpc3RlbmVyLl9zdmdqc0xpc3RlbmVySWQgPSArK2xpc3RlbmVySWQ7XG4gIH1cblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBldiA9IGV2ZW50LnNwbGl0KCcuJylbMF07XG4gICAgY29uc3QgbnMgPSBldmVudC5zcGxpdCgnLicpWzFdIHx8ICcqJzsgLy8gZW5zdXJlIHZhbGlkIG9iamVjdFxuXG4gICAgYmFnW2V2XSA9IGJhZ1tldl0gfHwge307XG4gICAgYmFnW2V2XVtuc10gPSBiYWdbZXZdW25zXSB8fCB7fTsgLy8gcmVmZXJlbmNlIGxpc3RlbmVyXG5cbiAgICBiYWdbZXZdW25zXVtsaXN0ZW5lci5fc3ZnanNMaXN0ZW5lcklkXSA9IGw7IC8vIGFkZCBsaXN0ZW5lclxuXG4gICAgbi5hZGRFdmVudExpc3RlbmVyKGV2LCBsLCBvcHRpb25zIHx8IGZhbHNlKTtcbiAgfSk7XG59IC8vIEFkZCBldmVudCB1bmJpbmRlciBpbiB0aGUgU1ZHIG5hbWVzcGFjZVxuXG5mdW5jdGlvbiBvZmYobm9kZSwgZXZlbnRzLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICBjb25zdCBpbnN0YW5jZSA9IG1ha2VJbnN0YW5jZShub2RlKTtcbiAgY29uc3QgYmFnID0gZ2V0RXZlbnRzKGluc3RhbmNlKTtcbiAgY29uc3QgbiA9IGdldEV2ZW50VGFyZ2V0KGluc3RhbmNlKTsgLy8gbGlzdGVuZXIgY2FuIGJlIGEgZnVuY3Rpb24gb3IgYSBudW1iZXJcblxuICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5fc3ZnanNMaXN0ZW5lcklkO1xuICAgIGlmICghbGlzdGVuZXIpIHJldHVybjtcbiAgfSAvLyBldmVudHMgY2FuIGJlIGFuIGFycmF5IG9mIGV2ZW50cyBvciBhIHN0cmluZyBvciB1bmRlZmluZWRcblxuXG4gIGV2ZW50cyA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IChldmVudHMgfHwgJycpLnNwbGl0KGRlbGltaXRlcik7XG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGV2ID0gZXZlbnQgJiYgZXZlbnQuc3BsaXQoJy4nKVswXTtcbiAgICBjb25zdCBucyA9IGV2ZW50ICYmIGV2ZW50LnNwbGl0KCcuJylbMV07XG4gICAgbGV0IG5hbWVzcGFjZSwgbDtcblxuICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyIHJlZmVyZW5jZVxuICAgICAgaWYgKGJhZ1tldl0gJiYgYmFnW2V2XVtucyB8fCAnKiddKSB7XG4gICAgICAgIC8vIHJlbW92ZUxpc3RlbmVyXG4gICAgICAgIG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldiwgYmFnW2V2XVtucyB8fCAnKiddW2xpc3RlbmVyXSwgb3B0aW9ucyB8fCBmYWxzZSk7XG4gICAgICAgIGRlbGV0ZSBiYWdbZXZdW25zIHx8ICcqJ11bbGlzdGVuZXJdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXYgJiYgbnMpIHtcbiAgICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvciBhIG5hbWVzcGFjZWQgZXZlbnRcbiAgICAgIGlmIChiYWdbZXZdICYmIGJhZ1tldl1bbnNdKSB7XG4gICAgICAgIGZvciAobCBpbiBiYWdbZXZdW25zXSkge1xuICAgICAgICAgIG9mZihuLCBbZXYsIG5zXS5qb2luKCcuJyksIGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGJhZ1tldl1bbnNdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobnMpIHtcbiAgICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvciBhIHNwZWNpZmljIG5hbWVzcGFjZVxuICAgICAgZm9yIChldmVudCBpbiBiYWcpIHtcbiAgICAgICAgZm9yIChuYW1lc3BhY2UgaW4gYmFnW2V2ZW50XSkge1xuICAgICAgICAgIGlmIChucyA9PT0gbmFtZXNwYWNlKSB7XG4gICAgICAgICAgICBvZmYobiwgW2V2ZW50LCBuc10uam9pbignLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2KSB7XG4gICAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgdGhlIGV2ZW50XG4gICAgICBpZiAoYmFnW2V2XSkge1xuICAgICAgICBmb3IgKG5hbWVzcGFjZSBpbiBiYWdbZXZdKSB7XG4gICAgICAgICAgb2ZmKG4sIFtldiwgbmFtZXNwYWNlXS5qb2luKCcuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGJhZ1tldl07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIGEgZ2l2ZW4gbm9kZVxuICAgICAgZm9yIChldmVudCBpbiBiYWcpIHtcbiAgICAgICAgb2ZmKG4sIGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgY2xlYXJFdmVudHMoaW5zdGFuY2UpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBldmVudCwgZGF0YSwgb3B0aW9ucykge1xuICBjb25zdCBuID0gZ2V0RXZlbnRUYXJnZXQobm9kZSk7IC8vIERpc3BhdGNoIGV2ZW50XG5cbiAgaWYgKGV2ZW50IGluc3RhbmNlb2YgZ2xvYmFscy53aW5kb3cuRXZlbnQpIHtcbiAgICBuLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gbmV3IGdsb2JhbHMud2luZG93LkN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICBkZXRhaWw6IGRhdGEsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH0pO1xuICAgIG4uZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICByZXR1cm4gZXZlbnQ7XG59XG5cbmNsYXNzIEV2ZW50VGFyZ2V0IGV4dGVuZHMgQmFzZSB7XG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7fVxuXG4gIGRpc3BhdGNoKGV2ZW50LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKHRoaXMsIGV2ZW50LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBiYWcgPSB0aGlzLmdldEV2ZW50SG9sZGVyKCkuZXZlbnRzO1xuICAgIGlmICghYmFnKSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBldmVudHMgPSBiYWdbZXZlbnQudHlwZV07XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gZXZlbnRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGogaW4gZXZlbnRzW2ldKSB7XG4gICAgICAgIGV2ZW50c1tpXVtqXShldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuICB9IC8vIEZpcmUgZ2l2ZW4gZXZlbnRcblxuXG4gIGZpcmUoZXZlbnQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmRpc3BhdGNoKGV2ZW50LCBkYXRhLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEV2ZW50SG9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RXZlbnRUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gVW5iaW5kIGV2ZW50IGZyb20gbGlzdGVuZXJcblxuXG4gIG9mZihldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICBvZmYodGhpcywgZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBCaW5kIGdpdmVuIGV2ZW50IHRvIGxpc3RlbmVyXG5cblxuICBvbihldmVudCwgbGlzdGVuZXIsIGJpbmRpbmcsIG9wdGlvbnMpIHtcbiAgICBvbih0aGlzLCBldmVudCwgbGlzdGVuZXIsIGJpbmRpbmcsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHt9XG5cbn1cbnJlZ2lzdGVyKEV2ZW50VGFyZ2V0LCAnRXZlbnRUYXJnZXQnKTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9IC8vIERlZmF1bHQgYW5pbWF0aW9uIHZhbHVlc1xuXG5jb25zdCB0aW1lbGluZSA9IHtcbiAgZHVyYXRpb246IDQwMCxcbiAgZWFzZTogJz4nLFxuICBkZWxheTogMFxufTsgLy8gRGVmYXVsdCBhdHRyaWJ1dGUgdmFsdWVzXG5cbmNvbnN0IGF0dHJzID0ge1xuICAvLyBmaWxsIGFuZCBzdHJva2VcbiAgJ2ZpbGwtb3BhY2l0eSc6IDEsXG4gICdzdHJva2Utb3BhY2l0eSc6IDEsXG4gICdzdHJva2Utd2lkdGgnOiAwLFxuICAnc3Ryb2tlLWxpbmVqb2luJzogJ21pdGVyJyxcbiAgJ3N0cm9rZS1saW5lY2FwJzogJ2J1dHQnLFxuICBmaWxsOiAnIzAwMDAwMCcsXG4gIHN0cm9rZTogJyMwMDAwMDAnLFxuICBvcGFjaXR5OiAxLFxuICAvLyBwb3NpdGlvblxuICB4OiAwLFxuICB5OiAwLFxuICBjeDogMCxcbiAgY3k6IDAsXG4gIC8vIHNpemVcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbiAgLy8gcmFkaXVzXG4gIHI6IDAsXG4gIHJ4OiAwLFxuICByeTogMCxcbiAgLy8gZ3JhZGllbnRcbiAgb2Zmc2V0OiAwLFxuICAnc3RvcC1vcGFjaXR5JzogMSxcbiAgJ3N0b3AtY29sb3InOiAnIzAwMDAwMCcsXG4gIC8vIHRleHRcbiAgJ3RleHQtYW5jaG9yJzogJ3N0YXJ0J1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIG5vb3A6IG5vb3AsXG4gIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgYXR0cnM6IGF0dHJzXG59O1xuXG5jbGFzcyBTVkdBcnJheSBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKTtcbiAgfVxuXG4gIGluaXQoYXJyKSB7XG4gICAgLy8gVGhpcyBjYXRjaGVzIHRoZSBjYXNlLCB0aGF0IG5hdGl2ZSBtYXAgdHJpZXMgdG8gY3JlYXRlIGFuIGFycmF5IHdpdGggbmV3IEFycmF5KDEpXG4gICAgaWYgKHR5cGVvZiBhcnIgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5wdXNoKC4uLnRoaXMucGFyc2UoYXJyKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gUGFyc2Ugd2hpdGVzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nXG5cblxuICBwYXJzZShhcnJheSA9IFtdKSB7XG4gICAgLy8gSWYgYWxyZWFkeSBpcyBhbiBhcnJheSwgbm8gbmVlZCB0byBwYXJzZSBpdFxuICAgIGlmIChhcnJheSBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gYXJyYXk7XG4gICAgcmV0dXJuIGFycmF5LnRyaW0oKS5zcGxpdChkZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KTtcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHRoaXMpO1xuICB9XG5cbiAgdG9TZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBTZXQodGhpcyk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5qb2luKCcgJyk7XG4gIH0gLy8gRmxhdHRlbnMgdGhlIGFycmF5IGlmIG5lZWRlZFxuXG5cbiAgdmFsdWVPZigpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICByZXQucHVzaCguLi50aGlzKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbn1cblxuY2xhc3MgU1ZHTnVtYmVyIHtcbiAgLy8gSW5pdGlhbGl6ZVxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICB9XG5cbiAgY29udmVydCh1bml0KSB7XG4gICAgcmV0dXJuIG5ldyBTVkdOdW1iZXIodGhpcy52YWx1ZSwgdW5pdCk7XG4gIH0gLy8gRGl2aWRlIG51bWJlclxuXG5cbiAgZGl2aWRlKG51bWJlcikge1xuICAgIG51bWJlciA9IG5ldyBTVkdOdW1iZXIobnVtYmVyKTtcbiAgICByZXR1cm4gbmV3IFNWR051bWJlcih0aGlzIC8gbnVtYmVyLCB0aGlzLnVuaXQgfHwgbnVtYmVyLnVuaXQpO1xuICB9XG5cbiAgaW5pdCh2YWx1ZSwgdW5pdCkge1xuICAgIHVuaXQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlWzFdIDogdW5pdDtcbiAgICB2YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWVbMF0gOiB2YWx1ZTsgLy8gaW5pdGlhbGl6ZSBkZWZhdWx0c1xuXG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy51bml0ID0gdW5pdCB8fCAnJzsgLy8gcGFyc2UgdmFsdWVcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBlbnN1cmUgYSB2YWxpZCBudW1lcmljIHZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gaXNOYU4odmFsdWUpID8gMCA6ICFpc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA8IDAgPyAtMy40ZSszOCA6ICszLjRlKzM4IDogdmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1bml0ID0gdmFsdWUubWF0Y2gobnVtYmVyQW5kVW5pdCk7XG5cbiAgICAgIGlmICh1bml0KSB7XG4gICAgICAgIC8vIG1ha2UgdmFsdWUgbnVtZXJpY1xuICAgICAgICB0aGlzLnZhbHVlID0gcGFyc2VGbG9hdCh1bml0WzFdKTsgLy8gbm9ybWFsaXplXG5cbiAgICAgICAgaWYgKHVuaXRbNV0gPT09ICclJykge1xuICAgICAgICAgIHRoaXMudmFsdWUgLz0gMTAwO1xuICAgICAgICB9IGVsc2UgaWYgKHVuaXRbNV0gPT09ICdzJykge1xuICAgICAgICAgIHRoaXMudmFsdWUgKj0gMTAwMDtcbiAgICAgICAgfSAvLyBzdG9yZSB1bml0XG5cblxuICAgICAgICB0aGlzLnVuaXQgPSB1bml0WzVdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTVkdOdW1iZXIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgdGhpcy51bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTdWJ0cmFjdCBudW1iZXJcblxuXG4gIG1pbnVzKG51bWJlcikge1xuICAgIG51bWJlciA9IG5ldyBTVkdOdW1iZXIobnVtYmVyKTtcbiAgICByZXR1cm4gbmV3IFNWR051bWJlcih0aGlzIC0gbnVtYmVyLCB0aGlzLnVuaXQgfHwgbnVtYmVyLnVuaXQpO1xuICB9IC8vIEFkZCBudW1iZXJcblxuXG4gIHBsdXMobnVtYmVyKSB7XG4gICAgbnVtYmVyID0gbmV3IFNWR051bWJlcihudW1iZXIpO1xuICAgIHJldHVybiBuZXcgU1ZHTnVtYmVyKHRoaXMgKyBudW1iZXIsIHRoaXMudW5pdCB8fCBudW1iZXIudW5pdCk7XG4gIH0gLy8gTXVsdGlwbHkgbnVtYmVyXG5cblxuICB0aW1lcyhudW1iZXIpIHtcbiAgICBudW1iZXIgPSBuZXcgU1ZHTnVtYmVyKG51bWJlcik7XG4gICAgcmV0dXJuIG5ldyBTVkdOdW1iZXIodGhpcyAqIG51bWJlciwgdGhpcy51bml0IHx8IG51bWJlci51bml0KTtcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIFt0aGlzLnZhbHVlLCB0aGlzLnVuaXRdO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gKHRoaXMudW5pdCA9PT0gJyUnID8gfn4odGhpcy52YWx1ZSAqIDFlOCkgLyAxZTYgOiB0aGlzLnVuaXQgPT09ICdzJyA/IHRoaXMudmFsdWUgLyAxZTMgOiB0aGlzLnZhbHVlKSArIHRoaXMudW5pdDtcbiAgfVxuXG4gIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxufVxuXG5jb25zdCBob29rcyA9IFtdO1xuZnVuY3Rpb24gcmVnaXN0ZXJBdHRySG9vayhmbikge1xuICBob29rcy5wdXNoKGZuKTtcbn0gLy8gU2V0IHN2ZyBlbGVtZW50IGF0dHJpYnV0ZVxuXG5mdW5jdGlvbiBhdHRyKGF0dHIsIHZhbCwgbnMpIHtcbiAgLy8gYWN0IGFzIGZ1bGwgZ2V0dGVyXG4gIGlmIChhdHRyID09IG51bGwpIHtcbiAgICAvLyBnZXQgYW4gb2JqZWN0IG9mIGF0dHJpYnV0ZXNcbiAgICBhdHRyID0ge307XG4gICAgdmFsID0gdGhpcy5ub2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdmFsKSB7XG4gICAgICBhdHRyW25vZGUubm9kZU5hbWVdID0gaXNOdW1iZXIudGVzdChub2RlLm5vZGVWYWx1ZSkgPyBwYXJzZUZsb2F0KG5vZGUubm9kZVZhbHVlKSA6IG5vZGUubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRyO1xuICB9IGVsc2UgaWYgKGF0dHIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIC8vIGxvb3AgdGhyb3VnaCBhcnJheSBhbmQgZ2V0IGFsbCB2YWx1ZXNcbiAgICByZXR1cm4gYXR0ci5yZWR1Y2UoKGxhc3QsIGN1cnIpID0+IHtcbiAgICAgIGxhc3RbY3Vycl0gPSB0aGlzLmF0dHIoY3Vycik7XG4gICAgICByZXR1cm4gbGFzdDtcbiAgICB9LCB7fSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGF0dHIgPT09ICdvYmplY3QnICYmIGF0dHIuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgIC8vIGFwcGx5IGV2ZXJ5IGF0dHJpYnV0ZSBpbmRpdmlkdWFsbHkgaWYgYW4gb2JqZWN0IGlzIHBhc3NlZFxuICAgIGZvciAodmFsIGluIGF0dHIpIHRoaXMuYXR0cih2YWwsIGF0dHJbdmFsXSk7XG4gIH0gZWxzZSBpZiAodmFsID09PSBudWxsKSB7XG4gICAgLy8gcmVtb3ZlIHZhbHVlXG4gICAgdGhpcy5ub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgfSBlbHNlIGlmICh2YWwgPT0gbnVsbCkge1xuICAgIC8vIGFjdCBhcyBhIGdldHRlciBpZiB0aGUgZmlyc3QgYW5kIG9ubHkgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdFxuICAgIHZhbCA9IHRoaXMubm9kZS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgcmV0dXJuIHZhbCA9PSBudWxsID8gYXR0cnNbYXR0cl0gOiBpc051bWJlci50ZXN0KHZhbCkgPyBwYXJzZUZsb2F0KHZhbCkgOiB2YWw7XG4gIH0gZWxzZSB7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGhvb2tzIGFuZCBleGVjdXRlIHRoZW0gdG8gY29udmVydCB2YWx1ZVxuICAgIHZhbCA9IGhvb2tzLnJlZHVjZSgoX3ZhbCwgaG9vaykgPT4ge1xuICAgICAgcmV0dXJuIGhvb2soYXR0ciwgX3ZhbCwgdGhpcyk7XG4gICAgfSwgdmFsKTsgLy8gZW5zdXJlIGNvcnJlY3QgbnVtZXJpYyB2YWx1ZXMgKGFsc28gYWNjZXB0cyBOYU4gYW5kIEluZmluaXR5KVxuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWwgPSBuZXcgU1ZHTnVtYmVyKHZhbCk7XG4gICAgfSBlbHNlIGlmIChDb2xvci5pc0NvbG9yKHZhbCkpIHtcbiAgICAgIC8vIGVuc3VyZSBmdWxsIGhleCBjb2xvclxuICAgICAgdmFsID0gbmV3IENvbG9yKHZhbCk7XG4gICAgfSBlbHNlIGlmICh2YWwuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAvLyBDaGVjayBmb3IgcGxhaW4gYXJyYXlzIGFuZCBwYXJzZSBhcnJheSB2YWx1ZXNcbiAgICAgIHZhbCA9IG5ldyBTVkdBcnJheSh2YWwpO1xuICAgIH0gLy8gaWYgdGhlIHBhc3NlZCBhdHRyaWJ1dGUgaXMgbGVhZGluZy4uLlxuXG5cbiAgICBpZiAoYXR0ciA9PT0gJ2xlYWRpbmcnKSB7XG4gICAgICAvLyAuLi4gY2FsbCB0aGUgbGVhZGluZyBtZXRob2QgaW5zdGVhZFxuICAgICAgaWYgKHRoaXMubGVhZGluZykge1xuICAgICAgICB0aGlzLmxlYWRpbmcodmFsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IGdpdmVuIGF0dHJpYnV0ZSBvbiBub2RlXG4gICAgICB0eXBlb2YgbnMgPT09ICdzdHJpbmcnID8gdGhpcy5ub2RlLnNldEF0dHJpYnV0ZU5TKG5zLCBhdHRyLCB2YWwudG9TdHJpbmcoKSkgOiB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIHZhbC50b1N0cmluZygpKTtcbiAgICB9IC8vIHJlYnVpbGQgaWYgcmVxdWlyZWRcblxuXG4gICAgaWYgKHRoaXMucmVidWlsZCAmJiAoYXR0ciA9PT0gJ2ZvbnQtc2l6ZScgfHwgYXR0ciA9PT0gJ3gnKSkge1xuICAgICAgdGhpcy5yZWJ1aWxkKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmNsYXNzIERvbSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gbm9kZS5ub2RlTmFtZTtcblxuICAgIGlmIChhdHRycyAmJiBub2RlICE9PSBhdHRycykge1xuICAgICAgdGhpcy5hdHRyKGF0dHJzKTtcbiAgICB9XG4gIH0gLy8gQWRkIGdpdmVuIGVsZW1lbnQgYXQgYSBwb3NpdGlvblxuXG5cbiAgYWRkKGVsZW1lbnQsIGkpIHtcbiAgICBlbGVtZW50ID0gbWFrZUluc3RhbmNlKGVsZW1lbnQpOyAvLyBJZiBub24tcm9vdCBzdmcgbm9kZXMgYXJlIGFkZGVkIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZWlyIG5hbWVzcGFjZXNcblxuICAgIGlmIChlbGVtZW50LnJlbW92ZU5hbWVzcGFjZSAmJiB0aGlzLm5vZGUgaW5zdGFuY2VvZiBnbG9iYWxzLndpbmRvdy5TVkdFbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZU5hbWVzcGFjZSgpO1xuICAgIH1cblxuICAgIGlmIChpID09IG51bGwpIHtcbiAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChlbGVtZW50Lm5vZGUpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ub2RlICE9PSB0aGlzLm5vZGUuY2hpbGROb2Rlc1tpXSkge1xuICAgICAgdGhpcy5ub2RlLmluc2VydEJlZm9yZShlbGVtZW50Lm5vZGUsIHRoaXMubm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBBZGQgZWxlbWVudCB0byBnaXZlbiBjb250YWluZXIgYW5kIHJldHVybiBzZWxmXG5cblxuICBhZGRUbyhwYXJlbnQsIGkpIHtcbiAgICByZXR1cm4gbWFrZUluc3RhbmNlKHBhcmVudCkucHV0KHRoaXMsIGkpO1xuICB9IC8vIFJldHVybnMgYWxsIGNoaWxkIGVsZW1lbnRzXG5cblxuICBjaGlsZHJlbigpIHtcbiAgICByZXR1cm4gbmV3IExpc3QobWFwKHRoaXMubm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiBhZG9wdChub2RlKTtcbiAgICB9KSk7XG4gIH0gLy8gUmVtb3ZlIGFsbCBlbGVtZW50cyBpbiB0aGlzIGNvbnRhaW5lclxuXG5cbiAgY2xlYXIoKSB7XG4gICAgLy8gcmVtb3ZlIGNoaWxkcmVuXG4gICAgd2hpbGUgKHRoaXMubm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBDbG9uZSBlbGVtZW50XG5cblxuICBjbG9uZShkZWVwID0gdHJ1ZSkge1xuICAgIC8vIHdyaXRlIGRvbSBkYXRhIHRvIHRoZSBkb20gc28gdGhlIGNsb25lIGNhbiBwaWNrdXAgdGhlIGRhdGFcbiAgICB0aGlzLndyaXRlRGF0YVRvRG9tKCk7IC8vIGNsb25lIGVsZW1lbnQgYW5kIGFzc2lnbiBuZXcgaWRcblxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihhc3NpZ25OZXdJZCh0aGlzLm5vZGUuY2xvbmVOb2RlKGRlZXApKSk7XG4gIH0gLy8gSXRlcmF0ZXMgb3ZlciBhbGwgY2hpbGRyZW4gYW5kIGludm9rZXMgYSBnaXZlbiBibG9ja1xuXG5cbiAgZWFjaChibG9jaywgZGVlcCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbigpO1xuICAgIGxldCBpLCBpbDtcblxuICAgIGZvciAoaSA9IDAsIGlsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgICAgYmxvY2suYXBwbHkoY2hpbGRyZW5baV0sIFtpLCBjaGlsZHJlbl0pO1xuXG4gICAgICBpZiAoZGVlcCkge1xuICAgICAgICBjaGlsZHJlbltpXS5lYWNoKGJsb2NrLCBkZWVwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVsZW1lbnQobm9kZU5hbWUsIGF0dHJzKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KG5ldyBEb20oY3JlYXRlKG5vZGVOYW1lKSwgYXR0cnMpKTtcbiAgfSAvLyBHZXQgZmlyc3QgY2hpbGRcblxuXG4gIGZpcnN0KCkge1xuICAgIHJldHVybiBhZG9wdCh0aGlzLm5vZGUuZmlyc3RDaGlsZCk7XG4gIH0gLy8gR2V0IGEgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXhcblxuXG4gIGdldChpKSB7XG4gICAgcmV0dXJuIGFkb3B0KHRoaXMubm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgfVxuXG4gIGdldEV2ZW50SG9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRFdmVudFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9IC8vIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBhIGNoaWxkXG5cblxuICBoYXMoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4KGVsZW1lbnQpID49IDA7XG4gIH1cblxuICBodG1sKGh0bWxPckZuLCBvdXRlckhUTUwpIHtcbiAgICByZXR1cm4gdGhpcy54bWwoaHRtbE9yRm4sIG91dGVySFRNTCwgaHRtbCk7XG4gIH0gLy8gR2V0IC8gc2V0IGlkXG5cblxuICBpZChpZCkge1xuICAgIC8vIGdlbmVyYXRlIG5ldyBpZCBpZiBubyBpZCBzZXRcbiAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5ub2RlLmlkKSB7XG4gICAgICB0aGlzLm5vZGUuaWQgPSBlaWQodGhpcy50eXBlKTtcbiAgICB9IC8vIGRvbid0IHNldCBkaXJlY3RseSB3aXRoIHRoaXMubm9kZS5pZCB0byBtYWtlIGBudWxsYCB3b3JrIGNvcnJlY3RseVxuXG5cbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpZCcsIGlkKTtcbiAgfSAvLyBHZXRzIGluZGV4IG9mIGdpdmVuIGVsZW1lbnRcblxuXG4gIGluZGV4KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLm5vZGUuY2hpbGROb2RlcykuaW5kZXhPZihlbGVtZW50Lm5vZGUpO1xuICB9IC8vIEdldCB0aGUgbGFzdCBjaGlsZFxuXG5cbiAgbGFzdCgpIHtcbiAgICByZXR1cm4gYWRvcHQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XG4gIH0gLy8gbWF0Y2hlcyB0aGUgZWxlbWVudCB2cyBhIGNzcyBzZWxlY3RvclxuXG5cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGNvbnN0IGVsID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IG1hdGNoZXIgPSBlbC5tYXRjaGVzIHx8IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IgfHwgbnVsbDtcbiAgICByZXR1cm4gbWF0Y2hlciAmJiBtYXRjaGVyLmNhbGwoZWwsIHNlbGVjdG9yKTtcbiAgfSAvLyBSZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCBpbnN0YW5jZVxuXG5cbiAgcGFyZW50KHR5cGUpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpczsgLy8gY2hlY2sgZm9yIHBhcmVudFxuXG4gICAgaWYgKCFwYXJlbnQubm9kZS5wYXJlbnROb2RlKSByZXR1cm4gbnVsbDsgLy8gZ2V0IHBhcmVudCBlbGVtZW50XG5cbiAgICBwYXJlbnQgPSBhZG9wdChwYXJlbnQubm9kZS5wYXJlbnROb2RlKTtcbiAgICBpZiAoIXR5cGUpIHJldHVybiBwYXJlbnQ7IC8vIGxvb3AgdHJvdWdoIGFuY2VzdG9ycyBpZiB0eXBlIGlzIGdpdmVuXG5cbiAgICBkbyB7XG4gICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50Lm1hdGNoZXModHlwZSkgOiBwYXJlbnQgaW5zdGFuY2VvZiB0eXBlKSByZXR1cm4gcGFyZW50O1xuICAgIH0gd2hpbGUgKHBhcmVudCA9IGFkb3B0KHBhcmVudC5ub2RlLnBhcmVudE5vZGUpKTtcblxuICAgIHJldHVybiBwYXJlbnQ7XG4gIH0gLy8gQmFzaWNhbGx5IGRvZXMgdGhlIHNhbWUgYXMgYGFkZCgpYCBidXQgcmV0dXJucyB0aGUgYWRkZWQgZWxlbWVudCBpbnN0ZWFkXG5cblxuICBwdXQoZWxlbWVudCwgaSkge1xuICAgIGVsZW1lbnQgPSBtYWtlSW5zdGFuY2UoZWxlbWVudCk7XG4gICAgdGhpcy5hZGQoZWxlbWVudCwgaSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gQWRkIGVsZW1lbnQgdG8gZ2l2ZW4gY29udGFpbmVyIGFuZCByZXR1cm4gY29udGFpbmVyXG5cblxuICBwdXRJbihwYXJlbnQsIGkpIHtcbiAgICByZXR1cm4gbWFrZUluc3RhbmNlKHBhcmVudCkuYWRkKHRoaXMsIGkpO1xuICB9IC8vIFJlbW92ZSBlbGVtZW50XG5cblxuICByZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KCkpIHtcbiAgICAgIHRoaXMucGFyZW50KCkucmVtb3ZlRWxlbWVudCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBSZW1vdmUgYSBnaXZlbiBjaGlsZFxuXG5cbiAgcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQubm9kZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gUmVwbGFjZSB0aGlzIHdpdGggZWxlbWVudFxuXG5cbiAgcmVwbGFjZShlbGVtZW50KSB7XG4gICAgZWxlbWVudCA9IG1ha2VJbnN0YW5jZShlbGVtZW50KTtcblxuICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVsZW1lbnQubm9kZSwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJvdW5kKHByZWNpc2lvbiA9IDIsIG1hcCA9IG51bGwpIHtcbiAgICBjb25zdCBmYWN0b3IgPSAxMCAqKiBwcmVjaXNpb247XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmF0dHIobWFwKTtcblxuICAgIGZvciAoY29uc3QgaSBpbiBhdHRycykge1xuICAgICAgaWYgKHR5cGVvZiBhdHRyc1tpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYXR0cnNbaV0gPSBNYXRoLnJvdW5kKGF0dHJzW2ldICogZmFjdG9yKSAvIGZhY3RvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoYXR0cnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIEltcG9ydCAvIEV4cG9ydCByYXcgc3ZnXG5cblxuICBzdmcoc3ZnT3JGbiwgb3V0ZXJTVkcpIHtcbiAgICByZXR1cm4gdGhpcy54bWwoc3ZnT3JGbiwgb3V0ZXJTVkcsIHN2Zyk7XG4gIH0gLy8gUmV0dXJuIGlkIG9uIHN0cmluZyBjb252ZXJzaW9uXG5cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pZCgpO1xuICB9XG5cbiAgd29yZHModGV4dCkge1xuICAgIC8vIFRoaXMgaXMgZmFzdGVyIHRoYW4gcmVtb3ZpbmcgYWxsIGNoaWxkcmVuIGFuZCBhZGRpbmcgYSBuZXcgb25lXG4gICAgdGhpcy5ub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdyYXAobm9kZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkVG8obm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJlbnQuaW5kZXgodGhpcyk7XG4gICAgcmV0dXJuIHBhcmVudC5wdXQobm9kZSwgcG9zaXRpb24pLnB1dCh0aGlzKTtcbiAgfSAvLyB3cml0ZSBzdmdqcyBkYXRhIHRvIHRoZSBkb21cblxuXG4gIHdyaXRlRGF0YVRvRG9tKCkge1xuICAgIC8vIGR1bXAgdmFyaWFibGVzIHJlY3Vyc2l2ZWx5XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMud3JpdGVEYXRhVG9Eb20oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBJbXBvcnQgLyBFeHBvcnQgcmF3IHN2Z1xuXG5cbiAgeG1sKHhtbE9yRm4sIG91dGVyWE1MLCBucykge1xuICAgIGlmICh0eXBlb2YgeG1sT3JGbiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBucyA9IG91dGVyWE1MO1xuICAgICAgb3V0ZXJYTUwgPSB4bWxPckZuO1xuICAgICAgeG1sT3JGbiA9IG51bGw7XG4gICAgfSAvLyBhY3QgYXMgZ2V0dGVyIGlmIG5vIHN2ZyBzdHJpbmcgaXMgZ2l2ZW5cblxuXG4gICAgaWYgKHhtbE9yRm4gPT0gbnVsbCB8fCB0eXBlb2YgeG1sT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gVGhlIGRlZmF1bHQgZm9yIGV4cG9ydHMgaXMsIHRoYXQgdGhlIG91dGVyTm9kZSBpcyBpbmNsdWRlZFxuICAgICAgb3V0ZXJYTUwgPSBvdXRlclhNTCA9PSBudWxsID8gdHJ1ZSA6IG91dGVyWE1MOyAvLyB3cml0ZSBzdmdqcyBkYXRhIHRvIHRoZSBkb21cblxuICAgICAgdGhpcy53cml0ZURhdGFUb0RvbSgpO1xuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzOyAvLyBBbiBleHBvcnQgbW9kaWZpZXIgd2FzIHBhc3NlZFxuXG4gICAgICBpZiAoeG1sT3JGbiAhPSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnQgPSBhZG9wdChjdXJyZW50Lm5vZGUuY2xvbmVOb2RlKHRydWUpKTsgLy8gSWYgdGhlIHVzZXIgd2FudHMgb3V0ZXJIVE1MIHdlIG5lZWQgdG8gcHJvY2VzcyB0aGlzIG5vZGUsIHRvb1xuXG4gICAgICAgIGlmIChvdXRlclhNTCkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHhtbE9yRm4oY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9IHJlc3VsdCB8fCBjdXJyZW50OyAvLyBUaGUgdXNlciBkb2VzIG5vdCB3YW50IHRoaXMgbm9kZT8gV2VsbCwgdGhlbiBoZSBnZXRzIG5vdGhpbmdcblxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSByZXR1cm4gJyc7XG4gICAgICAgIH0gLy8gRGVlcCBsb29wIHRocm91Z2ggYWxsIGNoaWxkcmVuIGFuZCBhcHBseSBtb2RpZmllclxuXG5cbiAgICAgICAgY3VycmVudC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB4bWxPckZuKHRoaXMpO1xuXG4gICAgICAgICAgY29uc3QgX3RoaXMgPSByZXN1bHQgfHwgdGhpczsgLy8gSWYgbW9kaWZpZXIgcmV0dXJucyBmYWxzZSwgZGlzY2FyZCBub2RlXG5cblxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpOyAvLyBJZiBtb2RpZmllciByZXR1cm5zIG5ldyBub2RlLCB1c2UgaXRcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAmJiB0aGlzICE9PSBfdGhpcykge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKF90aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgfSAvLyBSZXR1cm4gb3V0ZXIgb3IgaW5uZXIgY29udGVudFxuXG5cbiAgICAgIHJldHVybiBvdXRlclhNTCA/IGN1cnJlbnQubm9kZS5vdXRlckhUTUwgOiBjdXJyZW50Lm5vZGUuaW5uZXJIVE1MO1xuICAgIH0gLy8gQWN0IGFzIHNldHRlciBpZiB3ZSBnb3QgYSBzdHJpbmdcbiAgICAvLyBUaGUgZGVmYXVsdCBmb3IgaW1wb3J0IGlzLCB0aGF0IHRoZSBjdXJyZW50IG5vZGUgaXMgbm90IHJlcGxhY2VkXG5cblxuICAgIG91dGVyWE1MID0gb3V0ZXJYTUwgPT0gbnVsbCA/IGZhbHNlIDogb3V0ZXJYTUw7IC8vIENyZWF0ZSB0ZW1wb3JhcnkgaG9sZGVyXG5cbiAgICBjb25zdCB3ZWxsID0gY3JlYXRlKCd3cmFwcGVyJywgbnMpO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2xvYmFscy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vIER1bXAgcmF3IHN2Z1xuXG4gICAgd2VsbC5pbm5lckhUTUwgPSB4bWxPckZuOyAvLyBUcmFuc3BsYW50IG5vZGVzIGludG8gdGhlIGZyYWdtZW50XG5cbiAgICBmb3IgKGxldCBsZW4gPSB3ZWxsLmNoaWxkcmVuLmxlbmd0aDsgbGVuLS07KSB7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh3ZWxsLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpOyAvLyBBZGQgdGhlIHdob2xlIGZyYWdtZW50IGF0IG9uY2VcblxuICAgIHJldHVybiBvdXRlclhNTCA/IHRoaXMucmVwbGFjZShmcmFnbWVudCkgJiYgcGFyZW50IDogdGhpcy5hZGQoZnJhZ21lbnQpO1xuICB9XG5cbn1cbmV4dGVuZChEb20sIHtcbiAgYXR0cixcbiAgZmluZCxcbiAgZmluZE9uZVxufSk7XG5yZWdpc3RlcihEb20sICdEb20nKTtcblxuY2xhc3MgRWxlbWVudCBleHRlbmRzIERvbSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzKSB7XG4gICAgc3VwZXIobm9kZSwgYXR0cnMpOyAvLyBpbml0aWFsaXplIGRhdGEgb2JqZWN0XG5cbiAgICB0aGlzLmRvbSA9IHt9OyAvLyBjcmVhdGUgY2lyY3VsYXIgcmVmZXJlbmNlXG5cbiAgICB0aGlzLm5vZGUuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlKCdzdmdqczpkYXRhJykpIHtcbiAgICAgIC8vIHB1bGwgc3ZnanMgZGF0YSBmcm9tIHRoZSBkb20gKGdldEF0dHJpYnV0ZU5TIGRvZXNuJ3Qgd29yayBpbiBodG1sNSlcbiAgICAgIHRoaXMuc2V0RGF0YShKU09OLnBhcnNlKG5vZGUuZ2V0QXR0cmlidXRlKCdzdmdqczpkYXRhJykpIHx8IHt9KTtcbiAgICB9XG4gIH0gLy8gTW92ZSBlbGVtZW50IGJ5IGl0cyBjZW50ZXJcblxuXG4gIGNlbnRlcih4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuY3goeCkuY3koeSk7XG4gIH0gLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB4LWF4aXNcblxuXG4gIGN4KHgpIHtcbiAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy54KCkgKyB0aGlzLndpZHRoKCkgLyAyIDogdGhpcy54KHggLSB0aGlzLndpZHRoKCkgLyAyKTtcbiAgfSAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHktYXhpc1xuXG5cbiAgY3koeSkge1xuICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLnkoKSArIHRoaXMuaGVpZ2h0KCkgLyAyIDogdGhpcy55KHkgLSB0aGlzLmhlaWdodCgpIC8gMik7XG4gIH0gLy8gR2V0IGRlZnNcblxuXG4gIGRlZnMoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdCgpO1xuICAgIHJldHVybiByb290ICYmIHJvb3QuZGVmcygpO1xuICB9IC8vIFJlbGF0aXZlIG1vdmUgb3ZlciB4IGFuZCB5IGF4ZXNcblxuXG4gIGRtb3ZlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5keCh4KS5keSh5KTtcbiAgfSAvLyBSZWxhdGl2ZSBtb3ZlIG92ZXIgeCBheGlzXG5cblxuICBkeCh4ID0gMCkge1xuICAgIHJldHVybiB0aGlzLngobmV3IFNWR051bWJlcih4KS5wbHVzKHRoaXMueCgpKSk7XG4gIH0gLy8gUmVsYXRpdmUgbW92ZSBvdmVyIHkgYXhpc1xuXG5cbiAgZHkoeSA9IDApIHtcbiAgICByZXR1cm4gdGhpcy55KG5ldyBTVkdOdW1iZXIoeSkucGx1cyh0aGlzLnkoKSkpO1xuICB9XG5cbiAgZ2V0RXZlbnRIb2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XG5cblxuICBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcbiAgfSAvLyBNb3ZlIGVsZW1lbnQgdG8gZ2l2ZW4geCBhbmQgeSB2YWx1ZXNcblxuXG4gIG1vdmUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLngoeCkueSh5KTtcbiAgfSAvLyByZXR1cm4gYXJyYXkgb2YgYWxsIGFuY2VzdG9ycyBvZiBnaXZlbiB0eXBlIHVwIHRvIHRoZSByb290IHN2Z1xuXG5cbiAgcGFyZW50cyh1bnRpbCA9IHRoaXMucm9vdCgpKSB7XG4gICAgY29uc3QgaXNTZWxlY3RvciA9IHR5cGVvZiB1bnRpbCA9PT0gJ3N0cmluZyc7XG5cbiAgICBpZiAoIWlzU2VsZWN0b3IpIHtcbiAgICAgIHVudGlsID0gbWFrZUluc3RhbmNlKHVudGlsKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRzID0gbmV3IExpc3QoKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcztcblxuICAgIHdoaWxlICgocGFyZW50ID0gcGFyZW50LnBhcmVudCgpKSAmJiBwYXJlbnQubm9kZSAhPT0gZ2xvYmFscy5kb2N1bWVudCAmJiBwYXJlbnQubm9kZU5hbWUgIT09ICcjZG9jdW1lbnQtZnJhZ21lbnQnKSB7XG4gICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcblxuICAgICAgaWYgKCFpc1NlbGVjdG9yICYmIHBhcmVudC5ub2RlID09PSB1bnRpbC5ub2RlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZWxlY3RvciAmJiBwYXJlbnQubWF0Y2hlcyh1bnRpbCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnQubm9kZSA9PT0gdGhpcy5yb290KCkubm9kZSkge1xuICAgICAgICAvLyBXZSB3b3JrZWQgb3VyIHdheSB0byB0aGUgcm9vdCBhbmQgZGlkbid0IG1hdGNoIGB1bnRpbGBcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHM7XG4gIH0gLy8gR2V0IHJlZmVyZW5jZWQgZWxlbWVudCBmb3JtIGF0dHJpYnV0ZSB2YWx1ZVxuXG5cbiAgcmVmZXJlbmNlKGF0dHIpIHtcbiAgICBhdHRyID0gdGhpcy5hdHRyKGF0dHIpO1xuICAgIGlmICghYXR0cikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbSA9IChhdHRyICsgJycpLm1hdGNoKHJlZmVyZW5jZSk7XG4gICAgcmV0dXJuIG0gPyBtYWtlSW5zdGFuY2UobVsxXSkgOiBudWxsO1xuICB9IC8vIEdldCBwYXJlbnQgZG9jdW1lbnRcblxuXG4gIHJvb3QoKSB7XG4gICAgY29uc3QgcCA9IHRoaXMucGFyZW50KGdldENsYXNzKHJvb3QpKTtcbiAgICByZXR1cm4gcCAmJiBwLnJvb3QoKTtcbiAgfSAvLyBzZXQgZ2l2ZW4gZGF0YSB0byB0aGUgZWxlbWVudHMgZGF0YSBwcm9wZXJ0eVxuXG5cbiAgc2V0RGF0YShvKSB7XG4gICAgdGhpcy5kb20gPSBvO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNldCBlbGVtZW50IHNpemUgdG8gZ2l2ZW4gd2lkdGggYW5kIGhlaWdodFxuXG5cbiAgc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXMud2lkdGgobmV3IFNWR051bWJlcihwLndpZHRoKSkuaGVpZ2h0KG5ldyBTVkdOdW1iZXIocC5oZWlnaHQpKTtcbiAgfSAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxuXG5cbiAgd2lkdGgod2lkdGgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd3aWR0aCcsIHdpZHRoKTtcbiAgfSAvLyB3cml0ZSBzdmdqcyBkYXRhIHRvIHRoZSBkb21cblxuXG4gIHdyaXRlRGF0YVRvRG9tKCkge1xuICAgIC8vIHJlbW92ZSBwcmV2aW91c2x5IHNldCBkYXRhXG4gICAgdGhpcy5ub2RlLnJlbW92ZUF0dHJpYnV0ZSgnc3ZnanM6ZGF0YScpO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZG9tKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3N2Z2pzOmRhdGEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRvbSkpOyAvLyBzZWUgIzQyOFxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci53cml0ZURhdGFUb0RvbSgpO1xuICB9IC8vIE1vdmUgb3ZlciB4LWF4aXNcblxuXG4gIHgoeCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3gnLCB4KTtcbiAgfSAvLyBNb3ZlIG92ZXIgeS1heGlzXG5cblxuICB5KHkpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd5JywgeSk7XG4gIH1cblxufVxuZXh0ZW5kKEVsZW1lbnQsIHtcbiAgYmJveCxcbiAgcmJveCxcbiAgaW5zaWRlLFxuICBwb2ludCxcbiAgY3RtLFxuICBzY3JlZW5DVE1cbn0pO1xucmVnaXN0ZXIoRWxlbWVudCwgJ0VsZW1lbnQnKTtcblxuY29uc3Qgc3VnYXIgPSB7XG4gIHN0cm9rZTogWydjb2xvcicsICd3aWR0aCcsICdvcGFjaXR5JywgJ2xpbmVjYXAnLCAnbGluZWpvaW4nLCAnbWl0ZXJsaW1pdCcsICdkYXNoYXJyYXknLCAnZGFzaG9mZnNldCddLFxuICBmaWxsOiBbJ2NvbG9yJywgJ29wYWNpdHknLCAncnVsZSddLFxuICBwcmVmaXg6IGZ1bmN0aW9uICh0LCBhKSB7XG4gICAgcmV0dXJuIGEgPT09ICdjb2xvcicgPyB0IDogdCArICctJyArIGE7XG4gIH1cbn0gLy8gQWRkIHN1Z2FyIGZvciBmaWxsIGFuZCBzdHJva2VcbjtcblsnZmlsbCcsICdzdHJva2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IHt9O1xuICBsZXQgaTtcblxuICBleHRlbnNpb25bbV0gPSBmdW5jdGlvbiAobykge1xuICAgIGlmICh0eXBlb2YgbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dHIobSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvID09PSAnc3RyaW5nJyB8fCBvIGluc3RhbmNlb2YgQ29sb3IgfHwgQ29sb3IuaXNSZ2IobykgfHwgbyBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuYXR0cihtLCBvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IGFsbCBhdHRyaWJ1dGVzIGZyb20gc3VnYXIuZmlsbCBhbmQgc3VnYXIuc3Ryb2tlIGxpc3RcbiAgICAgIGZvciAoaSA9IHN1Z2FyW21dLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChvW3N1Z2FyW21dW2ldXSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hdHRyKHN1Z2FyLnByZWZpeChtLCBzdWdhclttXVtpXSksIG9bc3VnYXJbbV1baV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJlZ2lzdGVyTWV0aG9kcyhbJ0VsZW1lbnQnLCAnUnVubmVyJ10sIGV4dGVuc2lvbik7XG59KTtcbnJlZ2lzdGVyTWV0aG9kcyhbJ0VsZW1lbnQnLCAnUnVubmVyJ10sIHtcbiAgLy8gTGV0IHRoZSB1c2VyIHNldCB0aGUgbWF0cml4IGRpcmVjdGx5XG4gIG1hdHJpeDogZnVuY3Rpb24gKG1hdCwgYiwgYywgZCwgZSwgZikge1xuICAgIC8vIEFjdCBhcyBhIGdldHRlclxuICAgIGlmIChtYXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBNYXRyaXgodGhpcyk7XG4gICAgfSAvLyBBY3QgYXMgYSBzZXR0ZXIsIHRoZSB1c2VyIGNhbiBwYXNzIGEgbWF0cml4IG9yIGEgc2V0IG9mIG51bWJlcnNcblxuXG4gICAgcmV0dXJuIHRoaXMuYXR0cigndHJhbnNmb3JtJywgbmV3IE1hdHJpeChtYXQsIGIsIGMsIGQsIGUsIGYpKTtcbiAgfSxcbiAgLy8gTWFwIHJvdGF0aW9uIHRvIHRyYW5zZm9ybVxuICByb3RhdGU6IGZ1bmN0aW9uIChhbmdsZSwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIHJvdGF0ZTogYW5nbGUsXG4gICAgICBveDogY3gsXG4gICAgICBveTogY3lcbiAgICB9LCB0cnVlKTtcbiAgfSxcbiAgLy8gTWFwIHNrZXcgdG8gdHJhbnNmb3JtXG4gIHNrZXc6IGZ1bmN0aW9uICh4LCB5LCBjeCwgY3kpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAzID8gdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgc2tldzogeCxcbiAgICAgIG94OiB5LFxuICAgICAgb3k6IGN4XG4gICAgfSwgdHJ1ZSkgOiB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICBza2V3OiBbeCwgeV0sXG4gICAgICBveDogY3gsXG4gICAgICBveTogY3lcbiAgICB9LCB0cnVlKTtcbiAgfSxcbiAgc2hlYXI6IGZ1bmN0aW9uIChsYW0sIGN4LCBjeSkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICBzaGVhcjogbGFtLFxuICAgICAgb3g6IGN4LFxuICAgICAgb3k6IGN5XG4gICAgfSwgdHJ1ZSk7XG4gIH0sXG4gIC8vIE1hcCBzY2FsZSB0byB0cmFuc2Zvcm1cbiAgc2NhbGU6IGZ1bmN0aW9uICh4LCB5LCBjeCwgY3kpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAzID8gdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgc2NhbGU6IHgsXG4gICAgICBveDogeSxcbiAgICAgIG95OiBjeFxuICAgIH0sIHRydWUpIDogdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgc2NhbGU6IFt4LCB5XSxcbiAgICAgIG94OiBjeCxcbiAgICAgIG95OiBjeVxuICAgIH0sIHRydWUpO1xuICB9LFxuICAvLyBNYXAgdHJhbnNsYXRlIHRvIHRyYW5zZm9ybVxuICB0cmFuc2xhdGU6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIHRyYW5zbGF0ZTogW3gsIHldXG4gICAgfSwgdHJ1ZSk7XG4gIH0sXG4gIC8vIE1hcCByZWxhdGl2ZSB0cmFuc2xhdGlvbnMgdG8gdHJhbnNmb3JtXG4gIHJlbGF0aXZlOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICByZWxhdGl2ZTogW3gsIHldXG4gICAgfSwgdHJ1ZSk7XG4gIH0sXG4gIC8vIE1hcCBmbGlwIHRvIHRyYW5zZm9ybVxuICBmbGlwOiBmdW5jdGlvbiAoZGlyZWN0aW9uID0gJ2JvdGgnLCBvcmlnaW4gPSAnY2VudGVyJykge1xuICAgIGlmICgneHlib3RodHJ1ZScuaW5kZXhPZihkaXJlY3Rpb24pID09PSAtMSkge1xuICAgICAgb3JpZ2luID0gZGlyZWN0aW9uO1xuICAgICAgZGlyZWN0aW9uID0gJ2JvdGgnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICBmbGlwOiBkaXJlY3Rpb24sXG4gICAgICBvcmlnaW46IG9yaWdpblxuICAgIH0sIHRydWUpO1xuICB9LFxuICAvLyBPcGFjaXR5XG4gIG9wYWNpdHk6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ29wYWNpdHknLCB2YWx1ZSk7XG4gIH1cbn0pO1xucmVnaXN0ZXJNZXRob2RzKCdyYWRpdXMnLCB7XG4gIC8vIEFkZCB4IGFuZCB5IHJhZGl1c1xuICByYWRpdXM6IGZ1bmN0aW9uICh4LCB5ID0geCkge1xuICAgIGNvbnN0IHR5cGUgPSAodGhpcy5fZWxlbWVudCB8fCB0aGlzKS50eXBlO1xuICAgIHJldHVybiB0eXBlID09PSAncmFkaWFsR3JhZGllbnQnID8gdGhpcy5hdHRyKCdyJywgbmV3IFNWR051bWJlcih4KSkgOiB0aGlzLnJ4KHgpLnJ5KHkpO1xuICB9XG59KTtcbnJlZ2lzdGVyTWV0aG9kcygnUGF0aCcsIHtcbiAgLy8gR2V0IHBhdGggbGVuZ3RoXG4gIGxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0VG90YWxMZW5ndGgoKTtcbiAgfSxcbiAgLy8gR2V0IHBvaW50IGF0IGxlbmd0aFxuICBwb2ludEF0OiBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLm5vZGUuZ2V0UG9pbnRBdExlbmd0aChsZW5ndGgpKTtcbiAgfVxufSk7XG5yZWdpc3Rlck1ldGhvZHMoWydFbGVtZW50JywgJ1J1bm5lciddLCB7XG4gIC8vIFNldCBmb250XG4gIGZvbnQ6IGZ1bmN0aW9uIChhLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2IGluIGEpIHRoaXMuZm9udCh2LCBhW3ZdKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEgPT09ICdsZWFkaW5nJyA/IHRoaXMubGVhZGluZyh2KSA6IGEgPT09ICdhbmNob3InID8gdGhpcy5hdHRyKCd0ZXh0LWFuY2hvcicsIHYpIDogYSA9PT0gJ3NpemUnIHx8IGEgPT09ICdmYW1pbHknIHx8IGEgPT09ICd3ZWlnaHQnIHx8IGEgPT09ICdzdHJldGNoJyB8fCBhID09PSAndmFyaWFudCcgfHwgYSA9PT0gJ3N0eWxlJyA/IHRoaXMuYXR0cignZm9udC0nICsgYSwgdikgOiB0aGlzLmF0dHIoYSwgdik7XG4gIH1cbn0pOyAvLyBBZGQgZXZlbnRzIHRvIGVsZW1lbnRzXG5cbmNvbnN0IG1ldGhvZHMgPSBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcsICdtb3VzZW1vdmUnLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJywgJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNobGVhdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnXS5yZWR1Y2UoZnVuY3Rpb24gKGxhc3QsIGV2ZW50KSB7XG4gIC8vIGFkZCBldmVudCB0byBFbGVtZW50XG4gIGNvbnN0IGZuID0gZnVuY3Rpb24gKGYpIHtcbiAgICBpZiAoZiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5vZmYoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uKGV2ZW50LCBmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBsYXN0W2V2ZW50XSA9IGZuO1xuICByZXR1cm4gbGFzdDtcbn0sIHt9KTtcbnJlZ2lzdGVyTWV0aG9kcygnRWxlbWVudCcsIG1ldGhvZHMpO1xuXG5mdW5jdGlvbiB1bnRyYW5zZm9ybSgpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cigndHJhbnNmb3JtJywgbnVsbCk7XG59IC8vIG1lcmdlIHRoZSB3aG9sZSB0cmFuc2Zvcm1hdGlvbiBjaGFpbiBpbnRvIG9uZSBtYXRyaXggYW5kIHJldHVybnMgaXRcblxuZnVuY3Rpb24gbWF0cml4aWZ5KCkge1xuICBjb25zdCBtYXRyaXggPSAodGhpcy5hdHRyKCd0cmFuc2Zvcm0nKSB8fCAnJyAvLyBzcGxpdCB0cmFuc2Zvcm1hdGlvbnNcbiAgKS5zcGxpdCh0cmFuc2Zvcm1zKS5zbGljZSgwLCAtMSkubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAvLyBnZW5lcmF0ZSBrZXkgPT4gdmFsdWUgcGFpcnNcbiAgICBjb25zdCBrdiA9IHN0ci50cmltKCkuc3BsaXQoJygnKTtcbiAgICByZXR1cm4gW2t2WzBdLCBrdlsxXS5zcGxpdChkZWxpbWl0ZXIpLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xuICAgIH0pXTtcbiAgfSkucmV2ZXJzZSgpIC8vIG1lcmdlIGV2ZXJ5IHRyYW5zZm9ybWF0aW9uIGludG8gb25lIG1hdHJpeFxuICAucmVkdWNlKGZ1bmN0aW9uIChtYXRyaXgsIHRyYW5zZm9ybSkge1xuICAgIGlmICh0cmFuc2Zvcm1bMF0gPT09ICdtYXRyaXgnKSB7XG4gICAgICByZXR1cm4gbWF0cml4LmxtdWx0aXBseShNYXRyaXguZnJvbUFycmF5KHRyYW5zZm9ybVsxXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRyaXhbdHJhbnNmb3JtWzBdXS5hcHBseShtYXRyaXgsIHRyYW5zZm9ybVsxXSk7XG4gIH0sIG5ldyBNYXRyaXgoKSk7XG4gIHJldHVybiBtYXRyaXg7XG59IC8vIGFkZCBhbiBlbGVtZW50IHRvIGFub3RoZXIgcGFyZW50IHdpdGhvdXQgY2hhbmdpbmcgdGhlIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvbiB0aGUgc2NyZWVuXG5cbmZ1bmN0aW9uIHRvUGFyZW50KHBhcmVudCwgaSkge1xuICBpZiAodGhpcyA9PT0gcGFyZW50KSByZXR1cm4gdGhpcztcbiAgY29uc3QgY3RtID0gdGhpcy5zY3JlZW5DVE0oKTtcbiAgY29uc3QgcEN0bSA9IHBhcmVudC5zY3JlZW5DVE0oKS5pbnZlcnNlKCk7XG4gIHRoaXMuYWRkVG8ocGFyZW50LCBpKS51bnRyYW5zZm9ybSgpLnRyYW5zZm9ybShwQ3RtLm11bHRpcGx5KGN0bSkpO1xuICByZXR1cm4gdGhpcztcbn0gLy8gc2FtZSBhcyBhYm92ZSB3aXRoIHBhcmVudCBlcXVhbHMgcm9vdC1zdmdcblxuZnVuY3Rpb24gdG9Sb290KGkpIHtcbiAgcmV0dXJuIHRoaXMudG9QYXJlbnQodGhpcy5yb290KCksIGkpO1xufSAvLyBBZGQgdHJhbnNmb3JtYXRpb25zXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShvLCByZWxhdGl2ZSkge1xuICAvLyBBY3QgYXMgYSBnZXR0ZXIgaWYgbm8gb2JqZWN0IHdhcyBwYXNzZWRcbiAgaWYgKG8gPT0gbnVsbCB8fCB0eXBlb2YgbyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBkZWNvbXBvc2VkID0gbmV3IE1hdHJpeCh0aGlzKS5kZWNvbXBvc2UoKTtcbiAgICByZXR1cm4gbyA9PSBudWxsID8gZGVjb21wb3NlZCA6IGRlY29tcG9zZWRbb107XG4gIH1cblxuICBpZiAoIU1hdHJpeC5pc01hdHJpeExpa2UobykpIHtcbiAgICAvLyBTZXQgdGhlIG9yaWdpbiBhY2NvcmRpbmcgdG8gdGhlIGRlZmluZWQgdHJhbnNmb3JtXG4gICAgbyA9IHsgLi4ubyxcbiAgICAgIG9yaWdpbjogZ2V0T3JpZ2luKG8sIHRoaXMpXG4gICAgfTtcbiAgfSAvLyBUaGUgdXNlciBjYW4gcGFzcyBhIGJvb2xlYW4sIGFuIEVsZW1lbnQgb3IgYW4gTWF0cml4IG9yIG5vdGhpbmdcblxuXG4gIGNvbnN0IGNsZWFuUmVsYXRpdmUgPSByZWxhdGl2ZSA9PT0gdHJ1ZSA/IHRoaXMgOiByZWxhdGl2ZSB8fCBmYWxzZTtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdHJpeChjbGVhblJlbGF0aXZlKS50cmFuc2Zvcm0obyk7XG4gIHJldHVybiB0aGlzLmF0dHIoJ3RyYW5zZm9ybScsIHJlc3VsdCk7XG59XG5yZWdpc3Rlck1ldGhvZHMoJ0VsZW1lbnQnLCB7XG4gIHVudHJhbnNmb3JtLFxuICBtYXRyaXhpZnksXG4gIHRvUGFyZW50LFxuICB0b1Jvb3QsXG4gIHRyYW5zZm9ybVxufSk7XG5cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIEVsZW1lbnQge1xuICBmbGF0dGVuKHBhcmVudCA9IHRoaXMsIGluZGV4KSB7XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQ29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXR0ZW4oKS51bmdyb3VwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bmdyb3VwKHBhcmVudCA9IHRoaXMucGFyZW50KCksIGluZGV4ID0gcGFyZW50LmluZGV4KHRoaXMpKSB7XG4gICAgLy8gd2hlbiBwYXJlbnQgIT0gdGhpcywgd2Ugd2FudCBhcHBlbmQgYWxsIGVsZW1lbnRzIHRvIHRoZSBlbmRcbiAgICBpbmRleCA9IGluZGV4ID09PSAtMSA/IHBhcmVudC5jaGlsZHJlbigpLmxlbmd0aCA6IGluZGV4O1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaSwgY2hpbGRyZW4pIHtcbiAgICAgIC8vIHJldmVyc2UgZWFjaFxuICAgICAgcmV0dXJuIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIGkgLSAxXS50b1BhcmVudChwYXJlbnQsIGluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG59XG5yZWdpc3RlcihDb250YWluZXIsICdDb250YWluZXInKTtcblxuY2xhc3MgRGVmcyBleHRlbmRzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnZGVmcycsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxuICBmbGF0dGVuKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5ncm91cCgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5yZWdpc3RlcihEZWZzLCAnRGVmcycpO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIEVsZW1lbnQge31cbnJlZ2lzdGVyKFNoYXBlLCAnU2hhcGUnKTtcblxuZnVuY3Rpb24gcngocngpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cigncngnLCByeCk7XG59IC8vIFJhZGl1cyB5IHZhbHVlXG5cbmZ1bmN0aW9uIHJ5KHJ5KSB7XG4gIHJldHVybiB0aGlzLmF0dHIoJ3J5JywgcnkpO1xufSAvLyBNb3ZlIG92ZXIgeC1heGlzXG5cbmZ1bmN0aW9uIHgkMyh4KSB7XG4gIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmN4KCkgLSB0aGlzLnJ4KCkgOiB0aGlzLmN4KHggKyB0aGlzLnJ4KCkpO1xufSAvLyBNb3ZlIG92ZXIgeS1heGlzXG5cbmZ1bmN0aW9uIHkkMyh5KSB7XG4gIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmN5KCkgLSB0aGlzLnJ5KCkgOiB0aGlzLmN5KHkgKyB0aGlzLnJ5KCkpO1xufSAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHgtYXhpc1xuXG5mdW5jdGlvbiBjeCQxKHgpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cignY3gnLCB4KTtcbn0gLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB5LWF4aXNcblxuZnVuY3Rpb24gY3kkMSh5KSB7XG4gIHJldHVybiB0aGlzLmF0dHIoJ2N5JywgeSk7XG59IC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XG5cbmZ1bmN0aW9uIHdpZHRoJDIod2lkdGgpIHtcbiAgcmV0dXJuIHdpZHRoID09IG51bGwgPyB0aGlzLnJ4KCkgKiAyIDogdGhpcy5yeChuZXcgU1ZHTnVtYmVyKHdpZHRoKS5kaXZpZGUoMikpO1xufSAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcblxuZnVuY3Rpb24gaGVpZ2h0JDIoaGVpZ2h0KSB7XG4gIHJldHVybiBoZWlnaHQgPT0gbnVsbCA/IHRoaXMucnkoKSAqIDIgOiB0aGlzLnJ5KG5ldyBTVkdOdW1iZXIoaGVpZ2h0KS5kaXZpZGUoMikpO1xufVxuXG52YXIgY2lyY2xlZCA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICByeDogcngsXG4gIHJ5OiByeSxcbiAgeDogeCQzLFxuICB5OiB5JDMsXG4gIGN4OiBjeCQxLFxuICBjeTogY3kkMSxcbiAgd2lkdGg6IHdpZHRoJDIsXG4gIGhlaWdodDogaGVpZ2h0JDJcbn07XG5cbmNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnZWxsaXBzZScsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxuICBzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICByZXR1cm4gdGhpcy5yeChuZXcgU1ZHTnVtYmVyKHAud2lkdGgpLmRpdmlkZSgyKSkucnkobmV3IFNWR051bWJlcihwLmhlaWdodCkuZGl2aWRlKDIpKTtcbiAgfVxuXG59XG5leHRlbmQoRWxsaXBzZSwgY2lyY2xlZCk7XG5yZWdpc3Rlck1ldGhvZHMoJ0NvbnRhaW5lcicsIHtcbiAgLy8gQ3JlYXRlIGFuIGVsbGlwc2VcbiAgZWxsaXBzZTogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHdpZHRoID0gMCwgaGVpZ2h0ID0gd2lkdGgpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQobmV3IEVsbGlwc2UoKSkuc2l6ZSh3aWR0aCwgaGVpZ2h0KS5tb3ZlKDAsIDApO1xuICB9KVxufSk7XG5yZWdpc3RlcihFbGxpcHNlLCAnRWxsaXBzZScpO1xuXG5jbGFzcyBGcmFnbWVudCBleHRlbmRzIERvbSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUgPSBnbG9iYWxzLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSkge1xuICAgIHN1cGVyKG5vZGUpO1xuICB9IC8vIEltcG9ydCAvIEV4cG9ydCByYXcgeG1sXG5cblxuICB4bWwoeG1sT3JGbiwgb3V0ZXJYTUwsIG5zKSB7XG4gICAgaWYgKHR5cGVvZiB4bWxPckZuID09PSAnYm9vbGVhbicpIHtcbiAgICAgIG5zID0gb3V0ZXJYTUw7XG4gICAgICBvdXRlclhNTCA9IHhtbE9yRm47XG4gICAgICB4bWxPckZuID0gbnVsbDtcbiAgICB9IC8vIGJlY2F1c2UgdGhpcyBpcyBhIGZyYWdtZW50IHdlIGhhdmUgdG8gcHV0IGFsbCBlbGVtZW50cyBpbnRvIGEgd3JhcHBlciBmaXJzdFxuICAgIC8vIGJlZm9yZSB3ZSBjYW4gZ2V0IHRoZSBpbm5lclhNTCBmcm9tIGl0XG5cblxuICAgIGlmICh4bWxPckZuID09IG51bGwgfHwgdHlwZW9mIHhtbE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgRG9tKGNyZWF0ZSgnd3JhcHBlcicsIG5zKSk7XG4gICAgICB3cmFwcGVyLmFkZCh0aGlzLm5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIHJldHVybiB3cmFwcGVyLnhtbChmYWxzZSwgbnMpO1xuICAgIH0gLy8gQWN0IGFzIHNldHRlciBpZiB3ZSBnb3QgYSBzdHJpbmdcblxuXG4gICAgcmV0dXJuIHN1cGVyLnhtbCh4bWxPckZuLCBmYWxzZSwgbnMpO1xuICB9XG5cbn1cblxucmVnaXN0ZXIoRnJhZ21lbnQsICdGcmFnbWVudCcpO1xuXG5mdW5jdGlvbiBmcm9tKHgsIHkpIHtcbiAgcmV0dXJuICh0aGlzLl9lbGVtZW50IHx8IHRoaXMpLnR5cGUgPT09ICdyYWRpYWxHcmFkaWVudCcgPyB0aGlzLmF0dHIoe1xuICAgIGZ4OiBuZXcgU1ZHTnVtYmVyKHgpLFxuICAgIGZ5OiBuZXcgU1ZHTnVtYmVyKHkpXG4gIH0pIDogdGhpcy5hdHRyKHtcbiAgICB4MTogbmV3IFNWR051bWJlcih4KSxcbiAgICB5MTogbmV3IFNWR051bWJlcih5KVxuICB9KTtcbn1cbmZ1bmN0aW9uIHRvKHgsIHkpIHtcbiAgcmV0dXJuICh0aGlzLl9lbGVtZW50IHx8IHRoaXMpLnR5cGUgPT09ICdyYWRpYWxHcmFkaWVudCcgPyB0aGlzLmF0dHIoe1xuICAgIGN4OiBuZXcgU1ZHTnVtYmVyKHgpLFxuICAgIGN5OiBuZXcgU1ZHTnVtYmVyKHkpXG4gIH0pIDogdGhpcy5hdHRyKHtcbiAgICB4MjogbmV3IFNWR051bWJlcih4KSxcbiAgICB5MjogbmV3IFNWR051bWJlcih5KVxuICB9KTtcbn1cblxudmFyIGdyYWRpZW50ZWQgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZnJvbTogZnJvbSxcbiAgdG86IHRvXG59O1xuXG5jbGFzcyBHcmFkaWVudCBleHRlbmRzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGF0dHJzKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KHR5cGUgKyAnR3JhZGllbnQnLCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyBudWxsIDogdHlwZSksIGF0dHJzKTtcbiAgfSAvLyBjdXN0b20gYXR0ciB0byBoYW5kbGUgdHJhbnNmb3JtXG5cblxuICBhdHRyKGEsIGIsIGMpIHtcbiAgICBpZiAoYSA9PT0gJ3RyYW5zZm9ybScpIGEgPSAnZ3JhZGllbnRUcmFuc2Zvcm0nO1xuICAgIHJldHVybiBzdXBlci5hdHRyKGEsIGIsIGMpO1xuICB9XG5cbiAgYmJveCgpIHtcbiAgICByZXR1cm4gbmV3IEJveCgpO1xuICB9XG5cbiAgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gYmFzZUZpbmQoJ3N2ZyBbZmlsbCo9XCInICsgdGhpcy5pZCgpICsgJ1wiXScpO1xuICB9IC8vIEFsaWFzIHN0cmluZyBjb252ZXJzaW9uIHRvIGZpbGxcblxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnVybCgpO1xuICB9IC8vIFVwZGF0ZSBncmFkaWVudFxuXG5cbiAgdXBkYXRlKGJsb2NrKSB7XG4gICAgLy8gcmVtb3ZlIGFsbCBzdG9wc1xuICAgIHRoaXMuY2xlYXIoKTsgLy8gaW52b2tlIHBhc3NlZCBibG9ja1xuXG4gICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYmxvY2suY2FsbCh0aGlzLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBSZXR1cm4gdGhlIGZpbGwgaWRcblxuXG4gIHVybCgpIHtcbiAgICByZXR1cm4gJ3VybChcIiMnICsgdGhpcy5pZCgpICsgJ1wiKSc7XG4gIH1cblxufVxuZXh0ZW5kKEdyYWRpZW50LCBncmFkaWVudGVkKTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBncmFkaWVudCBlbGVtZW50IGluIGRlZnNcbiAgICBncmFkaWVudCguLi5hcmdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkuZ3JhZGllbnQoLi4uYXJncyk7XG4gICAgfVxuXG4gIH0sXG4gIC8vIGRlZmluZSBncmFkaWVudFxuICBEZWZzOiB7XG4gICAgZ3JhZGllbnQ6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh0eXBlLCBibG9jaykge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBHcmFkaWVudCh0eXBlKSkudXBkYXRlKGJsb2NrKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKEdyYWRpZW50LCAnR3JhZGllbnQnKTtcblxuY2xhc3MgUGF0dGVybiBleHRlbmRzIENvbnRhaW5lciB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3BhdHRlcm4nLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIGN1c3RvbSBhdHRyIHRvIGhhbmRsZSB0cmFuc2Zvcm1cblxuXG4gIGF0dHIoYSwgYiwgYykge1xuICAgIGlmIChhID09PSAndHJhbnNmb3JtJykgYSA9ICdwYXR0ZXJuVHJhbnNmb3JtJztcbiAgICByZXR1cm4gc3VwZXIuYXR0cihhLCBiLCBjKTtcbiAgfVxuXG4gIGJib3goKSB7XG4gICAgcmV0dXJuIG5ldyBCb3goKTtcbiAgfVxuXG4gIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIGJhc2VGaW5kKCdzdmcgW2ZpbGwqPVwiJyArIHRoaXMuaWQoKSArICdcIl0nKTtcbiAgfSAvLyBBbGlhcyBzdHJpbmcgY29udmVyc2lvbiB0byBmaWxsXG5cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy51cmwoKTtcbiAgfSAvLyBVcGRhdGUgcGF0dGVybiBieSByZWJ1aWxkaW5nXG5cblxuICB1cGRhdGUoYmxvY2spIHtcbiAgICAvLyByZW1vdmUgY29udGVudFxuICAgIHRoaXMuY2xlYXIoKTsgLy8gaW52b2tlIHBhc3NlZCBibG9ja1xuXG4gICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYmxvY2suY2FsbCh0aGlzLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBSZXR1cm4gdGhlIGZpbGwgaWRcblxuXG4gIHVybCgpIHtcbiAgICByZXR1cm4gJ3VybChcIiMnICsgdGhpcy5pZCgpICsgJ1wiKSc7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIHBhdHRlcm4gZWxlbWVudCBpbiBkZWZzXG4gICAgcGF0dGVybiguLi5hcmdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkucGF0dGVybiguLi5hcmdzKTtcbiAgICB9XG5cbiAgfSxcbiAgRGVmczoge1xuICAgIHBhdHRlcm46IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBibG9jaykge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBQYXR0ZXJuKCkpLnVwZGF0ZShibG9jaykuYXR0cih7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHBhdHRlcm5Vbml0czogJ3VzZXJTcGFjZU9uVXNlJ1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihQYXR0ZXJuLCAnUGF0dGVybicpO1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIFNoYXBlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdpbWFnZScsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gKHJlKWxvYWQgaW1hZ2VcblxuXG4gIGxvYWQodXJsLCBjYWxsYmFjaykge1xuICAgIGlmICghdXJsKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBpbWcgPSBuZXcgZ2xvYmFscy53aW5kb3cuSW1hZ2UoKTtcbiAgICBvbihpbWcsICdsb2FkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnBhcmVudChQYXR0ZXJuKTsgLy8gZW5zdXJlIGltYWdlIHNpemVcblxuICAgICAgaWYgKHRoaXMud2lkdGgoKSA9PT0gMCAmJiB0aGlzLmhlaWdodCgpID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2l6ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocCBpbnN0YW5jZW9mIFBhdHRlcm4pIHtcbiAgICAgICAgLy8gZW5zdXJlIHBhdHRlcm4gc2l6ZSBpZiBub3Qgc2V0XG4gICAgICAgIGlmIChwLndpZHRoKCkgPT09IDAgJiYgcC5oZWlnaHQoKSA9PT0gMCkge1xuICAgICAgICAgIHAuc2l6ZSh0aGlzLndpZHRoKCksIHRoaXMuaGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBvbihpbWcsICdsb2FkIGVycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZG9udCBmb3JnZXQgdG8gdW5iaW5kIG1lbW9yeSBsZWFraW5nIGV2ZW50c1xuICAgICAgb2ZmKGltZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaHJlZicsIGltZy5zcmMgPSB1cmwsIHhsaW5rKTtcbiAgfVxuXG59XG5yZWdpc3RlckF0dHJIb29rKGZ1bmN0aW9uIChhdHRyLCB2YWwsIF90aGlzKSB7XG4gIC8vIGNvbnZlcnQgaW1hZ2UgZmlsbCBhbmQgc3Ryb2tlIHRvIHBhdHRlcm5zXG4gIGlmIChhdHRyID09PSAnZmlsbCcgfHwgYXR0ciA9PT0gJ3N0cm9rZScpIHtcbiAgICBpZiAoaXNJbWFnZS50ZXN0KHZhbCkpIHtcbiAgICAgIHZhbCA9IF90aGlzLnJvb3QoKS5kZWZzKCkuaW1hZ2UodmFsKTtcbiAgICB9XG4gIH1cblxuICBpZiAodmFsIGluc3RhbmNlb2YgSW1hZ2UpIHtcbiAgICB2YWwgPSBfdGhpcy5yb290KCkuZGVmcygpLnBhdHRlcm4oMCwgMCwgcGF0dGVybiA9PiB7XG4gICAgICBwYXR0ZXJuLmFkZCh2YWwpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn0pO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gY3JlYXRlIGltYWdlIGVsZW1lbnQsIGxvYWQgaW1hZ2UgYW5kIHNldCBpdHMgc2l6ZVxuICAgIGltYWdlOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBJbWFnZSgpKS5zaXplKDAsIDApLmxvYWQoc291cmNlLCBjYWxsYmFjayk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihJbWFnZSwgJ0ltYWdlJyk7XG5cbmNsYXNzIFBvaW50QXJyYXkgZXh0ZW5kcyBTVkdBcnJheSB7XG4gIC8vIEdldCBib3VuZGluZyBib3ggb2YgcG9pbnRzXG4gIGJib3goKSB7XG4gICAgbGV0IG1heFggPSAtSW5maW5pdHk7XG4gICAgbGV0IG1heFkgPSAtSW5maW5pdHk7XG4gICAgbGV0IG1pblggPSBJbmZpbml0eTtcbiAgICBsZXQgbWluWSA9IEluZmluaXR5O1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIG1heFggPSBNYXRoLm1heChlbFswXSwgbWF4WCk7XG4gICAgICBtYXhZID0gTWF0aC5tYXgoZWxbMV0sIG1heFkpO1xuICAgICAgbWluWCA9IE1hdGgubWluKGVsWzBdLCBtaW5YKTtcbiAgICAgIG1pblkgPSBNYXRoLm1pbihlbFsxXSwgbWluWSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBCb3gobWluWCwgbWluWSwgbWF4WCAtIG1pblgsIG1heFkgLSBtaW5ZKTtcbiAgfSAvLyBNb3ZlIHBvaW50IHN0cmluZ1xuXG5cbiAgbW92ZSh4LCB5KSB7XG4gICAgY29uc3QgYm94ID0gdGhpcy5iYm94KCk7IC8vIGdldCByZWxhdGl2ZSBvZmZzZXRcblxuICAgIHggLT0gYm94Lng7XG4gICAgeSAtPSBib3gueTsgLy8gbW92ZSBldmVyeSBwb2ludFxuXG4gICAgaWYgKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXNbaV0gPSBbdGhpc1tpXVswXSArIHgsIHRoaXNbaV1bMV0gKyB5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBQYXJzZSBwb2ludCBzdHJpbmcgYW5kIGZsYXQgYXJyYXlcblxuXG4gIHBhcnNlKGFycmF5ID0gWzAsIDBdKSB7XG4gICAgY29uc3QgcG9pbnRzID0gW107IC8vIGlmIGl0IGlzIGFuIGFycmF5LCB3ZSBmbGF0dGVuIGl0IGFuZCB0aGVyZWZvcmUgY2xvbmUgaXQgdG8gMSBkZXB0aHNcblxuICAgIGlmIChhcnJheSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycmF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRWxzZSwgaXQgaXMgY29uc2lkZXJlZCBhcyBhIHN0cmluZ1xuICAgICAgLy8gcGFyc2UgcG9pbnRzXG4gICAgICBhcnJheSA9IGFycmF5LnRyaW0oKS5zcGxpdChkZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KTtcbiAgICB9IC8vIHZhbGlkYXRlIHBvaW50cyAtIGh0dHBzOi8vc3Znd2cub3JnL3N2ZzItZHJhZnQvc2hhcGVzLmh0bWwjRGF0YVR5cGVQb2ludHNcbiAgICAvLyBPZGQgbnVtYmVyIG9mIGNvb3JkaW5hdGVzIGlzIGFuIGVycm9yLiBJbiBzdWNoIGNhc2VzLCBkcm9wIHRoZSBsYXN0IG9kZCBjb29yZGluYXRlLlxuXG5cbiAgICBpZiAoYXJyYXkubGVuZ3RoICUgMiAhPT0gMCkgYXJyYXkucG9wKCk7IC8vIHdyYXAgcG9pbnRzIGluIHR3by10dXBsZXNcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkgPSBpICsgMikge1xuICAgICAgcG9pbnRzLnB1c2goW2FycmF5W2ldLCBhcnJheVtpICsgMV1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9pbnRzO1xuICB9IC8vIFJlc2l6ZSBwb2x5IHN0cmluZ1xuXG5cbiAgc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgbGV0IGk7XG4gICAgY29uc3QgYm94ID0gdGhpcy5iYm94KCk7IC8vIHJlY2FsY3VsYXRlIHBvc2l0aW9uIG9mIGFsbCBwb2ludHMgYWNjb3JkaW5nIHRvIG5ldyBzaXplXG5cbiAgICBmb3IgKGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoYm94LndpZHRoKSB0aGlzW2ldWzBdID0gKHRoaXNbaV1bMF0gLSBib3gueCkgKiB3aWR0aCAvIGJveC53aWR0aCArIGJveC54O1xuICAgICAgaWYgKGJveC5oZWlnaHQpIHRoaXNbaV1bMV0gPSAodGhpc1tpXVsxXSAtIGJveC55KSAqIGhlaWdodCAvIGJveC5oZWlnaHQgKyBib3gueTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBDb252ZXJ0IGFycmF5IHRvIGxpbmUgb2JqZWN0XG5cblxuICB0b0xpbmUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHgxOiB0aGlzWzBdWzBdLFxuICAgICAgeTE6IHRoaXNbMF1bMV0sXG4gICAgICB4MjogdGhpc1sxXVswXSxcbiAgICAgIHkyOiB0aGlzWzFdWzFdXG4gICAgfTtcbiAgfSAvLyBDb252ZXJ0IGFycmF5IHRvIHN0cmluZ1xuXG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTsgLy8gY29udmVydCB0byBhIHBvbHkgcG9pbnQgc3RyaW5nXG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWwgPSB0aGlzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGFycmF5LnB1c2godGhpc1tpXS5qb2luKCcsJykpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheS5qb2luKCcgJyk7XG4gIH1cblxuICB0cmFuc2Zvcm0obSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkudHJhbnNmb3JtTyhtKTtcbiAgfSAvLyB0cmFuc2Zvcm0gcG9pbnRzIHdpdGggbWF0cml4IChzaW1pbGFyIHRvIFBvaW50LnRyYW5zZm9ybSlcblxuXG4gIHRyYW5zZm9ybU8obSkge1xuICAgIGlmICghTWF0cml4LmlzTWF0cml4TGlrZShtKSkge1xuICAgICAgbSA9IG5ldyBNYXRyaXgobSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAvLyBQZXJmb3JtIHRoZSBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXNbaV07XG4gICAgICB0aGlzW2ldWzBdID0gbS5hICogeCArIG0uYyAqIHkgKyBtLmU7XG4gICAgICB0aGlzW2ldWzFdID0gbS5iICogeCArIG0uZCAqIHkgKyBtLmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5jb25zdCBNb3JwaEFycmF5ID0gUG9pbnRBcnJheTsgLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXIgb3ZlciB4LWF4aXNcblxuZnVuY3Rpb24geCQyKHgpIHtcbiAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuYmJveCgpLnggOiB0aGlzLm1vdmUoeCwgdGhpcy5iYm94KCkueSk7XG59IC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyIG92ZXIgeS1heGlzXG5cbmZ1bmN0aW9uIHkkMih5KSB7XG4gIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmJib3goKS55IDogdGhpcy5tb3ZlKHRoaXMuYmJveCgpLngsIHkpO1xufSAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxuXG5mdW5jdGlvbiB3aWR0aCQxKHdpZHRoKSB7XG4gIGNvbnN0IGIgPSB0aGlzLmJib3goKTtcbiAgcmV0dXJuIHdpZHRoID09IG51bGwgPyBiLndpZHRoIDogdGhpcy5zaXplKHdpZHRoLCBiLmhlaWdodCk7XG59IC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxuXG5mdW5jdGlvbiBoZWlnaHQkMShoZWlnaHQpIHtcbiAgY29uc3QgYiA9IHRoaXMuYmJveCgpO1xuICByZXR1cm4gaGVpZ2h0ID09IG51bGwgPyBiLmhlaWdodCA6IHRoaXMuc2l6ZShiLndpZHRoLCBoZWlnaHQpO1xufVxuXG52YXIgcG9pbnRlZCA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBNb3JwaEFycmF5OiBNb3JwaEFycmF5LFxuICB4OiB4JDIsXG4gIHk6IHkkMixcbiAgd2lkdGg6IHdpZHRoJDEsXG4gIGhlaWdodDogaGVpZ2h0JDFcbn07XG5cbmNsYXNzIExpbmUgZXh0ZW5kcyBTaGFwZSB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2xpbmUnLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIEdldCBhcnJheVxuXG5cbiAgYXJyYXkoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludEFycmF5KFtbdGhpcy5hdHRyKCd4MScpLCB0aGlzLmF0dHIoJ3kxJyldLCBbdGhpcy5hdHRyKCd4MicpLCB0aGlzLmF0dHIoJ3kyJyldXSk7XG4gIH0gLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXJcblxuXG4gIG1vdmUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmF0dHIodGhpcy5hcnJheSgpLm1vdmUoeCwgeSkudG9MaW5lKCkpO1xuICB9IC8vIE92ZXJ3cml0ZSBuYXRpdmUgcGxvdCgpIG1ldGhvZFxuXG5cbiAgcGxvdCh4MSwgeTEsIHgyLCB5Mikge1xuICAgIGlmICh4MSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheSgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHkxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgeDEgPSB7XG4gICAgICAgIHgxLFxuICAgICAgICB5MSxcbiAgICAgICAgeDIsXG4gICAgICAgIHkyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB4MSA9IG5ldyBQb2ludEFycmF5KHgxKS50b0xpbmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hdHRyKHgxKTtcbiAgfSAvLyBTZXQgZWxlbWVudCBzaXplIHRvIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHRcblxuXG4gIHNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiB0aGlzLmF0dHIodGhpcy5hcnJheSgpLnNpemUocC53aWR0aCwgcC5oZWlnaHQpLnRvTGluZSgpKTtcbiAgfVxuXG59XG5leHRlbmQoTGluZSwgcG9pbnRlZCk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgYSBsaW5lIGVsZW1lbnRcbiAgICBsaW5lOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgLy8gbWFrZSBzdXJlIHBsb3QgaXMgY2FsbGVkIGFzIGEgc2V0dGVyXG4gICAgICAvLyB4MSBpcyBub3QgbmVjZXNzYXJpbHkgYSBudW1iZXIsIGl0IGNhbiBhbHNvIGJlIGFuIGFycmF5LCBhIHN0cmluZyBhbmQgYSBQb2ludEFycmF5XG4gICAgICByZXR1cm4gTGluZS5wcm90b3R5cGUucGxvdC5hcHBseSh0aGlzLnB1dChuZXcgTGluZSgpKSwgYXJnc1swXSAhPSBudWxsID8gYXJncyA6IFswLCAwLCAwLCAwXSk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihMaW5lLCAnTGluZScpO1xuXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdtYXJrZXInLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxuXG5cbiAgaGVpZ2h0KGhlaWdodCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ21hcmtlckhlaWdodCcsIGhlaWdodCk7XG4gIH1cblxuICBvcmllbnQob3JpZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignb3JpZW50Jywgb3JpZW50KTtcbiAgfSAvLyBTZXQgbWFya2VyIHJlZlggYW5kIHJlZllcblxuXG4gIHJlZih4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigncmVmWCcsIHgpLmF0dHIoJ3JlZlknLCB5KTtcbiAgfSAvLyBSZXR1cm4gdGhlIGZpbGwgaWRcblxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAndXJsKCMnICsgdGhpcy5pZCgpICsgJyknO1xuICB9IC8vIFVwZGF0ZSBtYXJrZXJcblxuXG4gIHVwZGF0ZShibG9jaykge1xuICAgIC8vIHJlbW92ZSBhbGwgY29udGVudFxuICAgIHRoaXMuY2xlYXIoKTsgLy8gaW52b2tlIHBhc3NlZCBibG9ja1xuXG4gICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYmxvY2suY2FsbCh0aGlzLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxuXG5cbiAgd2lkdGgod2lkdGgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdtYXJrZXJXaWR0aCcsIHdpZHRoKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICBtYXJrZXIoLi4uYXJncykge1xuICAgICAgLy8gQ3JlYXRlIG1hcmtlciBlbGVtZW50IGluIGRlZnNcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5tYXJrZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gIH0sXG4gIERlZnM6IHtcbiAgICAvLyBDcmVhdGUgbWFya2VyXG4gICAgbWFya2VyOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgYmxvY2spIHtcbiAgICAgIC8vIFNldCBkZWZhdWx0IHZpZXdib3ggdG8gbWF0Y2ggdGhlIHdpZHRoIGFuZCBoZWlnaHQsIHNldCByZWYgdG8gY3ggYW5kIGN5IGFuZCBzZXQgb3JpZW50IHRvIGF1dG9cbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgTWFya2VyKCkpLnNpemUod2lkdGgsIGhlaWdodCkucmVmKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikudmlld2JveCgwLCAwLCB3aWR0aCwgaGVpZ2h0KS5hdHRyKCdvcmllbnQnLCAnYXV0bycpLnVwZGF0ZShibG9jayk7XG4gICAgfSlcbiAgfSxcbiAgbWFya2VyOiB7XG4gICAgLy8gQ3JlYXRlIGFuZCBhdHRhY2ggbWFya2Vyc1xuICAgIG1hcmtlcihtYXJrZXIsIHdpZHRoLCBoZWlnaHQsIGJsb2NrKSB7XG4gICAgICBsZXQgYXR0ciA9IFsnbWFya2VyJ107IC8vIEJ1aWxkIGF0dHJpYnV0ZSBuYW1lXG5cbiAgICAgIGlmIChtYXJrZXIgIT09ICdhbGwnKSBhdHRyLnB1c2gobWFya2VyKTtcbiAgICAgIGF0dHIgPSBhdHRyLmpvaW4oJy0nKTsgLy8gU2V0IG1hcmtlciBhdHRyaWJ1dGVcblxuICAgICAgbWFya2VyID0gYXJndW1lbnRzWzFdIGluc3RhbmNlb2YgTWFya2VyID8gYXJndW1lbnRzWzFdIDogdGhpcy5kZWZzKCkubWFya2VyKHdpZHRoLCBoZWlnaHQsIGJsb2NrKTtcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoYXR0ciwgbWFya2VyKTtcbiAgICB9XG5cbiAgfVxufSk7XG5yZWdpc3RlcihNYXJrZXIsICdNYXJrZXInKTtcblxuLyoqKlxyXG5CYXNlIENsYXNzXHJcbj09PT09PT09PT1cclxuVGhlIGJhc2Ugc3RlcHBlciBjbGFzcyB0aGF0IHdpbGwgYmVcclxuKioqL1xuXG5mdW5jdGlvbiBtYWtlU2V0dGVyR2V0dGVyKGssIGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgaWYgKHYgPT0gbnVsbCkgcmV0dXJuIHRoaXNba107XG4gICAgdGhpc1trXSA9IHY7XG4gICAgaWYgKGYpIGYuY2FsbCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuY29uc3QgZWFzaW5nID0ge1xuICAnLSc6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICByZXR1cm4gcG9zO1xuICB9LFxuICAnPD4nOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIC1NYXRoLmNvcyhwb3MgKiBNYXRoLlBJKSAvIDIgKyAwLjU7XG4gIH0sXG4gICc+JzogZnVuY3Rpb24gKHBvcykge1xuICAgIHJldHVybiBNYXRoLnNpbihwb3MgKiBNYXRoLlBJIC8gMik7XG4gIH0sXG4gICc8JzogZnVuY3Rpb24gKHBvcykge1xuICAgIHJldHVybiAtTWF0aC5jb3MocG9zICogTWF0aC5QSSAvIDIpICsgMTtcbiAgfSxcbiAgYmV6aWVyOiBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAvLyBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1lYXNpbmctMS8jY3ViaWMtYmV6aWVyLWFsZ29cbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmICh0IDwgMCkge1xuICAgICAgICBpZiAoeDEgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHkxIC8geDEgKiB0O1xuICAgICAgICB9IGVsc2UgaWYgKHgyID4gMCkge1xuICAgICAgICAgIHJldHVybiB5MiAvIHgyICogdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0ID4gMSkge1xuICAgICAgICBpZiAoeDIgPCAxKSB7XG4gICAgICAgICAgcmV0dXJuICgxIC0geTIpIC8gKDEgLSB4MikgKiB0ICsgKHkyIC0geDIpIC8gKDEgLSB4Mik7XG4gICAgICAgIH0gZWxzZSBpZiAoeDEgPCAxKSB7XG4gICAgICAgICAgcmV0dXJuICgxIC0geTEpIC8gKDEgLSB4MSkgKiB0ICsgKHkxIC0geDEpIC8gKDEgLSB4MSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAzICogdCAqICgxIC0gdCkgKiogMiAqIHkxICsgMyAqIHQgKiogMiAqICgxIC0gdCkgKiB5MiArIHQgKiogMztcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICAvLyBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1lYXNpbmctMS8jc3RlcC10aW1pbmctZnVuY3Rpb24tYWxnb1xuICBzdGVwczogZnVuY3Rpb24gKHN0ZXBzLCBzdGVwUG9zaXRpb24gPSAnZW5kJykge1xuICAgIC8vIGRlYWwgd2l0aCBcImp1bXAtXCIgcHJlZml4XG4gICAgc3RlcFBvc2l0aW9uID0gc3RlcFBvc2l0aW9uLnNwbGl0KCctJykucmV2ZXJzZSgpWzBdO1xuICAgIGxldCBqdW1wcyA9IHN0ZXBzO1xuXG4gICAgaWYgKHN0ZXBQb3NpdGlvbiA9PT0gJ25vbmUnKSB7XG4gICAgICAtLWp1bXBzO1xuICAgIH0gZWxzZSBpZiAoc3RlcFBvc2l0aW9uID09PSAnYm90aCcpIHtcbiAgICAgICsranVtcHM7XG4gICAgfSAvLyBUaGUgYmVmb3JlRmxhZyBpcyBlc3NlbnRpYWxseSB1c2VsZXNzXG5cblxuICAgIHJldHVybiAodCwgYmVmb3JlRmxhZyA9IGZhbHNlKSA9PiB7XG4gICAgICAvLyBTdGVwIGlzIGNhbGxlZCBjdXJyZW50U3RlcCBpbiByZWZlcmVuY2VkIHVybFxuICAgICAgbGV0IHN0ZXAgPSBNYXRoLmZsb29yKHQgKiBzdGVwcyk7XG4gICAgICBjb25zdCBqdW1waW5nID0gdCAqIHN0ZXAgJSAxID09PSAwO1xuXG4gICAgICBpZiAoc3RlcFBvc2l0aW9uID09PSAnc3RhcnQnIHx8IHN0ZXBQb3NpdGlvbiA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICsrc3RlcDtcbiAgICAgIH1cblxuICAgICAgaWYgKGJlZm9yZUZsYWcgJiYganVtcGluZykge1xuICAgICAgICAtLXN0ZXA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ID49IDAgJiYgc3RlcCA8IDApIHtcbiAgICAgICAgc3RlcCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0IDw9IDEgJiYgc3RlcCA+IGp1bXBzKSB7XG4gICAgICAgIHN0ZXAgPSBqdW1wcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAgLyBqdW1wcztcbiAgICB9O1xuICB9XG59O1xuY2xhc3MgU3RlcHBlciB7XG4gIGRvbmUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbi8qKipcclxuRWFzaW5nIEZ1bmN0aW9uc1xyXG49PT09PT09PT09PT09PT09XHJcbioqKi9cblxuY2xhc3MgRWFzZSBleHRlbmRzIFN0ZXBwZXIge1xuICBjb25zdHJ1Y3RvcihmbiA9IHRpbWVsaW5lLmVhc2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWFzZSA9IGVhc2luZ1tmbl0gfHwgZm47XG4gIH1cblxuICBzdGVwKGZyb20sIHRvLCBwb3MpIHtcbiAgICBpZiAodHlwZW9mIGZyb20gIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gcG9zIDwgMSA/IGZyb20gOiB0bztcbiAgICB9XG5cbiAgICByZXR1cm4gZnJvbSArICh0byAtIGZyb20pICogdGhpcy5lYXNlKHBvcyk7XG4gIH1cblxufVxuLyoqKlxyXG5Db250cm9sbGVyIFR5cGVzXHJcbj09PT09PT09PT09PT09PT1cclxuKioqL1xuXG5jbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgU3RlcHBlciB7XG4gIGNvbnN0cnVjdG9yKGZuKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0ZXBwZXIgPSBmbjtcbiAgfVxuXG4gIGRvbmUoYykge1xuICAgIHJldHVybiBjLmRvbmU7XG4gIH1cblxuICBzdGVwKGN1cnJlbnQsIHRhcmdldCwgZHQsIGMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcGVyKGN1cnJlbnQsIHRhcmdldCwgZHQsIGMpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gcmVjYWxjdWxhdGUoKSB7XG4gIC8vIEFwcGx5IHRoZSBkZWZhdWx0IHBhcmFtZXRlcnNcbiAgY29uc3QgZHVyYXRpb24gPSAodGhpcy5fZHVyYXRpb24gfHwgNTAwKSAvIDEwMDA7XG4gIGNvbnN0IG92ZXJzaG9vdCA9IHRoaXMuX292ZXJzaG9vdCB8fCAwOyAvLyBDYWxjdWxhdGUgdGhlIFBJRCBuYXR1cmFsIHJlc3BvbnNlXG5cbiAgY29uc3QgZXBzID0gMWUtMTA7XG4gIGNvbnN0IHBpID0gTWF0aC5QSTtcbiAgY29uc3Qgb3MgPSBNYXRoLmxvZyhvdmVyc2hvb3QgLyAxMDAgKyBlcHMpO1xuICBjb25zdCB6ZXRhID0gLW9zIC8gTWF0aC5zcXJ0KHBpICogcGkgKyBvcyAqIG9zKTtcbiAgY29uc3Qgd24gPSAzLjkgLyAoemV0YSAqIGR1cmF0aW9uKTsgLy8gQ2FsY3VsYXRlIHRoZSBTcHJpbmcgdmFsdWVzXG5cbiAgdGhpcy5kID0gMiAqIHpldGEgKiB3bjtcbiAgdGhpcy5rID0gd24gKiB3bjtcbn1cblxuY2xhc3MgU3ByaW5nIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGR1cmF0aW9uID0gNTAwLCBvdmVyc2hvb3QgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmR1cmF0aW9uKGR1cmF0aW9uKS5vdmVyc2hvb3Qob3ZlcnNob290KTtcbiAgfVxuXG4gIHN0ZXAoY3VycmVudCwgdGFyZ2V0LCBkdCwgYykge1xuICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gJ3N0cmluZycpIHJldHVybiBjdXJyZW50O1xuICAgIGMuZG9uZSA9IGR0ID09PSBJbmZpbml0eTtcbiAgICBpZiAoZHQgPT09IEluZmluaXR5KSByZXR1cm4gdGFyZ2V0O1xuICAgIGlmIChkdCA9PT0gMCkgcmV0dXJuIGN1cnJlbnQ7XG4gICAgaWYgKGR0ID4gMTAwKSBkdCA9IDE2O1xuICAgIGR0IC89IDEwMDA7IC8vIEdldCB0aGUgcHJldmlvdXMgdmVsb2NpdHlcblxuICAgIGNvbnN0IHZlbG9jaXR5ID0gYy52ZWxvY2l0eSB8fCAwOyAvLyBBcHBseSB0aGUgY29udHJvbCB0byBnZXQgdGhlIG5ldyBwb3NpdGlvbiBhbmQgc3RvcmUgaXRcblxuICAgIGNvbnN0IGFjY2VsZXJhdGlvbiA9IC10aGlzLmQgKiB2ZWxvY2l0eSAtIHRoaXMuayAqIChjdXJyZW50IC0gdGFyZ2V0KTtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGN1cnJlbnQgKyB2ZWxvY2l0eSAqIGR0ICsgYWNjZWxlcmF0aW9uICogZHQgKiBkdCAvIDI7IC8vIFN0b3JlIHRoZSB2ZWxvY2l0eVxuXG4gICAgYy52ZWxvY2l0eSA9IHZlbG9jaXR5ICsgYWNjZWxlcmF0aW9uICogZHQ7IC8vIEZpZ3VyZSBvdXQgaWYgd2UgaGF2ZSBjb252ZXJnZWQsIGFuZCBpZiBzbywgcGFzcyB0aGUgdmFsdWVcblxuICAgIGMuZG9uZSA9IE1hdGguYWJzKHRhcmdldCAtIG5ld1Bvc2l0aW9uKSArIE1hdGguYWJzKHZlbG9jaXR5KSA8IDAuMDAyO1xuICAgIHJldHVybiBjLmRvbmUgPyB0YXJnZXQgOiBuZXdQb3NpdGlvbjtcbiAgfVxuXG59XG5leHRlbmQoU3ByaW5nLCB7XG4gIGR1cmF0aW9uOiBtYWtlU2V0dGVyR2V0dGVyKCdfZHVyYXRpb24nLCByZWNhbGN1bGF0ZSksXG4gIG92ZXJzaG9vdDogbWFrZVNldHRlckdldHRlcignX292ZXJzaG9vdCcsIHJlY2FsY3VsYXRlKVxufSk7XG5jbGFzcyBQSUQgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocCA9IDAuMSwgaSA9IDAuMDEsIGQgPSAwLCB3aW5kdXAgPSAxMDAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnAocCkuaShpKS5kKGQpLndpbmR1cCh3aW5kdXApO1xuICB9XG5cbiAgc3RlcChjdXJyZW50LCB0YXJnZXQsIGR0LCBjKSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnc3RyaW5nJykgcmV0dXJuIGN1cnJlbnQ7XG4gICAgYy5kb25lID0gZHQgPT09IEluZmluaXR5O1xuICAgIGlmIChkdCA9PT0gSW5maW5pdHkpIHJldHVybiB0YXJnZXQ7XG4gICAgaWYgKGR0ID09PSAwKSByZXR1cm4gY3VycmVudDtcbiAgICBjb25zdCBwID0gdGFyZ2V0IC0gY3VycmVudDtcbiAgICBsZXQgaSA9IChjLmludGVncmFsIHx8IDApICsgcCAqIGR0O1xuICAgIGNvbnN0IGQgPSAocCAtIChjLmVycm9yIHx8IDApKSAvIGR0O1xuICAgIGNvbnN0IHdpbmR1cCA9IHRoaXMuX3dpbmR1cDsgLy8gYW50aXdpbmR1cFxuXG4gICAgaWYgKHdpbmR1cCAhPT0gZmFsc2UpIHtcbiAgICAgIGkgPSBNYXRoLm1heCgtd2luZHVwLCBNYXRoLm1pbihpLCB3aW5kdXApKTtcbiAgICB9XG5cbiAgICBjLmVycm9yID0gcDtcbiAgICBjLmludGVncmFsID0gaTtcbiAgICBjLmRvbmUgPSBNYXRoLmFicyhwKSA8IDAuMDAxO1xuICAgIHJldHVybiBjLmRvbmUgPyB0YXJnZXQgOiBjdXJyZW50ICsgKHRoaXMuUCAqIHAgKyB0aGlzLkkgKiBpICsgdGhpcy5EICogZCk7XG4gIH1cblxufVxuZXh0ZW5kKFBJRCwge1xuICB3aW5kdXA6IG1ha2VTZXR0ZXJHZXR0ZXIoJ193aW5kdXAnKSxcbiAgcDogbWFrZVNldHRlckdldHRlcignUCcpLFxuICBpOiBtYWtlU2V0dGVyR2V0dGVyKCdJJyksXG4gIGQ6IG1ha2VTZXR0ZXJHZXR0ZXIoJ0QnKVxufSk7XG5cbmNvbnN0IHNlZ21lbnRQYXJhbWV0ZXJzID0ge1xuICBNOiAyLFxuICBMOiAyLFxuICBIOiAxLFxuICBWOiAxLFxuICBDOiA2LFxuICBTOiA0LFxuICBROiA0LFxuICBUOiAyLFxuICBBOiA3LFxuICBaOiAwXG59O1xuY29uc3QgcGF0aEhhbmRsZXJzID0ge1xuICBNOiBmdW5jdGlvbiAoYywgcCwgcDApIHtcbiAgICBwLnggPSBwMC54ID0gY1swXTtcbiAgICBwLnkgPSBwMC55ID0gY1sxXTtcbiAgICByZXR1cm4gWydNJywgcC54LCBwLnldO1xuICB9LFxuICBMOiBmdW5jdGlvbiAoYywgcCkge1xuICAgIHAueCA9IGNbMF07XG4gICAgcC55ID0gY1sxXTtcbiAgICByZXR1cm4gWydMJywgY1swXSwgY1sxXV07XG4gIH0sXG4gIEg6IGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgcC54ID0gY1swXTtcbiAgICByZXR1cm4gWydIJywgY1swXV07XG4gIH0sXG4gIFY6IGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgcC55ID0gY1swXTtcbiAgICByZXR1cm4gWydWJywgY1swXV07XG4gIH0sXG4gIEM6IGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgcC54ID0gY1s0XTtcbiAgICBwLnkgPSBjWzVdO1xuICAgIHJldHVybiBbJ0MnLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdLCBjWzRdLCBjWzVdXTtcbiAgfSxcbiAgUzogZnVuY3Rpb24gKGMsIHApIHtcbiAgICBwLnggPSBjWzJdO1xuICAgIHAueSA9IGNbM107XG4gICAgcmV0dXJuIFsnUycsIGNbMF0sIGNbMV0sIGNbMl0sIGNbM11dO1xuICB9LFxuICBROiBmdW5jdGlvbiAoYywgcCkge1xuICAgIHAueCA9IGNbMl07XG4gICAgcC55ID0gY1szXTtcbiAgICByZXR1cm4gWydRJywgY1swXSwgY1sxXSwgY1syXSwgY1szXV07XG4gIH0sXG4gIFQ6IGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgcC54ID0gY1swXTtcbiAgICBwLnkgPSBjWzFdO1xuICAgIHJldHVybiBbJ1QnLCBjWzBdLCBjWzFdXTtcbiAgfSxcbiAgWjogZnVuY3Rpb24gKGMsIHAsIHAwKSB7XG4gICAgcC54ID0gcDAueDtcbiAgICBwLnkgPSBwMC55O1xuICAgIHJldHVybiBbJ1onXTtcbiAgfSxcbiAgQTogZnVuY3Rpb24gKGMsIHApIHtcbiAgICBwLnggPSBjWzVdO1xuICAgIHAueSA9IGNbNl07XG4gICAgcmV0dXJuIFsnQScsIGNbMF0sIGNbMV0sIGNbMl0sIGNbM10sIGNbNF0sIGNbNV0sIGNbNl1dO1xuICB9XG59O1xuY29uc3QgbWxodnF0Y3NheiA9ICdtbGh2cXRjc2F6Jy5zcGxpdCgnJyk7XG5cbmZvciAobGV0IGkgPSAwLCBpbCA9IG1saHZxdGNzYXoubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICBwYXRoSGFuZGxlcnNbbWxodnF0Y3NheltpXV0gPSBmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYywgcCwgcDApIHtcbiAgICAgIGlmIChpID09PSAnSCcpIGNbMF0gPSBjWzBdICsgcC54O2Vsc2UgaWYgKGkgPT09ICdWJykgY1swXSA9IGNbMF0gKyBwLnk7ZWxzZSBpZiAoaSA9PT0gJ0EnKSB7XG4gICAgICAgIGNbNV0gPSBjWzVdICsgcC54O1xuICAgICAgICBjWzZdID0gY1s2XSArIHAueTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwLCBqbCA9IGMubGVuZ3RoOyBqIDwgamw7ICsraikge1xuICAgICAgICAgIGNbal0gPSBjW2pdICsgKGogJSAyID8gcC55IDogcC54KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBhdGhIYW5kbGVyc1tpXShjLCBwLCBwMCk7XG4gICAgfTtcbiAgfShtbGh2cXRjc2F6W2ldLnRvVXBwZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBtYWtlQWJzb2x1dChwYXJzZXIpIHtcbiAgY29uc3QgY29tbWFuZCA9IHBhcnNlci5zZWdtZW50WzBdO1xuICByZXR1cm4gcGF0aEhhbmRsZXJzW2NvbW1hbmRdKHBhcnNlci5zZWdtZW50LnNsaWNlKDEpLCBwYXJzZXIucCwgcGFyc2VyLnAwKTtcbn1cblxuZnVuY3Rpb24gc2VnbWVudENvbXBsZXRlKHBhcnNlcikge1xuICByZXR1cm4gcGFyc2VyLnNlZ21lbnQubGVuZ3RoICYmIHBhcnNlci5zZWdtZW50Lmxlbmd0aCAtIDEgPT09IHNlZ21lbnRQYXJhbWV0ZXJzW3BhcnNlci5zZWdtZW50WzBdLnRvVXBwZXJDYXNlKCldO1xufVxuXG5mdW5jdGlvbiBzdGFydE5ld1NlZ21lbnQocGFyc2VyLCB0b2tlbikge1xuICBwYXJzZXIuaW5OdW1iZXIgJiYgZmluYWxpemVOdW1iZXIocGFyc2VyLCBmYWxzZSk7XG4gIGNvbnN0IHBhdGhMZXR0ZXIgPSBpc1BhdGhMZXR0ZXIudGVzdCh0b2tlbik7XG5cbiAgaWYgKHBhdGhMZXR0ZXIpIHtcbiAgICBwYXJzZXIuc2VnbWVudCA9IFt0b2tlbl07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFzdENvbW1hbmQgPSBwYXJzZXIubGFzdENvbW1hbmQ7XG4gICAgY29uc3Qgc21hbGwgPSBsYXN0Q29tbWFuZC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGlzU21hbGwgPSBsYXN0Q29tbWFuZCA9PT0gc21hbGw7XG4gICAgcGFyc2VyLnNlZ21lbnQgPSBbc21hbGwgPT09ICdtJyA/IGlzU21hbGwgPyAnbCcgOiAnTCcgOiBsYXN0Q29tbWFuZF07XG4gIH1cblxuICBwYXJzZXIuaW5TZWdtZW50ID0gdHJ1ZTtcbiAgcGFyc2VyLmxhc3RDb21tYW5kID0gcGFyc2VyLnNlZ21lbnRbMF07XG4gIHJldHVybiBwYXRoTGV0dGVyO1xufVxuXG5mdW5jdGlvbiBmaW5hbGl6ZU51bWJlcihwYXJzZXIsIGluTnVtYmVyKSB7XG4gIGlmICghcGFyc2VyLmluTnVtYmVyKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlciBFcnJvcicpO1xuICBwYXJzZXIubnVtYmVyICYmIHBhcnNlci5zZWdtZW50LnB1c2gocGFyc2VGbG9hdChwYXJzZXIubnVtYmVyKSk7XG4gIHBhcnNlci5pbk51bWJlciA9IGluTnVtYmVyO1xuICBwYXJzZXIubnVtYmVyID0gJyc7XG4gIHBhcnNlci5wb2ludFNlZW4gPSBmYWxzZTtcbiAgcGFyc2VyLmhhc0V4cG9uZW50ID0gZmFsc2U7XG5cbiAgaWYgKHNlZ21lbnRDb21wbGV0ZShwYXJzZXIpKSB7XG4gICAgZmluYWxpemVTZWdtZW50KHBhcnNlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluYWxpemVTZWdtZW50KHBhcnNlcikge1xuICBwYXJzZXIuaW5TZWdtZW50ID0gZmFsc2U7XG5cbiAgaWYgKHBhcnNlci5hYnNvbHV0ZSkge1xuICAgIHBhcnNlci5zZWdtZW50ID0gbWFrZUFic29sdXQocGFyc2VyKTtcbiAgfVxuXG4gIHBhcnNlci5zZWdtZW50cy5wdXNoKHBhcnNlci5zZWdtZW50KTtcbn1cblxuZnVuY3Rpb24gaXNBcmNGbGFnKHBhcnNlcikge1xuICBpZiAoIXBhcnNlci5zZWdtZW50Lmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBpc0FyYyA9IHBhcnNlci5zZWdtZW50WzBdLnRvVXBwZXJDYXNlKCkgPT09ICdBJztcbiAgY29uc3QgbGVuZ3RoID0gcGFyc2VyLnNlZ21lbnQubGVuZ3RoO1xuICByZXR1cm4gaXNBcmMgJiYgKGxlbmd0aCA9PT0gNCB8fCBsZW5ndGggPT09IDUpO1xufVxuXG5mdW5jdGlvbiBpc0V4cG9uZW50aWFsKHBhcnNlcikge1xuICByZXR1cm4gcGFyc2VyLmxhc3RUb2tlbi50b1VwcGVyQ2FzZSgpID09PSAnRSc7XG59XG5cbmZ1bmN0aW9uIHBhdGhQYXJzZXIoZCwgdG9BYnNvbHV0ZSA9IHRydWUpIHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IHRva2VuID0gJyc7XG4gIGNvbnN0IHBhcnNlciA9IHtcbiAgICBzZWdtZW50OiBbXSxcbiAgICBpbk51bWJlcjogZmFsc2UsXG4gICAgbnVtYmVyOiAnJyxcbiAgICBsYXN0VG9rZW46ICcnLFxuICAgIGluU2VnbWVudDogZmFsc2UsXG4gICAgc2VnbWVudHM6IFtdLFxuICAgIHBvaW50U2VlbjogZmFsc2UsXG4gICAgaGFzRXhwb25lbnQ6IGZhbHNlLFxuICAgIGFic29sdXRlOiB0b0Fic29sdXRlLFxuICAgIHAwOiBuZXcgUG9pbnQoKSxcbiAgICBwOiBuZXcgUG9pbnQoKVxuICB9O1xuXG4gIHdoaWxlIChwYXJzZXIubGFzdFRva2VuID0gdG9rZW4sIHRva2VuID0gZC5jaGFyQXQoaW5kZXgrKykpIHtcbiAgICBpZiAoIXBhcnNlci5pblNlZ21lbnQpIHtcbiAgICAgIGlmIChzdGFydE5ld1NlZ21lbnQocGFyc2VyLCB0b2tlbikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRva2VuID09PSAnLicpIHtcbiAgICAgIGlmIChwYXJzZXIucG9pbnRTZWVuIHx8IHBhcnNlci5oYXNFeHBvbmVudCkge1xuICAgICAgICBmaW5hbGl6ZU51bWJlcihwYXJzZXIsIGZhbHNlKTtcbiAgICAgICAgLS1pbmRleDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlci5pbk51bWJlciA9IHRydWU7XG4gICAgICBwYXJzZXIucG9pbnRTZWVuID0gdHJ1ZTtcbiAgICAgIHBhcnNlci5udW1iZXIgKz0gdG9rZW47XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHRva2VuKSkpIHtcbiAgICAgIGlmIChwYXJzZXIubnVtYmVyID09PSAnMCcgfHwgaXNBcmNGbGFnKHBhcnNlcikpIHtcbiAgICAgICAgcGFyc2VyLmluTnVtYmVyID0gdHJ1ZTtcbiAgICAgICAgcGFyc2VyLm51bWJlciA9IHRva2VuO1xuICAgICAgICBmaW5hbGl6ZU51bWJlcihwYXJzZXIsIHRydWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VyLmluTnVtYmVyID0gdHJ1ZTtcbiAgICAgIHBhcnNlci5udW1iZXIgKz0gdG9rZW47XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4gPT09ICcgJyB8fCB0b2tlbiA9PT0gJywnKSB7XG4gICAgICBpZiAocGFyc2VyLmluTnVtYmVyKSB7XG4gICAgICAgIGZpbmFsaXplTnVtYmVyKHBhcnNlciwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4gPT09ICctJykge1xuICAgICAgaWYgKHBhcnNlci5pbk51bWJlciAmJiAhaXNFeHBvbmVudGlhbChwYXJzZXIpKSB7XG4gICAgICAgIGZpbmFsaXplTnVtYmVyKHBhcnNlciwgZmFsc2UpO1xuICAgICAgICAtLWluZGV4O1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VyLm51bWJlciArPSB0b2tlbjtcbiAgICAgIHBhcnNlci5pbk51bWJlciA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4udG9VcHBlckNhc2UoKSA9PT0gJ0UnKSB7XG4gICAgICBwYXJzZXIubnVtYmVyICs9IHRva2VuO1xuICAgICAgcGFyc2VyLmhhc0V4cG9uZW50ID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc1BhdGhMZXR0ZXIudGVzdCh0b2tlbikpIHtcbiAgICAgIGlmIChwYXJzZXIuaW5OdW1iZXIpIHtcbiAgICAgICAgZmluYWxpemVOdW1iZXIocGFyc2VyLCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKCFzZWdtZW50Q29tcGxldGUocGFyc2VyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BhcnNlciBFcnJvcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmluYWxpemVTZWdtZW50KHBhcnNlcik7XG4gICAgICB9XG5cbiAgICAgIC0taW5kZXg7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlci5pbk51bWJlcikge1xuICAgIGZpbmFsaXplTnVtYmVyKHBhcnNlciwgZmFsc2UpO1xuICB9XG5cbiAgaWYgKHBhcnNlci5pblNlZ21lbnQgJiYgc2VnbWVudENvbXBsZXRlKHBhcnNlcikpIHtcbiAgICBmaW5hbGl6ZVNlZ21lbnQocGFyc2VyKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZXIuc2VnbWVudHM7XG59XG5cbmZ1bmN0aW9uIGFycmF5VG9TdHJpbmcoYSkge1xuICBsZXQgcyA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwLCBpbCA9IGEubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgIHMgKz0gYVtpXVswXTtcblxuICAgIGlmIChhW2ldWzFdICE9IG51bGwpIHtcbiAgICAgIHMgKz0gYVtpXVsxXTtcblxuICAgICAgaWYgKGFbaV1bMl0gIT0gbnVsbCkge1xuICAgICAgICBzICs9ICcgJztcbiAgICAgICAgcyArPSBhW2ldWzJdO1xuXG4gICAgICAgIGlmIChhW2ldWzNdICE9IG51bGwpIHtcbiAgICAgICAgICBzICs9ICcgJztcbiAgICAgICAgICBzICs9IGFbaV1bM107XG4gICAgICAgICAgcyArPSAnICc7XG4gICAgICAgICAgcyArPSBhW2ldWzRdO1xuXG4gICAgICAgICAgaWYgKGFbaV1bNV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcyArPSAnICc7XG4gICAgICAgICAgICBzICs9IGFbaV1bNV07XG4gICAgICAgICAgICBzICs9ICcgJztcbiAgICAgICAgICAgIHMgKz0gYVtpXVs2XTtcblxuICAgICAgICAgICAgaWYgKGFbaV1bN10gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBzICs9ICcgJztcbiAgICAgICAgICAgICAgcyArPSBhW2ldWzddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzICsgJyAnO1xufVxuXG5jbGFzcyBQYXRoQXJyYXkgZXh0ZW5kcyBTVkdBcnJheSB7XG4gIC8vIEdldCBib3VuZGluZyBib3ggb2YgcGF0aFxuICBiYm94KCkge1xuICAgIHBhcnNlcigpLnBhdGguc2V0QXR0cmlidXRlKCdkJywgdGhpcy50b1N0cmluZygpKTtcbiAgICByZXR1cm4gbmV3IEJveChwYXJzZXIubm9kZXMucGF0aC5nZXRCQm94KCkpO1xuICB9IC8vIE1vdmUgcGF0aCBzdHJpbmdcblxuXG4gIG1vdmUoeCwgeSkge1xuICAgIC8vIGdldCBib3VuZGluZyBib3ggb2YgY3VycmVudCBzaXR1YXRpb25cbiAgICBjb25zdCBib3ggPSB0aGlzLmJib3goKTsgLy8gZ2V0IHJlbGF0aXZlIG9mZnNldFxuXG4gICAgeCAtPSBib3gueDtcbiAgICB5IC09IGJveC55O1xuXG4gICAgaWYgKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcbiAgICAgIC8vIG1vdmUgZXZlcnkgcG9pbnRcbiAgICAgIGZvciAobGV0IGwsIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGwgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChsID09PSAnTScgfHwgbCA9PT0gJ0wnIHx8IGwgPT09ICdUJykge1xuICAgICAgICAgIHRoaXNbaV1bMV0gKz0geDtcbiAgICAgICAgICB0aGlzW2ldWzJdICs9IHk7XG4gICAgICAgIH0gZWxzZSBpZiAobCA9PT0gJ0gnKSB7XG4gICAgICAgICAgdGhpc1tpXVsxXSArPSB4O1xuICAgICAgICB9IGVsc2UgaWYgKGwgPT09ICdWJykge1xuICAgICAgICAgIHRoaXNbaV1bMV0gKz0geTtcbiAgICAgICAgfSBlbHNlIGlmIChsID09PSAnQycgfHwgbCA9PT0gJ1MnIHx8IGwgPT09ICdRJykge1xuICAgICAgICAgIHRoaXNbaV1bMV0gKz0geDtcbiAgICAgICAgICB0aGlzW2ldWzJdICs9IHk7XG4gICAgICAgICAgdGhpc1tpXVszXSArPSB4O1xuICAgICAgICAgIHRoaXNbaV1bNF0gKz0geTtcblxuICAgICAgICAgIGlmIChsID09PSAnQycpIHtcbiAgICAgICAgICAgIHRoaXNbaV1bNV0gKz0geDtcbiAgICAgICAgICAgIHRoaXNbaV1bNl0gKz0geTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobCA9PT0gJ0EnKSB7XG4gICAgICAgICAgdGhpc1tpXVs2XSArPSB4O1xuICAgICAgICAgIHRoaXNbaV1bN10gKz0geTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIEFic29sdXRpemUgYW5kIHBhcnNlIHBhdGggdG8gYXJyYXlcblxuXG4gIHBhcnNlKGQgPSAnTTAgMCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkKSkge1xuICAgICAgZCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGQpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhQYXJzZXIoZCk7XG4gIH0gLy8gUmVzaXplIHBhdGggc3RyaW5nXG5cblxuICBzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAvLyBnZXQgYm91bmRpbmcgYm94IG9mIGN1cnJlbnQgc2l0dWF0aW9uXG4gICAgY29uc3QgYm94ID0gdGhpcy5iYm94KCk7XG4gICAgbGV0IGksIGw7IC8vIElmIHRoZSBib3ggd2lkdGggb3IgaGVpZ2h0IGlzIDAgdGhlbiB3ZSBpZ25vcmVcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIHJlc3BlY3RpdmUgYXhpc1xuXG4gICAgYm94LndpZHRoID0gYm94LndpZHRoID09PSAwID8gMSA6IGJveC53aWR0aDtcbiAgICBib3guaGVpZ2h0ID0gYm94LmhlaWdodCA9PT0gMCA/IDEgOiBib3guaGVpZ2h0OyAvLyByZWNhbGN1bGF0ZSBwb3NpdGlvbiBvZiBhbGwgcG9pbnRzIGFjY29yZGluZyB0byBuZXcgc2l6ZVxuXG4gICAgZm9yIChpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChsID09PSAnTScgfHwgbCA9PT0gJ0wnIHx8IGwgPT09ICdUJykge1xuICAgICAgICB0aGlzW2ldWzFdID0gKHRoaXNbaV1bMV0gLSBib3gueCkgKiB3aWR0aCAvIGJveC53aWR0aCArIGJveC54O1xuICAgICAgICB0aGlzW2ldWzJdID0gKHRoaXNbaV1bMl0gLSBib3gueSkgKiBoZWlnaHQgLyBib3guaGVpZ2h0ICsgYm94Lnk7XG4gICAgICB9IGVsc2UgaWYgKGwgPT09ICdIJykge1xuICAgICAgICB0aGlzW2ldWzFdID0gKHRoaXNbaV1bMV0gLSBib3gueCkgKiB3aWR0aCAvIGJveC53aWR0aCArIGJveC54O1xuICAgICAgfSBlbHNlIGlmIChsID09PSAnVicpIHtcbiAgICAgICAgdGhpc1tpXVsxXSA9ICh0aGlzW2ldWzFdIC0gYm94LnkpICogaGVpZ2h0IC8gYm94LmhlaWdodCArIGJveC55O1xuICAgICAgfSBlbHNlIGlmIChsID09PSAnQycgfHwgbCA9PT0gJ1MnIHx8IGwgPT09ICdRJykge1xuICAgICAgICB0aGlzW2ldWzFdID0gKHRoaXNbaV1bMV0gLSBib3gueCkgKiB3aWR0aCAvIGJveC53aWR0aCArIGJveC54O1xuICAgICAgICB0aGlzW2ldWzJdID0gKHRoaXNbaV1bMl0gLSBib3gueSkgKiBoZWlnaHQgLyBib3guaGVpZ2h0ICsgYm94Lnk7XG4gICAgICAgIHRoaXNbaV1bM10gPSAodGhpc1tpXVszXSAtIGJveC54KSAqIHdpZHRoIC8gYm94LndpZHRoICsgYm94Lng7XG4gICAgICAgIHRoaXNbaV1bNF0gPSAodGhpc1tpXVs0XSAtIGJveC55KSAqIGhlaWdodCAvIGJveC5oZWlnaHQgKyBib3gueTtcblxuICAgICAgICBpZiAobCA9PT0gJ0MnKSB7XG4gICAgICAgICAgdGhpc1tpXVs1XSA9ICh0aGlzW2ldWzVdIC0gYm94LngpICogd2lkdGggLyBib3gud2lkdGggKyBib3gueDtcbiAgICAgICAgICB0aGlzW2ldWzZdID0gKHRoaXNbaV1bNl0gLSBib3gueSkgKiBoZWlnaHQgLyBib3guaGVpZ2h0ICsgYm94Lnk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobCA9PT0gJ0EnKSB7XG4gICAgICAgIC8vIHJlc2l6ZSByYWRpaVxuICAgICAgICB0aGlzW2ldWzFdID0gdGhpc1tpXVsxXSAqIHdpZHRoIC8gYm94LndpZHRoO1xuICAgICAgICB0aGlzW2ldWzJdID0gdGhpc1tpXVsyXSAqIGhlaWdodCAvIGJveC5oZWlnaHQ7IC8vIG1vdmUgcG9zaXRpb24gdmFsdWVzXG5cbiAgICAgICAgdGhpc1tpXVs2XSA9ICh0aGlzW2ldWzZdIC0gYm94LngpICogd2lkdGggLyBib3gud2lkdGggKyBib3gueDtcbiAgICAgICAgdGhpc1tpXVs3XSA9ICh0aGlzW2ldWzddIC0gYm94LnkpICogaGVpZ2h0IC8gYm94LmhlaWdodCArIGJveC55O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIENvbnZlcnQgYXJyYXkgdG8gc3RyaW5nXG5cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYXJyYXlUb1N0cmluZyh0aGlzKTtcbiAgfVxuXG59XG5cbmNvbnN0IGdldENsYXNzRm9yVHlwZSA9IHZhbHVlID0+IHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gU1ZHTnVtYmVyO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKENvbG9yLmlzQ29sb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gQ29sb3I7XG4gICAgfSBlbHNlIGlmIChkZWxpbWl0ZXIudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBpc1BhdGhMZXR0ZXIudGVzdCh2YWx1ZSkgPyBQYXRoQXJyYXkgOiBTVkdBcnJheTtcbiAgICB9IGVsc2UgaWYgKG51bWJlckFuZFVuaXQudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBTVkdOdW1iZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOb25Nb3JwaGFibGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1vcnBoYWJsZVR5cGVzLmluZGV4T2YodmFsdWUuY29uc3RydWN0b3IpID4gLTEpIHtcbiAgICByZXR1cm4gdmFsdWUuY29uc3RydWN0b3I7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gU1ZHQXJyYXk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0QmFnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBOb25Nb3JwaGFibGU7XG4gIH1cbn07XG5cbmNsYXNzIE1vcnBoYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0ZXBwZXIpIHtcbiAgICB0aGlzLl9zdGVwcGVyID0gc3RlcHBlciB8fCBuZXcgRWFzZSgnLScpO1xuICAgIHRoaXMuX2Zyb20gPSBudWxsO1xuICAgIHRoaXMuX3RvID0gbnVsbDtcbiAgICB0aGlzLl90eXBlID0gbnVsbDtcbiAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLl9tb3JwaE9iaiA9IG51bGw7XG4gIH1cblxuICBhdChwb3MpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9ycGhPYmoubW9ycGgodGhpcy5fZnJvbSwgdGhpcy5fdG8sIHBvcywgdGhpcy5fc3RlcHBlciwgdGhpcy5fY29udGV4dCk7XG4gIH1cblxuICBkb25lKCkge1xuICAgIGNvbnN0IGNvbXBsZXRlID0gdGhpcy5fY29udGV4dC5tYXAodGhpcy5fc3RlcHBlci5kb25lKS5yZWR1Y2UoZnVuY3Rpb24gKGxhc3QsIGN1cnIpIHtcbiAgICAgIHJldHVybiBsYXN0ICYmIGN1cnI7XG4gICAgfSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY29tcGxldGU7XG4gIH1cblxuICBmcm9tKHZhbCkge1xuICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Zyb207XG4gICAgfVxuXG4gICAgdGhpcy5fZnJvbSA9IHRoaXMuX3NldCh2YWwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RlcHBlcihzdGVwcGVyKSB7XG4gICAgaWYgKHN0ZXBwZXIgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX3N0ZXBwZXI7XG4gICAgdGhpcy5fc3RlcHBlciA9IHN0ZXBwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0byh2YWwpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLl90bztcbiAgICB9XG5cbiAgICB0aGlzLl90byA9IHRoaXMuX3NldCh2YWwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdHlwZSh0eXBlKSB7XG4gICAgLy8gZ2V0dGVyXG4gICAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfSAvLyBzZXR0ZXJcblxuXG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfc2V0KHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLl90eXBlKSB7XG4gICAgICB0aGlzLnR5cGUoZ2V0Q2xhc3NGb3JUeXBlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IG5ldyB0aGlzLl90eXBlKHZhbHVlKTtcblxuICAgIGlmICh0aGlzLl90eXBlID09PSBDb2xvcikge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fdG8gPyByZXN1bHRbdGhpcy5fdG9bNF1dKCkgOiB0aGlzLl9mcm9tID8gcmVzdWx0W3RoaXMuX2Zyb21bNF1dKCkgOiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3R5cGUgPT09IE9iamVjdEJhZykge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fdG8gPyByZXN1bHQuYWxpZ24odGhpcy5fdG8pIDogdGhpcy5fZnJvbSA/IHJlc3VsdC5hbGlnbih0aGlzLl9mcm9tKSA6IHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXN1bHQgPSByZXN1bHQudG9Db25zdW1hYmxlKCk7XG4gICAgdGhpcy5fbW9ycGhPYmogPSB0aGlzLl9tb3JwaE9iaiB8fCBuZXcgdGhpcy5fdHlwZSgpO1xuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jb250ZXh0IHx8IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJlc3VsdC5sZW5ndGgpKS5tYXAoT2JqZWN0KS5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgIG8uZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbn1cbmNsYXNzIE5vbk1vcnBoYWJsZSB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gIH1cblxuICBpbml0KHZhbCkge1xuICAgIHZhbCA9IEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbFswXSA6IHZhbDtcbiAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gW3RoaXMudmFsdWVdO1xuICB9XG5cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG59XG5jbGFzcyBUcmFuc2Zvcm1CYWcge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICB9XG5cbiAgaW5pdChvYmopIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIHNjYWxlWDogb2JqWzBdLFxuICAgICAgICBzY2FsZVk6IG9ialsxXSxcbiAgICAgICAgc2hlYXI6IG9ialsyXSxcbiAgICAgICAgcm90YXRlOiBvYmpbM10sXG4gICAgICAgIHRyYW5zbGF0ZVg6IG9ials0XSxcbiAgICAgICAgdHJhbnNsYXRlWTogb2JqWzVdLFxuICAgICAgICBvcmlnaW5YOiBvYmpbNl0sXG4gICAgICAgIG9yaWdpblk6IG9ials3XVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIFRyYW5zZm9ybUJhZy5kZWZhdWx0cywgb2JqKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgY29uc3QgdiA9IHRoaXM7XG4gICAgcmV0dXJuIFt2LnNjYWxlWCwgdi5zY2FsZVksIHYuc2hlYXIsIHYucm90YXRlLCB2LnRyYW5zbGF0ZVgsIHYudHJhbnNsYXRlWSwgdi5vcmlnaW5YLCB2Lm9yaWdpblldO1xuICB9XG5cbn1cblRyYW5zZm9ybUJhZy5kZWZhdWx0cyA9IHtcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDEsXG4gIHNoZWFyOiAwLFxuICByb3RhdGU6IDAsXG4gIHRyYW5zbGF0ZVg6IDAsXG4gIHRyYW5zbGF0ZVk6IDAsXG4gIG9yaWdpblg6IDAsXG4gIG9yaWdpblk6IDBcbn07XG5cbmNvbnN0IHNvcnRCeUtleSA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBhWzBdIDwgYlswXSA/IC0xIDogYVswXSA+IGJbMF0gPyAxIDogMDtcbn07XG5cbmNsYXNzIE9iamVjdEJhZyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gIH1cblxuICBhbGlnbihvdGhlcikge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGlsID0gdmFsdWVzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgIC8vIElmIHRoZSB0eXBlIGlzIHRoZSBzYW1lIHdlIG9ubHkgbmVlZCB0byBjaGVjayBpZiB0aGUgY29sb3IgaXMgaW4gdGhlIGNvcnJlY3QgZm9ybWF0XG4gICAgICBpZiAodmFsdWVzW2kgKyAxXSA9PT0gb3RoZXJbaSArIDFdKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbaSArIDFdID09PSBDb2xvciAmJiBvdGhlcltpICsgN10gIT09IHZhbHVlc1tpICsgN10pIHtcbiAgICAgICAgICBjb25zdCBzcGFjZSA9IG90aGVyW2kgKyA3XTtcbiAgICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcih0aGlzLnZhbHVlcy5zcGxpY2UoaSArIDMsIDUpKVtzcGFjZV0oKS50b0FycmF5KCk7XG4gICAgICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGkgKyAzLCAwLCAuLi5jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IHZhbHVlc1tpICsgMl0gKyAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvdGhlcltpICsgMV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IC8vIFRoZSB0eXBlcyBkaWZmZXIsIHNvIHdlIG92ZXJ3cml0ZSB0aGUgbmV3IHR5cGUgd2l0aCB0aGUgb2xkIG9uZVxuICAgICAgLy8gQW5kIGluaXRpYWxpemUgaXQgd2l0aCB0aGUgdHlwZXMgZGVmYXVsdCAoZS5nLiBibGFjayBmb3IgY29sb3Igb3IgMCBmb3IgbnVtYmVyKVxuXG5cbiAgICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSBuZXcgb3RoZXJbaSArIDFdKCkudG9BcnJheSgpOyAvLyBUaGFuIHdlIGZpeCB0aGUgdmFsdWVzIGFycmF5XG5cbiAgICAgIGNvbnN0IHRvRGVsZXRlID0gdmFsdWVzW2kgKyAyXSArIDM7XG4gICAgICB2YWx1ZXMuc3BsaWNlKGksIHRvRGVsZXRlLCBvdGhlcltpXSwgb3RoZXJbaSArIDFdLCBvdGhlcltpICsgMl0sIC4uLmRlZmF1bHRPYmplY3QpO1xuICAgICAgaSArPSB2YWx1ZXNbaSArIDJdICsgMjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGluaXQob2JqT3JBcnIpIHtcbiAgICB0aGlzLnZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqT3JBcnIpKSB7XG4gICAgICB0aGlzLnZhbHVlcyA9IG9iak9yQXJyLnNsaWNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb2JqT3JBcnIgPSBvYmpPckFyciB8fCB7fTtcbiAgICBjb25zdCBlbnRyaWVzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gb2JqT3JBcnIpIHtcbiAgICAgIGNvbnN0IFR5cGUgPSBnZXRDbGFzc0ZvclR5cGUob2JqT3JBcnJbaV0pO1xuICAgICAgY29uc3QgdmFsID0gbmV3IFR5cGUob2JqT3JBcnJbaV0pLnRvQXJyYXkoKTtcbiAgICAgIGVudHJpZXMucHVzaChbaSwgVHlwZSwgdmFsLmxlbmd0aCwgLi4udmFsXSk7XG4gICAgfVxuXG4gICAgZW50cmllcy5zb3J0KHNvcnRCeUtleSk7XG4gICAgdGhpcy52YWx1ZXMgPSBlbnRyaWVzLnJlZHVjZSgobGFzdCwgY3VycikgPT4gbGFzdC5jb25jYXQoY3VyciksIFtdKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgdmFsdWVPZigpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBjb25zdCBhcnIgPSB0aGlzLnZhbHVlczsgLy8gZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMikge1xuXG4gICAgd2hpbGUgKGFyci5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGtleSA9IGFyci5zaGlmdCgpO1xuICAgICAgY29uc3QgVHlwZSA9IGFyci5zaGlmdCgpO1xuICAgICAgY29uc3QgbnVtID0gYXJyLnNoaWZ0KCk7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBhcnIuc3BsaWNlKDAsIG51bSk7XG4gICAgICBvYmpba2V5XSA9IG5ldyBUeXBlKHZhbHVlcyk7IC8vIC52YWx1ZU9mKClcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbn1cbmNvbnN0IG1vcnBoYWJsZVR5cGVzID0gW05vbk1vcnBoYWJsZSwgVHJhbnNmb3JtQmFnLCBPYmplY3RCYWddO1xuZnVuY3Rpb24gcmVnaXN0ZXJNb3JwaGFibGVUeXBlKHR5cGUgPSBbXSkge1xuICBtb3JwaGFibGVUeXBlcy5wdXNoKC4uLltdLmNvbmNhdCh0eXBlKSk7XG59XG5mdW5jdGlvbiBtYWtlTW9ycGhhYmxlKCkge1xuICBleHRlbmQobW9ycGhhYmxlVHlwZXMsIHtcbiAgICB0byh2YWwpIHtcbiAgICAgIHJldHVybiBuZXcgTW9ycGhhYmxlKCkudHlwZSh0aGlzLmNvbnN0cnVjdG9yKS5mcm9tKHRoaXMudG9BcnJheSgpKSAvLyB0aGlzLnZhbHVlT2YoKSlcbiAgICAgIC50byh2YWwpO1xuICAgIH0sXG5cbiAgICBmcm9tQXJyYXkoYXJyKSB7XG4gICAgICB0aGlzLmluaXQoYXJyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICB0b0NvbnN1bWFibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50b0FycmF5KCk7XG4gICAgfSxcblxuICAgIG1vcnBoKGZyb20sIHRvLCBwb3MsIHN0ZXBwZXIsIGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IG1hcHBlciA9IGZ1bmN0aW9uIChpLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gc3RlcHBlci5zdGVwKGksIHRvW2luZGV4XSwgcG9zLCBjb250ZXh0W2luZGV4XSwgY29udGV4dCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5mcm9tQXJyYXkoZnJvbS5tYXAobWFwcGVyKSk7XG4gICAgfVxuXG4gIH0pO1xufVxuXG5jbGFzcyBQYXRoIGV4dGVuZHMgU2hhcGUge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdwYXRoJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBHZXQgYXJyYXlcblxuXG4gIGFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLl9hcnJheSB8fCAodGhpcy5fYXJyYXkgPSBuZXcgUGF0aEFycmF5KHRoaXMuYXR0cignZCcpKSk7XG4gIH0gLy8gQ2xlYXIgYXJyYXkgY2FjaGVcblxuXG4gIGNsZWFyKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9hcnJheTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcblxuXG4gIGhlaWdodChoZWlnaHQpIHtcbiAgICByZXR1cm4gaGVpZ2h0ID09IG51bGwgPyB0aGlzLmJib3goKS5oZWlnaHQgOiB0aGlzLnNpemUodGhpcy5iYm94KCkud2lkdGgsIGhlaWdodCk7XG4gIH0gLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXJcblxuXG4gIG1vdmUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2QnLCB0aGlzLmFycmF5KCkubW92ZSh4LCB5KSk7XG4gIH0gLy8gUGxvdCBuZXcgcGF0aFxuXG5cbiAgcGxvdChkKSB7XG4gICAgcmV0dXJuIGQgPT0gbnVsbCA/IHRoaXMuYXJyYXkoKSA6IHRoaXMuY2xlYXIoKS5hdHRyKCdkJywgdHlwZW9mIGQgPT09ICdzdHJpbmcnID8gZCA6IHRoaXMuX2FycmF5ID0gbmV3IFBhdGhBcnJheShkKSk7XG4gIH0gLy8gU2V0IGVsZW1lbnQgc2l6ZSB0byBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0XG5cblxuICBzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdkJywgdGhpcy5hcnJheSgpLnNpemUocC53aWR0aCwgcC5oZWlnaHQpKTtcbiAgfSAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxuXG5cbiAgd2lkdGgod2lkdGgpIHtcbiAgICByZXR1cm4gd2lkdGggPT0gbnVsbCA/IHRoaXMuYmJveCgpLndpZHRoIDogdGhpcy5zaXplKHdpZHRoLCB0aGlzLmJib3goKS5oZWlnaHQpO1xuICB9IC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyIG92ZXIgeC1heGlzXG5cblxuICB4KHgpIHtcbiAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5iYm94KCkueCA6IHRoaXMubW92ZSh4LCB0aGlzLmJib3goKS55KTtcbiAgfSAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lciBvdmVyIHktYXhpc1xuXG5cbiAgeSh5KSB7XG4gICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuYmJveCgpLnkgOiB0aGlzLm1vdmUodGhpcy5iYm94KCkueCwgeSk7XG4gIH1cblxufSAvLyBEZWZpbmUgbW9ycGhhYmxlIGFycmF5XG5cblBhdGgucHJvdG90eXBlLk1vcnBoQXJyYXkgPSBQYXRoQXJyYXk7IC8vIEFkZCBwYXJlbnQgbWV0aG9kXG5cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBhIHdyYXBwZWQgcGF0aCBlbGVtZW50XG4gICAgcGF0aDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKGQpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBwbG90IGlzIGNhbGxlZCBhcyBhIHNldHRlclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBQYXRoKCkpLnBsb3QoZCB8fCBuZXcgUGF0aEFycmF5KCkpO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoUGF0aCwgJ1BhdGgnKTtcblxuZnVuY3Rpb24gYXJyYXkoKSB7XG4gIHJldHVybiB0aGlzLl9hcnJheSB8fCAodGhpcy5fYXJyYXkgPSBuZXcgUG9pbnRBcnJheSh0aGlzLmF0dHIoJ3BvaW50cycpKSk7XG59IC8vIENsZWFyIGFycmF5IGNhY2hlXG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBkZWxldGUgdGhpcy5fYXJyYXk7XG4gIHJldHVybiB0aGlzO1xufSAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lclxuXG5mdW5jdGlvbiBtb3ZlJDIoeCwgeSkge1xuICByZXR1cm4gdGhpcy5hdHRyKCdwb2ludHMnLCB0aGlzLmFycmF5KCkubW92ZSh4LCB5KSk7XG59IC8vIFBsb3QgbmV3IHBhdGhcblxuZnVuY3Rpb24gcGxvdChwKSB7XG4gIHJldHVybiBwID09IG51bGwgPyB0aGlzLmFycmF5KCkgOiB0aGlzLmNsZWFyKCkuYXR0cigncG9pbnRzJywgdHlwZW9mIHAgPT09ICdzdHJpbmcnID8gcCA6IHRoaXMuX2FycmF5ID0gbmV3IFBvaW50QXJyYXkocCkpO1xufSAvLyBTZXQgZWxlbWVudCBzaXplIHRvIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHRcblxuZnVuY3Rpb24gc2l6ZSQxKHdpZHRoLCBoZWlnaHQpIHtcbiAgY29uc3QgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodCk7XG4gIHJldHVybiB0aGlzLmF0dHIoJ3BvaW50cycsIHRoaXMuYXJyYXkoKS5zaXplKHAud2lkdGgsIHAuaGVpZ2h0KSk7XG59XG5cbnZhciBwb2x5ID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGFycmF5OiBhcnJheSxcbiAgY2xlYXI6IGNsZWFyLFxuICBtb3ZlOiBtb3ZlJDIsXG4gIHBsb3Q6IHBsb3QsXG4gIHNpemU6IHNpemUkMVxufTtcblxuY2xhc3MgUG9seWdvbiBleHRlbmRzIFNoYXBlIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygncG9seWdvbicsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGEgd3JhcHBlZCBwb2x5Z29uIGVsZW1lbnRcbiAgICBwb2x5Z29uOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAocCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHBsb3QgaXMgY2FsbGVkIGFzIGEgc2V0dGVyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFBvbHlnb24oKSkucGxvdChwIHx8IG5ldyBQb2ludEFycmF5KCkpO1xuICAgIH0pXG4gIH1cbn0pO1xuZXh0ZW5kKFBvbHlnb24sIHBvaW50ZWQpO1xuZXh0ZW5kKFBvbHlnb24sIHBvbHkpO1xucmVnaXN0ZXIoUG9seWdvbiwgJ1BvbHlnb24nKTtcblxuY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBTaGFwZSB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3BvbHlsaW5lJywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVkIHBvbHlnb24gZWxlbWVudFxuICAgIHBvbHlsaW5lOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAocCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHBsb3QgaXMgY2FsbGVkIGFzIGEgc2V0dGVyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFBvbHlsaW5lKCkpLnBsb3QocCB8fCBuZXcgUG9pbnRBcnJheSgpKTtcbiAgICB9KVxuICB9XG59KTtcbmV4dGVuZChQb2x5bGluZSwgcG9pbnRlZCk7XG5leHRlbmQoUG9seWxpbmUsIHBvbHkpO1xucmVnaXN0ZXIoUG9seWxpbmUsICdQb2x5bGluZScpO1xuXG5jbGFzcyBSZWN0IGV4dGVuZHMgU2hhcGUge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdyZWN0Jywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG59XG5leHRlbmQoUmVjdCwge1xuICByeCxcbiAgcnlcbn0pO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGEgcmVjdCBlbGVtZW50XG4gICAgcmVjdDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgUmVjdCgpKS5zaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoUmVjdCwgJ1JlY3QnKTtcblxuY2xhc3MgUXVldWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9maXJzdCA9IG51bGw7XG4gICAgdGhpcy5fbGFzdCA9IG51bGw7XG4gIH0gLy8gU2hvd3MgdXMgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3RcblxuXG4gIGZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLl9maXJzdCAmJiB0aGlzLl9maXJzdC52YWx1ZTtcbiAgfSAvLyBTaG93cyB1cyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0XG5cblxuICBsYXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXN0ICYmIHRoaXMuX2xhc3QudmFsdWU7XG4gIH1cblxuICBwdXNoKHZhbHVlKSB7XG4gICAgLy8gQW4gaXRlbSBzdG9yZXMgYW4gaWQgYW5kIHRoZSBwcm92aWRlZCB2YWx1ZVxuICAgIGNvbnN0IGl0ZW0gPSB0eXBlb2YgdmFsdWUubmV4dCAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG5leHQ6IG51bGwsXG4gICAgICBwcmV2OiBudWxsXG4gICAgfTsgLy8gRGVhbCB3aXRoIHRoZSBxdWV1ZSBiZWluZyBlbXB0eSBvciBwb3B1bGF0ZWRcblxuICAgIGlmICh0aGlzLl9sYXN0KSB7XG4gICAgICBpdGVtLnByZXYgPSB0aGlzLl9sYXN0O1xuICAgICAgdGhpcy5fbGFzdC5uZXh0ID0gaXRlbTtcbiAgICAgIHRoaXMuX2xhc3QgPSBpdGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXN0ID0gaXRlbTtcbiAgICAgIHRoaXMuX2ZpcnN0ID0gaXRlbTtcbiAgICB9IC8vIFJldHVybiB0aGUgY3VycmVudCBpdGVtXG5cblxuICAgIHJldHVybiBpdGVtO1xuICB9IC8vIFJlbW92ZXMgdGhlIGl0ZW0gdGhhdCB3YXMgcmV0dXJuZWQgZnJvbSB0aGUgcHVzaFxuXG5cbiAgcmVtb3ZlKGl0ZW0pIHtcbiAgICAvLyBSZWxpbmsgdGhlIHByZXZpb3VzIGl0ZW1cbiAgICBpZiAoaXRlbS5wcmV2KSBpdGVtLnByZXYubmV4dCA9IGl0ZW0ubmV4dDtcbiAgICBpZiAoaXRlbS5uZXh0KSBpdGVtLm5leHQucHJldiA9IGl0ZW0ucHJldjtcbiAgICBpZiAoaXRlbSA9PT0gdGhpcy5fbGFzdCkgdGhpcy5fbGFzdCA9IGl0ZW0ucHJldjtcbiAgICBpZiAoaXRlbSA9PT0gdGhpcy5fZmlyc3QpIHRoaXMuX2ZpcnN0ID0gaXRlbS5uZXh0OyAvLyBJbnZhbGlkYXRlIGl0ZW1cblxuICAgIGl0ZW0ucHJldiA9IG51bGw7XG4gICAgaXRlbS5uZXh0ID0gbnVsbDtcbiAgfVxuXG4gIHNoaWZ0KCkge1xuICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYSB2YWx1ZVxuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuX2ZpcnN0O1xuICAgIGlmICghcmVtb3ZlKSByZXR1cm4gbnVsbDsgLy8gSWYgd2UgZG8sIHJlbW92ZSBpdCBhbmQgcmVsaW5rIHRoaW5nc1xuXG4gICAgdGhpcy5fZmlyc3QgPSByZW1vdmUubmV4dDtcbiAgICBpZiAodGhpcy5fZmlyc3QpIHRoaXMuX2ZpcnN0LnByZXYgPSBudWxsO1xuICAgIHRoaXMuX2xhc3QgPSB0aGlzLl9maXJzdCA/IHRoaXMuX2xhc3QgOiBudWxsO1xuICAgIHJldHVybiByZW1vdmUudmFsdWU7XG4gIH1cblxufVxuXG5jb25zdCBBbmltYXRvciA9IHtcbiAgbmV4dERyYXc6IG51bGwsXG4gIGZyYW1lczogbmV3IFF1ZXVlKCksXG4gIHRpbWVvdXRzOiBuZXcgUXVldWUoKSxcbiAgaW1tZWRpYXRlczogbmV3IFF1ZXVlKCksXG4gIHRpbWVyOiAoKSA9PiBnbG9iYWxzLndpbmRvdy5wZXJmb3JtYW5jZSB8fCBnbG9iYWxzLndpbmRvdy5EYXRlLFxuICB0cmFuc2Zvcm1zOiBbXSxcblxuICBmcmFtZShmbikge1xuICAgIC8vIFN0b3JlIHRoZSBub2RlXG4gICAgY29uc3Qgbm9kZSA9IEFuaW1hdG9yLmZyYW1lcy5wdXNoKHtcbiAgICAgIHJ1bjogZm5cbiAgICB9KTsgLy8gUmVxdWVzdCBhbiBhbmltYXRpb24gZnJhbWUgaWYgd2UgZG9uJ3QgaGF2ZSBvbmVcblxuICAgIGlmIChBbmltYXRvci5uZXh0RHJhdyA9PT0gbnVsbCkge1xuICAgICAgQW5pbWF0b3IubmV4dERyYXcgPSBnbG9iYWxzLndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoQW5pbWF0b3IuX2RyYXcpO1xuICAgIH0gLy8gUmV0dXJuIHRoZSBub2RlIHNvIHdlIGNhbiByZW1vdmUgaXQgZWFzaWx5XG5cblxuICAgIHJldHVybiBub2RlO1xuICB9LFxuXG4gIHRpbWVvdXQoZm4sIGRlbGF5KSB7XG4gICAgZGVsYXkgPSBkZWxheSB8fCAwOyAvLyBXb3JrIG91dCB3aGVuIHRoZSBldmVudCBzaG91bGQgZmlyZVxuXG4gICAgY29uc3QgdGltZSA9IEFuaW1hdG9yLnRpbWVyKCkubm93KCkgKyBkZWxheTsgLy8gQWRkIHRoZSB0aW1lb3V0IHRvIHRoZSBlbmQgb2YgdGhlIHF1ZXVlXG5cbiAgICBjb25zdCBub2RlID0gQW5pbWF0b3IudGltZW91dHMucHVzaCh7XG4gICAgICBydW46IGZuLFxuICAgICAgdGltZTogdGltZVxuICAgIH0pOyAvLyBSZXF1ZXN0IGFub3RoZXIgYW5pbWF0aW9uIGZyYW1lIGlmIHdlIG5lZWQgb25lXG5cbiAgICBpZiAoQW5pbWF0b3IubmV4dERyYXcgPT09IG51bGwpIHtcbiAgICAgIEFuaW1hdG9yLm5leHREcmF3ID0gZ2xvYmFscy53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEFuaW1hdG9yLl9kcmF3KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICBpbW1lZGlhdGUoZm4pIHtcbiAgICAvLyBBZGQgdGhlIGltbWVkaWF0ZSBmbiB0byB0aGUgZW5kIG9mIHRoZSBxdWV1ZVxuICAgIGNvbnN0IG5vZGUgPSBBbmltYXRvci5pbW1lZGlhdGVzLnB1c2goZm4pOyAvLyBSZXF1ZXN0IGFub3RoZXIgYW5pbWF0aW9uIGZyYW1lIGlmIHdlIG5lZWQgb25lXG5cbiAgICBpZiAoQW5pbWF0b3IubmV4dERyYXcgPT09IG51bGwpIHtcbiAgICAgIEFuaW1hdG9yLm5leHREcmF3ID0gZ2xvYmFscy53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEFuaW1hdG9yLl9kcmF3KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICBjYW5jZWxGcmFtZShub2RlKSB7XG4gICAgbm9kZSAhPSBudWxsICYmIEFuaW1hdG9yLmZyYW1lcy5yZW1vdmUobm9kZSk7XG4gIH0sXG5cbiAgY2xlYXJUaW1lb3V0KG5vZGUpIHtcbiAgICBub2RlICE9IG51bGwgJiYgQW5pbWF0b3IudGltZW91dHMucmVtb3ZlKG5vZGUpO1xuICB9LFxuXG4gIGNhbmNlbEltbWVkaWF0ZShub2RlKSB7XG4gICAgbm9kZSAhPSBudWxsICYmIEFuaW1hdG9yLmltbWVkaWF0ZXMucmVtb3ZlKG5vZGUpO1xuICB9LFxuXG4gIF9kcmF3KG5vdykge1xuICAgIC8vIFJ1biBhbGwgdGhlIHRpbWVvdXRzIHdlIGNhbiBydW4sIGlmIHRoZXkgYXJlIG5vdCByZWFkeSB5ZXQsIGFkZCB0aGVtXG4gICAgLy8gdG8gdGhlIGVuZCBvZiB0aGUgcXVldWUgaW1tZWRpYXRlbHkhIChiYWQgdGltZW91dHMhISEgW3NhcmNhc21dKVxuICAgIGxldCBuZXh0VGltZW91dCA9IG51bGw7XG4gICAgY29uc3QgbGFzdFRpbWVvdXQgPSBBbmltYXRvci50aW1lb3V0cy5sYXN0KCk7XG5cbiAgICB3aGlsZSAobmV4dFRpbWVvdXQgPSBBbmltYXRvci50aW1lb3V0cy5zaGlmdCgpKSB7XG4gICAgICAvLyBSdW4gdGhlIHRpbWVvdXQgaWYgaXRzIHRpbWUsIG9yIHB1c2ggaXQgdG8gdGhlIGVuZFxuICAgICAgaWYgKG5vdyA+PSBuZXh0VGltZW91dC50aW1lKSB7XG4gICAgICAgIG5leHRUaW1lb3V0LnJ1bigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQW5pbWF0b3IudGltZW91dHMucHVzaChuZXh0VGltZW91dCk7XG4gICAgICB9IC8vIElmIHdlIGhpdCB0aGUgbGFzdCBpdGVtLCB3ZSBzaG91bGQgc3RvcCBzaGlmdGluZyBvdXQgbW9yZSBpdGVtc1xuXG5cbiAgICAgIGlmIChuZXh0VGltZW91dCA9PT0gbGFzdFRpbWVvdXQpIGJyZWFrO1xuICAgIH0gLy8gUnVuIGFsbCBvZiB0aGUgYW5pbWF0aW9uIGZyYW1lc1xuXG5cbiAgICBsZXQgbmV4dEZyYW1lID0gbnVsbDtcbiAgICBjb25zdCBsYXN0RnJhbWUgPSBBbmltYXRvci5mcmFtZXMubGFzdCgpO1xuXG4gICAgd2hpbGUgKG5leHRGcmFtZSAhPT0gbGFzdEZyYW1lICYmIChuZXh0RnJhbWUgPSBBbmltYXRvci5mcmFtZXMuc2hpZnQoKSkpIHtcbiAgICAgIG5leHRGcmFtZS5ydW4obm93KTtcbiAgICB9XG5cbiAgICBsZXQgbmV4dEltbWVkaWF0ZSA9IG51bGw7XG5cbiAgICB3aGlsZSAobmV4dEltbWVkaWF0ZSA9IEFuaW1hdG9yLmltbWVkaWF0ZXMuc2hpZnQoKSkge1xuICAgICAgbmV4dEltbWVkaWF0ZSgpO1xuICAgIH0gLy8gSWYgd2UgaGF2ZSByZW1haW5pbmcgdGltZW91dHMgb3IgZnJhbWVzLCBkcmF3IHVudGlsIHdlIGRvbid0IGFueW1vcmVcblxuXG4gICAgQW5pbWF0b3IubmV4dERyYXcgPSBBbmltYXRvci50aW1lb3V0cy5maXJzdCgpIHx8IEFuaW1hdG9yLmZyYW1lcy5maXJzdCgpID8gZ2xvYmFscy53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEFuaW1hdG9yLl9kcmF3KSA6IG51bGw7XG4gIH1cblxufTtcblxuY29uc3QgbWFrZVNjaGVkdWxlID0gZnVuY3Rpb24gKHJ1bm5lckluZm8pIHtcbiAgY29uc3Qgc3RhcnQgPSBydW5uZXJJbmZvLnN0YXJ0O1xuICBjb25zdCBkdXJhdGlvbiA9IHJ1bm5lckluZm8ucnVubmVyLmR1cmF0aW9uKCk7XG4gIGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBlbmQ6IGVuZCxcbiAgICBydW5uZXI6IHJ1bm5lckluZm8ucnVubmVyXG4gIH07XG59O1xuXG5jb25zdCBkZWZhdWx0U291cmNlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB3ID0gZ2xvYmFscy53aW5kb3c7XG4gIHJldHVybiAody5wZXJmb3JtYW5jZSB8fCB3LkRhdGUpLm5vdygpO1xufTtcblxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIC8vIENvbnN0cnVjdCBhIG5ldyB0aW1lbGluZSBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICBjb25zdHJ1Y3Rvcih0aW1lU291cmNlID0gZGVmYXVsdFNvdXJjZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fdGltZVNvdXJjZSA9IHRpbWVTb3VyY2U7IC8vIFN0b3JlIHRoZSB0aW1pbmcgdmFyaWFibGVzXG5cbiAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xuICAgIHRoaXMuX3NwZWVkID0gMS4wOyAvLyBEZXRlcm1pbmVzIGhvdyBsb25nIGEgcnVubmVyIGlzIGhvbGQgaW4gbWVtb3J5LiBDYW4gYmUgYSBkdCBvciB0cnVlL2ZhbHNlXG5cbiAgICB0aGlzLl9wZXJzaXN0ID0gMDsgLy8gS2VlcCB0cmFjayBvZiB0aGUgcnVubmluZyBhbmltYXRpb25zIGFuZCB0aGVpciBzdGFydGluZyBwYXJhbWV0ZXJzXG5cbiAgICB0aGlzLl9uZXh0RnJhbWUgPSBudWxsO1xuICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgdGhpcy5fcnVubmVycyA9IFtdO1xuICAgIHRoaXMuX3J1bm5lcklkcyA9IFtdO1xuICAgIHRoaXMuX2xhc3RSdW5uZXJJZCA9IC0xO1xuICAgIHRoaXMuX3RpbWUgPSAwO1xuICAgIHRoaXMuX2xhc3RTb3VyY2VUaW1lID0gMDtcbiAgICB0aGlzLl9sYXN0U3RlcFRpbWUgPSAwOyAvLyBNYWtlIHN1cmUgdGhhdCBzdGVwIGlzIGFsd2F5cyBjYWxsZWQgaW4gY2xhc3MgY29udGV4dFxuXG4gICAgdGhpcy5fc3RlcCA9IHRoaXMuX3N0ZXBGbi5iaW5kKHRoaXMsIGZhbHNlKTtcbiAgICB0aGlzLl9zdGVwSW1tZWRpYXRlID0gdGhpcy5fc3RlcEZuLmJpbmQodGhpcywgdHJ1ZSk7XG4gIH1cblxuICBhY3RpdmUoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fbmV4dEZyYW1lO1xuICB9XG5cbiAgZmluaXNoKCkge1xuICAgIC8vIEdvIHRvIGVuZCBhbmQgcGF1c2VcbiAgICB0aGlzLnRpbWUodGhpcy5nZXRFbmRUaW1lT2ZUaW1lbGluZSgpICsgMSk7XG4gICAgcmV0dXJuIHRoaXMucGF1c2UoKTtcbiAgfSAvLyBDYWxjdWxhdGVzIHRoZSBlbmQgb2YgdGhlIHRpbWVsaW5lXG5cblxuICBnZXRFbmRUaW1lKCkge1xuICAgIGNvbnN0IGxhc3RSdW5uZXJJbmZvID0gdGhpcy5nZXRMYXN0UnVubmVySW5mbygpO1xuICAgIGNvbnN0IGxhc3REdXJhdGlvbiA9IGxhc3RSdW5uZXJJbmZvID8gbGFzdFJ1bm5lckluZm8ucnVubmVyLmR1cmF0aW9uKCkgOiAwO1xuICAgIGNvbnN0IGxhc3RTdGFydFRpbWUgPSBsYXN0UnVubmVySW5mbyA/IGxhc3RSdW5uZXJJbmZvLnN0YXJ0IDogdGhpcy5fdGltZTtcbiAgICByZXR1cm4gbGFzdFN0YXJ0VGltZSArIGxhc3REdXJhdGlvbjtcbiAgfVxuXG4gIGdldEVuZFRpbWVPZlRpbWVsaW5lKCkge1xuICAgIGNvbnN0IGVuZFRpbWVzID0gdGhpcy5fcnVubmVycy5tYXAoaSA9PiBpLnN0YXJ0ICsgaS5ydW5uZXIuZHVyYXRpb24oKSk7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgLi4uZW5kVGltZXMpO1xuICB9XG5cbiAgZ2V0TGFzdFJ1bm5lckluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UnVubmVySW5mb0J5SWQodGhpcy5fbGFzdFJ1bm5lcklkKTtcbiAgfVxuXG4gIGdldFJ1bm5lckluZm9CeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bm5lcnNbdGhpcy5fcnVubmVySWRzLmluZGV4T2YoaWQpXSB8fCBudWxsO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5fY29udGludWUoKTtcbiAgfVxuXG4gIHBlcnNpc3QoZHRPckZvcmV2ZXIpIHtcbiAgICBpZiAoZHRPckZvcmV2ZXIgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX3BlcnNpc3Q7XG4gICAgdGhpcy5fcGVyc2lzdCA9IGR0T3JGb3JldmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICAvLyBOb3cgbWFrZSBzdXJlIHdlIGFyZSBub3QgcGF1c2VkIGFuZCBjb250aW51ZSB0aGUgYW5pbWF0aW9uXG4gICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlVGltZSgpLl9jb250aW51ZSgpO1xuICB9XG5cbiAgcmV2ZXJzZSh5ZXMpIHtcbiAgICBjb25zdCBjdXJyZW50U3BlZWQgPSB0aGlzLnNwZWVkKCk7XG4gICAgaWYgKHllcyA9PSBudWxsKSByZXR1cm4gdGhpcy5zcGVlZCgtY3VycmVudFNwZWVkKTtcbiAgICBjb25zdCBwb3NpdGl2ZSA9IE1hdGguYWJzKGN1cnJlbnRTcGVlZCk7XG4gICAgcmV0dXJuIHRoaXMuc3BlZWQoeWVzID8gLXBvc2l0aXZlIDogcG9zaXRpdmUpO1xuICB9IC8vIHNjaGVkdWxlcyBhIHJ1bm5lciBvbiB0aGUgdGltZWxpbmVcblxuXG4gIHNjaGVkdWxlKHJ1bm5lciwgZGVsYXksIHdoZW4pIHtcbiAgICBpZiAocnVubmVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW5uZXJzLm1hcChtYWtlU2NoZWR1bGUpO1xuICAgIH0gLy8gVGhlIHN0YXJ0IHRpbWUgZm9yIHRoZSBuZXh0IGFuaW1hdGlvbiBjYW4gZWl0aGVyIGJlIGdpdmVuIGV4cGxpY2l0bHksXG4gICAgLy8gZGVyaXZlZCBmcm9tIHRoZSBjdXJyZW50IHRpbWVsaW5lIHRpbWUgb3IgaXQgY2FuIGJlIHJlbGF0aXZlIHRvIHRoZVxuICAgIC8vIGxhc3Qgc3RhcnQgdGltZSB0byBjaGFpbiBhbmltYXRpb25zIGRpcmVjdGx5XG5cblxuICAgIGxldCBhYnNvbHV0ZVN0YXJ0VGltZSA9IDA7XG4gICAgY29uc3QgZW5kVGltZSA9IHRoaXMuZ2V0RW5kVGltZSgpO1xuICAgIGRlbGF5ID0gZGVsYXkgfHwgMDsgLy8gV29yayBvdXQgd2hlbiB0byBzdGFydCB0aGUgYW5pbWF0aW9uXG5cbiAgICBpZiAod2hlbiA9PSBudWxsIHx8IHdoZW4gPT09ICdsYXN0JyB8fCB3aGVuID09PSAnYWZ0ZXInKSB7XG4gICAgICAvLyBUYWtlIHRoZSBsYXN0IHRpbWUgYW5kIGluY3JlbWVudFxuICAgICAgYWJzb2x1dGVTdGFydFRpbWUgPSBlbmRUaW1lO1xuICAgIH0gZWxzZSBpZiAod2hlbiA9PT0gJ2Fic29sdXRlJyB8fCB3aGVuID09PSAnc3RhcnQnKSB7XG4gICAgICBhYnNvbHV0ZVN0YXJ0VGltZSA9IGRlbGF5O1xuICAgICAgZGVsYXkgPSAwO1xuICAgIH0gZWxzZSBpZiAod2hlbiA9PT0gJ25vdycpIHtcbiAgICAgIGFic29sdXRlU3RhcnRUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9IGVsc2UgaWYgKHdoZW4gPT09ICdyZWxhdGl2ZScpIHtcbiAgICAgIGNvbnN0IHJ1bm5lckluZm8gPSB0aGlzLmdldFJ1bm5lckluZm9CeUlkKHJ1bm5lci5pZCk7XG5cbiAgICAgIGlmIChydW5uZXJJbmZvKSB7XG4gICAgICAgIGFic29sdXRlU3RhcnRUaW1lID0gcnVubmVySW5mby5zdGFydCArIGRlbGF5O1xuICAgICAgICBkZWxheSA9IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3aGVuID09PSAnd2l0aC1sYXN0Jykge1xuICAgICAgY29uc3QgbGFzdFJ1bm5lckluZm8gPSB0aGlzLmdldExhc3RSdW5uZXJJbmZvKCk7XG4gICAgICBjb25zdCBsYXN0U3RhcnRUaW1lID0gbGFzdFJ1bm5lckluZm8gPyBsYXN0UnVubmVySW5mby5zdGFydCA6IHRoaXMuX3RpbWU7XG4gICAgICBhYnNvbHV0ZVN0YXJ0VGltZSA9IGxhc3RTdGFydFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgdGhlIFwid2hlblwiIHBhcmFtZXRlcicpO1xuICAgIH0gLy8gTWFuYWdlIHJ1bm5lclxuXG5cbiAgICBydW5uZXIudW5zY2hlZHVsZSgpO1xuICAgIHJ1bm5lci50aW1lbGluZSh0aGlzKTtcbiAgICBjb25zdCBwZXJzaXN0ID0gcnVubmVyLnBlcnNpc3QoKTtcbiAgICBjb25zdCBydW5uZXJJbmZvID0ge1xuICAgICAgcGVyc2lzdDogcGVyc2lzdCA9PT0gbnVsbCA/IHRoaXMuX3BlcnNpc3QgOiBwZXJzaXN0LFxuICAgICAgc3RhcnQ6IGFic29sdXRlU3RhcnRUaW1lICsgZGVsYXksXG4gICAgICBydW5uZXJcbiAgICB9O1xuICAgIHRoaXMuX2xhc3RSdW5uZXJJZCA9IHJ1bm5lci5pZDtcblxuICAgIHRoaXMuX3J1bm5lcnMucHVzaChydW5uZXJJbmZvKTtcblxuICAgIHRoaXMuX3J1bm5lcnMuc29ydCgoYSwgYikgPT4gYS5zdGFydCAtIGIuc3RhcnQpO1xuXG4gICAgdGhpcy5fcnVubmVySWRzID0gdGhpcy5fcnVubmVycy5tYXAoaW5mbyA9PiBpbmZvLnJ1bm5lci5pZCk7XG5cbiAgICB0aGlzLnVwZGF0ZVRpbWUoKS5fY29udGludWUoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VlayhkdCkge1xuICAgIHJldHVybiB0aGlzLnRpbWUodGhpcy5fdGltZSArIGR0KTtcbiAgfVxuXG4gIHNvdXJjZShmbikge1xuICAgIGlmIChmbiA9PSBudWxsKSByZXR1cm4gdGhpcy5fdGltZVNvdXJjZTtcbiAgICB0aGlzLl90aW1lU291cmNlID0gZm47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzcGVlZChzcGVlZCkge1xuICAgIGlmIChzcGVlZCA9PSBudWxsKSByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gICAgdGhpcy5fc3BlZWQgPSBzcGVlZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgLy8gR28gdG8gc3RhcnQgYW5kIHBhdXNlXG4gICAgdGhpcy50aW1lKDApO1xuICAgIHJldHVybiB0aGlzLnBhdXNlKCk7XG4gIH1cblxuICB0aW1lKHRpbWUpIHtcbiAgICBpZiAodGltZSA9PSBudWxsKSByZXR1cm4gdGhpcy5fdGltZTtcbiAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICByZXR1cm4gdGhpcy5fY29udGludWUodHJ1ZSk7XG4gIH0gLy8gUmVtb3ZlIHRoZSBydW5uZXIgZnJvbSB0aGlzIHRpbWVsaW5lXG5cblxuICB1bnNjaGVkdWxlKHJ1bm5lcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcnVubmVySWRzLmluZGV4T2YocnVubmVyLmlkKTtcblxuICAgIGlmIChpbmRleCA8IDApIHJldHVybiB0aGlzO1xuXG4gICAgdGhpcy5fcnVubmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgdGhpcy5fcnVubmVySWRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBydW5uZXIudGltZWxpbmUobnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gTWFrZXMgc3VyZSwgdGhhdCBhZnRlciBwYXVzaW5nIHRoZSB0aW1lIGRvZXNuJ3QganVtcFxuXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKCkpIHtcbiAgICAgIHRoaXMuX2xhc3RTb3VyY2VUaW1lID0gdGhpcy5fdGltZVNvdXJjZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIENoZWNrcyBpZiB3ZSBhcmUgcnVubmluZyBhbmQgY29udGludWVzIHRoZSBhbmltYXRpb25cblxuXG4gIF9jb250aW51ZShpbW1lZGlhdGVTdGVwID0gZmFsc2UpIHtcbiAgICBBbmltYXRvci5jYW5jZWxGcmFtZSh0aGlzLl9uZXh0RnJhbWUpO1xuICAgIHRoaXMuX25leHRGcmFtZSA9IG51bGw7XG4gICAgaWYgKGltbWVkaWF0ZVN0ZXApIHJldHVybiB0aGlzLl9zdGVwSW1tZWRpYXRlKCk7XG4gICAgaWYgKHRoaXMuX3BhdXNlZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5fbmV4dEZyYW1lID0gQW5pbWF0b3IuZnJhbWUodGhpcy5fc3RlcCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfc3RlcEZuKGltbWVkaWF0ZVN0ZXAgPSBmYWxzZSkge1xuICAgIC8vIEdldCB0aGUgdGltZSBkZWx0YSBmcm9tIHRoZSBsYXN0IHRpbWUgYW5kIHVwZGF0ZSB0aGUgdGltZVxuICAgIGNvbnN0IHRpbWUgPSB0aGlzLl90aW1lU291cmNlKCk7XG5cbiAgICBsZXQgZHRTb3VyY2UgPSB0aW1lIC0gdGhpcy5fbGFzdFNvdXJjZVRpbWU7XG4gICAgaWYgKGltbWVkaWF0ZVN0ZXApIGR0U291cmNlID0gMDtcbiAgICBjb25zdCBkdFRpbWUgPSB0aGlzLl9zcGVlZCAqIGR0U291cmNlICsgKHRoaXMuX3RpbWUgLSB0aGlzLl9sYXN0U3RlcFRpbWUpO1xuICAgIHRoaXMuX2xhc3RTb3VyY2VUaW1lID0gdGltZTsgLy8gT25seSB1cGRhdGUgdGhlIHRpbWUgaWYgd2UgdXNlIHRoZSB0aW1lU291cmNlLlxuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIGN1cnJlbnQgdGltZVxuXG4gICAgaWYgKCFpbW1lZGlhdGVTdGVwKSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIHRpbWVcbiAgICAgIHRoaXMuX3RpbWUgKz0gZHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRoaXMuX3RpbWUgPCAwID8gMCA6IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgdGhpcy5fbGFzdFN0ZXBUaW1lID0gdGhpcy5fdGltZTtcbiAgICB0aGlzLmZpcmUoJ3RpbWUnLCB0aGlzLl90aW1lKTsgLy8gVGhpcyBpcyBmb3IgdGhlIGNhc2UgdGhhdCB0aGUgdGltZWxpbmUgd2FzIHNlZWtlZCBzbyB0aGF0IHRoZSB0aW1lXG4gICAgLy8gaXMgbm93IGJlZm9yZSB0aGUgc3RhcnRUaW1lIG9mIHRoZSBydW5uZXIuIFRoYXRzIHdoeSB3ZSBuZWVkIHRvIHNldFxuICAgIC8vIHRoZSBydW5uZXIgdG8gcG9zaXRpb24gMFxuICAgIC8vIEZJWE1FOlxuICAgIC8vIEhvd2V2ZXIsIHJlc2V0aW5nIGluIGluc2VydGlvbiBvcmRlciBsZWFkcyB0byBidWdzLiBDb25zaWRlcmluZyB0aGUgY2FzZSxcbiAgICAvLyB3aGVyZSAyIHJ1bm5lcnMgY2hhbmdlIHRoZSBzYW1lIGF0dHJpYnV0ZSBidXQgaW4gZGlmZmVyZW50IHRpbWVzLFxuICAgIC8vIHJlc2V0aW5nIGJvdGggb2YgdGhlbSB3aWxsIGxlYWQgdG8gdGhlIGNhc2Ugd2hlcmUgdGhlIGxhdGVyIGRlZmluZWRcbiAgICAvLyBydW5uZXIgYWx3YXlzIHdpbnMgdGhlIHJlc2V0IGV2ZW4gaWYgdGhlIG90aGVyIHJ1bm5lciBzdGFydGVkIGVhcmxpZXJcbiAgICAvLyBhbmQgdGhlcmVmb3JlIHNob3VsZCB3aW4gdGhlIGF0dHJpYnV0ZSBiYXR0bGVcbiAgICAvLyB0aGlzIGNhbiBiZSBzb2x2ZWQgYnkgcmVzZXRpbmcgdGhlbSBiYWNrd2FyZHNcblxuICAgIGZvciAobGV0IGsgPSB0aGlzLl9ydW5uZXJzLmxlbmd0aDsgay0tOykge1xuICAgICAgLy8gR2V0IGFuZCBydW4gdGhlIGN1cnJlbnQgcnVubmVyIGFuZCBpZ25vcmUgaXQgaWYgaXRzIGluYWN0aXZlXG4gICAgICBjb25zdCBydW5uZXJJbmZvID0gdGhpcy5fcnVubmVyc1trXTtcbiAgICAgIGNvbnN0IHJ1bm5lciA9IHJ1bm5lckluZm8ucnVubmVyOyAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBnaXZlIHRoZSBhY3R1YWwgZGlmZmVyZW5jZVxuICAgICAgLy8gYmV0d2VlbiBydW5uZXIgc3RhcnQgdGltZSBhbmQgbm93XG5cbiAgICAgIGNvbnN0IGR0VG9TdGFydCA9IHRoaXMuX3RpbWUgLSBydW5uZXJJbmZvLnN0YXJ0OyAvLyBEb250IHJ1biBydW5uZXIgaWYgbm90IHN0YXJ0ZWQgeWV0XG4gICAgICAvLyBhbmQgdHJ5IHRvIHJlc2V0IGl0XG5cbiAgICAgIGlmIChkdFRvU3RhcnQgPD0gMCkge1xuICAgICAgICBydW5uZXIucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9IC8vIFJ1biBhbGwgb2YgdGhlIHJ1bm5lcnMgZGlyZWN0bHlcblxuXG4gICAgbGV0IHJ1bm5lcnNMZWZ0ID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fcnVubmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgLy8gR2V0IGFuZCBydW4gdGhlIGN1cnJlbnQgcnVubmVyIGFuZCBpZ25vcmUgaXQgaWYgaXRzIGluYWN0aXZlXG4gICAgICBjb25zdCBydW5uZXJJbmZvID0gdGhpcy5fcnVubmVyc1tpXTtcbiAgICAgIGNvbnN0IHJ1bm5lciA9IHJ1bm5lckluZm8ucnVubmVyO1xuICAgICAgbGV0IGR0ID0gZHRUaW1lOyAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBnaXZlIHRoZSBhY3R1YWwgZGlmZmVyZW5jZVxuICAgICAgLy8gYmV0d2VlbiBydW5uZXIgc3RhcnQgdGltZSBhbmQgbm93XG5cbiAgICAgIGNvbnN0IGR0VG9TdGFydCA9IHRoaXMuX3RpbWUgLSBydW5uZXJJbmZvLnN0YXJ0OyAvLyBEb250IHJ1biBydW5uZXIgaWYgbm90IHN0YXJ0ZWQgeWV0XG5cbiAgICAgIGlmIChkdFRvU3RhcnQgPD0gMCkge1xuICAgICAgICBydW5uZXJzTGVmdCA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChkdFRvU3RhcnQgPCBkdCkge1xuICAgICAgICAvLyBBZGp1c3QgZHQgdG8gbWFrZSBzdXJlIHRoYXQgYW5pbWF0aW9uIGlzIG9uIHBvaW50XG4gICAgICAgIGR0ID0gZHRUb1N0YXJ0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJ1bm5lci5hY3RpdmUoKSkgY29udGludWU7IC8vIElmIHRoaXMgcnVubmVyIGlzIHN0aWxsIGdvaW5nLCBzaWduYWwgdGhhdCB3ZSBuZWVkIGFub3RoZXIgYW5pbWF0aW9uXG4gICAgICAvLyBmcmFtZSwgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIGNvbXBsZXRlZCBydW5uZXJcblxuICAgICAgY29uc3QgZmluaXNoZWQgPSBydW5uZXIuc3RlcChkdCkuZG9uZTtcblxuICAgICAgaWYgKCFmaW5pc2hlZCkge1xuICAgICAgICBydW5uZXJzTGVmdCA9IHRydWU7IC8vIGNvbnRpbnVlXG4gICAgICB9IGVsc2UgaWYgKHJ1bm5lckluZm8ucGVyc2lzdCAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBydW5uZXIgaXMgZmluaXNoZWQuIEFuZCBydW5uZXIgbWlnaHQgZ2V0IHJlbW92ZWRcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IHJ1bm5lci5kdXJhdGlvbigpIC0gcnVubmVyLnRpbWUoKSArIHRoaXMuX3RpbWU7XG5cbiAgICAgICAgaWYgKGVuZFRpbWUgKyBydW5uZXJJbmZvLnBlcnNpc3QgPCB0aGlzLl90aW1lKSB7XG4gICAgICAgICAgLy8gRGVsZXRlIHJ1bm5lciBhbmQgY29ycmVjdCBpbmRleFxuICAgICAgICAgIHJ1bm5lci51bnNjaGVkdWxlKCk7XG4gICAgICAgICAgLS1pO1xuICAgICAgICAgIC0tbGVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBCYXNpY2FsbHk6IHdlIGNvbnRpbnVlIHdoZW4gdGhlcmUgYXJlIHJ1bm5lcnMgcmlnaHQgZnJvbSB1cyBpbiB0aW1lXG4gICAgLy8gd2hlbiAtLT4sIGFuZCB3aGVuIHJ1bm5lcnMgYXJlIGxlZnQgZnJvbSB1cyB3aGVuIDwtLVxuXG5cbiAgICBpZiAocnVubmVyc0xlZnQgJiYgISh0aGlzLl9zcGVlZCA8IDAgJiYgdGhpcy5fdGltZSA9PT0gMCkgfHwgdGhpcy5fcnVubmVySWRzLmxlbmd0aCAmJiB0aGlzLl9zcGVlZCA8IDAgJiYgdGhpcy5fdGltZSA+IDApIHtcbiAgICAgIHRoaXMuX2NvbnRpbnVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuZmlyZSgnZmluaXNoZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBFbGVtZW50OiB7XG4gICAgdGltZWxpbmU6IGZ1bmN0aW9uICh0aW1lbGluZSkge1xuICAgICAgaWYgKHRpbWVsaW5lID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGltZWxpbmUgPSB0aGlzLl90aW1lbGluZSB8fCBuZXcgVGltZWxpbmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVsaW5lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuY2xhc3MgUnVubmVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTsgLy8gU3RvcmUgYSB1bmlxdWUgaWQgb24gdGhlIHJ1bm5lciwgc28gdGhhdCB3ZSBjYW4gaWRlbnRpZnkgaXQgbGF0ZXJcblxuICAgIHRoaXMuaWQgPSBSdW5uZXIuaWQrKzsgLy8gRW5zdXJlIGEgZGVmYXVsdCB2YWx1ZVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPT0gbnVsbCA/IHRpbWVsaW5lLmR1cmF0aW9uIDogb3B0aW9uczsgLy8gRW5zdXJlIHRoYXQgd2UgZ2V0IGEgY29udHJvbGxlclxuXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nID8gbmV3IENvbnRyb2xsZXIob3B0aW9ucykgOiBvcHRpb25zOyAvLyBEZWNsYXJlIGFsbCBvZiB0aGUgdmFyaWFibGVzXG5cbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl90aW1lbGluZSA9IG51bGw7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgdGhpcy5fcXVldWUgPSBbXTsgLy8gV29yayBvdXQgdGhlIHN0ZXBwZXIgYW5kIHRoZSBkdXJhdGlvblxuXG4gICAgdGhpcy5fZHVyYXRpb24gPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ251bWJlcicgJiYgb3B0aW9ucztcbiAgICB0aGlzLl9pc0RlY2xhcmF0aXZlID0gb3B0aW9ucyBpbnN0YW5jZW9mIENvbnRyb2xsZXI7XG4gICAgdGhpcy5fc3RlcHBlciA9IHRoaXMuX2lzRGVjbGFyYXRpdmUgPyBvcHRpb25zIDogbmV3IEVhc2UoKTsgLy8gV2UgY29weSB0aGUgY3VycmVudCB2YWx1ZXMgZnJvbSB0aGUgdGltZWxpbmUgYmVjYXVzZSB0aGV5IGNhbiBjaGFuZ2VcblxuICAgIHRoaXMuX2hpc3RvcnkgPSB7fTsgLy8gU3RvcmUgdGhlIHN0YXRlIG9mIHRoZSBydW5uZXJcblxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5fdGltZSA9IDA7XG4gICAgdGhpcy5fbGFzdFRpbWUgPSAwOyAvLyBBdCBjcmVhdGlvbiwgdGhlIHJ1bm5lciBpcyBpbiByZXNldGVkIHN0YXRlXG5cbiAgICB0aGlzLl9yZXNldGVkID0gdHJ1ZTsgLy8gU2F2ZSB0cmFuc2Zvcm1zIGFwcGxpZWQgdG8gdGhpcyBydW5uZXJcblxuICAgIHRoaXMudHJhbnNmb3JtcyA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUlkID0gMTsgLy8gTG9vcGluZyB2YXJpYWJsZXNcblxuICAgIHRoaXMuX2hhdmVSZXZlcnNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3JldmVyc2UgPSBmYWxzZTtcbiAgICB0aGlzLl9sb29wc0RvbmUgPSAwO1xuICAgIHRoaXMuX3N3aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fd2FpdCA9IDA7XG4gICAgdGhpcy5fdGltZXMgPSAxO1xuICAgIHRoaXMuX2ZyYW1lSWQgPSBudWxsOyAvLyBTdG9yZXMgaG93IGxvbmcgYSBydW5uZXIgaXMgc3RvcmVkIGFmdGVyIGJlZWluZyBkb25lXG5cbiAgICB0aGlzLl9wZXJzaXN0ID0gdGhpcy5faXNEZWNsYXJhdGl2ZSA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlKGR1cmF0aW9uLCBkZWxheSwgd2hlbikge1xuICAgIC8vIEluaXRpYWxpc2UgdGhlIGRlZmF1bHQgcGFyYW1ldGVyc1xuICAgIGxldCB0aW1lcyA9IDE7XG4gICAgbGV0IHN3aW5nID0gZmFsc2U7XG4gICAgbGV0IHdhaXQgPSAwO1xuICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgdGltZWxpbmUuZHVyYXRpb247XG4gICAgZGVsYXkgPSBkZWxheSB8fCB0aW1lbGluZS5kZWxheTtcbiAgICB3aGVuID0gd2hlbiB8fCAnbGFzdCc7IC8vIElmIHdlIGhhdmUgYW4gb2JqZWN0LCB1bnBhY2sgdGhlIHZhbHVlc1xuXG4gICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ29iamVjdCcgJiYgIShkdXJhdGlvbiBpbnN0YW5jZW9mIFN0ZXBwZXIpKSB7XG4gICAgICBkZWxheSA9IGR1cmF0aW9uLmRlbGF5IHx8IGRlbGF5O1xuICAgICAgd2hlbiA9IGR1cmF0aW9uLndoZW4gfHwgd2hlbjtcbiAgICAgIHN3aW5nID0gZHVyYXRpb24uc3dpbmcgfHwgc3dpbmc7XG4gICAgICB0aW1lcyA9IGR1cmF0aW9uLnRpbWVzIHx8IHRpbWVzO1xuICAgICAgd2FpdCA9IGR1cmF0aW9uLndhaXQgfHwgd2FpdDtcbiAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24uZHVyYXRpb24gfHwgdGltZWxpbmUuZHVyYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgIHN3aW5nOiBzd2luZyxcbiAgICAgIHRpbWVzOiB0aW1lcyxcbiAgICAgIHdhaXQ6IHdhaXQsXG4gICAgICB3aGVuOiB3aGVuXG4gICAgfTtcbiAgfVxuXG4gIGFjdGl2ZShlbmFibGVkKSB7XG4gICAgaWYgKGVuYWJsZWQgPT0gbnVsbCkgcmV0dXJuIHRoaXMuZW5hYmxlZDtcbiAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qXHJcbiAgUHJpdmF0ZSBNZXRob2RzXHJcbiAgPT09PT09PT09PT09PT09XHJcbiAgTWV0aG9kcyB0aGF0IHNob3VsZG4ndCBiZSB1c2VkIGV4dGVybmFsbHlcclxuICAqL1xuXG5cbiAgYWRkVHJhbnNmb3JtKHRyYW5zZm9ybSwgaW5kZXgpIHtcbiAgICB0aGlzLnRyYW5zZm9ybXMubG11bHRpcGx5Tyh0cmFuc2Zvcm0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWZ0ZXIoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5vbignZmluaXNoZWQnLCBmbik7XG4gIH1cblxuICBhbmltYXRlKGR1cmF0aW9uLCBkZWxheSwgd2hlbikge1xuICAgIGNvbnN0IG8gPSBSdW5uZXIuc2FuaXRpc2UoZHVyYXRpb24sIGRlbGF5LCB3aGVuKTtcbiAgICBjb25zdCBydW5uZXIgPSBuZXcgUnVubmVyKG8uZHVyYXRpb24pO1xuICAgIGlmICh0aGlzLl90aW1lbGluZSkgcnVubmVyLnRpbWVsaW5lKHRoaXMuX3RpbWVsaW5lKTtcbiAgICBpZiAodGhpcy5fZWxlbWVudCkgcnVubmVyLmVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgcmV0dXJuIHJ1bm5lci5sb29wKG8pLnNjaGVkdWxlKG8uZGVsYXksIG8ud2hlbik7XG4gIH1cblxuICBjbGVhclRyYW5zZm9ybSgpIHtcbiAgICB0aGlzLnRyYW5zZm9ybXMgPSBuZXcgTWF0cml4KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gVE9ETzogS2VlcCB0cmFjayBvZiBhbGwgdHJhbnNmb3JtYXRpb25zIHNvIHRoYXQgZGVsZXRpb24gaXMgZmFzdGVyXG5cblxuICBjbGVhclRyYW5zZm9ybXNGcm9tUXVldWUoKSB7XG4gICAgaWYgKCF0aGlzLmRvbmUgfHwgIXRoaXMuX3RpbWVsaW5lIHx8ICF0aGlzLl90aW1lbGluZS5fcnVubmVySWRzLmluY2x1ZGVzKHRoaXMuaWQpKSB7XG4gICAgICB0aGlzLl9xdWV1ZSA9IHRoaXMuX3F1ZXVlLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuICFpdGVtLmlzVHJhbnNmb3JtO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVsYXkoZGVsYXkpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRlKDAsIGRlbGF5KTtcbiAgfVxuXG4gIGR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lcyAqICh0aGlzLl93YWl0ICsgdGhpcy5fZHVyYXRpb24pIC0gdGhpcy5fd2FpdDtcbiAgfVxuXG4gIGR1cmluZyhmbikge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlKG51bGwsIGZuKTtcbiAgfVxuXG4gIGVhc2UoZm4pIHtcbiAgICB0aGlzLl9zdGVwcGVyID0gbmV3IEVhc2UoZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qXHJcbiAgUnVubmVyIERlZmluaXRpb25zXHJcbiAgPT09PT09PT09PT09PT09PT09XHJcbiAgVGhlc2UgbWV0aG9kcyBoZWxwIHVzIGRlZmluZSB0aGUgcnVudGltZSBiZWhhdmlvdXIgb2YgdGhlIFJ1bm5lciBvciB0aGV5XHJcbiAgaGVscCB1cyBtYWtlIG5ldyBydW5uZXJzIGZyb20gdGhlIGN1cnJlbnQgcnVubmVyXHJcbiAgKi9cblxuXG4gIGVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgZWxlbWVudC5fcHJlcGFyZVJ1bm5lcigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaW5pc2goKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcChJbmZpbml0eSk7XG4gIH1cblxuICBsb29wKHRpbWVzLCBzd2luZywgd2FpdCkge1xuICAgIC8vIERlYWwgd2l0aCB0aGUgdXNlciBwYXNzaW5nIGluIGFuIG9iamVjdFxuICAgIGlmICh0eXBlb2YgdGltZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBzd2luZyA9IHRpbWVzLnN3aW5nO1xuICAgICAgd2FpdCA9IHRpbWVzLndhaXQ7XG4gICAgICB0aW1lcyA9IHRpbWVzLnRpbWVzO1xuICAgIH0gLy8gU2FuaXRpc2UgdGhlIHZhbHVlcyBhbmQgc3RvcmUgdGhlbVxuXG5cbiAgICB0aGlzLl90aW1lcyA9IHRpbWVzIHx8IEluZmluaXR5O1xuICAgIHRoaXMuX3N3aW5nID0gc3dpbmcgfHwgZmFsc2U7XG4gICAgdGhpcy5fd2FpdCA9IHdhaXQgfHwgMDsgLy8gQWxsb3cgdHJ1ZSB0byBiZSBwYXNzZWRcblxuICAgIGlmICh0aGlzLl90aW1lcyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fdGltZXMgPSBJbmZpbml0eTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvb3BzKHApIHtcbiAgICBjb25zdCBsb29wRHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbiArIHRoaXMuX3dhaXQ7XG5cbiAgICBpZiAocCA9PSBudWxsKSB7XG4gICAgICBjb25zdCBsb29wc0RvbmUgPSBNYXRoLmZsb29yKHRoaXMuX3RpbWUgLyBsb29wRHVyYXRpb24pO1xuICAgICAgY29uc3QgcmVsYXRpdmVUaW1lID0gdGhpcy5fdGltZSAtIGxvb3BzRG9uZSAqIGxvb3BEdXJhdGlvbjtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gcmVsYXRpdmVUaW1lIC8gdGhpcy5fZHVyYXRpb247XG4gICAgICByZXR1cm4gTWF0aC5taW4obG9vcHNEb25lICsgcG9zaXRpb24sIHRoaXMuX3RpbWVzKTtcbiAgICB9XG5cbiAgICBjb25zdCB3aG9sZSA9IE1hdGguZmxvb3IocCk7XG4gICAgY29uc3QgcGFydGlhbCA9IHAgJSAxO1xuICAgIGNvbnN0IHRpbWUgPSBsb29wRHVyYXRpb24gKiB3aG9sZSArIHRoaXMuX2R1cmF0aW9uICogcGFydGlhbDtcbiAgICByZXR1cm4gdGhpcy50aW1lKHRpbWUpO1xuICB9XG5cbiAgcGVyc2lzdChkdE9yRm9yZXZlcikge1xuICAgIGlmIChkdE9yRm9yZXZlciA9PSBudWxsKSByZXR1cm4gdGhpcy5fcGVyc2lzdDtcbiAgICB0aGlzLl9wZXJzaXN0ID0gZHRPckZvcmV2ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwb3NpdGlvbihwKSB7XG4gICAgLy8gR2V0IGFsbCBvZiB0aGUgdmFyaWFibGVzIHdlIG5lZWRcbiAgICBjb25zdCB4ID0gdGhpcy5fdGltZTtcbiAgICBjb25zdCBkID0gdGhpcy5fZHVyYXRpb247XG4gICAgY29uc3QgdyA9IHRoaXMuX3dhaXQ7XG4gICAgY29uc3QgdCA9IHRoaXMuX3RpbWVzO1xuICAgIGNvbnN0IHMgPSB0aGlzLl9zd2luZztcbiAgICBjb25zdCByID0gdGhpcy5fcmV2ZXJzZTtcbiAgICBsZXQgcG9zaXRpb247XG5cbiAgICBpZiAocCA9PSBudWxsKSB7XG4gICAgICAvKlxyXG4gICAgICBUaGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGEgdGltZSB0byBhIHBvc2l0aW9uIGluIHRoZSByYW5nZSBbMCwgMV1cclxuICAgICAgVGhlIGZ1bGwgZXhwbGFuYXRpb24gY2FuIGJlIGZvdW5kIGluIHRoaXMgZGVzbW9zIGRlbW9uc3RyYXRpb25cclxuICAgICAgICBodHRwczovL3d3dy5kZXNtb3MuY29tL2NhbGN1bGF0b3IvdTRmYmF2Z2NoZVxyXG4gICAgICBUaGUgbG9naWMgaXMgc2xpZ2h0bHkgc2ltcGxpZmllZCBoZXJlIGJlY2F1c2Ugd2UgY2FuIHVzZSBib29sZWFuc1xyXG4gICAgICAqL1xuICAgICAgLy8gRmlndXJlIG91dCB0aGUgdmFsdWUgd2l0aG91dCB0aGlua2luZyBhYm91dCB0aGUgc3RhcnQgb3IgZW5kIHRpbWVcbiAgICAgIGNvbnN0IGYgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBjb25zdCBzd2luZ2luZyA9IHMgKiBNYXRoLmZsb29yKHggJSAoMiAqICh3ICsgZCkpIC8gKHcgKyBkKSk7XG4gICAgICAgIGNvbnN0IGJhY2t3YXJkcyA9IHN3aW5naW5nICYmICFyIHx8ICFzd2luZ2luZyAmJiByO1xuICAgICAgICBjb25zdCB1bmNsaXBlZCA9IE1hdGgucG93KC0xLCBiYWNrd2FyZHMpICogKHggJSAodyArIGQpKSAvIGQgKyBiYWNrd2FyZHM7XG4gICAgICAgIGNvbnN0IGNsaXBwZWQgPSBNYXRoLm1heChNYXRoLm1pbih1bmNsaXBlZCwgMSksIDApO1xuICAgICAgICByZXR1cm4gY2xpcHBlZDtcbiAgICAgIH07IC8vIEZpZ3VyZSBvdXQgdGhlIHZhbHVlIGJ5IGluY29ycG9yYXRpbmcgdGhlIHN0YXJ0IHRpbWVcblxuXG4gICAgICBjb25zdCBlbmRUaW1lID0gdCAqICh3ICsgZCkgLSB3O1xuICAgICAgcG9zaXRpb24gPSB4IDw9IDAgPyBNYXRoLnJvdW5kKGYoMWUtNSkpIDogeCA8IGVuZFRpbWUgPyBmKHgpIDogTWF0aC5yb3VuZChmKGVuZFRpbWUgLSAxZS01KSk7XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfSAvLyBXb3JrIG91dCB0aGUgbG9vcHMgZG9uZSBhbmQgYWRkIHRoZSBwb3NpdGlvbiB0byB0aGUgbG9vcHMgZG9uZVxuXG5cbiAgICBjb25zdCBsb29wc0RvbmUgPSBNYXRoLmZsb29yKHRoaXMubG9vcHMoKSk7XG4gICAgY29uc3Qgc3dpbmdGb3J3YXJkID0gcyAmJiBsb29wc0RvbmUgJSAyID09PSAwO1xuICAgIGNvbnN0IGZvcndhcmRzID0gc3dpbmdGb3J3YXJkICYmICFyIHx8IHIgJiYgc3dpbmdGb3J3YXJkO1xuICAgIHBvc2l0aW9uID0gbG9vcHNEb25lICsgKGZvcndhcmRzID8gcCA6IDEgLSBwKTtcbiAgICByZXR1cm4gdGhpcy5sb29wcyhwb3NpdGlvbik7XG4gIH1cblxuICBwcm9ncmVzcyhwKSB7XG4gICAgaWYgKHAgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKDEsIHRoaXMuX3RpbWUgLyB0aGlzLmR1cmF0aW9uKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRpbWUocCAqIHRoaXMuZHVyYXRpb24oKSk7XG4gIH1cbiAgLypcclxuICBCYXNpYyBGdW5jdGlvbmFsaXR5XHJcbiAgPT09PT09PT09PT09PT09PT09PVxyXG4gIFRoZXNlIG1ldGhvZHMgYWxsb3cgdXMgdG8gYXR0YWNoIGJhc2ljIGZ1bmN0aW9ucyB0byB0aGUgcnVubmVyIGRpcmVjdGx5XHJcbiAgKi9cblxuXG4gIHF1ZXVlKGluaXRGbiwgcnVuRm4sIHJldGFyZ2V0Rm4sIGlzVHJhbnNmb3JtKSB7XG4gICAgdGhpcy5fcXVldWUucHVzaCh7XG4gICAgICBpbml0aWFsaXNlcjogaW5pdEZuIHx8IG5vb3AsXG4gICAgICBydW5uZXI6IHJ1bkZuIHx8IG5vb3AsXG4gICAgICByZXRhcmdldDogcmV0YXJnZXRGbixcbiAgICAgIGlzVHJhbnNmb3JtOiBpc1RyYW5zZm9ybSxcbiAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgIGZpbmlzaGVkOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lKCk7XG4gICAgdGltZWxpbmUgJiYgdGhpcy50aW1lbGluZSgpLl9jb250aW51ZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2V0ZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMudGltZSgwKTtcbiAgICB0aGlzLl9yZXNldGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldmVyc2UocmV2ZXJzZSkge1xuICAgIHRoaXMuX3JldmVyc2UgPSByZXZlcnNlID09IG51bGwgPyAhdGhpcy5fcmV2ZXJzZSA6IHJldmVyc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzY2hlZHVsZSh0aW1lbGluZSwgZGVsYXksIHdoZW4pIHtcbiAgICAvLyBUaGUgdXNlciBkb2Vzbid0IG5lZWQgdG8gcGFzcyBhIHRpbWVsaW5lIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgICBpZiAoISh0aW1lbGluZSBpbnN0YW5jZW9mIFRpbWVsaW5lKSkge1xuICAgICAgd2hlbiA9IGRlbGF5O1xuICAgICAgZGVsYXkgPSB0aW1lbGluZTtcbiAgICAgIHRpbWVsaW5lID0gdGhpcy50aW1lbGluZSgpO1xuICAgIH0gLy8gSWYgdGhlcmUgaXMgbm8gdGltZWxpbmUsIHllbGwgYXQgdGhlIHVzZXIuLi5cblxuXG4gICAgaWYgKCF0aW1lbGluZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ1J1bm5lciBjYW5ub3QgYmUgc2NoZWR1bGVkIHdpdGhvdXQgdGltZWxpbmUnKTtcbiAgICB9IC8vIFNjaGVkdWxlIHRoZSBydW5uZXIgb24gdGhlIHRpbWVsaW5lIHByb3ZpZGVkXG5cblxuICAgIHRpbWVsaW5lLnNjaGVkdWxlKHRoaXMsIGRlbGF5LCB3aGVuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0ZXAoZHQpIHtcbiAgICAvLyBJZiB3ZSBhcmUgaW5hY3RpdmUsIHRoaXMgc3RlcHBlciBqdXN0IGdldHMgc2tpcHBlZFxuICAgIGlmICghdGhpcy5lbmFibGVkKSByZXR1cm4gdGhpczsgLy8gVXBkYXRlIHRoZSB0aW1lIGFuZCBnZXQgdGhlIG5ldyBwb3NpdGlvblxuXG4gICAgZHQgPSBkdCA9PSBudWxsID8gMTYgOiBkdDtcbiAgICB0aGlzLl90aW1lICs9IGR0O1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbigpOyAvLyBGaWd1cmUgb3V0IGlmIHdlIG5lZWQgdG8gcnVuIHRoZSBzdGVwcGVyIGluIHRoaXMgZnJhbWVcblxuICAgIGNvbnN0IHJ1bm5pbmcgPSB0aGlzLl9sYXN0UG9zaXRpb24gIT09IHBvc2l0aW9uICYmIHRoaXMuX3RpbWUgPj0gMDtcbiAgICB0aGlzLl9sYXN0UG9zaXRpb24gPSBwb3NpdGlvbjsgLy8gRmlndXJlIG91dCBpZiB3ZSBqdXN0IHN0YXJ0ZWRcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbigpO1xuICAgIGNvbnN0IGp1c3RTdGFydGVkID0gdGhpcy5fbGFzdFRpbWUgPD0gMCAmJiB0aGlzLl90aW1lID4gMDtcbiAgICBjb25zdCBqdXN0RmluaXNoZWQgPSB0aGlzLl9sYXN0VGltZSA8IGR1cmF0aW9uICYmIHRoaXMuX3RpbWUgPj0gZHVyYXRpb247XG4gICAgdGhpcy5fbGFzdFRpbWUgPSB0aGlzLl90aW1lO1xuXG4gICAgaWYgKGp1c3RTdGFydGVkKSB7XG4gICAgICB0aGlzLmZpcmUoJ3N0YXJ0JywgdGhpcyk7XG4gICAgfSAvLyBXb3JrIG91dCBpZiB0aGUgcnVubmVyIGlzIGZpbmlzaGVkIHNldCB0aGUgZG9uZSBmbGFnIGhlcmUgc28gYW5pbWF0aW9uc1xuICAgIC8vIGtub3csIHRoYXQgdGhleSBhcmUgcnVubmluZyBpbiB0aGUgbGFzdCBzdGVwICh0aGlzIGlzIGdvb2QgZm9yXG4gICAgLy8gdHJhbnNmb3JtYXRpb25zIHdoaWNoIGNhbiBiZSBtZXJnZWQpXG5cblxuICAgIGNvbnN0IGRlY2xhcmF0aXZlID0gdGhpcy5faXNEZWNsYXJhdGl2ZTtcbiAgICB0aGlzLmRvbmUgPSAhZGVjbGFyYXRpdmUgJiYgIWp1c3RGaW5pc2hlZCAmJiB0aGlzLl90aW1lID49IGR1cmF0aW9uOyAvLyBSdW5uZXIgaXMgcnVubmluZy4gU28gaXRzIG5vdCBpbiByZXNldGVkIHN0YXRlIGFueW1vcmVcblxuICAgIHRoaXMuX3Jlc2V0ZWQgPSBmYWxzZTtcbiAgICBsZXQgY29udmVyZ2VkID0gZmFsc2U7IC8vIENhbGwgaW5pdGlhbGlzZSBhbmQgdGhlIHJ1biBmdW5jdGlvblxuXG4gICAgaWYgKHJ1bm5pbmcgfHwgZGVjbGFyYXRpdmUpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpc2UocnVubmluZyk7IC8vIGNsZWFyIHRoZSB0cmFuc2Zvcm1zIG9uIHRoaXMgcnVubmVyIHNvIHRoZXkgZG9udCBnZXQgYWRkZWQgYWdhaW4gYW5kIGFnYWluXG5cblxuICAgICAgdGhpcy50cmFuc2Zvcm1zID0gbmV3IE1hdHJpeCgpO1xuICAgICAgY29udmVyZ2VkID0gdGhpcy5fcnVuKGRlY2xhcmF0aXZlID8gZHQgOiBwb3NpdGlvbik7XG4gICAgICB0aGlzLmZpcmUoJ3N0ZXAnLCB0aGlzKTtcbiAgICB9IC8vIGNvcnJlY3QgdGhlIGRvbmUgZmxhZyBoZXJlXG4gICAgLy8gZGVjbGFyaXRpdmUgYW5pbWF0aW9ucyBpdHNlbGYga25vdyB3aGVuIHRoZXkgY29udmVyZ2VkXG5cblxuICAgIHRoaXMuZG9uZSA9IHRoaXMuZG9uZSB8fCBjb252ZXJnZWQgJiYgZGVjbGFyYXRpdmU7XG5cbiAgICBpZiAoanVzdEZpbmlzaGVkKSB7XG4gICAgICB0aGlzLmZpcmUoJ2ZpbmlzaGVkJywgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLypcclxuICBSdW5uZXIgYW5pbWF0aW9uIG1ldGhvZHNcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBDb250cm9sIGhvdyB0aGUgYW5pbWF0aW9uIHBsYXlzXHJcbiAgKi9cblxuXG4gIHRpbWUodGltZSkge1xuICAgIGlmICh0aW1lID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGR0ID0gdGltZSAtIHRoaXMuX3RpbWU7XG4gICAgdGhpcy5zdGVwKGR0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRpbWVsaW5lKHRpbWVsaW5lKSB7XG4gICAgLy8gY2hlY2sgZXhwbGljaXRseSBmb3IgdW5kZWZpbmVkIHNvIHdlIGNhbiBzZXQgdGhlIHRpbWVsaW5lIHRvIG51bGxcbiAgICBpZiAodHlwZW9mIHRpbWVsaW5lID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXMuX3RpbWVsaW5lO1xuICAgIHRoaXMuX3RpbWVsaW5lID0gdGltZWxpbmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnNjaGVkdWxlKCkge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gdGhpcy50aW1lbGluZSgpO1xuICAgIHRpbWVsaW5lICYmIHRpbWVsaW5lLnVuc2NoZWR1bGUodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gUnVuIGVhY2ggaW5pdGlhbGlzZSBmdW5jdGlvbiBpbiB0aGUgcnVubmVyIGlmIHJlcXVpcmVkXG5cblxuICBfaW5pdGlhbGlzZShydW5uaW5nKSB7XG4gICAgLy8gSWYgd2UgYXJlbid0IHJ1bm5pbmcsIHdlIHNob3VsZG4ndCBpbml0aWFsaXNlIHdoZW4gbm90IGRlY2xhcmF0aXZlXG4gICAgaWYgKCFydW5uaW5nICYmICF0aGlzLl9pc0RlY2xhcmF0aXZlKSByZXR1cm47IC8vIExvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIGluaXRpYWxpc2Vyc1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX3F1ZXVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgaW5pdGlhbGlzZXJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9xdWV1ZVtpXTsgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgd2UgbmVlZCB0byBpbml0aWFsaXNlXG5cbiAgICAgIGNvbnN0IG5lZWRzSXQgPSB0aGlzLl9pc0RlY2xhcmF0aXZlIHx8ICFjdXJyZW50LmluaXRpYWxpc2VkICYmIHJ1bm5pbmc7XG4gICAgICBydW5uaW5nID0gIWN1cnJlbnQuZmluaXNoZWQ7IC8vIENhbGwgdGhlIGluaXRpYWxpc2VyIGlmIHdlIG5lZWQgdG9cblxuICAgICAgaWYgKG5lZWRzSXQgJiYgcnVubmluZykge1xuICAgICAgICBjdXJyZW50LmluaXRpYWxpc2VyLmNhbGwodGhpcyk7XG4gICAgICAgIGN1cnJlbnQuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBTYXZlIGEgbW9ycGhlciB0byB0aGUgbW9ycGhlciBsaXN0IHNvIHRoYXQgd2UgY2FuIHJldGFyZ2V0IGl0IGxhdGVyXG5cblxuICBfcmVtZW1iZXJNb3JwaGVyKG1ldGhvZCwgbW9ycGhlcikge1xuICAgIHRoaXMuX2hpc3RvcnlbbWV0aG9kXSA9IHtcbiAgICAgIG1vcnBoZXI6IG1vcnBoZXIsXG4gICAgICBjYWxsZXI6IHRoaXMuX3F1ZXVlW3RoaXMuX3F1ZXVlLmxlbmd0aCAtIDFdXG4gICAgfTsgLy8gV2UgaGF2ZSB0byByZXN1bWUgdGhlIHRpbWVsaW5lIGluIGNhc2UgYSBjb250cm9sbGVyXG4gICAgLy8gaXMgYWxyZWFkeSBkb25lIHdpdGhvdXQgYmVpbmcgZXZlciBydW5cbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiBlLmcuIHRoaXMgaXMgZG9uZTpcbiAgICAvLyAgICBhbmltID0gZWwuYW5pbWF0ZShuZXcgU1ZHLlNwcmluZylcbiAgICAvLyBhbmQgbGF0ZXJcbiAgICAvLyAgICBhbmltLm1vdmUoLi4uKVxuXG4gICAgaWYgKHRoaXMuX2lzRGVjbGFyYXRpdmUpIHtcbiAgICAgIGNvbnN0IHRpbWVsaW5lID0gdGhpcy50aW1lbGluZSgpO1xuICAgICAgdGltZWxpbmUgJiYgdGltZWxpbmUucGxheSgpO1xuICAgIH1cbiAgfSAvLyBUcnkgdG8gc2V0IHRoZSB0YXJnZXQgZm9yIGEgbW9ycGhlciBpZiB0aGUgbW9ycGhlciBleGlzdHMsIG90aGVyd2lzZVxuICAvLyBSdW4gZWFjaCBydW4gZnVuY3Rpb24gZm9yIHRoZSBwb3NpdGlvbiBvciBkdCBnaXZlblxuXG5cbiAgX3J1bihwb3NpdGlvbk9yRHQpIHtcbiAgICAvLyBSdW4gYWxsIG9mIHRoZSBfcXVldWUgZGlyZWN0bHlcbiAgICBsZXQgYWxsZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX3F1ZXVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZnVuY3Rpb24gdG8gcnVuXG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fcXVldWVbaV07IC8vIFJ1biB0aGUgZnVuY3Rpb24gaWYgaXRzIG5vdCBmaW5pc2hlZCwgd2Uga2VlcCB0cmFjayBvZiB0aGUgZmluaXNoZWRcbiAgICAgIC8vIGZsYWcgZm9yIHRoZSBzYWtlIG9mIGRlY2xhcmF0aXZlIF9xdWV1ZVxuXG4gICAgICBjb25zdCBjb252ZXJnZWQgPSBjdXJyZW50LnJ1bm5lci5jYWxsKHRoaXMsIHBvc2l0aW9uT3JEdCk7XG4gICAgICBjdXJyZW50LmZpbmlzaGVkID0gY3VycmVudC5maW5pc2hlZCB8fCBjb252ZXJnZWQgPT09IHRydWU7XG4gICAgICBhbGxmaW5pc2hlZCA9IGFsbGZpbmlzaGVkICYmIGN1cnJlbnQuZmluaXNoZWQ7XG4gICAgfSAvLyBXZSByZXBvcnQgd2hlbiBhbGwgb2YgdGhlIGNvbnN0cnVjdG9ycyBhcmUgZmluaXNoZWRcblxuXG4gICAgcmV0dXJuIGFsbGZpbmlzaGVkO1xuICB9IC8vIGRvIG5vdGhpbmcgYW5kIHJldHVybiBmYWxzZVxuXG5cbiAgX3RyeVJldGFyZ2V0KG1ldGhvZCwgdGFyZ2V0LCBleHRyYSkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5W21ldGhvZF0pIHtcbiAgICAgIC8vIGlmIHRoZSBsYXN0IG1ldGhvZCB3YXNudCBldmVuIGluaXRpYWxpc2VkLCB0aHJvdyBpdCBhd2F5XG4gICAgICBpZiAoIXRoaXMuX2hpc3RvcnlbbWV0aG9kXS5jYWxsZXIuaW5pdGlhbGlzZWQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9xdWV1ZS5pbmRleE9mKHRoaXMuX2hpc3RvcnlbbWV0aG9kXS5jYWxsZXIpO1xuXG4gICAgICAgIHRoaXMuX3F1ZXVlLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvLyBmb3IgdGhlIGNhc2Ugb2YgdHJhbnNmb3JtYXRpb25zLCB3ZSB1c2UgdGhlIHNwZWNpYWwgcmV0YXJnZXQgZnVuY3Rpb25cbiAgICAgIC8vIHdoaWNoIGhhcyBhY2Nlc3MgdG8gdGhlIG91dGVyIHNjb3BlXG5cblxuICAgICAgaWYgKHRoaXMuX2hpc3RvcnlbbWV0aG9kXS5jYWxsZXIucmV0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5faGlzdG9yeVttZXRob2RdLmNhbGxlci5yZXRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgZXh0cmEpOyAvLyBmb3IgZXZlcnl0aGluZyBlbHNlIGEgc2ltcGxlIG1vcnBoZXIgY2hhbmdlIGlzIHN1ZmZpY2llbnRcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlzdG9yeVttZXRob2RdLm1vcnBoZXIudG8odGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGlzdG9yeVttZXRob2RdLmNhbGxlci5maW5pc2hlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lKCk7XG4gICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5wbGF5KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuUnVubmVyLmlkID0gMDtcbmNsYXNzIEZha2VSdW5uZXIge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm1zID0gbmV3IE1hdHJpeCgpLCBpZCA9IC0xLCBkb25lID0gdHJ1ZSkge1xuICAgIHRoaXMudHJhbnNmb3JtcyA9IHRyYW5zZm9ybXM7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gIH1cblxuICBjbGVhclRyYW5zZm9ybXNGcm9tUXVldWUoKSB7fVxuXG59XG5leHRlbmQoW1J1bm5lciwgRmFrZVJ1bm5lcl0sIHtcbiAgbWVyZ2VXaXRoKHJ1bm5lcikge1xuICAgIHJldHVybiBuZXcgRmFrZVJ1bm5lcihydW5uZXIudHJhbnNmb3Jtcy5sbXVsdGlwbHkodGhpcy50cmFuc2Zvcm1zKSwgcnVubmVyLmlkKTtcbiAgfVxuXG59KTsgLy8gRmFrZVJ1bm5lci5lbXB0eVJ1bm5lciA9IG5ldyBGYWtlUnVubmVyKClcblxuY29uc3QgbG11bHRpcGx5ID0gKGxhc3QsIGN1cnIpID0+IGxhc3QubG11bHRpcGx5TyhjdXJyKTtcblxuY29uc3QgZ2V0UnVubmVyVHJhbnNmb3JtID0gcnVubmVyID0+IHJ1bm5lci50cmFuc2Zvcm1zO1xuXG5mdW5jdGlvbiBtZXJnZVRyYW5zZm9ybXMoKSB7XG4gIC8vIEZpbmQgdGhlIG1hdHJpeCB0byBhcHBseSB0byB0aGUgZWxlbWVudCBhbmQgYXBwbHkgaXRcbiAgY29uc3QgcnVubmVycyA9IHRoaXMuX3RyYW5zZm9ybWF0aW9uUnVubmVycy5ydW5uZXJzO1xuICBjb25zdCBuZXRUcmFuc2Zvcm0gPSBydW5uZXJzLm1hcChnZXRSdW5uZXJUcmFuc2Zvcm0pLnJlZHVjZShsbXVsdGlwbHksIG5ldyBNYXRyaXgoKSk7XG4gIHRoaXMudHJhbnNmb3JtKG5ldFRyYW5zZm9ybSk7XG5cbiAgdGhpcy5fdHJhbnNmb3JtYXRpb25SdW5uZXJzLm1lcmdlKCk7XG5cbiAgaWYgKHRoaXMuX3RyYW5zZm9ybWF0aW9uUnVubmVycy5sZW5ndGgoKSA9PT0gMSkge1xuICAgIHRoaXMuX2ZyYW1lSWQgPSBudWxsO1xuICB9XG59XG5cbmNsYXNzIFJ1bm5lckFycmF5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ydW5uZXJzID0gW107XG4gICAgdGhpcy5pZHMgPSBbXTtcbiAgfVxuXG4gIGFkZChydW5uZXIpIHtcbiAgICBpZiAodGhpcy5ydW5uZXJzLmluY2x1ZGVzKHJ1bm5lcikpIHJldHVybjtcbiAgICBjb25zdCBpZCA9IHJ1bm5lci5pZCArIDE7XG4gICAgdGhpcy5ydW5uZXJzLnB1c2gocnVubmVyKTtcbiAgICB0aGlzLmlkcy5wdXNoKGlkKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsZWFyQmVmb3JlKGlkKSB7XG4gICAgY29uc3QgZGVsZXRlQ250ID0gdGhpcy5pZHMuaW5kZXhPZihpZCArIDEpIHx8IDE7XG4gICAgdGhpcy5pZHMuc3BsaWNlKDAsIGRlbGV0ZUNudCwgMCk7XG4gICAgdGhpcy5ydW5uZXJzLnNwbGljZSgwLCBkZWxldGVDbnQsIG5ldyBGYWtlUnVubmVyKCkpLmZvckVhY2gociA9PiByLmNsZWFyVHJhbnNmb3Jtc0Zyb21RdWV1ZSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVkaXQoaWQsIG5ld1J1bm5lcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pZHMuaW5kZXhPZihpZCArIDEpO1xuICAgIHRoaXMuaWRzLnNwbGljZShpbmRleCwgMSwgaWQgKyAxKTtcbiAgICB0aGlzLnJ1bm5lcnMuc3BsaWNlKGluZGV4LCAxLCBuZXdSdW5uZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0QnlJRChpZCkge1xuICAgIHJldHVybiB0aGlzLnJ1bm5lcnNbdGhpcy5pZHMuaW5kZXhPZihpZCArIDEpXTtcbiAgfVxuXG4gIGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZHMubGVuZ3RoO1xuICB9XG5cbiAgbWVyZ2UoKSB7XG4gICAgbGV0IGxhc3RSdW5uZXIgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJ1bm5lcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHJ1bm5lciA9IHRoaXMucnVubmVyc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGxhc3RSdW5uZXIgJiYgcnVubmVyLmRvbmUgJiYgbGFzdFJ1bm5lci5kb25lIC8vIGRvbid0IG1lcmdlIHJ1bm5lciB3aGVuIHBlcnNpc3RlZCBvbiB0aW1lbGluZVxuICAgICAgJiYgKCFydW5uZXIuX3RpbWVsaW5lIHx8ICFydW5uZXIuX3RpbWVsaW5lLl9ydW5uZXJJZHMuaW5jbHVkZXMocnVubmVyLmlkKSkgJiYgKCFsYXN0UnVubmVyLl90aW1lbGluZSB8fCAhbGFzdFJ1bm5lci5fdGltZWxpbmUuX3J1bm5lcklkcy5pbmNsdWRlcyhsYXN0UnVubmVyLmlkKSk7XG5cbiAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgLy8gdGhlICsxIGhhcHBlbnMgaW4gdGhlIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMucmVtb3ZlKHJ1bm5lci5pZCk7XG4gICAgICAgIGNvbnN0IG5ld1J1bm5lciA9IHJ1bm5lci5tZXJnZVdpdGgobGFzdFJ1bm5lcik7XG4gICAgICAgIHRoaXMuZWRpdChsYXN0UnVubmVyLmlkLCBuZXdSdW5uZXIpO1xuICAgICAgICBsYXN0UnVubmVyID0gbmV3UnVubmVyO1xuICAgICAgICAtLWk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0UnVubmVyID0gcnVubmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlKGlkKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlkcy5pbmRleE9mKGlkICsgMSk7XG4gICAgdGhpcy5pZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnJ1bm5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBFbGVtZW50OiB7XG4gICAgYW5pbWF0ZShkdXJhdGlvbiwgZGVsYXksIHdoZW4pIHtcbiAgICAgIGNvbnN0IG8gPSBSdW5uZXIuc2FuaXRpc2UoZHVyYXRpb24sIGRlbGF5LCB3aGVuKTtcbiAgICAgIGNvbnN0IHRpbWVsaW5lID0gdGhpcy50aW1lbGluZSgpO1xuICAgICAgcmV0dXJuIG5ldyBSdW5uZXIoby5kdXJhdGlvbikubG9vcChvKS5lbGVtZW50KHRoaXMpLnRpbWVsaW5lKHRpbWVsaW5lLnBsYXkoKSkuc2NoZWR1bGUoby5kZWxheSwgby53aGVuKTtcbiAgICB9LFxuXG4gICAgZGVsYXkoYnksIHdoZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUoMCwgYnksIHdoZW4pO1xuICAgIH0sXG5cbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHNlYXJjaGVzIGZvciBhbGwgcnVubmVycyBvbiB0aGUgZWxlbWVudCBhbmQgZGVsZXRlcyB0aGUgb25lc1xuICAgIC8vIHdoaWNoIHJ1biBiZWZvcmUgdGhlIGN1cnJlbnQgb25lLiBUaGlzIGlzIGJlY2F1c2UgYWJzb2x1dGUgdHJhbnNmb3JtYXRpb25zXG4gICAgLy8gb3Zlcndmcml0ZSBhbnl0aGluZyBhbnl3YXkgc28gdGhlcmUgaXMgbm8gbmVlZCB0byB3YXN0ZSB0aW1lIGNvbXB1dGluZ1xuICAgIC8vIG90aGVyIHJ1bm5lcnNcbiAgICBfY2xlYXJUcmFuc2Zvcm1SdW5uZXJzQmVmb3JlKGN1cnJlbnRSdW5uZXIpIHtcbiAgICAgIHRoaXMuX3RyYW5zZm9ybWF0aW9uUnVubmVycy5jbGVhckJlZm9yZShjdXJyZW50UnVubmVyLmlkKTtcbiAgICB9LFxuXG4gICAgX2N1cnJlbnRUcmFuc2Zvcm0oY3VycmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybWF0aW9uUnVubmVycy5ydW5uZXJzIC8vIHdlIG5lZWQgdGhlIGVxdWFsIHNpZ24gaGVyZSB0byBtYWtlIHN1cmUsIHRoYXQgYWxzbyB0cmFuc2Zvcm1hdGlvbnNcbiAgICAgIC8vIG9uIHRoZSBzYW1lIHJ1bm5lciB3aGljaCBleGVjdXRlIGJlZm9yZSB0aGUgY3VycmVudCB0cmFuc2Zvcm1hdGlvbiBhcmVcbiAgICAgIC8vIHRha2VuIGludG8gYWNjb3VudFxuICAgICAgLmZpbHRlcihydW5uZXIgPT4gcnVubmVyLmlkIDw9IGN1cnJlbnQuaWQpLm1hcChnZXRSdW5uZXJUcmFuc2Zvcm0pLnJlZHVjZShsbXVsdGlwbHksIG5ldyBNYXRyaXgoKSk7XG4gICAgfSxcblxuICAgIF9hZGRSdW5uZXIocnVubmVyKSB7XG4gICAgICB0aGlzLl90cmFuc2Zvcm1hdGlvblJ1bm5lcnMuYWRkKHJ1bm5lcik7IC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBydW5uZXIgbWVyZ2UgaXMgZXhlY3V0ZWQgYXQgdGhlIHZlcnkgZW5kIG9mXG4gICAgICAvLyBhbGwgQW5pbWF0b3IgZnVuY3Rpb25zLiBUaGF0cyB3aHkgd2UgdXNlIGltbWVkaWF0ZSBoZXJlIHRvIGV4ZWN1dGVcbiAgICAgIC8vIHRoZSBtZXJnZSByaWdodCBhZnRlciBhbGwgZnJhbWVzIGFyZSBydW5cblxuXG4gICAgICBBbmltYXRvci5jYW5jZWxJbW1lZGlhdGUodGhpcy5fZnJhbWVJZCk7XG4gICAgICB0aGlzLl9mcmFtZUlkID0gQW5pbWF0b3IuaW1tZWRpYXRlKG1lcmdlVHJhbnNmb3Jtcy5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgX3ByZXBhcmVSdW5uZXIoKSB7XG4gICAgICBpZiAodGhpcy5fZnJhbWVJZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybWF0aW9uUnVubmVycyA9IG5ldyBSdW5uZXJBcnJheSgpLmFkZChuZXcgRmFrZVJ1bm5lcihuZXcgTWF0cml4KHRoaXMpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn0pOyAvLyBXaWxsIG91dHB1dCB0aGUgZWxlbWVudHMgZnJvbSBhcnJheSBBIHRoYXQgYXJlIG5vdCBpbiB0aGUgYXJyYXkgQlxuXG5jb25zdCBkaWZmZXJlbmNlID0gKGEsIGIpID0+IGEuZmlsdGVyKHggPT4gIWIuaW5jbHVkZXMoeCkpO1xuXG5leHRlbmQoUnVubmVyLCB7XG4gIGF0dHIoYSwgdikge1xuICAgIHJldHVybiB0aGlzLnN0eWxlQXR0cignYXR0cicsIGEsIHYpO1xuICB9LFxuXG4gIC8vIEFkZCBhbmltYXRhYmxlIHN0eWxlc1xuICBjc3Mocywgdikge1xuICAgIHJldHVybiB0aGlzLnN0eWxlQXR0cignY3NzJywgcywgdik7XG4gIH0sXG5cbiAgc3R5bGVBdHRyKHR5cGUsIG5hbWVPckF0dHJzLCB2YWwpIHtcbiAgICBpZiAodHlwZW9mIG5hbWVPckF0dHJzID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuc3R5bGVBdHRyKHR5cGUsIHtcbiAgICAgICAgW25hbWVPckF0dHJzXTogdmFsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgYXR0cnMgPSBuYW1lT3JBdHRycztcbiAgICBpZiAodGhpcy5fdHJ5UmV0YXJnZXQodHlwZSwgYXR0cnMpKSByZXR1cm4gdGhpcztcbiAgICBsZXQgbW9ycGhlciA9IG5ldyBNb3JwaGFibGUodGhpcy5fc3RlcHBlcikudG8oYXR0cnMpO1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoYXR0cnMpO1xuICAgIHRoaXMucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgbW9ycGhlciA9IG1vcnBoZXIuZnJvbSh0aGlzLmVsZW1lbnQoKVt0eXBlXShrZXlzKSk7XG4gICAgfSwgZnVuY3Rpb24gKHBvcykge1xuICAgICAgdGhpcy5lbGVtZW50KClbdHlwZV0obW9ycGhlci5hdChwb3MpLnZhbHVlT2YoKSk7XG4gICAgICByZXR1cm4gbW9ycGhlci5kb25lKCk7XG4gICAgfSwgZnVuY3Rpb24gKG5ld1RvQXR0cnMpIHtcbiAgICAgIC8vIENoZWNrIGlmIGFueSBuZXcga2V5cyB3ZXJlIGFkZGVkXG4gICAgICBjb25zdCBuZXdLZXlzID0gT2JqZWN0LmtleXMobmV3VG9BdHRycyk7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlcyA9IGRpZmZlcmVuY2UobmV3S2V5cywga2V5cyk7IC8vIElmIHRoZWlyIGFyZSBuZXcga2V5cywgaW5pdGlhbGl6ZSB0aGVtIGFuZCBhZGQgdGhlbSB0byBtb3JwaGVyXG5cbiAgICAgIGlmIChkaWZmZXJlbmNlcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZXNcbiAgICAgICAgY29uc3QgYWRkZWRGcm9tQXR0cnMgPSB0aGlzLmVsZW1lbnQoKVt0eXBlXShkaWZmZXJlbmNlcyk7IC8vIEdldCB0aGUgYWxyZWFkeSBpbml0aWFsaXplZCB2YWx1ZXNcblxuICAgICAgICBjb25zdCBvbGRGcm9tQXR0cnMgPSBuZXcgT2JqZWN0QmFnKG1vcnBoZXIuZnJvbSgpKS52YWx1ZU9mKCk7IC8vIE1lcmdlIG9sZCBhbmQgbmV3XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihvbGRGcm9tQXR0cnMsIGFkZGVkRnJvbUF0dHJzKTtcbiAgICAgICAgbW9ycGhlci5mcm9tKG9sZEZyb21BdHRycyk7XG4gICAgICB9IC8vIEdldCB0aGUgb2JqZWN0IGZyb20gdGhlIG1vcnBoZXJcblxuXG4gICAgICBjb25zdCBvbGRUb0F0dHJzID0gbmV3IE9iamVjdEJhZyhtb3JwaGVyLnRvKCkpLnZhbHVlT2YoKTsgLy8gTWVyZ2UgaW4gbmV3IGF0dHJpYnV0ZXNcblxuICAgICAgT2JqZWN0LmFzc2lnbihvbGRUb0F0dHJzLCBuZXdUb0F0dHJzKTsgLy8gQ2hhbmdlIG1vcnBoZXIgdGFyZ2V0XG5cbiAgICAgIG1vcnBoZXIudG8ob2xkVG9BdHRycyk7IC8vIE1ha2Ugc3VyZSB0aGF0IHdlIHNhdmUgdGhlIHdvcmsgd2UgZGlkIHNvIHdlIGRvbid0IG5lZWQgaXQgdG8gZG8gYWdhaW5cblxuICAgICAga2V5cyA9IG5ld0tleXM7XG4gICAgICBhdHRycyA9IG5ld1RvQXR0cnM7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW1lbWJlck1vcnBoZXIodHlwZSwgbW9ycGhlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICB6b29tKGxldmVsLCBwb2ludCkge1xuICAgIGlmICh0aGlzLl90cnlSZXRhcmdldCgnem9vbScsIGxldmVsLCBwb2ludCkpIHJldHVybiB0aGlzO1xuICAgIGxldCBtb3JwaGVyID0gbmV3IE1vcnBoYWJsZSh0aGlzLl9zdGVwcGVyKS50byhuZXcgU1ZHTnVtYmVyKGxldmVsKSk7XG4gICAgdGhpcy5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICBtb3JwaGVyID0gbW9ycGhlci5mcm9tKHRoaXMuZWxlbWVudCgpLnpvb20oKSk7XG4gICAgfSwgZnVuY3Rpb24gKHBvcykge1xuICAgICAgdGhpcy5lbGVtZW50KCkuem9vbShtb3JwaGVyLmF0KHBvcyksIHBvaW50KTtcbiAgICAgIHJldHVybiBtb3JwaGVyLmRvbmUoKTtcbiAgICB9LCBmdW5jdGlvbiAobmV3TGV2ZWwsIG5ld1BvaW50KSB7XG4gICAgICBwb2ludCA9IG5ld1BvaW50O1xuICAgICAgbW9ycGhlci50byhuZXdMZXZlbCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW1lbWJlck1vcnBoZXIoJ3pvb20nLCBtb3JwaGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqKiBhYnNvbHV0ZSB0cmFuc2Zvcm1hdGlvbnNcclxuICAgKiovXG4gIC8vXG4gIC8vIE0gdiAtLS0tLXwtLS0tLShEIE0gdiA9IEYgdiktLS0tLS18LS0tLS0+ICBUIHZcbiAgLy9cbiAgLy8gMS4gZGVmaW5lIHRoZSBmaW5hbCBzdGF0ZSAoVCkgYW5kIGRlY29tcG9zZSBpdCAob25jZSlcbiAgLy8gICAgdCA9IFt0eCwgdHksIHRoZSwgbGFtLCBzeSwgc3hdXG4gIC8vIDIuIG9uIGV2ZXJ5IGZyYW1lOiBwdWxsIHRoZSBjdXJyZW50IHN0YXRlIG9mIGFsbCBwcmV2aW91cyB0cmFuc2Zvcm1zXG4gIC8vICAgIChNIC0gbSBjYW4gY2hhbmdlKVxuICAvLyAgIGFuZCB0aGVuIHdyaXRlIHRoaXMgYXMgbSA9IFt0eDAsIHR5MCwgdGhlMCwgbGFtMCwgc3kwLCBzeDBdXG4gIC8vIDMuIEZpbmQgdGhlIGludGVycG9sYXRlZCBtYXRyaXggRihwb3MpID0gbSArIHBvcyAqICh0IC0gbSlcbiAgLy8gICAtIE5vdGUgRigwKSA9IE1cbiAgLy8gICAtIE5vdGUgRigxKSA9IFRcbiAgLy8gNC4gTm93IHlvdSBnZXQgdGhlIGRlbHRhIG1hdHJpeCBhcyBhIHJlc3VsdDogRCA9IEYgKiBpbnYoTSlcbiAgdHJhbnNmb3JtKHRyYW5zZm9ybXMsIHJlbGF0aXZlLCBhZmZpbmUpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgZGVjbGFyYXRpdmUgZnVuY3Rpb24sIHdlIHNob3VsZCByZXRhcmdldCBpdCBpZiBwb3NzaWJsZVxuICAgIHJlbGF0aXZlID0gdHJhbnNmb3Jtcy5yZWxhdGl2ZSB8fCByZWxhdGl2ZTtcblxuICAgIGlmICh0aGlzLl9pc0RlY2xhcmF0aXZlICYmICFyZWxhdGl2ZSAmJiB0aGlzLl90cnlSZXRhcmdldCgndHJhbnNmb3JtJywgdHJhbnNmb3JtcykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gLy8gUGFyc2UgdGhlIHBhcmFtZXRlcnNcblxuXG4gICAgY29uc3QgaXNNYXRyaXggPSBNYXRyaXguaXNNYXRyaXhMaWtlKHRyYW5zZm9ybXMpO1xuICAgIGFmZmluZSA9IHRyYW5zZm9ybXMuYWZmaW5lICE9IG51bGwgPyB0cmFuc2Zvcm1zLmFmZmluZSA6IGFmZmluZSAhPSBudWxsID8gYWZmaW5lIDogIWlzTWF0cml4OyAvLyBDcmVhdGUgYSBtb3JlcGhlciBhbmQgc2V0IGl0cyB0eXBlXG5cbiAgICBjb25zdCBtb3JwaGVyID0gbmV3IE1vcnBoYWJsZSh0aGlzLl9zdGVwcGVyKS50eXBlKGFmZmluZSA/IFRyYW5zZm9ybUJhZyA6IE1hdHJpeCk7XG4gICAgbGV0IG9yaWdpbjtcbiAgICBsZXQgZWxlbWVudDtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgY3VycmVudEFuZ2xlO1xuICAgIGxldCBzdGFydFRyYW5zZm9ybTtcblxuICAgIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgLy8gbWFrZSBzdXJlIGVsZW1lbnQgYW5kIG9yaWdpbiBpcyBkZWZpbmVkXG4gICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmVsZW1lbnQoKTtcbiAgICAgIG9yaWdpbiA9IG9yaWdpbiB8fCBnZXRPcmlnaW4odHJhbnNmb3JtcywgZWxlbWVudCk7XG4gICAgICBzdGFydFRyYW5zZm9ybSA9IG5ldyBNYXRyaXgocmVsYXRpdmUgPyB1bmRlZmluZWQgOiBlbGVtZW50KTsgLy8gYWRkIHRoZSBydW5uZXIgdG8gdGhlIGVsZW1lbnQgc28gaXQgY2FuIG1lcmdlIHRyYW5zZm9ybWF0aW9uc1xuXG4gICAgICBlbGVtZW50Ll9hZGRSdW5uZXIodGhpcyk7IC8vIERlYWN0aXZhdGUgYWxsIHRyYW5zZm9ybXMgdGhhdCBoYXZlIHJ1biBzbyBmYXIgaWYgd2UgYXJlIGFic29sdXRlXG5cblxuICAgICAgaWYgKCFyZWxhdGl2ZSkge1xuICAgICAgICBlbGVtZW50Ll9jbGVhclRyYW5zZm9ybVJ1bm5lcnNCZWZvcmUodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHBvcykge1xuICAgICAgLy8gY2xlYXIgYWxsIG90aGVyIHRyYW5zZm9ybXMgYmVmb3JlIHRoaXMgaW4gY2FzZSBzb21ldGhpbmcgaXMgc2F2ZWRcbiAgICAgIC8vIG9uIHRoaXMgcnVubmVyLiBXZSBhcmUgYWJzb2x1dGUuIFdlIGRvbnQgbmVlZCB0aGVzZSFcbiAgICAgIGlmICghcmVsYXRpdmUpIHRoaXMuY2xlYXJUcmFuc2Zvcm0oKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSA9IG5ldyBQb2ludChvcmlnaW4pLnRyYW5zZm9ybShlbGVtZW50Ll9jdXJyZW50VHJhbnNmb3JtKHRoaXMpKTtcbiAgICAgIGxldCB0YXJnZXQgPSBuZXcgTWF0cml4KHsgLi4udHJhbnNmb3JtcyxcbiAgICAgICAgb3JpZ2luOiBbeCwgeV1cbiAgICAgIH0pO1xuICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5faXNEZWNsYXJhdGl2ZSAmJiBjdXJyZW50ID8gY3VycmVudCA6IHN0YXJ0VHJhbnNmb3JtO1xuXG4gICAgICBpZiAoYWZmaW5lKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5kZWNvbXBvc2UoeCwgeSk7XG4gICAgICAgIHN0YXJ0ID0gc3RhcnQuZGVjb21wb3NlKHgsIHkpOyAvLyBHZXQgdGhlIGN1cnJlbnQgYW5kIHRhcmdldCBhbmdsZSBhcyBpdCB3YXMgc2V0XG5cbiAgICAgICAgY29uc3QgclRhcmdldCA9IHRhcmdldC5yb3RhdGU7XG4gICAgICAgIGNvbnN0IHJDdXJyZW50ID0gc3RhcnQucm90YXRlOyAvLyBGaWd1cmUgb3V0IHRoZSBzaG9ydGVzdCBwYXRoIHRvIHJvdGF0ZSBkaXJlY3RseVxuXG4gICAgICAgIGNvbnN0IHBvc3NpYmlsaXRpZXMgPSBbclRhcmdldCAtIDM2MCwgclRhcmdldCwgclRhcmdldCArIDM2MF07XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlcyA9IHBvc3NpYmlsaXRpZXMubWFwKGEgPT4gTWF0aC5hYnMoYSAtIHJDdXJyZW50KSk7XG4gICAgICAgIGNvbnN0IHNob3J0ZXN0ID0gTWF0aC5taW4oLi4uZGlzdGFuY2VzKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihzaG9ydGVzdCk7XG4gICAgICAgIHRhcmdldC5yb3RhdGUgPSBwb3NzaWJpbGl0aWVzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbGF0aXZlKSB7XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gYmUgY2FyZWZ1bCBoZXJlIG5vdCB0byBvdmVyd3JpdGUgdGhlIHJvdGF0aW9uXG4gICAgICAgIC8vIHdpdGggdGhlIHJvdGF0ZSBtZXRob2Qgb2YgTWF0cml4XG4gICAgICAgIGlmICghaXNNYXRyaXgpIHtcbiAgICAgICAgICB0YXJnZXQucm90YXRlID0gdHJhbnNmb3Jtcy5yb3RhdGUgfHwgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9pc0RlY2xhcmF0aXZlICYmIGN1cnJlbnRBbmdsZSkge1xuICAgICAgICAgIHN0YXJ0LnJvdGF0ZSA9IGN1cnJlbnRBbmdsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtb3JwaGVyLmZyb20oc3RhcnQpO1xuICAgICAgbW9ycGhlci50byh0YXJnZXQpO1xuICAgICAgY29uc3QgYWZmaW5lUGFyYW1ldGVycyA9IG1vcnBoZXIuYXQocG9zKTtcbiAgICAgIGN1cnJlbnRBbmdsZSA9IGFmZmluZVBhcmFtZXRlcnMucm90YXRlO1xuICAgICAgY3VycmVudCA9IG5ldyBNYXRyaXgoYWZmaW5lUGFyYW1ldGVycyk7XG4gICAgICB0aGlzLmFkZFRyYW5zZm9ybShjdXJyZW50KTtcblxuICAgICAgZWxlbWVudC5fYWRkUnVubmVyKHRoaXMpO1xuXG4gICAgICByZXR1cm4gbW9ycGhlci5kb25lKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0YXJnZXQobmV3VHJhbnNmb3Jtcykge1xuICAgICAgLy8gb25seSBnZXQgYSBuZXcgb3JpZ2luIGlmIGl0IGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgY2FsbFxuICAgICAgaWYgKChuZXdUcmFuc2Zvcm1zLm9yaWdpbiB8fCAnY2VudGVyJykudG9TdHJpbmcoKSAhPT0gKHRyYW5zZm9ybXMub3JpZ2luIHx8ICdjZW50ZXInKS50b1N0cmluZygpKSB7XG4gICAgICAgIG9yaWdpbiA9IGdldE9yaWdpbihuZXdUcmFuc2Zvcm1zLCBlbGVtZW50KTtcbiAgICAgIH0gLy8gb3ZlcndyaXRlIHRoZSBvbGQgdHJhbnNmb3JtYXRpb25zIHdpdGggdGhlIG5ldyBvbmVzXG5cblxuICAgICAgdHJhbnNmb3JtcyA9IHsgLi4ubmV3VHJhbnNmb3JtcyxcbiAgICAgICAgb3JpZ2luXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMucXVldWUoc2V0dXAsIHJ1biwgcmV0YXJnZXQsIHRydWUpO1xuICAgIHRoaXMuX2lzRGVjbGFyYXRpdmUgJiYgdGhpcy5fcmVtZW1iZXJNb3JwaGVyKCd0cmFuc2Zvcm0nLCBtb3JwaGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvLyBBbmltYXRhYmxlIHgtYXhpc1xuICB4KHgsIHJlbGF0aXZlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyKCd4JywgeCk7XG4gIH0sXG5cbiAgLy8gQW5pbWF0YWJsZSB5LWF4aXNcbiAgeSh5KSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyKCd5JywgeSk7XG4gIH0sXG5cbiAgZHgoeCA9IDApIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXJEZWx0YSgneCcsIHgpO1xuICB9LFxuXG4gIGR5KHkgPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyRGVsdGEoJ3knLCB5KTtcbiAgfSxcblxuICBkbW92ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuZHgoeCkuZHkoeSk7XG4gIH0sXG5cbiAgX3F1ZXVlTnVtYmVyRGVsdGEobWV0aG9kLCB0bykge1xuICAgIHRvID0gbmV3IFNWR051bWJlcih0byk7IC8vIFRyeSB0byBjaGFuZ2UgdGhlIHRhcmdldCBpZiB3ZSBoYXZlIHRoaXMgbWV0aG9kIGFscmVhZHkgcmVnaXN0ZXJkXG5cbiAgICBpZiAodGhpcy5fdHJ5UmV0YXJnZXQobWV0aG9kLCB0bykpIHJldHVybiB0aGlzOyAvLyBNYWtlIGEgbW9ycGhlciBhbmQgcXVldWUgdGhlIGFuaW1hdGlvblxuXG4gICAgY29uc3QgbW9ycGhlciA9IG5ldyBNb3JwaGFibGUodGhpcy5fc3RlcHBlcikudG8odG8pO1xuICAgIGxldCBmcm9tID0gbnVsbDtcbiAgICB0aGlzLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZyb20gPSB0aGlzLmVsZW1lbnQoKVttZXRob2RdKCk7XG4gICAgICBtb3JwaGVyLmZyb20oZnJvbSk7XG4gICAgICBtb3JwaGVyLnRvKGZyb20gKyB0byk7XG4gICAgfSwgZnVuY3Rpb24gKHBvcykge1xuICAgICAgdGhpcy5lbGVtZW50KClbbWV0aG9kXShtb3JwaGVyLmF0KHBvcykpO1xuICAgICAgcmV0dXJuIG1vcnBoZXIuZG9uZSgpO1xuICAgIH0sIGZ1bmN0aW9uIChuZXdUbykge1xuICAgICAgbW9ycGhlci50byhmcm9tICsgbmV3IFNWR051bWJlcihuZXdUbykpO1xuICAgIH0pOyAvLyBSZWdpc3RlciB0aGUgbW9ycGhlciBzbyB0aGF0IGlmIGl0IGlzIGNoYW5nZWQgYWdhaW4sIHdlIGNhbiByZXRhcmdldCBpdFxuXG4gICAgdGhpcy5fcmVtZW1iZXJNb3JwaGVyKG1ldGhvZCwgbW9ycGhlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfcXVldWVPYmplY3QobWV0aG9kLCB0bykge1xuICAgIC8vIFRyeSB0byBjaGFuZ2UgdGhlIHRhcmdldCBpZiB3ZSBoYXZlIHRoaXMgbWV0aG9kIGFscmVhZHkgcmVnaXN0ZXJkXG4gICAgaWYgKHRoaXMuX3RyeVJldGFyZ2V0KG1ldGhvZCwgdG8pKSByZXR1cm4gdGhpczsgLy8gTWFrZSBhIG1vcnBoZXIgYW5kIHF1ZXVlIHRoZSBhbmltYXRpb25cblxuICAgIGNvbnN0IG1vcnBoZXIgPSBuZXcgTW9ycGhhYmxlKHRoaXMuX3N0ZXBwZXIpLnRvKHRvKTtcbiAgICB0aGlzLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vcnBoZXIuZnJvbSh0aGlzLmVsZW1lbnQoKVttZXRob2RdKCkpO1xuICAgIH0sIGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHRoaXMuZWxlbWVudCgpW21ldGhvZF0obW9ycGhlci5hdChwb3MpKTtcbiAgICAgIHJldHVybiBtb3JwaGVyLmRvbmUoKTtcbiAgICB9KTsgLy8gUmVnaXN0ZXIgdGhlIG1vcnBoZXIgc28gdGhhdCBpZiBpdCBpcyBjaGFuZ2VkIGFnYWluLCB3ZSBjYW4gcmV0YXJnZXQgaXRcblxuICAgIHRoaXMuX3JlbWVtYmVyTW9ycGhlcihtZXRob2QsIG1vcnBoZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX3F1ZXVlTnVtYmVyKG1ldGhvZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVPYmplY3QobWV0aG9kLCBuZXcgU1ZHTnVtYmVyKHZhbHVlKSk7XG4gIH0sXG5cbiAgLy8gQW5pbWF0YWJsZSBjZW50ZXIgeC1heGlzXG4gIGN4KHgpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXIoJ2N4JywgeCk7XG4gIH0sXG5cbiAgLy8gQW5pbWF0YWJsZSBjZW50ZXIgeS1heGlzXG4gIGN5KHkpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXIoJ2N5JywgeSk7XG4gIH0sXG5cbiAgLy8gQWRkIGFuaW1hdGFibGUgbW92ZVxuICBtb3ZlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy54KHgpLnkoeSk7XG4gIH0sXG5cbiAgLy8gQWRkIGFuaW1hdGFibGUgY2VudGVyXG4gIGNlbnRlcih4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuY3goeCkuY3koeSk7XG4gIH0sXG5cbiAgLy8gQWRkIGFuaW1hdGFibGUgc2l6ZVxuICBzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAvLyBhbmltYXRlIGJib3ggYmFzZWQgc2l6ZSBmb3IgYWxsIG90aGVyIGVsZW1lbnRzXG4gICAgbGV0IGJveDtcblxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgYm94ID0gdGhpcy5fZWxlbWVudC5iYm94KCk7XG4gICAgfVxuXG4gICAgaWYgKCF3aWR0aCkge1xuICAgICAgd2lkdGggPSBib3gud2lkdGggLyBib3guaGVpZ2h0ICogaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICBoZWlnaHQgPSBib3guaGVpZ2h0IC8gYm94LndpZHRoICogd2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud2lkdGgod2lkdGgpLmhlaWdodChoZWlnaHQpO1xuICB9LFxuXG4gIC8vIEFkZCBhbmltYXRhYmxlIHdpZHRoXG4gIHdpZHRoKHdpZHRoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyKCd3aWR0aCcsIHdpZHRoKTtcbiAgfSxcblxuICAvLyBBZGQgYW5pbWF0YWJsZSBoZWlnaHRcbiAgaGVpZ2h0KGhlaWdodCkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlcignaGVpZ2h0JywgaGVpZ2h0KTtcbiAgfSxcblxuICAvLyBBZGQgYW5pbWF0YWJsZSBwbG90XG4gIHBsb3QoYSwgYiwgYywgZCkge1xuICAgIC8vIExpbmVzIGNhbiBiZSBwbG90dGVkIHdpdGggNCBhcmd1bWVudHNcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgcmV0dXJuIHRoaXMucGxvdChbYSwgYiwgYywgZF0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90cnlSZXRhcmdldCgncGxvdCcsIGEpKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBtb3JwaGVyID0gbmV3IE1vcnBoYWJsZSh0aGlzLl9zdGVwcGVyKS50eXBlKHRoaXMuX2VsZW1lbnQuTW9ycGhBcnJheSkudG8oYSk7XG4gICAgdGhpcy5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICBtb3JwaGVyLmZyb20odGhpcy5fZWxlbWVudC5hcnJheSgpKTtcbiAgICB9LCBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnBsb3QobW9ycGhlci5hdChwb3MpKTtcblxuICAgICAgcmV0dXJuIG1vcnBoZXIuZG9uZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVtZW1iZXJNb3JwaGVyKCdwbG90JywgbW9ycGhlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvLyBBZGQgbGVhZGluZyBtZXRob2RcbiAgbGVhZGluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlcignbGVhZGluZycsIHZhbHVlKTtcbiAgfSxcblxuICAvLyBBZGQgYW5pbWF0YWJsZSB2aWV3Ym94XG4gIHZpZXdib3goeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU9iamVjdCgndmlld2JveCcsIG5ldyBCb3goeCwgeSwgd2lkdGgsIGhlaWdodCkpO1xuICB9LFxuXG4gIHVwZGF0ZShvKSB7XG4gICAgaWYgKHR5cGVvZiBvICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHtcbiAgICAgICAgb2Zmc2V0OiBhcmd1bWVudHNbMF0sXG4gICAgICAgIGNvbG9yOiBhcmd1bWVudHNbMV0sXG4gICAgICAgIG9wYWNpdHk6IGFyZ3VtZW50c1syXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG8ub3BhY2l0eSAhPSBudWxsKSB0aGlzLmF0dHIoJ3N0b3Atb3BhY2l0eScsIG8ub3BhY2l0eSk7XG4gICAgaWYgKG8uY29sb3IgIT0gbnVsbCkgdGhpcy5hdHRyKCdzdG9wLWNvbG9yJywgby5jb2xvcik7XG4gICAgaWYgKG8ub2Zmc2V0ICE9IG51bGwpIHRoaXMuYXR0cignb2Zmc2V0Jywgby5vZmZzZXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn0pO1xuZXh0ZW5kKFJ1bm5lciwge1xuICByeCxcbiAgcnksXG4gIGZyb20sXG4gIHRvXG59KTtcbnJlZ2lzdGVyKFJ1bm5lciwgJ1J1bm5lcicpO1xuXG5jbGFzcyBTdmcgZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3N2ZycsIG5vZGUpLCBhdHRycyk7XG4gICAgdGhpcy5uYW1lc3BhY2UoKTtcbiAgfSAvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGRlZnMgZWxlbWVudFxuXG5cbiAgZGVmcygpIHtcbiAgICBpZiAoIXRoaXMuaXNSb290KCkpIHJldHVybiB0aGlzLnJvb3QoKS5kZWZzKCk7XG4gICAgcmV0dXJuIGFkb3B0KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCdkZWZzJykpIHx8IHRoaXMucHV0KG5ldyBEZWZzKCkpO1xuICB9XG5cbiAgaXNSb290KCkge1xuICAgIHJldHVybiAhdGhpcy5ub2RlLnBhcmVudE5vZGUgfHwgISh0aGlzLm5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIGdsb2JhbHMud2luZG93LlNWR0VsZW1lbnQpICYmIHRoaXMubm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lICE9PSAnI2RvY3VtZW50LWZyYWdtZW50JztcbiAgfSAvLyBBZGQgbmFtZXNwYWNlc1xuXG5cbiAgbmFtZXNwYWNlKCkge1xuICAgIGlmICghdGhpcy5pc1Jvb3QoKSkgcmV0dXJuIHRoaXMucm9vdCgpLm5hbWVzcGFjZSgpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoe1xuICAgICAgeG1sbnM6IHN2ZyxcbiAgICAgIHZlcnNpb246ICcxLjEnXG4gICAgfSkuYXR0cigneG1sbnM6eGxpbmsnLCB4bGluaywgeG1sbnMpLmF0dHIoJ3htbG5zOnN2Z2pzJywgc3ZnanMsIHhtbG5zKTtcbiAgfVxuXG4gIHJlbW92ZU5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKHtcbiAgICAgIHhtbG5zOiBudWxsLFxuICAgICAgdmVyc2lvbjogbnVsbFxuICAgIH0pLmF0dHIoJ3htbG5zOnhsaW5rJywgbnVsbCwgeG1sbnMpLmF0dHIoJ3htbG5zOnN2Z2pzJywgbnVsbCwgeG1sbnMpO1xuICB9IC8vIENoZWNrIGlmIHRoaXMgaXMgYSByb290IHN2Z1xuICAvLyBJZiBub3QsIGNhbGwgcm9vdCgpIGZyb20gdGhpcyBlbGVtZW50XG5cblxuICByb290KCkge1xuICAgIGlmICh0aGlzLmlzUm9vdCgpKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gc3VwZXIucm9vdCgpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBuZXN0ZWQgc3ZnIGRvY3VtZW50XG4gICAgbmVzdGVkOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFN2ZygpKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKFN2ZywgJ1N2ZycsIHRydWUpO1xuXG5jbGFzcyBTeW1ib2wgZXh0ZW5kcyBDb250YWluZXIge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdzeW1ib2wnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIHN5bWJvbDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTeW1ib2woKSk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihTeW1ib2wsICdTeW1ib2wnKTtcblxuZnVuY3Rpb24gcGxhaW4odGV4dCkge1xuICAvLyBjbGVhciBpZiBidWlsZCBtb2RlIGlzIGRpc2FibGVkXG4gIGlmICh0aGlzLl9idWlsZCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH0gLy8gY3JlYXRlIHRleHQgbm9kZVxuXG5cbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGdsb2JhbHMuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuICByZXR1cm4gdGhpcztcbn0gLy8gR2V0IGxlbmd0aCBvZiB0ZXh0IGVsZW1lbnRcblxuZnVuY3Rpb24gbGVuZ3RoKCkge1xuICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xufSAvLyBNb3ZlIG92ZXIgeC1heGlzXG4vLyBUZXh0IGlzIG1vdmVkIGJ5IGl0cyBib3VuZGluZyBib3hcbi8vIHRleHQtYW5jaG9yIGRvZXMgTk9UIG1hdHRlclxuXG5mdW5jdGlvbiB4JDEoeCwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgaWYgKHggPT0gbnVsbCkge1xuICAgIHJldHVybiBib3gueDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmF0dHIoJ3gnLCB0aGlzLmF0dHIoJ3gnKSArIHggLSBib3gueCk7XG59IC8vIE1vdmUgb3ZlciB5LWF4aXNcblxuZnVuY3Rpb24geSQxKHksIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGlmICh5ID09IG51bGwpIHtcbiAgICByZXR1cm4gYm94Lnk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5hdHRyKCd5JywgdGhpcy5hdHRyKCd5JykgKyB5IC0gYm94LnkpO1xufVxuZnVuY3Rpb24gbW92ZSQxKHgsIHksIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIHJldHVybiB0aGlzLngoeCwgYm94KS55KHksIGJveCk7XG59IC8vIE1vdmUgY2VudGVyIG92ZXIgeC1heGlzXG5cbmZ1bmN0aW9uIGN4KHgsIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGlmICh4ID09IG51bGwpIHtcbiAgICByZXR1cm4gYm94LmN4O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuYXR0cigneCcsIHRoaXMuYXR0cigneCcpICsgeCAtIGJveC5jeCk7XG59IC8vIE1vdmUgY2VudGVyIG92ZXIgeS1heGlzXG5cbmZ1bmN0aW9uIGN5KHksIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGlmICh5ID09IG51bGwpIHtcbiAgICByZXR1cm4gYm94LmN5O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuYXR0cigneScsIHRoaXMuYXR0cigneScpICsgeSAtIGJveC5jeSk7XG59XG5mdW5jdGlvbiBjZW50ZXIoeCwgeSwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgcmV0dXJuIHRoaXMuY3goeCwgYm94KS5jeSh5LCBib3gpO1xufVxuZnVuY3Rpb24gYXgoeCkge1xuICByZXR1cm4gdGhpcy5hdHRyKCd4JywgeCk7XG59XG5mdW5jdGlvbiBheSh5KSB7XG4gIHJldHVybiB0aGlzLmF0dHIoJ3knLCB5KTtcbn1cbmZ1bmN0aW9uIGFtb3ZlKHgsIHkpIHtcbiAgcmV0dXJuIHRoaXMuYXgoeCkuYXkoeSk7XG59IC8vIEVuYWJsZSAvIGRpc2FibGUgYnVpbGQgbW9kZVxuXG5mdW5jdGlvbiBidWlsZChidWlsZCkge1xuICB0aGlzLl9idWlsZCA9ICEhYnVpbGQ7XG4gIHJldHVybiB0aGlzO1xufVxuXG52YXIgdGV4dGFibGUgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgcGxhaW46IHBsYWluLFxuICBsZW5ndGg6IGxlbmd0aCxcbiAgeDogeCQxLFxuICB5OiB5JDEsXG4gIG1vdmU6IG1vdmUkMSxcbiAgY3g6IGN4LFxuICBjeTogY3ksXG4gIGNlbnRlcjogY2VudGVyLFxuICBheDogYXgsXG4gIGF5OiBheSxcbiAgYW1vdmU6IGFtb3ZlLFxuICBidWlsZDogYnVpbGRcbn07XG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBTaGFwZSB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3RleHQnLCBub2RlKSwgYXR0cnMpO1xuICAgIHRoaXMuZG9tLmxlYWRpbmcgPSBuZXcgU1ZHTnVtYmVyKDEuMyk7IC8vIHN0b3JlIGxlYWRpbmcgdmFsdWUgZm9yIHJlYnVpbGRpbmdcblxuICAgIHRoaXMuX3JlYnVpbGQgPSB0cnVlOyAvLyBlbmFibGUgYXV0b21hdGljIHVwZGF0aW5nIG9mIGR5IHZhbHVlc1xuXG4gICAgdGhpcy5fYnVpbGQgPSBmYWxzZTsgLy8gZGlzYWJsZSBidWlsZCBtb2RlIGZvciBhZGRpbmcgbXVsdGlwbGUgbGluZXNcbiAgfSAvLyBTZXQgLyBnZXQgbGVhZGluZ1xuXG5cbiAgbGVhZGluZyh2YWx1ZSkge1xuICAgIC8vIGFjdCBhcyBnZXR0ZXJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9tLmxlYWRpbmc7XG4gICAgfSAvLyBhY3QgYXMgc2V0dGVyXG5cblxuICAgIHRoaXMuZG9tLmxlYWRpbmcgPSBuZXcgU1ZHTnVtYmVyKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5yZWJ1aWxkKCk7XG4gIH0gLy8gUmVidWlsZCBhcHBlYXJhbmNlIHR5cGVcblxuXG4gIHJlYnVpbGQocmVidWlsZCkge1xuICAgIC8vIHN0b3JlIG5ldyByZWJ1aWxkIGZsYWcgaWYgZ2l2ZW5cbiAgICBpZiAodHlwZW9mIHJlYnVpbGQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5fcmVidWlsZCA9IHJlYnVpbGQ7XG4gICAgfSAvLyBkZWZpbmUgcG9zaXRpb24gb2YgYWxsIGxpbmVzXG5cblxuICAgIGlmICh0aGlzLl9yZWJ1aWxkKSB7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBibGFua0xpbmVPZmZzZXQgPSAwO1xuICAgICAgY29uc3QgbGVhZGluZyA9IHRoaXMuZG9tLmxlYWRpbmc7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSBnbG9iYWxzLndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJyk7XG4gICAgICAgIGNvbnN0IGR5ID0gbGVhZGluZyAqIG5ldyBTVkdOdW1iZXIoZm9udFNpemUpO1xuXG4gICAgICAgIGlmICh0aGlzLmRvbS5uZXdMaW5lZCkge1xuICAgICAgICAgIHRoaXMuYXR0cigneCcsIHNlbGYuYXR0cigneCcpKTtcblxuICAgICAgICAgIGlmICh0aGlzLnRleHQoKSA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgIGJsYW5rTGluZU9mZnNldCArPSBkeTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdHRyKCdkeScsIGkgPyBkeSArIGJsYW5rTGluZU9mZnNldCA6IDApO1xuICAgICAgICAgICAgYmxhbmtMaW5lT2Zmc2V0ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5maXJlKCdyZWJ1aWxkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gb3ZlcndyaXRlIG1ldGhvZCBmcm9tIHBhcmVudCB0byBzZXQgZGF0YSBwcm9wZXJseVxuXG5cbiAgc2V0RGF0YShvKSB7XG4gICAgdGhpcy5kb20gPSBvO1xuICAgIHRoaXMuZG9tLmxlYWRpbmcgPSBuZXcgU1ZHTnVtYmVyKG8ubGVhZGluZyB8fCAxLjMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNldCB0aGUgdGV4dCBjb250ZW50XG5cblxuICB0ZXh0KHRleHQpIHtcbiAgICAvLyBhY3QgYXMgZ2V0dGVyXG4gICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLm5vZGUuY2hpbGROb2RlcztcbiAgICAgIGxldCBmaXJzdExpbmUgPSAwO1xuICAgICAgdGV4dCA9ICcnO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgLy8gc2tpcCB0ZXh0UGF0aHMgLSB0aGV5IGFyZSBubyBsaW5lc1xuICAgICAgICBpZiAoY2hpbGRyZW5baV0ubm9kZU5hbWUgPT09ICd0ZXh0UGF0aCcpIHtcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgZmlyc3RMaW5lID0gMTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBhZGQgbmV3bGluZSBpZiBpdHMgbm90IHRoZSBmaXJzdCBjaGlsZCBhbmQgbmV3TGluZWQgaXMgc2V0IHRvIHRydWVcblxuXG4gICAgICAgIGlmIChpICE9PSBmaXJzdExpbmUgJiYgY2hpbGRyZW5baV0ubm9kZVR5cGUgIT09IDMgJiYgYWRvcHQoY2hpbGRyZW5baV0pLmRvbS5uZXdMaW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRleHQgKz0gJ1xcbic7XG4gICAgICAgIH0gLy8gYWRkIGNvbnRlbnQgb2YgdGhpcyBub2RlXG5cblxuICAgICAgICB0ZXh0ICs9IGNoaWxkcmVuW2ldLnRleHRDb250ZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9IC8vIHJlbW92ZSBleGlzdGluZyBjb250ZW50XG5cblxuICAgIHRoaXMuY2xlYXIoKS5idWlsZCh0cnVlKTtcblxuICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gY2FsbCBibG9ja1xuICAgICAgdGV4dC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdG9yZSB0ZXh0IGFuZCBtYWtlIHN1cmUgdGV4dCBpcyBub3QgYmxhbmtcbiAgICAgIHRleHQgPSAodGV4dCArICcnKS5zcGxpdCgnXFxuJyk7IC8vIGJ1aWxkIG5ldyBsaW5lc1xuXG4gICAgICBmb3IgKGxldCBqID0gMCwgamwgPSB0ZXh0Lmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcbiAgICAgICAgdGhpcy5uZXdMaW5lKHRleHRbal0pO1xuICAgICAgfVxuICAgIH0gLy8gZGlzYWJsZSBidWlsZCBtb2RlIGFuZCByZWJ1aWxkIGxpbmVzXG5cblxuICAgIHJldHVybiB0aGlzLmJ1aWxkKGZhbHNlKS5yZWJ1aWxkKCk7XG4gIH1cblxufVxuZXh0ZW5kKFRleHQsIHRleHRhYmxlKTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSB0ZXh0IGVsZW1lbnRcbiAgICB0ZXh0OiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAodGV4dCA9ICcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFRleHQoKSkudGV4dCh0ZXh0KTtcbiAgICB9KSxcbiAgICAvLyBDcmVhdGUgcGxhaW4gdGV4dCBlbGVtZW50XG4gICAgcGxhaW46IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh0ZXh0ID0gJycpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgVGV4dCgpKS5wbGFpbih0ZXh0KTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKFRleHQsICdUZXh0Jyk7XG5cbmNsYXNzIFRzcGFuIGV4dGVuZHMgU2hhcGUge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCd0c3BhbicsIG5vZGUpLCBhdHRycyk7XG4gICAgdGhpcy5fYnVpbGQgPSBmYWxzZTsgLy8gZGlzYWJsZSBidWlsZCBtb2RlIGZvciBhZGRpbmcgbXVsdGlwbGUgbGluZXNcbiAgfSAvLyBTaG9ydGN1dCBkeFxuXG5cbiAgZHgoZHgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdkeCcsIGR4KTtcbiAgfSAvLyBTaG9ydGN1dCBkeVxuXG5cbiAgZHkoZHkpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdkeScsIGR5KTtcbiAgfSAvLyBDcmVhdGUgbmV3IGxpbmVcblxuXG4gIG5ld0xpbmUoKSB7XG4gICAgLy8gbWFyayBuZXcgbGluZVxuICAgIHRoaXMuZG9tLm5ld0xpbmVkID0gdHJ1ZTsgLy8gZmV0Y2ggcGFyZW50XG5cbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5wYXJlbnQoKTsgLy8gZWFybHkgcmV0dXJuIGluIGNhc2Ugd2UgYXJlIG5vdCBpbiBhIHRleHQgZWxlbWVudFxuXG4gICAgaWYgKCEodGV4dCBpbnN0YW5jZW9mIFRleHQpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBpID0gdGV4dC5pbmRleCh0aGlzKTtcbiAgICBjb25zdCBmb250U2l6ZSA9IGdsb2JhbHMud2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5ub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKTtcbiAgICBjb25zdCBkeSA9IHRleHQuZG9tLmxlYWRpbmcgKiBuZXcgU1ZHTnVtYmVyKGZvbnRTaXplKTsgLy8gYXBwbHkgbmV3IHBvc2l0aW9uXG5cbiAgICByZXR1cm4gdGhpcy5keShpID8gZHkgOiAwKS5hdHRyKCd4JywgdGV4dC54KCkpO1xuICB9IC8vIFNldCB0ZXh0IGNvbnRlbnRcblxuXG4gIHRleHQodGV4dCkge1xuICAgIGlmICh0ZXh0ID09IG51bGwpIHJldHVybiB0aGlzLm5vZGUudGV4dENvbnRlbnQgKyAodGhpcy5kb20ubmV3TGluZWQgPyAnXFxuJyA6ICcnKTtcblxuICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5jbGVhcigpLmJ1aWxkKHRydWUpO1xuICAgICAgdGV4dC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgdGhpcy5idWlsZChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxhaW4odGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuZXh0ZW5kKFRzcGFuLCB0ZXh0YWJsZSk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBUc3Bhbjoge1xuICAgIHRzcGFuOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAodGV4dCA9ICcnKSB7XG4gICAgICBjb25zdCB0c3BhbiA9IG5ldyBUc3BhbigpOyAvLyBjbGVhciBpZiBidWlsZCBtb2RlIGlzIGRpc2FibGVkXG5cbiAgICAgIGlmICghdGhpcy5fYnVpbGQpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfSAvLyBhZGQgbmV3IHRzcGFuXG5cblxuICAgICAgcmV0dXJuIHRoaXMucHV0KHRzcGFuKS50ZXh0KHRleHQpO1xuICAgIH0pXG4gIH0sXG4gIFRleHQ6IHtcbiAgICBuZXdMaW5lOiBmdW5jdGlvbiAodGV4dCA9ICcnKSB7XG4gICAgICByZXR1cm4gdGhpcy50c3Bhbih0ZXh0KS5uZXdMaW5lKCk7XG4gICAgfVxuICB9XG59KTtcbnJlZ2lzdGVyKFRzcGFuLCAnVHNwYW4nKTtcblxuY2xhc3MgQ2lyY2xlIGV4dGVuZHMgU2hhcGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2NpcmNsZScsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxuICByYWRpdXMocikge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3InLCByKTtcbiAgfSAvLyBSYWRpdXMgeCB2YWx1ZVxuXG5cbiAgcngocngpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdyJywgcngpO1xuICB9IC8vIEFsaWFzIHJhZGl1cyB4IHZhbHVlXG5cblxuICByeShyeSkge1xuICAgIHJldHVybiB0aGlzLnJ4KHJ5KTtcbiAgfVxuXG4gIHNpemUoc2l6ZSkge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cyhuZXcgU1ZHTnVtYmVyKHNpemUpLmRpdmlkZSgyKSk7XG4gIH1cblxufVxuZXh0ZW5kKENpcmNsZSwge1xuICB4OiB4JDMsXG4gIHk6IHkkMyxcbiAgY3g6IGN4JDEsXG4gIGN5OiBjeSQxLFxuICB3aWR0aDogd2lkdGgkMixcbiAgaGVpZ2h0OiBoZWlnaHQkMlxufSk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgY2lyY2xlIGVsZW1lbnRcbiAgICBjaXJjbGU6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uIChzaXplID0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBDaXJjbGUoKSkuc2l6ZShzaXplKS5tb3ZlKDAsIDApO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoQ2lyY2xlLCAnQ2lyY2xlJyk7XG5cbmNsYXNzIENsaXBQYXRoIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdjbGlwUGF0aCcsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gVW5jbGlwIGFsbCBjbGlwcGVkIGVsZW1lbnRzIGFuZCByZW1vdmUgaXRzZWxmXG5cblxuICByZW1vdmUoKSB7XG4gICAgLy8gdW5jbGlwIGFsbCB0YXJnZXRzXG4gICAgdGhpcy50YXJnZXRzKCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLnVuY2xpcCgpO1xuICAgIH0pOyAvLyByZW1vdmUgY2xpcFBhdGggZnJvbSBwYXJlbnRcblxuICAgIHJldHVybiBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIGJhc2VGaW5kKCdzdmcgW2NsaXAtcGF0aCo9XCInICsgdGhpcy5pZCgpICsgJ1wiXScpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBjbGlwcGluZyBlbGVtZW50XG4gICAgY2xpcDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLnB1dChuZXcgQ2xpcFBhdGgoKSk7XG4gICAgfSlcbiAgfSxcbiAgRWxlbWVudDoge1xuICAgIC8vIERpc3RyaWJ1dGUgY2xpcFBhdGggdG8gc3ZnIGVsZW1lbnRcbiAgICBjbGlwcGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlKCdjbGlwLXBhdGgnKTtcbiAgICB9LFxuXG4gICAgY2xpcFdpdGgoZWxlbWVudCkge1xuICAgICAgLy8gdXNlIGdpdmVuIGNsaXAgb3IgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgY29uc3QgY2xpcHBlciA9IGVsZW1lbnQgaW5zdGFuY2VvZiBDbGlwUGF0aCA/IGVsZW1lbnQgOiB0aGlzLnBhcmVudCgpLmNsaXAoKS5hZGQoZWxlbWVudCk7IC8vIGFwcGx5IG1hc2tcblxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignY2xpcC1wYXRoJywgJ3VybChcIiMnICsgY2xpcHBlci5pZCgpICsgJ1wiKScpO1xuICAgIH0sXG5cbiAgICAvLyBVbmNsaXAgZWxlbWVudFxuICAgIHVuY2xpcCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2NsaXAtcGF0aCcsIG51bGwpO1xuICAgIH1cblxuICB9XG59KTtcbnJlZ2lzdGVyKENsaXBQYXRoLCAnQ2xpcFBhdGgnKTtcblxuY2xhc3MgRm9yZWlnbk9iamVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2ZvcmVpZ25PYmplY3QnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIGZvcmVpZ25PYmplY3Q6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IEZvcmVpZ25PYmplY3QoKSkuc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKEZvcmVpZ25PYmplY3QsICdGb3JlaWduT2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGRtb3ZlKGR4LCBkeSkge1xuICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICBsZXQgYmJveDsgLy8gV2UgaGF2ZSB0byB3cmFwIHRoaXMgZm9yIGVsZW1lbnRzIHRoYXQgZG9udCBoYXZlIGEgYmJveFxuICAgIC8vIGUuZy4gdGl0bGUgYW5kIG90aGVyIGRlc2NyaXB0aXZlIGVsZW1lbnRzXG5cbiAgICB0cnkge1xuICAgICAgLy8gR2V0IHRoZSBjaGlsZHMgYmJveFxuICAgICAgYmJveCA9IGNoaWxkLmJib3goKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBHZXQgY2hpbGRzIG1hdHJpeFxuXG5cbiAgICBjb25zdCBtID0gbmV3IE1hdHJpeChjaGlsZCk7IC8vIFRyYW5zbGF0ZSBjaGlsZHMgbWF0cml4IGJ5IGFtb3VudCBhbmRcbiAgICAvLyB0cmFuc2Zvcm0gaXQgYmFjayBpbnRvIHBhcmVudHMgc3BhY2VcblxuICAgIGNvbnN0IG1hdHJpeCA9IG0udHJhbnNsYXRlKGR4LCBkeSkudHJhbnNmb3JtKG0uaW52ZXJzZSgpKTsgLy8gQ2FsY3VsYXRlIG5ldyB4IGFuZCB5IGZyb20gb2xkIGJveFxuXG4gICAgY29uc3QgcCA9IG5ldyBQb2ludChiYm94LngsIGJib3gueSkudHJhbnNmb3JtKG1hdHJpeCk7IC8vIE1vdmUgZWxlbWVudFxuXG4gICAgY2hpbGQubW92ZShwLngsIHAueSk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGR4KGR4KSB7XG4gIHJldHVybiB0aGlzLmRtb3ZlKGR4LCAwKTtcbn1cbmZ1bmN0aW9uIGR5KGR5KSB7XG4gIHJldHVybiB0aGlzLmRtb3ZlKDAsIGR5KTtcbn1cbmZ1bmN0aW9uIGhlaWdodChoZWlnaHQsIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGlmIChoZWlnaHQgPT0gbnVsbCkgcmV0dXJuIGJveC5oZWlnaHQ7XG4gIHJldHVybiB0aGlzLnNpemUoYm94LndpZHRoLCBoZWlnaHQsIGJveCk7XG59XG5mdW5jdGlvbiBtb3ZlKHggPSAwLCB5ID0gMCwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgY29uc3QgZHggPSB4IC0gYm94Lng7XG4gIGNvbnN0IGR5ID0geSAtIGJveC55O1xuICByZXR1cm4gdGhpcy5kbW92ZShkeCwgZHkpO1xufVxuZnVuY3Rpb24gc2l6ZSh3aWR0aCwgaGVpZ2h0LCBib3ggPSB0aGlzLmJib3goKSkge1xuICBjb25zdCBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0LCBib3gpO1xuICBjb25zdCBzY2FsZVggPSBwLndpZHRoIC8gYm94LndpZHRoO1xuICBjb25zdCBzY2FsZVkgPSBwLmhlaWdodCAvIGJveC5oZWlnaHQ7XG4gIHRoaXMuY2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xuICAgIGNvbnN0IG8gPSBuZXcgUG9pbnQoYm94KS50cmFuc2Zvcm0obmV3IE1hdHJpeChjaGlsZCkuaW52ZXJzZSgpKTtcbiAgICBjaGlsZC5zY2FsZShzY2FsZVgsIHNjYWxlWSwgby54LCBvLnkpO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiB3aWR0aCh3aWR0aCwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgaWYgKHdpZHRoID09IG51bGwpIHJldHVybiBib3gud2lkdGg7XG4gIHJldHVybiB0aGlzLnNpemUod2lkdGgsIGJveC5oZWlnaHQsIGJveCk7XG59XG5mdW5jdGlvbiB4KHgsIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGlmICh4ID09IG51bGwpIHJldHVybiBib3gueDtcbiAgcmV0dXJuIHRoaXMubW92ZSh4LCBib3gueSwgYm94KTtcbn1cbmZ1bmN0aW9uIHkoeSwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgaWYgKHkgPT0gbnVsbCkgcmV0dXJuIGJveC55O1xuICByZXR1cm4gdGhpcy5tb3ZlKGJveC54LCB5LCBib3gpO1xufVxuXG52YXIgY29udGFpbmVyR2VvbWV0cnkgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZG1vdmU6IGRtb3ZlLFxuICBkeDogZHgsXG4gIGR5OiBkeSxcbiAgaGVpZ2h0OiBoZWlnaHQsXG4gIG1vdmU6IG1vdmUsXG4gIHNpemU6IHNpemUsXG4gIHdpZHRoOiB3aWR0aCxcbiAgeDogeCxcbiAgeTogeVxufTtcblxuY2xhc3MgRyBleHRlbmRzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnZycsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxufVxuZXh0ZW5kKEcsIGNvbnRhaW5lckdlb21ldHJ5KTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBhIGdyb3VwIGVsZW1lbnRcbiAgICBncm91cDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBHKCkpO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoRywgJ0cnKTtcblxuY2xhc3MgQSBleHRlbmRzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnYScsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gTGluayB0YXJnZXQgYXR0cmlidXRlXG5cblxuICB0YXJnZXQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndGFyZ2V0JywgdGFyZ2V0KTtcbiAgfSAvLyBMaW5rIHVybFxuXG5cbiAgdG8odXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaHJlZicsIHVybCwgeGxpbmspO1xuICB9XG5cbn1cbmV4dGVuZChBLCBjb250YWluZXJHZW9tZXRyeSk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgYSBoeXBlcmxpbmsgZWxlbWVudFxuICAgIGxpbms6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgQSgpKS50byh1cmwpO1xuICAgIH0pXG4gIH0sXG4gIEVsZW1lbnQ6IHtcbiAgICB1bmxpbmsoKSB7XG4gICAgICBjb25zdCBsaW5rID0gdGhpcy5saW5rZXIoKTtcbiAgICAgIGlmICghbGluaykgcmV0dXJuIHRoaXM7XG4gICAgICBjb25zdCBwYXJlbnQgPSBsaW5rLnBhcmVudCgpO1xuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnQuaW5kZXgobGluayk7XG4gICAgICBwYXJlbnQuYWRkKHRoaXMsIGluZGV4KTtcbiAgICAgIGxpbmsucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbGlua1RvKHVybCkge1xuICAgICAgLy8gcmV1c2Ugb2xkIGxpbmsgaWYgcG9zc2libGVcbiAgICAgIGxldCBsaW5rID0gdGhpcy5saW5rZXIoKTtcblxuICAgICAgaWYgKCFsaW5rKSB7XG4gICAgICAgIGxpbmsgPSBuZXcgQSgpO1xuICAgICAgICB0aGlzLndyYXAobGluayk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHVybC5jYWxsKGxpbmssIGxpbmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluay50byh1cmwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbGlua2VyKCkge1xuICAgICAgY29uc3QgbGluayA9IHRoaXMucGFyZW50KCk7XG5cbiAgICAgIGlmIChsaW5rICYmIGxpbmsubm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScpIHtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG59KTtcbnJlZ2lzdGVyKEEsICdBJyk7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBDb250YWluZXIge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdtYXNrJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBVbm1hc2sgYWxsIG1hc2tlZCBlbGVtZW50cyBhbmQgcmVtb3ZlIGl0c2VsZlxuXG5cbiAgcmVtb3ZlKCkge1xuICAgIC8vIHVubWFzayBhbGwgdGFyZ2V0c1xuICAgIHRoaXMudGFyZ2V0cygpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC51bm1hc2soKTtcbiAgICB9KTsgLy8gcmVtb3ZlIG1hc2sgZnJvbSBwYXJlbnRcblxuICAgIHJldHVybiBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIGJhc2VGaW5kKCdzdmcgW21hc2sqPVwiJyArIHRoaXMuaWQoKSArICdcIl0nKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICBtYXNrOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkucHV0KG5ldyBNYXNrKCkpO1xuICAgIH0pXG4gIH0sXG4gIEVsZW1lbnQ6IHtcbiAgICAvLyBEaXN0cmlidXRlIG1hc2sgdG8gc3ZnIGVsZW1lbnRcbiAgICBtYXNrZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2UoJ21hc2snKTtcbiAgICB9LFxuXG4gICAgbWFza1dpdGgoZWxlbWVudCkge1xuICAgICAgLy8gdXNlIGdpdmVuIG1hc2sgb3IgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgY29uc3QgbWFza2VyID0gZWxlbWVudCBpbnN0YW5jZW9mIE1hc2sgPyBlbGVtZW50IDogdGhpcy5wYXJlbnQoKS5tYXNrKCkuYWRkKGVsZW1lbnQpOyAvLyBhcHBseSBtYXNrXG5cbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ21hc2snLCAndXJsKFwiIycgKyBtYXNrZXIuaWQoKSArICdcIiknKTtcbiAgICB9LFxuXG4gICAgLy8gVW5tYXNrIGVsZW1lbnRcbiAgICB1bm1hc2soKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdtYXNrJywgbnVsbCk7XG4gICAgfVxuXG4gIH1cbn0pO1xucmVnaXN0ZXIoTWFzaywgJ01hc2snKTtcblxuY2xhc3MgU3RvcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3N0b3AnLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIGFkZCBjb2xvciBzdG9wc1xuXG5cbiAgdXBkYXRlKG8pIHtcbiAgICBpZiAodHlwZW9mIG8gPT09ICdudW1iZXInIHx8IG8gaW5zdGFuY2VvZiBTVkdOdW1iZXIpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIG9mZnNldDogYXJndW1lbnRzWzBdLFxuICAgICAgICBjb2xvcjogYXJndW1lbnRzWzFdLFxuICAgICAgICBvcGFjaXR5OiBhcmd1bWVudHNbMl1cbiAgICAgIH07XG4gICAgfSAvLyBzZXQgYXR0cmlidXRlc1xuXG5cbiAgICBpZiAoby5vcGFjaXR5ICE9IG51bGwpIHRoaXMuYXR0cignc3RvcC1vcGFjaXR5Jywgby5vcGFjaXR5KTtcbiAgICBpZiAoby5jb2xvciAhPSBudWxsKSB0aGlzLmF0dHIoJ3N0b3AtY29sb3InLCBvLmNvbG9yKTtcbiAgICBpZiAoby5vZmZzZXQgIT0gbnVsbCkgdGhpcy5hdHRyKCdvZmZzZXQnLCBuZXcgU1ZHTnVtYmVyKG8ub2Zmc2V0KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgR3JhZGllbnQ6IHtcbiAgICAvLyBBZGQgYSBjb2xvciBzdG9wXG4gICAgc3RvcDogZnVuY3Rpb24gKG9mZnNldCwgY29sb3IsIG9wYWNpdHkpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU3RvcCgpKS51cGRhdGUob2Zmc2V0LCBjb2xvciwgb3BhY2l0eSk7XG4gICAgfVxuICB9XG59KTtcbnJlZ2lzdGVyKFN0b3AsICdTdG9wJyk7XG5cbmZ1bmN0aW9uIGNzc1J1bGUoc2VsZWN0b3IsIHJ1bGUpIHtcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuICcnO1xuICBpZiAoIXJ1bGUpIHJldHVybiBzZWxlY3RvcjtcbiAgbGV0IHJldCA9IHNlbGVjdG9yICsgJ3snO1xuXG4gIGZvciAoY29uc3QgaSBpbiBydWxlKSB7XG4gICAgcmV0ICs9IHVuQ2FtZWxDYXNlKGkpICsgJzonICsgcnVsZVtpXSArICc7JztcbiAgfVxuXG4gIHJldCArPSAnfSc7XG4gIHJldHVybiByZXQ7XG59XG5cbmNsYXNzIFN0eWxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnc3R5bGUnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbiAgYWRkVGV4dCh3ID0gJycpIHtcbiAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgKz0gdztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZvbnQobmFtZSwgc3JjLCBwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGUoJ0Bmb250LWZhY2UnLCB7XG4gICAgICBmb250RmFtaWx5OiBuYW1lLFxuICAgICAgc3JjOiBzcmMsXG4gICAgICAuLi5wYXJhbXNcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bGUoc2VsZWN0b3IsIG9iaikge1xuICAgIHJldHVybiB0aGlzLmFkZFRleHQoY3NzUnVsZShzZWxlY3Rvciwgb2JqKSk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKCdEb20nLCB7XG4gIHN0eWxlKHNlbGVjdG9yLCBvYmopIHtcbiAgICByZXR1cm4gdGhpcy5wdXQobmV3IFN0eWxlKCkpLnJ1bGUoc2VsZWN0b3IsIG9iaik7XG4gIH0sXG5cbiAgZm9udGZhY2UobmFtZSwgc3JjLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQobmV3IFN0eWxlKCkpLmZvbnQobmFtZSwgc3JjLCBwYXJhbXMpO1xuICB9XG5cbn0pO1xucmVnaXN0ZXIoU3R5bGUsICdTdHlsZScpO1xuXG5jbGFzcyBUZXh0UGF0aCBleHRlbmRzIFRleHQge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCd0ZXh0UGF0aCcsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gcmV0dXJuIHRoZSBhcnJheSBvZiB0aGUgcGF0aCB0cmFjayBlbGVtZW50XG5cblxuICBhcnJheSgpIHtcbiAgICBjb25zdCB0cmFjayA9IHRoaXMudHJhY2soKTtcbiAgICByZXR1cm4gdHJhY2sgPyB0cmFjay5hcnJheSgpIDogbnVsbDtcbiAgfSAvLyBQbG90IHBhdGggaWYgYW55XG5cblxuICBwbG90KGQpIHtcbiAgICBjb25zdCB0cmFjayA9IHRoaXMudHJhY2soKTtcbiAgICBsZXQgcGF0aEFycmF5ID0gbnVsbDtcblxuICAgIGlmICh0cmFjaykge1xuICAgICAgcGF0aEFycmF5ID0gdHJhY2sucGxvdChkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCA9PSBudWxsID8gcGF0aEFycmF5IDogdGhpcztcbiAgfSAvLyBHZXQgdGhlIHBhdGggZWxlbWVudFxuXG5cbiAgdHJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlKCdocmVmJyk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgdGV4dFBhdGg6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh0ZXh0LCBwYXRoKSB7XG4gICAgICAvLyBDb252ZXJ0IHRleHQgdG8gaW5zdGFuY2UgaWYgbmVlZGVkXG4gICAgICBpZiAoISh0ZXh0IGluc3RhbmNlb2YgVGV4dCkpIHtcbiAgICAgICAgdGV4dCA9IHRoaXMudGV4dCh0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQucGF0aChwYXRoKTtcbiAgICB9KVxuICB9LFxuICBUZXh0OiB7XG4gICAgLy8gQ3JlYXRlIHBhdGggZm9yIHRleHQgdG8gcnVuIG9uXG4gICAgcGF0aDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHRyYWNrLCBpbXBvcnROb2RlcyA9IHRydWUpIHtcbiAgICAgIGNvbnN0IHRleHRQYXRoID0gbmV3IFRleHRQYXRoKCk7IC8vIGlmIHRyYWNrIGlzIGEgcGF0aCwgcmV1c2UgaXRcblxuICAgICAgaWYgKCEodHJhY2sgaW5zdGFuY2VvZiBQYXRoKSkge1xuICAgICAgICAvLyBjcmVhdGUgcGF0aCBlbGVtZW50XG4gICAgICAgIHRyYWNrID0gdGhpcy5kZWZzKCkucGF0aCh0cmFjayk7XG4gICAgICB9IC8vIGxpbmsgdGV4dFBhdGggdG8gcGF0aCBhbmQgYWRkIGNvbnRlbnRcblxuXG4gICAgICB0ZXh0UGF0aC5hdHRyKCdocmVmJywgJyMnICsgdHJhY2ssIHhsaW5rKTsgLy8gVHJhbnNwbGFudCBhbGwgbm9kZXMgZnJvbSB0ZXh0IHRvIHRleHRQYXRoXG5cbiAgICAgIGxldCBub2RlO1xuXG4gICAgICBpZiAoaW1wb3J0Tm9kZXMpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUgPSB0aGlzLm5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHRleHRQYXRoLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gYWRkIHRleHRQYXRoIGVsZW1lbnQgYXMgY2hpbGQgbm9kZSBhbmQgcmV0dXJuIHRleHRQYXRoXG5cblxuICAgICAgcmV0dXJuIHRoaXMucHV0KHRleHRQYXRoKTtcbiAgICB9KSxcblxuICAgIC8vIEdldCB0aGUgdGV4dFBhdGggY2hpbGRyZW5cbiAgICB0ZXh0UGF0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRPbmUoJ3RleHRQYXRoJyk7XG4gICAgfVxuXG4gIH0sXG4gIFBhdGg6IHtcbiAgICAvLyBjcmVhdGVzIGEgdGV4dFBhdGggZnJvbSB0aGlzIHBhdGhcbiAgICB0ZXh0OiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAodGV4dCkge1xuICAgICAgLy8gQ29udmVydCB0ZXh0IHRvIGluc3RhbmNlIGlmIG5lZWRlZFxuICAgICAgaWYgKCEodGV4dCBpbnN0YW5jZW9mIFRleHQpKSB7XG4gICAgICAgIHRleHQgPSBuZXcgVGV4dCgpLmFkZFRvKHRoaXMucGFyZW50KCkpLnRleHQodGV4dCk7XG4gICAgICB9IC8vIENyZWF0ZSB0ZXh0UGF0aCBmcm9tIHRleHQgYW5kIHBhdGggYW5kIHJldHVyblxuXG5cbiAgICAgIHJldHVybiB0ZXh0LnBhdGgodGhpcyk7XG4gICAgfSksXG5cbiAgICB0YXJnZXRzKCkge1xuICAgICAgcmV0dXJuIGJhc2VGaW5kKCdzdmcgdGV4dFBhdGgnKS5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAgIHJldHVybiAobm9kZS5hdHRyKCdocmVmJykgfHwgJycpLmluY2x1ZGVzKHRoaXMuaWQoKSk7XG4gICAgICB9KTsgLy8gRG9lcyBub3Qgd29yayBpbiBJRTExLiBVc2Ugd2hlbiBJRSBzdXBwb3J0IGlzIGRyb3BwZWRcbiAgICAgIC8vIHJldHVybiBiYXNlRmluZCgnc3ZnIHRleHRQYXRoWyp8aHJlZio9XCInICsgdGhpcy5pZCgpICsgJ1wiXScpXG4gICAgfVxuXG4gIH1cbn0pO1xuVGV4dFBhdGgucHJvdG90eXBlLk1vcnBoQXJyYXkgPSBQYXRoQXJyYXk7XG5yZWdpc3RlcihUZXh0UGF0aCwgJ1RleHRQYXRoJyk7XG5cbmNsYXNzIFVzZSBleHRlbmRzIFNoYXBlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCd1c2UnLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIFVzZSBlbGVtZW50IGFzIGEgcmVmZXJlbmNlXG5cblxuICB1c2UoZWxlbWVudCwgZmlsZSkge1xuICAgIC8vIFNldCBsaW5lZCBlbGVtZW50XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaHJlZicsIChmaWxlIHx8ICcnKSArICcjJyArIGVsZW1lbnQsIHhsaW5rKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgYSB1c2UgZWxlbWVudFxuICAgIHVzZTogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKGVsZW1lbnQsIGZpbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgVXNlKCkpLnVzZShlbGVtZW50LCBmaWxlKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKFVzZSwgJ1VzZScpO1xuXG4vKiBPcHRpb25hbCBNb2R1bGVzICovXG5jb25zdCBTVkcgPSBtYWtlSW5zdGFuY2U7XG5leHRlbmQoW1N2ZywgU3ltYm9sLCBJbWFnZSwgUGF0dGVybiwgTWFya2VyXSwgZ2V0TWV0aG9kc0Zvcigndmlld2JveCcpKTtcbmV4dGVuZChbTGluZSwgUG9seWxpbmUsIFBvbHlnb24sIFBhdGhdLCBnZXRNZXRob2RzRm9yKCdtYXJrZXInKSk7XG5leHRlbmQoVGV4dCwgZ2V0TWV0aG9kc0ZvcignVGV4dCcpKTtcbmV4dGVuZChQYXRoLCBnZXRNZXRob2RzRm9yKCdQYXRoJykpO1xuZXh0ZW5kKERlZnMsIGdldE1ldGhvZHNGb3IoJ0RlZnMnKSk7XG5leHRlbmQoW1RleHQsIFRzcGFuXSwgZ2V0TWV0aG9kc0ZvcignVHNwYW4nKSk7XG5leHRlbmQoW1JlY3QsIEVsbGlwc2UsIEdyYWRpZW50LCBSdW5uZXJdLCBnZXRNZXRob2RzRm9yKCdyYWRpdXMnKSk7XG5leHRlbmQoRXZlbnRUYXJnZXQsIGdldE1ldGhvZHNGb3IoJ0V2ZW50VGFyZ2V0JykpO1xuZXh0ZW5kKERvbSwgZ2V0TWV0aG9kc0ZvcignRG9tJykpO1xuZXh0ZW5kKEVsZW1lbnQsIGdldE1ldGhvZHNGb3IoJ0VsZW1lbnQnKSk7XG5leHRlbmQoU2hhcGUsIGdldE1ldGhvZHNGb3IoJ1NoYXBlJykpO1xuZXh0ZW5kKFtDb250YWluZXIsIEZyYWdtZW50XSwgZ2V0TWV0aG9kc0ZvcignQ29udGFpbmVyJykpO1xuZXh0ZW5kKEdyYWRpZW50LCBnZXRNZXRob2RzRm9yKCdHcmFkaWVudCcpKTtcbmV4dGVuZChSdW5uZXIsIGdldE1ldGhvZHNGb3IoJ1J1bm5lcicpKTtcbkxpc3QuZXh0ZW5kKGdldE1ldGhvZE5hbWVzKCkpO1xucmVnaXN0ZXJNb3JwaGFibGVUeXBlKFtTVkdOdW1iZXIsIENvbG9yLCBCb3gsIE1hdHJpeCwgU1ZHQXJyYXksIFBvaW50QXJyYXksIFBhdGhBcnJheSwgUG9pbnRdKTtcbm1ha2VNb3JwaGFibGUoKTtcblxuZXhwb3J0IHsgQSwgQW5pbWF0b3IsIFNWR0FycmF5IGFzIEFycmF5LCBCb3gsIENpcmNsZSwgQ2xpcFBhdGgsIENvbG9yLCBDb250YWluZXIsIENvbnRyb2xsZXIsIERlZnMsIERvbSwgRWFzZSwgRWxlbWVudCwgRWxsaXBzZSwgRXZlbnRUYXJnZXQsIEZvcmVpZ25PYmplY3QsIEZyYWdtZW50LCBHLCBHcmFkaWVudCwgSW1hZ2UsIExpbmUsIExpc3QsIE1hcmtlciwgTWFzaywgTWF0cml4LCBNb3JwaGFibGUsIE5vbk1vcnBoYWJsZSwgU1ZHTnVtYmVyIGFzIE51bWJlciwgT2JqZWN0QmFnLCBQSUQsIFBhdGgsIFBhdGhBcnJheSwgUGF0dGVybiwgUG9pbnQsIFBvaW50QXJyYXksIFBvbHlnb24sIFBvbHlsaW5lLCBRdWV1ZSwgUmVjdCwgUnVubmVyLCBTVkcsIFNoYXBlLCBTcHJpbmcsIFN0b3AsIFN0eWxlLCBTdmcsIFN5bWJvbCwgVGV4dCwgVGV4dFBhdGgsIFRpbWVsaW5lLCBUcmFuc2Zvcm1CYWcsIFRzcGFuLCBVc2UsIGFkb3B0LCBhc3NpZ25OZXdJZCwgY2xlYXJFdmVudHMsIGNyZWF0ZSwgZGVmYXVsdHMsIGRpc3BhdGNoLCBlYXNpbmcsIGVpZCwgZXh0ZW5kLCBiYXNlRmluZCBhcyBmaW5kLCBnZXRDbGFzcywgZ2V0RXZlbnRUYXJnZXQsIGdldEV2ZW50cywgZ2V0V2luZG93LCBtYWtlSW5zdGFuY2UsIG1ha2VNb3JwaGFibGUsIG1vY2tBZG9wdCwgbmFtZXNwYWNlcywgbm9kZU9yTmV3LCBvZmYsIG9uLCBwYXJzZXIsIHJlZ2V4LCByZWdpc3RlciwgcmVnaXN0ZXJNb3JwaGFibGVUeXBlLCByZWdpc3RlcldpbmRvdywgcmVzdG9yZVdpbmRvdywgcm9vdCwgc2F2ZVdpbmRvdywgdXRpbHMsIHdpbmRvd0V2ZW50cywgd2l0aFdpbmRvdywgd3JhcFdpdGhBdHRyQ2hlY2sgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN2Zy5lc20uanMubWFwXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiQHN2Z2RvdGpzL3N2Zy5qc1wiO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tIFwiQGdlb3JnZWRvZXNjb2RlL2dlbmVyYXRpdmUtdXRpbHNcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tICduaWNlLWNvbG9yLXBhbGV0dGVzJztcclxuXHJcbmxldCBudW1Sb3dzLCBudW1Db2xzLCBkcmF3LCBzcXVhcmVTaXplLCBwYWxldHRlO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKCkge1xyXG4gIC8vIFJlbW92ZSBTVkdcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHJlbmRlckdyaWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyR3JpZCgpIHtcclxuICBwYWxldHRlID0gcmFuZG9tKGNvbG9ycyk7XHJcbiAgc3F1YXJlU2l6ZSA9IDMwO1xyXG4gIG51bVJvd3MgPSByYW5kb20oNCwgOCwgdHJ1ZSk7XHJcbiAgbnVtQ29scyA9IHJhbmRvbSg0LCA4LCB0cnVlKTtcclxuXHJcbiAgZHJhdyA9IFNWRygpXHJcbiAgICAuYWRkVG8oXCIuY29udGFpbmVyXCIpXHJcbiAgICAuc2l6ZShcIjEwMCVcIiwgXCIxMDAlXCIpXHJcbiAgICAudmlld2JveChgMCAwICR7bnVtUm93cyAqIHNxdWFyZVNpemV9ICR7bnVtQ29scyAqIHNxdWFyZVNpemV9YCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm93czsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bUNvbHM7IGorKykge1xyXG4gICAgICBnZW5lcmF0ZUJsb2NrKGksIGopO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCbG9jayhpLCBqKSB7XHJcbiAgY29uc3QgeCA9IGkgKiBzcXVhcmVTaXplO1xyXG4gIGNvbnN0IHkgPSBqICogc3F1YXJlU2l6ZTtcclxuXHJcbiAgcmVuZGVyQmxvY2soeCwgeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJsb2NrKHgsIHkpIHtcclxuXHJcbiAgLy8gQ3JlYXRlIGdyb3VwIGVsZW1lbnRcclxuICBjb25zdCBncm91cCA9IGRyYXcuZ3JvdXAoKS5hZGRDbGFzcyhcImRyYXctYmxvY2tcIik7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmQgPSByYW5kb20ocGFsZXR0ZSk7XHJcblxyXG4gIC8vIERyYXcgU3F1YXJlXHJcbiAgZ3JvdXAucmVjdChzcXVhcmVTaXplLCBzcXVhcmVTaXplKS5maWxsKGJhY2tncm91bmQpLm1vdmUoeCwgeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgZ2VuZXJhdGVHcmlkKCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoKCdjbGljaycpLCBnZW5lcmF0ZUdyaWQpO1xyXG59XHJcblxyXG5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9