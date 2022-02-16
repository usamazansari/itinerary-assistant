import { Icon } from '../imports';

/**
 * Toolbar Assets Model.
 *
 * ```ts
 * interface IToolbarAssets {
 *   trigger : IconModel
 *   logo    : string
 * }
 * ```
 *
 * @export
 * @interface IToolbarAssets
 */
interface IToolbarAssets {
  /**
   * Trigger for the Sidenav
   *
   * @type {Icon}
   * @memberof IToolbarAssets
   */
  trigger: Icon;
}

/**
 * Stub for Toolbar Assets.
 *
 * ```ts
 * const ToolbarAssetsStub: IToolbarAssets = {
 *   trigger : new Icon()
 * }
 * ```
 */
const ToolbarAssetsStub: IToolbarAssets = {
  trigger: new Icon({})
};

/**
 * Toolbar Assets class.
 *
 * @export
 * @class ToolbarAssets
 * @implements {IToolbarAssets}
 */
export class ToolbarAssets implements IToolbarAssets {
  trigger: Icon;

  /**
   * ### Toolbar Assets
   *
   * Creates an instance of ToolbarAssets.
   *
   * ```ts
   * const _ToolbarAssets: IToolbarAssets = new ToolbarAssets({
   *   trigger : new Icon()
   * });
   * ```
   *
   * @param {IToolbarAssets} [ToolbarAssetsStub]
   * @memberof ToolbarAssets
   */
  constructor({
    trigger = ToolbarAssetsStub.trigger
  }: Partial<IToolbarAssets>) {
    this.trigger = trigger;
  }
}

/**
 * Toolbar Data
 *
 * ```ts
 * interface ToolbarData {
 *   logo : string;
 * }
 * ```
 *
 * @export
 * @interface ToolbarData
 */
interface IToolbarData {
  /**
   * Logo of the application
   *
   * @type {string}
   * @memberof IToolbarAssets
   */
  logo: string;
}

/**
 * Stub for Toolbar Data.
 *
 * ```ts
 * const ToolbarDataStub: IToolbarData = {
 *   logo : ''
 * }
 * ```
 */
const ToolbarDataStub: IToolbarData = {
  logo: ''
};

/**
 * Toolbar Data class.
 *
 * @export
 * @class ToolbarData
 * @implements {IToolbarData}
 */
export class ToolbarData implements IToolbarData {
  logo: string;

  /**
   * ### Toolbar Data
   *
   *  Creates an instance of ToolbarData.
   *
   * ```ts
   * const _ToolbarData: IToolbarData = new ToolbarData({
   *   logo : ''
   * });
   * ```
   *
   * @param {IToolbarData} [ToolbarDataStub]
   * @memberof ToolbarData
   */
  constructor({ logo = ToolbarDataStub.logo }: Partial<IToolbarData>) {
    this.logo = logo;
  }
}