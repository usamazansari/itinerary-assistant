import { IconStub } from '../../imports/constants';
import type { NavigationItemModel } from '../../models';

// TODO: Move into layout library
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
