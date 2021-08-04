import { IconModel, IconStub } from '@itinerary-assistant/ui/core';

/**
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

// TODO: Rename to `NavigationItemStub`
/**
 * Stub for `NavigationItemModel`
 * 
 * ```ts
 * const NAVIGATION_ITEM_STUB: NavigationItemModel = {
 *   label    : null,
 *   routes   : [],
 *   icon     : { ...IconStub },
 *   children : []
 * 
};
 * ```
 */
export const NAVIGATION_ITEM_STUB: NavigationItemModel = {
  label: null,
  routes: [],
  icon: { ...IconStub },
  children: []
};
