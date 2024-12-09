/**
 * To enable additional swizzle accessors for vector classes (32-bit) invoke the {@link EnableSwizzles} function from
 * the `gl-matrix/swizzle` sub-path export. To enable ambient module declarations for IDE / Typescript support please
 * see {@link gl-matrix/types/swizzle}.
 *
 * To enable swizzling for the 64-bit variation of `gl-matrix` please see {@link gl-matrix/swizzle/f64}.
 *
 * @example
 * ```ts
 * import { Vec3 } from 'gl-matrix';
 * import { EnableSwizzles } from 'gl-matrix/swizzle';
 *
 * EnableSwizzles();
 *
 * const vec = new Vec3(0, 1, 2);
 * const vecSwizzled = vec.zyx; // Returns a new Vec3(2, 1, 0).
 * ```
 *
 * @packageDocumentation
 */

/**
 * To enable additional swizzle accessors for vector classes (32-bit) invoke the {@link EnableSwizzles} function from
 * the `gl-matrix/swizzle` sub-path export. To enable ambient module declarations for IDE / Typescript support please
 * see {@link gl-matrix/types/swizzle}.
 *
 * To enable swizzling for the 64-bit variation of `gl-matrix` please see {@link gl-matrix/swizzle/f64}.
 *
 * @example
 * ```ts
 * import { Vec3 } from 'gl-matrix';
 * import { EnableSwizzles } from 'gl-matrix/swizzle';
 *
 * EnableSwizzles();
 *
 * const vec = new Vec3(0, 1, 2);
 * const vecSwizzled = vec.zyx; // Returns a new Vec3(2, 1, 0).
 * ```
 *
 * @packageDocumentation
 */
/**
 * Enables Swizzle operations on {@link gl-matrix.Vec2 | Vec2} / {@link gl-matrix.Vec3 | Vec3} /
 * {@link gl-matrix.Vec4 | Vec4} types from {@link gl-matrix | gl-matrix} (32-bit).
 *
 * Swizzle operations are performed by using the `.` operator in conjunction with any combination
 * of between two and four component names, either from the set `xyzw` or `rgbw` (though not intermixed).
 * They return a new vector with the same number of components as specified in the swizzle attribute.
 *
 * @example
 * ```js
 * import { Vec3, EnableSwizzles } from 'gl-matrix';
 *
 * EnableSwizzles();
 *
 * let v = new Vec3(0, 1, 2);
 *
 * v.yx; // returns new Vec2(1, 0)
 * v.xzy; // returns new Vec3(0, 2, 1)
 * v.zyxz; // returns new Vec4(2, 1, 0, 2)
 *
 * v.rgb; // returns new Vec3(0, 1, 2)
 * v.rbg; // returns new Vec3(0, 2, 1)
 * v.gg; // returns new Vec2(1, 1)
 * ```
 */
declare function EnableSwizzles(): void;

export { EnableSwizzles };
