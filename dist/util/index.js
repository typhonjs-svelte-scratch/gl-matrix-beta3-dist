// gl-matrix - v4.0.0-beta.3 - A high performance matrix and vector library.
// @author Brandon Jones
// @author Colin MacKenzie IV
// @license MIT (https://github.com/toji/gl-matrix/blob/master/LICENSE.md)

// src/util/angleConversion.ts
var GLM_DEG_TO_RAD = Math.PI / 180;
var GLM_RAD_TO_DEG = 180 / Math.PI;
function toDegree(value) {
  return value * GLM_RAD_TO_DEG;
}
function toRadian(value) {
  return value * GLM_DEG_TO_RAD;
}
export {
  toDegree,
  toRadian
};
//# sourceMappingURL=index.js.map
