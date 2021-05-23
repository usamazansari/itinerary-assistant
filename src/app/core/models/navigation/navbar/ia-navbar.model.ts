import { IaNavigationItemModel, DEFAULT_NAVIGATION_ITEM } from '@ia-core/models/navigation/ia-navigation-model';

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
export interface IaNavbarAssetsModel {
  /**
   * Trigger for the Sidenav
   *
   * @type {IaNavigationItemModel}
   * @memberof IaNavbarAssetsModel
   */
  trigger: IaNavigationItemModel;

  /**
   * Logo of the application
   *
   * @type {IaNavigationItemModel}
   * @memberof IaNavbarAssetsModel
   */
  logo: IaNavigationItemModel;
}

export const DEFAULT_IA_NAVBAR_ASSETS: IaNavbarAssetsModel = {
  trigger: { ...DEFAULT_NAVIGATION_ITEM },
  logo: { ...DEFAULT_NAVIGATION_ITEM }
};

