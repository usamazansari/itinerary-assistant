import { TenureModel, DayOverviewModel } from '../';

export interface TripOverviewModel {
  tenure: TenureModel;
  days: DayOverviewModel[];
}
