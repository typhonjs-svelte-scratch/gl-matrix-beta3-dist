// glMatrix - v4.0.0-beta.3
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
export {};
//# sourceMappingURL=index.js.map