"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=f(function(o,u){
var s=require('@stdlib/math-base-assert-is-negative-zerof/dist'),t=require('@stdlib/math-base-assert-is-nanf/dist'),i=require('@stdlib/constants-float32-ninf/dist');function a(e,r){return t(e)||t(r)?NaN:e===i||r===i?i:e===r&&e===0?s(e)?e:r:e<r?e:r}u.exports=a
});var v=n();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
