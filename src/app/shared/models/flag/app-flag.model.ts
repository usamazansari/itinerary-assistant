/**
 * TODO: :monocle_face: Documentation Required
 *
 * @export
 * @interface AppFlagModel
 */
export interface AppFlagModel {
  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {boolean}
   * @memberof AppFlagModel
   */
  progress: boolean;

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {boolean}
   * @memberof AppFlagModel
   */
  success: boolean;

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {boolean}
   * @memberof AppFlagModel
   */
  fail: boolean;
}

export const DEFAULT_APP_FLAG: AppFlagModel = {
  progress: false, success: false, fail: false
};
