// glMatrix - v4.0.0-beta.3
/**
 * Ambient module declarations for `gl-matrix` (32-bit) swizzle extensions for vector classes.
 *
 * When swizzle accessors via {@link gl-matrix/swizzle.EnableSwizzles | EnableSwizzles} are enabled include this
 * sub-path export as a `side effect` import to add ambient module declarations for the additional accessors to
 * {@link gl-matrix.Vec2 | Vec2} / {@link gl-matrix.Vec3 | Vec3} / {@link gl-matrix.Vec4 | Vec4}
 *
 * To enable swizzling for the 32-bit variation of `gl-matrix` please see {@link gl-matrix/swizzle}.
 *
 * ```js
 * import { Vec2 } from 'gl-matrix';
 * import { EnableSwizzles } from 'gl-matrix/swizzle';
 *
 * import 'gl-matrix/types/swizzle';
 *
 * EnableSwizzles();
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