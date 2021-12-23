// TODO: Usama Ansari - ♻️ Refactor this file.

import type { Icon } from '../imports';

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
   * @type {Icon}
   * @memberof ToolbarAssetsModel
   */
  trigger: Icon;
}

/**
 * Toolbar Data
 *
 * ```ts
 * interface ToolbarDataModel {
 *   logo : string;
 * }
 * ```
 *
 * @export
 * @interface ToolbarDataModel
 */
export interface ToolbarDataModel {
  /**
   * Logo of the application
   *
   * @type {string}
   * @memberof ToolbarAssetsModel
   */
  logo: string;
}
