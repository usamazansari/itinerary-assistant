import { MatSnackBarConfig } from '@angular/material/snack-bar';

/**
 * Snackbar Message Model.
 *
 * ```ts
 * interface ISnackbarMessage<SnackbarData = unknown> {
 *   message : string;
 *   action  : string;
 *   config? : MatSnackBarConfig<SnackbarData> | unknown | null;
 * }
 * ```
 *
 * @interface ISnackbarMessage
 * @template SnackbarData
 */
interface ISnackbarMessage<SnackbarData = unknown> {
  message: string;
  action: string;
  config?: MatSnackBarConfig<SnackbarData> | unknown | null;
}

/**
 * Stub for Snackbar Message.
 *
 * ```ts
 * const SnackbarMessageStub: ISnackbarMessage<unknown> = {
 *   message: '',
 *   action: '',
 *   config: null
 * }
 * ```
 */
const SnackbarMessageStub: ISnackbarMessage<unknown> = {
  message: '',
  action: '',
  config: null
};

/**
 * Snackbar Message class.
 *
 * @export
 * @class SnackbarMessage
 * @implements {ISnackbarMessage<SnackbarData>}
 * @template SnackbarData
 */
export class SnackbarMessage<SnackbarData = unknown>
  implements ISnackbarMessage<SnackbarData>
{
  message: string;
  action: string;
  config?: MatSnackBarConfig<SnackbarData> | unknown | null;

  /**
   * ### Snackbar Message
   *
   *  Creates an instance of SnackbarMessage.
   *
   * ```ts
   * const _SnackbarMessage: ISnackbarMessage<unknown> = new SnackbarMessage({
   *   message : '',
   *   action  : '',
   *   config  : null
   * });
   * ```
   *
   * @param {Partial<ISnackbarMessage>} [SnackbarMessageStub]
   * @memberof SnackbarMessage
   */
  constructor({
    message = SnackbarMessageStub.message,
    action = SnackbarMessageStub.action,
    config = SnackbarMessageStub.config
  }: Partial<ISnackbarMessage>) {
    this.message = message;
    this.action = action;
    this.config = config;
  }
}
