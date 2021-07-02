import { AppFaIconModel } from '@shared/models/icon/app-icon.model';
import { AppImageModel } from '@shared/models/image/app-image.model';
import { IaCoreFlagModel, DEFAULT_IA_CORE_FLAG } from '@core/models/core.model';

/**
 * TODO: Create common models for `ia-core.module`
 */

export type FooterIcon = AppFaIconModel | AppImageModel;

interface FooterLink {
  name: string | null;
  url: string | null;
  icon: FooterIcon;
}

/**
 * Application Footer Assets
 *
 * @export
 * @interface IaCoreFooterAssetsModel
 */
export interface FooterAssetsModel {
  /**
   * Footer text - `Made with`
   *
   * @type {(string | null)}
   * @memberof IaCoreFooterAssetsModel
   */
  madeWith: string | null;

  /**
   * Spreading Love
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  heart: FooterLink;

  /**
   * Footer text - `using`
   *
   * @type {(string | null)}
   * @memberof IaCoreFooterAssetsModel
   */
  using: string | null;

  /**
   * Angular
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  angular: FooterLink;

  /**
   * Tailwind
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  tailwind: FooterLink;

  /**
   * Font Awesome
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  fontawesome: FooterLink;

  /**
   * Firebase
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  firebase: FooterLink;

  /**
   * by
   *
   * @type {(string | null)}
   * @memberof IaCoreFooterAssetsModel
   */
  by: string | null;

  /**
   * Name of the Author - Usama Ansari
   *
   * @type {(string | null)}
   * @memberof IaCoreFooterAssetsModel
   */
  author: string | null;

  /**
   * GitHub
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  github: FooterLink;

  /**
   * LinkedIn
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  linkedin: FooterLink;

  /**
   * Discord
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  discord: FooterLink;

  /**
   * Email
   *
   * @type {FooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  email: FooterLink;
}

export const DEFAULT_FOOTER_ASSETS: FooterAssetsModel = {
  madeWith: null,
  heart: null,
  using: null,

  angular: null,
  tailwind: null,
  fontawesome: null,
  firebase: null,

  by: null,
  author: null,

  github: null,
  linkedin: null,
  discord: null,
  email: null
};

/**
 * TODO: 🧐 Documentation required
 *
 * @export
 * @interface FooterFlagsModel
 */
export interface FooterFlagsModel {
  /**
   * TODO: 🧐 Documentation required
   *
   * @type {IaCoreFlagModel}
   * @memberof FooterFlagsModel
   */
  discord: IaCoreFlagModel;

  /**
   * TODO: 🧐 Documentation required
   *
   * @type {IaCoreFlagModel}
   * @memberof FooterFlagsModel
   */
  email: IaCoreFlagModel;
}

export const DEFAULT_FOOTER_FLAGS: FooterFlagsModel = {
  discord: { ...DEFAULT_IA_CORE_FLAG }, email: { ...DEFAULT_IA_CORE_FLAG }
};
