/**
 * Interface to handle behavior of flags for basic time consuming operations
 *
 * ```ts
 * interface FlagModel {
 *   progress : boolean;
 *   success  : boolean;
 *   fail     : boolean;
 * }
 * ```
 * @export
 * @interface FlagModel
 */
export interface FlagModel {
  /**
   * Indicates progress of an activity
   * 
   * `true`  - activity is in progress
   * 
   * `false` - activity is not in progress: either completed or not yet begun
   *
   * @type {boolean}
   * @memberof FlagModel
   */
  progress: boolean;

  /**
   * Indicates if an activity has been successful
   * 
   * `true`  - activity is completed successfully
   * 
   * `false` - activity is not completed successfully: either in progress or failed
   *
   * @type {boolean}
   * @memberof FlagModel
   */
  success: boolean;

  /**
   * Indicates if an activity has been failed
   * 
   * `true`  - activity has been failed
   * 
   * `false` - activity is not failed: either in progress or successful
   *
   * @type {boolean}
   * @memberof FlagModel
   */
  fail: boolean;
}

/**
 * Stub for `FlagModel`
 * 
 * ```ts
 * const FLAG_STUB: FlagModel = {
 *   progress : false,
 *   success  : false,
 *   fail     : false
 * }
 * ```
 */
export const FLAG_STUB: FlagModel = {
  progress: false, success: false, fail: false
};
