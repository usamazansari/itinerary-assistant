import { HOME_ICON_STUB, HomeIconModel } from '@home/models/home-core.model';

/**
 * The assets for a Card to be displayed on the Home Page.
 * 
 * ```ts
 * interface HomeAssetModel {
 *   icon : HomeIconModel;
 *   text : string | null;
 * }
 * ```
 *
 * @interface HomeAssetModel
 */
interface HomeAssetModel {
  /**
   * Icon to be displayed in the card of the home page.
   *
   * @type {HomeIconModel}
   * @memberof HomeAssetModel
   */
  icon: HomeIconModel;

  /**
   * Text for the icon displayed in the card of the home page.
   *
   * @type {(string | null)}
   * @memberof HomeAssetModel
   */
  text: string | null;
}

/**
 * Stub for `HomeAssetModel`.
 * 
 * ```ts
 * const HOME_ASSET_STUB: HomeAssetModel = {
 *   icon : { ...HOME_ICON_STUB }, 
 *   text : null
 * };
 * ```
 */
const HOME_ASSET_STUB: HomeAssetModel = {
  icon: { ...HOME_ICON_STUB }, text: null
};

/**
 * Home Page shall consist of two cards:
 * 1. View Trip
 * 2. Create Trip
 * 
 * ```ts
 * export interface HomeAssetsModel {
 *   view   : {
 *     icon : HomeIconModel;
 *     text : string | null;
 *   };
 *   create : {
 *     icon : HomeIconModel;
 *     text : string | null;
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
   *   icon : HomeIconModel;
   *   text : string | null;
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
   *   icon : HomeIconModel;
   *   text : string | null;
   * };
   * ```
   *
   * @type {HomeAssetModel}
   * @memberof HomeAssetsModel
   */
  create: HomeAssetModel;
}

/**
 * Stub for `HomeAssetsModel`.
 * 
 * ```ts
 * const HOME_ASSETS_STUB: HomeAssetsModel = {
 *   view: { 
 *     icon : { ...HOME_ICON_STUB }, 
 *     text : null
 *   },
 *   create: { 
 *     icon : { ...HOME_ICON_STUB }, 
 *     text : null
 *   }
 * }
 * ```
 */
export const HOME_ASSETS_STUB: HomeAssetsModel = {
  view: { ...HOME_ASSET_STUB }, create: { ...HOME_ASSET_STUB }
};
