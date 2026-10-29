// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.3-esm/index.mjs";function s(e,r,s,n,d,i,o){var a,m,f,l,p;if(e<=0)return d;for(a=t(d,0),m=!0,f=n,l=o,p=0;p<e;p++)m&&r[f]&&(m=!1),a[l]=m,f+=s,l+=i;return d}function n(e,t,n,d,i){return s(e,t,n,r(e,n),d,i,r(e,i))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
