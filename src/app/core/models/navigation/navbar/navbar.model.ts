import { NavigationItemModel, NAVIGATION_ITEM_STUB } from '@core/models/navigation/navigation-model';

/**
 * For use in `IaNavbarComponent`
 * 
 * ```ts
 * interface IaNavbarAssetsModel {
 *   trigger : IaCoreIconModel
 *   logo    : IaNavigationItemModel
 * }
 * ```
 *
 * @export
 * @interface IaNavbarAssetsModel
 */
export interface NavbarAssetsModel {
  /**
   * Trigger for the Sidenav
   *
   * @type {NavigationItemModel}
   * @memberof IaNavbarAssetsModel
   */
  trigger: NavigationItemModel;

  /**
   * Logo of the application
   *
   * @type {NavigationItemModel}
   * @memberof IaNavbarAssetsModel
   */
  logo: NavigationItemModel;
}

export const DEFAULT_IA_NAVBAR_ASSETS: NavbarAssetsModel = {
  trigger: { ...NAVIGATION_ITEM_STUB },
  logo: { ...NAVIGATION_ITEM_STUB }
};

