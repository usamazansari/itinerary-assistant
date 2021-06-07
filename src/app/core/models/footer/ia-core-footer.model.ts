import { AppFaIconModel } from '@shared/models/icon/app-icon.model';
import { AppImageModel } from '@shared/models/image/app-image.model';

type IaCoreFooterIcon = AppFaIconModel | AppImageModel;

interface IaCoreFooterLink {
  name: string;
  url: string;
  icon: IaCoreFooterIcon;
}

/**
 * Application Footer Assets
 *
 * @export
 * @interface IaCoreFooterAssetsModel
 */
export interface IaCoreFooterAssetsModel {
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
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  heart: IaCoreFooterLink;

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
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  angular: IaCoreFooterLink;

  /**
   * Tailwind
   *
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  tailwind: IaCoreFooterLink;

  /**
   * Font Awesome
   *
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  fontawesome: IaCoreFooterLink;

  /**
   * Firebase
   *
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  firebase: IaCoreFooterLink;

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
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  github: IaCoreFooterLink;

  /**
   * LinkedIn
   *
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  linkedin: IaCoreFooterLink;

  /**
   * Discord
   *
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  discord: IaCoreFooterLink;

  /**
   * Email
   *
   * @type {IaCoreFooterLink}
   * @memberof IaCoreFooterAssetsModel
   */
  email: IaCoreFooterLink;
}

export const DEFAULT_IA_CORE_FOOTER_ASSETS: IaCoreFooterAssetsModel = {
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
