import { IconModel, ICON_STUB } from '@shared/models/icon/icon.model';
import { ImageModel } from '@shared/models/image/image.model';

/**
 * TODO: Cleanup
 *
 * @deprecated - Use from Layouts Library
 */
export type FooterIconType = IconModel | ImageModel;

/**
 * Interface to denote a footer link
 *
 * ```ts
 * interface FooterLink {
 *   name : string | null;
 *   url  : string | null;
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
   * @type {(string | null)}
   * @memberof FooterLink
   */
  name: string | null;

  /**
   * URL of the footer link
   *
   * @type {(string | null)}
   * @memberof FooterLink
   */
  url: string | null;

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
 *   name : null,
 *   url  : null
 * }
 * ```
 *
 */
const FOOTER_LINK_STUB: FooterLink = {
  icon: { ...ICON_STUB },
  name: null,
  url: null
};

/**
 * TODO: Cleanup
 *
 * @deprecated - Use from Layouts Library
 *
 * Application Footer Assets
 *
 * @export
 * @interface FooterAssetsModel
 */
export interface FooterAssetsModel {
  /**
   * Footer text - `Made with`
   *
   * @type {(string | null)}
   * @memberof FooterAssetsModel
   */
  madeWith: string | null;

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
   * @type {(string | null)}
   * @memberof FooterAssetsModel
   */
  using: string | null;

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
   * @type {(string | null)}
   * @memberof FooterAssetsModel
   */
  by: string | null;

  /**
   * Name of the Author - Usama Ansari
   *
   * @type {(string | null)}
   * @memberof FooterAssetsModel
   */
  author: string | null;

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
 * TODO: Cleanup
 *
 * @deprecated - Use from Layouts Library
 *
 * Stub for `FooterAssetsModel`
 *
 * ```ts
 * const FOOTER_ASSETS_STUB: FooterAssetsModel = {
 *   madeWith    : null,
 *   heart       : FOOTER_LINK_STUB,
 *   using       : null,
 *   angular     : FOOTER_LINK_STUB,
 *   tailwind    : FOOTER_LINK_STUB,
 *   fontawesome : FOOTER_LINK_STUB,
 *   firebase    : FOOTER_LINK_STUB,
 *   by          : null,
 *   author      : null,
 *   github      : FOOTER_LINK_STUB,
 *   linkedin    : FOOTER_LINK_STUB,
 *   discord     : FOOTER_LINK_STUB,
 *   email       : FOOTER_LINK_STUB
 * };
 * ```
 */
export const FOOTER_ASSETS_STUB: FooterAssetsModel = {
  madeWith: null,
  heart: { ...FOOTER_LINK_STUB },
  using: null,

  angular: { ...FOOTER_LINK_STUB },
  tailwind: { ...FOOTER_LINK_STUB },
  fontawesome: { ...FOOTER_LINK_STUB },
  firebase: { ...FOOTER_LINK_STUB },

  by: null,
  author: null,

  github: { ...FOOTER_LINK_STUB },
  linkedin: { ...FOOTER_LINK_STUB },
  discord: { ...FOOTER_LINK_STUB },
  email: { ...FOOTER_LINK_STUB }
};
