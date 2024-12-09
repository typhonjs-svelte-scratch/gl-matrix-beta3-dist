/**
 * Provides optional utilities useful for working with `gl-matrix`.
 *
 * ```js
 * import { toDegree, toRadian } from 'gl-matrix/util';
 *
 * const rad = toRadian(180);
 * ```
 *
 * @packageDocumentation
 */

/**
 * Convert `radians` to `degrees`.
 *
 * @param value - Angle in `radians`.
 * @returns Angle in `degrees`.
 */
declare function toDegree(value: number): number;
/**
 * Convert `degrees` to `radians`.
 *
 * @param value - Angle in `degrees`.
 * @returns Angle in `radians`.
 */
declare function toRadian(value: number): number;

export { toDegree, toRadian };
