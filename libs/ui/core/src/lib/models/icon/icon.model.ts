import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

// TODO: Move to ui/shared library
/**
 * Interface for a `FontAwesome` icon definition
 *
 * ```ts
 * interface IconModel {
 *   style : IconPrefix; // from `fontawesome-common-types`
 *   name  : IconName;   // from `fontawesome-common-types`
 * }
 * ```
 *
 * @export
 * @interface IconModel
 */
export interface IconModel {
  style: IconPrefix;
  name: IconName;
}

// TODO: Move to constants
/**
 * Stub for an `IconModel`
 *
 * ```ts
 * const IconStub: IconModel = {
 *   style : 'fas',
 *   name  : 'info'
 * }
 * ```
 */
export const IconStub: IconModel = {
  style: 'fas',
  name: 'info'
};
