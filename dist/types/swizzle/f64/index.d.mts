/**
 * Ambient module declarations for `gl-matrix/f64` (64-bit) swizzle extensions for vector classes.
 *
 * When swizzle accessors via {@link gl-matrix/swizzle/f64.EnableSwizzlesF64 | EnableSwizzlesF64} are enabled include
 * this sub-path export as a `side effect` import to add ambient module declarations for the additional accessors to
 * {@link gl-matrix/f64.Vec2 | Vec2} / {@link gl-matrix/f64.Vec3 | Vec3} / {@link gl-matrix/f64.Vec4 | Vec4}.
 *
 * To enable swizzling for the 64-bit variation of `gl-matrix` please see {@link gl-matrix/swizzle/f64}.
 *
 * ```js
 * import { Vec2 } from 'gl-matrix/f64';
 * import { EnableSwizzlesF64 } from 'gl-matrix/swizzle/f64';
 *
 * import 'gl-matrix/types/swizzle/f64';
 *
 * EnableSwizzlesF64();
 *
 * const vec = new Vec2(0, 1);
 *
 * // Swizzled instance - returns new Vec2(1, 0).
 * const vecSwizzled = vec.yx;
 * ```
 *
 * @packageDocumentation
 */

import { Vec2, Vec3, Vec4 } from 'gl-matrix/f64';

/**
 * Ambient module declarations for `gl-matrix/f64` (64-bit) swizzle extensions for vector classes.
 *
 * When swizzle accessors via {@link gl-matrix/swizzle/f64.EnableSwizzlesF64 | EnableSwizzlesF64} are enabled include
 * this sub-path export as a `side effect` import to add ambient module declarations for the additional accessors to
 * {@link gl-matrix/f64.Vec2 | Vec2} / {@link gl-matrix/f64.Vec3 | Vec3} / {@link gl-matrix/f64.Vec4 | Vec4}.
 *
 * To enable swizzling for the 64-bit variation of `gl-matrix` please see {@link gl-matrix/swizzle/f64}.
 *
 * ```js
 * import { Vec2 } from 'gl-matrix/f64';
 * import { EnableSwizzlesF64 } from 'gl-matrix/swizzle/f64';
 *
 * import 'gl-matrix/types/swizzle/f64';
 *
 * EnableSwizzlesF64();
 *
 * const vec = new Vec2(0, 1);
 *
 * // Swizzled instance - returns new Vec2(1, 0).
 * const vecSwizzled = vec.yx;
 * ```
 *
 * @packageDocumentation
 */

/**
 * A type alias for Vec2 (64-bit).
 * @hidden
 */
type Vec2Alias = Vec2;
/**
 * A type alias for Vec3 (64-bit).
 * @hidden
 */
type Vec3Alias = Vec3;
/**
 * A type alias for Vec4 (64-bit).
 * @hidden
 */
type Vec4Alias = Vec4;
declare module 'gl-matrix/f64' {
  /**
   * Vec2 swizzle extension accessors.
   */
  interface Vec2 {
    /** @return New instance of swizzled Vec2 */
    get xx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get xy(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yy(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get xxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyy(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get rr(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get rg(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get gr(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get gg(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get rrr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rrg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rgr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rgg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get grr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get grg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ggr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ggg(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get rrrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rggg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gggg(): Vec4Alias;
  }
  /**
   * Vec3 swizzle extension accessors.
   */
  interface Vec3 {
    /** @return New instance of swizzled Vec2 */
    get xx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get xy(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yy(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get xxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyy(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get rr(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get rg(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get gr(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get gg(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get rrr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rrg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rgr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rgg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get grr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get grg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ggr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ggg(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get rrrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rggg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gggg(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get xz(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yz(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get zx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get zy(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get zz(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get xxz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xzx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xzy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xzz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yzx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yzy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yzz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zxz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zyy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zyz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zzx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zzy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zzz(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzzz(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get rb(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get gb(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get br(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get bg(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get bb(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get rrb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rgb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rbr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rbg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rbb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get grb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ggb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gbr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gbg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gbb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get brr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get brg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get brb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bgr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bgg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bgb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bbr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bbg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bbb(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get rrrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rggb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gggb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bggg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bggb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbbb(): Vec4Alias;
  }
  /**
   * Vec4 swizzle extension accessors.
   */
  interface Vec4 {
    /** @return New instance of swizzled Vec2 */
    get xx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get xy(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yy(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get xxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyy(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get rr(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get rg(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get gr(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get gg(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get rrr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rrg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rgr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rgg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get grr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get grg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ggr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ggg(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get rrrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rggg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gggg(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get xz(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yz(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get zx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get zy(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get zz(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get xxz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xzx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xzy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xzz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yzx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yzy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yzz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zxz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zyy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zyz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zzx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zzy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zzz(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzzz(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get rb(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get gb(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get br(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get bg(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get bb(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get rrb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rgb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rbr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rbg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rbb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get grb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ggb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gbr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gbg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gbb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get brr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get brg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get brb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bgr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bgg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bgb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bbr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bbg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bbb(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get rrrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rggb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gggb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bggg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bggb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbbb(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get xw(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get yw(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get zw(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get wx(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get wy(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get wz(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get ww(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get xxw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xyw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xzw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xwx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xwy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xwz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get xww(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yxw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yyw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yzw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ywx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ywy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ywz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get yww(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zxw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zyw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zzw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zwx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zwy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zwz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get zww(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wxx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wxy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wxz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wxw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wyx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wyy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wyz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wyw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wzx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wzy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wzz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wzw(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wwx(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wwy(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get wwz(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get www(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get xxxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xxww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xywx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xywy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xywz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xyww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xzww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get xwww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yxww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yywx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yywy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yywz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yyww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get yzww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ywww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zxww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zywx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zywy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zywz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zyww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zzww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get zwww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wxww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wywx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wywy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wywz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wyww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wzww(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwxx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwxy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwxz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwxw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwyx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwyy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwyz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwyw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwzx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwzy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwzz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwzw(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwwx(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwwy(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwwz(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get wwww(): Vec4Alias;
    /** @return New instance of swizzled Vec2 */
    get ra(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get ga(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get ba(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get ar(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get ag(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get ab(): Vec2Alias;
    /** @return New instance of swizzled Vec2 */
    get aa(): Vec2Alias;
    /** @return New instance of swizzled Vec3 */
    get rra(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rga(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rba(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rar(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rag(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get rab(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get raa(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gra(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gga(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gba(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gar(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gag(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gab(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get gaa(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bra(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bga(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bba(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bar(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bag(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get bab(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get baa(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get arr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get arg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get arb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get ara(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get agr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get agg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get agb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get aga(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get abr(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get abg(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get abb(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get aba(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get aar(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get aag(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get aab(): Vec3Alias;
    /** @return New instance of swizzled Vec3 */
    get aaa(): Vec3Alias;
    /** @return New instance of swizzled Vec4 */
    get rrra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rrab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rraa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rgaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rbaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rarr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rarg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rarb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rara(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ragr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ragg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ragb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get raga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rabr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rabg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get rabb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get raba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get raar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get raag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get raab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get raaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get grab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get graa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get ggaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gbaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get garr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get garg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get garb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gara(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gagr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gagg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gagb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gaga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gabr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gabg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gabb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gaba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gaar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gaag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gaab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get gaaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get brab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get braa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bgaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bbaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get barr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get barg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get barb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bara(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bagr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bagg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get bagb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get baga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get babr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get babg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get babb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get baba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get baar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get baag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get baab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get baaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get argr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get argg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get argb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get arab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get araa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aggr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aggg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aggb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get agaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abrr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abrg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abrb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abra(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abgr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abgg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abgb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abbr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abbg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abbb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get abaa(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aarr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aarg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aarb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aara(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aagr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aagg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aagb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aaga(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aabr(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aabg(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aabb(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aaba(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aaar(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aaag(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aaab(): Vec4Alias;
    /** @return New instance of swizzled Vec4 */
    get aaaa(): Vec4Alias;
  }
}
