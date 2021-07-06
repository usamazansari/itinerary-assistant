import { NavigationItemModel, NAVIGATION_ITEM_STUB } from '@core/models/navigation/navigation-model';

/**
 * For use in `NavbarComponent`
 * 
 * ```ts
 * interface NavbarAssetsModel {
 *   trigger : CoreIconModel
 *   logo    : NavigationItemModel
 * }
 * ```
 *
 * @export
 * @interface NavbarAssetsModel
 */
export interface NavbarAssetsModel {
  /**
   * Trigger for the Sidenav
   *
   * @type {NavigationItemModel}
   * @memberof NavbarAssetsModel
   */
  trigger: NavigationItemModel;

  /**
   * Logo of the application
   *
   * @type {NavigationItemModel}
   * @memberof NavbarAssetsModel
   */
  logo: NavigationItemModel;
}

/**
 * Stub for `NavbarAssetsModel`
 * 
 * ```ts
 * const NAVBAR_ASSETS_STUB: NavbarAssetsModel = {
 *   trigger : { ...NAVIGATION_ITEM_STUB },
 *   logo    : { ...NAVIGATION_ITEM_STUB }
 * };
 * ```
*/
export const NAVBAR_ASSETS_STUB: NavbarAssetsModel = {
  trigger: { ...NAVIGATION_ITEM_STUB },
  logo: { ...NAVIGATION_ITEM_STUB }
};

