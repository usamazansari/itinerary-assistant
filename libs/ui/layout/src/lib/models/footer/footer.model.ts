import type { IconModel, ImageModel } from '../../imports/models';
import { IconStub } from '../../imports/models';

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
interface FooterLink {
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

// TODO: Move to constants
/**
 * Stub for `FooterLink`
 *
 * ```ts
 * const FooterLinkStub: FooterLink = {
 *   icon : { ...IconStub },
 *   name : '',
 *   url  : ''
 * }
 * ```
 *
 */
const FooterLinkStub: FooterLink = {
  icon: { ...IconStub },
  name: '',
  url: ''
};

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

// TODO: Move to constants
/**
 * Stub for `FooterAssetsModel`
 *
 * ```ts
 * const FooterAssetsStub: FooterAssetsModel = {
 *   madeWith    : '',
 *   heart       : FooterLinkStub,
 *   using       : '',
 *   angular     : FooterLinkStub,
 *   tailwind    : FooterLinkStub,
 *   fontawesome : FooterLinkStub,
 *   firebase    : FooterLinkStub,
 *   by          : '',
 *   author      : '',
 *   github      : FooterLinkStub,
 *   linkedin    : FooterLinkStub,
 *   discord     : FooterLinkStub,
 *   email       : FooterLinkStub
 * };
 * ```
 */
export const FooterAssetsStub: FooterAssetsModel = {
  madeWith: '',
  heart: { ...FooterLinkStub },
  using: '',

  angular: { ...FooterLinkStub },
  tailwind: { ...FooterLinkStub },
  fontawesome: { ...FooterLinkStub },
  firebase: { ...FooterLinkStub },

  by: '',
  author: '',

  github: { ...FooterLinkStub },
  linkedin: { ...FooterLinkStub },
  discord: { ...FooterLinkStub },
  email: { ...FooterLinkStub }
};

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
// TODO: Move to constants
/**
 *
 */
export const FooterDataStub: FooterDataModel = {
  fullname: '',
  github: '',
  linkedin: '',
  discord: '',
  email: '',
  location: ''
};

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

// TODO: 🧐 Documentation Required
// TODO: Move to constants
/**
 * Stub for `FooterVMModel`
 *
 * ```ts
 * ```
 */
export const FooterVMStub: FooterVMModel = {
  assets: { ...FooterAssetsStub },
  data: { ...FooterDataStub }
};
