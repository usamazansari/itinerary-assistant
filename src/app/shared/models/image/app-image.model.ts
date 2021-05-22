/**
 * Interface for Image used in the entire application
 *
 * @export
 * @interface AppImageModel
 */
export interface AppImageModel {
  src: string | null;
  alt: string | null;
}

export const DEFAULT_APP_IMAGE: AppImageModel = {
  src: null, alt: null
};
