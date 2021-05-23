import { AppFaIconModel, DEFAULT_FA_ICON } from '@shared/models/icon/app-icon.model';

/**
 * Interface for a Button
 * 
 * ```ts
 * interface AppButtonModel {
 *   label    : string | null
 *   icon     : AppFaIconModel
 *   disabled : boolean
 * }
 * ```
 *
 * @export
 * @interface AppButtonModel
 */
export interface AppButtonModel {

  /**
   * Label for the button
   *
   * @type {(string | null)}
   * @memberof AppButtonModel
   */
  label?: string | null;

  /**
   * Icon for the button
   *
   * @type {AppFaIconModel}
   * @memberof AppButtonModel
   */
  icon?: AppFaIconModel;

  /**
   * Disabled state of the button
   *
   * @type {boolean}
   * @memberof AppButtonModel
   */
  disabled: boolean;
}

/**
 * Initializer for `AppButtonModel`
 */
export const DEFAULT_APP_BUTTON: AppButtonModel = {
  label: null, icon: { ...DEFAULT_FA_ICON }, disabled: false
};
