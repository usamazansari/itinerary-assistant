import { IconModel, ICON_STUB } from '@shared/models/icon/icon.model';
import { RouterPayloadModel } from '@core/models/common/router/router.model';

/**
 * TODO: Cleanup
 *
 * @deprecated - Use from Layouts Library
 *
 * Interface for Navigation Item
 *
 * ```ts
 * interface NavigationItemModel {
 *   label    : string | null
 *   routes   : string[]
 *   icon     : IconModel
 *   children : NavigationItemModel[]
 * }
 * ```
 *
 * @interface NavigationItemModel
 */
export interface NavigationItemModel {
  /**
   * Navigation Item Label
   *
   * @type {(string | null)}
   * @memberof NavigationItemModel
   */
  label: string | null;

  /**
   * Navigation Item Routes
   *
   * @type {string[]}
   * @memberof NavigationItemModel
   */
  routes: string[];

  /**
   * Navigation Item Icon
   *
   * @type {IconModel}
   * @memberof NavigationItemModel
   */
  icon: IconModel;

  /**
   * Array of children Navigation items
   *
   * @type {NavigationItemModel[]}
   * @memberof NavigationItemModel
   */
  children: NavigationItemModel[];
}

/**
 * TODO: Cleanup
 * 
 * @deprecated - Use from Layouts Library
 * 
 * Stub for `NavigationItemModel`
 * 
 * ```ts
 * const NAVIGATION_ITEM_STUB: NavigationItemModel = {
 *   label    : null,
 *   routes   : [],
 *   icon     : { ...ICON_STUB },
 *   children : []
 * 
};
 * ```
 */
export const NAVIGATION_ITEM_STUB: NavigationItemModel = {
  label: null,
  routes: [],
  icon: { ...ICON_STUB },
  children: []
};

/**
 * TODO: Cleanup
 *
 * @deprecated - Use from Layouts Library
 *
 * Router Payload Model
 *
 * ```ts
 * interface NavbarRouterPayloadModel {
 *   routes : string[]
 *   extras : NavigationExtras
 * }
 * ```
 *
 * @export
 * @interface NavbarRouterPayloadModel
 * @extends {RouterPayloadModel}
 */
export interface NavbarRouterPayloadModel extends RouterPayloadModel {}
