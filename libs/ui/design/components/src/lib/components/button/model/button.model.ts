import { Icon } from '../imports';

/**
 * ### Button Style Enum
 *
 * Enum for the different button styles.
 * - `default`
 * - `flat`
 * - `raised`
 * - `stroked`
 *
 * @enum {number}
 */
enum ButtonStyle {
  default = 'button',
  flat = 'flat',
  raised = 'raised',
  stroked = 'stroked'
}

/**
 * ### Button Type Enum
 *
 * Enum for the different button types.
 * - `button`
 * - `submit`
 *
 * @enum {number}
 */
enum ButtonType {
  button = 'button',
  submit = 'submit'
}

/**
 * ### Button Model
 *
 * ```ts
 * interface IButton {
 *   icon  : Icon;
 *   text  : string;
 *   style : ButtonStyle;
 *   type  : ButtonType;
 * }
 * ```
 *
 * @interface IButton
 */
interface IButton {
  /**
   * Icon to be displayed in the button.
   *
   * @type {Icon}
   * @memberof IButton
   */
  icon: Icon;

  /**
   * Text in the button.
   *
   * @type {string}
   * @memberof IButton
   */
  text: string;

  /**
   * Style of the button.
   *
   * @type {ButtonStyle}
   * @memberof IButton
   */
  style: ButtonStyle;

  /**
   * Type of the button.
   *
   * @type {ButtonType}
   * @memberof IButton
   */
  type: ButtonType;
}

/**
 * Stub for Button
 * ```ts
 * const ButtonStub: IButton = {
 *   icon  : new Icon({}),
 *   text  : '',
 *   style : ButtonStyle.default,
 *   type  : ButtonType.button
 * }
 * ```
 */
const ButtonStub: IButton = {
  icon: new Icon({}),
  text: '',
  style: ButtonStyle.default,
  type: ButtonType.button
};

/**
 * Button class.
 *
 * @export
 * @class Button
 * @implements {IButton}
 */
export class Button implements IButton {
  icon: Icon;
  text: string;
  style: ButtonStyle;
  type: ButtonType;

  /**
   * ### Button
   *
   * Atomic button.
   *
   * ```ts
   * const button = new Button({
   *   icon  : new Icon({}),
   *   text  : '',
   *   style : ButtonStyle.default,
   *   type  : ButtonType.button
   * });
   * ```
   *
   * Creates an instance of Button.
   *
   * @param {Partial<IButton>} [{
   *     icon = ButtonStub.icon,
   *     text = ButtonStub.text,
   *     style = ButtonStub.style,
   *     type = ButtonStub.type
   *   }=ButtonStub]
   * @memberof Button
   */
  constructor({
    icon = ButtonStub.icon,
    text = ButtonStub.text,
    style = ButtonStub.style,
    type = ButtonStub.type
  }: Partial<IButton>) {
    this.icon = icon;
    this.text = text;
    this.style = style;
    this.type = type;
  }
}
