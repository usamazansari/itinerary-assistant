import type { IconModel } from '../../imports/models';

/**
 * The assets for a Card to be displayed on the Home Page.
 *
 * ```ts
 * interface HomeAssetModel {
 *   icon : IconModel;
 *   text : string;
 * }
 * ```
 *
 * @interface HomeAssetModel
 */
export interface HomeAssetModel {
  /**
   * Icon to be displayed in the card of the home page.
   *
   * @type {IconModel}
   * @memberof HomeAssetModel
   */
  icon: IconModel;

  /**
   * Text for the icon displayed in the card of the home page.
   *
   * @type {(string)}
   * @memberof HomeAssetModel
   */
  text: string;
}

/**
 * Home Page shall consist of two cards:
 * 1. View Trip
 * 2. Create Trip
 *
 * ```ts
 * interface HomeAssetsModel {
 *   view   : {
 *     icon : IconModel;
 *     text : string;
 *   };
 *   create : {
 *     icon : IconModel;
 *     text : string;
 *   };
 * }
 * ```
 *
 * @export
 * @interface HomeAssetsModel
 */
export interface HomeAssetsModel {
  /**
   * The card to hold icon and text for `View Trip`.
   *
   * ```ts
   * view   : {
   *   icon : IconModel;
   *   text : string;
   * };
   * ```
   *
   * @type {HomeAssetModel}
   * @memberof HomeAssetsModel
   */
  view: HomeAssetModel;

  /**
   * The card to hold icon and text for `Create Trip`.
   *
   * ```ts
   * create : {
   *   icon : IconModel;
   *   text : string;
   * };
   * ```
   *
   * @type {HomeAssetModel}
   * @memberof HomeAssetsModel
   */
  create: HomeAssetModel;
}

/**
 * Virtual Memory for `HomeComponent`
 *
 * ```ts
 * interface HomeVMModel = {
 *   assets: HomeAssetsModel
 * }
 * ```
 * @deprecated - Use separate objects
 * @export
 * @interface HomeVMModel
 */
export interface HomeVMModel {
  assets: HomeAssetsModel;
}
