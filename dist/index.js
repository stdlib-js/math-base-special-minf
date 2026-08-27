"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(f){throw (r=0, f)}};};var n=s(function(q,u){
var a=require('@stdlib/math-base-assert-is-negative-zerof/dist'),t=require('@stdlib/math-base-assert-is-nanf/dist'),i=require('@stdlib/constants-float32-ninf/dist');function v(e,r){return t(e)||t(r)?NaN:e===i||r===i?i:e===r&&e===0?a(e)?e:r:e<r?e:r}u.exports=v
});var N=n();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
