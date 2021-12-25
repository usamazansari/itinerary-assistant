import { Icon } from '../imports';

/**
 * Home Asset Model
 *
 * @interface IHomeAsset
 */
interface IHomeAsset {
  /**
   * Icon to be displayed in the card of the home page.
   *
   * @type {Icon}
   * @memberof IHomeAsset
   */
  icon: Icon;

  /**
   * Text for the icon displayed in the card of the home page.
   *
   * @type {(string)}
   * @memberof IHomeAsset
   */
  text: string;
}

/**
 * Stub for Home Asset Model.
 *
 * ```ts
 * const HomeAssetStub: IHomeAsset = {
 *   icon : new Icon(),
 *   text : ''
 * }
 * ```
 */
const HomeAssetStub: IHomeAsset = {
  icon: new Icon(),
  text: ''
};

/**
 * Home Asset class.
 *
 * @export
 * @class HomeAsset
 * @implements {IHomeAsset}
 */
export class HomeAsset implements IHomeAsset {
  icon: Icon;
  text: string;

  /**
   * ### Home Asset
   *
   * Atomic asset for the home page.
   *
   * ```ts
   * const homeAsset = new HomeAsset({
   *   icon: new Icon(),
   *   text: ''
   * });
   * ```
   *
   * @param {IHomeAsset} [init={ ...HomeAssetStub }]
   * @memberof HomeAsset
   */
  constructor(
    init: IHomeAsset = { ...HomeAssetStub }
  ) {
    this.icon = init.icon;
    this.text = init.text;
  }
}

/**
 * Home Page Assets Model
 *
 * ```ts
 * interface HomeAssetsModel {
 *   view   : {
 *     icon : Icon;
 *     text : string;
 *   };
 *   create : {
 *     icon : Icon;
 *     text : string;
 *   };
 * }
 * ```
 *
 * @interface IHomeAssets
 */
interface IHomeAssets {
  /**
   * The card to hold icon and text for `View Trip`.
   *
   * ```ts
   * view   : {
   *   icon : Icon;
   *   text : string;
   * };
   * ```
   *
   * @type {HomeAsset}
   * @memberof HomeAssetsModel
   */
  view: HomeAsset;

  /**
   * The card to hold icon and text for `Create Trip`.
   *
   * ```ts
   * create : {
   *   icon : Icon;
   *   text : string;
   * };
   * ```
   *
   * @type {HomeAsset}
   * @memberof HomeAssetsModel
   */
  create: HomeAsset;
}

/**
 * Stub for HomeAssets.
 *
 * ```ts
 * const HomeAssetsStub: IHomeAssets = {
 *   view   : new HomeAsset(),
 *   create : new HomeAsset()
 * }
 * ```
 */
const HomeAssetsStub: IHomeAssets = {
  view: new HomeAsset(),
  create: new HomeAsset()
};

/**
 * Home Page Assets class.
 * @export
 * @interface HomeAssetsModel
 */
export class HomeAssets implements IHomeAssets {
  view: HomeAsset;
  create: HomeAsset;

  /**
   * ### Home Page Assets
   * The home page shall consist of two cards:
   * 1. View Trip
   * 2. Create Trip
   *
   * ```ts
   * interface HomeAssetsModel {
   *   view   : {
   *     icon : Icon;
   *     text : string;
   *   };
   *   create : {
   *     icon : Icon;
   *     text : string;
   *   };
   * }
   * ```
   * @param {IHomeAssets} [init={ ...HomeAssetsStub }]
   * @memberof HomeAssets
   */
  constructor(
    init: IHomeAssets = { ...HomeAssetsStub }
  ) {
    this.view = init.view;
    this.create = init.create;
  }
}
