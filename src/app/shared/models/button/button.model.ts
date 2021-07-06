import { IconModel, ICON_STUB } from '@shared/models/icon/icon.model';

/**
 * Interface for a Button
 * 
 * ```ts
 * interface ButtonModel {
 *   label    : string | null;
 *   icon     : IconModel;
 *   disabled : boolean;
 * }
 * ```
 *
 * @export
 * @interface ButtonModel
 */
export interface ButtonModel {

  /**
   * Label for the button
   *
   * @type {(string | null)}
   * @optional
   * @memberof ButtonModel
   */
  label?: string | null;

  /**
   * Icon for the button
   *
   * @type {IconModel}
   * @optional
   * @memberof ButtonModel
   */
  icon?: IconModel;

  /**
   * Disabled state of the button
   *
   * @type {boolean}
   * @optional
   * @memberof ButtonModel
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
