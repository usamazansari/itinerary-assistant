import { NavigationExtras } from '@angular/router';

/**
 * Used in navigate function of `*-core.service`
 * 
 * ```ts
 * interface AppRouterPayloadModel {
 *   routes : string[]
 *   extras : NavigationExtras
 * }
 * ```
 *
 * @export
 * @interface AppRouterPayloadModel
 */
export interface AppRouterPayloadModel {
  /**
   * Array of routes to navigate
   *
   * @type {string[]}
   * @memberof AppRouterPayloadModel
   */
  routes: string[];

  /**
   * Navigation extras
   *
   * @type {NavigationExtras}
   * @memberof AppRouterPayloadModel
   */
  extras: NavigationExtras;
}
