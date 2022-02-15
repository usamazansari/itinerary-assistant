/**
 * Image Wrapper.
 *
 * ```ts
 * interface IImage {
 *   src : string;
 *   alt : string;
 * }
 * ```
 *
 * @interface IImage
 */
interface IImage {
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
 * Stub for Image Model.
 *
 * ```ts
 * const ImageStub: IImage = {
 *   src : '',
 *   alt : ''
 * }
 * ```
 */
const ImageStub: IImage = {
  src: '',
  alt: ''
};

/**
 * Image Wrapper.
 *
 * @export
 * @interface ImageModel
 */
export class Image implements IImage {
  src: string;
  alt: string;

  /**
   * ### Image Wrapper
   *
   * ```ts
   * interface ImageModel {
   *   src : string;
   *   alt : string;
   * }
   * ```
   * @param {IImage} [init={ ...ImageStub }]
   * @memberof Image
   */
  constructor(init: IImage = { ...ImageStub }) {
    this.src = init.src;
    this.alt = init.alt;
  }
}
