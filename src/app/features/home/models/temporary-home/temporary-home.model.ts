import { HOME_ICON_STUB, HomeIconModel } from '@home/models/home-core.model';

/**
 * The assets for a Card to be displayed on the Home Page.
 * 
 * ```ts
 * interface TemporaryHomeAssetModel {
 *   icon : HomeIconModel;
 *   text : string | null;
 * }
 * ```
 *
 * @interface TemporaryHomeAssetModel
 */
interface TemporaryHomeAssetModel {
  /**
   * Icon to be displayed in the card of the home page.
   *
   * @type {HomeIconModel}
   * @memberof TemporaryHomeAssetModel
   */
  icon: HomeIconModel;

  /**
   * Text for the icon displayed in the card of the home page.
   *
   * @type {(string | null)}
   * @memberof TemporaryHomeAssetModel
   */
  text: string | null;
}

/**
 * Stub for `TemporaryHomeAssetModel`.
 * 
 * ```ts
 * const HOME_ASSET_STUB: TemporaryHomeAssetModel = {
 *   icon : { ...HOME_ICON_STUB }, 
 *   text : null
 * };
 * ```
 */
const HOME_ASSET_STUB: TemporaryHomeAssetModel = {
  icon: { ...HOME_ICON_STUB }, text: null
};

/**
 * Home Page shall consist of two cards:
 * 1. View Trip
 * 2. Create Trip
 * 
 * ```ts
 * export interface TemporaryHomeAssetsModel {
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
 * @interface TemporaryHomeAssetsModel
 */
export interface TemporaryHomeAssetsModel {
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
   * @type {TemporaryHomeAssetModel}
   * @memberof TemporaryHomeAssetsModel
   */
  view: TemporaryHomeAssetModel;

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
   * @type {TemporaryHomeAssetModel}
   * @memberof TemporaryHomeAssetsModel
   */
  create: TemporaryHomeAssetModel;
}

/**
 * Stub for `TemporaryHomeAssetsModel`.
 * 
 * ```ts
 * const HOME_ASSETS_STUB: TemporaryHomeAssetsModel = {
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
export const HOME_ASSETS_STUB: TemporaryHomeAssetsModel = {
  view: { ...HOME_ASSET_STUB }, create: { ...HOME_ASSET_STUB }
};
