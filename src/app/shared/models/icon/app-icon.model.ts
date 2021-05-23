import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

/**
 * Interface for a `FontAwesome` icon definition
 * 
 * ```ts
 * interface AppFaIconModel {
 *   style : IconPrefix // from `fontawesome-common-types`
 *   name  : IconName   // from `fontawesome-common-types`
 * }
 * ```
 *
 * @export
 * @interface AppFaIconModel
 */
export interface AppFaIconModel {
  style: IconPrefix;
  name: IconName;
}

/**
 * Initializer for `AppFaIconModel`
 */
export const DEFAULT_FA_ICON: AppFaIconModel = {
  style: 'fas', name: 'info' // <- :no_entry: Probable Error - Cannot find icon `faInfo`
};
