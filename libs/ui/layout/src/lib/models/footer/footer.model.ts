import { IconModel, ICON_STUB, ImageModel } from '../../models';

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

/**
 * Stub for `FooterLink`
 *
 * ```ts
 * const FOOTER_LINK_STUB: FooterLink = {
 *   icon : { ...ICON_STUB },
 *   name : '',
 *   url  : ''
 * }
 * ```
 *
 */
const FOOTER_LINK_STUB: FooterLink = {
  icon: { ...ICON_STUB },
  name: '',
  url: ''
};

/**
 * Application Footer Assets
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

/**
 * Stub for `FooterAssetsModel`
 *
 * ```ts
 * const FOOTER_ASSETS_STUB: FooterAssetsModel = {
 *   madeWith    : '',
 *   heart       : FOOTER_LINK_STUB,
 *   using       : '',
 *   angular     : FOOTER_LINK_STUB,
 *   tailwind    : FOOTER_LINK_STUB,
 *   fontawesome : FOOTER_LINK_STUB,
 *   firebase    : FOOTER_LINK_STUB,
 *   by          : '',
 *   author      : '',
 *   github      : FOOTER_LINK_STUB,
 *   linkedin    : FOOTER_LINK_STUB,
 *   discord     : FOOTER_LINK_STUB,
 *   email       : FOOTER_LINK_STUB
 * };
 * ```
 */
export const FOOTER_ASSETS_STUB: FooterAssetsModel = {
  madeWith: '',
  heart: { ...FOOTER_LINK_STUB },
  using: '',

  angular: { ...FOOTER_LINK_STUB },
  tailwind: { ...FOOTER_LINK_STUB },
  fontawesome: { ...FOOTER_LINK_STUB },
  firebase: { ...FOOTER_LINK_STUB },

  by: '',
  author: '',

  github: { ...FOOTER_LINK_STUB },
  linkedin: { ...FOOTER_LINK_STUB },
  discord: { ...FOOTER_LINK_STUB },
  email: { ...FOOTER_LINK_STUB }
};
