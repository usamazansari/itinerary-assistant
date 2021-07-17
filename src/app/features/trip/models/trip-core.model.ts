import { FlagModel, FLAG_STUB } from '@shared/models/flag/flag.model';

/**
 * Flag in `home` module.
 *
 * @export
 * @interface HomeFlagModel
 * @extends {FlagModel}
 */
export interface TripFlagModel extends FlagModel { }

/**
  * Stub for `HomeFlagModel`.
  * 
  * ```ts
  * const FLAG_STUB: FlagModel = {
  *   progress : false,
  *   success  : false,
  *   fail     : false
  * }
  * ```
  */
export const TRIP_FLAG_STUB: TripFlagModel = { ...FLAG_STUB };
