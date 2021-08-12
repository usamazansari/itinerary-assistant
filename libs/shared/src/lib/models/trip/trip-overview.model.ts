import { TenureModel, DayOverviewModel } from './trip.model';

export interface TripOverviewModel {
  tenure: TenureModel;
  days: DayOverviewModel[];
}
