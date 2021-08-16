import type { IconModel, ImageModel } from '../../imports/models';

export type FooterIconType = IconModel | ImageModel;

/**
 * Interface to denote a footer link
 *
 * ```ts
 * interface FooterLink {
 *   name : string;
 *   url  : string;
 *   icon : FooterIconType;
 * }
 * ```
 *
 * @private Interface for internal use
 * @interface FooterLink
 */
export interface FooterLink {
  /**
   * Name of the footer link
   *
   * @type {(string)}
   * @memberof FooterLink
   */
  name: string;

  /**
   * URL of the footer link
   *
   * @type {(string)}
   * @memberof FooterLink
   */
  url: string;

  /**
   * Icon of the footer link
   *
   * @type {FooterIconType}
   * @memberof FooterLink
   */
  icon: FooterIconType;
}

/**
 * Assets for `FooterComponent`
 *
 * @export
 * @interface FooterAssetsModel
 */
export interface FooterAssetsModel {
  /**
   * Footer text - `Made with`
   *
   * @type {(string)}
   * @memberof FooterAssetsModel
   */
  madeWith: string;

  /**
   * Spreading Love
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  heart: FooterLink;

  /**
   * Footer text - `using`
   *
   * @type {(string)}
   * @memberof FooterAssetsModel
   */
  using: string;

  /**
   * Angular
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  angular: FooterLink;

  /**
   * Tailwind
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  tailwind: FooterLink;

  /**
   * Font Awesome
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  fontawesome: FooterLink;

  /**
   * Firebase
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  firebase: FooterLink;

  /**
   * by
   *
   * @type {(string)}
   * @memberof FooterAssetsModel
   */
  by: string;

  /**
   * Name of the Author - Usama Ansari
   *
   * @type {(string)}
   * @memberof FooterAssetsModel
   */
  author: string;

  /**
   * GitHub
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  github: FooterLink;

  /**
   * LinkedIn
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  linkedin: FooterLink;

  /**
   * Discord
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  discord: FooterLink;

  /**
   * Email
   *
   * @type {FooterLink}
   * @memberof FooterAssetsModel
   */
  email: FooterLink;
}

// TODO: 🧐 Documentation Required
/**
 *
 *
 * @export
 * @interface FooterDataModel
 */
export interface FooterDataModel {
  fullname: string;
  github: string;
  linkedin: string;
  discord: string;
  email: string;
  location: string;
}

// TODO: 🧐 Documentation Required
/**
 * Virtual Memory for `FooterComponent`
 *
 * @export
 * @interface FooterVMModel
 */
export interface FooterVMModel {
  assets: FooterAssetsModel;
  data: FooterDataModel;
}
