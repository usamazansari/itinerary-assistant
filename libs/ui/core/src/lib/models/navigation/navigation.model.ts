import type { IconModel } from '../../imports/models';
import { IconStub } from '../../imports/constants';

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

// TODO: Move to constants
/**
 * Stub for `NavigationItemModel`
 * 
 * ```ts
 * const NavigationItemStub: NavigationItemModel = {
 *   label    : null,
 *   routes   : [],
 *   icon     : { ...IconStub },
 *   children : []
 * 
};
 * ```
 */
export const NavigationItemStub: NavigationItemModel = {
  label: null,
  routes: [],
  icon: { ...IconStub },
  children: []
};
