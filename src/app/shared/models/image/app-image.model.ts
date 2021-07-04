/**
 * Interface for Image used in the entire application
 * 
 * ```ts
 * interface AppImageModel {
 *   src : string | null
 *   alt : string | null
 * }
 * ```
 *
 * @export
 * @interface AppImageModel
 */
export interface ImageModel {
  /**
   * Image source
   *
   * @type {(string | null)}
   * @memberof AppImageModel
   */
  src: string | null;

  /**
   * Image Alt text
   *
   * @type {(string | null)}
   * @memberof AppImageModel
   */
  alt: string | null;
}

/**
 * Stub for `ImageModel`
 * 
 * ```ts
 * const IMAGE_STUB: ImageModel = {
 *   src : null,
 *   alt : null
 * }
 * ```
 */
export const IMAGE_STUB: ImageModel = {
  src: null, alt: null
};
