import type { TenureModel, DayOverviewModel } from './trip.model';

// TODO: 🧐 Documentation Required
/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @interface TripOverviewModel
 */
export interface TripOverviewModel {
  tenure: TenureModel;
  days: DayOverviewModel[];
}
