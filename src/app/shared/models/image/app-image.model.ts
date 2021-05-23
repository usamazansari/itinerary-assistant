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
export interface AppImageModel {
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
 * Initializer for `AppImageModel`
 */
export const DEFAULT_APP_IMAGE: AppImageModel = {
  src: null, alt: null
};
