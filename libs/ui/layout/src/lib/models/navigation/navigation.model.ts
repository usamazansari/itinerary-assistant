import { Icon } from '../../imports/models';

/**
 * Interface for Navigation Item
 *
 * ```ts
 * interface INavigationItem {
 *   label    : string;
 *   routes   : string[];
 *   icon     : IconModel;
 *   children : INavigationItem[];
 * }
 * ```
 *
 * @interface INavigationItem
 */
interface INavigationItem {
  /**
   * Navigation Item Label
   *
   * @type {(string)}
   * @memberof INavigationItem
   */
  label: string;

  /**
   * Navigation Item Routes
   *
   * @type {string[]}
   * @memberof INavigationItem
   */
  routes: string[];

  /**
   * Navigation Item Icon
   *
   * @type {Icon}
   * @memberof INavigationItem
   */
  icon: Icon;

  /**
   * Array of children Navigation items
   *
   * @type {INavigationItem[]}
   * @memberof INavigationItem
   */
  children: INavigationItem[];
}

/**
 * Stub for Navigation Item
 *
 * ```ts
 * const NavigationItemStub: INavigationItem = {
 *   label: '',
 *   routes: [],
 *   icon: new Icon(),
 *   children: []
 * }
 * ```
 */
const NavigationItemStub: INavigationItem = {
  label: '',
  routes: [],
  icon: new Icon(),
  children: []
};

export class NavigationItem implements INavigationItem {
  label: string;
  routes: string[];
  icon: Icon;
  children: INavigationItem[];

  /**
   * ### Navigation Item
   *
   * Creates an instance of NavigationItem.
   *
   * ```ts
   * const _NavigationItem: INavigationItem = new NavigationItem({
   *   label    : '',
   *   routes   : [],
   *   icon     : new Icon(),
   *   children : []
   * });
   * ```
   *
   * @param {INavigationItem} [init=NavigationItemStub]
   * @memberof NavigationItem
   */
  constructor(
    init: Partial<INavigationItem> = NavigationItemStub
  ) {
    this.label = init.label ?? NavigationItemStub.label;
    this.routes = init.routes ?? NavigationItemStub.routes;
    this.icon = init.icon ?? NavigationItemStub.icon;
    this.children = init.children ?? NavigationItemStub.children;
  }
}
