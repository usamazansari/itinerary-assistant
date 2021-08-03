import { IconModel, ICON_STUB } from '@itinerary-assistant/ui/core';

/**
 * The assets for a Card to be displayed on the Home Page.
 *
 * ```ts
 * interface HomeAssetModel {
 *   icon : IconModel;
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
   * @type {IconModel}
   * @memberof HomeAssetModel
   */
  icon: IconModel;

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
 *   icon : { ...ICON_STUB },
 *   text : null
 * };
 * ```
 */
const HOME_ASSET_STUB: HomeAssetModel = {
  icon: { ...ICON_STUB },
  text: null
};

/**
 * Home Page shall consist of two cards:
 * 1. View Trip
 * 2. Create Trip
 *
 * ```ts
 * export interface HomeAssetsModel {
 *   view   : {
 *     icon : IconModel;
 *     text : string | null;
 *   };
 *   create : {
 *     icon : IconModel;
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
   *   icon : IconModel;
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
   *   icon : IconModel;
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
 *   view   : {
 *     icon : { ...ICON_STUB },
 *     text : null
 *   },
 *   create : {
 *     icon : { ...ICON_STUB },
 *     text : null
 *   }
 * }
 * ```
 */
const HOME_ASSETS_STUB: HomeAssetsModel = {
  view: { ...HOME_ASSET_STUB },
  create: { ...HOME_ASSET_STUB }
};

export interface HomeVMModel {
  assets: HomeAssetsModel;
}

export const HOME_VM_STUB: HomeVMModel = {
  assets: { ...HOME_ASSETS_STUB }
};
