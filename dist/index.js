"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var c=q(function(G,l){
var g=require('@stdlib/strided-base-reinterpret-boolean/dist');function B(e,r,a,u,i,s,t){var x,n,o,v,f;if(e<=0)return i;for(x=g(i,0),n=!0,o=u,v=t,f=0;f<e;f++)n&&r[o]&&(n=!1),x[v]=n,o+=a,v+=s;return i}l.exports=B
});var j=q(function(H,d){
var y=require('@stdlib/strided-base-stride2offset/dist'),E=c();function h(e,r,a,u,i){var s=y(e,a),t=y(e,i);return E(e,r,a,s,u,i,t)}d.exports=h
});var _=q(function(I,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),w=c();k(m,"ndarray",w);R.exports=m
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),p,b=A(z(__dirname,"./native.js"));C(b)?p=D:p=b;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
