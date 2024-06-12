// glMatrix - v4.0.0-beta.3
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

// dist/util/index.js
var util_exports = {};
__export(util_exports, {
  toDegree: () => toDegree,
  toRadian: () => toRadian
});
module.exports = __toCommonJS(util_exports);

// dist/util/angleConversion.js
var GLM_DEG_TO_RAD = Math.PI / 180;
var GLM_RAD_TO_DEG = 180 / Math.PI;
function toDegree(value) {
  return value * GLM_RAD_TO_DEG;
}
function toRadian(value) {
  return value * GLM_DEG_TO_RAD;
}
//# sourceMappingURL=index.cjs.map
