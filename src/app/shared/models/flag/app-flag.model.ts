/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @interface AppFlagModel
 */
export interface AppFlagModel {
  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {boolean}
   * @memberof AppFlagModel
   */
  progress: boolean;

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {boolean}
   * @memberof AppFlagModel
   */
  success: boolean;

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {boolean}
   * @memberof AppFlagModel
   */
  fail: boolean;
}

export const DEFAULT_APP_FLAG: AppFlagModel = {
  progress: false, success: false, fail: false
};
