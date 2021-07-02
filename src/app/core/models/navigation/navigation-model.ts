import { DEFAULT_IA_ICON, IaCoreIconModel, IaCoreRouterPayloadModel } from '@core/models/core.model';

/**
 * Interface for Navigation Item
 * 
 * ```ts
 * interface IaNavigationItemModel {
 *   label    : string | null
 *   routes   : string[]
 *   icon     : IaCoreIconModel
 *   children : IaNavigationItemModel[]
 * }
 * ```
 *
 * @interface IaNavigationItemModel
 */
export interface IaNavigationItemModel {
  /**
   * Navigation Item Label
   *
   * @type {(string | null)}
   * @memberof IaNavigationItemModel
   */
  label: string | null;

  /**
   * Navigation Item Routes
   *
   * @type {string[]}
   * @memberof IaNavigationItemModel
   */
  routes: string[];

  /**
   * Navigation Item Icon
   *
   * @type {IaCoreIconModel}
   * @memberof IaNavigationItemModel
   */
  icon: IaCoreIconModel;

  /**
   * Array of children Navigation items
   *
   * @type {IaNavigationItemModel[]}
   * @memberof IaNavigationItemModel
   */
  children: IaNavigationItemModel[];
}

/**
 * Initializer for `IaNavigationItemModel`
 */
export const DEFAULT_NAVIGATION_ITEM: IaNavigationItemModel = {
  label: null, routes: [], icon: { ...DEFAULT_IA_ICON }, children: []
};


/**
 * Router Payload Model
 * 
 * ```ts
 * interface IaCoreRouterPayloadModel {
 *   routes : string[]
 *   extras : NavigationExtras
 * }
 * ```
 *
 * @export
 * @interface IaNavbarRouterPayloadModel
 * @extends {IaCoreRouterPayloadModel}
 */
export interface IaNavbarRouterPayloadModel extends IaCoreRouterPayloadModel { }
