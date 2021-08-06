import { IconModel, IconStub } from '../imports';

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
   * @type {(string)}
   * @memberof HomeAssetModel
   */
  text: string;
}

/**
 * Stub for `HomeAssetModel`.
 *
 * ```ts
 * const HomeAssetStub: HomeAssetModel = {
 *   icon : { ...IconStub },
 *   text : null
 * };
 * ```
 */
const HomeAssetStub: HomeAssetModel = {
  icon: { ...IconStub },
  text: ''
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
 * Stub for `HomeAssetsModel`.
 *
 * ```ts
 * const HomeAssetsStub: HomeAssetsModel = {
 *   view   : {
 *     icon : { ...IconStub },
 *     text : ''
 *   },
 *   create : {
 *     icon : { ...IconStub },
 *     text : ''
 *   }
 * }
 * ```
 */
const HomeAssetsStub: HomeAssetsModel = {
  view: { ...HomeAssetStub },
  create: { ...HomeAssetStub }
};

export interface HomeVMModel {
  assets: HomeAssetsModel;
}

/**
 * Stub for `HomeVMModel`
 */
export const HomeVMStub: HomeVMModel = {
  assets: { ...HomeAssetsStub }
};
