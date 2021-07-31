import { NavigationItemModel, NAVIGATION_ITEM_STUB } from '../navigation.model';

/**
 * Virtual Memory for `ToolbarComponent`
 *
 * ```ts
 * interface ToolbarVMModel {
 *   assets  : {
 *     trigger : NavigationItemModel
 *     logo    : NavigationItemModel
 *   }
 * }
 * ```
 *
 * @export
 * @interface ToolbarVMModel
 */
export interface ToolbarVMModel {
  /**
   * Assets for `ToolbarComponent`
   *
   * @type {{
   *   trigger: NavigationItemModel;
   *   logo: NavigationItemModel;
   * }}
   * @memberof ToolbarVMModel
   */
  assets: {
    /**
     * Trigger for the Sidenav
     *
     * @type {NavigationItemModel}
     * @memberof ToolbarVMModel
     */
    trigger: NavigationItemModel;

    /**
     * Logo of the application
     *
     * @type {NavigationItemModel}
     * @memberof ToolbarVMModel
     */
    logo: NavigationItemModel;
  };
}

/**
 * Stub for `ToolbarVMModel`
 *
 * ```ts
 * const ToolBAR_ASSETS_STUB: ToolbarVMModel = {
 *   assets  : {
 *     trigger : { ...NAVIGATION_ITEM_STUB },
 *     logo    : { ...NAVIGATION_ITEM_STUB }
 *   }
 * };
 * ```
 */
export const TOOLBAR_VM_STUB: ToolbarVMModel = {
  assets: {
    trigger: { ...NAVIGATION_ITEM_STUB },
    logo: { ...NAVIGATION_ITEM_STUB }
  }
};
