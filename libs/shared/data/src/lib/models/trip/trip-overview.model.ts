import { TripTenure, DayOverview } from '.';

/**
 * Trip Overview Model.
 *
 * ```ts
 * interface ITripOverview {
 *   tenure : TripTenure;
 *   days   : DayOverview[];
 * }
 * ```
 *
 * @interface ITripOverview
 */
interface ITripOverview {
  /**
   * Tenure of a Trip.
   *
   * @type {TripTenure}
   * @memberof ITripOverview
   */
  tenure: TripTenure;

  /**
   * Days of a Trip.
   *
   * @type {DayOverview[]}
   * @memberof ITripOverview
   */
  days: DayOverview[];
}

/**
 * Stub for Trip Overview.
 *
 * ```ts
 * const TripOverviewStub: ITripOverview = {
 *   tenure : new TripTenure(),
 *   days   : []
 * }
 * ```
 */
const TripOverviewStub: ITripOverview = {
  tenure: new TripTenure(),
  days: []
};

/**
 * Trip Overview class.
 *
 * @export
 * @class TripOverview
 */
export class TripOverview {
  tenure: TripTenure;
  days: DayOverview[];

  /**
   * ### Trip Overview
   *
   * Creates an instance of TripOverview.
   *
   * ```ts
   * const tripOverview = new TripOverview({
   *   tenure : new TripTenure(),
   *   days   : []
   * });
   * ```
   * @param {Partial<ITripOverview>} [init={ ...TripOverviewStub }]
   * @memberof TripOverview
   */
  constructor(init: Partial<ITripOverview> = { ...TripOverviewStub }) {
    this.tenure = init.tenure ?? TripOverviewStub.tenure;
    this.days = init.days ?? TripOverviewStub.days;
  }
}
