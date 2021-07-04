import { IconModel, ICON_STUB } from '@shared/models/icon/app-icon.model';

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
export interface ButtonModel {

  /**
   * Label for the button
   *
   * @type {(string | null)}
   * @optional
   * @memberof AppButtonModel
   */
  label?: string | null;

  /**
   * Icon for the button
   *
   * @type {IconModel}
   * @optional
   * @memberof AppButtonModel
   */
  icon?: IconModel;

  /**
   * Disabled state of the button
   *
   * @type {boolean}
   * @optional
   * @memberof AppButtonModel
   */
  disabled: boolean;
}

/**
 * Stub for a `ButtonModel`
 * 
 * ```ts
 * const BUTTON_STUB: ButtonModel = {
 *   label    : null,
 *   icon     : { ...ICON_STUB },
 *   disabled : false
 * }
 * ```
 */
export const BUTTON_STUB: ButtonModel = {
  label: null, icon: { ...ICON_STUB }, disabled: false
};
