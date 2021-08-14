import type { IconModel } from '../../imports/models';

/**
 * Assets for `ToolbarComponent`
 *
 * ```ts
 * interface ToolbarAssetsModel {
 *   trigger : IconModel
 *   logo    : string
 * }
 * ```
 *
 * @export
 * @interface ToolbarAssetsModel
 */
export interface ToolbarAssetsModel {
  /**
   * Trigger for the Sidenav
   *
   * @type {IconModel}
   * @memberof ToolbarAssetsModel
   */
  trigger: IconModel;
}

export interface ToolbarDataModel {
  /**
   * Logo of the application
   *
   * @type {string}
   * @memberof ToolbarAssetsModel
   */
  logo: string;
}

export interface ToolbarVMModel {
  assets: ToolbarAssetsModel;
  data: ToolbarDataModel;
}
