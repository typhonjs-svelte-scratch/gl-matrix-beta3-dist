// gl-matrix - v4.0.0-beta.3 - A high performance matrix and vector library.
// @author Brandon Jones
// @author Colin MacKenzie IV
// @license MIT (https://github.com/toji/gl-matrix/blob/master/LICENSE.md)
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/classic/index.ts
var classic_exports = {};
__export(classic_exports, {
  mat2: () => import_gl_matrix.Mat2,
  mat2d: () => import_gl_matrix.Mat2d,
  mat3: () => import_gl_matrix.Mat3,
  mat4: () => import_gl_matrix.Mat4,
  quat: () => import_gl_matrix.Quat,
  quat2: () => import_gl_matrix.Quat2,
  vec2: () => import_gl_matrix.Vec2,
  vec3: () => import_gl_matrix.Vec3,
  vec4: () => import_gl_matrix.Vec4
});
module.exports = __toCommonJS(classic_exports);
var import_gl_matrix = require("gl-matrix");
//# sourceMappingURL=index.cjs.map
