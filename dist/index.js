"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=q(function(G,l){
var g=require('@stdlib/strided-base-reinterpret-boolean/dist');function B(r,e,i,u,a,s,t){var x,n,o,v,f;if(r<=0)return a;for(x=g(a,0),n=!0,o=u,v=t,f=0;f<r;f++)n&&e[o]&&(n=!1),x[v]=n,o+=i,v+=s;return a}l.exports=B
});var j=q(function(H,d){
var y=require('@stdlib/strided-base-stride2offset/dist'),E=c();function h(r,e,i,u,a){var s=y(r,i),t=y(r,a);return E(r,e,i,s,u,a,t)}d.exports=h
});var _=q(function(I,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),w=c();k(m,"ndarray",w);R.exports=m
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),p,b=A(z(__dirname,"./native.js"));C(b)?p=D:p=b;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
