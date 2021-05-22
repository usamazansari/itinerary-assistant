import { NavigationExtras } from '@angular/router';

/**
 * Used in navigate function of `*-core.service`
 *
 * @export
 * @interface AppRouterPayloadModel
 */
export interface AppRouterPayloadModel {
  routes: string[];
  extras: NavigationExtras;
}
