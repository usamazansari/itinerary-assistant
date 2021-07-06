/**
 * Interface for Image used in the entire application
 * 
 * ```ts
 * interface ImageModel {
 *   src : string | null;
 *   alt : string | null;
 * }
 * ```
 *
 * @export
 * @interface ImageModel
 */
export interface ImageModel {
  /**
   * Image source
   *
   * @type {(string | null)}
   * @memberof ImageModel
   */
  src: string | null;

  /**
   * Image Alt text
   *
   * @type {(string | null)}
   * @memberof ImageModel
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
