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

// dist/swizzle/index.js
var swizzle_exports = {};
__export(swizzle_exports, {
  EnableSwizzles: () => EnableSwizzles
});
module.exports = __toCommonJS(swizzle_exports);
var import_gl_matrix = require("gl-matrix");
var GLM_SWIZZLES_ENABLED_F32 = false;
function EnableSwizzles() {
  if (GLM_SWIZZLES_ENABLED_F32) {
    return;
  }
  const VEC2_SWIZZLES = ["xx", "xy", "yx", "yy", "xxx", "xxy", "xyx", "xyy", "yxx", "yxy", "yyx", "yyy", "xxxx", "xxxy", "xxyx", "xxyy", "xyxx", "xyxy", "xyyx", "xyyy", "yxxx", "yxxy", "yxyx", "yxyy", "yyxx", "yyxy", "yyyx", "yyyy", "rr", "rg", "gr", "gg", "rrr", "rrg", "rgr", "rgg", "grr", "grg", "ggr", "ggg", "rrrr", "rrrg", "rrgr", "rrgg", "rgrr", "rgrg", "rggr", "rggg", "grrr", "grrg", "grgr", "grgg", "ggrr", "ggrg", "gggr", "gggg"];
  const VEC3_SWIZZLES = ["xz", "yz", "zx", "zy", "zz", "xxz", "xyz", "xzx", "xzy", "xzz", "yxz", "yyz", "yzx", "yzy", "yzz", "zxx", "zxy", "zxz", "zyx", "zyy", "zyz", "zzx", "zzy", "zzz", "xxxz", "xxyz", "xxzx", "xxzy", "xxzz", "xyxz", "xyyz", "xyzx", "xyzy", "xyzz", "xzxx", "xzxy", "xzxz", "xzyx", "xzyy", "xzyz", "xzzx", "xzzy", "xzzz", "yxxz", "yxyz", "yxzx", "yxzy", "yxzz", "yyxz", "yyyz", "yyzx", "yyzy", "yyzz", "yzxx", "yzxy", "yzxz", "yzyx", "yzyy", "yzyz", "yzzx", "yzzy", "yzzz", "zxxx", "zxxy", "zxxz", "zxyx", "zxyy", "zxyz", "zxzx", "zxzy", "zxzz", "zyxx", "zyxy", "zyxz", "zyyx", "zyyy", "zyyz", "zyzx", "zyzy", "zyzz", "zzxx", "zzxy", "zzxz", "zzyx", "zzyy", "zzyz", "zzzx", "zzzy", "zzzz", "rb", "gb", "br", "bg", "bb", "rrb", "rgb", "rbr", "rbg", "rbb", "grb", "ggb", "gbr", "gbg", "gbb", "brr", "brg", "brb", "bgr", "bgg", "bgb", "bbr", "bbg", "bbb", "rrrb", "rrgb", "rrbr", "rrbg", "rrbb", "rgrb", "rggb", "rgbr", "rgbg", "rgbb", "rbrr", "rbrg", "rbrb", "rbgr", "rbgg", "rbgb", "rbbr", "rbbg", "rbbb", "grrb", "grgb", "grbr", "grbg", "grbb", "ggrb", "gggb", "ggbr", "ggbg", "ggbb", "gbrr", "gbrg", "gbrb", "gbgr", "gbgg", "gbgb", "gbbr", "gbbg", "gbbb", "brrr", "brrg", "brrb", "brgr", "brgg", "brgb", "brbr", "brbg", "brbb", "bgrr", "bgrg", "bgrb", "bggr", "bggg", "bggb", "bgbr", "bgbg", "bgbb", "bbrr", "bbrg", "bbrb", "bbgr", "bbgg", "bbgb", "bbbr", "bbbg", "bbbb"];
  const VEC4_SWIZZLES = ["xw", "yw", "zw", "wx", "wy", "wz", "ww", "xxw", "xyw", "xzw", "xwx", "xwy", "xwz", "xww", "yxw", "yyw", "yzw", "ywx", "ywy", "ywz", "yww", "zxw", "zyw", "zzw", "zwx", "zwy", "zwz", "zww", "wxx", "wxy", "wxz", "wxw", "wyx", "wyy", "wyz", "wyw", "wzx", "wzy", "wzz", "wzw", "wwx", "wwy", "wwz", "www", "xxxw", "xxyw", "xxzw", "xxwx", "xxwy", "xxwz", "xxww", "xyxw", "xyyw", "xyzw", "xywx", "xywy", "xywz", "xyww", "xzxw", "xzyw", "xzzw", "xzwx", "xzwy", "xzwz", "xzww", "xwxx", "xwxy", "xwxz", "xwxw", "xwyx", "xwyy", "xwyz", "xwyw", "xwzx", "xwzy", "xwzz", "xwzw", "xwwx", "xwwy", "xwwz", "xwww", "yxxw", "yxyw", "yxzw", "yxwx", "yxwy", "yxwz", "yxww", "yyxw", "yyyw", "yyzw", "yywx", "yywy", "yywz", "yyww", "yzxw", "yzyw", "yzzw", "yzwx", "yzwy", "yzwz", "yzww", "ywxx", "ywxy", "ywxz", "ywxw", "ywyx", "ywyy", "ywyz", "ywyw", "ywzx", "ywzy", "ywzz", "ywzw", "ywwx", "ywwy", "ywwz", "ywww", "zxxw", "zxyw", "zxzw", "zxwx", "zxwy", "zxwz", "zxww", "zyxw", "zyyw", "zyzw", "zywx", "zywy", "zywz", "zyww", "zzxw", "zzyw", "zzzw", "zzwx", "zzwy", "zzwz", "zzww", "zwxx", "zwxy", "zwxz", "zwxw", "zwyx", "zwyy", "zwyz", "zwyw", "zwzx", "zwzy", "zwzz", "zwzw", "zwwx", "zwwy", "zwwz", "zwww", "wxxx", "wxxy", "wxxz", "wxxw", "wxyx", "wxyy", "wxyz", "wxyw", "wxzx", "wxzy", "wxzz", "wxzw", "wxwx", "wxwy", "wxwz", "wxww", "wyxx", "wyxy", "wyxz", "wyxw", "wyyx", "wyyy", "wyyz", "wyyw", "wyzx", "wyzy", "wyzz", "wyzw", "wywx", "wywy", "wywz", "wyww", "wzxx", "wzxy", "wzxz", "wzxw", "wzyx", "wzyy", "wzyz", "wzyw", "wzzx", "wzzy", "wzzz", "wzzw", "wzwx", "wzwy", "wzwz", "wzww", "wwxx", "wwxy", "wwxz", "wwxw", "wwyx", "wwyy", "wwyz", "wwyw", "wwzx", "wwzy", "wwzz", "wwzw", "wwwx", "wwwy", "wwwz", "wwww", "ra", "ga", "ba", "ar", "ag", "ab", "aa", "rra", "rga", "rba", "rar", "rag", "rab", "raa", "gra", "gga", "gba", "gar", "gag", "gab", "gaa", "bra", "bga", "bba", "bar", "bag", "bab", "baa", "arr", "arg", "arb", "ara", "agr", "agg", "agb", "aga", "abr", "abg", "abb", "aba", "aar", "aag", "aab", "aaa", "rrra", "rrga", "rrba", "rrar", "rrag", "rrab", "rraa", "rgra", "rgga", "rgba", "rgar", "rgag", "rgab", "rgaa", "rbra", "rbga", "rbba", "rbar", "rbag", "rbab", "rbaa", "rarr", "rarg", "rarb", "rara", "ragr", "ragg", "ragb", "raga", "rabr", "rabg", "rabb", "raba", "raar", "raag", "raab", "raaa", "grra", "grga", "grba", "grar", "grag", "grab", "graa", "ggra", "ggga", "ggba", "ggar", "ggag", "ggab", "ggaa", "gbra", "gbga", "gbba", "gbar", "gbag", "gbab", "gbaa", "garr", "garg", "garb", "gara", "gagr", "gagg", "gagb", "gaga", "gabr", "gabg", "gabb", "gaba", "gaar", "gaag", "gaab", "gaaa", "brra", "brga", "brba", "brar", "brag", "brab", "braa", "bgra", "bgga", "bgba", "bgar", "bgag", "bgab", "bgaa", "bbra", "bbga", "bbba", "bbar", "bbag", "bbab", "bbaa", "barr", "barg", "barb", "bara", "bagr", "bagg", "bagb", "baga", "babr", "babg", "babb", "baba", "baar", "baag", "baab", "baaa", "arrr", "arrg", "arrb", "arra", "argr", "argg", "argb", "arga", "arbr", "arbg", "arbb", "arba", "arar", "arag", "arab", "araa", "agrr", "agrg", "agrb", "agra", "aggr", "aggg", "aggb", "agga", "agbr", "agbg", "agbb", "agba", "agar", "agag", "agab", "agaa", "abrr", "abrg", "abrb", "abra", "abgr", "abgg", "abgb", "abga", "abbr", "abbg", "abbb", "abba", "abar", "abag", "abab", "abaa", "aarr", "aarg", "aarb", "aara", "aagr", "aagg", "aagb", "aaga", "aabr", "aabg", "aabb", "aaba", "aaar", "aaag", "aaab", "aaaa"];
  const SWIZZLE_INDEX = {
    x: 0,
    r: 0,
    y: 1,
    g: 1,
    z: 2,
    b: 2,
    w: 3,
    a: 3
  };
  function getSwizzleImpl(swizzle) {
    switch (swizzle.length) {
      case 2:
        return function() {
          return new import_gl_matrix.Vec2(this[SWIZZLE_INDEX[swizzle[0]]], this[SWIZZLE_INDEX[swizzle[1]]]);
        };
      case 3:
        return function() {
          return new import_gl_matrix.Vec3(this[SWIZZLE_INDEX[swizzle[0]]], this[SWIZZLE_INDEX[swizzle[1]]], this[SWIZZLE_INDEX[swizzle[2]]]);
        };
      case 4:
        return function() {
          return new import_gl_matrix.Vec4(this[SWIZZLE_INDEX[swizzle[0]]], this[SWIZZLE_INDEX[swizzle[1]]], this[SWIZZLE_INDEX[swizzle[2]]], this[SWIZZLE_INDEX[swizzle[3]]]);
        };
    }
  }
  for (const swizzle of VEC2_SWIZZLES) {
    const impl = getSwizzleImpl(swizzle);
    Object.defineProperty(import_gl_matrix.Vec2.prototype, swizzle, {
      get: impl
    });
    Object.defineProperty(import_gl_matrix.Vec3.prototype, swizzle, {
      get: impl
    });
    Object.defineProperty(import_gl_matrix.Vec4.prototype, swizzle, {
      get: impl
    });
  }
  for (const swizzle of VEC3_SWIZZLES) {
    const impl = getSwizzleImpl(swizzle);
    Object.defineProperty(import_gl_matrix.Vec3.prototype, swizzle, {
      get: impl
    });
    Object.defineProperty(import_gl_matrix.Vec4.prototype, swizzle, {
      get: impl
    });
  }
  for (const swizzle of VEC4_SWIZZLES) {
    const impl = getSwizzleImpl(swizzle);
    Object.defineProperty(import_gl_matrix.Vec4.prototype, swizzle, {
      get: impl
    });
  }
  GLM_SWIZZLES_ENABLED_F32 = true;
}
//# sourceMappingURL=index.cjs.map
