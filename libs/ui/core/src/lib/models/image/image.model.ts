/**
 * Interface for Image used in the entire application
 *
 * ```ts
 * interface ImageModel {
 *   src : string;
 *   alt : string;
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
   * @type {(string)}
   * @memberof ImageModel
   */
  src: string;

  /**
   * Image Alt text
   *
   * @type {(string)}
   * @memberof ImageModel
   */
  alt: string;
}

/**
 * Stub for `ImageModel`
 *
 * ```ts
 * const ImageStub: ImageModel = {
 *   src : '',
 *   alt : ''
 * }
 * ```
 */
export const ImageStub: ImageModel = {
  src: '',
  alt: ''
};
