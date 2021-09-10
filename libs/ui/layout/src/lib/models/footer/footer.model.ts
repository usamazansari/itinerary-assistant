import type { IconModel, ImageModel } from '../../imports/models';

export type FooterIconType = IconModel | ImageModel;

/**
 * Interface to denote a footer link
 *
 * ```ts
 * interface FooterLinkModel {
 *   name : string;
 *   url  : string;
 *   icon : FooterIconType;
 * }
 * ```
 *
 * @private Interface for internal use
 * @interface FooterLinkModel
 */
export interface FooterLinkModel {
  /**
   * Name of the footer link
   *
   * @type {(string)}
   * @memberof FooterLinkModel
   */
  name: string;

  /**
   * URL of the footer link
   *
   * @type {(string)}
   * @memberof FooterLinkModel
   */
  url: string;

  /**
   * Icon of the footer link
   *
   * @type {FooterIconType}
   * @memberof FooterLinkModel
   */
  icon: FooterIconType;
}

/**
 * Assets for `FooterComponent`
 *
 * ```ts
 * interface FooterAssetsModel {
 *   madeWith    : string;
 *   heart       : FooterLinkModel;
 *   using       : string;
 *   angular     : FooterLinkModel;
 *   tailwind    : FooterLinkModel;
 *   fontawesome : FooterLinkModel;
 *   firebase    : FooterLinkModel;
 *   nx          : FooterLinkModel;
 *   by          : string;
 *   author      : string;
 *   github      : FooterLinkModel;
 *   linkedin    : FooterLinkModel;
 *   discord     : FooterLinkModel;
 *   email       : FooterLinkModel;
 *   location    : FooterLinkModel;
 * }
 * ```
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
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  heart: FooterLinkModel;

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
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  angular: FooterLinkModel;

  /**
   * Tailwind
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  tailwind: FooterLinkModel;

  /**
   * Font Awesome
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  fontawesome: FooterLinkModel;

  /**
   * Firebase
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  firebase: FooterLinkModel;

  /**
   * Nx
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  nx: FooterLinkModel;

  /**
   * by
   *
   * @type {(string)}
   * @memberof FooterAssetsModel
   */
  by: string;

  /**
   * GitHub
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  github: FooterLinkModel;

  /**
   * LinkedIn
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  linkedin: FooterLinkModel;

  /**
   * Discord
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  discord: FooterLinkModel;

  /**
   * Email
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  email: FooterLinkModel;

  /**
   * Location
   *
   * @type {FooterLinkModel}
   * @memberof FooterAssetsModel
   */
  location: FooterLinkModel;
}

/**
 * Footer Data
 *
 * ```ts
 * interface FooterDataModel {
 *   fullname : string;
 *   github   : string;
 *   linkedin : string;
 *   discord  : string;
 *   email    : string;
 *   location : string;
 * }
 * ```
 *
 * @export
 * @interface FooterDataModel
 */
export interface FooterDataModel {
  /**
   * Name of the Author - `Usama Ansari`
   *
   * @type {(string)}
   * @memberof FooterDataModel
   */
  fullname: string;

  /**
   * GitHub Account - `usama251993`
   *
   * @type {string}
   * @memberof FooterDataModel
   */
  github: string;

  /**
   * LinkedIn Account - `usama-ansari-81380080`
   *
   * @type {string}
   * @memberof FooterDataModel
   */
  linkedin: string;

  /**
   * Discord ID - `usama251993#5438`
   *
   * @type {string}
   * @memberof FooterDataModel
   */
  discord: string;

  /**
   * Email ID - `usama251993@gmail.com`
   *
   * @type {string}
   * @memberof FooterDataModel
   */
  email: string;

  /**
   * Location - https://goo.gl/maps/X6syXXRrRML4FUgc6
   *
   * @type {string}
   * @memberof FooterDataModel
   */
  location: string;
}

export interface FooterSnackbarMessageModel {
  success: {
    message: string;
    action: string;
  };
  fail: {
    message: string;
    action: string;
  };
}

export interface FooterStringsModel {
  snackbar: {
    discord: FooterSnackbarMessageModel;
    email: FooterSnackbarMessageModel;
  };
}

/**
 * Virtual Memory for `FooterComponent`
 *
 * ```ts
 * interface FooterVMModel {
 *   assets  : FooterAssetsModel;
 *   data    : FooterDataModel;
 *   strings : FooterStringsModel;
 * }
 * ```
 *
 * @deprecated - Use separate objects
 * @export
 * @interface FooterVMModel
 */
export interface FooterVMModel {
  assets: FooterAssetsModel;
  data: FooterDataModel;
  strings: FooterStringsModel;
}
