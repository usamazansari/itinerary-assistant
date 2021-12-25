import type { NavigationExtras } from '@angular/router';

/**
 * Router Paylod Model.
 *
 * ```ts
 * interface RouterPayload {
 *   routes : string[];
 *   extras : NavigationExtras; // from @angular/router
 * }
 * ```
 *
 * @export
 * @interface RouterPayload
 */
interface IRouterPayload {
  /**
   * Array of routes to navigate
   *
   * @type {string[]}
   * @memberof RouterPayload
   */
  routes: string[];

  /**
   * Navigation extras - from `@angular/router`
   *
   * @type {NavigationExtras}
   * @memberof RouterPayload
   */
  extras: NavigationExtras;
}

/**
 * Stub for Router Payload Model
 *
 * ```ts
 * const RouterPayloadStub: IRouterPayload = {
 *    routes : [],
 *    extras : {}
 * }
 * ```
 */
const RouterPayloadStub: IRouterPayload = {
  routes: [],
  extras: {}
};

/**
 * Router Paylod class.
 *
 * @export
 * @class RouterPayload
 * @implements {IRouterPayload}
 */
export class RouterPayload implements IRouterPayload {
  routes: string[];
  extras: NavigationExtras;

  /**
   * ### Router Paylod
   *
   * Creates an instance of RouterPayload. Used to navigate to a new route within the application.
   *
   * ```ts
   * const routerPayload = new RouterPayload({
   *   routes : [],
   *   extras : {}
   * });
   * ```
   *
   * @param {Partial<IRouterPayload>} [init=RouterPayloadStub]
   * @memberof RouterPayload
   */
  constructor(
    init: Partial<IRouterPayload> = RouterPayloadStub
  ) {
    this.routes = init.routes ?? RouterPayloadStub.routes;
    this.extras = init.extras ?? RouterPayloadStub.extras;
  }
}
