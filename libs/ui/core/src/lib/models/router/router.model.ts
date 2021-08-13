import { NavigationExtras } from '@angular/router';

/**
 *
 * Used in navigate function of the entire application
 *
 * ```ts
 * interface RouterPayloadModel {
 *   routes : string[];
 *   extras : NavigationExtras; // from @angular/router
 * }
 * ```
 *
 * @export
 * @interface RouterPayloadModel
 */
export interface RouterPayloadModel {
  /**
   * Array of routes to navigate
   *
   * @type {string[]}
   * @memberof RouterPayloadModel
   */
  routes: string[];

  /**
   * Navigation extras - from `@angular/router`
   *
   * @type {NavigationExtras}
   * @memberof RouterPayloadModel
   */
  extras: NavigationExtras;
}

// TODO: Move to constants
/**
 * Stub for `RouterPayloadModel`
 */
export const RouterPayloadStub: RouterPayloadModel = {
  routes: [],
  extras: {}
};
