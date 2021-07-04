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
export interface RouterPayloadModel {
  /**
   * Array of routes to navigate
   *
   * @type {string[]}
   * @memberof AppRouterPayloadModel
   */
  routes: string[];

  /**
   * Navigation extras - from @angular/routing``
   *
   * @type {NavigationExtras}
   * @memberof AppRouterPayloadModel
   */
  extras: NavigationExtras;
}
